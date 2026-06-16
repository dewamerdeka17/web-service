import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, MessageCircle } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { MockupCard } from "@/components/MockupCard";
import { portfolioProjects } from "@/data/portfolio";
import { buildWhatsAppUrl } from "@/data/site";

type PortfolioDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Portfolio tidak ditemukan"
    };
  }

  return {
    title: project.name,
    description: project.description
  };
}

export default async function PortfolioDetailPage({
  params
}: PortfolioDetailPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <Link
          href="/portfolio"
          className="focus-ring inline-flex items-center gap-2 rounded-xl text-sm font-bold text-navy-700 transition hover:text-navy-950"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Kembali ke portfolio
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-navy-700">
              {project.category}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.03em] text-navy-950 sm:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{project.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href={buildWhatsAppUrl(`Halo saya tertarik dengan contoh ${project.name}`)}>
                <MessageCircle size={19} aria-hidden="true" />
                Konsultasi project serupa
              </CtaButton>
              <CtaButton href={project.demoUrl} variant="secondary">
                <ExternalLink size={19} aria-hidden="true" />
                Lihat demo
              </CtaButton>
            </div>
          </div>

          <MockupCard project={project} size="large" />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold text-navy-950">Masalah client</h2>
            <p className="mt-3 leading-7 text-slate-600">{project.problem}</p>
          </article>
          <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold text-navy-950">Solusi yang dibuat</h2>
            <p className="mt-3 leading-7 text-slate-600">{project.solution}</p>
          </article>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-navy-950">Teknologi</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
