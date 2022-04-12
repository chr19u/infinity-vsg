const languageCodes = ["de", "en"] as const;
const countryCodes = ["CH", "DE"] as const;
export type LanguageCode = typeof languageCodes[number];
export type CountryCode = typeof countryCodes[number];
export type Locale = `${LanguageCode}-${CountryCode}`;

export const getRandomCountry = () =>
  countryCodes[Math.floor(Math.random() * countryCodes.length)];

export const getRandomLanguage = () =>
  languageCodes[Math.floor(Math.random() * languageCodes.length)];

export const getRandomLocale = (): Locale => {
  const country = getRandomCountry();
  const language = getRandomLanguage();

  return `${language}-${country}`;
};
