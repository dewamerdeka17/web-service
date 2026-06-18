import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  DatabaseBackup,
  HardDrive,
  Keyboard,
  MapPin,
  MessageCircle,
  Monitor,
  ShieldCheck,
  Star,
  Wrench,
  Wifi
} from "lucide-react";

export const metadata: Metadata = {
  title: "FixComp Service - Service Laptop Bergaransi",
  description:
    "Demo website jasa service laptop dengan layanan perbaikan, estimasi harga, alur service, testimoni, lokasi, dan WhatsApp."
};

const whatsappNumber = "6281234567890";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Masalah", href: "#masalah" },
  { label: "Layanan", href: "#layanan" },
  { label: "Harga", href: "#harga" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Kontak", href: "#kontak" }
];

const problems = [
  "Laptop lemot",
  "Windows error",
  "Laptop mati total",
  "Keyboard rusak",
  "Layar bergaris",
  "Overheat",
  "Tidak bisa WiFi",
  "Blue screen"
];

const services = [
  {
    name: "Install Ulang Windows",
    description: "Install OS, driver, dan aplikasi dasar.",
    icon: Monitor
  },
  {
    name: "Upgrade SSD/RAM",
    description: "Membantu laptop lebih cepat untuk kerja dan belajar.",
    icon: HardDrive
  },
  {
    name: "Cleaning Laptop",
    description: "Membersihkan debu dan mengganti thermal paste.",
    icon: Cpu
  },
  {
    name: "Perbaikan Keyboard",
    description: "Cek dan ganti keyboard rusak atau tidak responsif.",
    icon: Keyboard
  },
  {
    name: "Recovery Data",
    description: "Backup dan penyelamatan data dengan penjelasan risiko.",
    icon: DatabaseBackup
  },
  {
    name: "Troubleshooting WiFi",
    description: "Perbaikan koneksi jaringan dan driver WiFi.",
    icon: Wifi
  }
];

const pricing = [
  ["Install Ulang Windows", "Rp75.000"],
  ["Install Aplikasi Dasar", "Rp30.000"],
  ["Cleaning Laptop", "Rp100.000"],
  ["Ganti Thermal Paste", "Rp50.000"],
  ["Upgrade SSD/RAM", "Rp50.000 jasa pasang"],
  ["Backup Data", "Rp50.000"],
  ["Troubleshooting Ringan", "Rp30.000"]
];

const process = [
  "Konsultasi masalah",
  "Diagnosa awal",
  "Estimasi biaya",
  "Persetujuan pelanggan",
  "Proses perbaikan",
  "Testing",
  "Serah terima"
];

const testimonials = [
  ["Andi, Mahasiswa", "Laptop lemot jadi jauh lebih enak dipakai setelah upgrade SSD."],
  ["Sari, Freelancer", "Teknisinya menjelaskan estimasi biaya dulu sebelum pengerjaan."],
  ["Dimas, Gamer", "Cleaning dan thermal paste bikin suhu laptop lebih stabil."]
];

function buildWhatsAppUrl(message = "Halo saya mau konsultasi service laptop") {
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
      <p className="text-sm font-bold uppercase tracking-normal text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-normal text-white sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 leading-7 text-slate-300">{description}</p> : null}
    </div>
  );
}

