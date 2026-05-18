import { prisma } from "./prisma";
import type { PartnerResortItem } from "@/components/site/types";

function parseActivities(value: unknown): string[] | null {
  if (value == null) return null;
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  return null;
}

export async function getActiveResorts(): Promise<PartnerResortItem[]> {
  const rows = await prisma.partnerResort.findMany({
    where: { status: "active" },
    orderBy: { name: "asc" },
  });

  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    location: row.location,
    country: row.country,
    description: row.description,
    image: row.image,
    rating: row.rating,
    activities: parseActivities(row.activities),
  }));
}
