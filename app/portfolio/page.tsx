import type { Metadata } from "next";
import { PortfolioFilter } from "@/components/PortfolioFilter";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Contoh website demo untuk UMKM seperti warung kopi, laundry, servis laptop, dan katalog produk."
};

export default function PortfolioPage() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Portfolio"
          title="Demo project yang bisa jadi gambaran website usaha kamu."
          description="Semua project di bawah ini adalah contoh konsep yang dapat disesuaikan dengan kebutuhan bisnis, konten, warna brand, dan paket yang dipilih."
          align="center"
        />
        <div className="mt-10">
          <PortfolioFilter projects={portfolioProjects} />
        </div>
      </div>
    </section>
  );
}