export default function FixCompServiceDemoPage() {
  return (
    <div id="home" className="bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <nav className="mx-auto flex demo-shell flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="text-xl font-extrabold text-white">
            FixComp Service
          </a>
          <div className="-mx-2 flex gap-2 overflow-x-auto pb-1 text-sm font-semibold text-slate-300 sm:mx-0 sm:flex-wrap sm:justify-end sm:overflow-visible sm:pb-0">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-md px-2 py-1 hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.24),transparent_34%),linear-gradient(135deg,#020617,#0f172a)]" />
          <div className="relative mx-auto grid demo-shell gap-8 py-12 sm:py-16 lg:min-h-[680px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
            <div>
              <p className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-200 ring-1 ring-cyan-300/20">
                Diagnosa jelas, pengerjaan aman, konsultasi dulu
              </p>
              <h1 className="mt-6 text-4xl font-extrabold tracking-normal sm:text-6xl">
                Service Laptop Cepat, Aman, dan Bergaransi
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Perbaikan laptop, install ulang, upgrade SSD/RAM, cleaning, dan konsultasi
                masalah komputer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-bold text-white hover:bg-green-700"
                >
                  <MessageCircle size={19} aria-hidden="true" />
                  Konsultasi Gratis
                </a>
                <a
                  href="#layanan"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-cyan-300/30 px-5 py-3 text-sm font-bold text-cyan-100 hover:bg-cyan-400/10"
                >
                  Lihat Layanan
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl sm:min-h-[360px] lg:min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                alt="Teknisi profesional memperbaiki laptop di meja kerja"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </section>

        <section id="masalah" className="py-16 sm:py-20">
          <div className="mx-auto demo-shell">
            <SectionTitle
              eyebrow="Masalah Umum"
              title="Keluhan laptop yang sering ditangani."
              description="Pelanggan bisa langsung mengenali masalah sebelum konsultasi WhatsApp."
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {problems.map((problem) => (
                <div key={problem} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="text-cyan-300" size={20} aria-hidden="true" />
                  <p className="mt-3 font-semibold text-white">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="layanan" className="bg-white py-16 text-slate-950 sm:py-20">
          <div className="mx-auto demo-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-normal text-cyan-700">
                Layanan Service
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
                Layanan teknis ditampilkan jelas dan terpercaya.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Setiap layanan diberi deskripsi singkat agar calon pelanggan cepat memahami
                solusi yang tersedia.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article key={service.name} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                    <Icon className="text-cyan-700" size={28} aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-bold">{service.name}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="harga" className="py-16 sm:py-20">
          <div className="mx-auto demo-shell">
            <SectionTitle
              eyebrow="Estimasi Harga"
              title="Kisaran biaya sebelum pelanggan datang."
              description="Tidak ada klaim berlebihan, biaya final tetap berdasarkan diagnosa."
            />
            <div className="mt-10 overflow-hidden rounded-lg border border-white/10">
              {pricing.map(([name, price]) => (
                <div
                  key={name}
                  className="grid gap-2 border-b border-white/10 bg-white/5 p-5 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <p className="font-bold text-white">{name}</p>
                  <p className="font-extrabold text-cyan-200">{price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 sm:py-20">
          <div className="mx-auto demo-shell">
            <SectionTitle
              eyebrow="Alur Service"
              title="Pengerjaan transparan dari konsultasi sampai serah terima."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <article key={step} className="rounded-lg border border-white/10 bg-slate-950 p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 font-extrabold text-slate-950">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-bold text-white">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 text-slate-950 sm:py-20">
          <div className="mx-auto grid demo-shell gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-cyan-700">
                Keunggulan
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
                Dibuat untuk membangun rasa aman sebelum service.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Website menonjolkan konsultasi awal, estimasi biaya, proses testing, dan
                garansi pengerjaan tanpa menjanjikan hal yang tidak pasti.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Diagnosa Jelas", Wrench],
                ["Data Lebih Aman", ShieldCheck],
                ["Testing Sebelum Serah Terima", CheckCircle2],
                ["Konsultasi WhatsApp", MessageCircle]
              ].map(([title, Icon]) => (
                <article key={title as string} className="rounded-lg bg-slate-50 p-5">
                  <Icon className="text-cyan-700" size={24} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">{title as string}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto demo-shell">
            <SectionTitle eyebrow="Testimoni" title="Contoh bukti kepercayaan pelanggan." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map(([name, quote]) => (
                <article key={name} className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <Star className="text-cyan-300" size={22} aria-hidden="true" />
                  <p className="mt-4 leading-7 text-slate-300">{quote}</p>
                  <p className="mt-4 font-bold text-white">{name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="lokasi" className="bg-white py-16 text-slate-950 sm:py-20">
          <div className="mx-auto grid demo-shell gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-cyan-700">
                Kontak dan Lokasi
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
                Konsultasi dulu sebelum datang ke tempat service.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Jl. Teknisi Lokal No. 10, Indonesia. Buka Senin sampai Sabtu, 09.00 - 18.00.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-lg bg-slate-50 p-5">
                <MapPin className="mt-1 shrink-0 text-cyan-700" size={24} aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-600">
                  Bawa charger laptop saat datang agar diagnosa lebih cepat.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
              <iframe
                title="Peta lokasi FixComp Service"
                src="https://www.google.com/maps?q=Indonesia&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="kontak" className="bg-cyan-300 py-16 text-slate-950 sm:py-20">
          <div className="mx-auto flex demo-shell flex-col gap-6 text-center sm:items-center">
            <h2 className="text-3xl font-extrabold tracking-normal sm:text-4xl">
              Laptop bermasalah? Konsultasi dulu via WhatsApp.
            </h2>
            <p className="max-w-2xl leading-8">
              Jelaskan gejala, tipe laptop, dan kebutuhan service agar teknisi bisa memberi
              arahan awal.
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-bold text-white hover:bg-green-700"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Konsultasi Gratis
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-8">
        <div className="mx-auto flex demo-shell flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} FixComp Service. All rights reserved.</p>
          <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer" className="font-bold text-green-400">
            WhatsApp FixComp
          </a>
        </div>
      </footer>
    </div>
  );
}
