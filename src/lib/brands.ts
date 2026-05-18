import { unstable_cache } from "next/cache";
import { prisma } from "./prisma";
import { SITE_REVALIDATE } from "./cache";

export type PartnerBrandItem = {
  id: number;
  name: string;
  logoUrl: string | null;
  initials: string | null;
};

export const getActiveBrands = unstable_cache(
  async (): Promise<PartnerBrandItem[]> =>
    prisma.partnerBrand.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" },
      select: { id: true, name: true, logoUrl: true, initials: true },
    }),
  ["active-brands"],
  { revalidate: SITE_REVALIDATE },
);
