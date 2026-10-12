"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";
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

/** Barra fija en mobile (visible después del hero) + botón flotante de WhatsApp. */
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
        <>
            <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribinos por WhatsApp"
                className={cn(
                    "group fixed right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-5px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 md:bottom-6 md:right-6",
                    visible ? "bottom-[76px]" : "bottom-4"
                )}
            >
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]/50" aria-hidden />
                <WhatsAppIcon className="relative h-7 w-7" />
                <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-white/10 bg-[#0b0b10]/90 px-3 py-1.5 text-sm text-foreground opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 md:block">
                    ¿Hablamos por WhatsApp?
                </span>
            </a>

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
        </>
    );
}

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
    );
}
