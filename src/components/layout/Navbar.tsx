"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Rocket, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/landing/ui";

const navLinks = [
    { name: "Proceso", href: "#proceso" },
    { name: "Diseños", href: "#disenos" },
    { name: "Precio", href: "#precio" },
    { name: "FAQ", href: "#faq" },
];

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={cn("group flex items-center gap-2", className)} aria-label="Axeliron, inicio">
            <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-violet to-cyan">
                <Rocket className="h-4 w-4 text-white" strokeWidth={2.2} aria-hidden />
            </span>
            <span className="text-[17px] font-semibold tracking-[-0.03em]">Axeliron</span>
        </Link>
    );
}

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
            <nav
                className={cn(
                    "mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border px-3 pl-5 transition-all duration-500",
                    isScrolled || isOpen
                        ? "border-white/10 bg-[#0b0b10]/75 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl"
                        : "border-transparent bg-transparent"
                )}
            >
                <Logo />

                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <CtaButton href="#agendar" className="h-10 px-5 text-sm">
                        Agendar llamada
                    </CtaButton>
                </div>

                <button
                    className="grid h-10 w-10 place-items-center rounded-full text-foreground md:hidden"
                    onClick={() => setIsOpen((v) => !v)}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/10 bg-[#0b0b10]/95 p-3 backdrop-blur-xl md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block rounded-2xl px-4 py-3 text-base text-foreground/90 hover:bg-white/[0.05]"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div onClick={() => setIsOpen(false)} className="p-1 pt-2">
                            <CtaButton href="#agendar" className="w-full">
                                Agendar llamada gratis
                            </CtaButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
