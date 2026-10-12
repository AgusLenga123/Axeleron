"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Timer, Wallet } from "lucide-react";
import { site, currentMonth } from "@/lib/site";
import { CtaButton, Serif } from "./ui";
import { HeroBuilder } from "./HeroBuilder";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
    return (
        <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
            {/* Fondo */}
            <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" />
            <div className="pointer-events-none absolute left-1/2 top-[-280px] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_180deg,rgba(139,92,246,0.35),rgba(34,211,238,0.25),rgba(139,92,246,0.05),rgba(139,92,246,0.35))] opacity-60 blur-[120px]" />

            <div className="container relative mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.a
                        href="#agendar"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease }}
                        className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-[13px] text-muted-foreground backdrop-blur transition-colors hover:border-white/20"
                    >
                        <span className="relative flex h-5 items-center gap-1.5 rounded-full bg-lime/15 px-2 font-mono text-[10px] uppercase tracking-wider text-lime">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-lime" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
                            </span>
                            {site.spotsLeft} cupos
                        </span>
                        <span>
                            disponibles en <span suppressHydrationWarning>{currentMonth()}</span>
                        </span>
                        <span className="text-foreground transition-transform group-hover:translate-x-0.5">→</span>
                    </motion.a>

                    <motion.h1
                        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.9, delay: 0.1, ease }}
                        className="mt-7 text-balance text-[44px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl md:text-[88px]"
                    >
                        Tu landing que vende,
                        <br />
                        online en <Serif className="text-brand pr-2">7 días.</Serif>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease }}
                        className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
                    >
                        Diseño, copy y desarrollo a medida por{" "}
                        <span className="font-medium text-foreground">USD {site.price}, pago único.</span> Vos seguís con tu
                        negocio; nosotros hacemos que cada visita se convierta en un cliente.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35, ease }}
                        className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
                    >
                        <CtaButton href="#agendar" className="h-14 w-full px-8 text-base sm:w-auto">
                            Agendá tu llamada gratis
                        </CtaButton>
                        <CtaButton href="#disenos" variant="ghost" arrow={false} className="h-14 w-full px-8 text-base sm:w-auto">
                            Ver diseños
                        </CtaButton>
                    </motion.div>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
                    >
                        {[
                            { icon: Timer, text: `Entrega en ${site.deliveryDays} días hábiles` },
                            { icon: Wallet, text: "Precio fijo, sin sorpresas" },
                            { icon: ShieldCheck, text: "Garantía de devolución" },
                        ].map(({ icon: Icon, text }) => (
                            <li key={text} className="flex items-center gap-2">
                                <Icon className="h-4 w-4 text-cyan" />
                                {text}
                            </li>
                        ))}
                    </motion.ul>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 60, rotateX: 18 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1.2, delay: 0.45, ease }}
                    style={{ transformPerspective: 1600 }}
                    className="mx-auto mt-16 max-w-5xl md:mt-20"
                >
                    <HeroBuilder />
                </motion.div>
            </div>
        </section>
    );
}
