import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServicePage,
  getServicePagePath,
  servicePageParams,
} from "@/entities/service-content";
import { siteName, socialImage } from "@/shared/config/siteMetadata";
import { ServicePage } from "@/views/service-page";

type PageProps = {
  params: Promise<{
    citySlug: string;
    serviceSlug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePageParams;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { citySlug, serviceSlug } = await params;
  const page = getServicePage(citySlug, serviceSlug);

  if (!page) {
    return {};
  }

  const path = `/${getServicePagePath(page)}`;

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
  const { citySlug, serviceSlug } = await params;
  const page = getServicePage(citySlug, serviceSlug);

  if (!page) {
    notFound();
  }

  return <ServicePage page={page} />;
}
