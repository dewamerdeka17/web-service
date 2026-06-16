import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  PackageCheck,
  Search,
  ShoppingBag,
  Star,
  Tags
} from "lucide-react";
import {
  buildTokonesiaWhatsAppUrl,
  tokonesiaCategories,
  tokonesiaProducts
} from "@/data/tokonesia-products";

export const metadata: Metadata = {
  title: "TokoNesia Mini - Katalog Produk UMKM",
  description:
    "Demo website katalog produk UMKM dengan kategori, produk unggulan, promo, cara order, dan WhatsApp order."
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Kategori", href: "#kategori" },
  { label: "Produk", href: "#produk" },
  { label: "Promo", href: "#promo" },
  { label: "Cara Order", href: "#cara-order" },
  { label: "Kontak", href: "#kontak" }
];

const orderSteps = [
  "Pilih produk",
  "Klik tombol WhatsApp",
  "Kirim format order",
  "Konfirmasi stok",
  "Transfer pembayaran",
  "Produk dikirim"
];

const testimonials = [
  ["Nadia, Pembeli", "Katalognya rapi, harga jelas, dan order ke WhatsApp langsung masuk."],
  ["Rizky, Reseller", "Mudah cari produk lewat kategori dan detailnya lengkap."],
  ["Laras, UMKM", "Cocok jadi contoh toko kecil yang belum perlu checkout kompleks."]
];

export default function TokonesiaMiniDemoPage() {
  const featuredProducts = tokonesiaProducts.filter((product) => product.featured);
  const visibleCategories = tokonesiaCategories.filter((category) => category !== "Semua");

  return (
    <div id="home" className="bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/demo/tokonesia-mini" className="text-xl font-extrabold text-slate-950">
            TokoNesia Mini
          </Link>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700 sm:justify-end">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-md px-2 py-1 hover:text-blue-700">
                {item.label}
              </a>
            ))}
            <Link href="/demo/tokonesia-mini/products" className="rounded-md px-2 py-1 text-blue-700 hover:text-blue-800">
              Semua Produk
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-white">
          <div className="mx-auto grid min-h-[660px] w-[min(1120px,calc(100%-32px))] gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
                Katalog produk online untuk UMKM
              </p>
              <h1 className="mt-6 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-6xl">
                Katalog Produk Online untuk Usaha Kamu
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Lihat produk pilihan, cek harga, dan order langsung melalui WhatsApp
                dengan mudah.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/tokonesia-mini/products"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
                >
                  Lihat Produk
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a
                  href={buildTokonesiaWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-bold text-white hover:bg-green-700"
                >
                  <MessageCircle size={19} aria-hidden="true" />
                  Order Sekarang
                </a>
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-slate-100 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80"
                alt="Katalog produk UMKM dengan fashion, makanan, aksesoris, dan elektronik kecil"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="kategori" className="py-16 sm:py-20">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Kategori Produk
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
                Produk tersusun rapi berdasarkan kategori.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCategories.map((category) => (
                <Link
                  key={category}
                  href={`/demo/tokonesia-mini/products?category=${encodeURIComponent(category)}`}
                  className="rounded-lg bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <Tags className="text-blue-600" size={28} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-bold text-slate-950">{category}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Lihat pilihan produk kategori {category.toLowerCase()}.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="produk" className="bg-white py-16 sm:py-20">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Produk Unggulan
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
                  Pilihan produk yang siap dipesan.
                </h2>
              </div>
              <Link href="/demo/tokonesia-mini/products" className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-800">
                Semua Produk
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <article key={product.slug} className="overflow-hidden rounded-lg bg-slate-50 shadow-sm">
                  <Link href={`/demo/tokonesia-mini/products/${product.slug}`} className="block">
                    <div className="relative h-48 bg-slate-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {product.category}
                    </span>
                    <h3 className="mt-3 font-bold text-slate-950">{product.name}</h3>
                    <p className="mt-2 font-extrabold text-orange-600">{product.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="promo" className="py-16 sm:py-20">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <div className="rounded-lg bg-gradient-to-r from-blue-600 to-orange-500 p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">
                Promo Demo
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-normal sm:text-4xl">
                Belanja lebih mudah lewat katalog WhatsApp.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/90">
                Tampilkan banner promo untuk diskon, produk baru, bundling, atau stok
                terbatas tanpa perlu sistem checkout kompleks.
              </p>
            </div>
          </div>
        </section>

        <section id="cara-order" className="bg-white py-16 sm:py-20">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Cara Order
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
                Alur pembelian sederhana untuk pelanggan.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {orderSteps.map((step, index) => (
                <article key={step} className="rounded-lg border border-slate-200 p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-extrabold text-blue-700">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-bold text-slate-950">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Testimoni
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
                Dibuat untuk membangun kepercayaan toko kecil.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map(([name, quote]) => (
                <article key={name} className="rounded-lg bg-white p-6 shadow-sm">
                  <Star className="text-orange-500" size={22} aria-hidden="true" />
                  <p className="mt-4 leading-7 text-slate-600">{quote}</p>
                  <p className="mt-4 font-bold text-slate-950">{name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="kontak" className="bg-slate-950 py-16 text-white sm:py-20">
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-6 md:grid-cols-3">
            {[
              ["Search & Filter", "Pembeli bisa mencari produk lebih cepat.", Search],
              ["Produk Rapi", "Grid dan detail produk siap untuk katalog UMKM.", ShoppingBag],
              ["Order WhatsApp", "Pesan otomatis membawa nama dan harga produk.", PackageCheck]
            ].map(([title, text, Icon]) => (
              <article key={title as string} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <Icon className="text-orange-400" size={28} aria-hidden="true" />
                <h2 className="mt-4 text-xl font-bold">{title as string}</h2>
                <p className="mt-3 leading-7 text-slate-300">{text as string}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-10 flex w-[min(1120px,calc(100%-32px))] flex-col gap-4 rounded-lg bg-white p-6 text-slate-950 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">Siap order produk?</h2>
              <p className="mt-2 text-slate-600">Hubungi admin TokoNesia Mini lewat WhatsApp.</p>
            </div>
            <a
              href={buildTokonesiaWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-bold text-white hover:bg-green-700"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Order Sekarang
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8">
        <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} TokoNesia Mini. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 font-bold">
            <Link href="/demo/tokonesia-mini/products" className="text-blue-700">
              Produk
            </Link>
            <a href={buildTokonesiaWhatsAppUrl()} target="_blank" rel="noreferrer" className="text-green-700">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
