import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { TokonesiaProductBrowser } from "@/components/demo/TokonesiaProductBrowser";
import { buildTokonesiaWhatsAppUrl } from "@/data/tokonesia-products";

export const metadata: Metadata = {
  title: "Produk - TokoNesia Mini",
  description:
    "Daftar semua produk TokoNesia Mini dengan search, filter kategori, detail produk, dan order WhatsApp."
};

type TokonesiaProductsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function TokonesiaProductsPage({
  searchParams
}: TokonesiaProductsPageProps) {
  const resolvedSearchParams = await searchParams;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex demo-shell flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/demo/tokonesia-mini" className="text-xl font-extrabold text-slate-950">
            TokoNesia Mini
          </Link>
          <a
            href={buildTokonesiaWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-bold text-white hover:bg-green-700"
          >
            <MessageCircle size={17} aria-hidden="true" />
            Order WhatsApp
          </a>
        </nav>
      </header>

      <main className="py-12 sm:py-16">
        <div className="mx-auto demo-shell">
          <Link
            href="/demo/tokonesia-mini"
            className="inline-flex items-center gap-2 rounded-md text-sm font-bold text-blue-700 hover:text-blue-800"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Kembali ke homepage
          </Link>
          <div className="mt-8 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-normal text-blue-700">
              Semua Produk
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl">
              Cari produk dan order langsung via WhatsApp.
            </h1>
            <p className="mt-5 leading-8 text-slate-600">
              Gunakan search sederhana dan filter kategori untuk menemukan produk yang
              paling sesuai.
            </p>
          </div>

          <div className="mt-10">
            <TokonesiaProductBrowser initialCategory={resolvedSearchParams?.category} />
          </div>
        </div>
      </main>
    </div>
  );
}
