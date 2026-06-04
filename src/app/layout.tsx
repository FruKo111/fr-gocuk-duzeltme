import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autoprime Ataşehir | Premium PPF Kaplama • Seramik Kaplama • Renk Değişimi",
  description:
    "Autoprime Ataşehir — Irona Protection Türkiye Distribütörü. İstanbul Ataşehir'de PPF şeffaf kaplama, seramik kaplama, renk değişimi, detaylı temizlik ve pasta cila hizmetleri. 10 yıl garanti, premium işçilik.",
  keywords: [
    "PPF kaplama Ataşehir",
    "seramik kaplama İstanbul",
    "renk değişimi",
    "boya koruma filmi",
    "Irona Protection",
    "arap kaplama",
    "pasta cila",
    "detaylı temizlik",
    "Autoprime Ataşehir",
    "oto kuaför Ataşehir",
  ],
  openGraph: {
    title: "Autoprime Ataşehir | Premium PPF Kaplama & Araç Koruma",
    description:
      "İstanbul Ataşehir'de premium PPF kaplama, seramik kaplama ve renk değişimi hizmetleri. Irona Protection distribütörü. 10 yıl garanti.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* DNS Preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Inter font — swap for zero CLS */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <meta name="theme-color" content="#0a0a0a" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5"
        />

        {/* Preload critical hero assets — instant video playback */}
        <link
          rel="preload"
          href="/videos/autoprimeatasehirvideo.mp4"
          as="video"
          type="video/mp4"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/gallery/autoprimeatasehirlogo.png"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/gallery/autoprimeatasehirbaslik.png"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen bg-base-deep text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
