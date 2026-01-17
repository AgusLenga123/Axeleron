"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Smartphone, Zap, MessageSquare, Search, Palette, X, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Desarrollo Landing Pages",
        description: "Diseñamos páginas de alto impacto visual optimizadas para conversión. Rapidez, estética y resultados en menos de 1 semana.",
        startingPrice: "199",
        badges: ["Conversión", "Ventas", "Rapidez"],
        icon: Code,
        gradient: "from-blue-500/20 to-cyan-500/20",
        textGradient: "text-blue-500",
        details: {
            longDescription: "Creamos Landing Pages orientadas 100% a la venta, engagement y captación de leads. Utilizamos estructuras persuasivas, copywriting estratégico y diseño Web & Mobile para garantizar que cada visitante tenga la mejor experiencia posible.",
            features: ["Diseño UX/UI Premium", "Redacción Persuasiva (Copywriting)", "Integración con Email Marketing", "Tests A/B", "Velocidad de Carga Ultra Rápida"],
            tools: ["Next.js", "Tailwind", "Framer Motion"]
        }
    },
    {
        title: "Aplicaciones Fullstack",
        description: "Sistemas Web & Mobile robustos y escalables a medida (SaaS, Dashboards, CRMs, etc...) desarrollados con tecnologías modernas.",
        startingPrice: "899",
        badges: ["Escalabilidad", "Seguridad", "SaaS"],
        icon: Smartphone,
        gradient: "from-purple-500/20 to-pink-500/20",
        textGradient: "text-purple-500",
        details: {
            longDescription: "Desarrollamos aplicaciones Web & Mobile complejas a medida. Desde paneles de administración internos hasta plataformas SaaS completas para comercializar tu producto digital.",
            features: ["Arquitectura Escalable", "Base de Datos Segura", "APIs REST / GraphQL", "Autenticación de Usuarios", "Dashboard de Métricas"],
            tools: ["React", "Node.js", "PostgreSQL", "Supabase"],
            toolImages: { "React": "/assets/icons/Reacticon.png", "Node.js": "/assets/icons/nodejslogo.png" }
        }
    },
    {
        title: "Automatización & Agentes IA",
        description: "No pierdas mas tiempo con tareas manSimplificamos tu operativa de negocio con flujos de trabajo inteligentes que funcionan 24/7 sin intervención humana.",
        startingPrice: "349",
        badges: ["Eficiencia AI", "Ahorro", "Workflow"],
        icon: Zap,
        gradient: "from-amber-500/20 to-orange-500/20",
        textGradient: "text-amber-500",
        details: {
            longDescription: "Implementamos agentes de Inteligencia Artificial que ejecutan tareas repetitivas por vos. Facturación automática, clasificación de emails, actualización de CRMs y mucho más.",
            features: ["Conexión entre Apps (Zapier/n8n)", "Procesamiento de Documentos con IA", "Agentes Autónomos", "Reportes Automáticos", "Reducción de Costos Operativos"],
            tools: ["n8n", "OpenAI", "Python", "Zapier"],
            toolImages: { "n8n": "/assets/icons/n8n-color.png" } // Mapping known images
        }
    },
    {
        title: "Chatbots 24/7",
        description: "Crea tus propios chatbots de IA para WhatsApp, Instagram y Telegram que atienden clientes, resuelven dudas, agendan turnos y cierran ventas las 24 horas del día, los 7 días de la semana.",
        startingPrice: "249",
        badges: ["Soporte 24/7", "WhatsApp", "Leads"],
        icon: MessageSquare,
        gradient: "from-green-500/20 to-emerald-500/20",
        textGradient: "text-green-500",
        details: {
            longDescription: "No pierdas más clientes por no responder a tiempo. Nuestros chatbots entrenados entienden el lenguaje natural, responden dudas frecuentes y guían al usuario hasta la compra.",
            features: ["Atención Omnicanal", "Entrenamiento con Datos de tu Empresa", "Derivación a Humanos", "Agendamiento de Citas", "Calificación de Leads"],
            tools: ["Botmaker", "WhatsApp Cloud API", "ChatGPT", "Instagram", "WhatsApp"],
            toolImages: {
                "Botmaker": "/assets/icons/Botmakericon.jpg",
                "Instagram": "/assets/icons/Instagram_icon.png",
                "WhatsApp": "/assets/icons/WhatsApp_icon.png"
            }
        }
    },
    {
        title: "Optimización SEO",
        description: "¿Cansado de no tener visibilidad en Google? Posicionamos tu marca en los primeros lugares del navegador para atraer tráfico orgánico de calidad constante.",
        startingPrice: "149",
        badges: ["Visibilidad", "Ranking", "Google"],
        icon: Search,
        gradient: "from-indigo-500/20 to-violet-500/20",
        textGradient: "text-indigo-500",
        details: {
            longDescription: "Una web invisible no vende. Optimizamos la estructura técnica, el contenido y la autoridad de tu sitio para que aparezca cuando tus clientes buscan tus servicios.",
            features: ["Auditoría Técnica", "Investigación de Palabras Clave", "Optimización On-Page", "Estrategia de Contenidos", "Link Building"],
            tools: ["Semrush", "Google Search Console", "Ahrefs"]
        }
    },
    {
        title: "Branding & Diseño",
        description: "¿Necesitas una identidad visual que se destaque? Construimos diseños de marca memorables que transmiten profesionalismo y conectan con tu audiencia.",
        startingPrice: "199",
        badges: ["Identidad", "Marca", "Estética"],
        icon: Palette,
        gradient: "from-rose-500/20 to-red-500/20",
        textGradient: "text-rose-500",
        details: {
            longDescription: "El diseño es el embajador silencioso de tu marca. Creamos logotipos, manuales de marca y sistemas visuales coherentes que te diferencian de la competencia.",
            features: ["Diseño de Logotipo", "Paleta de Colores y Tipografía", "Manual de Marca", "Diseño para Redes Sociales", "Papelería Institucional"],
            tools: ["Figma", "Illustrator", "Photoshop"]
        }
    },
];

