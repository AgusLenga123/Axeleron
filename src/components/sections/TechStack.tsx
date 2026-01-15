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
];

export function TechStack() {
    return (
        <section className="py-20 bg-background border-y border-border/50 relative overflow-hidden">
            {/* Scrolling Background specific for stack if needed, or just clean */}
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-10 text-muted-foreground uppercase tracking-widest text-sm">
                    Impulsado por Tecnología de Punta
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 transition-colors backdrop-blur-sm cursor-default"
                        >
                            <div className={`w-3 h-3 rounded-full ${tech.color} shadow-[0_0_10px_currentColor]`} />
                            <span className="font-semibold text-sm">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
