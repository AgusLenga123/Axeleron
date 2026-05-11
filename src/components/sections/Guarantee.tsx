"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

export function Guarantee() {
    return (
        <section id="garantia" className="py-24 bg-secondary/10 relative overflow-hidden">
            <GridBackground opacity={0.025} size={60} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 80 }} className="max-w-4xl mx-auto">
                    <div className="relative rounded-3xl border border-primary/20 bg-background/60 backdrop-blur-sm overflow-hidden p-10 md:p-16">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-primary/15 blur-[80px] rounded-full" />
                        <div className="relative text-center">
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 mb-8"
                            >
                                <ShieldCheck className="w-10 h-10 text-primary" />
                            </motion.div>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Nuestra garantía</motion.p>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                                Si no te gusta, lo rehacemos.{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Así de simple.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                                Si el resultado final no cumple con lo que acordamos al inicio, <strong className="text-foreground">lo revisamos hasta que quede bien</strong>. Sin cargo extra, sin drama.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
                                {[
                                    { title: "Revisiones incluidas", desc: "Cada plan incluye rondas de revisión pactadas. Si algo no te convence, lo cambiamos." },
                                    { title: "Entrega o te avisamos antes", desc: "Si por algún motivo no podemos cumplir el plazo, te avisamos con anticipación. Nunca desaparecemos." },
                                    { title: "Proceso transparente", desc: "Tenés acceso al avance del proyecto en todo momento. Sin cajas negras, sin sorpresas al final." },
                                ].map((item, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-secondary/30 border border-border/40 rounded-2xl p-5">
                                        <h4 className="font-bold mb-2 text-sm">{item.title}</h4>
                                        <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <Button id="guarantee-cta" size="lg" variant="premium" className="h-14 px-10 rounded-xl font-bold text-base" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                                Empecemos con garantía →
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
