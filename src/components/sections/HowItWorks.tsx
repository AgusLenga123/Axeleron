"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Palette, Rocket, CheckCircle2 } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Agendás una llamada de 30 min",
        description: "Contanos tu negocio, a quién le vendés y qué querés lograr. Con eso ya tenemos todo lo que necesitamos.",
        duration: "Día 1",
        durationDetail: "Primer día hábil",
        iconColor: "text-blue-400",
        iconBg: "bg-blue-500/10",
        borderColor: "border-blue-500/30",
        dotColor: "bg-blue-500",
        dotGlow: "shadow-blue-500/50",
        cardGradient: "from-blue-500/10 to-transparent",
    },
    {
        number: "02",
        icon: Palette,
        title: "Diseñamos y escribimos todo",
        description: "Nos encargamos del diseño, el copy y la estructura. Vos revisás y aprobás. Máximo 2 rondas de revisión.",
        duration: "Días 2–5",
        durationDetail: "El grueso del trabajo",
        iconColor: "text-violet-400",
        iconBg: "bg-violet-500/10",
        borderColor: "border-violet-500/30",
        dotColor: "bg-violet-500",
        dotGlow: "shadow-violet-500/50",
        cardGradient: "from-violet-500/10 to-transparent",
    },
    {
        number: "03",
        icon: Rocket,
        title: "Publicamos y lanzás",
        description: "Subimos tu landing al dominio que elijas, todo listo para recibir leads. De ahí en adelante, trabaja sola.",
        duration: "Días 6–7",
        durationDetail: "Entrega y lanzamiento",
        iconColor: "text-emerald-400",
        iconBg: "bg-emerald-500/10",
        borderColor: "border-emerald-500/30",
        dotColor: "bg-emerald-500",
        dotGlow: "shadow-emerald-500/50",
        cardGradient: "from-emerald-500/10 to-transparent",
    },
];

export function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="como-funciona" className="py-24 bg-secondary/10 relative overflow-hidden">
            <GridBackground opacity={0.025} size={60} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-semibold text-sm uppercase tracking-widest mb-4"
                    >
                        El proceso
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading mb-6"
                    >
                        De cero a online en{" "}
                        <span className="inline-block whitespace-nowrap">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">SOLO 7 DÍAS</span>
                            {" "}
                            <motion.span
                                animate={{ rotate: [0, -12, 12, -12, 0], scale: [1, 1.25, 1, 1.25, 1] }}
                                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                                className="inline-block"
                            >
                                🔥
                            </motion.span>
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Sin reuniones interminables. Esto es todo lo que necesitás hacer.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div ref={ref} className="relative max-w-2xl mx-auto">
                    {/* Vertical progress line */}
                    <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border/30 rounded-full" />
                    <motion.div
                        className="absolute left-6 top-6 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-violet-500 to-emerald-500 origin-top"
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
                        style={{ bottom: "1.5rem" }}
                    />

                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <div key={step.number} className="relative flex gap-8">
                                {/* Timeline dot + icon */}
                                <div className="relative flex-shrink-0 flex flex-col items-center">
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.4 }}
                                        className={`relative w-12 h-12 rounded-2xl ${step.iconBg} border ${step.borderColor} flex items-center justify-center z-10 shadow-lg ${step.dotGlow}`}
                                    >
                                        <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                                        {/* Pulse ring */}
                                        <motion.div
                                            className={`absolute inset-0 rounded-2xl border ${step.borderColor}`}
                                            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                                            transition={{ repeat: Infinity, duration: 2.5, delay: index * 0.5 }}
                                        />
                                    </motion.div>
                                </div>

                                {/* Step card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.4 }}
                                    className={`flex-1 mb-12 ${index === steps.length - 1 ? "mb-0" : ""}`}
                                >
                                    <div className={`relative p-6 rounded-2xl border ${step.borderColor} bg-background/50 backdrop-blur-sm overflow-hidden group hover:bg-background/70 transition-all duration-300`}>
                                        {/* Subtle gradient bg */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${step.cardGradient} opacity-50 rounded-2xl`} />

                                        <div className="relative">
                                            {/* Duration badge */}
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${step.borderColor} ${step.iconColor} bg-background/50`}>
                                                    {step.duration}
                                                </span>
                                                <span className="text-xs text-muted-foreground">{step.durationDetail}</span>
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                                                    transition={{ delay: 0.8 + index * 0.4 }}
                                                    className="ml-auto"
                                                >
                                                    <CheckCircle2 className={`w-4 h-4 ${step.iconColor}`} />
                                                </motion.div>
                                            </div>

                                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* End cap — "Listo" node */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        className="relative flex items-center gap-4"
                    >
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center z-10 shadow-lg shadow-emerald-500/20">
                            <span className="text-xl">🚀</span>
                        </div>
                        <div className="flex-1 p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                            <p className="font-bold text-emerald-400 text-sm">¡Tu landing está online!</p>
                            <p className="text-muted-foreground text-xs mt-0.5">Lista para recibir leads desde el primer día.</p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground mb-6">
                        ¿Listo para arrancar? La llamada inicial no te compromete a nada.
                    </p>
                    <Button
                        id="how-it-works-cta"
                        size="lg"
                        variant="premium"
                        className="h-12 px-8 rounded-xl font-bold"
                        onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Agendá tu llamada gratis →
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
