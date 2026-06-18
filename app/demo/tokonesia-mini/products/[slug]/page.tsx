import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import {
  buildTokonesiaWhatsAppUrl,
  tokonesiaProducts
} from "@/data/tokonesia-products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tokonesiaProducts.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = tokonesiaProducts.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Produk tidak ditemukan"
    };
  }

  return {
    title: `${product.name} - TokoNesia Mini`,
    description: `${product.name} kategori ${product.category}, harga ${product.price}. Order langsung via WhatsApp.`
  };
}

export default async function TokonesiaProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = tokonesiaProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex demo-shell flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <Link href="/demo/tokonesia-mini" className="text-xl font-extrabold text-slate-950">
            TokoNesia Mini
          </Link>
          <Link
            href="/demo/tokonesia-mini/products"
            className="text-sm font-bold text-blue-700 hover:text-blue-800"
          >
            Semua Produk
          </Link>
        </nav>
      </header>

      <main className="py-12 sm:py-16">
        <div className="mx-auto demo-shell">
          <Link
            href="/demo/tokonesia-mini/products"
            className="inline-flex items-center gap-2 rounded-md text-sm font-bold text-blue-700 hover:text-blue-800"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Kembali ke produk
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="relative min-h-[280px] overflow-hidden rounded-lg bg-white shadow-sm sm:min-h-[380px] lg:min-h-[460px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
                {product.category}
              </span>
              <h1 className="mt-5 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-3xl font-extrabold text-orange-600">{product.price}</p>
              <p className="mt-5 leading-8 text-slate-600">{product.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-5 shadow-sm">
                  <h2 className="font-bold text-slate-950">Varian</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <span key={variant} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-5 shadow-sm">
                  <h2 className="font-bold text-slate-950">Stok</h2>
                  <p className="mt-3 text-slate-600">{product.stock}</p>
                </div>
              </div>

              <a
                href={buildTokonesiaWhatsAppUrl(product.name, product.price)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-bold text-white hover:bg-green-700 sm:w-auto"
              >
                <MessageCircle size={19} aria-hidden="true" />
                Order {product.name}
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["Cek Stok", "Admin mengonfirmasi stok sebelum pembayaran.", PackageCheck],
              ["Order Aman", "Pembelian diarahkan ke WhatsApp resmi toko.", ShieldCheck],
              ["Siap Kirim", "Produk dikemas dan dikirim setelah pembayaran.", Truck]
            ].map(([title, text, Icon]) => (
              <article key={title as string} className="rounded-lg bg-white p-5 shadow-sm">
                <Icon className="text-blue-600" size={24} aria-hidden="true" />
                <h2 className="mt-3 font-bold text-slate-950">{title as string}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
