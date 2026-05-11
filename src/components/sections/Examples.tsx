"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

const examples = [
    {
        name: "Coach de ventas",
        niche: "Coaching",
        headline: "Cerrá más ventas en 30 días o te devuelvo el dinero",
        subheadline: "Método probado con +200 vendedores. Sesiones 1:1 online. Primero hablamos, después decidís.",
        cta: "Quiero mi sesión gratis",
        color: "from-violet-600/30 to-purple-600/30",
        tag: "Ejemplo A",
        metrics: { visits: "1,240", leads: "52", rate: "4.2%" },
    },
    {
        name: "Clínica dental",
        niche: "Salud",
        headline: "Tu primera consulta es gratis. Sin letra chica.",
        subheadline: "Turnos disponibles esta semana. Financiación en 12 cuotas sin interés. A 5 minutos del centro.",
        cta: "Reservar turno ahora",
        color: "from-cyan-600/30 to-blue-600/30",
        tag: "Ejemplo B",
        metrics: { visits: "890", leads: "54", rate: "6.1%" },
    },
    {
        name: "Ecommerce de ropa",
        niche: "E-commerce",
        headline: "Envíos gratis a todo el país por tiempo limitado",
        subheadline: "Colección nueva cada semana. Talles de S a XXL. Comprá hoy y recibís en 48 hs.",
        cta: "Ver colección nueva",
        color: "from-orange-600/30 to-pink-600/30",
        tag: "Ejemplo C",
        metrics: { visits: "2,100", leads: "80", rate: "3.8%" },
    },
];

export function Examples() {
    return (
        <section id="ejemplos" className="py-24 bg-secondary/10 relative overflow-hidden">
            <GridBackground opacity={0.025} size={60} />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Ejemplos reales</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Así se ve una landing{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">que convierte</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg">Ejemplos de cómo adaptamos el mensaje y diseño al nicho de cada cliente.</motion.p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {examples.map((ex, index) => (
                        <motion.div key={ex.name} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.12, type: "spring", stiffness: 100 }} whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }} className="group relative flex flex-col rounded-3xl border border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden hover:border-border/80 transition-all duration-300">
                            <div className={`relative h-56 bg-gradient-to-br ${ex.color} p-6 flex flex-col justify-end overflow-hidden`}>
                                <div className="absolute inset-0 opacity-10">
                                    <div className="h-full w-full" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                                </div>
                                <div className="absolute top-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-xl border border-white/10 p-4">
                                    <div className="flex gap-1 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400/60" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                                        <div className="w-2 h-2 rounded-full bg-green-400/60" />
                                    </div>
                                    <p className="text-xs font-bold leading-tight mb-1">{ex.headline}</p>
                                    <p className="text-[10px] text-muted-foreground leading-tight mb-3">{ex.subheadline}</p>
                                    <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-primary/80 to-accent/80 rounded-lg text-[10px] font-bold text-white">{ex.cta}</div>
                                </div>
                                <span className="relative z-10 text-xs font-bold text-white/60">{ex.tag} · {ex.niche}</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="font-bold text-lg mb-1">{ex.name}</h3>
                                <div className="grid grid-cols-3 gap-3 mt-4 mb-6">
                                    {[
                                        { label: "Visitas/mes", value: ex.metrics.visits },
                                        { label: "Leads", value: ex.metrics.leads },
                                        { label: "Conversión", value: ex.metrics.rate },
                                    ].map((m) => (
                                        <div key={m.label} className="text-center bg-secondary/30 rounded-xl p-2">
                                            <div className="text-sm font-bold text-primary">{m.value}</div>
                                            <div className="text-[10px] text-muted-foreground">{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="outline" size="sm" className="mt-auto w-full rounded-xl border-border/60 hover:border-primary/50 text-xs" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Quiero algo así para mi negocio
                                    <ExternalLink className="ml-1 w-3 h-3" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
