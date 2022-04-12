import React, {
  createContext,
  FunctionComponent,
  useContext,
  ReactNode,
} from "react";
import {
  CountryCode,
  getRandomCountry,
  getRandomLanguage,
  LanguageCode,
  Locale,
} from "./language";

interface ILocalization {
  country: CountryCode;
  language: LanguageCode;
  locale: Locale;
}

const LocalizationContext = createContext<ILocalization | undefined>(undefined);
LocalizationContext.displayName = "LocalizationContext";

interface ILocalizationContextProps {
  country: CountryCode;
  language: LanguageCode;
  children: ReactNode;
}

export const LocalizationContextProvider: FunctionComponent<
  ILocalizationContextProps
> = ({ children, language, country }) => {
  const locale: Locale = `${language}-${country}`;
  return (
    <LocalizationContext.Provider value={{ locale, country, language }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): ILocalization => {
  const localizationContext = useContext(LocalizationContext);
  if (!localizationContext) {
    throw new Error(
      "useLocalization can only be used inside of LocalizationContext"
    );
  }

  return localizationContext;
};
