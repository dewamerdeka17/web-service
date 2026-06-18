import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { MockupCard } from "@/components/MockupCard";
import type { PortfolioProject } from "@/data/portfolio";

type PortfolioCardProps = {
  project: PortfolioProject;
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  const isExternalDemo = project.demoUrl.startsWith("http");
  const demoLinkClass =
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-bold text-navy-950 transition hover:-translate-y-0.5 hover:border-navy-300 hover:bg-navy-50";

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-3 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-premium sm:p-4 lg:rounded-[1.75rem]">
      <MockupCard project={project} />
      <div className="mt-5 px-1 pb-1 sm:mt-6">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-navy-700">
          {project.category}
        </span>
        <h3 className="mt-4 text-xl font-extrabold tracking-normal text-navy-950 sm:text-2xl">{project.name}</h3>
        <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={`/portfolio/${project.slug}`}
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-navy-500 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-navy-600"
          >
            Detail project
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          {isExternalDemo ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className={demoLinkClass}
            >
              Demo
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          ) : (
            <Link href={project.demoUrl} className={demoLinkClass}>
              Demo
              <ExternalLink size={17} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
