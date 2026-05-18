import { unstable_cache } from "next/cache";
import { prisma } from "./prisma";
import { SITE_REVALIDATE } from "./cache";
import type { ShopProductItem } from "@/components/site/types";

function toPrice(v: { toNumber?: () => number } | number): number {
  if (typeof v === "number") return v;
  return v.toNumber?.() ?? Number(v);
}

export const getShopProducts = unstable_cache(
  async (): Promise<ShopProductItem[]> => {
    const rows = await prisma.shopProduct.findMany({
      where: { status: "active", category: { isActive: true } },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: { category: true },
    });

    return rows.map((p) => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      description: p.description,
      price: toPrice(p.price),
      salePrice: p.salePrice ? toPrice(p.salePrice) : null,
      sku: p.sku,
      stockQuantity: p.stockQuantity,
      image: p.image,
      brand: p.brand,
      categorySlug: p.category.slug,
      categoryName: p.category.name,
    }));
  },
  ["shop-products"],
  { revalidate: SITE_REVALIDATE },
);

export const getShopCategories = unstable_cache(
  async () =>
    prisma.shopCategory.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" },
    }),
  ["shop-categories"],
  { revalidate: SITE_REVALIDATE },
);
