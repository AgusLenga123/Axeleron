"use client";

import { motion } from "framer-motion";
import { WifiOff, TrendingDown, Clock, DollarSign } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

const painPoints = [
    {
        icon: TrendingDown,
        title: "Gastás en ads y no convertís",
        description: "Traés tráfico de Instagram o Google, pero nadie completa el formulario. El problema no son los ads, es la página.",
        color: "from-red-500/20 to-orange-500/20",
        border: "hover:border-red-500/30",
        iconColor: "text-red-400",
        iconBg: "bg-red-500/10",
    },
    {
        icon: WifiOff,
        title: "Tu web no existe o está desactualizada",
        description: "Mandás a la gente a tu perfil de Instagram. No transmitís confianza y perdés leads todos los días sin darte cuenta.",
        color: "from-orange-500/20 to-yellow-500/20",
        border: "hover:border-orange-500/30",
        iconColor: "text-orange-400",
        iconBg: "bg-orange-500/10",
    },
    {
        icon: Clock,
        title: "Llevas meses sin poder lanzarlo",
        description: "Ya intentaste hacerlo solo, contratar un diseñador, o usar un constructor. Sigue sin estar listo y el negocio espera.",
        color: "from-yellow-500/20 to-amber-500/20",
        border: "hover:border-yellow-500/30",
        iconColor: "text-yellow-400",
        iconBg: "bg-yellow-500/10",
    },
    {
        icon: DollarSign,
        title: "Pagaste caro y el resultado fue decepcionante",
        description: "Invirtiste en una agencia o freelancer que te entregó algo lento, genérico y que no convierte. Esto no es lo mismo.",
        color: "from-amber-500/20 to-red-500/20",
        border: "hover:border-amber-500/30",
        iconColor: "text-amber-400",
        iconBg: "bg-amber-500/10",
    },
];

export function PainPoints() {
    return (
        <section id="problemas" className="py-24 bg-background relative overflow-hidden">
            <GridBackground opacity={0.03} size={60} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/30 via-transparent to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                        ¿Te suena familiar?
                    </motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Tenés tráfico pero{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">no convertís</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg">
                        Si alguno de estos escenarios te describe, estás en el lugar correcto.
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {painPoints.map((pain, index) => (
                        <motion.div key={pain.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`group relative flex gap-5 p-6 rounded-2xl border border-border/50 bg-secondary/10 backdrop-blur-sm transition-all duration-300 ${pain.border} hover:bg-secondary/20`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${pain.color} opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-300`} />
                            <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl ${pain.iconBg} flex items-center justify-center`}>
                                <pain.icon className={`w-6 h-6 ${pain.iconColor}`} />
                            </div>
                            <div className="relative">
                                <h3 className="font-bold text-lg mb-2">{pain.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{pain.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center mt-12">
                    <p className="text-muted-foreground text-lg">
                        El problema casi nunca es el producto.{" "}
                        <span className="text-foreground font-semibold">El problema es cómo lo estás comunicando en tu web.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
