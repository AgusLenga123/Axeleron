"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock, Monitor, MousePointer2, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const DESKTOP_W = 1280;
const DESKTOP_H = 760;

/**
 * Muestra una landing de ejemplo dentro de una pantalla de computadora (escalada para
 * entrar en cualquier ancho) o de un celular. El contenido se puede scrollear e interactuar.
 */
export function DeviceDemo({ url, screenBg = "#f6f2ea", children }: { url: string; screenBg?: string; children: React.ReactNode }) {
    const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

    return (
        <div>
            <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MousePointer2 className="h-4 w-4 text-cyan" />
                    <span>
                        Es interactiva: scrolleá dentro de la pantalla y probá el buscador.
                        {device === "desktop" && <span className="sm:hidden"> Tocá “Celular” para verla en tamaño real.</span>}
                    </span>
                </p>
                <div className="flex rounded-full border border-white/10 bg-surface p-1" role="tablist" aria-label="Vista">
                    {(
                        [
                            { id: "desktop", label: "Computadora", icon: Monitor },
                            { id: "mobile", label: "Celular", icon: Smartphone },
                        ] as const
                    ).map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            role="tab"
                            aria-selected={device === id}
                            onClick={() => setDevice(id)}
                            className={cn(
                                "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors",
                                device === id ? "text-black" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {device === id && (
                                <motion.span layoutId="device-pill" className="absolute inset-0 rounded-full bg-white" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                            )}
                            <Icon className="relative h-4 w-4" />
                            <span className="relative">{label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={device}
                    initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                    transition={{ duration: 0.35 }}
                >
                    {device === "desktop" ? <DesktopFrame url={url}>{children}</DesktopFrame> : <PhoneFrame screenBg={screenBg}>{children}</PhoneFrame>}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function DesktopFrame({ url, children }: { url: string; children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => setScale(Math.min(1, entry.contentRect.width / DESKTOP_W)));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return (
        <div className="relative">
            <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[3rem] bg-gradient-to-b from-violet/25 via-cyan/10 to-transparent blur-3xl" />
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#0c0c11] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
                <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
                    <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
                    </div>
                    <div className="mx-auto flex h-7 w-full max-w-xs items-center justify-center gap-1.5 rounded-md bg-white/[0.05] font-mono text-[11px] text-muted-foreground">
                        <Lock className="h-3 w-3" />
                        {url}
                    </div>
                    <span className="hidden w-[52px] sm:block" />
                </div>
                <div ref={ref} style={{ height: DESKTOP_H * scale }} className="relative overflow-clip">
                    <div
                        style={{ width: DESKTOP_W, height: DESKTOP_H, transform: `scale(${scale})`, transformOrigin: "top left" }}
                        data-demo-scroll
                        className="overflow-y-auto overflow-x-hidden overscroll-contain [scrollbar-width:thin]"
                    >
                        {children}
                    </div>
                </div>
            </div>
            {/* Base del monitor */}
            <div className="mx-auto h-4 w-1/3 rounded-b-2xl bg-gradient-to-b from-white/[0.08] to-transparent" />
        </div>
    );
}

function PhoneFrame({ screenBg, children }: { screenBg: string; children: React.ReactNode }) {
    return (
        <div className="relative mx-auto w-[min(100%,390px)]">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-b from-violet/25 via-cyan/10 to-transparent blur-3xl" />
            <div className="rounded-[48px] border border-white/15 bg-[#0c0c11] p-3 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
                <div className="relative overflow-hidden rounded-[38px]">
                    <div className="absolute left-1/2 top-2 z-40 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
                    <div data-demo-scroll style={{ background: screenBg }} className="h-[720px] max-h-[75vh] overflow-y-auto overflow-x-hidden overscroll-contain pt-10 [scrollbar-width:none]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
