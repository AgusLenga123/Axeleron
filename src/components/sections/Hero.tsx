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

                        {/* Fake landing content — richer mockup */}
                        <div className="p-6 md:p-10">
                            <div className="grid md:grid-cols-5 gap-6">
                                {/* Left col: hero copy */}
                                <div className="md:col-span-3 space-y-4">
                                    {/* Eyebrow */}
                                    <div className="h-3 w-28 bg-primary/50 rounded-full" />
                                    {/* Headline lines */}
                                    <div className="space-y-2">
                                        <div className="h-7 w-full bg-white/15 rounded-lg" />
                                        <div className="h-7 w-4/5 bg-white/12 rounded-lg" />
                                    </div>
                                    {/* Body text */}
                                    <div className="space-y-1.5 pt-1">
                                        <div className="h-3 w-full bg-white/6 rounded" />
                                        <div className="h-3 w-11/12 bg-white/6 rounded" />
                                        <div className="h-3 w-4/5 bg-white/6 rounded" />
                                    </div>
                                    {/* CTA buttons */}
                                    <div className="flex gap-3 pt-2">
                                        <div className="h-9 w-36 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                                            <div className="h-2 w-20 bg-white/60 rounded" />
                                        </div>
                                        <div className="h-9 w-28 bg-white/8 rounded-lg border border-white/10 flex items-center justify-center">
                                            <div className="h-2 w-16 bg-white/30 rounded" />
                                        </div>
                                    </div>
                                    {/* Avatars + trust */}
                                    <div className="flex items-center gap-3 pt-1">
                                        <div className="flex -space-x-2">
                                            {["bg-pink-400", "bg-violet-400", "bg-blue-400", "bg-emerald-400"].map((c, i) => (
                                                <div key={i} className={`w-6 h-6 rounded-full ${c} border-2 border-background`} />
                                            ))}
                                        </div>
                                        <div className="h-2.5 w-32 bg-white/15 rounded" />
                                    </div>
                                </div>

                                {/* Right col: visual card */}
                                <div className="md:col-span-2 flex flex-col gap-3">
                                    {/* Mini chart card */}
                                    <div className="bg-white/5 border border-white/8 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="h-2.5 w-16 bg-white/20 rounded" />
                                            <div className="h-5 w-12 bg-green-500/20 rounded-md flex items-center justify-center">
                                                <span className="text-[9px] text-green-400 font-bold">+124%</span>
                                            </div>
                                        </div>
                                        {/* Bar chart */}
                                        <div className="flex items-end gap-1.5 h-14">
                                            {[35, 55, 42, 68, 52, 80, 95].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 rounded-sm"
                                                    style={{
                                                        height: `${h}%`,
                                                        background: i === 6
                                                            ? "linear-gradient(to top, #6366f1, #8b5cf6)"
                                                            : "rgba(255,255,255,0.08)"
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Leads counter card */}
                                    <div className="bg-white/5 border border-white/8 rounded-xl p-4 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                            <span className="text-green-400 text-xs font-bold">✓</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="h-2 w-12 bg-white/15 rounded mb-1.5" />
                                            <div className="h-5 w-16 bg-green-400/20 rounded flex items-center justify-center">
                                                <span className="text-[10px] text-green-400 font-bold">+48 leads</span>
                                            </div>
                                        </div>
                                        {/* Sparkline */}
                                        <svg className="w-16 h-8" viewBox="0 0 64 32">
                                            <polyline
                                                points="0,28 10,22 20,18 30,12 40,15 50,6 64,2"
                                                fill="none"
                                                stroke="#34d399"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                opacity="0.7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom stats row */}
                            <div className="grid grid-cols-3 gap-3 mt-5">
                                {[
                                    { label: "Visitas / mes", value: "4,280", color: "bg-primary/30", bar: 0.72 },
                                    { label: "Conversión", value: "3.8%", color: "bg-accent/40", bar: 0.55 },
                                    { label: "Leads nuevos", value: "162", color: "bg-emerald-500/30", bar: 0.88 },
                                ].map((s, i) => (
                                    <div key={i} className="bg-white/4 border border-white/6 rounded-xl p-3 space-y-2">
                                        <div className="flex justify-between items-center">
                                            <div className="h-2 w-14 bg-white/15 rounded" />
                                            <span className="text-[10px] font-bold text-white/60">{s.value}</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.bar * 100}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Floating metric cards */}
                    {/* Conversión — top right */}
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

                    {/* Entregado — bottom left */}
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

                    {/* Engagement — top left */}
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.7 }}
                        className="absolute -top-4 -left-4 md:-left-8 bg-background/95 border border-white/10 rounded-2xl p-4 shadow-2xl hidden sm:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-lg">❤</div>
                            <div>
                                <div className="text-xs text-muted-foreground">Engagement</div>
                                <div className="text-lg font-bold text-pink-400">+84%</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Nuevos leads — bottom right */}
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.5 }}
                        className="absolute -bottom-4 -right-4 md:-right-8 bg-background/95 border border-white/10 rounded-2xl p-4 shadow-2xl hidden sm:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-lg">↗</div>
                            <div>
                                <div className="text-xs text-muted-foreground">Nuevos leads</div>
                                <div className="text-lg font-bold text-violet-400">+248</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
