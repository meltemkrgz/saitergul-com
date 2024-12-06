import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import Card from "./components/home-service-card/Card";
import Marquee from "./components/Marquee/Marquee";
import AnimatedNumber from "./hooks/AnimatedNumber";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.banner}>
          <Image
            src={"/banner.jpg"}
            width={"1200"}
            height={"1000"}
            alt="Banner"
          />
          <div className={styles.overlay}>
            <h2>
              Modern, Dayanıklı ve Hızlı Çözümler: Prefabrik Ev ve Ofisler!
            </h2>
            <Link href={"#"}>Hemen iletişime geç</Link>
          </div>
        </div>
        <Marquee
          words={[
            "Antakya",
            "Defne",
            "Arsuz",
            "Dörtyol",
            "Erzin",
            "Hassa",
            "İskenderun",
            "Kırıkhan",
            "Payas",
            "Reyhanlı",
            "Samandağ",
            "Yayladağı",
            "Altınözü",
            "Belen",
            "Kumlu",
          ]}
        ></Marquee>
        <div className={styles.section}>
          <div>
            <h2 className={styles.partTitle}>Hizmetlerimiz</h2>
            <div className={styles.services}>
              <Card
                cardTitle={"Prefabrik Yaşam Alanları"}
                cardDescription={
                  "Dayanıklı ve ekonomik prefabrik yapılarla bütçenizi koruyarak konforlu yaşam alanları inşa edin."
                }
                cardImage={"/home-services-homeThumbnail.jpg"}
              ></Card>
              <Card
                cardTitle={"Prefabrik Ofis"}
                cardDescription={
                  "Prefabrik ofis yapılarıyla hızlı, ekonomik ve taşınabilir çalışma alanları oluşturun. Hem estetik hem de fonksiyonel çözümlerle iş yerinizi bir adım öteye taşıyın!"
                }
                cardImage={"/home-services-officeThumbnail.jpg"}
              ></Card>
              <Card
                cardTitle={"Özel Projeler"}
                cardDescription={
                  "Standartların ötesine geçin! İhtiyacınıza ve hayalinize uygun, tamamen size özel prefabrik çözümlerle kişiselleştirilmiş yapılar inşa ediyoruz."
                }
                cardImage={"/home-services-specialprojectThumbnail.jpg"}
              ></Card>
            </div>
          </div>
          <div className={styles.preferUs}>
            <Image
              src={"/home-builder.png"}
              width={"400"}
              height={"600"}
              alt="home-builder.png"
            />
            <div>
              <h3 className={styles.preferUsTitle}>
                Hatay'ın Öncü Prefabrik Yapı Firması
              </h3>
              <p>
                Yılların tecrübesi ve modern tasarımlarımızla, dayanıklı ve
                estetik prefabrik yapılar üretiyoruz. Hızlı teslimat ve müşteri
                memnuniyeti garantisiyle yanınızdayız.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <h4>
                    <AnimatedNumber end={120} duration={3} />+
                  </h4>
                  <p>Tamamlanmış Proje</p>
                </div>
                <div className={styles.stat}>
                  <h4>
                    <AnimatedNumber end={200} duration={3} />+
                  </h4>
                  <p>Memnun Müşteri</p>
                </div>
                <div className={styles.stat}>
                  <h4>
                    <AnimatedNumber end={15} duration={3} />+
                  </h4>
                  <p>Yıllık Tecrübe</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactUs}>
            <h3 className={styles.contactUsTitle}>İletişime Geç</h3>
            <ul className={styles.content}>
              <li>
                <Link href={"tel:+905530268919"}>
                  <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/ios-filled/50/phone.png"
                    alt="phone"
                  />
                </Link>
              </li>
              <li>
                <Link href={"mailto:destek@saitergul.com"}>
                  <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/color/48/gmail-new.png"
                    alt="gmail-new"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.instagram.com/sait.ergul31?igsh=ZnRwdW1yY3I4eG16"
                  }
                >
                  <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/fluency/48/instagram-new.png"
                    alt="instagram-new"
                  />
                </Link>
              </li>
              <li>
                <Link href={"https://wa.me/905530268919"}>
                  <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/color/48/whatsapp--v1.png"
                    alt="whatsapp--v1"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}