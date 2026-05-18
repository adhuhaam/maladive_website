import { ShopPageContent } from "@/components/site/pages/ShopPageContent";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const categories = await prisma.shopCategory.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
    include: {
      products: {
        where: { status: "active" },
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  return <ShopPageContent categories={categories} />;
}
