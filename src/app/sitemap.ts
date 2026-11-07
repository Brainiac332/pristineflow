import { MetadataRoute } from "next";
import { BRAND } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND.url;
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "#services",
    "#why-us",
    "#how-it-works",
    "#before-after",
    "#gallery",
    "#pricing",
    "#testimonials",
    "#faq",
    "#contact",
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Add legal pages
  const legalRoutes = ["/privacy", "/terms", "/cookies"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...routes, ...legalRoutes];
}