import type { NextPage } from "next";
import Head from "next/head";
import { getCurrentLanguage } from "../public/lib/getCurrentLanguage";
import { useLocalization } from "../public/lib/localization";
import { translate } from "../public/lib/translation";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { locale } = useLocalization();
  const globalLanguage = getCurrentLanguage();

  return (
    <div className={styles.container}>
      <Head>
        <title>Task 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Task 1</h1>

        <h2>{`Global language: ${globalLanguage}`}</h2>
        <h2>{`Localization Context: ${locale}`}</h2>

        <h2>{translate("Hello [0]", ["Hans"])}</h2>
        <h2>{translate("Hello [0]", ["Fritz"])}</h2>
        <h2>{translate("Bike", ["Hans"])}</h2>
      </main>
    </div>
  );
};

export default Home;
