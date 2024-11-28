import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.topbar}>
        <h1 className={styles.logo}>Logo</h1>
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
            <Link href={"#"}>Anasayfa</Link>
        </li>
        <li>
            <Link href={"#"}>Hizmetlerimiz</Link>
        </li>
        <li>
            <Link href={"#"}>Projeler</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
