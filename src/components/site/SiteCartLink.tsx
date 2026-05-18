"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function SiteCartLink({ compact = false }: { compact?: boolean }) {
  const { count } = useCart();

  return (
    <Link
      href="/shop/quote"
      className={`relative inline-flex items-center justify-center text-gray-700 hover:text-[#06e6da] transition-colors ${
        compact ? "h-10 w-10" : "gap-2 px-3 py-2"
      }`}
      aria-label={`Quote cart${count > 0 ? `, ${count} items` : ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
      {!compact && <span className="text-xs font-bold uppercase tracking-wide hidden sm:inline">Quote</span>}
      {count > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#06e6da] text-white text-[10px] font-bold px-1">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
