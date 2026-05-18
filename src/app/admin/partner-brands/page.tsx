import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deletePartnerBrand } from "@/lib/admin-actions";

export const dynamic = "force-dynamic";

export default async function AdminBrandsPage() {
  const brands = await prisma.partnerBrand.findMany({ orderBy: { sortOrder: "asc" } });
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Partner Brands</h1>
        <Link href="/admin/partner-brands/new" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Add Brand
        </Link>
      </div>
      <ul className="bg-white rounded-lg shadow divide-y">
        {brands.map((b) => (
          <li key={b.id} className="px-4 py-3 flex justify-between items-center gap-4">
            <div>
              <span className="font-medium">{b.name}</span>
              {!b.isActive && <span className="text-xs text-amber-600 ml-2">(hidden)</span>}
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href={`/admin/partner-brands/${b.id}/edit`} className="text-cyan-600 text-sm">
                Edit
              </Link>
              <form action={deletePartnerBrand.bind(null, b.id)}>
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
