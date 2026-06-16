import type { ServicePageContent } from "./types";

const photo = (fileName: string) => `/site-photos/${fileName}`;

const commonFaq = {
  booking: {
    question: "Как забронировать дату?",
    answer:
      "Напишите формат съемки, город и желаемую дату. После обсуждения тайминга дата закрепляется договоренностью и предоплатой.",
  },
  result: {
    question: "Как я получу фотографии?",
    answer:
      "Готовые кадры передаются в личной онлайн-галерее: их удобно скачать, отправить близким и сохранить в полном размере.",
  },
};

export const servicePages: ServicePageContent[] = [
  {
    city: "Санкт-Петербург",
    citySlug: "sankt-peterburg",
    serviceSlug: "svadebnyj-fotograf",
    label: "Свадебная фотосъемка",
    title: "Свадебный фотограф в Санкт-Петербурге",
    description:
      "Свадебный фотограф в Санкт-Петербурге: живая фотосъемка полного дня, регистрации, прогулки и камерной свадьбы.",
    lead:
      "Снимаю свадьбы в Санкт-Петербурге спокойно и внимательно: регистрацию, прогулку, семейные объятия, город, свет, ветер и детали дня.",
    image: {
      src: photo("E2pAfC4w-fjXYiBDQuqs7ksAXyofxv6DfmSNnTl6XufNBmDvL1RfKSbFNmLLmNsYdnX4pKlZjtT8PgPe_YMFOj-i.jpg"),
      alt: "Свадебный фотограф в Санкт-Петербурге, пара в городе",
    },
    serviceType: "Свадебная фотосъемка в Санкт-Петербурге",
    price: "от 55 000 ₽",
    sections: [
      {
        title: "Для каких свадеб подходит съемка",
        text: "Полный свадебный день, камерная регистрация, прогулка вдвоем, банкет, утро невесты и короткая городская история после ЗАГСа.",
      },
      {
        title: "Локации в Петербурге",
        text: "Подбираю маршрут под погоду и настроение: центр Петербурга, набережные, парадные, дворцы, студии и загородные площадки.",
      },
    ],
    faq: [
      {
        question: "Можно ли снять только регистрацию и прогулку?",
        answer:
          "Да. Для небольшой свадьбы можно собрать короткий маршрут без лишней спешки и оставить в кадрах самое важное.",
      },
      commonFaq.booking,
      commonFaq.result,
    ],
    keywords: [
      "свадебный фотограф СПб",
      "свадебный фотограф Санкт-Петербург",
      "фотограф на свадьбу СПб",
    ],
  },
  {
    city: "Санкт-Петербург",
    citySlug: "sankt-peterburg",
    serviceSlug: "love-story",
    label: "Love Story",
    title: "Love Story фотосессия в Санкт-Петербурге",
    description:
      "Love Story фотосессия в Санкт-Петербурге: прогулка для пары, живые кадры без напряженной постановки.",
    lead:
      "Love Story в Петербурге — это прогулка для двоих: немного города, немного тишины и кадры, в которых важны не позы, а близость.",
    image: {
      src: photo("mWJXoKoxQih47_03D4Inf6fHFDx5B5uSrXyoo7_SUxrfR1JGyoJAipOcP51GQDkMjpYmJDhD_0ZH-Y4ArGVBmWwV.jpg"),
      alt: "Love Story фотосессия пары в Санкт-Петербурге",
    },
    serviceType: "Love Story фотосессия в Санкт-Петербурге",
    price: "от 18 000 ₽",
    sections: [
      {
        title: "Как проходит съемка",
        text: "Мы выбираем маршрут, идем в удобном темпе, останавливаемся там, где красиво ложится свет, и не превращаем съемку в набор поз.",
      },
      {
        title: "Для чего подходит Love Story",
        text: "Перед свадьбой, на годовщину, в поездке по Петербургу или просто как личная история пары без повода.",
      },
    ],
    faq: [commonFaq.booking, commonFaq.result],
    keywords: [
      "Love Story СПб",
      "лав стори Санкт-Петербург",
      "фотосессия пары СПб",
    ],
  },
  {
    city: "Москва",
    citySlug: "moskva",
    serviceSlug: "svadebnyj-fotograf",
    label: "Свадебная фотосъемка",
    title: "Свадебный фотограф в Москве",
    description:
      "Свадебный фотограф в Москве: выездная съемка полного дня, регистрации, прогулки и камерной свадьбы.",
    lead:
      "Приезжаю на свадебную съемку в Москву, если вам близок спокойный кинематографичный стиль без жесткой постановки.",
    image: {
      src: photo("Q1jpYoVHgIRQFkKCbbPwLHawzfQbTBjpN6pNkW-PkJp7TVhcpDU6239qll2YYEGRJpPujqDDEzx21OoQnlTYuaE0.jpg"),
      alt: "Свадебный фотограф в Москве, живая свадебная история",
    },
    serviceType: "Свадебная фотосъемка в Москве",
    price: "по запросу",
    sections: [
      {
        title: "Когда стоит выбрать выездную съемку",
        text: "Если свадьба проходит в Москве, но вам нужен фотограф с мягкой документальной подачей, вниманием к людям и спокойным темпом.",
      },
      {
        title: "Что входит в подготовку",
        text: "Заранее обсуждаем маршрут, тайминг, свет, регистрацию, прогулку и важные семейные кадры, чтобы в день свадьбы не терять время.",
      },
    ],
    faq: [
      {
        question: "Вы снимаете свадьбы в Москве?",
        answer:
          "Да, возможен выезд в Москву. Условия зависят от даты, длительности съемки и логистики.",
      },
      commonFaq.booking,
      commonFaq.result,
    ],
    keywords: [
      "свадебный фотограф МСК",
      "свадебный фотограф Москва",
      "фотограф на свадьбу Москва",
    ],
  },
];

export const servicePageParams = servicePages.map((page) => ({
  citySlug: page.citySlug,
  serviceSlug: page.serviceSlug,
}));

export function getServicePage(citySlug: string, serviceSlug: string) {
  return servicePages.find(
    (page) => page.citySlug === citySlug && page.serviceSlug === serviceSlug,
  );
}

export function getServicePagePath(page: ServicePageContent) {
  return `${page.citySlug}/${page.serviceSlug}`;
}
