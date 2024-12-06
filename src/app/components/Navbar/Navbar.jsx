import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.topbar}>
        <div className={styles.logo}>
          <Image
            src={"/logo.png"}
            width={"300"}
            height={"200"}
            alt="sait-ergul-logo"
          ></Image>
        </div>
        <Link href={"#"} className={styles.contactLink}>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png"
            alt="phone"
          />
          İletişim
        </Link>
      </div>
      <ul className={styles.tabbar}>
        <li>
          <Link href={"/"}>Anasayfa</Link>
        </li>
        <li>
          <Link href={"/Services"}>Hizmetlerimiz</Link>
        </li>
        <li>
          <Link href={"/Projects"}>Projeler</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
