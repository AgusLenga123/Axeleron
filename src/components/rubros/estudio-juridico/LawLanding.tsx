"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Car, Check, FileSignature, Gavel, HeartHandshake, Phone, Scale, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoToast, scrollInDemo, useDemoToast } from "../DemoToast";

/* Landing de ejemplo para un estudio jurídico ficticio ("Ferrari & Asoc."). Usa container queries (@3xl:). */

const areas = [
    {
        id: "laboral",
        icon: Briefcase,
        name: "Laboral",
        title: "Despidos y reclamos laborales",
        text: "Despido sin causa, trabajo no registrado, diferencias salariales y accidentes de trabajo. Analizamos tu caso y te decimos qué te corresponde.",
        points: ["Indemnización por despido", "Trabajo en negro", "ART y accidentes laborales"],
    },
    {
        id: "accidentes",
        icon: Car,
        name: "Accidentes",
        title: "Accidentes de tránsito",
        text: "Reclamamos a la aseguradora por daños materiales, lesiones e incapacidad. Vos te recuperás, nosotros nos ocupamos del reclamo.",
        points: ["Daños al vehículo", "Lesiones e incapacidad", "Reclamo a aseguradoras"],
    },
    {
        id: "familia",
        icon: HeartHandshake,
        name: "Familia",
        title: "Divorcios, alimentos y régimen de comunicación",
        text: "Acompañamos procesos delicados con cuidado y firmeza, buscando acuerdos cuando es posible y litigando cuando hace falta.",
        points: ["Divorcio de común acuerdo", "Cuota alimentaria", "Régimen de comunicación"],
    },
    {
        id: "sucesiones",
        icon: FileSignature,
        name: "Sucesiones",
        title: "Sucesiones y herencias",
        text: "Iniciamos y llevamos adelante la sucesión de punta a punta, con plazos y costos claros desde el primer día.",
        points: ["Sucesión ab intestato", "Testamentos", "Declaratoria de herederos"],
    },
];

