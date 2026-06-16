import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PortfolioCard } from "@/components/PortfolioCard";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioProjects } from "@/data/portfolio";

export function PortfolioPreview() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeader
            eyebrow="Portfolio"
            title="Contoh website untuk berbagai jenis usaha lokal."
            description="Gunakan demo ini sebagai gambaran struktur halaman, katalog, dan CTA yang bisa dibuat."
          />
          <Link
            href="/portfolio"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-navy-950 shadow-sm transition hover:-translate-y-0.5 hover:border-navy-300 hover:bg-navy-50"
          >
            Lihat semua
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {portfolioProjects.slice(0, 4).map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
