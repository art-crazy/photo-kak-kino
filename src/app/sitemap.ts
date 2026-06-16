import type { MetadataRoute } from "next";
import { getServicePagePath, servicePages } from "@/entities/service-content";
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
      url: `${siteUrl}/${getServicePagePath(page)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.serviceSlug === "svadebnyj-fotograf" ? 0.9 : 0.8,
    })),
  ];
}
