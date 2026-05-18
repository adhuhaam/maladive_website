"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { ShopProductItem } from "@/components/site/types";

const NAVY = "#0f2744";
const CYAN = "#06e6da";

export function ShopClient({
  products,
  categories,
}: {
  products: ShopProductItem[];
  categories: { id: number; name: string; slug: string }[];
}) {
  const { addItem, count } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [priceMax, setPriceMax] = useState(500);
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);
  const perPage = 12;

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (category !== "all" && p.categorySlug !== category) return false;
      const price = p.salePrice ?? p.price;
      if (price > priceMax) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
    if (sort === "price-desc") list = [...list].sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [products, category, priceMax, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);
  const rangeStart = filtered.length === 0 ? 0 : (page - 1) * perPage + 1;
  const rangeEnd = Math.min(page * perPage, filtered.length);

  return (
    <>
      <section className="text-white py-14 md:py-16" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-overpass uppercase tracking-wide">
            Equipment Shop
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Products — main column (left) */}
            <div className="flex-1 min-w-0 order-2 lg:order-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
                <p className="text-sm text-gray-600">
                  Showing {rangeStart}-{rangeEnd} of {filtered.length} results
                </p>
                <div className="flex items-center gap-3">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="text-sm border border-gray-200 px-3 py-2 bg-white text-gray-700 min-w-[160px]"
                  >
                    <option value="default">Default sorting</option>
                    <option value="name">Sort by name</option>
                    <option value="price-asc">Price: low to high</option>
                    <option value="price-desc">Price: high to low</option>
                  </select>
                  <Link
                    href="/shop/quote"
                    className="text-xs font-bold uppercase tracking-wide px-4 py-2 text-white shrink-0"
                    style={{ backgroundColor: CYAN }}
                  >
                    Quote {count > 0 ? `(${count})` : ""}
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {pageItems.map((product) => (
                  <ProductCard key={product.id} product={product} onAdd={() => addItem(product)} />
                ))}
              </div>

              {pageItems.length === 0 && (
                <p className="text-center text-gray-500 py-16">No products match your filters.</p>
              )}

              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPage(n)}
                      className={`w-10 h-10 text-sm font-semibold border transition-colors ${
                        n === page
                          ? "text-white border-transparent"
                          : "bg-white text-gray-700 border-gray-200 hover:border-cyan-400"
                      }`}
                      style={n === page ? { backgroundColor: CYAN } : undefined}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar — right */}
            <aside className="w-full lg:w-72 shrink-0 order-1 lg:order-2 space-y-8">
              <SidebarBlock title="Search">
                <div className="flex">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setPage(1);
                    }}
                    placeholder="Search for Article..."
                    className="flex-1 border border-gray-200 border-r-0 px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                  <button
                    type="button"
                    className="px-4 text-white shrink-0"
                    style={{ backgroundColor: NAVY }}
                    aria-label="Search"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </SidebarBlock>

              <SidebarBlock title="Price">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                  Price $10 - $500
                </p>
                <input
                  type="range"
                  min={10}
                  max={500}
                  value={priceMax}
                  onChange={(e) => {
                    setPriceMax(Number(e.target.value));
                    setPage(1);
                  }}
                  className="w-full accent-[#06e6da]"
                />
                <p className="text-sm text-gray-600 mt-2 mb-4">Up to ${priceMax}</p>
                <button
                  type="button"
                  onClick={() => setPage(1)}
                  className="w-full py-2.5 text-white text-xs font-bold uppercase tracking-widest"
                  style={{ backgroundColor: CYAN }}
                >
                  Filter
                </button>
              </SidebarBlock>

              <SidebarBlock title="Categories">
                <ul className="space-y-2.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setCategory("all");
                        setPage(1);
                      }}
                      className={`text-sm hover:text-cyan-600 transition-colors ${
                        category === "all" ? "text-cyan-600 font-semibold" : "text-gray-600"
                      }`}
                    >
                      All products
                    </button>
                  </li>
                  {categories.map((c) => (
                    <li key={c.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setCategory(c.slug);
                          setPage(1);
                        }}
                        className={`text-sm hover:text-cyan-600 transition-colors ${
                          category === c.slug ? "text-cyan-600 font-semibold" : "text-gray-600"
                        }`}
                      >
                        {c.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </SidebarBlock>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function SidebarBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 pb-2 border-b-2 border-[#06e6da] inline-block">
        {title}
      </h3>
      {children}
    </div>
  );
}

function ProductCard({ product, onAdd }: { product: ShopProductItem; onAdd: () => void }) {
  const inStock = product.stockQuantity > 0;
  const price = product.salePrice ?? product.price;

  return (
    <article className="group">
      <div className="relative aspect-square bg-gray-100 overflow-hidden mb-4">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300">
            <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
        )}
        <span
          className={`absolute top-0 left-0 text-[10px] font-bold uppercase px-3 py-1.5 tracking-wide ${
            inStock ? "bg-emerald-600 text-white" : "bg-gray-800 text-white"
          }`}
        >
          {inStock ? "Available" : "Out of stock"}
        </span>
      </div>

      <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: CYAN }}>
        {product.categoryName}
      </p>
      <h3 className="font-bold text-gray-900 font-overpass uppercase text-sm leading-snug mb-3 min-h-[2.5rem]">
        {product.name}
      </h3>
      <p className="inline-block text-white font-bold text-base px-4 py-2" style={{ backgroundColor: CYAN }}>
        ${price.toFixed(2)}
      </p>
      <button
        type="button"
        disabled={!inStock}
        onClick={onAdd}
        className="mt-4 w-full py-2.5 border-2 text-xs font-bold uppercase tracking-widest transition-colors disabled:opacity-40 disabled:cursor-not-allowed border-[#06e6da] text-[#06e6da] hover:bg-[#06e6da] hover:text-white"
      >
        Add to quote
      </button>
    </article>
  );
}
