/**
 * Vercel + Neon often inject POSTGRES_* vars instead of DATABASE_URL.
 * Prisma requires DATABASE_URL — map aliases before PrismaClient loads.
 */
export function resolveDatabaseUrl(): string | undefined {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;

  const fromNeon =
    process.env.POSTGRES_PRISMA_URL ??
    process.env.POSTGRES_URL ??
    process.env.NEON_DATABASE_URL;

  if (fromNeon) {
    process.env.DATABASE_URL = fromNeon;
    return fromNeon;
  }

  return undefined;
}

resolveDatabaseUrl();
