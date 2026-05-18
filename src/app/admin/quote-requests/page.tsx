import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminQuoteRequestsPage() {
  const quotes = await prisma.quoteRequest.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Quote Requests</h1>
      <ul className="bg-white rounded-lg shadow divide-y">
        {quotes.length === 0 && (
          <li className="px-4 py-6 text-gray-500 text-sm">No quote requests yet.</li>
        )}
        {quotes.map((q) => (
          <li key={q.id} className="px-4 py-3 flex justify-between items-center">
            <div>
              <Link href={`/admin/quote-requests/${q.id}`} className="font-medium text-cyan-700 hover:underline">
                {q.name}
              </Link>
              <p className="text-sm text-gray-500">
                {q.email} · {new Date(q.createdAt).toLocaleDateString()} · {q.status}
                {q.telegramSent ? " · Telegram sent" : ""}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
