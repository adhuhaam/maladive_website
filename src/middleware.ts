import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SESSION_COOKIE = "maladive_admin_session";
const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET ?? "dev-secret-change-in-production",
);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
