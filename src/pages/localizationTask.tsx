import type { NextPage } from "next";
import Head from "next/head";
import { getCurrentLanguage } from "../lib/getCurrentLanguage";
import { useLocalization } from "../lib/localization";
import { translate } from "../lib/translation";
import styles from "../styles/page.module.css";

const LocalizationTask: NextPage = () => {
  const { locale } = useLocalization();
  const globalLanguage = getCurrentLanguage();

  return (
    <div className={styles.container}>
      <Head>
        <title>Localization Hook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Translation Hook</h1>
        <p className={styles.task}>
          <b>Ausgangslage:</b> Die <code>translate()</code> Funktion kann
          momentan von überall direkt importiert und verwendet werden. Diese
          verwendet wiederum die veraltete Funktion{" "}
          <code>getCurrentLanguage()</code> um die aktuelle Sprache auszulesen.
          <br />
          <br />
          <b>Aufgabe:</b> Neu möchten wir <code>getCurrentLanguage()</code>{" "}
          entfernen und die aktuelle Sprache mit dem{" "}
          <code>useLocalization()</code> Hook auslesen. Erstelle dafür einen
          neuen React Hook, welcher die <code>translate()</code> Funktion
          bereitstellt.
        </p>

        <h2>{`Global language: ${globalLanguage}`}</h2>
        <h2>{`Localization Context: ${locale}`}</h2>

        <h2>{translate("Hello [0]", ["Hans"])}</h2>
        <h2>{translate("Hello [0]", ["Fritz"])}</h2>
        <h2>{translate("Bike", ["Hans"])}</h2>
      </main>
    </div>
  );
};

export default LocalizationTask;
