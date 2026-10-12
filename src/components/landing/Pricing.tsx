"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { CtaButton, Reveal, SectionHeading, Serif } from "./ui";

const included = [
    "Diseño 100% a medida, sin plantillas",
    "Copywriting persuasivo incluido",
    "Animaciones modernas y mobile-first",
    "WhatsApp, formulario y email conectados",
    "Meta Pixel + Google Analytics",
    "SEO técnico y carga ultra rápida",
    `${site.revisions} rondas de revisiones`,
    "Publicación en tu dominio",
];

export function Pricing() {
    return (
        <section id="precio" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-[160px]" />

            <div className="container relative mx-auto px-4">
                <SectionHeading
                    eyebrow="Precio"
                    title={
                        <>
                            Un precio. <Serif className="text-brand">Todo incluido.</Serif>
                        </>
                    }
                    subtitle="Sin planes confusos ni letra chica. Sabés exactamente qué recibís y cuánto pagás."
                />

                <Reveal delay={0.1} className="mx-auto mt-16 max-w-4xl">
                    <div className="border-glow rounded-[28px] bg-gradient-to-b from-surface-2 to-surface">
                        <div className="grid gap-10 p-8 md:grid-cols-[1fr_1.1fr] md:p-12">
                            <div className="flex flex-col">
                                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Landing page completa</p>

                                <div className="mt-6 flex items-end gap-3">
                                    <span className="text-xl text-white/35 line-through decoration-white/30">USD {site.marketPrice.toLocaleString("es-AR")}</span>
                                    <span className="rounded-full bg-lime/15 px-2 py-0.5 font-mono text-[11px] text-lime">
                                        -{Math.round((1 - site.price / site.marketPrice) * 100)}%
                                    </span>
                                </div>
                                <div className="mt-1 flex items-baseline gap-2">
                                    <span className="text-lg text-muted-foreground">USD</span>
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 140, damping: 14, delay: 0.2 }}
                                        className="text-shine animate-shine text-8xl font-semibold tracking-[-0.06em]"
                                    >
                                        {site.price}
                                    </motion.span>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">Pago único · Sin mensualidades · Entrega en {site.deliveryDays} días hábiles</p>

                                <div className="mt-8 flex flex-col gap-3 md:mt-auto md:pt-10">
                                    <CtaButton href="#agendar" className="h-14 w-full text-base">
                                        Reservar mi lugar
                                    </CtaButton>
                                    <CtaButton href="#faq" variant="ghost" arrow={false} className="h-12 w-full">
                                        Tengo dudas
                                    </CtaButton>
                                </div>
                            </div>

                            <div>
                                <ul className="space-y-3.5">
                                    {included.map((item, i) => (
                                        <motion.li
                                            key={item}
                                            initial={{ opacity: 0, x: 12 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.15 + i * 0.05 }}
                                            className="flex items-center gap-3 text-[15px]"
                                        >
                                            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet to-cyan">
                                                <Check className="h-3 w-3 text-white" strokeWidth={3} />
                                            </span>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mt-8 flex gap-4 rounded-2xl border border-lime/20 bg-lime/[0.04] p-5">
                                    <ShieldCheck className="h-6 w-6 shrink-0 text-lime" />
                                    <div>
                                        <p className="font-medium">Garantía de satisfacción</p>
                                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                            Si el diseño inicial no te convence, te devolvemos el dinero. Sin preguntas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
