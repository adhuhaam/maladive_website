import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminCategoriesPage() {
  const categories = await prisma.shopCategory.findMany({ orderBy: { sortOrder: "asc" } });
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Shop Categories</h1>
      <ul className="bg-white rounded-lg shadow divide-y">
        {categories.map((c) => (
          <li key={c.id} className="px-4 py-3 flex justify-between">
            <span>{c.name}</span>
            <span className="text-sm text-gray-500">{c.isActive ? "Active" : "Inactive"}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-500 mt-4">Use Prisma Studio or seed script to add more categories for now.</p>
    </div>
  );
}
