"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarClock } from "lucide-react";

export function Hero() {
    const scrollToContact = () => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/15 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/15 rounded-full blur-[140px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
            </div>

            {/* Grid pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container mx-auto px-4 z-10 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-8"
                    >
                        <CalendarClock size={14} />
                        Lista en 7 días hábiles. Sin excusas.
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight leading-[1.05] mb-6"
                    >
                        Tu negocio merece una web que{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500">
                            realmente venda
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        Diseñamos landing pages que convierten visitantes en clientes.{" "}
                        <span className="text-foreground font-medium">Sin backend complejo, sin procesos eternos.</span>{" "}
                        En 7 días hábiles tenés tu página lista para recibir leads.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <Button
                            id="hero-cta-primary"
                            size="lg"
                            variant="premium"
                            className="group text-base h-14 px-8 rounded-xl font-bold shadow-2xl shadow-primary/20"
                            onClick={scrollToContact}
                        >
                            Quiero mi landing ahora
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            id="hero-cta-secondary"
                            size="lg"
                            variant="outline"
                            className="text-base h-14 px-8 rounded-xl font-medium border-border/60 hover:border-primary/50"
                            onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Ver cómo funciona
                        </Button>
                    </motion.div>

                    {/* Social proof bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground"
                    >
                        {[
                            { stat: "7 días", label: "entrega garantizada" },
                            { stat: "100%", label: "orientada a conversión" },
                            { stat: "Sin sorpresas", label: "precio fijo" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className="text-primary font-bold text-base">{item.stat}</span>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Mock preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 max-w-5xl mx-auto relative"
                >
                    <div className="relative rounded-2xl border border-white/10 bg-secondary/20 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">
                        {/* Browser bar */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-secondary/40 border-b border-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                            </div>
                            <div className="flex-1 mx-4 h-6 bg-white/5 rounded-md flex items-center px-3">
                                <span className="text-xs text-muted-foreground">tunegocio.com</span>
                            </div>
                        </div>

                        {/* Fake landing content */}
                        <div className="p-6 md:p-10 space-y-6">
                            {/* Hero fake */}
                            <div className="space-y-3">
                                <div className="h-3 w-24 bg-primary/30 rounded-full" />
                                <div className="h-8 w-3/4 bg-white/10 rounded-lg" />
                                <div className="h-8 w-2/3 bg-white/8 rounded-lg" />
                                <div className="h-4 w-full bg-white/5 rounded-md" />
                                <div className="h-4 w-5/6 bg-white/5 rounded-md" />
                                <div className="flex gap-3 pt-2">
                                    <div className="h-10 w-40 bg-gradient-to-r from-primary/80 to-accent/80 rounded-lg" />
                                    <div className="h-10 w-32 bg-white/10 rounded-lg border border-white/10" />
                                </div>
                            </div>

                            {/* Stats row */}
                            <div className="grid grid-cols-3 gap-4 pt-4">
                                {[0.6, 0.85, 0.45].map((w, i) => (
                                    <div key={i} className="bg-white/5 rounded-xl p-4 space-y-2 border border-white/5">
                                        <div className="h-6 w-16 bg-primary/30 rounded" />
                                        <div style={{ width: `${w * 100}%` }} className="h-3 bg-white/10 rounded" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Floating metrics */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -top-4 -right-4 md:-right-8 bg-background/95 border border-white/10 rounded-2xl p-4 shadow-2xl hidden sm:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-lg">↑</div>
                            <div>
                                <div className="text-xs text-muted-foreground">Conversión</div>
                                <div className="text-lg font-bold text-green-400">+340%</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-4 -left-4 md:-left-8 bg-background/95 border border-white/10 rounded-2xl p-4 shadow-2xl hidden sm:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">✓</div>
                            <div>
                                <div className="text-xs text-muted-foreground">Entregado en</div>
                                <div className="text-lg font-bold">7 días</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
