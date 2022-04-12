import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/page.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Task 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Task 2</h1>
      </main>
    </div>
  );
};

export default Home;
