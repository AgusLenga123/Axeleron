"use client";

import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import { CtaButton } from "@/components/landing/ui";

/** Calculadora: cuánto se va en comisiones de OTAs y cuánto ahorrás pasando parte a reserva directa. */
export function SavingsCalculator() {
    const [bookings, setBookings] = useState(60);
    const [ticket, setTicket] = useState(250);
    const [commission, setCommission] = useState(18);
    const [direct, setDirect] = useState(30);

    const monthlyCommission = bookings * ticket * (commission / 100);
    const monthlySavings = monthlyCommission * (direct / 100);
    const yearlySavings = monthlySavings * 12;
    const paybackDays = monthlySavings > 0 ? Math.max(1, Math.ceil((site.price / monthlySavings) * 30)) : null;

    return (
        <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-surface lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-7 p-6 md:p-10">
                <Slider label="Reservas por mes que entran por Booking, Expedia o Airbnb" value={bookings} min={5} max={300} step={5} onChange={setBookings} format={(v) => `${v}`} />
                <Slider label="Valor promedio de cada estadía" value={ticket} min={50} max={1500} step={10} onChange={setTicket} format={(v) => `USD ${v}`} />
                <Slider label="Comisión que te cobra la plataforma" value={commission} min={10} max={30} step={1} onChange={setCommission} format={(v) => `${v}%`} />
                <Slider label="Reservas que pasás a tu web" value={direct} min={5} max={80} step={5} onChange={setDirect} format={(v) => `${v}%`} />
            </div>

            <div className="relative flex flex-col justify-between gap-8 overflow-hidden border-t border-white/10 bg-gradient-to-br from-violet/15 via-surface-2 to-cyan/10 p-6 md:p-10 lg:border-l lg:border-t-0">
                <div>
                    <p className="text-sm text-muted-foreground">Hoy pagás en comisiones</p>
                    <p className="mt-1 text-2xl font-semibold tracking-tight text-white/60 line-through decoration-white/30">
                        <Money value={monthlyCommission} /> /mes
                    </p>

                    <p className="mt-8 text-sm text-muted-foreground">Con tu landing de reservas directas ahorrás</p>
                    <p className="mt-1 text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
                        <span className="text-brand">
                            <Money value={monthlySavings} />
                        </span>
                        <span className="text-2xl text-muted-foreground"> /mes</span>
                    </p>
                    <p className="mt-2 text-lg">
                        <Money value={yearlySavings} /> <span className="text-muted-foreground">al año</span>
                    </p>
                </div>

                <div className="space-y-4">
                    {paybackDays !== null && (
                        <p className="rounded-2xl border border-lime/20 bg-lime/[0.06] px-4 py-3 text-sm">
                            Tu landing de <b>USD {site.price}</b> se paga sola en{" "}
                            <b className="text-lime">
                                {paybackDays} {paybackDays === 1 ? "día" : "días"}
                            </b>
                            .
                        </p>
                    )}
                    <CtaButton href="#agendar" className="h-14 w-full text-base">
                        Quiero dejar de pagar comisiones
                    </CtaButton>
                </div>
            </div>
        </div>
    );
}

function Slider({
    label,
    value,
    min,
    max,
    step,
    onChange,
    format,
}: {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (v: number) => void;
    format: (v: number) => string;
}) {
    const pct = ((value - min) / (max - min)) * 100;
    return (
        <label className="block">
            <span className="flex items-baseline justify-between gap-4">
                <span className="text-[15px] text-white/80">{label}</span>
                <span className="shrink-0 font-mono text-sm text-cyan">{format(value)}</span>
            </span>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{ background: `linear-gradient(90deg, var(--violet), var(--cyan) ${pct}%, rgba(255,255,255,0.08) ${pct}%)` }}
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(139,92,246,0.35)]"
            />
        </label>
    );
}

/** Monto en USD que anima su cambio. */
function Money({ value }: { value: number }) {
    const mv = useMotionValue(value);
    const text = useTransform(mv, (v) => `USD ${Math.round(v).toLocaleString("es-AR")}`);
    useEffect(() => {
        const controls = animate(mv, value, { duration: 0.5, ease: "easeOut" });
        return () => controls.stop();
    }, [mv, value]);
    return <motion.span>{text}</motion.span>;
}
