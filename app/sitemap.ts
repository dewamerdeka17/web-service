import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/data/portfolio";
import { siteConfig } from "@/data/site";
import { tokonesiaProducts } from "@/data/tokonesia-products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/portfolio",
    "/contact",
    "/demo/kopi-senja",
    "/demo/cleanwash-laundry",
    "/demo/fixcomp-service",
    "/demo/tokonesia-mini",
    "/demo/tokonesia-mini/products"
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const portfolioRoutes = portfolioProjects.map((project) => ({
    url: `${siteConfig.url}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const productRoutes = tokonesiaProducts.map((product) => ({
    url: `${siteConfig.url}/demo/tokonesia-mini/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...portfolioRoutes, ...productRoutes];
}
