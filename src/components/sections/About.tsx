"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, TrendingUp, Workflow, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    "Enfoque en ROI y Resultados",
    "Comunicación Clara y Directa",
    "Desarrollo Ágil y Escalable",
    "Soporte Continuo"
];

export function About() {
    return (
        <section id="nosotros" className="py-24 bg-secondary/20">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Más que código, somos tu <span className="text-accent">Socio Estratégico</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Somos una agencia digital nacida en Argentina con visión global. Entendemos que la tecnología no es el fin, sino el medio para alcanzar tus objetivos de negocio.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        Nos especializamos en trabajar con PYMES que buscan dar el salto digital, ofreciendo soluciones a medida que combinan diseño premium con funcionalidad robusta.
                    </p>

                    <ul className="space-y-4">
                        {features.map((feature, i) => (
                            <motion.li
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 text-foreground font-medium"
                            >
                                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                {feature}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-secondary/10 border border-primary/10 shadow-[0_0_50px_-12px_rgba(var(--primary),0.3)] p-8 flex flex-col justify-center items-center group">
                        {/* Light Background with Glass effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-accent/5" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />

                        {/* Strategic Graphic Elements */}
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                            {/* ROI Line Graph (SVG) */}
                            <svg className="absolute w-full h-32 text-primary/20 overflow-visible" viewBox="0 0 400 100">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="var(--primary)" />
                                        <stop offset="100%" stopColor="var(--accent)" />
                                    </linearGradient>
                                    <marker
                                        id="arrowhead"
                                        markerWidth="10"
                                        markerHeight="7"
                                        refX="9"
                                        refY="3.5"
                                        orient="auto"
                                    >
                                        <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent)" />
                                    </marker>
                                </defs>
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    d="M-10 90 C 50 90, 80 60, 150 60 C 220 60, 250 95, 320 55 C 370 30, 400 10, 420 -5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                                    d="M-10 90 C 50 90, 80 60, 150 60 C 220 60, 250 95, 320 55 C 370 30, 400 10, 420 -5"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    markerEnd="url(#arrowhead)"
                                />
                            </svg>

                            {/* Floating Strategic Nodes */}
                            <div className="grid grid-cols-2 gap-8 relative z-10 w-full max-w-sm">
                                {[
                                    { icon: Target, label: "Estrategia", color: "text-blue-500", bg: "bg-blue-500/10" },
                                    { icon: Workflow, label: "Procesos", color: "text-purple-500", bg: "bg-purple-500/10" },
                                    { icon: Zap, label: "Ejecución", color: "text-amber-500", bg: "bg-amber-500/10" },
                                    { icon: TrendingUp, label: "Resultados", color: "text-green-500", bg: "bg-green-500/10" }
                                ].map((node, i) => (
                                    <motion.div
                                        key={node.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                        className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-background/40 border border-white/5 backdrop-blur-md shadow-xl group-hover:scale-105 transition-transform"
                                    >
                                        <div className={cn("p-3 rounded-xl", node.bg)}>
                                            <node.icon className={cn("w-6 h-6", node.color)} />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-tighter opacity-70 italic">{node.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-8 z-10">
                            <h3 className="text-xl font-bold text-foreground">Socio Tecnológico</h3>
                            <p className="text-muted-foreground text-xs font-medium">Escalando tu visión con IA</p>
                        </div>
                    </div>
                    {/* Decoration */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
}
