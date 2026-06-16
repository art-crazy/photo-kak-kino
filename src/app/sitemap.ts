import type { MetadataRoute } from "next";
import { servicePages } from "@/entities/service-content";
import { siteUrl } from "@/shared/config/siteMetadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.slug.includes("svadebnyj") ? 0.9 : 0.8,
    })),
  ];
}
