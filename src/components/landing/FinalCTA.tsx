"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { CtaButton, Reveal, Serif } from "./ui";

export function FinalCTA() {
    return (
        <section className="relative overflow-hidden px-4 pb-24 md:pb-32">
            <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-surface px-6 py-20 text-center md:py-28">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.35),transparent_60%)]" />
                <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />
                <div className="relative">
                    <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-7xl">
                        Dentro de {site.deliveryDays} días podrías estar <Serif className="text-brand">recibiendo clientes.</Serif>
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                        O podés seguir esperando. Tus competidores no lo van a hacer.
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <CtaButton href="#agendar" className="h-14 w-full px-8 text-base sm:w-auto">
                            Quiero mi landing por USD {site.price}
                        </CtaButton>
                        <CtaButton href="#disenos" variant="ghost" arrow={false} className="h-14 w-full px-8 text-base sm:w-auto">
                            Ver diseños
                        </CtaButton>
                    </div>
                    <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Quedan {site.spotsLeft} cupos este mes
                    </p>
                </div>
            </Reveal>
        </section>
    );
}

/** Barra fija en mobile, visible después del hero. */
export function StickyCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const booking = document.getElementById("agendar");
            const inBooking = booking ? booking.getBoundingClientRect().top < window.innerHeight * 0.6 && booking.getBoundingClientRect().bottom > 0 : false;
            setVisible(window.scrollY > window.innerHeight * 0.8 && !inBooking);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-x-3 bottom-3 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-[#0b0b10]/90 p-1.5 pl-5 shadow-2xl backdrop-blur-xl md:hidden"
                    >
                        <span className="flex-1 text-sm">
                            <span className="font-semibold">USD {site.price}</span>
                            <span className="text-muted-foreground"> · {site.deliveryDays} días</span>
                        </span>
                        <a href="#agendar" className="rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black">
                            Agendar
                        </a>
                    </motion.div>
                )}
        </AnimatePresence>
    );
}
