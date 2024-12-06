"use client";
import React from "react";
import styles from "./styles.module.scss";
import Card from "../components/services-serviceCard/Card";

function page() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <Card
          title="Ev ve Yaşam Alanları"
          description="Hayalinizdeki evi inşa etmek hiç bu kadar kolay olmamıştı! Prefabrik yaşam alanlarımız ile hızlıca konforlu bir yaşam alanına sahip olun. Şimdi, düşük maliyet ve yüksek kaliteyi bir arada sunuyoruz."
          imgSrc="/services-serviceThumbnail.jpeg"
          ctaText="İncele"
        />
        <Card
          title="Ofis ve İşyeri"
          description="İşinizi büyütmek ve ofis ihtiyaçlarınızı karşılamak hiç bu kadar kolay olmamıştı! Prefabrik ofis ve işyeri çözümlerimiz ile hızla işinize uygun, modern ve fonksiyonel bir alan yaratın."
          imgSrc="/services-officeThumbnail.jpg"
          ctaText="İncele"
        />
        <Card
          title="Özel Projeler"
          description="Her proje benzersizdir ve biz de bunu biliyoruz! Özel ihtiyaçlarınıza göre tasarlanmış prefabrik yapılarla, hayallerinizdeki projeyi gerçeğe dönüştürün. İster ticari, ister konut amaçlı olsun, sizin için mükemmel çözümü sunuyoruz."
          imgSrc="/services-specialThumbnail.jpg"
          ctaText="İncele"
        />
      </main>
    </div>
  );
}

export default page;
