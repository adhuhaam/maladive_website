import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateQuoteRequestStatus } from "@/lib/admin-actions";
import { inputClass } from "@/components/admin/admin-form";

export const dynamic = "force-dynamic";

type QuoteItem = { name: string; sku: string; quantity: number; price: number };

export default async function QuoteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quote = await prisma.quoteRequest.findUnique({ where: { id: parseInt(id, 10) } });
  if (!quote) notFound();

  const items = quote.items as QuoteItem[];
  const update = updateQuoteRequestStatus.bind(null, quote.id);

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-2">Quote #{quote.id}</h1>
      <p className="text-gray-600 mb-6">
        {quote.name} · {quote.email} · {quote.phone}
        {quote.company ? ` · ${quote.company}` : ""}
      </p>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="font-semibold mb-3">Items</h2>
        <ul className="divide-y text-sm">
          {items.map((item, i) => (
            <li key={i} className="py-2 flex justify-between">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="text-right font-bold mt-4 border-t pt-3">
          Total: ${items.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(2)}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Telegram: {quote.telegramSent ? "sent" : "not sent (check env vars)"}
        </p>
      </div>

      <form action={update} className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select name="status" defaultValue={quote.status} className={inputClass}>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="quoted">Quoted</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <textarea
          name="adminNotes"
          defaultValue={quote.adminNotes ?? ""}
          placeholder="Admin notes"
          rows={4}
          className={inputClass}
        />
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Update
        </button>
      </form>
    </div>
  );
}
