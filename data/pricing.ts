export type PricingPackage = {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "Paket Hemat",
    price: "Rp150.000+",
    description: "Cocok untuk usaha yang butuh halaman promosi sederhana dan cepat online.",
    features: [
      "1 halaman landing page",
      "Responsive HP",
      "Tombol WhatsApp",
      "Google Maps",
      "Hosting gratis",
      "Revisi 1x"
    ],
    ctaLabel: "Tanya Paket Hemat"
  },
  {
    name: "Paket Standar",
    price: "Rp350.000+",
    description: "Pilihan paling pas untuk UMKM yang ingin tampil lebih lengkap dan rapi.",
    features: [
      "Landing page lebih rapi",
      "Galeri foto",
      "Daftar produk atau jasa",
      "SEO dasar",
      "Tombol WhatsApp",
      "Google Maps",
      "Revisi 2x"
    ],
    ctaLabel: "Pilih Paket Standar",
    highlighted: true
  },
  {
    name: "Paket Premium",
    price: "Rp750.000+",
    description: "Untuk usaha yang butuh beberapa halaman, katalog, dan tampilan lebih matang.",
    features: [
      "3 sampai 5 halaman",
      "Katalog produk",
      "Form kontak",
      "Animasi ringan",
      "Optimasi speed",
      "Revisi 3x"
    ],
    ctaLabel: "Diskusi Paket Premium"
  }
];
