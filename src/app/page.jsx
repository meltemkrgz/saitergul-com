import Image from "next/image";
import styles from "./page.module.scss";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar></Navbar>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my website</h1>
      </main>
    </div>
  );
}
