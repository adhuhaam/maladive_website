import { ShopClient } from "@/components/shop/ShopClient";
import { getShopCategories, getShopProducts } from "@/lib/shop";

export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const [products, categories] = await Promise.all([getShopProducts(), getShopCategories()]);
  return <ShopClient products={products} categories={categories} />;
}
