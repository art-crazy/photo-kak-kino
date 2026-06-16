import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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
