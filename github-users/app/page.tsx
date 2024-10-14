import Image from "next/image";
import styles from "./page.module.css";
import Contact from "./users/page";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Github</title>
    </Head>
    <Contact />
    </>
  );
}
