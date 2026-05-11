"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

const features = [
    "Landing de hasta 10 secciones",
    "Copywriting persuasivo incluido",
    "Diseño premium con animaciones",
    "Entrega en 7 días hábiles",
    "2 rondas de revisiones",
    "Integración con Meta Pixel y Google Ads",
    "Formulario + WhatsApp + Email",
    "Optimización SEO básica",
];

export function Pricing() {
    const scrollToContact = () => {
        window.dispatchEvent(new CustomEvent('selectPlan', { detail: 'Pro' }));
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="planes" className="py-24 bg-background relative overflow-hidden">
            <GridBackground opacity={0.03} size={60} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-semibold text-sm uppercase tracking-widest mb-4"
                    >
                        Precio
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading mb-6"
                    >
                        1 solo precio.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Sin vueltas.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Sabés exactamente qué incluye y cuánto pagás. Sin letras chicas, sin planes confusos, sin extras que aparecen al final.
                    </motion.p>
                </div>

                {/* Single pricing card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                    className="max-w-lg mx-auto"
                >
                    {/* Badge above card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="flex justify-center mb-5"
                    >
                        <span className="inline-flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full shadow-lg shadow-primary/20">
                            <Sparkles className="w-3.5 h-3.5" />
                            Todo incluido · Precio fijo
                        </span>
                    </motion.div>

                    {/* Card */}
                    <div className="rounded-3xl border border-primary/30 bg-secondary/10 backdrop-blur-sm shadow-xl shadow-primary/5 p-8 md:p-10">
                        {/* Price */}
                        <div className="text-center mb-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                            >
                                <span className="text-5xl md:text-6xl font-black font-heading">
                                    USD 490
                                </span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                                className="flex items-center justify-center gap-3 mt-3"
                            >
                                <span className="text-sm text-muted-foreground">pago único</span>
                                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                                <span className="text-sm text-muted-foreground">sin costos ocultos</span>
                            </motion.div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            className="text-center text-muted-foreground text-sm leading-relaxed mb-8"
                        >
                            Para negocios que quieren una landing profesional que convierta visitantes en clientes. Incluye diseño, copy estratégico y todo lo que necesitás.
                        </motion.p>

                        {/* Features list */}
                        <ul className="space-y-3 mb-8">
                            {features.map((feature, i) => (
                                <motion.li
                                    key={feature}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.04 }}
                                    className="flex items-center gap-3 text-sm"
                                >
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-muted-foreground">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <Button
                                id="plan-cta-pro"
                                className="w-full h-14 rounded-xl font-bold text-base bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-all group"
                                onClick={scrollToContact}
                            >
                                Quiero mi landing ahora
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-sm text-muted-foreground mt-10"
                >
                    ¿Tenés dudas?{" "}
                    <button
                        className="text-primary hover:underline font-medium"
                        onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Hablemos y te contamos todo.
                    </button>
                </motion.p>
            </div>
        </section>
    );
}
