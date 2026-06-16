import {
  isAnalyticsEnabled,
  yandexMetrikaId,
} from "@/shared/config/analytics";
import { YandexMetrika } from "./YandexMetrika";

export function YandexMetrikaProvider() {
  if (!isAnalyticsEnabled) {
    return null;
  }

  return (
    <>
      <YandexMetrika />
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${yandexMetrikaId}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}

