import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";

import { getRandomCountry, getRandomLanguage } from "../lib/language";
import { LocalizationContextProvider } from "../lib/localization";
import App from "next/app";
import React from "react";
import Link from "next/link";
import styles from "../styles/page.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationContextProvider
      country={pageProps.country}
      language={pageProps.language}
    >
      <Component {...pageProps} />

      <footer className={styles.footer}>
        <div className={styles.grid}>
          <Link href="/localization" passHref>
            <h2 className={styles.card}>Localization Task</h2>
          </Link>

          <Link href="/task2" passHref>
            <h2 className={styles.card}>Task 2</h2>
          </Link>
        </div>
      </footer>
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
