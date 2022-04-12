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
    console.log("data context provider");

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
          toggleTheme,
          theme,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  };
