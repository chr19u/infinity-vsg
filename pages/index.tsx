import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digitec Galaxus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome Patrick!</h1>

        <div className={styles.grid}>
          <Link href="/task1" passHref>
            <h2 className={styles.card}>Task 1</h2>
          </Link>

          <Link href="/task2" passHref>
            <h2 className={styles.card}>Task 2</h2>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
