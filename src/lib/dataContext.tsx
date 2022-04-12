import { useRouter } from "next/router";
import React, {
  createContext,
  FunctionComponent,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { fetchRandomPicture, Picture } from "./fetchRandomPicture";
import {
  CountryCode,
  getRandomCountry,
  getRandomLanguage,
  LanguageCode,
  Locale,
} from "./language";

export const DataContext = createContext<{
  pictureOfTheDay: Picture | undefined;
}>({
  pictureOfTheDay: undefined,
});

export const DataContextProvider: FunctionComponent<{ children: ReactNode }> =
  ({ children }) => {
    const [pictureOfTheDay, setPictureOfTheDay] = useState<Picture>();
    const { query } = useRouter();

    useEffect(() => {
      if (query.url) {
        setPictureOfTheDay({ url: query.url as string });
      } else {
        fetchRandomPicture().then((pic) => setPictureOfTheDay(pic));
      }
    }, []);

    return (
      <DataContext.Provider
        value={{
          pictureOfTheDay,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  };
