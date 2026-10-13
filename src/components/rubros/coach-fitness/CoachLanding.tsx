"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Dumbbell, MessageCircle, ShieldCheck, Smartphone, Star, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoToast, useDemoToast } from "../DemoToast";

/* Landing de ejemplo para un coach fitness ficticio ("Ironmind"). Usa container queries (@3xl:). */

const goals = {
    grasa: {
        label: "Bajar grasa",
        title: ["Perdé grasa", "sin vivir a dieta"],
        stats: [
            { k: "Grasa corporal", v: "-8 kg", pct: 72 },
            { k: "Energía diaria", v: "+45%", pct: 60 },
            { k: "Adherencia", v: "92%", pct: 92 },
        ],
    },
    musculo: {
        label: "Ganar músculo",
        title: ["Ganá músculo", "con un plan real"],
        stats: [
            { k: "Masa muscular", v: "+4 kg", pct: 64 },
            { k: "Fuerza", v: "+40%", pct: 80 },
            { k: "Adherencia", v: "90%", pct: 90 },
        ],
    },
    rendimiento: {
        label: "Rendimiento",
        title: ["Rendí más", "en tu deporte"],
        stats: [
            { k: "Resistencia", v: "+35%", pct: 70 },
            { k: "Potencia", v: "+28%", pct: 58 },
            { k: "Lesiones", v: "-60%", pct: 84 },
        ],
    },
} as const;

type Goal = keyof typeof goals;

const plans = [
    { name: "Base", price: 39, items: ["Plan de entrenamiento", "Guía de alimentación", "Ajustes mensuales"] },
    { name: "Pro", price: 69, items: ["Todo lo de Base", "Seguimiento semanal", "Chat directo por WhatsApp", "Videos de técnica"], featured: true },
    { name: "Elite", price: 129, items: ["Todo lo de Pro", "Videollamada semanal", "Plan nutricional a medida"] },
];

const stories = [
    { name: "Martín, 34", text: "Bajé 9 kg en 12 semanas entrenando 4 veces por semana en casa.", tag: "-9 kg" },
    { name: "Carla, 28", text: "Por primera vez sostuve un plan más de un mes. El seguimiento cambia todo.", tag: "12 semanas" },
    { name: "Diego, 41", text: "Mejoré mis tiempos en 10K y se fueron los dolores de rodilla.", tag: "-4 min en 10K" },
];