export function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <section id="servicios" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading mb-6"
                    >
                        Soluciones que <span className="text-primary">Evolucionan</span> 🧠
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Tecnología, diseño y estrategia unificados para escalar tu negocio al siguiente nivel.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedService(service)}
                            className="group relative p-8 rounded-2xl border border-border bg-secondary/30 hover:bg-secondary/50 transition-all cursor-pointer hover:border-primary/30"
                        >
                            <div className={cn("inline-flex p-3 rounded-lg mb-4 bg-gradient-to-br transition-transform group-hover:scale-110", service.gradient)}>
                                <service.icon className={cn("w-8 h-8", service.textGradient)} />
                            </div>

                            <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-primary transition-colors flex items-center justify-between">
                                {service.title}
                                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                            </h3>

                            <p className="text-muted-foreground leading-relaxed mb-4">
                                {service.description}
                            </p>

                            <div className="mt-auto pt-4 border-t border-white/5 flex flex-col">
                                <div className="flex flex-wrap gap-x-4 gap-y-2">
                                    {service.badges.map((badge, i) => (
                                        <div key={badge} className="flex items-center gap-1.5">
                                            <div className={cn("w-1.5 h-1.5 rounded-full bg-primary", i === 0 && "animate-pulse")} />
                                            <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{badge}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 ease-in-out overflow-hidden">
                                    <div className="min-h-0">
                                        <Button
                                            size="default"
                                            variant="outline"
                                            className="w-full text-xs font-bold uppercase tracking-wider"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.dispatchEvent(new CustomEvent('selectService', { detail: service.title }));
                                                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                        >
                                            ¡Lo quiero!
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-secondary border border-border rounded-3xl p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                        >
                            {/* Decorative Gradient Blob */}
                            <div className={cn("absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-20 blur-[80px] -z-10", selectedService.gradient)} />

                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className={cn("inline-flex p-4 rounded-xl bg-gradient-to-br", selectedService.gradient)}>
                                    <selectedService.icon className={cn("w-8 h-8", selectedService.textGradient)} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-heading">{selectedService.title}</h3>
                                    <p className="text-primary font-medium">Servicio Premium</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {selectedService.details.longDescription}
                                </p>

                                <div className="bg-background/50 rounded-xl p-6 border border-white/5">
                                    <h4 className="font-bold mb-4 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-yellow-500" />
                                        Que incluye:
                                    </h4>
                                    <ul className="grid md:grid-cols-2 gap-3">
                                        {selectedService.details.features.map(feature => (
                                            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-white/5 gap-4">
                                    <div className="text-center sm:text-left">
                                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Presupuesto inicial</p>
                                        <p className="text-3xl font-bold text-primary">Desde ${selectedService.startingPrice}</p>
                                    </div>
                                    <Button
                                        onClick={() => {
                                            setSelectedService(null);
                                            // Dispatch custom event for contact form
                                            window.dispatchEvent(new CustomEvent('selectService', { detail: selectedService.title }));
                                            document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Consultar ahora
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
