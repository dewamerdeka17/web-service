import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Shirt,
  Sparkles,
  Star,
  Truck,
  WashingMachine
} from "lucide-react";

export const metadata: Metadata = {
  title: "CleanWash Laundry - Laundry Bersih dan Wangi",
  description:
    "Demo website laundry dengan layanan kiloan, satuan, setrika, antar jemput, harga jelas, dan order WhatsApp."
};

const whatsappNumber = "6281234567890";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Harga", href: "#harga" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Kontak", href: "#kontak" }
];

const services = [
  ["Laundry Kiloan", "Cuci harian untuk pakaian rumah, kos, dan kantor.", WashingMachine],
  ["Laundry Satuan", "Perawatan khusus untuk jaket, jas, kebaya, dan item tertentu.", Shirt],
  ["Setrika Saja", "Pakaian rapi, licin, dan siap dipakai tanpa perlu mencuci ulang.", Sparkles],
  ["Cuci Sepatu", "Pembersihan sepatu dengan proses hati-hati dan hasil lebih segar.", CheckCircle2],
  ["Bed Cover", "Cuci bed cover, selimut, dan perlengkapan tidur ukuran besar.", Star],
  ["Antar Jemput", "Laundry dijemput dan diantar kembali ke alamat pelanggan.", Truck]
];

const pricing = [
  ["Cuci Kering Lipat", "Rp7.000/kg"],
  ["Cuci Setrika", "Rp9.000/kg"],
  ["Setrika Saja", "Rp5.000/kg"],
  ["Express 1 Hari", "Rp15.000/kg"],
  ["Cuci Sepatu", "Rp25.000/pasang"],
  ["Bed Cover", "Rp30.000/pcs"]
];

const steps = [
  "Hubungi WhatsApp",
  "Pilih layanan",
  "Kirim alamat",
  "Laundry dijemput",
  "Proses cuci",
  "Laundry dikirim kembali"
];

const testimonials = [
  ["Rina, Anak Kos", "Cucian cepat selesai, wangi, dan bisa dijemput. Praktis banget."],
  ["Bagas, Karyawan", "Harga jelas dari awal dan hasil setrika rapi. Cocok buat rutinitas kantor."],
  ["Maya, Ibu Rumah Tangga", "Bed cover bersih dan prosesnya komunikatif lewat WhatsApp."]
];

function buildWhatsAppUrl(message = "Halo saya mau pesan layanan laundry") {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}

export default function CleanWashLaundryDemoPage() {
  return (
    <div id="home" className="bg-sky-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="text-xl font-extrabold text-sky-900">
            CleanWash Laundry
          </a>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700 sm:justify-end">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-md px-2 py-1 hover:text-sky-700">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto grid min-h-[660px] w-[min(1120px,calc(100%-32px))] gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-800">
                Laundry kiloan, satuan, dan antar jemput
              </p>
              <h1 className="mt-6 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-6xl">
                Laundry Bersih, Wangi, dan Siap Pakai
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Layanan laundry kiloan, satuan, setrika, dan antar jemput untuk kebutuhan
                harian kamu.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-bold text-white hover:bg-green-700"
                >
                  <MessageCircle size={19} aria-hidden="true" />
                  Pesan via WhatsApp
                </a>
                <a
                  href="#harga"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-sky-200 bg-white px-5 py-3 text-sm font-bold text-sky-900 hover:bg-sky-50"
                >
                  Lihat Harga
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-sky-100 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1400&q=80"
                alt="Interior laundry modern dengan pakaian terlipat dan mesin cuci"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="tentang" className="py-16 sm:py-20">
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-600">
                Tentang Laundry
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
                Informasi harga, layanan, dan order tersusun rapi.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                CleanWash Laundry membantu pelanggan melihat layanan, harga, lokasi, jam
                buka, dan memesan langsung lewat WhatsApp tanpa bertanya berulang kali.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Fresh", "Desain bersih dengan banyak ruang putih."],
                ["Cepat", "CTA WhatsApp mudah ditemukan dari HP."],
                ["Jelas", "Harga dan layanan ditampilkan dalam kartu rapi."]
              ].map(([title, text]) => (
                <article key={title} className="rounded-lg bg-white p-5 shadow-sm">
                  <h3 className="font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="layanan" className="bg-white py-16 sm:py-20">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <SectionTitle
              eyebrow="Layanan"
              title="Pilihan layanan laundry untuk kebutuhan harian."
              description="Dari pakaian harian sampai item khusus, semua ditampilkan jelas agar pelanggan mudah memilih."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(([title, description, Icon]) => (
                <article key={title as string} className="rounded-lg border border-sky-100 bg-sky-50 p-6">
                  <Icon className="text-sky-700" size={28} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-bold text-slate-950">{title as string}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{description as string}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="harga" className="py-16 sm:py-20">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <SectionTitle
              eyebrow="Paket Harga"
              title="Harga layanan tampil jelas sejak awal."
              description="Pelanggan bisa memilih layanan dan langsung lanjut ke WhatsApp."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {pricing.map(([name, price]) => (
                <article key={name} className="rounded-lg bg-white p-6 shadow-sm">
                  <p className="text-sm font-bold text-sky-600">Mulai dari</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">{name}</h3>
                  <p className="mt-4 text-2xl font-extrabold text-sky-800">{price}</p>
                  <a
                    href={buildWhatsAppUrl(`Halo saya mau pesan ${name}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-bold text-white hover:bg-green-700"
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                    Pesan
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <SectionTitle
              eyebrow="Alur Pemesanan"
              title="Order laundry lebih mudah dari WhatsApp."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step} className="rounded-lg border border-sky-100 p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 font-extrabold text-sky-800">
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
            <SectionTitle eyebrow="Testimoni" title="Dipercaya pelanggan lokal." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map(([name, quote]) => (
                <article key={name} className="rounded-lg bg-white p-6 shadow-sm">
                  <Star className="text-sky-600" size={22} aria-hidden="true" />
                  <p className="mt-4 leading-7 text-slate-600">{quote}</p>
                  <p className="mt-4 font-bold text-slate-950">{name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="lokasi" className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-600">
                Lokasi
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
                Laundry dekat area kos dan perumahan.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Jl. Melati Bersih No. 21, Indonesia. Buka setiap hari pukul 08.00 - 21.00.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-lg bg-sky-50 p-5">
                <MapPin className="mt-1 shrink-0 text-sky-700" size={24} aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-600">
                  Tersedia layanan antar jemput untuk area sekitar toko.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-sky-100 shadow-sm">
              <iframe
                title="Peta lokasi CleanWash Laundry"
                src="https://www.google.com/maps?q=Indonesia&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="kontak" className="bg-sky-900 py-16 text-white sm:py-20">
          <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col gap-6 text-center sm:items-center">
            <Clock className="mx-auto text-sky-200" size={32} aria-hidden="true" />
            <h2 className="text-3xl font-bold tracking-normal sm:text-4xl">
              Mau laundry hari ini?
            </h2>
            <p className="max-w-2xl leading-8 text-sky-100">
              Klik tombol WhatsApp untuk cek layanan, jadwal antar jemput, dan estimasi harga.
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-bold text-white hover:bg-green-700"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Pesan via WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8">
        <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} CleanWash Laundry. All rights reserved.</p>
          <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer" className="font-bold text-green-700">
            WhatsApp CleanWash
          </a>
        </div>
      </footer>
    </div>
  );
}
