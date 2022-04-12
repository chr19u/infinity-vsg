import { ReactNode, Fragment } from "react";
import { getCurrentLanguage } from "./getCurrentLanguage";
import { Locale } from "./language";

type ITranslationInterpolation = string | number | boolean | ReactNode;

export const translate = (
  key: string,
  interpolations?: ITranslationInterpolation[]
): ReactNode => {
  const locale = getCurrentLanguage();

  const translation =
    translations[key]?.[locale] ?? `"${key}" translated to ${locale}`;

  if (!interpolations?.length) {
    return translation;
  }

  const parts = getTranslationParts(translation);
  let onlyStrings = true;

  const interpolatedTranslations = parts.map((val: string, i: number) => {
    if (containsPlaceholder(val)) {
      const interpolation = interpolations[getPlaceholderIndex(val)];
      if (
        typeof interpolation === "string" ||
        typeof interpolation === "number"
      ) {
        return interpolation;
      }
      onlyStrings = false;

      return <Fragment key={i}>{interpolation}</Fragment>;
    }
    return val;
  });

  return onlyStrings
    ? interpolatedTranslations.join("")
    : interpolatedTranslations;
};

export const containsPlaceholder = (value: string): boolean =>
  value.indexOf("[") !== -1;
export const getPlaceholderIndex = (value: string): number =>
  +value.slice(value.indexOf("[") + 1, value.indexOf("]"));
export const getTranslationParts = (translation: string): string[] =>
  translation.split(/(\[\d+\])/g);

type Translation = Record<Locale, string>;
const translations: Record<string, Translation> = {
  "Hello [0]": {
    "de-CH": "Hallo [0]",
    "de-DE": "Hallo [0]",
    "en-CH": "Hello [0]",
    "en-DE": "Hello [0]",
  },
  Bike: {
    "de-CH": "Velo",
    "de-DE": "Fahrrad",
    "en-CH": "Bike",
    "en-DE": "Bike",
  },
};
