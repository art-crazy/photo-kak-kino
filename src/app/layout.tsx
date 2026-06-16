import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { isSearchIndexingAllowed } from "@/shared/config/searchIndexing";
import { cx } from "@/shared/lib/cx";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Ксения Аржанникова — фотограф Санкт-Петербург",
  description: "Сайт фотографа в Санкт-Петербурге.",
  robots: isSearchIndexingAllowed
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: false,
      },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cx(inter.variable, cormorant.variable)}>
      <body>{children}</body>
    </html>
  );
}
