import './globals.css';

export const metadata = {
  title: "Hatay Prefabrik Ev ve Ofis | Uygun Fiyatlı Prefabrik Çözümler",
  description: "Hatay'da uygun fiyatlı prefabrik ev, ofis ve dayanıklı yapı çözümleri. Hızlı ve ekonomik projeler için bizi hemen arayın!",
  keywords: "Hatay prefabrik ev, prefabrik ofis, uygun fiyatlı prefabrik, prefabrik ev Hatay, Hatay yapı çözümleri",
  openGraph: {
    type: "website",
    title: "Hatay Prefabrik Ev ve Ofis | Kaliteli ve Hızlı Çözümler",
    description: "Hatay'da uygun fiyatlı prefabrik ev, ofis ve dayanıklı yapı çözümleri. Hızlı ve ekonomik projeler için bizi hemen arayın!",
    url: "https://saitergul.com",
    images: [
      { url: "https://hatayprefabrik.com/og-image.jpg", width: 1200, height: 630, alt: "Prefabrik Ev Hatay" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hatay Prefabrik Ev ve Ofis",
    description: "Hatay'da uygun fiyatlı prefabrik ev, ofis ve dayanıklı yapı çözümleri. Hızlı ve ekonomik projeler için bizi hemen arayın!",
    images: ["https://hatayprefabrik.com/twitter-image.jpg"],
  },
  charset: "UTF-8",
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Montserrat', sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
