import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Speed } from "@/components/landing/Speed";
import { Showcase } from "@/components/landing/Showcase";
import { Conversion } from "@/components/landing/Conversion";
import { Process } from "@/components/landing/Process";
import { Pricing } from "@/components/landing/Pricing";
import { Booking } from "@/components/landing/Booking";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA, StickyCTA } from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Hero />
      <Marquee />
      <Speed />
      <Showcase />
      <Conversion />
      <Process />
      <Pricing />
      <Booking />
      <FAQ />
      <FinalCTA />
      <StickyCTA />
    </main>
  );
}
