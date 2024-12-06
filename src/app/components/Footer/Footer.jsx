import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss"; // Import the SCSS file as Link module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__contact-container"]}>
        <p className={styles["footer__contact-text"]}>
          Sorunuz mu var? Bize ulaşın.
        </p>
        <div className={styles["footer__contact-details"]}>
          <p className={styles["footer__contact-item"]}>
            Email:{" "}
            <Link
              href="mailto:info@saitergul.com"
              className={styles["footer__link"]}
            >
              destek@saitergul.com
            </Link>
          </p>
          <p className={styles["footer__contact-item"]}>
            Telefon:{" "}
            <Link href="tel:+905530268919" className={styles["footer__link"]}>
              0553 026 89 19
            </Link>
          </p>
        </div>
      </div>

      <div className={styles["footer__links-container"]}>
        <div className={styles["footer__column"]}>
          <Link href={"/AboutUs"}>Şirket</Link>
        </div>

        <div className={styles["footer__column"]}>
          <Link href={"/Projects"}>Kaynaklar</Link>

        </div>

        <div className={styles["footer__column"]}>
          <Link href={"/Privacy"}>Gizlilik</Link>

        </div>
      </div>

      <div className={styles["footer__bottom"]}>
        <p>&copy; 2025 saitergul.com. All rights reserved.</p>
        <p>Created by <Link href={"https://mertkiziltas.com"}>mertkiziltas.com</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
