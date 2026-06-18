import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Coffee,
  Instagram,
  MapPin,
  MessageCircle,
  Star,
  Utensils,
  Wifi
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kopi Senja - Warung Kopi Lokal",
  description:
    "Kopi Senja menyajikan kopi lokal, minuman segar, dan tempat nyaman untuk nongkrong santai.",
  openGraph: {
    title: "Kopi Senja - Warung Kopi Lokal",
    description:
      "Nikmati kopi lokal, menu favorit, lokasi warung, dan order cepat lewat WhatsApp.",
    type: "website"
  }
};

const whatsappNumber = "6281234567890";
const defaultMessage = "Halo saya mau pesan kopi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Tentang", href: "#tentang" },
  { label: "Menu", href: "#menu" },
  { label: "Galeri", href: "#galeri" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Kontak", href: "#kontak" }
];

const menus = [
  {
    name: "Es Kopi Susu Senja",
    category: "Kopi",
    price: "Rp15.000",
    description: "Kopi susu creamy dengan gula aren.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Americano",
    category: "Kopi",
    price: "Rp12.000",
    description: "Kopi hitam ringan dan segar.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Cappuccino",
    category: "Kopi",
    price: "Rp18.000",
    description: "Kopi dengan foam susu lembut.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Matcha Latte",
    category: "Non-Kopi",
    price: "Rp17.000",
    description: "Matcha creamy dengan susu segar.",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Chocolate Ice",
    category: "Non-Kopi",
    price: "Rp15.000",
    description: "Minuman coklat dingin yang manis.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Kentang Goreng",
    category: "Snack",
    price: "Rp13.000",
    description: "Kentang goreng renyah untuk teman nongkrong.",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80"
  }
];

const features = [
  {
    title: "Kopi Segar",
    description: "Biji kopi lokal diseduh setiap hari untuk rasa yang konsisten.",
    icon: Coffee
  },
  {
    title: "Tempat Nyaman",
    description: "Area santai untuk belajar, bekerja, atau ngobrol bersama teman.",
    icon: Wifi
  },
  {
    title: "Harga Ramah",
    description: "Menu favorit dengan harga cocok untuk nongkrong harian.",
    icon: Star
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
    alt: "Area meja dan suasana warung Kopi Senja"
  },
  {
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=80",
    alt: "Barista menyiapkan kopi di bar"
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
    alt: "Produk kopi favorit Kopi Senja"
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80",
    alt: "Pelanggan menikmati suasana warung kopi"
  }
];

function buildCoffeeWhatsAppUrl(message = defaultMessage) {
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
      <p className="text-sm font-bold uppercase tracking-normal text-amber-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-normal text-stone-950 sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 leading-7 text-stone-600">{description}</p> : null}
    </div>
  );
}

