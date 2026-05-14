"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, ShieldCheck, Clock, Star, Zap, TrendingUp, Users } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

const features = [
    "Landing 100% funcional",
    "Copywriting persuasivo incluido",
    "Diseño premium con animaciones",
    "Entrega en 7 días hábiles",
    "2 rondas de revisiones",
    "Formulario + WhatsApp + Email",
    "Optimización SEO básica",
];

const stats = [
    { icon: Clock, value: "7 días", label: "Tiempo de entrega", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { icon: TrendingUp, value: "+300%", label: "Más conversiones vs. sin landing", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { icon: Users, value: "50+", label: "Clientes satisfechos", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
];

const testimonialSnippets = [
    { text: "Empecé a recibir consultas el mismo día que lanzamos.", author: "Marcos R.", role: "Coach fitness" },
    { text: "Nunca pensé que podía tener algo así a este precio.", author: "Laura M.", role: "Psicóloga" },
];

export function Pricing() {
    const scrollToContact = () => {
        window.dispatchEvent(new CustomEvent('selectPlan', { detail: 'Pro' }));
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="planes" className="py-16 bg-background relative overflow-hidden">
            <GridBackground opacity={0.03} size={60} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 blur-[180px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
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
                        Sabés exactamente qué incluye y cuánto pagás. Sin letras chicas, sin planes confusos.
                    </motion.p>
                </div>

                {/* 2-col layout */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">

                    {/* LEFT — Pricing card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                    >
                        {/* Badge above */}
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
                        <div className="rounded-3xl border border-primary/30 bg-secondary/10 backdrop-blur-sm shadow-xl shadow-primary/5 p-8">
                            {/* Price */}
                            <div className="text-center mb-7">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                                >
                                    <span className="text-6xl font-black font-heading bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                                        USD 390
                                    </span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.35 }}
                                    className="flex items-center justify-center gap-3 mt-2"
                                >
                                    <span className="text-sm text-muted-foreground">pago único</span>
                                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                                    <span className="text-sm text-muted-foreground">sin costos ocultos</span>
                                </motion.div>

                                {/* Value anchor */}
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.45 }}
                                    className="mt-4 mx-auto px-4 py-2.5 rounded-xl bg-primary/8 border border-primary/20 text-xs text-muted-foreground leading-relaxed"
                                >
                                    💡 Un freelancer cobra entre{" "}
                                    <span className="text-foreground font-semibold">USD 800–1500</span>{" "}
                                    por lo mismo, en el doble de tiempo.
                                </motion.div>
                            </div>

                            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                            {/* Features list */}
                            <ul className="space-y-2.5 mb-7">
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

                    {/* RIGHT — Animated side panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 80, delay: 0.15 }}
                        className="flex flex-col gap-5"
                    >
                        {/* Stat cards */}
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 100 }}
                                whileHover={{ scale: 1.02, x: 4 }}
                                className={`flex items-center gap-4 p-4 rounded-2xl border ${stat.border} ${stat.bg} backdrop-blur-sm`}
                            >
                                <div className={`w-11 h-11 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center flex-shrink-0`}>
                                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                </div>
                                <div>
                                    <p className={`text-2xl font-black font-heading ${stat.color}`}>{stat.value}</p>
                                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Guarantee badge — pulsing */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="relative rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 overflow-hidden"
                        >
                            {/* Pulsing ring */}
                            <motion.div
                                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-emerald-400/40"
                            />
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-emerald-400 mb-1">Garantía de satisfacción</p>
                                    <p className="text-xs text-muted-foreground leading-relaxed">Si no quedás conforme con el diseño inicial, te devolvemos el dinero. Sin preguntas.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial snippets */}
                        <div className="flex flex-col gap-3">
                            {testimonialSnippets.map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.65 + i * 0.12 }}
                                    className="rounded-2xl border border-border/40 bg-secondary/10 p-4"
                                >
                                    {/* Stars */}
                                    <div className="flex gap-0.5 mb-2">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-foreground/80 italic mb-2">"{t.text}"</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] font-bold text-white">
                                            {t.author[0]}
                                        </div>
                                        <span className="text-xs text-muted-foreground">{t.author} · {t.role}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Floating "spots" badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 }}
                            className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-amber-500/25 bg-amber-500/5"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                                className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"
                            />
                            <p className="text-xs text-muted-foreground">
                                <span className="text-amber-400 font-semibold">Solo 3 lugares disponibles</span> para este mes — la agenda se llena rápido.
                            </p>
                            <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom link */}
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
