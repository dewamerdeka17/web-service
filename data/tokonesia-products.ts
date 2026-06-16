export type TokonesiaProduct = {
  slug: string;
  name: string;
  category: string;
  price: string;
  description: string;
  variants: string[];
  stock: string;
  image: string;
  featured?: boolean;
};

export const tokonesiaCategories = [
  "Semua",
  "Fashion",
  "Makanan",
  "Aksesoris",
  "Elektronik",
  "Promo"
];

export const tokonesiaProducts: TokonesiaProduct[] = [
  {
    slug: "kaos-basic-premium",
    name: "Kaos Basic Premium",
    category: "Fashion",
    price: "Rp75.000",
    description:
      "Kaos basic bahan lembut untuk dipakai harian, cocok untuk gaya santai dan usaha merchandise kecil.",
    variants: ["Hitam", "Putih", "Navy"],
    stock: "Tersedia",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    featured: true
  },
  {
    slug: "hoodie-polos",
    name: "Hoodie Polos",
    category: "Fashion",
    price: "Rp150.000",
    description:
      "Hoodie polos hangat dengan potongan kasual, cocok untuk katalog fashion UMKM.",
    variants: ["Abu", "Hitam", "Cream"],
    stock: "Tersedia",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
    featured: true
  },
  {
    slug: "keripik-pedas",
    name: "Keripik Pedas",
    category: "Makanan",
    price: "Rp20.000",
    description:
      "Keripik pedas renyah dalam kemasan praktis untuk cemilan harian dan hampers kecil.",
    variants: ["Level 1", "Level 3", "Level 5"],
    stock: "Tersedia",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80",
    featured: true
  },
  {
    slug: "cookies-jar",
    name: "Cookies Jar",
    category: "Makanan",
    price: "Rp35.000",
    description:
      "Cookies dalam jar rapi untuk hadiah, stok rumah, dan produk rumahan siap jual.",
    variants: ["Choco Chip", "Butter", "Mix"],
    stock: "Tersedia",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80"
  },
  {
    slug: "case-hp-custom",
    name: "Case HP Custom",
    category: "Aksesoris",
    price: "Rp45.000",
    description:
      "Case HP custom dengan pilihan desain sederhana untuk toko aksesoris online.",
    variants: ["iPhone", "Samsung", "Xiaomi"],
    stock: "Pre-order",
    image:
      "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=900&q=80"
  },
  {
    slug: "lampu-meja-led",
    name: "Lampu Meja LED",
    category: "Elektronik",
    price: "Rp80.000",
    description:
      "Lampu meja LED ringkas untuk belajar, bekerja, dan dekorasi meja minimalis.",
    variants: ["Putih", "Hitam"],
    stock: "Stok terbatas",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    featured: true
  }
];

export function buildTokonesiaWhatsAppUrl(productName?: string, price?: string) {
  const message =
    productName && price
      ? `Halo, saya mau order ${productName} harga ${price}`
      : "Halo, saya mau order produk TokoNesia Mini";

  return `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
}
