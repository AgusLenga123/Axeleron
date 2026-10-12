"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading, Serif } from "./ui";

const faqs = [
    {
        q: `¿Cómo puede costar solo USD ${site.price}?`,
        a: "Porque hacemos una sola cosa y la hacemos muy bien: landing pages. Tenemos un proceso probado, componentes propios y cero reuniones innecesarias. Eso nos permite cobrar menos sin bajar la calidad.",
    },
    {
        q: `¿En ${site.deliveryDays} días realmente queda lista?`,
        a: `Sí. Los ${site.deliveryDays} días hábiles corren desde la llamada inicial. Lo único que puede demorar la entrega es que tardes en mandarnos información o en aprobar el diseño.`,
    },
    {
        q: "¿Tengo que escribir los textos o tener algo preparado?",
        a: "No. El copy lo escribimos nosotros en base a la llamada. Si tenés logo, fotos o colores de marca los usamos; si no, trabajamos igual.",
    },
    {
        q: "¿Necesito dominio y hosting?",
        a: "El hosting lo resolvemos nosotros. El dominio (tunegocio.com) lo comprás a tu nombre, cuesta menos de USD 15 al año y te guiamos paso a paso. Si ya tenés uno, lo usamos.",
    },
    {
        q: "¿Puedo pedir cambios?",
        a: `Sí, tenés ${site.revisions} rondas de revisiones incluidas para ajustar textos, colores, imágenes o estructura. Cambios fuera de ese alcance se cotizan aparte.`,
    },
    {
        q: "¿Cómo es el pago?",
        a: "Es un pago único, sin mensualidades. Te pasamos los medios de pago en la llamada. Y si el diseño inicial no te convence, te devolvemos el dinero.",
    },
];

export function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="faq" className="relative scroll-mt-24 py-20 md:py-28">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="Preguntas frecuentes"
                    title={
                        <>
                            Lo que todos <Serif className="text-brand">nos preguntan.</Serif>
                        </>
                    }
                />

                <div className="mx-auto mt-14 max-w-3xl divide-y divide-white/[0.06] border-y border-white/[0.06]">
                    {faqs.map((faq, i) => (
                        <Reveal key={faq.q} delay={i * 0.04}>
                            <button
                                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                                onClick={() => setOpen(open === i ? null : i)}
                                aria-expanded={open === i}
                            >
                                <span className="text-lg font-medium tracking-tight">{faq.q}</span>
                                <span
                                    className={cn(
                                        "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 transition-all duration-300",
                                        open === i && "rotate-45 border-cyan/40 bg-cyan/10 text-cyan"
                                    )}
                                >
                                    <Plus className="h-4 w-4" />
                                </span>
                            </button>
                            <AnimatePresence initial={false}>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-muted-foreground">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
