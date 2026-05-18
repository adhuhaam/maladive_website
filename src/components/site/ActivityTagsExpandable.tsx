"use client";

import { useState } from "react";

const ICONS: Record<string, React.ReactNode> = {
  watersports: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  ),
  diving: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  ),
  excursions: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
};

export function ActivityTagsExpandable({
  title,
  items,
  variant = "watersports",
}: {
  title: string;
  items: string[];
  variant?: "watersports" | "diving" | "excursions";
}) {
  const key = variant;
  const [open, setOpen] = useState(false);
  const visible = open ? items : items.slice(0, 6);
  const more = items.length - 6;

  if (items.length === 0) return null;

  return (
    <div className="mb-5">
      <h4 className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
        <span className="text-cyan-600">{ICONS[key] ?? ICONS.watersports}</span>
        {title}
      </h4>
      <ul className="flex flex-wrap gap-2">
        {visible.map((a) => (
          <li
            key={a}
            className="text-xs font-medium bg-[#e6faf9] text-[#0891b2] px-3 py-1.5 border border-[#b8f0ec]"
          >
            {a}
          </li>
        ))}
      </ul>
      {more > 0 && (
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 text-xs text-cyan-600 font-semibold mt-2 hover:text-cyan-700"
        >
          {open ? "Show less" : `Show More (${more} more)`}
          <svg
            className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      )}
    </div>
  );
}
