"use client";

import { useEffect, useState } from "react";
import { Check, ChevronDown, Gift, Lock, PlayCircle, ShieldCheck, Star, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoToast, scrollInDemo, useDemoToast } from "../DemoToast";

/* Landing de ejemplo para un curso online ficticio (edición de video). Usa container queries (@3xl:). */

const modules = [
    { t: "Módulo 1 · Fundamentos", lessons: ["Cómo piensa un editor", "Atajos que te ahorran horas", "Organizar un proyecto"], dur: "1 h 20 min" },
    { t: "Módulo 2 · Ritmo y retención", lessons: ["Los primeros 3 segundos", "Cortes que mantienen la atención", "Música y sonido"], dur: "2 h 05 min" },
    { t: "Módulo 3 · Estilo viral", lessons: ["Subtítulos dinámicos", "Zooms y transiciones", "Plantillas reutilizables"], dur: "1 h 50 min" },
    { t: "Módulo 4 · Vivir de editar", lessons: ["Armar tu portfolio", "Cuánto cobrar", "Conseguir tus primeros clientes"], dur: "1 h 35 min" },
];

const START = 2 * 86400 + 14 * 3600 + 36 * 60 + 9; // segundos restantes al cargar

function useCountdown() {
    const [left, setLeft] = useState(START);
    useEffect(() => {
        const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : START)), 1000);
        return () => clearInterval(id);
    }, []);
    const pad = (n: number) => String(n).padStart(2, "0");
    return [
        [pad(Math.floor(left / 86400)), "días"],
        [pad(Math.floor((left % 86400) / 3600)), "hs"],
        [pad(Math.floor((left % 3600) / 60)), "min"],
        [pad(left % 60), "seg"],
    ] as const;
}

