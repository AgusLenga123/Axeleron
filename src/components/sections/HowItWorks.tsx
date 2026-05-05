"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Palette, Rocket, ChevronLeft, ChevronRight, CheckCircle2, Clock, Users, Zap } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        emoji: "🗓️",
        title: "Agendás una llamada de 30 min",
        duration: "Día 1",
        durationDetail: "Primer día hábil",
        description: "Contanos tu negocio, a quién le vendés y qué querés lograr. Sin formularios complicados, sin documentos eternos. Una charla de 30 minutos es todo lo que necesitamos para arrancar.",
        details: [
            "Entendemos tu negocio, tu cliente ideal y tu propuesta de valor",
            "Definimos juntos qué tiene que lograr la landing (leads, ventas, turnos)",
            "Acordamos el plazo, el plan y los próximos pasos concretos",
            "Te pedimos los materiales básicos: logo, fotos o referencias (si tenés)",
        ],
        sideContent: {
            label: "Lo que pasa en esta etapa",
            items: [
                { icon: Users, text: "Llamada 1:1 por Zoom o Meet" },
                { icon: Clock, text: "30 minutos, sin perder tiempo" },
                { icon: Zap, text: "Arrancamos al día siguiente" },
            ],
        },
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
        description: "Acá es donde hacemos la magia. Nos encargamos del diseño, el copy persuasivo y la estructura de conversión. Vos revisás lo que armamos y nos decís si hay algo que ajustar.",
        details: [
            "Diseño visual alineado a tu identidad de marca (o la creamos desde cero)",
            "Copywriting estratégico: cada palabra tiene un propósito",
            "Estructura de conversión probada: hero → problema → solución → CTA",
            "Máximo 2 rondas de revisiones para afinar los detalles",
        ],
        sideContent: {
            label: "Lo que entregamos",
            items: [
                { icon: Palette, text: "Diseño mobile-first en Figma" },
                { icon: MessageSquare, text: "Copy completo para cada sección" },
                { icon: CheckCircle2, text: "2 rondas de revisión incluidas" },
            ],
        },
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
        description: "Tu landing sube al aire. La publicamos en tu dominio, la conectamos con tus herramientas de análisis y te entregamos todo listo para recibir leads desde el primer minuto.",
        details: [
            "Publicación en tu dominio propio (o te ayudamos a conseguir uno)",
            "Conexión con Google Analytics y píxeles de Meta / Google Ads",
            "Formulario de contacto o botón de WhatsApp funcionando",
            "Soporte post-entrega para resolver cualquier duda técnica",
        ],
        sideContent: {
            label: "Al momento de entregar",
            items: [
                { icon: Rocket, text: "Landing publicada y en vivo" },
                { icon: Zap, text: "Analytics y píxeles configurados" },
                { icon: CheckCircle2, text: "Soporte incluido post-entrega" },
            ],
        },
        color: "from-emerald-500/20 to-green-500/20",
        iconColor: "text-emerald-400",
        iconBg: "bg-emerald-500/10",
        borderColor: "border-emerald-500/30",
        accentColor: "text-emerald-400",
        badgeBg: "bg-emerald-500/10 border-emerald-500/20",
    },
];

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 80 : -80,
        opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
        x: direction < 0 ? 80 : -80,
        opacity: 0,
    }),
};

export function HowItWorks() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const go = (next: number) => {
        setDirection(next > current ? 1 : -1);
        setCurrent(next);
    };

    const prev = () => { if (current > 0) go(current - 1); };
    const next = () => { if (current < steps.length - 1) go(current + 1); };

    const step = steps[current];

    return (
        <section id="como-funciona" className="py-24 bg-secondary/10 relative overflow-hidden">
            <GridBackground opacity={0.025} size={60} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
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

                {/* Step indicators */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    {steps.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => go(i)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                                i === current
                                    ? `${s.badgeBg} ${s.accentColor} border-current`
                                    : "bg-secondary/20 text-muted-foreground border-border/30 hover:border-border/60"
                            }`}
                        >
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${i === current ? "bg-current/20" : "bg-white/5"}`}>
                                {s.number}
                            </span>
                            {s.duration}
                        </button>
                    ))}
                </div>

                {/* Carousel card */}
                <div className="max-w-5xl mx-auto relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className={`relative rounded-3xl border ${step.borderColor} bg-background/60 backdrop-blur-sm overflow-hidden`}
                        >
                            {/* Card gradient bg */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-40`} />

                            <div className="relative grid md:grid-cols-5 gap-0">
                                {/* Left: main content */}
                                <div className="md:col-span-3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
                                    {/* Step badge */}
                                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${step.badgeBg} ${step.accentColor} text-xs font-bold mb-6`}>
                                        <span>{step.emoji}</span>
                                        {step.duration} · {step.durationDetail}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl md:text-4xl font-bold font-heading mb-5 leading-tight">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                        {step.description}
                                    </p>

                                    {/* Detail list */}
                                    <ul className="space-y-3">
                                        {step.details.map((d, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.08 }}
                                                className="flex items-start gap-3 text-sm"
                                            >
                                                <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full ${step.iconBg} flex items-center justify-center`}>
                                                    <CheckCircle2 className={`w-3 h-3 ${step.iconColor}`} />
                                                </div>
                                                <span className="text-muted-foreground leading-relaxed">{d}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right: side panel */}
                                <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-between">
                                    {/* Big step icon */}
                                    <div>
                                        <div className={`w-20 h-20 rounded-3xl ${step.iconBg} border ${step.borderColor} flex items-center justify-center mb-8 shadow-lg`}>
                                            <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                                        </div>

                                        <p className={`text-xs font-bold uppercase tracking-widest ${step.accentColor} mb-4`}>
                                            {step.sideContent.label}
                                        </p>
                                        <ul className="space-y-4">
                                            {step.sideContent.items.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.15 + i * 0.1 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <div className={`w-9 h-9 rounded-xl ${step.iconBg} border ${step.borderColor} flex items-center justify-center flex-shrink-0`}>
                                                        <item.icon className={`w-4 h-4 ${step.iconColor}`} />
                                                    </div>
                                                    <span className="text-sm text-muted-foreground">{item.text}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Step counter */}
                                    <div className="mt-10">
                                        <div className="flex items-center gap-2 mb-2">
                                            {steps.map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`h-1 rounded-full transition-all duration-500 ${
                                                        i === current
                                                            ? `flex-1 ${step.iconBg.replace("bg-", "bg-").replace("/10", "")} opacity-80`
                                                            : "w-4 bg-white/10"
                                                    }`}
                                                    style={i === current ? { background: step.accentColor.includes("blue") ? "#60a5fa" : step.accentColor.includes("violet") ? "#a78bfa" : "#34d399", opacity: 0.5 } : {}}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-xs text-muted-foreground">Paso {current + 1} de {steps.length}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Nav arrows */}
                    <div className="flex items-center justify-between mt-6">
                        <button
                            id="how-it-works-prev"
                            onClick={prev}
                            disabled={current === 0}
                            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border/40 bg-secondary/20 hover:bg-secondary/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Anterior
                        </button>

                        {current < steps.length - 1 ? (
                            <button
                                id="how-it-works-next"
                                onClick={next}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl border ${step.borderColor} ${step.iconBg} ${step.accentColor} hover:opacity-80 transition-all text-sm font-bold`}
                            >
                                Siguiente paso
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <Button
                                id="how-it-works-cta"
                                variant="premium"
                                className="h-11 px-6 rounded-xl font-bold"
                                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                ¡Arrancamos! →
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
