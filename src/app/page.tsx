import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Examples } from "@/components/sections/Examples";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <PainPoints />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Examples />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
