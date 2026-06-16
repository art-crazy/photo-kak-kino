import type {
  ContactContent,
  FaqContent,
  HeroContent,
  ImageItem,
  IntroContent,
  NavLink,
} from "./types";

const photo = (fileName: string) => `/site-photos/${fileName}`;

export const siteName = "Ксения Аржанникова";

export const navLinks: NavLink[] = [
  { label: "Портфолио", href: "/#story" },
  { label: "Условия съемки", href: "/#conditions" },
  { label: "Контакты", href: "/#contact" },
];

export const hero: HeroContent = {
  label: "Фотограф в Санкт-Петербурге",
  title: "Ксения\nАржанникова",
  text: "Свадебная фотосъемка, Love Story, семейные и портретные фотосессии в Санкт-Петербурге. Сохраняю живые кадры: ветер, паузы, движение и людей такими, какими их хочется помнить.",
  action: {
    label: "Смотреть истории",
    href: "#story",
  },
  image: {
    src: photo("turoKkDMbohba004TWE0CWIbBW5kl5-LHAutLQyGaGfgK2yjsO95u1xQsA9pK2HBQ5Gq51HcuNd3k9_wr-ZR1Ki-.jpg"),
    alt: "Свадебная фотосессия пары у воды в Санкт-Петербурге",
  },
};

export const filmstripImages: ImageItem[] = [
  {
    src: photo("mWJXoKoxQih47_03D4Inf6fHFDx5B5uSrXyoo7_SUxrfR1JGyoJAipOcP51GQDkMjpYmJDhD_0ZH-Y4ArGVBmWwV.jpg"),
    alt: "Love Story фотосессия пары в Петербурге",
  },
  {
    src: photo("pAXRbf5UAOYSgvx18cRF9o9YCjtvkhQK6thGILy-xqVnlhs6JlAXW2oCiuVUhefq-SGAZGRMy7P9bF2rtRbCzyjT.jpg"),
    alt: "Городская фотопрогулка в Санкт-Петербурге",
  },
  {
    src: photo("ZlyChZVYM9lw85cRkOVVbrMIwImOVBju7YEtbuerTdBRS5eth_qWi3yvd8qszlz5B6ea57lbLgm_GRA4ZVDRXHMI.jpg"),
    alt: "Портретная фотосессия у автомобиля в Петербурге",
  },
  {
    src: photo("E2pAfC4w-fjXYiBDQuqs7ksAXyofxv6DfmSNnTl6XufNBmDvL1RfKSbFNmLLmNsYdnX4pKlZjtT8PgPe_YMFOj-i.jpg"),
    alt: "Свадебная фотосъемка в городе",
  },
  {
    src: photo("yYAL4u5zVqZArW77uK0w9QSo9CPnwArR96GI4J2V2gvjgAIYtfgFq0rCJ9_ty4oc1ao0_4P2R1905l0cxoIQSYvY.jpg"),
    alt: "Живой портрет на фотосессии в Санкт-Петербурге",
  },
  {
    src: photo("Q1jpYoVHgIRQFkKCbbPwLHawzfQbTBjpN6pNkW-PkJp7TVhcpDU6239qll2YYEGRJpPujqDDEzx21OoQnlTYuaE0.jpg"),
    alt: "Свадебная история в Петербурге",
  },
];

export const intro: IntroContent = {
  label: "О фотографии",
  title: "Не постановка, а чувство, которое успели поймать.",
  text: "Я снимаю свадьбы, Love Story, семейные прогулки и портреты так, будто собираю личный фотоальбом: немного воздуха, неровный ветер, взгляд между фразами, руки на холодном металле, свет из окна старой парадной. В Петербурге для меня важны не только известные места — вода, модернистские фасады, дворы, лестницы, вечерняя Петроградка, — но и паузы между ними.",
  note: "Главное — чтобы спустя годы кадры не выглядели модно, а ощущались живыми.",
  image: {
    src: photo("pgi654FSmsxYRe5luNlauvG1jC6NAukEGWiCncdNbiUz36L7tqJptQ1-sL3XoOlhwo3p8Uay07C5x_n5Pur9-zd3.jpg"),
    alt: "Фотограф Ксения Аржанникова с камерой",
  },
};

export const faq: FaqContent = {
  label: "Условия съемки",
  title: "Что важно знать перед фотосессией.",
  items: [
    {
      question: "Какие съемки можно заказать?",
      answer:
        "Свадебную фотосъемку, Love Story, семейную съемку, индивидуальный портрет и городскую фотопрогулку в Санкт-Петербурге.",
    },
    {
      question: "Где проходит съемка?",
      answer:
        "Маршрут подбирается под историю и погоду: улицы Петербурга, набережные, дворы, парадные, студия или место, важное именно для вас.",
    },
    {
      question: "Как забронировать дату?",
      answer:
        "Напишите заранее, расскажите формат и желаемую дату. После согласования времени дата закрепляется договоренностью и предоплатой.",
    },
    {
      question: "Как вы отдаете фотографии?",
      answer:
        "Готовые кадры передаются в личной онлайн-галерее. Фотографии удобно скачать, переслать близким и сохранить в полном размере.",
    },
  ],
};

export const contact: ContactContent = {
  label: "Записаться",
  title: "Расскажите, какой день хочется сохранить.",
  text: "Свадебная фотосъемка в Санкт-Петербурге — от 55 000 ₽. Love Story, семейные съемки, портреты и городские прогулки — от 18 000 ₽. Напишите, и я предложу маршрут, тайминг и спокойный план съемки.",
  action: {
    label: "Telegram",
    href: "mailto:hello@photo-kak-kino.ru",
  },
  image: {
    src: photo("ZlyChZVYM9lw85cRkOVVbrMIwImOVBju7YEtbuerTdBRS5eth_qWi3yvd8qszlz5B6ea57lbLgm_GRA4ZVDRXHMI.jpg"),
    alt: "Портретная фотосессия у автомобиля в Санкт-Петербурге",
  },
};
