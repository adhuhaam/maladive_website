import { ShopClient } from "@/components/shop/ShopClient";
import { getShopProducts } from "@/lib/shop";

export const revalidate = 60;

export default async function ShopPage() {
  const products = await getShopProducts();
  return <ShopClient products={products} />;
}
