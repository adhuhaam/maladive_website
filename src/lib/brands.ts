import { prisma } from "./prisma";

export type PartnerBrandItem = {
  id: number;
  name: string;
  logoUrl: string | null;
  initials: string | null;
};

export async function getActiveBrands(): Promise<PartnerBrandItem[]> {
  return prisma.partnerBrand.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
    select: { id: true, name: true, logoUrl: true, initials: true },
  });
}
