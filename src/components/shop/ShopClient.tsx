"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { ShopProductItem } from "@/components/site/types";

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
  const [priceMax, setPriceMax] = useState(5000);
  const [page, setPage] = useState(1);
  const perPage = 12;

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "all" && p.categorySlug !== category) return false;
      const price = p.salePrice ?? p.price;
      if (price > priceMax) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [products, category, priceMax, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-overpass uppercase tracking-wide">
              Equipment Shop
            </h1>
            <p className="text-cyan-100 mt-2">
              Showing {(page - 1) * perPage + 1}-{Math.min(page * perPage, filtered.length)} of{" "}
              {filtered.length} results
            </p>
          </div>
          <Link
            href="/shop/quote"
            className="inline-flex items-center gap-2 bg-white text-cyan-800 px-6 py-3 font-bold text-sm uppercase tracking-wide hover:bg-cyan-50 transition-colors"
          >
            Request quote {count > 0 ? `(${count})` : ""}
          </Link>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 shrink-0 space-y-6">
              <div className="bg-white p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-sm uppercase tracking-wide text-gray-900 mb-3">Search</h3>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search products..."
                  className="w-full border border-gray-200 px-3 py-2 text-sm"
                />
              </div>
              <div className="bg-white p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-sm uppercase tracking-wide text-gray-900 mb-3">Price</h3>
                <input
                  type="range"
                  min={10}
                  max={5000}
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-sm text-gray-600 mt-1">Up to ${priceMax}</p>
              </div>
              <div className="bg-white p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-sm uppercase tracking-wide text-gray-900 mb-3">Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setCategory("all");
                        setPage(1);
                      }}
                      className={`hover:text-cyan-600 ${category === "all" ? "text-cyan-600 font-semibold" : "text-gray-600"}`}
                    >
                      All
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
                        className={`hover:text-cyan-600 ${category === c.slug ? "text-cyan-600 font-semibold" : "text-gray-600"}`}
                      >
                        {c.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {pageItems.map((product) => (
                  <ProductCard key={product.id} product={product} onAdd={() => addItem(product)} />
                ))}
              </div>
              {pageItems.length === 0 && (
                <p className="text-center text-gray-500 py-12">No products match your filters.</p>
              )}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-10">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPage(n)}
                      className={`w-10 h-10 text-sm font-medium border ${
                        n === page
                          ? "bg-cyan-600 text-white border-cyan-600"
                          : "bg-white text-gray-700 border-gray-200 hover:border-cyan-600"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ product, onAdd }: { product: ShopProductItem; onAdd: () => void }) {
  const inStock = product.stockQuantity > 0;
  const price = product.salePrice ?? product.price;

  return (
    <article className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="aspect-square bg-gray-100 relative flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
        ) : (
          <span className="text-4xl text-gray-300 font-bold">{product.name.charAt(0)}</span>
        )}
        <span
          className={`absolute top-3 left-3 text-xs font-bold uppercase px-2 py-1 ${
            inStock ? "bg-green-600 text-white" : "bg-gray-800 text-white"
          }`}
        >
          {inStock ? "Available" : "Out of stock"}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 font-overpass uppercase text-sm">{product.name}</h3>
        {product.brand && <p className="text-cyan-600 text-xs mt-1">{product.brand}</p>}
        <p className="text-xl font-bold text-gray-900 mt-3">${price.toFixed(2)}</p>
        <button
          type="button"
          disabled={!inStock}
          onClick={onAdd}
          className="mt-4 w-full py-2.5 border-2 border-cyan-600 text-cyan-600 font-bold text-xs uppercase tracking-wide hover:bg-cyan-600 hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed water-fill-button"
        >
          Add to quote
        </button>
      </div>
    </article>
  );
}
