import Image from "next/image";
import styles from "./page.module.scss";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar></Navbar>
      <main className={styles.main}>
        <div className={styles.banner}>
          <div className={styles.bannerTitle}>
            <h3 className={styles.title}>
              Hayalinizdeki Ev İçin En Güvenilir Prefabrik Ev Firmasından Teklif
              Alın
            </h3>
            <p>
              Hayalinizdeki evi, bütçeniz dahilinde inşa edebilecek en tecrübeli
              ve bilinir prefabrik firmasından ücretsiz teklif alın.
            </p>
          </div>
          <div>
            <Image
              src={"/images/banner.jpg"}
              width={"200"}
              height={"200"}
            ></Image>
            <button className={styles.button}>Ücretsiz Teklif Al</button>
          </div>
        </div>
      </main>
    </div>
  );
}
