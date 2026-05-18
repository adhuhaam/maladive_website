import { prisma } from "./prisma";
import type { ShopProductItem } from "@/components/site/types";

function toPrice(v: { toNumber?: () => number } | number): number {
  if (typeof v === "number") return v;
  return v.toNumber?.() ?? Number(v);
}

export async function getShopProducts(): Promise<ShopProductItem[]> {
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
}

export async function getShopCategories() {
  return prisma.shopCategory.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}
