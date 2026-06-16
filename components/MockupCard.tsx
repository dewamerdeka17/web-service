import Image from "next/image";
import type { PortfolioProject } from "@/data/portfolio";

type MockupCardProps = {
  project: PortfolioProject;
  size?: "default" | "large";
};

export function MockupCard({ project, size = "default" }: MockupCardProps) {
  return (
    <div
      className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-soft"
    >
      <div className="overflow-hidden rounded-[1.15rem] border border-slate-200 bg-slate-50">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-3 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-2 hidden flex-1 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-400 sm:block">
            dewawebservice.id/{project.slug}
          </span>
        </div>
        <div
          className={`relative overflow-hidden bg-slate-100 ${
            size === "large" ? "aspect-[16/10]" : "aspect-[16/11]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes={
              size === "large"
                ? "(min-width: 1024px) 50vw, 100vw"
                : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            }
            className="object-cover transition duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
