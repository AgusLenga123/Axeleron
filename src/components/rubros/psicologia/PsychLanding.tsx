"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock, Laptop, Lock, MapPin, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoToast, scrollInDemo, useDemoToast } from "../DemoToast";

/* Landing de ejemplo para una psicóloga ficticia ("Lic. Clara Ibáñez"). Usa container queries (@3xl:). */

const symptoms = [
    "Me cuesta dormir o me despierto cansada/o",
    "Siento ansiedad o preocupación casi todo el día",
    "Estoy desbordada/o por el trabajo o la familia",
    "Me cuesta disfrutar de cosas que antes me gustaban",
    "Discuto seguido con mi pareja o mi entorno",
];

const days = [
    { d: "Lun", n: 15, slots: ["10:00", "17:00"] },
    { d: "Mar", n: 16, slots: ["09:00", "12:00", "18:00"] },
    { d: "Mié", n: 17, slots: ["16:00"] },
    { d: "Jue", n: 18, slots: ["10:00", "18:00", "19:00"] },
    { d: "Vie", n: 19, slots: ["11:00", "15:00"] },
];

const faqs = [
    { q: "¿Cuánto dura un tratamiento?", a: "Depende de cada persona. Muchos procesos muestran cambios concretos en 8 a 12 sesiones. Lo vamos evaluando juntos." },
    { q: "¿Atendés por obra social?", a: "Atiendo de forma particular y emito factura para que puedas pedir el reintegro a tu obra social o prepaga." },
    { q: "¿La terapia online funciona igual?", a: "Sí. La evidencia muestra resultados equivalentes a la presencial, y te ahorrás traslados." },
];

