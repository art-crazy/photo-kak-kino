import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServicePage, servicePageSlugs } from "@/entities/service-content";
import { siteName, socialImage } from "@/shared/config/siteMetadata";
import { ServicePage } from "@/views/service-page";

type PageProps = {
  params: Promise<{
    serviceSlug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePageSlugs.map((serviceSlug) => ({ serviceSlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const page = getServicePage(serviceSlug);

  if (!page) {
    return {};
  }

  const path = `/${page.slug}`;

  return {
    title: `${page.title} | ${siteName}`,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      url: path,
      siteName,
      title: page.title,
      description: page.description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [socialImage.url],
    },
  };
}

export default async function ServiceRoute({ params }: PageProps) {
  const { serviceSlug } = await params;
  const page = getServicePage(serviceSlug);

  if (!page) {
    notFound();
  }

  return <ServicePage page={page} />;
}
