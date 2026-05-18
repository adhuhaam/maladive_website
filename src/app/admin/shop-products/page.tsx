import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteShopProduct } from "@/lib/admin-actions";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const products = await prisma.shopProduct.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Shop Products</h1>
        <Link href="/admin/shop-products/new" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Add Product
        </Link>
      </div>
      <ul className="bg-white rounded-lg shadow divide-y">
        {products.map((p) => (
          <li key={p.id} className="px-4 py-3 flex justify-between items-center gap-4">
            <span>
              <span className="font-medium">{p.name}</span>
              <span className="text-gray-500 text-sm ml-2">
                — {p.category.name} — ${Number(p.price)}
              </span>
            </span>
            <div className="flex gap-3 shrink-0">
              <Link href={`/admin/shop-products/${p.id}/edit`} className="text-cyan-600 text-sm">
                Edit
              </Link>
              <form action={deleteShopProduct.bind(null, p.id)}>
                <button type="submit" className="text-red-600 text-sm">
                  Delete
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
