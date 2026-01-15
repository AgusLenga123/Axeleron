"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-white/10 shadow-2xl p-8 flex items-end justify-center">
                        {/* Abstract Grid content */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:32px_32px]"></div>

                        {/* Bar Chart Mockup */}
                        <div className="relative z-10 w-full max-w-sm flex items-end justify-between gap-4 h-48">
                            {[40, 65, 45, 80, 55, 90, 100].map((height, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${height}%` }}
                                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                    className="w-full bg-white/90 rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.3)] relative group"
                                >
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        {height}%
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="absolute top-6 left-8 z-10">
                            <h3 className="text-2xl font-bold text-white">Crecimiento Sostenido</h3>
                            <p className="text-white/60 text-sm">Escalabilidad garantizada</p>
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
