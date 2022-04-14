import { useRouter } from "next/router";
import React, {
  createContext,
  FunctionComponent,
  useContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
  useMemo,
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
  toggleTheme: () => void;
  theme: "light" | "dark";
}>({
  pictureOfTheDay: undefined,
  toggleTheme: () => {},
  theme: "light",
});

export const DataContextProvider: FunctionComponent<{ children: ReactNode }> =
  ({ children }) => {
    const [pictureOfTheDay, setPictureOfTheDay] = useState<Picture>();
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const { query } = useRouter();

    const toggleTheme = () => setTheme(theme !== "light" ? "light" : "dark");

    useEffect(() => {
      if (query.url) {
        // render specific image
        setPictureOfTheDay({ url: query.url as string });
      } else {
        // render random image
        fetchRandomPicture().then((pic) => setPictureOfTheDay(pic));
      }
    }, []);

    return (
      <DataContext.Provider
        value={{
          pictureOfTheDay,
          toggleTheme,
          theme,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  };
