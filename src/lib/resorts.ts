import { prisma } from "./prisma";
import type { PartnerResortItem } from "@/components/site/types";

function parseStringArray(value: unknown): string[] | null {
  if (value == null) return null;
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  return null;
}

function mapResort(row: {
  id: number;
  slug: string;
  name: string;
  location: string;
  country: string;
  description: string;
  image: string | null;
  gallery: unknown;
  rating: string;
  reviewScore: string | null;
  reviewCount: number | null;
  priceMin: { toNumber?: () => number } | number | null;
  priceMax: { toNumber?: () => number } | number | null;
  priceTier: string | null;
  partnerSince: string | null;
  activities: unknown;
  watersportsActivities: unknown;
  divingActivities: unknown;
  excursionActivities: unknown;
  website: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  established: string | null;
  totalRooms: string | null;
  checkIn: string | null;
  checkOut: string | null;
  awards: unknown;
}): PartnerResortItem {
  const toNum = (v: { toNumber?: () => number } | number | null) => {
    if (v == null) return null;
    if (typeof v === "number") return v;
    return v.toNumber?.() ?? Number(v);
  };

  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    location: row.location,
    country: row.country,
    description: row.description,
    image: row.image,
    gallery: parseStringArray(row.gallery),
    rating: row.rating,
    reviewScore: row.reviewScore,
    reviewCount: row.reviewCount,
    priceMin: toNum(row.priceMin),
    priceMax: toNum(row.priceMax),
    priceTier: row.priceTier,
    partnerSince: row.partnerSince,
    activities: parseStringArray(row.activities),
    watersportsActivities: parseStringArray(row.watersportsActivities),
    divingActivities: parseStringArray(row.divingActivities),
    excursionActivities: parseStringArray(row.excursionActivities),
    website: row.website,
    contactEmail: row.contactEmail,
    contactPhone: row.contactPhone,
    established: row.established,
    totalRooms: row.totalRooms,
    checkIn: row.checkIn,
    checkOut: row.checkOut,
    awards: parseStringArray(row.awards),
  };
}

export async function getActiveResorts(): Promise<PartnerResortItem[]> {
  const rows = await prisma.partnerResort.findMany({
    where: { status: "active" },
    orderBy: { name: "asc" },
  });
  return rows.map(mapResort);
}

export async function getResortBySlug(slug: string): Promise<PartnerResortItem | null> {
  const row = await prisma.partnerResort.findFirst({
    where: { slug, status: "active" },
  });
  return row ? mapResort(row) : null;
}
