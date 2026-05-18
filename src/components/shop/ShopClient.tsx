"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { WaterButton, WaterButtonLink } from "@/components/site/WaterButton";
import type { ShopProductItem } from "@/components/site/types";

const NAVY = "#0f2744";
const CYAN = "#06e6da";

export function ShopClient({ products }: { products: ShopProductItem[] }) {
  const { addItem, count } = useCart();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);
  const perPage = 12;

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
    if (sort === "price-desc") list = [...list].sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [products, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);
  const rangeStart = filtered.length === 0 ? 0 : (page - 1) * perPage + 1;
  const rangeEnd = Math.min(page * perPage, filtered.length);

  return (
    <>
      <section className="text-white py-12 md:py-16" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-overpass uppercase tracking-wide">
            Equipment Shop
          </h1>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toolbar: search + sort + quote cart */}
          <div className="flex flex-col gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-sm text-gray-600 order-2 sm:order-1">
                Showing {rangeStart}-{rangeEnd} of {filtered.length} results
              </p>
              <div className="flex flex-col xs:flex-row gap-3 order-1 sm:order-2 w-full sm:w-auto sm:items-center">
                <div className="flex flex-1 sm:max-w-md gap-0">
                  <input
                    type="search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setPage(1);
                    }}
                    placeholder="Search products..."
                    className="flex-1 border border-gray-200 border-r-0 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#06e6da] min-w-0"
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
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-sm border border-gray-200 px-3 py-2.5 bg-white text-gray-700 w-full sm:w-auto sm:min-w-[160px]"
                >
                  <option value="default">Default sorting</option>
                  <option value="name">Sort by name</option>
                  <option value="price-asc">Price: low to high</option>
                  <option value="price-desc">Price: high to low</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <WaterButtonLink href="/shop/quote" size="md">
                Get a quote {count > 0 ? `(${count})` : ""}
              </WaterButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pageItems.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={() => addItem(product)} />
            ))}
          </div>

          {pageItems.length === 0 && (
            <p className="text-center text-gray-500 py-16">No products match your search.</p>
          )}

          {totalPages > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={`min-w-[40px] h-10 px-2 text-sm font-semibold border transition-colors ${
                    n === page
                      ? "text-white border-transparent"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#06e6da]"
                  }`}
                  style={n === page ? { backgroundColor: CYAN } : undefined}
                >
                  {n}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function ProductCard({ product, onAdd }: { product: ShopProductItem; onAdd: () => void }) {
  const inStock = product.stockQuantity > 0;
  const price = product.salePrice ?? product.price;

  return (
    <article className="group flex flex-col h-full">
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
      <h3 className="font-bold text-gray-900 font-overpass uppercase text-sm leading-snug mb-3 flex-1">
        {product.name}
      </h3>
      <p className="inline-block text-white font-bold text-base px-4 py-2 mb-4 w-fit" style={{ backgroundColor: CYAN }}>
        ${price.toFixed(2)}
      </p>
      <WaterButton className="w-full" size="sm" disabled={!inStock} onClick={onAdd}>
        Add to quote
      </WaterButton>
    </article>
  );
}
