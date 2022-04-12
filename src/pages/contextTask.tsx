import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { DataContext, DataContextProvider } from "../lib/dataContext";
import styles from "../styles/page.module.css";

const ContextTask: NextPage = () => {
  return (
    <DataContextProvider>
      <div className={styles.container}>
        <Head>
          <title>Kontext Re-Renderings</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Kontext Re-Renderings</h1>
          <p className={styles.task}>
            <b>Ausgangslage:</b> Die <code>translate()</code> Funktion kann
            momentan von überall direkt importiert und verwendet werden. Diese
            verwendet wiederum die veraltete Funktion{" "}
            <code>getCurrentLanguage()</code> um die aktuelle Sprache
            auszulesen.
            <br />
            <br />
            <b>Aufgabe:</b> Neu möchten wir <code>getCurrentLanguage()</code>{" "}
            entfernen und die aktuelle Sprache mit dem{" "}
            <code>useLocalization()</code> Hook auslesen. Erstelle dafür einen
            neuen React Hook, welcher die <code>translate()</code> Funktion
            bereitstellt.
          </p>

          <DataContext.Consumer>
            {({ pictureOfTheDay }) => (
              <>
                <h2>Picture of the day</h2>
                <img
                  src={pictureOfTheDay?.url}
                  height={400}
                  style={{
                    aspectRatio: `${pictureOfTheDay?.width} / ${pictureOfTheDay?.height}`,
                  }}
                  alt="A cat minding their business"
                />
                <br />
                <Link
                  href={`/contextTask?url=${encodeURIComponent(
                    "https://cdn2.thecatapi.com/images/72c.jpg"
                  )}`}
                >
                  Two Cats
                </Link>{" "}
                | <Link href={`/contextTask`}>Random Cats</Link>
              </>
            )}
          </DataContext.Consumer>
        </main>
      </div>
    </DataContextProvider>
  );
};

export default ContextTask;
