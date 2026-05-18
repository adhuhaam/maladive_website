import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const products = await prisma.shopProduct.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Shop Products</h1>
      <ul className="bg-white rounded-lg shadow divide-y">
        {products.map((p) => (
          <li key={p.id} className="px-4 py-3">
            <span className="font-medium">{p.name}</span>
            <span className="text-gray-500 text-sm ml-2">— {p.category.name} — ${Number(p.price)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
