"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Reveal({
    delay = 0,
    y = 24,
    className,
    ...props
}: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
            {...props}
        />
    );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
                className
            )}
        >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            {children}
        </span>
    );
}

export function SectionHeading({
    eyebrow,
    title,
    subtitle,
    className,
}: {
    eyebrow: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("mx-auto max-w-3xl text-center", className)}>
            <Reveal>
                <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
                <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-6xl">{title}</h2>
            </Reveal>
            {subtitle && (
                <Reveal delay={0.1}>
                    <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                        {subtitle}
                    </p>
                </Reveal>
            )}
        </div>
    );
}

/** Palabra en serif itálica, el acento tipográfico de la marca. */
export function Serif({ children, className }: { children: React.ReactNode; className?: string }) {
    return <span className={cn("font-serif font-normal italic tracking-[-0.01em]", className)}>{children}</span>;
}

export function CtaButton({
    href,
    children,
    variant = "primary",
    className,
    arrow = true,
    external,
}: {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "ghost";
    className?: string;
    arrow?: boolean;
    external?: boolean;
}) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={cn(
                "group relative inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                variant === "primary" &&
                    "bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_40px_-8px_rgba(139,92,246,0.7)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_8px_60px_-6px_rgba(34,211,238,0.8)] hover:-translate-y-0.5",
                variant === "ghost" &&
                    "border border-white/12 bg-white/[0.03] text-foreground backdrop-blur hover:border-white/25 hover:bg-white/[0.06]",
                className
            )}
        >
            {children}
            {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
        </a>
    );
}
