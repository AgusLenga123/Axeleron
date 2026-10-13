import type { Metadata } from "next";
import { Booking } from "@/components/landing/Booking";
import { StickyCTA } from "@/components/landing/FinalCTA";
import {
  HotelBenefits,
  HotelCalculator,
  HotelCTA,
  HotelDemo,
  HotelHero,
  HotelProblem,
  HotelSteps,
} from "@/components/rubros/hoteleria/HotelSections";

export const metadata: Metadata = {
  title: "Landing para hoteles — Más reservas directas, cero comisiones | Axeliron",
  description:
    "Web para hoteles que convierte visitas en reservas directas. Buscador de disponibilidad, WhatsApp, opiniones y SEO local. Online en 7 días por USD 300.",
  openGraph: {
    title: "Landing para hoteles — Axeliron",
    description: "Más reservas directas, cero comisiones. Online en 7 días por USD 300.",
    type: "website",
    locale: "es_AR",
  },
};

export default function HoteleriaPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <HotelHero />
      <HotelDemo />
      <HotelProblem />
      <HotelBenefits />
      <HotelCalculator />
      <HotelSteps />
      <HotelCTA />
      <Booking />
      <StickyCTA />
    </main>
  );
}
