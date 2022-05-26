import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  youtubeIcon,
  instagramIcon,
  twitterIcon,
  mailIcon,
} from "../components/SocialMediaIcons";
import { useEffect } from "react";
import TextScramble from "../lib/TextScramble";
import Link from "next/link";

const randomMessages = [
  "human, or idea?",
  "are you awake?",
  "we're all gonna make it",
  "into the infinite",
  "escaping the comfort zone",
  "freedom of life",
  "freedom from inhibitions",
  "we are all one",
  "it's an illusion",
  "outside the mind",
  "higher conscious",
  "who's in control?",
  "no regrets",
  "sentience",
  "a figment of your imagination",
];

const randomNum = Math.floor(Math.random() * randomMessages.length);

export default function Home() {
  useEffect(() => {
    const el = document.getElementById("title");
    const headerFx = new TextScramble(el);
    headerFx.setText(title.innerHTML);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>jeremyfreedom</title>
        <meta name="description" content="Jeremy Freedom - Internet person" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/img/square.jpg" className={styles["portrait-logo"]} />
        <h1 id="title" className={styles.title}>
          jeremyfreedom
        </h1>
        <nav className={styles["social-media-icons"]}>
          {twitterIcon} {youtubeIcon} {instagramIcon}
          {mailIcon}
        </nav>

        <p className={`${styles.description} fade-in`}>
          {randomMessages[randomNum]}
        </p>

        <div className={styles.grid}>
          <Link href="https://jsavage.xyz/">
            <a className={styles.card}>
              <h3>🖉 blog / email newsletter &rarr;</h3>
              <p>long form content that no one reads</p>
            </a>
          </Link>

          <a
            href="https://www.youtube.com/c/JDiculous1"
            className={styles.card}
          >
            <h3>{youtubeIcon} youtube &rarr;</h3>
            <p>
              random vanity videos with occasional attempt to add value to the
              world
            </p>
          </a>

          <a
            href="https://www.instagram.com/cityofjeremy"
            className={styles.card}
          >
            <h3>{instagramIcon} instagram &rarr;</h3>
            <p>
              showing off travels & only the good parts of my life to make you
              FOMO
            </p>
          </a>

          <a
            href="https://discord.com/channels/484496726154280969/484496726741352450"
            className={styles.card}
          >
            <h3>👥 discord &rarr;</h3>
            <p>dead community channel</p>
          </a>

          <a href="https://www.reddit.com/r/jFreedom" className={styles.card}>
            <h3>👥 reddit &rarr;</h3>
            <p>dead internet forum</p>
          </a>

          <a href="https://www.jbernier.com" className={styles.card}>
            <h3>♖ software consulting &rarr;</h3>
            <p>for those who want to pay me money to fiddle with computers</p>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
