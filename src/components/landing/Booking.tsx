"use client";

import { useState } from "react";
import { CalendarDays, Loader2, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { Eyebrow, Reveal, Serif } from "./ui";

const calendlySrc = `${site.calendlyUrl}?hide_gdpr_banner=1&background_color=0e0e13&text_color=f5f5f7&primary_color=8b5cf6`;

const agenda = [
    "Entendemos tu negocio y a tu cliente ideal",
    "Te mostramos ideas concretas para tu landing",
    "Definimos fecha de entrega (máximo 7 días hábiles)",
    "Sin compromiso: si no es para vos, no pasa nada",
];

export function Booking() {
    const [loaded, setLoaded] = useState(false);

    return (
        <section id="agendar" className="relative scroll-mt-20 py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <Reveal>
                            <Eyebrow>Agendá tu llamada</Eyebrow>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
                                Elegí un horario. <Serif className="text-brand">Arrancamos mañana.</Serif>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                                Una llamada corta y gratuita para conocer tu negocio. Salís con un plan claro para tu landing, la contrates o no.
                            </p>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <ul className="mt-8 space-y-4">
                                {agenda.map((item, i) => (
                                    <li key={item} className="flex items-start gap-4">
                                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-surface-2 font-mono text-xs text-cyan">
                                            {i + 1}
                                        </span>
                                        <span className="pt-0.5 text-[15px] text-white/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-surface p-4">
                                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan/10">
                                    <Mail className="h-5 w-5 text-cyan" />
                                </span>
                                <div className="flex-1 text-sm">
                                    <p className="font-medium">¿Preferís escribirnos?</p>
                                    <p className="text-muted-foreground">Respondemos en menos de 24 hs.</p>
                                </div>
                                <a
                                    href={`mailto:${site.email}`}
                                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
                                >
                                    Email
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.1}>
                        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-surface shadow-[0_40px_120px_-40px_rgba(139,92,246,0.5)]">
                            <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5 text-sm text-muted-foreground">
                                <CalendarDays className="h-4 w-4 text-cyan" />
                                Reunión con el equipo de Axeliron
                                <span className="ml-auto rounded-full bg-lime/15 px-2 py-0.5 font-mono text-[10px] uppercase text-lime">Gratis</span>
                            </div>
                            <div className="relative h-[760px] bg-white">
                                {!loaded && (
                                    <div className="absolute inset-0 grid place-items-center bg-surface text-sm text-muted-foreground">
                                        <span className="flex items-center gap-2">
                                            <Loader2 className="h-4 w-4 animate-spin" /> Cargando calendario…
                                        </span>
                                    </div>
                                )}
                                <iframe
                                    src={calendlySrc}
                                    title="Agendar llamada con Axeliron en Calendly"
                                    loading="lazy"
                                    onLoad={() => setLoaded(true)}
                                    className="h-full w-full border-0"
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-center text-sm text-muted-foreground">
                            ¿No carga el calendario?{" "}
                            <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4">
                                Abrilo en Calendly
                            </a>
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
