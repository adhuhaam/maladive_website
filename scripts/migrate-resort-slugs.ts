/**
 * Run before `npx prisma db push` when upgrading DBs that have partner_resorts without slug.
 * Usage: npx tsx scripts/migrate-resort-slugs.ts && npx prisma db push
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function slugify(name: string, id: number) {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return base ? `${base}-${id}` : `resort-${id}`;
}

async function main() {
  await prisma.$executeRawUnsafe(`
    ALTER TABLE partner_resorts
    ADD COLUMN IF NOT EXISTS slug TEXT;
  `);

  const rows = await prisma.$queryRaw<{ id: number; name: string; slug: string | null }[]>`
    SELECT id, name, slug FROM partner_resorts
  `;

  for (const row of rows) {
    if (!row.slug) {
      const slug = slugify(row.name, row.id);
      await prisma.$executeRaw`UPDATE partner_resorts SET slug = ${slug} WHERE id = ${row.id}`;
    }
  }

  console.log(`Backfilled slugs for ${rows.filter((r) => !r.slug).length} resort(s).`);
  console.log("Now run: npx prisma db push && npm run db:seed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
