"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/** Muestra un aviso temporal dentro de una landing de demo (ej: "Turno solicitado"). */
export function useDemoToast(duration = 3200) {
    const [message, setMessage] = useState<string | null>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const show = useCallback(
        (msg: string) => {
            if (timer.current) clearTimeout(timer.current);
            setMessage(msg);
            timer.current = setTimeout(() => setMessage(null), duration);
        },
        [duration]
    );

    return { message, show };
}

/**
 * Se ubica justo después del header de la landing: queda fijo arriba de la pantalla
 * simulada mientras se scrollea, así el aviso siempre se ve.
 */
export function DemoToast({ message, className }: { message: string | null; className?: string }) {
    return (
        <div className="pointer-events-none sticky top-16 z-30 h-0">
            <AnimatePresence>
                {message && (
                    <motion.div
                        key={message}
                        initial={{ opacity: 0, y: -12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8 }}
                        className={cn(
                            "absolute right-4 top-2 flex max-w-[calc(100%-2rem)] items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-[12px] shadow-xl",
                            className ?? "bg-[#111] text-white"
                        )}
                    >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#25D366] text-white">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        {message}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/** Scrollea la pantalla simulada (no la página) hasta un elemento de la demo. */
export function scrollInDemo(from: HTMLElement, id: string) {
    const scroller = from.closest<HTMLElement>("[data-demo-scroll]");
    const target = scroller?.querySelector<HTMLElement>(`[data-demo-section="${id}"]`);
    if (!scroller || !target) return;
    // En la vista de computadora la pantalla está escalada con transform: hay que corregir por la escala
    const scale = scroller.getBoundingClientRect().height / scroller.offsetHeight || 1;
    const top = (target.getBoundingClientRect().top - scroller.getBoundingClientRect().top) / scale + scroller.scrollTop;
    scroller.scrollTo({ top: top - 64, behavior: "smooth" });
}
