import type { Metadata } from "next";
import localFont from "next/font/local";
import { isSearchIndexingAllowed } from "@/shared/config/searchIndexing";
import {
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
  socialImage,
} from "@/shared/config/siteMetadata";
import { YandexMetrikaProvider } from "@/shared/analytics/yandex-metrika";
import { cx } from "@/shared/lib/cx";
import "./globals.css";

const inter = localFont({
  src: "../shared/assets/fonts/Inter.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const cormorant = localFont({
  src: "../shared/assets/fonts/CormorantGaramond.woff2",
  variable: "--font-cormorant",
  display: "swap",
  weight: "300 700",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "фотограф Санкт-Петербург",
    "фотосессия в Санкт-Петербурге",
    "свадебный фотограф Санкт-Петербург",
    "Love Story Петербург",
    "семейная фотосессия СПб",
    "портретная фотосессия Санкт-Петербург",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  robots: isSearchIndexingAllowed
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: false,
      },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cx(inter.variable, cormorant.variable)}>
      <body>
        <YandexMetrikaProvider />
        {children}
      </body>
    </html>
  );
}
