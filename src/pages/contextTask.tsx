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

        <DataContext.Consumer>
          {({ pictureOfTheDay, toggleTheme, theme }) => (
            <main
              className={styles.main}
              style={
                theme === "dark" ? { background: "#111", color: "white" } : {}
              }
            >
              <h1 className={styles.title}>Kontext Re-Renderings</h1>

              <p className={styles.task}>
                <b>Ausgangslage:</b> Der <code>DataContext</code> liefert das
                «Picture of the day», welches von einer API zufällig generiert
                wird. Bei der aktuellen Implementation wird das Bild beim
                Neuladen der Seite immer zweimal geladen, was ziemlich unschön
                ist.
                <br />
                <br />
                <b>Aufgabe:</b> Um unsere APIs zu entlasten, soll das Bild nur
                noch 1x geladen und angezeigt werden. Bonus: Ich kann per{" "}
                <Link
                  href={`/contextTask?url=${encodeURIComponent(
                    "https://cdn2.thecatapi.com/images/72c.jpg"
                  )}`}
                >
                  Link
                </Link>{" "}
                direkt eine <code>url</code> als Query-Parameter übergeben,
                welche angezeigt werden soll oder ein{" "}
                <Link href={`/contextTask?random=${Date.now()}`}>
                  random Bild
                </Link>{" "}
                anzeigen.
              </p>

              <h2>Picture of the day</h2>

              <img
                src={pictureOfTheDay?.url}
                height={400}
                style={
                  pictureOfTheDay?.width && pictureOfTheDay?.width
                    ? {
                        aspectRatio: `${pictureOfTheDay.width} / ${pictureOfTheDay.height}`,
                      }
                    : {}
                }
              />

              <br />
              <button onClick={() => toggleTheme()}>Toggle Theme</button>
            </main>
          )}
        </DataContext.Consumer>
      </div>
    </DataContextProvider>
  );
};

export default ContextTask;
