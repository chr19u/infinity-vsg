import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import {
  getRandomCountry,
  getRandomLanguage,
  getRandomLocale,
} from "../public/lib/language";
import { LocalizationContextProvider } from "../public/lib/localization";
import { useRouter } from "next/router";
import App from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationContextProvider
      country={pageProps.country}
      language={pageProps.language}
    >
      <Component {...pageProps} />
    </LocalizationContextProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const country = getRandomCountry();
  const language = getRandomLanguage();
  appProps.pageProps.country = country;
  appProps.pageProps.language = language;
  return { ...appProps };
};
export default MyApp;
