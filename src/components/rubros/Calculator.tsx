"use client";

import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { CtaButton } from "@/components/landing/ui";

/**
 * Estructura común de las calculadoras de cada rubro: sliders a la izquierda y
 * resultado (lo que se pierde hoy / lo que se gana con la landing) a la derecha.
 */
export function CalculatorShell({
    children,
    before,
    main,
    secondary,
    payback,
    ctaLabel,
}: {
    children: React.ReactNode;
    before?: { label: string; value: number; suffix?: string; strike?: boolean };
    main: { label: string; value: number; suffix?: string };
    secondary?: React.ReactNode;
    payback?: React.ReactNode;
    ctaLabel: string;
}) {
    return (
        <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-surface lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-7 p-6 md:p-10">{children}</div>

            <div className="relative flex flex-col justify-between gap-8 overflow-hidden border-t border-white/10 bg-gradient-to-br from-violet/15 via-surface-2 to-cyan/10 p-6 md:p-10 lg:border-l lg:border-t-0">
                <div>
                    {before && (
                        <>
                            <p className="text-sm text-muted-foreground">{before.label}</p>
                            <p className={`mb-8 mt-1 text-2xl font-semibold tracking-tight text-white/60 ${before.strike === false ? "" : "line-through decoration-white/30"}`}>
                                <Money value={before.value} />
                                {before.suffix}
                            </p>
                        </>
                    )}
                    <p className="text-sm text-muted-foreground">{main.label}</p>
                    <p className="mt-1 text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
                        <span className="text-brand">
                            <Money value={main.value} />
                        </span>
                        {main.suffix && <span className="text-2xl text-muted-foreground">{main.suffix}</span>}
                    </p>
                    {secondary && <p className="mt-2 text-lg">{secondary}</p>}
                </div>

                <div className="space-y-4">
                    {payback && <p className="rounded-2xl border border-lime/20 bg-lime/[0.06] px-4 py-3 text-sm">{payback}</p>}
                    <CtaButton href="#agendar" className="h-14 w-full text-base">
                        {ctaLabel}
                    </CtaButton>
                </div>
            </div>
        </div>
    );
}

export function Slider({
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
export function Money({ value }: { value: number }) {
    const mv = useMotionValue(value);
    const text = useTransform(mv, (v) => `USD ${Math.round(v).toLocaleString("es-AR")}`);
    useEffect(() => {
        const controls = animate(mv, value, { duration: 0.5, ease: "easeOut" });
        return () => controls.stop();
    }, [mv, value]);
    return <motion.span>{text}</motion.span>;
}

export const usd = (v: number) => `USD ${v.toLocaleString("es-AR")}`;

export function plural(n: number, one: string, many: string) {
    return `${n} ${n === 1 ? one : many}`;
}
