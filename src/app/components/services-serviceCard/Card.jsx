import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

function Card({ title, description, imgSrc, ctaText, onCtaClick }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imgSrc} alt={title} width={300} height={200} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <ul>
          <li>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/speed--v1.png"
              alt="speed--v1"
            />
            <p>Hızlı Kurulum</p>
          </li>
          <li>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios-glyphs/30/hot-price--v1.png"
              alt="hot-price--v1"
            />
            <p>Uygun Fiyat</p>
          </li>
          <li>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/wired/64/flex-biceps.png"
              alt="flex-biceps"
            />
            <p>Dayanıklı</p>
          </li>
          <li>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/external-soleicons-line-amoghdesign/34/external-agrarian-soleicons-line-vol-1-soleicons-line-amoghdesign.png"
              alt="external-agrarian-soleicons-line-vol-1-soleicons-line-amoghdesign"
            />
            <p>Çevre Dostu</p>
          </li>
        </ul>
        <Link href={"/Services/#"} className={styles.ctaButton}>
          {ctaText}
        </Link>
      </div>
    </div>
  );
}

export default Card;
