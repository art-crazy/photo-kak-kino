import type { MetadataRoute } from "next";
import { isSearchIndexingAllowed } from "@/shared/config/searchIndexing";
import { siteUrl } from "@/shared/config/siteMetadata";

export default function robots(): MetadataRoute.Robots {
  if (isSearchIndexingAllowed) {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${siteUrl}/sitemap.xml`,
    };
  }

  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
