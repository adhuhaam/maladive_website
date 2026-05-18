import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteShopCategory } from "@/lib/admin-actions";

export const dynamic = "force-dynamic";

export default async function AdminShopCategoriesPage() {
  const categories = await prisma.shopCategory.findMany({ orderBy: { sortOrder: "asc" } });
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Shop Categories</h1>
        <Link href="/admin/shop-categories/new" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Add Category
        </Link>
      </div>
      <ul className="bg-white rounded-lg shadow divide-y">
        {categories.map((c) => (
          <li key={c.id} className="px-4 py-3 flex justify-between items-center">
            <span>
              {c.name} {!c.isActive && <span className="text-xs text-amber-600">(inactive)</span>}
            </span>
            <div className="flex gap-3">
              <Link href={`/admin/shop-categories/${c.id}/edit`} className="text-cyan-600 text-sm">
                Edit
              </Link>
              <form action={deleteShopCategory.bind(null, c.id)}>
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
