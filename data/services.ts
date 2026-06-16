import {
  Brush,
  Globe2,
  LayoutPanelTop,
  Link2,
  PackageSearch,
  Settings
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: typeof Globe2;
};

export const services: ServiceItem[] = [
  {
    title: "Website landing page",
    description: "Satu halaman rapi untuk menjelaskan usaha, layanan, harga, dan kontak.",
    icon: LayoutPanelTop
  },
  {
    title: "Website katalog produk",
    description: "Tampilkan produk atau jasa dalam daftar yang mudah dipindai calon pembeli.",
    icon: PackageSearch
  },
  {
    title: "Website profil usaha",
    description: "Profil bisnis sederhana untuk membangun kepercayaan dan tampil profesional.",
    icon: Globe2
  },
  {
    title: "Bio link custom",
    description: "Satu link berisi WhatsApp, Instagram, katalog, lokasi, dan promo utama.",
    icon: Link2
  },
  {
    title: "Redesign website",
    description: "Rapikan tampilan website lama agar lebih modern, jelas, dan mobile friendly.",
    icon: Brush
  },
  {
    title: "Maintenance website",
    description: "Bantuan update konten, perbaikan kecil, dan pengecekan website berkala.",
    icon: Settings
  }
];
