"use client";

import { motion } from "framer-motion";
import { Clock, Target, Smartphone, TrendingUp, Shield, HeartHandshake } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

const benefits = [
    { icon: Clock, title: "Entrega real en 7 días", description: "Sin vueltas. Ponemos una fecha y la cumplimos. Tu negocio no puede seguir esperando.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { icon: Target, title: "Diseñada para convertir", description: "Cada sección, cada botón y cada palabra tiene un propósito: que el visitante te contacte.", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
    { icon: Smartphone, title: "Mobile first", description: "Más del 70% de tu tráfico llega desde el celular. Tu landing se ve perfecta en cualquier pantalla.", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { icon: TrendingUp, title: "Lista para tus ads", description: "Conectamos tu landing con píxeles de Meta, Google Ads y Analytics para optimizar desde el día uno.", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { icon: Shield, title: "Precio fijo, sin sorpresas", description: "Sabés exactamente cuánto vas a pagar antes de empezar. Sin costos ocultos ni extras que aparecen al final.", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
    { icon: HeartHandshake, title: "Proceso simple y claro", description: "Te guiamos paso a paso. No necesitás saber nada de tecnología. Solo contanos tu negocio.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
];

export function Benefits() {
    return (
        <section id="beneficios" className="py-24 bg-background relative overflow-hidden">
            <GridBackground opacity={0.03} size={60} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Por qué elegirnos</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold font-heading mb-6">Resultados, no promesas</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg">Todo lo que hacemos está pensado para que tu inversión tenga retorno real.</motion.p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div key={benefit.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className={`group p-6 rounded-2xl border ${benefit.border} bg-secondary/10 backdrop-blur-sm hover:bg-secondary/20 transition-all duration-300`}>
                            <div className={`w-12 h-12 rounded-xl ${benefit.bg} ${benefit.border} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
