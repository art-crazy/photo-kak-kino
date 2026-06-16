export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServicePageContent = {
  slug: string;
  city: string;
  label: string;
  title: string;
  description: string;
  lead: string;
  image: {
    src: string;
    alt: string;
  };
  serviceType: string;
  price: string;
  sections: Array<{
    title: string;
    text: string;
  }>;
  faq: ServiceFaqItem[];
  keywords: string[];
};
