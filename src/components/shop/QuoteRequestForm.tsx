"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { submitQuoteRequest } from "@/lib/actions";

export function QuoteRequestForm() {
  const { items, clearCart, updateQuantity, removeItem } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "1";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [telegramNote, setTelegramNote] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (items.length === 0) {
      setError("Your quote cart is empty. Add products from the shop first.");
      return;
    }
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    try {
      const result = await submitQuoteRequest({
        name: String(form.get("name")),
        email: String(form.get("email")),
        phone: String(form.get("phone")),
        company: form.get("company") ? String(form.get("company")) : undefined,
        items: items.map((l) => ({ productId: l.product.id, quantity: l.quantity })),
      });
      clearCart();
      setTelegramNote(
        result.telegramSent
          ? "We sent your request to our team via Telegram."
          : "Your request was saved. (Telegram is not configured yet — add TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID on Vercel.)",
      );
      router.push("/shop/quote?sent=1");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (items.length === 0 && sent) {
    return (
      <div className="max-w-lg mx-auto text-center py-16 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Quote request sent</h1>
        <p className="text-gray-600 mb-2">
          {telegramNote || "Thank you — we will contact you shortly."}
        </p>
        <Link href="/shop" className="text-cyan-600 font-semibold hover:underline">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 font-overpass uppercase mb-2">Request a quote</h1>
      <p className="text-gray-600 mb-8">Review your items and send us your details. We will respond with pricing.</p>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="bg-white border border-gray-100 shadow-sm p-6">
          <h2 className="font-bold text-sm uppercase tracking-wide mb-4">Your items</h2>
          <ul className="space-y-4 divide-y divide-gray-100">
            {items.map((line) => {
              const price = line.product.salePrice ?? line.product.price;
              return (
                <li key={line.product.id} className="pt-4 first:pt-0 flex gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{line.product.name}</p>
                    <p className="text-sm text-gray-500">{line.product.sku}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        className="w-8 h-8 border border-gray-200"
                        onClick={() => updateQuantity(line.product.id, line.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="w-8 text-center">{line.quantity}</span>
                      <button
                        type="button"
                        className="w-8 h-8 border border-gray-200"
                        onClick={() => updateQuantity(line.product.id, line.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="text-red-600 text-sm ml-2"
                        onClick={() => removeItem(line.product.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-sm font-medium mt-1">${(price * line.quantity).toFixed(2)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="text-right font-bold text-lg mt-6 border-t pt-4">
            Total: $
            {items
              .reduce(
                (s, l) => s + (l.product.salePrice ?? l.product.price) * l.quantity,
                0,
              )
              .toFixed(2)}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-100 shadow-sm p-6 space-y-4">
          {error && <p className="text-red-600 text-sm bg-red-50 p-3 rounded">{error}</p>}
          <div>
            <label className="block text-sm font-medium mb-1">Full name *</label>
            <input name="name" required className="w-full border border-gray-200 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input name="email" type="email" required className="w-full border border-gray-200 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <input name="phone" type="tel" required className="w-full border border-gray-200 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company name</label>
            <input name="company" className="w-full border border-gray-200 px-3 py-2" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-cyan-600 text-white font-bold uppercase tracking-wide hover:bg-cyan-700 disabled:opacity-50"
          >
            {loading ? "Sending…" : "Submit quote request"}
          </button>
          <Link href="/shop" className="block text-center text-sm text-cyan-600 hover:underline">
            ← Continue shopping
          </Link>
        </form>
      </div>
    </div>
  );
}
