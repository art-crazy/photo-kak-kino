import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.photo-kak-kino.ru",
          },
        ],
        destination: "https://photo-kak-kino.ru/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