export function CoachLanding() {
    const [goal, setGoal] = useState<Goal>("grasa");
    const toast = useDemoToast();
    const g = goals[goal];

    return (
        <div className="@container relative bg-[#0f0f0f] font-sans text-white">
            <header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#0f0f0f]/90 px-5 py-3 backdrop-blur @3xl:px-12">
                <span className="text-lg font-black uppercase tracking-tight">
                    Iron<span className="text-[#ff5a1f]">mind</span>
                </span>
                <nav className="hidden gap-7 text-[12px] font-semibold uppercase tracking-wider text-white/60 @3xl:flex">
                    <span>Programa</span>
                    <span>Resultados</span>
                    <span>Planes</span>
                </nav>
                <button
                    onClick={() => toast.show(`Te escribimos por WhatsApp para armar tu plan: ${g.label.toLowerCase()}`)}
                    className="rounded-md bg-[#ff5a1f] px-4 py-2 text-[12px] font-black uppercase text-black"
                >
                    Empezar
                </button>
            </header>

            <DemoToast message={toast.message} />

            {/* Hero */}
            <section className="relative overflow-clip px-5 pb-14 pt-10 @3xl:px-12 @3xl:pb-20 @3xl:pt-16">
                <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#ff5a1f]/25 blur-3xl" />
                <div className="relative grid gap-10 @3xl:grid-cols-[1.2fr_1fr] @3xl:items-center">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#ff5a1f]">Programa online · 12 semanas</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {(Object.keys(goals) as Goal[]).map((k) => (
                                <button
                                    key={k}
                                    onClick={() => setGoal(k)}
                                    className={cn(
                                        "rounded-full border px-3.5 py-1.5 text-[12px] font-semibold transition-colors",
                                        goal === k ? "border-[#ff5a1f] bg-[#ff5a1f] text-black" : "border-white/20 text-white/70 hover:border-white/40"
                                    )}
                                >
                                    {goals[k].label}
                                </button>
                            ))}
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={goal}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.3 }}
                                className="mt-6 text-[44px] font-black uppercase leading-[0.88] tracking-tighter @3xl:text-[76px]"
                            >
                                {g.title[0]}
                                <br />
                                <span className="text-[#ff5a1f]">{g.title[1]}</span>
                            </motion.h1>
                        </AnimatePresence>
                        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
                            Entrenamiento y alimentación a tu medida, con seguimiento real cada semana. Para gente ocupada que quiere resultados que duren.
                        </p>
                        <div className="mt-7 flex flex-wrap items-center gap-4">
                            <button
                                onClick={() => toast.show(`Te escribimos por WhatsApp para armar tu plan: ${g.label.toLowerCase()}`)}
                                className="rounded-md bg-[#ff5a1f] px-6 py-3.5 text-[13px] font-black uppercase tracking-wide text-black transition-transform hover:-translate-y-0.5"
                            >
                                Quiero mi plan
                            </button>
                            <span className="flex items-center gap-1.5 text-[13px] text-white/60">
                                <Star className="h-4 w-4 fill-[#ff5a1f] text-[#ff5a1f]" /> 4.9 · +1.200 alumnos
                            </span>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-white/50">Resultados promedio · 12 semanas</p>
                        <div className="mt-5 space-y-5">
                            {g.stats.map((s) => (
                                <div key={s.k}>
                                    <div className="flex items-baseline justify-between">
                                        <span className="text-[13px] text-white/70">{s.k}</span>
                                        <span className="text-xl font-black">{s.v}</span>
                                    </div>
                                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                                        <motion.div
                                            key={goal + s.k}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${s.pct}%` }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="h-full rounded-full bg-[#ff5a1f]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cómo funciona */}
            <section className="border-y border-white/10 bg-white/[0.02] px-5 py-14 @3xl:px-12">
                <h2 className="text-[30px] font-black uppercase leading-none tracking-tight @3xl:text-[40px]">Así funciona</h2>
                <div className="mt-8 grid gap-4 @3xl:grid-cols-3">
                    {[
                        { icon: Target, t: "Evaluación inicial", d: "Completás un formulario y una videollamada corta. Definimos tu objetivo y tu punto de partida." },
                        { icon: Dumbbell, t: "Plan a tu medida", d: "En casa o en el gimnasio, con tus tiempos. Rutinas en video y alimentación sin prohibiciones." },
                        { icon: Smartphone, t: "Seguimiento semanal", d: "Cada semana revisamos tu progreso y ajustamos. Nunca entrenás solo." },
                    ].map(({ icon: Icon, t, d }, i) => (
                        <div key={t} className="rounded-xl border border-white/10 p-5">
                            <div className="flex items-center justify-between">
                                <Icon className="h-6 w-6 text-[#ff5a1f]" />
                                <span className="text-4xl font-black text-white/10">0{i + 1}</span>
                            </div>
                            <h3 className="mt-4 text-lg font-black uppercase">{t}</h3>
                            <p className="mt-2 text-[14px] leading-relaxed text-white/60">{d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Transformaciones */}
            <section className="px-5 py-14 @3xl:px-12">
                <h2 className="text-[30px] font-black uppercase leading-none tracking-tight @3xl:text-[40px]">
                    Resultados <span className="text-[#ff5a1f]">reales</span>
                </h2>
                <div className="mt-8 grid gap-4 @3xl:grid-cols-3">
                    {stories.map((s) => (
                        <figure key={s.name} className="overflow-hidden rounded-xl bg-white/[0.04]">
                            <div className="relative grid h-32 grid-cols-2">
                                <div className="bg-gradient-to-br from-white/10 to-white/[0.02]" />
                                <div className="bg-gradient-to-br from-[#ff5a1f]/50 to-[#ff5a1f]/10" />
                                <span className="absolute bottom-2 left-2 text-[10px] font-bold uppercase text-white/60">Antes</span>
                                <span className="absolute bottom-2 right-2 text-[10px] font-bold uppercase">Después</span>
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-black px-2.5 py-1 text-[12px] font-black text-[#ff5a1f]">
                                    {s.tag}
                                </span>
                            </div>
                            <blockquote className="p-4 text-[14px] leading-relaxed text-white/80">“{s.text}”</blockquote>
                            <figcaption className="px-4 pb-4 text-[12px] font-bold uppercase text-white/50">{s.name}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            {/* Planes */}
            <section className="px-5 pb-14 @3xl:px-12">
                <h2 className="text-[30px] font-black uppercase leading-none tracking-tight @3xl:text-[40px]">Elegí tu plan</h2>
                <div className="mt-8 grid gap-4 @3xl:grid-cols-3">
                    {plans.map((p) => (
                        <div
                            key={p.name}
                            className={cn("relative rounded-xl border p-5", p.featured ? "border-[#ff5a1f] bg-[#ff5a1f]/[0.07]" : "border-white/10")}
                        >
                            {p.featured && (
                                <span className="absolute -top-3 left-5 rounded bg-[#ff5a1f] px-2 py-0.5 text-[10px] font-black uppercase text-black">Más elegido</span>
                            )}
                            <h3 className="text-lg font-black uppercase">{p.name}</h3>
                            <p className="mt-2">
                                <span className="text-4xl font-black">USD {p.price}</span>
                                <span className="text-[13px] text-white/50"> /mes</span>
                            </p>
                            <ul className="mt-5 space-y-2">
                                {p.items.map((it) => (
                                    <li key={it} className="flex items-center gap-2 text-[13px] text-white/75">
                                        <Check className="h-4 w-4 text-[#ff5a1f]" /> {it}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => toast.show(`Plan ${p.name} reservado. Te escribimos por WhatsApp para empezar.`)}
                                className={cn(
                                    "mt-6 w-full rounded-md py-3 text-[12px] font-black uppercase",
                                    p.featured ? "bg-[#ff5a1f] text-black" : "border border-white/20 text-white"
                                )}
                            >
                                Elegir {p.name}
                            </button>
                        </div>
                    ))}
                </div>
                <p className="mt-6 flex items-center justify-center gap-2 text-[13px] text-white/60">
                    <ShieldCheck className="h-4 w-4 text-[#ff5a1f]" /> Garantía de 14 días: si no es para vos, te devolvemos el dinero.
                </p>
            </section>

            {/* CTA final */}
            <section className="px-5 pb-16 @3xl:px-12">
                <div className="rounded-2xl bg-[#ff5a1f] p-8 text-black @3xl:flex @3xl:items-center @3xl:justify-between @3xl:p-12">
                    <h2 className="text-[34px] font-black uppercase leading-[0.9] tracking-tight @3xl:text-[48px]">
                        El mejor momento
                        <br />
                        es hoy.
                    </h2>
                    <button
                        onClick={() => toast.show("¡Listo! Te escribimos por WhatsApp en minutos.")}
                        className="mt-6 flex items-center gap-2 rounded-md bg-black px-6 py-4 text-[13px] font-black uppercase text-white @3xl:mt-0"
                    >
                        <MessageCircle className="h-4 w-4" /> Hablar con un coach
                    </button>
                </div>
            </section>

            <footer className="border-t border-white/10 px-5 py-6 text-center text-[11px] text-white/40">Ironmind · Coaching fitness online</footer>
        </div>
    );
}
