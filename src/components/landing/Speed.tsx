"use client";

import { motion } from "framer-motion";
import { Check, Minus, Zap } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading, Serif } from "./ui";

const timelines = [
    { who: "Agencia tradicional", time: "4 a 8 semanas", width: 100, highlight: false },
    { who: "Freelancer promedio", time: "3 a 4 semanas", width: 55, highlight: false },
    { who: "Axeliron", time: `${site.deliveryDays} días hábiles`, width: 18, highlight: true },
];

const rows: { label: string; them: string | boolean; us: string | boolean }[] = [
    { label: "Precio", them: "USD 1.200 – 2.500", us: `USD ${site.price}` },
    { label: "Tiempo de entrega", them: "1 a 2 meses", us: `${site.deliveryDays} días` },
    { label: "Copy persuasivo incluido", them: false, us: true },
    { label: "Diseño a medida (no plantilla)", them: true, us: true },
    { label: "Pensada para convertir", them: false, us: true },
    { label: "Reuniones necesarias", them: "4 o más", us: "1 llamada" },
];

export function Speed() {
    return (
        <section className="relative py-20 md:py-28">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="Velocidad"
                    title={
                        <>
                            Mientras otros agendan reuniones,{" "}
                            <Serif className="text-brand">tu landing ya vende.</Serif>
                        </>
                    }
                    subtitle="Un proceso probado, sin vueltas. Cada semana que tu negocio no tiene una buena landing, son clientes que se van con la competencia."
                />

                <div className="mx-auto mt-16 max-w-4xl space-y-5">
                    {timelines.map((t, i) => (
                        <Reveal key={t.who} delay={i * 0.08}>
                            <div className="flex items-baseline justify-between gap-4 pb-2 text-sm">
                                <span className={cn("font-medium", t.highlight ? "text-foreground" : "text-white/55")}>
                                    {t.highlight && <Zap className="mr-1.5 inline h-4 w-4 -translate-y-px fill-cyan text-cyan" />}
                                    {t.who}
                                </span>
                                <span className={cn("font-mono text-xs", t.highlight ? "text-cyan" : "text-muted-foreground")}>{t.time}</span>
                            </div>
                            <div className="h-3 overflow-hidden rounded-full bg-white/[0.04]">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${t.width}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: t.highlight ? 0.5 : 1.8, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className={cn(
                                        "h-full rounded-full",
                                        t.highlight
                                            ? "bg-gradient-to-r from-violet to-cyan shadow-[0_0_24px_rgba(34,211,238,0.7)]"
                                            : "bg-white/15"
                                    )}
                                />
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1} className="mx-auto mt-20 max-w-4xl">
                    <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-surface">
                        <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-white/[0.06] px-5 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground md:px-8">
                            <span />
                            <span className="text-center">Agencia</span>
                            <span className="text-center text-foreground">Axeliron</span>
                        </div>
                        {rows.map((r) => (
                            <div
                                key={r.label}
                                className="grid grid-cols-[1.4fr_1fr_1fr] items-center border-b border-white/[0.04] px-5 py-4 text-sm last:border-0 md:px-8"
                            >
                                <span className="text-white/75">{r.label}</span>
                                <Cell value={r.them} />
                                <Cell value={r.us} highlight />
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
    if (typeof value === "boolean") {
        return (
            <span className="flex justify-center">
                {value ? (
                    <span className={cn("grid h-6 w-6 place-items-center rounded-full", highlight ? "bg-cyan/15 text-cyan" : "bg-white/[0.06] text-white/50")}>
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                ) : (
                    <Minus className="h-4 w-4 text-white/25" />
                )}
            </span>
        );
    }
    return (
        <span className={cn("text-center", highlight ? "font-semibold text-foreground" : "text-white/45 line-through decoration-white/20")}>
            {value}
        </span>
    );
}