export default function KopiSenjaDemoPage() {
  return (
    <div id="home" className="bg-[#fff7ed] text-stone-900">
      <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-[#fff7ed]/95 backdrop-blur">
        <nav className="mx-auto flex demo-shell flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="text-xl font-extrabold tracking-normal text-amber-950">
            Kopi Senja
          </a>
          <div className="-mx-2 flex gap-2 overflow-x-auto pb-1 text-sm font-semibold text-stone-700 sm:mx-0 sm:flex-wrap sm:justify-end sm:overflow-visible sm:pb-0">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-md px-2 py-1 hover:text-amber-800">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden bg-amber-950 text-white">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1800&q=80"
              alt="Secangkir kopi hangat di meja Kopi Senja"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950 via-amber-950/80 to-amber-950/30" />
          </div>
          <div className="relative mx-auto grid min-h-[560px] demo-shell items-center py-16 sm:min-h-[640px] sm:py-20 lg:min-h-[680px]">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-amber-100 ring-1 ring-white/20">
                Warung kopi lokal untuk nongkrong santai
              </p>
              <h1 className="mt-6 text-4xl font-extrabold tracking-normal sm:text-6xl">
                Nikmati Kopi Lokal dengan Rasa Terbaik
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-amber-50">
                Kopi Senja menyajikan kopi segar, tempat nyaman, dan harga ramah untuk
                nongkrong santai setiap hari.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildCoffeeWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                >
                  <MessageCircle size={19} aria-hidden="true" />
                  Pesan Sekarang
                </a>
                <a
                  href="#menu"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-amber-950 transition hover:bg-amber-50"
                >
                  Lihat Menu
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="tentang" className="py-16 sm:py-20">
          <div className="mx-auto grid demo-shell gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative min-h-[260px] overflow-hidden rounded-lg sm:min-h-[360px] lg:min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80"
                alt="Interior hangat warung Kopi Senja"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-amber-700">
                Tentang Usaha
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-stone-950 sm:text-4xl">
                Warung kopi lokal untuk belajar, bekerja, dan bertemu teman.
              </h2>
              <p className="mt-5 leading-8 text-stone-600">
                Kopi Senja adalah warung kopi lokal yang menyediakan berbagai pilihan kopi,
                non-kopi, dan camilan dengan suasana santai untuk belajar, bekerja, atau
                nongkrong bersama teman.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-5 shadow-sm">
                  <Clock className="text-amber-800" size={24} aria-hidden="true" />
                  <h3 className="mt-3 font-bold text-stone-950">Jam Buka</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Setiap hari, 10.00 - 22.00 WIB.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-5 shadow-sm">
                  <Utensils className="text-amber-800" size={24} aria-hidden="true" />
                  <h3 className="mt-3 font-bold text-stone-950">Menu Lengkap</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Kopi, non-kopi, dan snack untuk teman ngobrol.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto demo-shell">
            <SectionTitle
              eyebrow="Keunggulan"
              title="Dibuat untuk pengalaman ngopi yang santai dan mudah."
              description="Informasi menu, lokasi, dan kontak disusun rapi agar pelanggan cepat menemukan yang dibutuhkan."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article key={feature.title} className="rounded-lg border border-amber-100 bg-[#fff7ed] p-6">
                    <Icon className="text-amber-800" size={28} aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-bold text-stone-950">{feature.title}</h3>
                    <p className="mt-3 leading-7 text-stone-600">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="menu" className="py-16 sm:py-20">
          <div className="mx-auto demo-shell">
            <SectionTitle
              eyebrow="Menu Favorit"
              title="Pilihan kopi, non-kopi, dan snack."
              description="Setiap menu bisa langsung dipesan lewat WhatsApp dengan pesan otomatis."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {menus.map((menu) => (
                <article key={menu.name} className="overflow-hidden rounded-lg bg-white shadow-sm">
                  <div className="relative h-52">
                    <Image
                      src={menu.image}
                      alt={menu.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                          {menu.category}
                        </span>
                        <h3 className="mt-3 text-lg font-bold text-stone-950">{menu.name}</h3>
                      </div>
                      <p className="shrink-0 font-extrabold text-amber-800">{menu.price}</p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-stone-600">{menu.description}</p>
                    <a
                      href={buildCoffeeWhatsAppUrl(`Halo saya mau pesan ${menu.name}`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-700"
                    >
                      <MessageCircle size={17} aria-hidden="true" />
                      Pesan via WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeri" className="bg-white py-16 sm:py-20">
          <div className="mx-auto demo-shell">
            <SectionTitle
              eyebrow="Galeri"
              title="Suasana hangat untuk menikmati kopi."
              description="Contoh foto minuman, tempat, produk favorit, dan suasana pelanggan."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((image) => (
                <div key={image.src} className="relative min-h-[260px] overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="lokasi" className="py-16 sm:py-20">
          <div className="mx-auto grid demo-shell gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-amber-700">
                Lokasi
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-stone-950 sm:text-4xl">
                Mampir ke Kopi Senja hari ini.
              </h2>
              <p className="mt-5 leading-8 text-stone-600">
                Jl. Contoh Raya No. 17, Indonesia. Lokasi mudah ditemukan dan cocok
                untuk singgah sore setelah aktivitas.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-lg bg-white p-5 shadow-sm">
                <MapPin className="mt-1 shrink-0 text-amber-800" size={24} aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-stone-950">Alamat</h3>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    Jl. Contoh Raya No. 17, Indonesia
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jl.%20Contoh%20Raya%20No.%2017%20Indonesia"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-950"
              >
                Buka di Google Maps
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="overflow-hidden rounded-lg border border-amber-100 bg-white shadow-sm">
              <iframe
                title="Peta lokasi Kopi Senja"
                src="https://www.google.com/maps?q=Indonesia&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="kontak" className="bg-amber-950 py-16 text-white sm:py-20">
          <div className="mx-auto grid demo-shell gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-amber-200">
                Kontak
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
                Pesan kopi atau tanya menu lewat WhatsApp.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-amber-50">
                Kami siap membantu pesanan kopi, info menu favorit, dan arah menuju lokasi
                Kopi Senja.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildCoffeeWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                >
                  <MessageCircle size={19} aria-hidden="true" />
                  Pesan via WhatsApp
                </a>
                <a
                  href="https://instagram.com/kopisenja"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <Instagram size={19} aria-hidden="true" />
                  Instagram
                </a>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 text-stone-900">
              <h3 className="text-xl font-bold">Info Kontak</h3>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="font-bold text-stone-950">WhatsApp</dt>
                  <dd className="mt-1 text-stone-600">+62 812-3456-7890</dd>
                </div>
                <div>
                  <dt className="font-bold text-stone-950">Instagram</dt>
                  <dd className="mt-1 text-stone-600">@kopisenja</dd>
                </div>
                <div>
                  <dt className="font-bold text-stone-950">Email</dt>
                  <dd className="mt-1 text-stone-600">halo@kopisenja.local</dd>
                </div>
                <div>
                  <dt className="font-bold text-stone-950">Jam Operasional</dt>
                  <dd className="mt-1 text-stone-600">Setiap hari, 10.00 - 22.00 WIB</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-amber-900/10 bg-[#fff7ed] py-8">
        <div className="mx-auto flex demo-shell flex-col gap-4 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} Kopi Senja. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 font-semibold">
            <a href="#menu" className="hover:text-amber-800">
              Menu
            </a>
            <a href="#lokasi" className="hover:text-amber-800">
              Lokasi
            </a>
            <a
              href={buildCoffeeWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="text-green-700 hover:text-green-800"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
