export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  problem: string;
  solution: string;
  tech: string[];
  demoUrl: string;
  accent: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "website-warung-kopi",
    name: "Website Warung Kopi",
    category: "Kuliner",
    description:
      "Landing page untuk warung kopi lokal dengan menu favorit, lokasi, jam buka, dan tombol order WhatsApp.",
    image: "/images/portfolio/coffee-preview.jpg",
    imageAlt: "Preview website warung kopi",
    problem:
      "Pelanggan sering bertanya menu, lokasi, dan jam buka lewat chat berulang kali.",
    solution:
      "Membuat halaman ringkas berisi menu unggulan, Google Maps, jam operasional, dan CTA WhatsApp yang mudah ditemukan.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "/demo/kopi-senja",
    accent: "#0f766e"
  },
  {
    slug: "website-laundry",
    name: "Website Laundry",
    category: "Jasa Lokal",
    description:
      "Website profil laundry dengan paket kiloan, layanan antar jemput, area layanan, dan kontak cepat.",
    image: "/images/portfolio/laundry-preview.jpg",
    imageAlt: "Preview website laundry",
    problem:
      "Calon pelanggan belum tahu harga, area layanan, dan cara memesan antar jemput.",
    solution:
      "Menyusun informasi harga dan layanan dalam kartu yang mudah dipindai dari HP, lalu diarahkan ke WhatsApp.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    demoUrl: "/demo/cleanwash-laundry",
    accent: "#2563eb"
  },
  {
    slug: "website-servis-laptop",
    name: "Website Service Laptop",
    category: "Teknologi",
    description:
      "Website jasa service laptop dengan layanan install ulang, upgrade SSD/RAM, cleaning, dan konsultasi WhatsApp.",
    image: "/images/portfolio/laptop-service-preview.jpg",
    imageAlt: "Preview website service laptop",
    problem:
      "Bisnis servis sulit terlihat terpercaya karena hanya memakai chat dan posting media sosial.",
    solution:
      "Membuat profil layanan yang menonjolkan jenis servis, bukti kerja, testimoni, dan alur konsultasi.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "/demo/fixcomp-service",
    accent: "#7c3aed"
  },
  {
    slug: "website-katalog-produk",
    name: "Website Katalog Produk",
    category: "UMKM",
    description:
      "Website katalog produk dengan daftar produk, kategori, harga, detail produk, dan tombol order WhatsApp.",
    image: "/images/portfolio/catalog-preview.jpg",
    imageAlt: "Preview website katalog produk",
    problem:
      "Produk tersebar di chat dan status sehingga calon pembeli sulit melihat pilihan lengkap.",
    solution:
      "Mengelompokkan produk ke dalam katalog rapi dengan CTA order per produk yang langsung masuk WhatsApp.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    demoUrl: "/demo/tokonesia-mini",
    accent: "#ea580c"
  }
];
