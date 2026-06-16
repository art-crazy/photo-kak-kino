export type NavLink = {
  label: string;
  href: string;
};

export type ActionLink = {
  label: string;
  href: string;
};

export type ImageItem = {
  src: string;
  alt: string;
};

export type HeroContent = {
  label: string;
  title: string;
  text: string;
  action: ActionLink;
  image: ImageItem;
};

export type IntroContent = {
  label: string;
  title: string;
  text: string;
  note: string;
  image: ImageItem;
};

export type ContactContent = {
  label: string;
  title: string;
  text: string;
  action: ActionLink;
  image: ImageItem;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqContent = {
  label: string;
  title: string;
  items: FaqItem[];
};
