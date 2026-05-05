"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { GridBackground } from "@/components/ui/GridBackground";

const plans = [
    {
        name: "Starter",
        emoji: "🚀",
        tagline: "Para salir al mercado rápido",
        price: "USD 290",
        description: "Ideal si nunca tuviste presencia online y necesitás algo profesional para empezar a captar leads.",
        features: ["Landing de hasta 6 secciones", "Formulario de contacto o botón WhatsApp", "Diseño mobile first", "Entrega en 7 días hábiles", "1 ronda de revisiones", "Integración básica con Analytics"],
        cta: "Quiero el Starter",
        gradient: "from-blue-600/20 to-cyan-600/20",
        borderHover: "hover:border-blue-500/40",
        badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        featured: false,
    },
    {
        name: "Pro",
        emoji: "⚡",
        tagline: "El más elegido",
        price: "USD 490",
        description: "Para negocios que ya tienen tráfico y quieren convertirlo en leads reales. Incluye copy estratégico.",
        features: ["Landing de hasta 10 secciones", "Copywriting persuasivo incluido", "Diseño premium con animaciones", "Entrega en 7 días hábiles", "2 rondas de revisiones", "Integración con Meta Pixel y Google Ads", "Formulario + WhatsApp + Email", "Optimización SEO básica"],
        cta: "Quiero el Pro",
        gradient: "from-primary/20 to-accent/20",
        borderHover: "hover:border-primary/50",
        badgeColor: "bg-primary/10 text-primary border-primary/20",
        featured: true,
    },
    {
        name: "Business",
        emoji: "💼",
        tagline: "Para marcas consolidadas",
        price: "USD 790",
        description: "Si tenés un negocio más complejo, varios productos o necesitás una web con más páginas internas.",
        features: ["Hasta 3 páginas (landing + internas)", "Copywriting + estrategia de conversión", "Diseño a medida con identidad de marca", "Entrega en 7 días hábiles", "3 rondas de revisiones", "Integración completa con CRM básico", "Automatización de emails", "Soporte prioritario por 30 días"],
        cta: "Quiero el Business",
        gradient: "from-amber-600/20 to-orange-600/20",
        borderHover: "hover:border-amber-500/40",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        featured: false,
    },
];

export function Pricing() {
    const scrollToContact = (planName: string) => {
        window.dispatchEvent(new CustomEvent('selectPlan', { detail: planName }));
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="planes" className="py-24 bg-background relative overflow-hidden">
            <GridBackground opacity={0.03} size={60} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 blur-[160px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Planes y precios</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Precio fijo.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sin sorpresas.</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg">Elegís el plan, sabés exactamente qué incluye y cuánto pagás. Así de simple.</motion.p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group relative flex flex-col rounded-3xl border bg-secondary/10 backdrop-blur-sm transition-all duration-300 cursor-pointer hover:scale-[1.04] hover:-translate-y-1",
                                plan.featured ? "border-primary/50 shadow-2xl shadow-primary/10" : `border-border/40 ${plan.borderHover}`
                            )}
                        >
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full shadow-lg">
                                        <Zap className="w-3 h-3" /> Más elegido
                                    </span>
                                </div>
                            )}
                            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl", plan.gradient)} />
                            <div className="relative p-8 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <span className="text-2xl mb-1 block">{plan.emoji}</span>
                                        <h3 className="text-2xl font-bold font-heading">{plan.name}</h3>
                                        <span className={cn("text-xs font-bold px-2 py-0.5 rounded-full border mt-1 inline-block", plan.badgeColor)}>{plan.tagline}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-black font-heading">{plan.price}</div>
                                        <div className="text-xs text-muted-foreground">pago único</div>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8">{plan.description}</p>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center mt-0.5">
                                                <Check className="w-3 h-3 text-green-400" />
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    id={`plan-cta-${plan.name.toLowerCase()}`}
                                    className={cn(
                                        "w-full h-12 rounded-xl font-bold transition-all mt-auto",
                                        plan.featured ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:opacity-90" : "bg-secondary/50 hover:bg-secondary text-foreground border border-border/60"
                                    )}
                                    onClick={() => scrollToContact(plan.name)}
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center text-sm text-muted-foreground mt-12">
                    ¿No sabés cuál elegir?{" "}
                    <button className="text-primary hover:underline font-medium" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                        Hablemos y te recomendamos el que mejor se adapta.
                    </button>
                </motion.p>
            </div>
        </section>
    );
}
