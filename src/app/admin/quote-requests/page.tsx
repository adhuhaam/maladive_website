import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminTable, AdminTableRow, AdminTableCell } from "@/components/admin/AdminTable";

export const dynamic = "force-dynamic";

export default async function AdminQuoteRequestsPage() {
  const quotes = await prisma.quoteRequest.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <AdminPageHeader
        title="Quote Requests"
        description="Shop quote submissions from customers (also sent to Telegram when configured)."
      />

      {quotes.length === 0 ? (
        <p className="text-slate-400 text-sm text-center py-16 bg-white rounded-xl border">No quote requests yet.</p>
      ) : (
        <AdminTable headers={["Customer", "Contact", "Date", "Status", ""]}>
          {quotes.map((q) => (
            <AdminTableRow key={q.id}>
              <AdminTableCell className="font-medium text-slate-900">{q.name}</AdminTableCell>
              <AdminTableCell className="text-slate-500">{q.email}</AdminTableCell>
              <AdminTableCell>{new Date(q.createdAt).toLocaleDateString()}</AdminTableCell>
              <AdminTableCell>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-600 capitalize">
                  {q.status}
                </span>
              </AdminTableCell>
              <AdminTableCell>
                <Link href={`/admin/quote-requests/${q.id}`} className="text-cyan-600 font-medium hover:underline">
                  View
                </Link>
              </AdminTableCell>
            </AdminTableRow>
          ))}
        </AdminTable>
      )}
    </div>
  );
}
