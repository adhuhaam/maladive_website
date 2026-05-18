import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deletePartnerBrand } from "@/lib/admin-actions";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminTable, AdminTableRow, AdminTableCell } from "@/components/admin/AdminTable";

export const dynamic = "force-dynamic";

export default async function AdminBrandsPage() {
  const brands = await prisma.partnerBrand.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div>
      <AdminPageHeader
        title="Partner Brands"
        description="Brands shown in the homepage carousel."
        action={{ label: "Add brand", href: "/admin/partner-brands/new" }}
      />

      {brands.length === 0 ? (
        <p className="text-slate-400 text-sm text-center py-16 bg-white rounded-xl border">No brands yet.</p>
      ) : (
        <AdminTable headers={["Name", "Initials", "Status", "Actions"]}>
          {brands.map((b) => (
            <AdminTableRow key={b.id}>
              <AdminTableCell className="font-medium text-slate-900">{b.name}</AdminTableCell>
              <AdminTableCell>{b.initials ?? "—"}</AdminTableCell>
              <AdminTableCell>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    b.isActive ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {b.isActive ? "Visible" : "Hidden"}
                </span>
              </AdminTableCell>
              <AdminTableCell>
                <div className="flex gap-3">
                  <Link href={`/admin/partner-brands/${b.id}/edit`} className="text-cyan-600 font-medium hover:underline">
                    Edit
                  </Link>
                  <form action={deletePartnerBrand.bind(null, b.id)}>
                    <button type="submit" className="text-red-600 font-medium hover:underline">
                      Delete
                    </button>
                  </form>
                </div>
              </AdminTableCell>
            </AdminTableRow>
          ))}
        </AdminTable>
      )}
    </div>
  );
}
