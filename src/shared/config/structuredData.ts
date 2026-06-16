import {
  contactEmail,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
  socialImage,
} from "./siteMetadata";

type StructuredDataFaqItem = {
  question: string;
  answer: string;
};

type HomeStructuredDataParams = {
  faqItems: StructuredDataFaqItem[];
};

type ServiceStructuredDataParams = {
  city: string;
  description: string;
  faqItems: StructuredDataFaqItem[];
  path: string;
  price: string;
  serviceType: string;
  title: string;
};

export function createHomeStructuredData({
  faqItems,
}: HomeStructuredDataParams) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteTitle,
        url: siteUrl,
        inLanguage: "ru-RU",
        description: siteDescription,
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteName,
        jobTitle: "Фотограф",
        url: siteUrl,
        image: `${siteUrl}${socialImage.url}`,
        email: contactEmail,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Санкт-Петербург",
          addressCountry: "RU",
        },
        knowsAbout: [
          "Свадебная фотография",
          "Love Story",
          "Портретная фотосессия",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: siteName,
        url: siteUrl,
        image: `${siteUrl}${socialImage.url}`,
        email: contactEmail,
        areaServed: "Санкт-Петербург",
        priceRange: "от 18 000 ₽",
        description: siteDescription,
        founder: {
          "@id": `${siteUrl}/#person`,
        },
        serviceType: [
          "Свадебная фотосъемка",
          "Love Story фотосессия",
          "Семейная фотосессия",
          "Портретная фотосессия",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  } as const;
}

export function createServiceStructuredData({
  city,
  description,
  faqItems,
  path,
  price,
  serviceType,
  title,
}: ServiceStructuredDataParams) {
  const url = `${siteUrl}/${path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: url,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: title,
        serviceType,
        description,
        provider: {
          "@type": "ProfessionalService",
          "@id": `${siteUrl}/#business`,
          name: siteName,
          url: siteUrl,
          image: `${siteUrl}${socialImage.url}`,
          email: contactEmail,
        },
        areaServed: {
          "@type": "City",
          name: city,
        },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "RUB",
            name: price,
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  } as const;
}
