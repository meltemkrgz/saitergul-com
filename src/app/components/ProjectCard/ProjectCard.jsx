import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

function ProjectCard({ id, src, title, location, numberOfPhotos }) {
  return (
    <Link href={`/Projects/ProjectDetails?id=${id}`} className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          width={300}
          height={200}
          alt={title}
          className={styles.projectImage}
        />
      </div>
      <h3 className={styles.projectTitle}>{title}</h3>
      <div className={styles.cardDetails}>
        <div className={styles.detail}>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/marker--v1.png"
            alt="marker--v1"
            className={styles.icon}
          />
          <p>{location}</p>
        </div>
        <div className={styles.detail}>
          <img
            src="https://img.icons8.com/material-outlined/24/picture.png"
            alt="Fotoğraf"
            className={styles.icon}
          />
          <p>Fotoğraflar ({numberOfPhotos})</p>
        </div>
        <div className={styles.detail}>
          <p>İncelemek için tıkla</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;