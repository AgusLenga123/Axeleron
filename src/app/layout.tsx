import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Axeliron — Tu Landing Page lista en 7 días hábiles",
  description: "Creamos landing pages de alta conversión para coaches, clínicas, ecommerce y pymes. Sin backend complejo. Lista en 7 días hábiles.",
  keywords: "landing page, alta conversión, diseño web, leads, negocios digitales, coaches, pymes, clínicas",
  openGraph: {
    title: "Axeliron — Tu Landing Page lista en 7 días hábiles",
    description: "Creamos landing pages de alta conversión para coaches, clínicas, ecommerce y pymes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-primary/20",
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
