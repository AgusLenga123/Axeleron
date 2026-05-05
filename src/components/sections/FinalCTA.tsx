"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Send } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

export function FinalCTA() {
    const [selectedPlan, setSelectedPlan] = useState("");

    useEffect(() => {
        const handler = (e: Event) => {
            const customEvent = e as CustomEvent;
            setSelectedPlan(customEvent.detail || "");
        };
        window.addEventListener('selectPlan', handler);
        return () => window.removeEventListener('selectPlan', handler);
    }, []);

    const whatsappMessage = encodeURIComponent(
        selectedPlan
            ? `Hola! Me interesa el plan ${selectedPlan} de Axeleron para crear mi landing page. ¿Podemos hablar?`
            : "Hola! Me interesa crear una landing page con Axeleron. ¿Podemos hablar?"
    );

    return (
        <section id="contacto" className="py-24 bg-secondary/10 relative overflow-hidden">
            <GridBackground opacity={0.025} size={60} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary font-semibold text-sm uppercase tracking-widest mb-6">
                        ¿Listo para arrancar?
                    </motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                        Tu landing puede estar{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500">online en 7 días</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg mb-12 leading-relaxed">
                        Cada día que pasa sin una landing optimizada es un día que perdés leads potenciales. La conversación inicial es gratis y sin compromiso.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Button id="final-cta-whatsapp" size="lg" className="group h-14 px-8 rounded-xl font-bold text-base bg-green-500 hover:bg-green-600 text-white shadow-2xl shadow-green-500/20 border-0" onClick={() => window.open(`https://wa.me/5491100000000?text=${whatsappMessage}`, '_blank')}>
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Escribinos por WhatsApp
                        </Button>
                        <Button id="final-cta-call" size="lg" variant="premium" className="group h-14 px-8 rounded-xl font-bold text-base shadow-2xl shadow-primary/20" onClick={() => window.open(`https://wa.me/5491100000000?text=${whatsappMessage}`, '_blank')}>
                            <Phone className="mr-2 h-5 w-5" />
                            Agendá una llamada
                        </Button>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        {[
                            { icon: Send, text: "Respuesta en menos de 24 hs" },
                            { icon: Phone, text: "Llamada sin compromiso" },
                            { icon: MessageCircle, text: "Atención personalizada" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
