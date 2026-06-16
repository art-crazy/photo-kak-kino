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

export type WorkItem = ImageItem & {
  caption: string;
  aspect: "tall" | "wide" | "portrait";
};

export type ApproachItem = {
  title: string;
  text: string;
};

export type ReviewItem = {
  text: string;
  author: string;
};

export type HeroContent = {
  label: string;
  title: string;
  text: string;
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
