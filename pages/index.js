import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  youtubeIcon,
  instagramIcon,
  twitterIcon,
  mailIcon,
} from "../components/SocialMediaIcons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jeremyfreedom</title>
        <meta name="description" content="Jeremy Freedom - Internet person" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/img/square.jpg" className={styles["portrait-logo"]} />
        <h1 className={styles.title}>jeremyfreedom</h1>
        <nav className={styles["social-media-icons"]}>
          {youtubeIcon} {instagramIcon} {twitterIcon}
          {mailIcon}
        </nav>

        <p className={styles.description}>are you awake?</p>

        <div className={styles.grid}>
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
              feel shitty about yours
            </p>
          </a>

          <a
            href="https://jeremyfreedom.substack.com/archive"
            className={styles.card}
          >
            <h3>🖉 blog &rarr;</h3>
            <p>long form content that no one reads</p>
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
