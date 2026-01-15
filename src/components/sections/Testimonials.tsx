"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Martín Rodriguez",
        role: "CEO, Logística Global",
        text: "Simplificaron procesos que nos tomaban días en minutos. La automatización que implementaron cambió nuestro negocio por completo."
    },
    {
        name: "Sofía Martínez",
        role: "Marketing Manager, E-Shop Ar",
        text: "Nuestra conversión aumentó un 40% después del rediseño. Entendieron perfectamente la estética que buscábamos."
    },
    {
        name: "Lucas Viale",
        role: "Founder, StartupTech",
        text: "El equipo es súper profesional. No solo entregaron a tiempo, sino que propusieron mejoras que no habíamos considerado."
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-secondary/10 overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-center">
                    Lo que dicen nuestros clientes 💼
                </h2>
            </div>

            <div className="relative flex w-full">
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                <motion.div
                    className="flex gap-8 flex-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    style={{ width: "max-content" }}
                >
                    {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="bg-background border border-border p-8 rounded-2xl relative w-[350px] flex-shrink-0"
                        >
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <Star key={star} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic mb-6">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center font-bold text-white">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-sm">{t.name}</div>
                                    <div className="text-xs text-muted-foreground">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