export function PsychLanding() {
    const [checked, setChecked] = useState<number[]>([]);
    const [day, setDay] = useState(3);
    const [slot, setSlot] = useState<string | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const toast = useDemoToast();

    const toggle = (i: number) => setChecked((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]));
    const book = () =>
        slot ? toast.show(`Turno solicitado: ${days[day].d} ${days[day].n} a las ${slot} hs. Te llega la confirmación por WhatsApp.`) : toast.show("Elegí un horario para solicitar tu turno.");

    return (
        <div className="@container relative bg-[#f4efe7] font-sans text-[#3d3a33]">
            <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[#3d3a33]/10 bg-[#f4efe7]/90 px-5 py-3 backdrop-blur @3xl:px-12">
                <span className="font-serif text-lg italic">Lic. Clara Ibáñez</span>
                <nav className="hidden gap-7 text-[13px] text-[#3d3a33]/65 @3xl:flex">
                    <span>Sobre mí</span>
                    <span>Cómo trabajo</span>
                    <span>Preguntas</span>
                </nav>
                <button onClick={(e) => scrollInDemo(e.currentTarget, "turnos")} className="rounded-full border border-[#3d3a33]/30 px-4 py-2 text-[12px]">
                    Pedir turno
                </button>
            </header>

            <DemoToast message={toast.message} className="bg-[#3d3a33] text-[#f4efe7]" />

            {/* Hero */}
            <section className="grid items-center gap-10 px-5 py-12 @3xl:grid-cols-[1.2fr_1fr] @3xl:px-12 @3xl:py-20">
                <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a6f4e]">Psicóloga · Terapia cognitivo-conductual</p>
                    <h1 className="mt-4 font-serif text-[46px] leading-[0.98] @3xl:text-[72px]">
                        Volvé a sentirte <span className="italic text-[#8a6f4e]">en calma.</span>
                    </h1>
                    <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#3d3a33]/70">
                        Acompaño a adultos con ansiedad, estrés y problemas de sueño. Sesiones online o presenciales en Palermo. La primera entrevista es sin cargo.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <button onClick={(e) => scrollInDemo(e.currentTarget, "turnos")} className="rounded-full bg-[#3d3a33] px-6 py-3 text-[13px] text-[#f4efe7]">
                            Reservar primera entrevista
                        </button>
                        <span className="flex items-center gap-1.5 px-2 text-[13px] text-[#3d3a33]/60">
                            <Lock className="h-3.5 w-3.5" /> 100% confidencial
                        </span>
                    </div>
                </div>
                <div className="relative mx-auto aspect-square w-full max-w-[320px]">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ede1cf,#b9a184)]" />
                    <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_40%_35%,#f7efe3,#cdb89a)] opacity-80" />
                    <div className="absolute -bottom-2 left-0 rounded-2xl bg-white px-4 py-3 text-[12px] shadow-lg">
                        <b className="block text-[18px]">12 años</b> de experiencia clínica
                    </div>
                </div>
            </section>

            {/* ¿Te pasa esto? */}
            <section className="bg-white px-5 py-14 @3xl:px-12">
                <h2 className="font-serif text-[32px] leading-tight @3xl:text-[44px]">¿Te pasa algo de esto?</h2>
                <p className="mt-2 text-[14px] text-[#3d3a33]/60">Marcá lo que sientas cercano.</p>
                <div className="mt-6 grid gap-2.5 @3xl:grid-cols-2">
                    {symptoms.map((s, i) => (
                        <button
                            key={s}
                            onClick={() => toggle(i)}
                            className={cn(
                                "flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-[14px] transition-colors",
                                checked.includes(i) ? "border-[#8a6f4e] bg-[#8a6f4e]/10" : "border-[#3d3a33]/10 hover:border-[#3d3a33]/25"
                            )}
                        >
                            <span
                                className={cn(
                                    "grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors",
                                    checked.includes(i) ? "border-[#8a6f4e] bg-[#8a6f4e] text-white" : "border-[#3d3a33]/30"
                                )}
                            >
                                {checked.includes(i) && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                            </span>
                            {s}
                        </button>
                    ))}
                </div>
                <AnimatePresence>
                    {checked.length >= 2 && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="mt-5 rounded-2xl bg-[#3d3a33] p-5 text-[#f4efe7] @3xl:flex @3xl:items-center @3xl:justify-between">
                                <p className="font-serif text-[22px] leading-snug">
                                    No tenés que atravesarlo sola/o. <span className="italic">Tiene tratamiento.</span>
                                </p>
                                <button
                                    onClick={(e) => scrollInDemo(e.currentTarget, "turnos")}
                                    className="mt-3 inline-block rounded-full bg-[#f4efe7] px-5 py-2.5 text-[13px] text-[#3d3a33] @3xl:mt-0"
                                >
                                    Hablemos
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Cómo trabajo */}
            <section className="px-5 py-14 @3xl:px-12">
                <h2 className="font-serif text-[32px] leading-tight @3xl:text-[44px]">Cómo trabajo</h2>
                <div className="mt-6 grid gap-4 @3xl:grid-cols-3">
                    {[
                        { icon: Laptop, t: "Online", d: "Por videollamada, desde donde estés. Mismo compromiso, sin traslados." },
                        { icon: MapPin, t: "Presencial", d: "Consultorio en Palermo, a dos cuadras del subte D." },
                        { icon: Clock, t: "Sesiones de 50 minutos", d: "Una vez por semana, con objetivos claros y herramientas para tu día a día." },
                    ].map(({ icon: Icon, t, d }) => (
                        <div key={t} className="rounded-2xl border border-[#3d3a33]/10 bg-white/60 p-5">
                            <Icon className="h-5 w-5 text-[#8a6f4e]" />
                            <h3 className="mt-3 font-serif text-xl">{t}</h3>
                            <p className="mt-1.5 text-[14px] leading-relaxed text-[#3d3a33]/65">{d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Turnos */}
            <section data-demo-section="turnos" className="px-5 pb-14 @3xl:px-12">
                <div className="rounded-3xl bg-white p-5 @3xl:p-8">
                    <h2 className="font-serif text-[30px] leading-tight @3xl:text-[40px]">Reservá tu primera entrevista</h2>
                    <p className="mt-1 text-[14px] text-[#3d3a33]/60">Sin cargo · 30 minutos · Online o presencial</p>
                    <div className="mt-6 grid grid-cols-5 gap-2">
                        {days.map((d, i) => (
                            <button
                                key={d.d}
                                onClick={() => {
                                    setDay(i);
                                    setSlot(null);
                                }}
                                className={cn(
                                    "rounded-xl border py-2.5 text-center transition-colors",
                                    day === i ? "border-[#3d3a33] bg-[#3d3a33] text-[#f4efe7]" : "border-[#3d3a33]/15 hover:border-[#3d3a33]/40"
                                )}
                            >
                                <span className="block text-[11px] opacity-70">{d.d}</span>
                                <span className="text-[18px] font-medium">{d.n}</span>
                            </button>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {days[day].slots.map((s) => (
                            <button
                                key={s}
                                onClick={() => setSlot(s)}
                                className={cn(
                                    "rounded-full border px-4 py-2 text-[13px] transition-colors",
                                    slot === s ? "border-[#8a6f4e] bg-[#8a6f4e] text-white" : "border-[#3d3a33]/15 hover:border-[#8a6f4e]"
                                )}
                            >
                                {s} hs
                            </button>
                        ))}
                    </div>
                    <button onClick={book} className="mt-6 w-full rounded-full bg-[#3d3a33] py-3.5 text-[14px] text-[#f4efe7] @3xl:w-auto @3xl:px-8">
                        Solicitar turno
                    </button>
                </div>
            </section>

            {/* Sobre mí */}
            <section className="grid gap-6 bg-[#e9dfd0] px-5 py-14 @3xl:grid-cols-[1fr_1.4fr] @3xl:px-12">
                <div className="aspect-[4/5] max-h-72 rounded-3xl bg-[linear-gradient(160deg,#cdb89a,#8a6f4e)] @3xl:max-h-none" />
                <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a6f4e]">Sobre mí</p>
                    <h2 className="mt-2 font-serif text-[30px] leading-tight @3xl:text-[40px]">Hola, soy Clara.</h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#3d3a33]/75">
                        Soy Licenciada en Psicología y me especializo en terapia cognitivo-conductual. Trabajo con un enfoque práctico: entender qué te pasa y
                        construir juntos herramientas concretas para sentirte mejor.
                    </p>
                    <ul className="mt-4 space-y-1.5 text-[14px]">
                        {["Lic. en Psicología · Matrícula nacional", "Posgrado en terapia cognitivo-conductual", "Atención a adultos y parejas"].map((x) => (
                            <li key={x} className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-[#8a6f4e]" /> {x}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Preguntas */}
            <section className="px-5 py-14 @3xl:px-12">
                <h2 className="font-serif text-[30px] leading-tight @3xl:text-[40px]">Preguntas frecuentes</h2>
                <div className="mt-5 divide-y divide-[#3d3a33]/10 border-y border-[#3d3a33]/10">
                    {faqs.map((f, i) => (
                        <div key={f.q}>
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between py-4 text-left text-[15px]">
                                {f.q}
                                <Plus className={cn("h-4 w-4 shrink-0 transition-transform", openFaq === i && "rotate-45")} />
                            </button>
                            {openFaq === i && <p className="pb-4 text-[14px] leading-relaxed text-[#3d3a33]/65">{f.a}</p>}
                        </div>
                    ))}
                </div>
            </section>

            <footer className="border-t border-[#3d3a33]/10 px-5 py-6 text-center text-[11px] text-[#3d3a33]/50">Lic. Clara Ibáñez · Psicóloga · Palermo, CABA</footer>
        </div>
    );
}
