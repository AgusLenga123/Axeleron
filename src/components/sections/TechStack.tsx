"use client";

import { motion } from "framer-motion";

const technologies = [
    { name: "Node.js", color: "bg-green-600" },
    { name: "React", color: "bg-blue-500" },
    { name: "Next.js", color: "bg-black border border-white/20" },
    { name: "n8n", color: "bg-red-500" },
    { name: "Botmaker", color: "bg-purple-600" },
    { name: "WhatsApp", color: "bg-green-500" },
    { name: "Instagram", color: "bg-pink-600" },
    { name: "Telegram", color: "bg-sky-500" },
    { name: "Google Suite", color: "bg-blue-600" },
    { name: "HTML", color: "bg-orange-600" },
    { name: "CSS", color: "bg-blue-400" },
    { name: "Python", color: "bg-yellow-500" },
    { name: "Canva", color: "bg-cyan-400" },
    { name: "Power BI", color: "bg-yellow-600" },
    { name: "Adobe", color: "bg-red-700" },
];

export function TechStack() {
    return (
        <section className="py-20 bg-background border-y border-border/50 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest">
                    Impulsados por Tecnología de Punta 🤖
                </h2>
            </div>

            <div className="relative flex w-full py-8">
                {/* Gradient Masks for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                <motion.div
                    className="flex gap-6 flex-nowrap"
                    animate={{ x: [-2000, 0] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 60, // Slower than testimonials
                            ease: "linear",
                        },
                    }}
                    style={{ width: "max-content" }}
                >
                    {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, i) => (
                        <motion.div
                            key={`${tech.name}-${i}`}
                            animate={{
                                y: [0, Math.sin(i) * 10, 0], // Floating bubble effect
                            }}
                            transition={{
                                y: {
                                    repeat: Infinity,
                                    duration: 3 + (i % 3),
                                    ease: "easeInOut",
                                }
                            }}
                            whileHover={{ scale: 1.1, zIndex: 20 }}
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 transition-colors backdrop-blur-sm cursor-default"
                        >
                            <div className={`w-3 h-3 rounded-full ${tech.color} shadow-[0_0_10px_currentColor]`} />
                            <span className="font-semibold text-sm whitespace-nowrap">{tech.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
