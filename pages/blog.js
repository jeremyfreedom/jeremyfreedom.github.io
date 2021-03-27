import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const digitalNomadGuides = [
  { name: "Seoul, South Korea", uri: "seoul" },
  { name: "Belgrade, Serbia", uri: "belgrade" },
  { name: "Medellin, Colombia", uri: "medellin" },
  { name: "Puerto Escondido, Mexico", uri: "puerto-escondido" },
  { name: "Kyiv, Ukraine", uri: "kyiv" },
];

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jeremyfreedom</title>
        <meta name="description" content="Jeremy Freedom - Internet person" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Digital Nomad Guides</h1>
        <ul>
          {digitalNomadGuides.map((guide) => (
            <li key={guide.uri}>
              <Link href={`/g/${guide.uri}`}>{guide.name}</Link>
            </li>
          ))}
        </ul>
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
