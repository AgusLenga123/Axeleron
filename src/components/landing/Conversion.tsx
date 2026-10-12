"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Gauge, Globe, Mail, MessageCircle, MousePointerClick, PenLine, Search, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading, Serif } from "./ui";

function Card({ className, children, delay = 0 }: { className?: string; children: React.ReactNode; delay?: number }) {
    return (
        <Reveal delay={delay} className={cn("group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-surface p-6 md:p-8", className)}>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(500px_circle_at_50%_0%,rgba(139,92,246,0.10),transparent_60%)]" />
            <div className="relative h-full">{children}</div>
        </Reveal>
    );
}

function CardTitle({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) {
    return (
        <div>
            <Icon className="h-5 w-5 text-cyan" />
            <h3 className="mt-4 text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{text}</p>
        </div>
    );
}

const headlines = [
    { before: "Bienvenidos a nuestra web", after: "Conseguí 30 pacientes nuevos por mes" },
    { before: "Somos una empresa líder", after: "Vendé tu propiedad en 60 días" },
    { before: "Servicios de coaching", after: "Bajá 8 kg sin dejar de comer rico" },
];

function CopyDemo() {
    const [i, setI] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setI((v) => (v + 1) % headlines.length), 3200);
        return () => clearInterval(id);
    }, []);
    const h = headlines[i];
    return (
        <div className="mt-8 space-y-3">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/35">Antes</p>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={h.before}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-1 text-lg text-white/40 line-through decoration-white/25"
                    >
                        {h.before}
                    </motion.p>
                </AnimatePresence>
            </div>
            <div className="rounded-2xl border border-cyan/25 bg-cyan/[0.04] p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-cyan">Con Axeliron</p>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={h.after}
                        initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                        transition={{ duration: 0.45 }}
                        className="mt-1 text-xl font-semibold tracking-tight"
                    >
                        {h.after}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
}

function SpeedGauge() {
    const r = 46;
    const c = 2 * Math.PI * r;
    return (
        <div className="relative mx-auto mt-6 h-32 w-32">
            <svg viewBox="0 0 110 110" className="h-full w-full -rotate-90">
                <circle cx="55" cy="55" r={r} stroke="rgba(255,255,255,0.06)" strokeWidth="8" fill="none" />
                <motion.circle
                    cx="55"
                    cy="55"
                    r={r}
                    stroke="url(#g)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={c}
                    initial={{ strokeDashoffset: c }}
                    whileInView={{ strokeDashoffset: c * 0.02 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <defs>
                    <linearGradient id="g" x1="0" x2="1">
                        <stop offset="0" stopColor="#a3e635" />
                        <stop offset="1" stopColor="#22d3ee" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                    <p className="text-3xl font-semibold tracking-tight">98</p>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Performance</p>
                </div>
            </div>
        </div>
    );
}

export function Conversion() {
    return (
        <section className="relative py-20 md:py-28">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="Conversión"
                    title={
                        <>
                            Lindas hay muchas. <Serif className="text-brand">La tuya va a vender.</Serif>
                        </>
                    }
                    subtitle="Cada sección está pensada con un solo objetivo: que el visitante te escriba. Todo esto viene incluido en los USD 300."
                />

                <div className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-6">
                    <Card className="md:col-span-4">
                        <CardTitle
                            icon={PenLine}
                            title="Copy persuasivo, escrito por nosotros"
                            text="No te pedimos textos. Escribimos titulares y llamados a la acción que hablan de los resultados que tu cliente busca."
                        />
                        <CopyDemo />
                    </Card>

                    <Card className="md:col-span-2" delay={0.05}>
                        <CardTitle icon={Gauge} title="Carga en menos de 1 segundo" text="Cada segundo de espera te hace perder visitas. La tuya vuela." />
                        <SpeedGauge />
                    </Card>

                    <Card className="md:col-span-2" delay={0.05}>
                        <CardTitle icon={Smartphone} title="Mobile-first" text="La mayoría de tus visitas llega desde el celular. Diseñamos primero para ellas." />
                        <div className="mx-auto mt-6 h-40 w-24 rounded-[20px] border-[3px] border-white/15 bg-black p-1.5">
                            <div className="h-full rounded-[14px] bg-gradient-to-b from-violet/50 to-cyan/30 p-2">
                                <div className="h-1.5 w-8 rounded-full bg-white/60" />
                                <div className="mt-3 h-2 w-full rounded-full bg-white/80" />
                                <div className="mt-1 h-2 w-3/4 rounded-full bg-white/80" />
                                <div className="mt-6 h-4 w-full rounded-full bg-white" />
                            </div>
                        </div>
                    </Card>

                    <Card className="md:col-span-4" delay={0.1}>
                        <CardTitle
                            icon={MousePointerClick}
                            title="Los leads te llegan directo"
                            text="Botón de WhatsApp, formulario y email conectados. Cada consulta te llega al instante, sin intermediarios."
                        />
                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            {[
                                { icon: MessageCircle, name: "WhatsApp", color: "text-[#25D366] bg-[#25D366]/10" },
                                { icon: Mail, name: "Email", color: "text-cyan bg-cyan/10" },
                                { icon: BarChart3, name: "Formulario", color: "text-violet bg-violet/10" },
                            ].map(({ icon: Icon, name, color }, i) => (
                                <motion.div
                                    key={name}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.12 }}
                                    className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3"
                                >
                                    <span className={cn("grid h-9 w-9 place-items-center rounded-xl", color)}>
                                        <Icon className="h-4 w-4" />
                                    </span>
                                    <span className="text-sm">
                                        {name}
                                        <span className="block text-xs text-muted-foreground">Conectado</span>
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </Card>

                    <Card className="md:col-span-3" delay={0.05}>
                        <CardTitle
                            icon={BarChart3}
                            title="Lista para tus anuncios"
                            text="Integramos Meta Pixel y Google Analytics para que sepas qué funciona y escales tus campañas."
                        />
                    </Card>

                    <Card className="md:col-span-3" delay={0.1}>
                        <CardTitle
                            icon={Search}
                            title="SEO técnico + dominio"
                            text="Metadatos, velocidad e indexación en Google. Te ayudamos a conectar tu dominio y publicarla."
                        />
                        <Globe className="absolute -bottom-10 -right-8 h-40 w-40 text-white/[0.03]" />
                    </Card>
                </div>
            </div>
        </section>
    );
}
