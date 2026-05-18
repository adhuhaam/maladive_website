import { NextResponse } from "next/server";
import { createSession, verifyCredentials } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const username = String(body.username ?? "").trim();
  const password = String(body.password ?? "");

  if (!username || !password) {
    return NextResponse.json({ error: "Username and password required" }, { status: 400 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      {
        error: "DATABASE_URL is not set on the server. Add it in Vercel → Settings → Environment Variables.",
        code: "DATABASE_NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  try {
    const user = await verifyCredentials(username, password);
    if (!user) {
      const adminExists = await prisma.user.findUnique({ where: { username: "admin" } });
      if (!adminExists) {
        return NextResponse.json(
          {
            error:
              "No admin user in the database yet. Run: npx prisma db push && npm run db:seed (with your production DATABASE_URL).",
            code: "NOT_SEEDED",
          },
          { status: 401 },
        );
      }
      return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
    }

    if (!process.env.AUTH_SECRET || process.env.AUTH_SECRET === "change-me-to-a-long-random-string") {
      return NextResponse.json(
        {
          error: "AUTH_SECRET is missing or still the placeholder. Set a random secret in Vercel environment variables.",
          code: "AUTH_NOT_CONFIGURED",
        },
        { status: 503 },
      );
    }

    await createSession(user);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Login error:", e);
    return NextResponse.json(
      {
        error:
          "Could not reach the database. Check DATABASE_URL and that you ran npx prisma db push.",
        code: "DATABASE_ERROR",
      },
      { status: 503 },
    );
  }
}
