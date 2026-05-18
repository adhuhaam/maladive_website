import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deletePartnerResort } from "@/lib/admin-actions";

export const dynamic = "force-dynamic";

export default async function AdminResortsPage() {
  const resorts = await prisma.partnerResort.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Partner Resorts</h1>
        <Link href="/admin/partner-resorts/new" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Add Resort
        </Link>
      </div>
      <ul className="bg-white rounded-lg shadow divide-y">
        {resorts.map((r) => (
          <li key={r.id} className="px-4 py-3 flex justify-between items-center gap-4">
            <span>
              {r.name} — {r.location}
              <span className="text-gray-400 text-xs ml-2">/{r.slug}</span>
            </span>
            <div className="flex gap-3 shrink-0">
              <Link href={`/admin/partner-resorts/${r.id}/edit`} className="text-cyan-600 text-sm">
                Edit
              </Link>
              <form action={deletePartnerResort.bind(null, r.id)}>
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