export function CourseLanding() {
    const time = useCountdown();
    const [open, setOpen] = useState(0);
    const [seats, setSeats] = useState(17);
    const toast = useDemoToast();

    const enroll = () => {
        setSeats((s) => Math.max(1, s - 1));
        toast.show("¡Lugar reservado! Te enviamos el link de pago y el acceso por email.");
    };

    return (
        <div className="@container relative bg-[#120a24] font-sans text-white">
            <div className="bg-[#facc15] px-4 py-2 text-center text-[12px] font-bold text-black">
                Precio de lanzamiento: -50% hasta el domingo · Quedan {seats} lugares
            </div>
            <header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#120a24]/90 px-5 py-3 backdrop-blur @3xl:px-12">
                <span className="text-[15px] font-black tracking-tight">
                    EDITÁ<span className="text-[#facc15]">PRO</span>
                </span>
                <nav className="hidden gap-7 text-[13px] text-white/60 @3xl:flex">
                    <span>Temario</span>
                    <span>Resultados</span>
                    <span>Precio</span>
                </nav>
                <button onClick={(e) => scrollInDemo(e.currentTarget, "precio")} className="rounded-full bg-[#facc15] px-4 py-2 text-[12px] font-black text-black">
                    Inscribirme
                </button>
            </header>

            <DemoToast message={toast.message} className="bg-[#facc15] text-black" />

            {/* Hero */}
            <section className="relative overflow-clip px-5 pb-14 pt-10 @3xl:px-12 @3xl:pt-16">
                <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#7c3aed]/40 blur-3xl" />
                <div className="relative grid gap-10 @3xl:grid-cols-[1.15fr_1fr] @3xl:items-center">
                    <div>
                        <span className="inline-block -rotate-2 bg-[#facc15] px-2.5 py-1 text-[11px] font-black uppercase text-black">Curso online · 6 semanas</span>
                        <h1 className="mt-5 text-[40px] font-black leading-[0.95] tracking-tight @3xl:text-[64px]">
                            Aprendé a editar videos que <span className="text-[#facc15]">se hacen virales.</span>
                        </h1>
                        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
                            De cero a editar Reels y TikToks que retienen, con el método que usamos para cuentas de más de 1 millón de seguidores. Y aprendé a cobrar por eso.
                        </p>
                        <div className="mt-6 grid max-w-sm grid-cols-4 gap-2">
                            {time.map(([n, u]) => (
                                <div key={u} className="rounded-lg bg-white/10 py-2 text-center">
                                    <p className="text-[22px] font-black tabular-nums">{n}</p>
                                    <p className="text-[9px] uppercase text-white/55">{u}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <button onClick={(e) => scrollInDemo(e.currentTarget, "precio")} className="rounded-full bg-[#facc15] px-6 py-3.5 text-[14px] font-black text-black">
                                Quiero mi lugar →
                            </button>
                            <span className="flex items-center gap-1.5 text-[13px] text-white/60">
                                <Users className="h-4 w-4" /> +3.200 alumnos
                            </span>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#db2777]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_50%)]" />
                        <PlayCircle className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-white" />
                        <span className="absolute bottom-3 left-3 rounded bg-black/50 px-2 py-1 text-[11px]">Mirá la clase gratis · 12 min</span>
                    </div>
                </div>
            </section>

            {/* Resultados */}
            <section className="border-y border-white/10 bg-white/[0.03] px-5 py-12 @3xl:px-12">
                <div className="grid gap-4 @3xl:grid-cols-3">
                    {[
                        { n: "Juli, 24", t: "Conseguí 3 clientes fijos antes de terminar el curso. Ya vivo de editar." },
                        { n: "Nico, 31", t: "Mi primer Reel editado con el método llegó a 400 mil vistas." },
                        { n: "Caro, 28", t: "Pasé de no saber usar el programa a cobrar USD 25 por video." },
                    ].map((r) => (
                        <figure key={r.n} className="rounded-xl bg-[#1d1236] p-5">
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="h-3.5 w-3.5 fill-[#facc15] text-[#facc15]" />
                                ))}
                            </div>
                            <blockquote className="mt-3 text-[14px] leading-relaxed text-white/85">“{r.t}”</blockquote>
                            <figcaption className="mt-2 text-[12px] font-bold text-white/50">{r.n}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            {/* Temario */}
            <section className="px-5 py-14 @3xl:px-12">
                <h2 className="text-[30px] font-black leading-tight tracking-tight @3xl:text-[42px]">Lo que vas a aprender</h2>
                <div className="mt-6 space-y-2">
                    {modules.map((m, i) => (
                        <div key={m.t} className="overflow-hidden rounded-xl border border-white/10">
                            <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left">
                                <span className="text-[15px] font-bold">{m.t}</span>
                                <span className="flex items-center gap-3 text-[12px] text-white/50">
                                    {m.dur}
                                    <ChevronDown className={cn("h-4 w-4 transition-transform", open === i && "rotate-180")} />
                                </span>
                            </button>
                            {open === i && (
                                <ul className="space-y-2 border-t border-white/10 px-4 py-3">
                                    {m.lessons.map((l, j) => (
                                        <li key={l} className="flex items-center gap-2 text-[14px] text-white/75">
                                            {j === 0 && i === 0 ? <PlayCircle className="h-4 w-4 text-[#facc15]" /> : <Lock className="h-4 w-4 text-white/35" />}
                                            {l}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Precio */}
            <section data-demo-section="precio" className="px-5 pb-16 @3xl:px-12">
                <div className="grid overflow-hidden rounded-2xl border-2 border-[#facc15] @3xl:grid-cols-2">
                    <div className="bg-[#1d1236] p-6 @3xl:p-8">
                        <p className="text-[12px] font-bold uppercase tracking-wider text-[#facc15]">Todo incluido</p>
                        <ul className="mt-4 space-y-2.5">
                            {["40 clases en video, acceso de por vida", "Plantillas y presets descargables", "Comunidad privada de alumnos", "Correcciones de tus ediciones", "Certificado de finalización"].map((x) => (
                                <li key={x} className="flex items-center gap-2 text-[14px]">
                                    <Check className="h-4 w-4 text-[#facc15]" /> {x}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 flex items-center gap-2 rounded-lg bg-[#facc15]/10 p-3 text-[13px] text-[#facc15]">
                            <Gift className="h-4 w-4 shrink-0" /> Bonus de lanzamiento: guía “Tus primeros 5 clientes”.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center bg-[#facc15] p-6 text-black @3xl:p-8">
                        <p className="text-[14px] line-through opacity-60">USD 194</p>
                        <p className="text-[56px] font-black leading-none">USD 97</p>
                        <p className="mt-1 text-[13px]">o 3 cuotas sin interés</p>
                        <button onClick={enroll} className="mt-5 rounded-full bg-black py-3.5 text-[14px] font-black text-[#facc15]">
                            Inscribirme ahora →
                        </button>
                        <p className="mt-3 flex items-center justify-center gap-1.5 text-[12px]">
                            <ShieldCheck className="h-4 w-4" /> Garantía de 7 días o te devolvemos el dinero
                        </p>
                    </div>
                </div>
            </section>

            <footer className="border-t border-white/10 px-5 py-6 text-center text-[11px] text-white/40">EditáPro · Curso online de edición de video</footer>
        </div>
    );
}
