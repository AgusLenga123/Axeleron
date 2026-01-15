import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";

import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <TechStack />
      <About />
      <Services />
      <Packages />
      <Testimonials />
      <Contact />
    </main>
  );
}
