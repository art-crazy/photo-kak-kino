import type { MetadataRoute } from "next";
import { isSearchIndexingAllowed } from "@/shared/config/searchIndexing";

export default function robots(): MetadataRoute.Robots {
  if (isSearchIndexingAllowed) {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}

