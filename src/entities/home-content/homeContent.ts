import type {
  ApproachItem,
  ContactContent,
  HeroContent,
  ImageItem,
  IntroContent,
  NavLink,
  ReviewItem,
  WorkItem,
} from "./types";

const photo = (fileName: string) => `/site-photos/${fileName}`;

export const siteName = "Ксения Аржанникова";

export const navLinks: NavLink[] = [
  { label: "Портфолио", href: "#works" },
  { label: "Условия съемки", href: "#approach" },
  { label: "Контакты", href: "#contact" },
];

export const hero: HeroContent = {
  label: "Kodak Portra 400 · СПБ",
  title: "Ксения\nАржанникова",
  text: "Свадебные истории, Love Story и городские портреты в Петербурге. Сохраняю живые кадры: ветер, паузы, движение и людей такими, какими их хочется помнить.",
  image: {
    src: photo("turoKkDMbohba004TWE0CWIbBW5kl5-LHAutLQyGaGfgK2yjsO95u1xQsA9pK2HBQ5Gq51HcuNd3k9_wr-ZR1Ki-.jpg"),
    alt: "Фотосессия у воды в Петербурге",
  },
};

export const filmstripImages: ImageItem[] = [
  {
    src: photo("mWJXoKoxQih47_03D4Inf6fHFDx5B5uSrXyoo7_SUxrfR1JGyoJAipOcP51GQDkMjpYmJDhD_0ZH-Y4ArGVBmWwV.jpg"),
    alt: "Пленочный кадр пары",
  },
  {
    src: photo("pAXRbf5UAOYSgvx18cRF9o9YCjtvkhQK6thGILy-xqVnlhs6JlAXW2oCiuVUhefq-SGAZGRMy7P9bF2rtRbCzyjT.jpg"),
    alt: "Пленочный кадр прогулки",
  },
  {
    src: photo("ZlyChZVYM9lw85cRkOVVbrMIwImOVBju7YEtbuerTdBRS5eth_qWi3yvd8qszlz5B6ea57lbLgm_GRA4ZVDRXHMI.jpg"),
    alt: "Пленочный кадр у автомобиля",
  },
  {
    src: photo("E2pAfC4w-fjXYiBDQuqs7ksAXyofxv6DfmSNnTl6XufNBmDvL1RfKSbFNmLLmNsYdnX4pKlZjtT8PgPe_YMFOj-i.jpg"),
    alt: "Пленочный кадр в городе",
  },
  {
    src: photo("yYAL4u5zVqZArW77uK0w9QSo9CPnwArR96GI4J2V2gvjgAIYtfgFq0rCJ9_ty4oc1ao0_4P2R1905l0cxoIQSYvY.jpg"),
    alt: "Пленочный кадр портрета",
  },
  {
    src: photo("Q1jpYoVHgIRQFkKCbbPwLHawzfQbTBjpN6pNkW-PkJp7TVhcpDU6239qll2YYEGRJpPujqDDEzx21OoQnlTYuaE0.jpg"),
    alt: "Пленочный кадр свадьбы",
  },
];

export const intro: IntroContent = {
  label: "О фотографии",
  title: "Не постановка, а чувство, которое успели поймать.",
  text: "Я снимаю так, будто собираю личный фотоальбом: немного воздуха, неровный ветер, взгляд между фразами, руки на холодном металле, свет из окна старой парадной. В Петербурге для меня важны не только известные места — вода, модернистские фасады, дворы, лестницы, вечерняя Петроградка, — но и паузы между ними.",
  note: "Главное — чтобы спустя годы кадры не выглядели модно, а ощущались живыми.",
  image: {
    src: photo("pgi654FSmsxYRe5luNlauvG1jC6NAukEGWiCncdNbiUz36L7tqJptQ1-sL3XoOlhwo3p8Uay07C5x_n5Pur9-zd3.jpg"),
    alt: "Портрет фотографа с камерой",
  },
};

export const works: WorkItem[] = [
  {
    src: photo("keqBO4FFv5LUiUvW8W1JeQPCiuja-SYss-X5n3jO6v_JRrRh6YGm9pHcUZFXXChtkJYHUjIfDbv4uzAEV9l-BaKo.jpg"),
    alt: "Свадебная прогулка в Петербурге",
    caption: "Свадебная прогулка",
    aspect: "wide",
  },
  {
    src: photo("DKJSRuxxCNn5pftQ_aoM0p16AWx2UF-IpCCMclvzRaKfY4dFodHWLWG5Qvg4QzygHHj2nYnBrJH3oPEucWIZ8Lw_.jpg"),
    alt: "Love Story в городе",
    caption: "Love Story",
    aspect: "portrait",
  },
  {
    src: photo("r4W6z3FOfKCtgb1ED96acWhI8ss6JneusovoLFa2ufZ9jZQ9J-IFm4qgQCH1m7BSNX5DAqS_B7lUNAPIN2jq02Bl.jpg"),
    alt: "Портрет у воды",
    caption: "Городской портрет",
    aspect: "wide",
  },
  {
    src: photo("u2-3AQf9g2k79u7oYNzfQ1PjW_qNpyuBUcaPaK-ssfuk7H1Th0QePx3Ek4bM1WfvxIovUkTAuwVI59q6tb2bJAj5.jpg"),
    alt: "Камерная съемка",
    caption: "Камерная история",
    aspect: "tall",
  },
];

export const approachItems: ApproachItem[] = [
  {
    title: "01 · До съемки",
    text: "Обсуждаем маршрут, свет и настроение. Я предлагаю места, где Петербург выглядит не открыткой, а личным воспоминанием.",
  },
  {
    title: "02 · В кадре",
    text: "Не заставляю играть любовь. Помогаю двигаться, разговаривать и останавливаться, когда свет уже делает половину работы.",
  },
  {
    title: "03 · После",
    text: "Цвет теплый, пленочный, без пластика. Серия собирается как разворот журнала и старый альбом одновременно.",
  },
];

export const reviews: ReviewItem[] = [
  {
    text: "Ксюша снимала нас под дождем на Канонерском — это лучшие кадры со свадьбы. Мы мокрые, смеемся, и все настоящее.",
    author: "Аня и Миша · август",
  },
  {
    text: "Хотели без пафоса. Получился Петербург, мы и ощущение старого фильма, который хочется пересматривать.",
    author: "Марина и Саша · сентябрь",
  },
];

export const contact: ContactContent = {
  label: "Записаться",
  title: "Расскажите, какой день хочется сохранить.",
  text: "Свадьбы в Петербурге — от 55 000 ₽. Love Story, портреты и городские прогулки — от 18 000 ₽. Напишите, и я предложу маршрут, тайминг и спокойный план съемки.",
  action: {
    label: "Написать на почту",
    href: "mailto:hello@photo-kak-kino.ru",
  },
  image: {
    src: photo("ZlyChZVYM9lw85cRkOVVbrMIwImOVBju7YEtbuerTdBRS5eth_qWi3yvd8qszlz5B6ea57lbLgm_GRA4ZVDRXHMI.jpg"),
    alt: "Фотосессия у автомобиля",
  },
};
