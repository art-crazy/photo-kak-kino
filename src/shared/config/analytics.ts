export const yandexMetrikaId = 109885400;

const analyticsEnv = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS;

export const isAnalyticsEnabled =
  analyticsEnv === "true" ||
  (analyticsEnv !== "false" && process.env.NODE_ENV === "production");
