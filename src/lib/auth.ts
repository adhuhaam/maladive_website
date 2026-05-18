import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

const SESSION_COOKIE = "maladive_admin_session";
const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET ?? "dev-secret-change-in-production",
);

export type SessionUser = {
  id: number;
  username: string;
  name: string;
};

export async function verifyCredentials(username: string, password: string) {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return null;
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return null;
  return { id: user.id, username: user.username, name: user.name };
}

export async function createSession(user: SessionUser) {
  const token = await new SignJWT({ sub: String(user.id), username: user.username, name: user.name })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secret);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, secret);
    return {
      id: Number(payload.sub),
      username: String(payload.username),
      name: String(payload.name),
    };
  } catch {
    return null;
  }
}

export async function requireSession() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  return session;
}
