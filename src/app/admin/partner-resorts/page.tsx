import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deletePartnerResort } from "@/lib/admin-actions";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminTable, AdminTableRow, AdminTableCell } from "@/components/admin/AdminTable";

export const dynamic = "force-dynamic";

export default async function AdminResortsPage() {
  const resorts = await prisma.partnerResort.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <AdminPageHeader
        title="Partner Resorts"
        description="Manage resort listings shown on the public /resorts page."
        action={{ label: "Add resort", href: "/admin/partner-resorts/new" }}
      />

      {resorts.length === 0 ? (
        <p className="text-slate-400 text-sm text-center py-16 bg-white rounded-xl border">No resorts yet.</p>
      ) : (
        <AdminTable headers={["Name", "Location", "Slug", "Actions"]}>
          {resorts.map((r) => (
            <AdminTableRow key={r.id}>
              <AdminTableCell className="font-medium text-slate-900">{r.name}</AdminTableCell>
              <AdminTableCell>{r.location}</AdminTableCell>
              <AdminTableCell className="text-slate-400 text-xs font-mono">/{r.slug}</AdminTableCell>
              <AdminTableCell>
                <div className="flex gap-3">
                  <Link href={`/admin/partner-resorts/${r.id}/edit`} className="text-cyan-600 font-medium hover:underline">
                    Edit
                  </Link>
                  <form action={deletePartnerResort.bind(null, r.id)}>
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
