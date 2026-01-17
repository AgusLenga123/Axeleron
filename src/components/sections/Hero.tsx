"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
            </div>

            <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground backdrop-blur-sm mx-auto lg:mx-0">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Disponible para nuevos proyectos
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight leading-tight">
                        Transformamos ideas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Soluciones Digitales</span> de Alto Impacto
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Ayudamos a empresas y negocios a escalar con desarrollo web, automatizaciones, software e inteligencia artificial. Tu socio tecnológico estratégico.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                        <Button
                            size="lg"
                            variant="premium"
                            className="group"
                            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contactanos HOY 🚀
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-11"
                            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Ver nuestros servicios
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-2 text-sm text-muted-foreground justify-center lg:justify-start">
                        <p>Más de <span className="text-foreground font-semibold">50+ empresas</span> confían en nosotros.</p>
                    </div>
                </motion.div>

                {/* Visual Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Abstract Layout Mockup */}
                    <div className="relative w-full aspect-square max-w-lg mx-auto bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-2xl border border-white/5 p-6 backdrop-blur-sm group">

                        {/* Floating Card: Engagement */}
                        <motion.div
                            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute top-0 -left-12 bg-black/80 p-4 rounded-xl border border-white/10 w-48 shadow-2xl z-30"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <span className="text-purple-400 text-xs">❤</span>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Engagement</div>
                                    <div className="text-sm font-bold text-white">+84%</div>
                                </div>
                            </div>
                            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-purple-500 h-full w-[84%]" />
                            </div>
                        </motion.div>

                        {/* Floating Card: Active Automations */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                            className="absolute top-10 -right-8 bg-black/80 p-5 rounded-xl border border-white/10 w-48 shadow-2xl z-20"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-primary" />
                                </div>
                                <div className="space-y-0.5">
                                    <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Automatizaciones</div>
                                    <div className="text-sm font-extrabold text-white">Activas: +7</div>
                                </div>
                            </div>
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ width: ["0%", "70%"] }}
                                    transition={{ duration: 1, delay: 1.5 }}
                                    className="bg-primary h-full"
                                />
                            </div>
                        </motion.div>

                        {/* Floating Card: Leads */}
                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, 2, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-32 -right-16 bg-background/90 p-4 rounded-xl border border-white/10 w-40 shadow-2xl z-30"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-xs font-bold">Nuevos Leads</span>
                            </div>
                            <div className="text-2xl font-bold font-heading">248</div>
                            <div className="text-xs text-green-500 flex items-center gap-1">
                                ▲ 12% vs mes anterior
                            </div>
                        </motion.div>

                        {/* Floating Card: Revenue (Existing) */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-10 -left-6 bg-background/90 p-4 rounded-xl border border-white/10 w-56 shadow-2xl z-30"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 font-bold">
                                    $
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">Crecimiento</div>
                                    <div className="text-xs text-green-400">+124.5%</div>
                                </div>
                            </div>
                            <div className="h-24 w-full bg-gray-900/50 rounded-lg flex items-end gap-1 p-2">
                                <div className="w-full bg-primary/40 h-[40%] rounded-sm" />
                                <div className="w-full bg-primary/60 h-[70%] rounded-sm" />
                                <div className="w-full bg-primary/80 h-[50%] rounded-sm" />
                                <div className="w-full bg-primary h-[85%] rounded-sm" />
                            </div>
                        </motion.div>

                        {/* Central Abstract UI */}
                        <div className="w-full h-full bg-black/40 rounded-xl border border-white/5 p-4 relative overflow-hidden">
                            <div className="w-full h-8 bg-white/5 rounded-lg mb-4 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                                <div className="w-3 h-3 rounded-full bg-green-400/50" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-32 bg-white/5 rounded-lg border border-white/5" />
                                <div className="h-32 bg-white/5 rounded-lg border border-white/5" />
                                <div className="col-span-2 h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-white/5" />
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl -z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
