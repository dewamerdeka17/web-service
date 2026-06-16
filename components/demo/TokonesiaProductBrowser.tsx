"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Search } from "lucide-react";
import { useState } from "react";
import {
  buildTokonesiaWhatsAppUrl,
  tokonesiaCategories,
  tokonesiaProducts
} from "@/data/tokonesia-products";

type TokonesiaProductBrowserProps = {
  initialCategory?: string;
};

export function TokonesiaProductBrowser({
  initialCategory = "Semua"
}: TokonesiaProductBrowserProps) {
  const validInitialCategory = tokonesiaCategories.includes(initialCategory)
    ? initialCategory
    : "Semua";
  const [selectedCategory, setSelectedCategory] = useState(validInitialCategory);
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const filteredProducts = tokonesiaProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "Semua" || product.category === selectedCategory;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="relative block">
          <span className="sr-only">Cari produk</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
            aria-hidden="true"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari produk, kategori, atau deskripsi"
            className="min-h-12 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:bg-white"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {tokonesiaCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article key={product.slug} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <Link href={`/demo/tokonesia-mini/products/${product.slug}`} className="block">
                <div className="relative h-56 bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-5">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  {product.category}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-950">{product.name}</h3>
                <p className="mt-2 text-xl font-extrabold text-orange-600">{product.price}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Link
                    href={`/demo/tokonesia-mini/products/${product.slug}`}
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-slate-900 hover:bg-slate-50"
                  >
                    Detail
                  </Link>
                  <a
                    href={buildTokonesiaWhatsAppUrl(product.name, product.price)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-bold text-white hover:bg-green-700"
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                    Order
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
          Produk tidak ditemukan. Coba kata kunci atau kategori lain.
        </div>
      )}
    </div>
  );
}
