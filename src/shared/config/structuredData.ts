import {
  contactEmail,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
  socialImage,
} from "./siteMetadata";

export const homeStructuredData = {
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
        "Портретная фотосессия",
      ],
    },
  ],
} as const;