export function LawLanding() {
    const [area, setArea] = useState(areas[0].id);
    const [formArea, setFormArea] = useState("Laboral");
    const [name, setName] = useState("");
    const toast = useDemoToast();
    const a = areas.find((x) => x.id === area)!;

    return (
        <div className="@container relative bg-[#0d1b2a] font-sans text-[#e9e4d8]">
            <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[#c8a96a]/20 bg-[#0d1b2a]/90 px-5 py-3 backdrop-blur @3xl:px-12">
                <span className="font-serif text-lg">
                    Ferrari <span className="text-[#c8a96a]">&amp;</span> Asoc.
                </span>
                <nav className="hidden gap-7 text-[13px] text-[#e9e4d8]/60 @3xl:flex">
                    <span>Áreas</span>
                    <span>El estudio</span>
                    <span>Casos</span>
                </nav>
                <button
                    onClick={(e) => scrollInDemo(e.currentTarget, "consulta")}
                    className="border border-[#c8a96a] px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#c8a96a]"
                >
                    Consulta gratis
                </button>
            </header>

            <DemoToast message={toast.message} className="bg-[#c8a96a] text-[#0d1b2a]" />

            {/* Hero */}
            <section className="relative overflow-clip px-5 pb-14 pt-12 @3xl:px-12 @3xl:pb-20 @3xl:pt-20">
                <Scale className="pointer-events-none absolute -right-10 top-6 h-72 w-72 text-[#c8a96a]/[0.06]" />
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#c8a96a]">Abogados en CABA y GBA · Desde 1994</p>
                <h1 className="mt-4 max-w-2xl font-serif text-[44px] leading-[1.02] @3xl:text-[70px]">
                    Defendemos lo que <span className="italic text-[#c8a96a]">te corresponde.</span>
                </h1>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#e9e4d8]/70">
                    Laboral, accidentes, familia y sucesiones. Primera consulta sin cargo y, en reclamos laborales y accidentes, solo cobramos si ganás.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                    <button
                        onClick={(e) => scrollInDemo(e.currentTarget, "consulta")}
                        className="bg-[#c8a96a] px-6 py-3.5 text-[12px] font-semibold uppercase tracking-wider text-[#0d1b2a]"
                    >
                        Quiero mi consulta gratuita
                    </button>
                    <span className="flex items-center gap-1.5 text-[13px] text-[#e9e4d8]/60">
                        <Star className="h-4 w-4 fill-[#c8a96a] text-[#c8a96a]" /> 4.9 en Google · +1.500 casos
                    </span>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-3 border-t border-[#c8a96a]/20 pt-6">
                    {[
                        ["30 años", "de trayectoria"],
                        ["+1.500", "casos resueltos"],
                        ["24 hs", "para responderte"],
                    ].map(([v, k]) => (
                        <div key={k}>
                            <p className="font-serif text-[26px] text-[#c8a96a] @3xl:text-[34px]">{v}</p>
                            <p className="text-[11px] text-[#e9e4d8]/55 @3xl:text-[13px]">{k}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Áreas */}
            <section className="bg-[#f4f0e6] px-5 py-14 text-[#0d1b2a] @3xl:px-12">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a7b3f]">Áreas de práctica</p>
                <h2 className="mt-2 font-serif text-[32px] leading-tight @3xl:text-[44px]">¿En qué te podemos ayudar?</h2>
                <div className="mt-6 grid grid-cols-2 gap-2 @3xl:grid-cols-4">
                    {areas.map(({ id, icon: Icon, name: n }) => (
                        <button
                            key={id}
                            onClick={() => setArea(id)}
                            className={cn(
                                "flex items-center gap-2 border px-3 py-3 text-left text-[13px] font-medium transition-colors",
                                area === id ? "border-[#0d1b2a] bg-[#0d1b2a] text-[#f4f0e6]" : "border-[#0d1b2a]/15 hover:border-[#0d1b2a]/40"
                            )}
                        >
                            <Icon className="h-4 w-4 shrink-0" /> {n}
                        </button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={a.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="mt-5 grid gap-6 border border-[#0d1b2a]/10 bg-white p-6 @3xl:grid-cols-[1.4fr_1fr]"
                    >
                        <div>
                            <h3 className="font-serif text-[26px] leading-tight">{a.title}</h3>
                            <p className="mt-2 text-[14px] leading-relaxed text-[#0d1b2a]/70">{a.text}</p>
                        </div>
                        <ul className="space-y-2">
                            {a.points.map((p) => (
                                <li key={p} className="flex items-center gap-2 text-[14px]">
                                    <Check className="h-4 w-4 text-[#9a7b3f]" /> {p}
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={(e) => {
                                        setFormArea(a.name);
                                        scrollInDemo(e.currentTarget, "consulta");
                                    }}
                                    className="mt-2 text-[13px] font-semibold text-[#9a7b3f] underline underline-offset-4"
                                >
                                    Consultar por {a.name.toLowerCase()} →
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* Cómo trabajamos */}
            <section className="px-5 py-14 @3xl:px-12">
                <h2 className="font-serif text-[32px] leading-tight @3xl:text-[44px]">Cómo trabajamos</h2>
                <div className="mt-6 grid gap-4 @3xl:grid-cols-3">
                    {[
                        { icon: Phone, t: "1. Consulta sin cargo", d: "Nos contás qué pasó. En 24 hs te decimos si tenés un caso y cuáles son tus opciones." },
                        { icon: FileSignature, t: "2. Estrategia clara", d: "Te explicamos los pasos, los plazos y los costos por escrito. Sin letra chica." },
                        { icon: Gavel, t: "3. Te representamos", d: "Llevamos el caso de punta a punta y te mantenemos al tanto de cada novedad." },
                    ].map(({ icon: Icon, t, d }) => (
                        <div key={t} className="border border-[#c8a96a]/20 p-5">
                            <Icon className="h-5 w-5 text-[#c8a96a]" />
                            <h3 className="mt-3 font-serif text-xl">{t}</h3>
                            <p className="mt-1.5 text-[14px] leading-relaxed text-[#e9e4d8]/65">{d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonios */}
            <section className="px-5 pb-14 @3xl:px-12">
                <div className="grid gap-4 @3xl:grid-cols-2">
                    {[
                        { t: "Me despidieron después de 12 años. Me explicaron todo con paciencia y cobré la indemnización completa.", n: "Roberto S. · Laboral" },
                        { t: "Después del choque no sabía por dónde empezar. Se ocuparon de todo con la aseguradora.", n: "Mariana P. · Accidentes" },
                    ].map((r) => (
                        <figure key={r.n} className="border-l-2 border-[#c8a96a] bg-white/[0.03] p-5">
                            <blockquote className="font-serif text-[18px] italic leading-relaxed">“{r.t}”</blockquote>
                            <figcaption className="mt-3 text-[12px] uppercase tracking-wider text-[#e9e4d8]/50">{r.n}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            {/* Consulta */}
            <section data-demo-section="consulta" className="bg-[#c8a96a] px-5 py-14 text-[#0d1b2a] @3xl:px-12">
                <div className="grid gap-8 @3xl:grid-cols-2 @3xl:items-center">
                    <div>
                        <h2 className="font-serif text-[34px] leading-[1.05] @3xl:text-[46px]">Contanos tu caso. La primera consulta es gratis.</h2>
                        <p className="mt-3 text-[14px] text-[#0d1b2a]/75">Respuesta en menos de 24 horas hábiles. Todo lo que nos cuentes es confidencial.</p>
                    </div>
                    <div className="bg-[#0d1b2a] p-5 text-[#e9e4d8]">
                        <label className="block text-[11px] uppercase tracking-wider text-[#e9e4d8]/50">Tu nombre</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nombre y apellido"
                            className="mt-1 w-full border border-[#e9e4d8]/20 bg-transparent px-3 py-2.5 text-[14px] placeholder:text-[#e9e4d8]/30 focus:border-[#c8a96a] focus:outline-none"
                        />
                        <label className="mt-4 block text-[11px] uppercase tracking-wider text-[#e9e4d8]/50">Tema</label>
                        <div className="mt-1 grid grid-cols-2 gap-1.5">
                            {areas.map((x) => (
                                <button
                                    key={x.id}
                                    onClick={() => setFormArea(x.name)}
                                    className={cn(
                                        "border px-3 py-2 text-[12px]",
                                        formArea === x.name ? "border-[#c8a96a] bg-[#c8a96a] text-[#0d1b2a]" : "border-[#e9e4d8]/20"
                                    )}
                                >
                                    {x.name}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => toast.show(`Consulta recibida${name ? `, ${name.split(" ")[0]}` : ""}: ${formArea}. Un abogado te contacta en menos de 24 hs.`)}
                            className="mt-5 w-full bg-[#c8a96a] py-3 text-[12px] font-semibold uppercase tracking-wider text-[#0d1b2a]"
                        >
                            Enviar consulta
                        </button>
                    </div>
                </div>
            </section>

            <footer className="px-5 py-6 text-center text-[11px] text-[#e9e4d8]/40">Ferrari &amp; Asoc. · Abogados · Buenos Aires</footer>
        </div>
    );
}
