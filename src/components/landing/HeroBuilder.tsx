"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, Lock, MessageCircle, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    { day: "Día 1", label: "Llamada + brief" },
    { day: "Día 2", label: "Copy que vende" },
    { day: "Día 3", label: "Diseño a medida" },
    { day: "Día 5", label: "Desarrollo + animaciones" },
    { day: "Día 6", label: "Revisiones" },
    { day: "Día 7", label: "Online y captando leads" },
];

const leads = [
    { name: "Valentina R.", msg: "Quiero reservar un turno", time: "ahora" },
    { name: "Martín G.", msg: "¿Tienen disponibilidad el jueves?", time: "hace 2 min" },
    { name: "Sofía L.", msg: "Me interesa el blanqueamiento", time: "hace 5 min" },
];

const TICK = 1100;
const TOTAL = steps.length + leads.length + 3;

/** Una landing que "se construye" sola: muestra el proceso de 7 días en loop. */
export function HeroBuilder() {
    const [t, setT] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setT((v) => (v + 1) % TOTAL), TICK);
        return () => clearInterval(id);
    }, []);

    const done = t >= steps.length;
    const visibleLeads = done ? Math.min(t - steps.length + 1, leads.length) : 0;
    const show = (n: number) => t >= n;

    return (
        <div className="relative">
            {/* Halo */}
            <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[3rem] bg-gradient-to-b from-violet/25 via-cyan/10 to-transparent blur-3xl" />

            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#0c0c11]/90 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur">
                {/* Barra del navegador */}
                <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
                    <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    </div>
                    <div className="mx-auto flex h-7 w-full max-w-xs items-center justify-center gap-1.5 rounded-md bg-white/[0.04] font-mono text-[11px] text-muted-foreground">
                        <Lock className="h-3 w-3" />
                        estudiolumen.com
                    </div>
                    <div
                        className={cn(
                            "hidden items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors duration-500 sm:flex",
                            done ? "bg-lime/15 text-lime" : "bg-white/[0.05] text-muted-foreground"
                        )}
                    >
                        <span className={cn("h-1.5 w-1.5 rounded-full", done ? "bg-lime" : "animate-pulse bg-cyan")} />
                        {done ? "Online" : "Construyendo"}
                    </div>
                </div>

                <div className="grid md:grid-cols-[230px_1fr]">
                    {/* Panel de progreso */}
                    <aside className="hidden border-r border-white/[0.06] p-4 md:block">
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Progreso</p>
                        <ol className="space-y-1">
                            {steps.map((s, i) => {
                                const state = t > i || done ? "done" : t === i ? "active" : "todo";
                                return (
                                    <li
                                        key={s.label}
                                        className={cn(
                                            "flex items-center gap-2.5 rounded-lg px-2 py-2 text-[12.5px] transition-colors duration-300",
                                            state === "active" && "bg-white/[0.05]"
                                        )}
                                    >
                                        <span
                                            className={cn(
                                                "grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-all duration-300",
                                                state === "done" && "border-transparent bg-gradient-to-br from-violet to-cyan",
                                                state === "active" && "border-cyan/60",
                                                state === "todo" && "border-white/15"
                                            )}
                                        >
                                            {state === "done" && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                                            {state === "active" && <Loader2 className="h-3 w-3 animate-spin text-cyan" />}
                                        </span>
                                        <span className={cn("leading-tight", state === "todo" ? "text-white/35" : "text-white/90")}>
                                            <span className="block font-mono text-[10px] text-muted-foreground">{s.day}</span>
                                            {s.label}
                                        </span>
                                    </li>
                                );
                            })}
                        </ol>
                        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                            <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
                                animate={{ width: `${Math.min((t + 1) / steps.length, 1) * 100}%` }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                        </div>
                    </aside>

                    {/* Landing que se arma */}
                    <div className="relative min-h-[340px] overflow-hidden bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.10),transparent_55%)] p-5 sm:min-h-[380px] sm:p-8">
                        <Block show={show(0)} className="flex items-center justify-between">
                            <span className="text-sm font-semibold tracking-tight">
                                lumen<span className="text-cyan">.</span>
                            </span>
                            <div className="hidden gap-4 text-[11px] text-white/50 sm:flex">
                                <span>Tratamientos</span>
                                <span>Casos</span>
                                <span>Turnos</span>
                            </div>
                        </Block>

                        <div className="mt-8 grid items-center gap-6 sm:mt-10 sm:grid-cols-[1.2fr_1fr]">
                            <div>
                                <Block show={show(1)}>
                                    <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-[10px] font-medium text-cyan">
                                        Odontología estética · Palermo
                                    </span>
                                    <h3 className="mt-3 text-[26px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[34px]">
                                        Tu mejor sonrisa,
                                        <br />
                                        <span className="font-serif font-normal italic text-white/80">en 3 visitas.</span>
                                    </h3>
                                    <p className="mt-3 max-w-xs text-[12.5px] leading-relaxed text-white/55">
                                        Diseño de sonrisa sin dolor, con resultados que se ven desde la primera sesión.
                                    </p>
                                </Block>
                                <Block show={show(2)} className="mt-5 flex flex-wrap items-center gap-3">
                                    <span className="rounded-full bg-white px-4 py-2 text-[12px] font-medium text-black">
                                        Reservar turno
                                    </span>
                                    <span className="flex items-center gap-1 text-[11px] text-white/60">
                                        <Star className="h-3 w-3 fill-amber-300 text-amber-300" /> 4.9 · 320 pacientes
                                    </span>
                                </Block>
                            </div>

                            <Block show={show(2)} className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl sm:block">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet/60 via-[#3b2a7a] to-cyan/50" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35),transparent_45%)]" />
                                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-black/30 p-2.5 backdrop-blur">
                                    <p className="text-[10px] text-white/70">Próximo turno disponible</p>
                                    <p className="text-[12px] font-medium">Jueves 10:30 hs</p>
                                </div>
                            </Block>
                        </div>

                        <Block show={show(3)} className="mt-6 grid grid-cols-3 gap-2">
                            {["Sin dolor", "Financiación", "Garantía"].map((f) => (
                                <div key={f} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-2.5 text-center text-[11px] text-white/70">
                                    {f}
                                </div>
                            ))}
                        </Block>

                        {/* Notificaciones de leads */}
                        <div className="pointer-events-none absolute bottom-4 right-4 flex w-[230px] flex-col-reverse gap-2 sm:w-[250px]">
                            <AnimatePresence>
                                {leads.slice(0, visibleLeads).map((l) => (
                                    <motion.div
                                        key={l.name}
                                        layout
                                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                        className="flex items-start gap-2.5 rounded-2xl border border-white/10 bg-[#111117]/95 p-2.5 shadow-2xl backdrop-blur"
                                    >
                                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#25D366]/15">
                                            <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="flex items-center justify-between text-[11px] font-medium">
                                                Nuevo lead · {l.name}
                                                <span className="font-normal text-white/40">{l.time}</span>
                                            </span>
                                            <span className="block truncate text-[11px] text-white/55">{l.msg}</span>
                                        </span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Block({ show, className, children }: { show: boolean; className?: string; children: React.ReactNode }) {
    return (
        <motion.div
            initial={false}
            animate={show ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 12, filter: "blur(8px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
