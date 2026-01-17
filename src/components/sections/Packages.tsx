"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, MessageSquare, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CountdownTimer } from "./CountdownTimer";

const packages = [
    {
        title: "Landing + Chatbot",
        description: "La combinación perfecta para captar leads y atenderlos automáticamente 24/7.",
        originalPrice: "550",
        price: "350",
        features: [
            "Landing Page de alto impacto",
            "Chatbot IA para WhatsApp/Web",
            "Diseño Mobile First",
            "Integración con CRM",
            "Soporte por 30 días"
        ],
        icon: MessageSquare,
        gradient: "from-blue-600/20 to-cyan-600/20",
        borderGradient: "hover:border-blue-500/50",
        tag: "Popular",
        details: {
            longDescription: "Nuestro paquete estrella para conversión. Creamos una Landing Page diseñada para vender, integrada con un Chatbot de Inteligencia Artificial que califica a tus leads y responde preguntas frecuentes al instante.",
            benefits: ["Aumento de conversión inmediato", "Atención al cliente 24/7", "Ahorro en tiempo de respuesta", "Base de datos automatizada"],
            included: ["Diseño UX/UI", "Copywriting estratégico", "Setup de Chatbot (OpenAI/Botmaker)", "Hosting por 1 año", "Certificado SSL"]
        }
    },
    {
        title: "Landing + SEO",
        description: "No solo una web bonita, sino una que aparece en los primeros resultados de búsqueda.",
        originalPrice: "500",
        price: "300",
        features: [
            "Landing Page optimizada",
            "Auditoría SEO técnica",
            "Keyword Research",
            "Optimización de velocidad",
            "Google Search Console"
        ],
        icon: Search,
        gradient: "from-purple-600/20 to-pink-600/20",
        borderGradient: "hover:border-purple-500/50",
        tag: "Recomendado",
        details: {
            longDescription: "Ideal para marcas que buscan visibilidad a largo plazo sin depender exclusivamente de pauta publicitaria. Diseñamos tu web bajo los estándares más exigentes de Google.",
            benefits: ["Posicionamiento orgánico", "Autoridad de marca", "Tráfico de alta calidad", "Velocidad de carga superior"],
            included: ["Optimización On-Page", "Estrategia de palabras clave", "Configuración de Analytics", "Sitemap & Indexación", "SEO Técnico"]
        }
    },
    {
        title: "Chatbot + Automatización",
        description: "Escala tu operatividad delegando tareas repetitivas a la inteligencia artificial.",
        originalPrice: "500",
        price: "400",
        features: [
            "Chatbot IA Omnicanal",
            "Automatización de flujo n8n",
            "Conexión con 3+ apps",
            "Reportes automáticos",
            "Entrenamiento de IA"
        ],
        icon: Zap,
        gradient: "from-amber-600/20 to-orange-600/20",
        borderGradient: "hover:border-amber-500/50",
        tag: "Premium",
        details: {
            longDescription: "Llevá tu productividad al siguiente nivel. Automatizamos tus procesos internos (ventas, soporte, administración) conectando tus apps favoritas con agentes de IA.",
            benefits: ["Eliminación de errores humanos", "Escalabilidad operativa", "Reducción de costos", "Información en tiempo real"],
            included: ["Diseño de flujos en n8n/Zapier", "Entrenamiento de base de conocimientos", "Integración con CRM (Hubspot/Notion)", "Alertas personalizadas", "Dashboard de control"]
        }
    }
];

export function Packages() {
    const [selectedPackage, setSelectedPackage] = useState<(typeof packages)[0] | null>(null);

    return (
        <section id="planes" className="py-16 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading mb-6"
                    >
                        Paquetes <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Estratégicos</span> 🚀
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Elegí el pack que mejor se adapte a la etapa actual de tu negocio y empezá a escalar hoy mismo.
                    </motion.p>
                    <CountdownTimer />
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedPackage(pkg)}
                            className={cn(
                                "group relative flex flex-col p-8 rounded-3xl border border-border bg-secondary/20 backdrop-blur-sm transition-all duration-500 min-h-[500px] cursor-pointer",
                                pkg.borderGradient
                            )}
                        >
                            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl", pkg.gradient)} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={cn("p-3 rounded-2xl bg-gradient-to-br", pkg.gradient)}>
                                        <pkg.icon className="w-6 h-6 text-foreground" />
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                        {pkg.tag}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 font-heading">{pkg.title}</h3>
                                <p className="text-muted-foreground text-sm mb-8 line-clamp-2">
                                    {pkg.description}
                                </p>

                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold font-heading">${pkg.price}</span>
                                        <span className="text-muted-foreground text-lg line-through opacity-50">${pkg.originalPrice}</span>
                                        <span className="text-sm font-medium text-muted-foreground ml-auto">/pago único</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {packages[index].features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <div className="p-1 rounded-full bg-green-500/10 text-green-500">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className="w-full h-12 rounded-xl font-bold transition-all bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-pink-500/80 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white shadow-lg border-0"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.dispatchEvent(new CustomEvent('selectService', { detail: `Pack: ${pkg.title}` }));
                                        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Elegir Pack
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedPackage && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPackage(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-3xl bg-secondary border border-border rounded-3xl p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                        >
                            <div className={cn("absolute top-0 right-0 w-80 h-80 bg-gradient-to-br opacity-20 blur-[100px] -z-10", selectedPackage.gradient)} />

                            <button
                                onClick={() => setSelectedPackage(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                                <div className={cn("inline-flex p-5 rounded-2xl bg-gradient-to-br", selectedPackage.gradient)}>
                                    <selectedPackage.icon className="w-10 h-10 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-3xl font-bold font-heading">{selectedPackage.title}</h3>
                                        <span className="px-2 py-0.5 rounded-md bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">{selectedPackage.tag}</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-primary">${selectedPackage.price}</span>
                                        <span className="text-muted-foreground line-through text-sm opacity-50">${selectedPackage.originalPrice}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">Descripción</h4>
                                        <p className="text-foreground/80 leading-relaxed italic border-l-2 border-primary/30 pl-4">
                                            "{selectedPackage.details.longDescription}"
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">Principales Beneficios</h4>
                                        <ul className="space-y-2">
                                            {selectedPackage.details.benefits.map((benefit) => (
                                                <li key={benefit} className="flex items-center gap-2 text-sm text-foreground/80">
                                                    <Zap className="w-4 h-4 text-amber-500" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-background/40 rounded-2xl p-6 border border-white/5 h-full">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">¿Qué incluye este pack?</h4>
                                    <ul className="space-y-3">
                                        {selectedPackage.details.included.map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                <div className="p-1 rounded-full bg-green-500/20 text-green-500 mt-0.5">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                                <p className="text-xs text-muted-foreground text-center md:text-left max-w-sm">
                                    Al elegir este pack, un especialista coordinará una llamada para iniciar el proceso de onboarding y relevamiento de datos.
                                </p>
                                <Button
                                    size="lg"
                                    className="w-full md:w-auto px-10 h-14 rounded-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl hover:scale-105 transition-transform"
                                    onClick={() => {
                                        setSelectedPackage(null);
                                        window.dispatchEvent(new CustomEvent('selectService', { detail: `Pack: ${selectedPackage.title}` }));
                                        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Elegir este Pack
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />
        </section>
    );
}
