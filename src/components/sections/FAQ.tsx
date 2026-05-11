"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

const faqs = [
    { q: "¿En 7 días realmente queda lista?", a: "Sí. El plazo de 7 días hábiles cuenta desde que recibimos la información de tu negocio y aprobamos el brief. Trabajamos con un proceso probado que nos permite ser rápidos sin sacrificar calidad. El único factor que puede retrasar la entrega es la falta de información de tu parte." },
    { q: "¿Necesito tener hosting o dominio propio?", a: "No es obligatorio al inicio. Podemos publicar tu landing en un subdominio nuestro para que la revises. Si ya tenés dominio propio, lo usamos. Si no tenés, te orientamos sobre cómo comprarlo (es muy simple y cuesta menos de USD 15/año)." },
    { q: "¿Qué información necesitan de mi parte?", a: "Solo necesitamos que nos cuentes sobre tu negocio en una llamada de 45 minutos. Si tenés logo y colores de marca, perfecto. Si no tenés nada, trabajamos igualmente. El copy (texto) lo escribimos nosotros si elegís el plan Pro o Business." },
    { q: "¿Puedo pedir cambios después de la entrega?", a: "Cada plan incluye rondas de revisión (1, 2 o 3 según el plan). Dentro de esas revisiones, podés pedir cambios de texto, colores, estructura y cualquier ajuste razonable. Los cambios fuera del alcance acordado se cotizan por separado." },
    { q: "¿La landing queda optimizada para aparecer en Google?", a: "Todas nuestras landings tienen SEO técnico básico incluido (meta tags, velocidad, mobile). El plan Pro y Business incluyen optimización de palabras clave. Eso no garantiza aparecer en el top 1 de Google de inmediato, pero sí que tu web está correctamente indexada." },
    { q: "¿Puedo conectar la landing con mis redes sociales o sistema de mailing?", a: "Sí. Integramos la landing con WhatsApp, email, formularios, y herramientas como Mailchimp o ActiveCampaign según el plan. Los píxeles de Meta y Google Ads también se incluyen en Pro y Business." },
];

export function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-background relative overflow-hidden">
            <GridBackground opacity={0.03} size={60} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Preguntas frecuentes</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Todo lo que querés{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">saber</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg">Si tu pregunta no está acá, escribinos y te respondemos.</motion.p>
                </div>
                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-2xl border border-border/40 bg-secondary/10 backdrop-blur-sm overflow-hidden">
                            <button id={`faq-${index}`} className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/20 transition-colors" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}>
                                <span className="font-semibold text-base pr-4">{faq.q}</span>
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                    {open === index ? <Minus className="w-3 h-3 text-primary" /> : <Plus className="w-3 h-3 text-primary" />}
                                </span>
                            </button>
                            <AnimatePresence initial={false}>
                                {open === index && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }}>
                                        <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border/20 pt-4">{faq.a}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
