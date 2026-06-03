import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FR Göçük Düzeltme | OLEX FILMS Resmî Bayii • Boyasız Göçük Düzeltme",
  description:
    "FR Göçük Düzeltme — OLEX FILMS resmî bayii. Boyasız göçük düzeltme, dolu hasarı onarımı, seramik kaplama ve PPF hizmetleri. Fotoğraf gönderin, anında fiyat alın.",
  keywords: [
    "boyasız göçük düzeltme",
    "dolu hasarı onarımı",
    "OLEX FILMS",
    "seramik kaplama",
    "PPF",
    "detayling",
    "göçük onarım",
    "FR Göçük Düzeltme",
  ],
  openGraph: {
    title: "FR Göçük Düzeltme | OLEX FILMS Resmî Bayii",
    description:
      "Boyasız göçük düzeltme, dolu hasarı onarımı ve premium detayling hizmetleri. Fotoğraf gönderin, fiyat alın.",
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
      </head>
      <body className="min-h-screen bg-base-deep text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
