import { getRandomLocale, Locale } from "./language";

declare global {
  var lang: Locale;
  namespace NodeJS {
    interface Global {
      lang: Locale;
    }
    interface Window {
      lang: Locale;
    }
  }
}

/** @deprecated use localization context instead */
export const getCurrentLanguage = (): Locale => {
  return "de-CH";
};
