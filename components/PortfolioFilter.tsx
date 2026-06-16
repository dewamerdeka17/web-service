"use client";

import { useMemo, useState } from "react";
import { PortfolioCard } from "@/components/PortfolioCard";
import type { PortfolioProject } from "@/data/portfolio";

type PortfolioFilterProps = {
  projects: PortfolioProject[];
};

export function PortfolioFilter({ projects }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = useMemo(
    () => ["Semua", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects]
  );

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`focus-ring min-h-10 rounded-full px-4 py-2 text-sm font-semibold transition ${
              category === activeCategory
                ? "bg-navy-500 text-white shadow-glow"
                : "border border-slate-300 bg-white text-slate-700 shadow-sm hover:border-navy-300 hover:bg-navy-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
