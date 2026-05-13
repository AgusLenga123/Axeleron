"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Palette, Rocket, CheckCircle2, Clock, Users, Zap } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        emoji: "🗓️",
        title: "Agendás una llamada de 45 min",
        duration: "Día 1",
        durationDetail: "Primer día hábil",
        description: "Una charla de 45 minutos es todo lo que necesitamos. Contanos tu negocio, a quién le vendés y qué querés lograr.",
        details: [
            "Entendemos tu cliente ideal y propuesta de valor",
            "Definimos qué tiene que lograr la landing",
            "Acordamos plazo, plan y próximos pasos",
            "Te pedimos materiales básicos: logo o referencias",
        ],
        items: [
            { icon: Users, text: "Llamada 1:1 por Zoom o Meet" },
            { icon: Clock, text: "45 minutos, sin perder tiempo" },
            { icon: Zap, text: "Arrancamos al día siguiente" },
        ],
        color: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-400",
        iconBg: "bg-blue-500/10",
        borderColor: "border-blue-500/30",
        accentColor: "text-blue-400",
        badgeBg: "bg-blue-500/10 border-blue-500/20",
    },
    {
        number: "02",
        icon: Palette,
        emoji: "🎨",
        title: "Diseñamos y escribimos todo",
        duration: "Días 2–5",
        durationDetail: "El grueso del trabajo",
        description: "Nos encargamos del diseño, el copy persuasivo y la estructura de conversión. Vos revisás y nos decís si ajustar algo.",
        details: [
            "Diseño alineado a tu identidad de marca",
            "Copywriting estratégico en cada sección",
            "Estructura hero → problema → solución → CTA",
            "Máximo 2 rondas de revisiones incluidas",
        ],
        items: [
            { icon: Palette, text: "Diseño mobile-first en Figma" },
            { icon: MessageSquare, text: "Copy completo para cada sección" },
            { icon: CheckCircle2, text: "2 rondas de revisión incluidas" },
        ],
        color: "from-violet-500/20 to-purple-500/20",
        iconColor: "text-violet-400",
        iconBg: "bg-violet-500/10",
        borderColor: "border-violet-500/30",
        accentColor: "text-violet-400",
        badgeBg: "bg-violet-500/10 border-violet-500/20",
    },
    {
        number: "03",
        icon: Rocket,
        emoji: "🚀",
        title: "Publicamos y lanzás",
        duration: "Días 6–7",
        durationDetail: "Entrega y lanzamiento",
        description: "Tu landing sube al aire. La conectamos con tus herramientas de análisis y te entregamos todo listo para recibir leads.",
        details: [
            "Publicación en tu dominio propio",
            "Analytics y píxeles de Meta / Google Ads",
            "Formulario de contacto o botón de WhatsApp",
            "Soporte post-entrega incluido",
        ],
        items: [
            { icon: Rocket, text: "Landing publicada y en vivo" },
            { icon: Zap, text: "Analytics y píxeles configurados" },
            { icon: CheckCircle2, text: "Soporte incluido post-entrega" },
        ],
        color: "from-emerald-500/20 to-green-500/20",
        iconColor: "text-emerald-400",
        iconBg: "bg-emerald-500/10",
        borderColor: "border-emerald-500/30",
        accentColor: "text-emerald-400",
        badgeBg: "bg-emerald-500/10 border-emerald-500/20",
    },
];

export function HowItWorks() {
    return (
        <section id="como-funciona" className="py-16 bg-secondary/10 relative overflow-hidden">
            <GridBackground opacity={0.025} size={60} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                        El proceso
                    </motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold font-heading mb-6">
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
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg">
                        Sin reuniones interminables. Así es el proceso, paso a paso.
                    </motion.p>
                </div>

                {/* 3-column static grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.1 }}
                            className={`relative rounded-2xl border ${s.borderColor} bg-background/60 backdrop-blur-sm overflow-hidden flex flex-col`}
                        >
                            {/* Gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-40`} />

                            <div className="relative p-7 flex flex-col h-full">
                                {/* Badge */}
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${s.badgeBg} ${s.accentColor} text-xs font-bold mb-5 self-start`}>
                                    <span>{s.emoji}</span>
                                    {s.duration} · {s.durationDetail}
                                </div>

                                {/* Icon + step number */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 rounded-2xl ${s.iconBg} border ${s.borderColor} flex items-center justify-center flex-shrink-0`}>
                                        <s.icon className={`w-6 h-6 ${s.iconColor}`} />
                                    </div>
                                    <span className={`text-4xl font-black font-heading opacity-20 ${s.accentColor}`}>{s.number}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold font-heading mb-3 leading-snug">
                                    {s.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                    {s.description}
                                </p>

                                {/* Details */}
                                <ul className="space-y-2.5 mb-6">
                                    {s.details.map((d, j) => (
                                        <li key={j} className="flex items-start gap-2.5 text-sm">
                                            <div className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full ${s.iconBg} flex items-center justify-center`}>
                                                <CheckCircle2 className={`w-2.5 h-2.5 ${s.iconColor}`} />
                                            </div>
                                            <span className="text-muted-foreground leading-relaxed">{d}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Quick facts */}
                                <div className={`mt-auto pt-5 border-t ${s.borderColor}`}>
                                    <ul className="space-y-2">
                                        {s.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2.5">
                                                <div className={`w-7 h-7 rounded-lg ${s.iconBg} border ${s.borderColor} flex items-center justify-center flex-shrink-0`}>
                                                    <item.icon className={`w-3.5 h-3.5 ${s.iconColor}`} />
                                                </div>
                                                <span className="text-xs text-muted-foreground">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-10"
                >
                    <Button
                        id="how-it-works-cta"
                        variant="premium"
                        className="h-12 px-8 rounded-xl font-bold"
                        onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        ¡Arrancamos! →
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
