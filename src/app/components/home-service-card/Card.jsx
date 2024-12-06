import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

function Card({ cardTitle, cardDescription, cardImage }) {
  return (
    <div className={styles.Card}>
      <h3 className={styles.cardTitle}>{cardTitle}</h3>
      <p className={styles.cardDescription}>{cardDescription}</p>
      <Image
        src={cardImage}
        width={"400"}
        height={"400"}
        alt="home-services-homeThumbnail.jpg"
      ></Image>
      <div className={styles.btnWrapper}>
        <Link href={"#"}>Projeleri Gör</Link>
        <Link href={"#"}>Hemen Teklif Al</Link>
      </div>
    </div>
  );
}

export default Card;
