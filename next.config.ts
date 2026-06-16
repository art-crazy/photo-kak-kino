import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
