"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarCheck, Code2, Palette, Rocket } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal, SectionHeading, Serif } from "./ui";

const steps = [
    {
        day: "Día 1",
        icon: CalendarCheck,
        title: "Llamada inicial",
        text: "Nos contás de tu negocio, tu cliente ideal y qué querés lograr. Con eso armamos el brief. Vos no tenés que preparar nada.",
    },
    {
        day: "Días 2 – 3",
        icon: Palette,
        title: "Copy + diseño",
        text: "Escribimos los textos y diseñamos tu landing a medida. Te mostramos el diseño para que lo apruebes antes de programar.",
    },
    {
        day: "Días 4 – 6",
        icon: Code2,
        title: "Desarrollo + revisiones",
        text: `La programamos con animaciones, la conectamos a WhatsApp y formularios. Tenés ${site.revisions} rondas de cambios incluidas.`,
    },
    {
        day: `Día ${site.deliveryDays}`,
        icon: Rocket,
        title: "Online y recibiendo leads",
        text: "La publicamos en tu dominio, optimizada para Google y lista para tus anuncios. A vender.",
    },
];

export function Process() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="proceso" className="relative scroll-mt-24 py-20 md:py-28">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="Proceso"
                    title={
                        <>
                            De la idea a online en <Serif className="text-brand">{site.deliveryDays} días.</Serif>
                        </>
                    }
                    subtitle="Un proceso simple, con fechas claras. Siempre sabés en qué etapa está tu landing."
                />

                <div ref={ref} className="relative mx-auto mt-20 max-w-3xl">
                    {/* Línea de progreso */}
                    <div className="absolute bottom-6 left-[23px] top-6 w-px bg-white/[0.08] md:left-1/2">
                        <motion.div style={{ height }} className="w-px bg-gradient-to-b from-violet via-cyan to-lime shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    </div>

                    <ol className="space-y-12 md:space-y-20">
                        {steps.map((s, i) => (
                            <li key={s.title} className="relative grid grid-cols-[48px_1fr] gap-5 md:grid-cols-2 md:gap-16">
                                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-surface-2 md:absolute md:left-1/2 md:-translate-x-1/2">
                                    <s.icon className="h-5 w-5 text-cyan" />
                                </span>
                                <Reveal
                                    delay={0.05}
                                    className={i % 2 === 0 ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}
                                >
                                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">{s.day}</p>
                                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{s.title}</h3>
                                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
                                </Reveal>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
