import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Axeliron — Tu landing que vende, online en 7 días por USD 300",
  description:
    "Diseño, copy y desarrollo de landing pages de alta conversión. Lista en 7 días hábiles, USD 300 pago único y garantía de satisfacción.",
  keywords:
    "landing page, landing page barata, alta conversión, diseño web, leads, landing en 7 días, coaches, clínicas, pymes",
  openGraph: {
    title: "Axeliron — Tu landing que vende, online en 7 días",
    description: "Landing pages de alta conversión por USD 300. Diseño + copy + desarrollo en 7 días hábiles.",
    type: "website",
    locale: "es_AR",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("dark scroll-smooth", geist.variable, geistMono.variable, instrument.variable)}
    >
      <body className="noise min-h-screen bg-background font-sans antialiased">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
