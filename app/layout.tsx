import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SmoothHashScroll } from "@/components/SmoothHashScroll";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Jasa Pembuatan Website UMKM`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Jasa pembuatan website untuk UMKM, personal brand, toko kecil, dan jasa lokal dengan harga terjangkau dan CTA WhatsApp.",
  openGraph: {
    title: `${siteConfig.name} | Website UMKM Cepat dan Responsif`,
    description:
      "Bantu usaha tampil profesional dengan website rapi, responsif, dan mudah dihubungi lewat WhatsApp.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/images/dewa-web-service-logo.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased">
        <SmoothHashScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
