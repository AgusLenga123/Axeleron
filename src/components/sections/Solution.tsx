"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

const included = [
    "Diseño enfocado en conversión (no solo en estética)",
    "Copywriting persuasivo incluido",
    "Formulario de contacto o botón de WhatsApp directo",
    "Optimizada para mobile (tu público principal)",
    "Velocidad de carga rápida (Google te premia por eso)",
    "Entrega en 7 días hábiles, con proceso claro",
];

export function Solution() {
    return (
        <section id="servicio" className="py-24 bg-background relative overflow-hidden">
            <GridBackground opacity={0.03} size={60} />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <div>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                            La solución
                        </motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Una landing que trabaja{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">por vos, 24/7</span>
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg leading-relaxed mb-8">
                            Hacemos una sola cosa y la hacemos muy bien: <strong className="text-foreground">landing pages diseñadas para convertir</strong>. No blogs, no tiendas completas, no sistemas complejos. Solo una página clara, directa y orientada a que el visitante tome acción.
                        </motion.p>
                        <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-3 mb-10">
                            {included.map((item, i) => (
                                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-start gap-3 text-sm">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-muted-foreground">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                            <Button id="solution-cta" size="lg" variant="premium" className="group h-12 px-7 rounded-xl font-bold" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                                Empezar ahora
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                        <div className="relative bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-3xl border border-border/50 p-8 backdrop-blur-sm overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 blur-[80px] rounded-full" />
                            <div className="relative space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5">
                                        <p className="text-xs text-red-400 font-bold uppercase tracking-widest mb-3">Sin landing</p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="text-red-400">✗</span> Tráfico que no convierte</div>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="text-red-400">✗</span> Sin captación de leads</div>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="text-red-400">✗</span> Ads quemando plata</div>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="text-red-400">✗</span> Sin credibilidad online</div>
                                        </div>
                                    </div>
                                    <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5">
                                        <p className="text-xs text-green-400 font-bold uppercase tracking-widest mb-3">Con Axeleron</p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="text-green-400">✓</span> Leads todos los días</div>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="text-green-400">✓</span> Ads que retornan</div>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="text-green-400">✓</span> Lista en 7 días</div>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="text-green-400">✓</span> Confianza inmediata</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-background/50 rounded-2xl p-5 border border-white/5">
                                    <p className="text-xs text-muted-foreground mb-2">Tasa de conversión promedio</p>
                                    <div className="flex items-end gap-3 mb-3">
                                        <span className="text-4xl font-bold font-heading text-primary">3.8%</span>
                                        <span className="text-muted-foreground text-sm line-through pb-1">0.4%</span>
                                    </div>
                                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} whileInView={{ width: "76%" }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }} className="h-full bg-gradient-to-r from-primary to-accent rounded-full" />
                                    </div>
                                    <p className="text-xs text-green-400 mt-2">↑ 10x más conversiones con una landing optimizada</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
