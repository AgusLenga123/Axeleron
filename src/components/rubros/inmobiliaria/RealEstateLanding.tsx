"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bath, BedDouble, Heart, Home, MapPin, Ruler, Search, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoToast, scrollInDemo, useDemoToast } from "../DemoToast";

/* Landing de ejemplo para una inmobiliaria ficticia ("NORTE Propiedades"). Usa container queries (@3xl:). */

type Op = "venta" | "alquiler";
type Kind = "todos" | "casa" | "depto";

const properties = [
    { id: 1, op: "venta", kind: "casa", title: "Casa con jardín y pileta", zone: "San Isidro", price: "USD 385.000", m2: 240, rooms: 4, baths: 3, tone: "from-[#9ec5e8] via-[#e9d5b5] to-[#7d8f6a]" },
    { id: 2, op: "venta", kind: "depto", title: "3 ambientes a estrenar", zone: "Vicente López", price: "USD 168.000", m2: 82, rooms: 2, baths: 2, tone: "from-[#d7dde5] via-[#b7c4d1] to-[#6d7f93]" },
    { id: 3, op: "venta", kind: "casa", title: "Casa en barrio cerrado", zone: "Nordelta", price: "USD 520.000", m2: 310, rooms: 5, baths: 4, tone: "from-[#c8e0d0] via-[#e8e2cf] to-[#5f7d64]" },
    { id: 4, op: "alquiler", kind: "depto", title: "2 ambientes luminoso", zone: "Olivos", price: "$ 650.000 /mes", m2: 54, rooms: 1, baths: 1, tone: "from-[#f2dfc9] via-[#e3c9a8] to-[#9a7b5c]" },
    { id: 5, op: "alquiler", kind: "casa", title: "Casa familiar con quincho", zone: "Martínez", price: "$ 1.400.000 /mes", m2: 180, rooms: 3, baths: 2, tone: "from-[#cfe3ef] via-[#e9e1d4] to-[#7f8f7a]" },
    { id: 6, op: "alquiler", kind: "depto", title: "Monoambiente amoblado", zone: "Florida", price: "$ 480.000 /mes", m2: 38, rooms: 1, baths: 1, tone: "from-[#e6e1f0] via-[#d3cbe3] to-[#7b7393]" },
] as const;

export function RealEstateLanding() {
    const [op, setOp] = useState<Op>("venta");
    const [kind, setKind] = useState<Kind>("todos");
    const [liked, setLiked] = useState<number[]>([]);
    const [zone, setZone] = useState("Zona Norte");
    const [rooms, setRooms] = useState(3);
    const toast = useDemoToast();

    const list = useMemo(() => properties.filter((p) => p.op === op && (kind === "todos" || p.kind === kind)), [op, kind]);

    return (
        <div className="@container relative bg-white font-sans text-[#111]">
            <header className="sticky top-0 z-20 flex items-center justify-between border-b border-black/10 bg-white/90 px-5 py-3 backdrop-blur @3xl:px-12">
                <span className="text-[15px] font-bold tracking-tight">
                    NORTE <span className="font-normal text-black/50">Propiedades</span>
                </span>
                <nav className="hidden gap-7 text-[13px] text-black/60 @3xl:flex">
                    <span>Comprar</span>
                    <span>Alquilar</span>
                    <span>Vender</span>
                    <span>Nosotros</span>
                </nav>
                <button onClick={(e) => scrollInDemo(e.currentTarget, "tasar")} className="rounded-md bg-[#111] px-3.5 py-2 text-[12px] font-medium text-white">
                    Tasar gratis
                </button>
            </header>

            <DemoToast message={toast.message} />

            {/* Hero + buscador */}
            <section className="px-5 pt-8 @3xl:px-12 @3xl:pt-12">
                <div className="relative overflow-hidden rounded-2xl">
                    <div className="h-[300px] bg-[linear-gradient(160deg,#9ec5e8,#e9d5b5_60%,#7d8f6a)] @3xl:h-[380px]" />
                    <div className="absolute bottom-0 left-[8%] h-36 w-56 bg-[#f7f4ee] [clip-path:polygon(0_35%,50%_0,100%_35%,100%_100%,0_100%)] @3xl:h-48 @3xl:w-80" />
                    <div className="absolute bottom-0 right-[10%] h-44 w-28 bg-[#e3ddd2] @3xl:h-56 @3xl:w-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                    <div className="absolute inset-x-5 bottom-6 text-white @3xl:inset-x-10 @3xl:bottom-10">
                        <h1 className="max-w-xl text-[34px] font-semibold leading-[1.02] tracking-tight @3xl:text-[56px]">Tu próximo hogar está en Zona Norte.</h1>
                        <p className="mt-2 text-[14px] text-white/85">Más de 300 propiedades verificadas. Te acompañamos de la visita a la escritura.</p>
                    </div>
                </div>

                <div className="relative z-10 mx-auto -mt-6 max-w-3xl rounded-2xl border border-black/10 bg-white p-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)]">
                    <div className="flex gap-1">
                        {(["venta", "alquiler"] as Op[]).map((o) => (
                            <button
                                key={o}
                                onClick={() => setOp(o)}
                                className={cn("rounded-lg px-4 py-2 text-[13px] font-medium capitalize transition-colors", op === o ? "bg-[#111] text-white" : "text-black/60 hover:bg-black/5")}
                            >
                                {o === "venta" ? "Comprar" : "Alquilar"}
                            </button>
                        ))}
                    </div>
                    <div className="mt-2 flex flex-col gap-2 @3xl:flex-row">
                        <div className="flex flex-1 items-center gap-2 rounded-lg border border-black/10 px-3 py-2.5 text-[13px] text-black/50">
                            <MapPin className="h-4 w-4" /> Zona Norte · GBA
                        </div>
                        <div className="flex gap-1 rounded-lg border border-black/10 p-1">
                            {(
                                [
                                    ["todos", "Todos"],
                                    ["casa", "Casas"],
                                    ["depto", "Deptos"],
                                ] as [Kind, string][]
                            ).map(([k, l]) => (
                                <button
                                    key={k}
                                    onClick={() => setKind(k)}
                                    className={cn("flex-1 rounded-md px-3 py-1.5 text-[12px] transition-colors", kind === k ? "bg-[#d9622b] text-white" : "text-black/60")}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={(e) => scrollInDemo(e.currentTarget, "listado")}
                            className="flex items-center justify-center gap-2 rounded-lg bg-[#d9622b] px-5 py-2.5 text-[13px] font-medium text-white"
                        >
                            <Search className="h-4 w-4" /> Buscar
                        </button>
                    </div>
                </div>
            </section>

            {/* Listado */}
            <section data-demo-section="listado" className="px-5 py-12 @3xl:px-12">
                <div className="flex items-end justify-between">
                    <h2 className="text-[26px] font-semibold tracking-tight @3xl:text-[34px]">{op === "venta" ? "Propiedades en venta" : "Propiedades en alquiler"}</h2>
                    <span className="text-[13px] text-black/50">
                        {list.length} {list.length === 1 ? "resultado" : "resultados"}
                    </span>
                </div>
                <motion.div layout className="mt-6 grid gap-4 @xl:grid-cols-2 @3xl:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {list.map((p) => (
                            <motion.article
                                layout
                                key={p.id}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden rounded-xl border border-black/10"
                            >
                                <div className={cn("relative h-36 bg-gradient-to-br", p.tone)}>
                                    <Home className="absolute bottom-3 left-3 h-6 w-6 text-white/80" />
                                    <button
                                        onClick={() => setLiked((l) => (l.includes(p.id) ? l.filter((x) => x !== p.id) : [...l, p.id]))}
                                        className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90"
                                        aria-label="Guardar"
                                    >
                                        <Heart className={cn("h-4 w-4", liked.includes(p.id) ? "fill-[#d9622b] text-[#d9622b]" : "text-black/60")} />
                                    </button>
                                    <span className="absolute left-3 top-3 rounded bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase">{p.op}</span>
                                </div>
                                <div className="p-4">
                                    <p className="text-[18px] font-semibold">{p.price}</p>
                                    <p className="mt-0.5 text-[13px] text-black/70">{p.title}</p>
                                    <p className="mt-0.5 flex items-center gap-1 text-[12px] text-black/50">
                                        <MapPin className="h-3 w-3" /> {p.zone}
                                    </p>
                                    <div className="mt-3 flex gap-4 border-t border-black/5 pt-3 text-[12px] text-black/60">
                                        <span className="flex items-center gap-1">
                                            <Ruler className="h-3.5 w-3.5" /> {p.m2} m²
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <BedDouble className="h-3.5 w-3.5" /> {p.rooms}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Bath className="h-3.5 w-3.5" /> {p.baths}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => toast.show(`Visita solicitada: ${p.title} (${p.zone}). Un asesor te escribe por WhatsApp.`)}
                                        className="mt-4 w-full rounded-lg border border-black/15 py-2 text-[12px] font-medium hover:bg-black/5"
                                    >
                                        Coordinar visita
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Tasación */}
            <section data-demo-section="tasar" className="bg-[#111] px-5 py-14 text-white @3xl:px-12">
                <div className="grid gap-8 @3xl:grid-cols-2 @3xl:items-center">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-[#d9622b]">¿Querés vender?</p>
                        <h2 className="mt-2 text-[30px] font-semibold leading-tight tracking-tight @3xl:text-[42px]">Vendé tu propiedad en 60 días o no cobramos comisión.</h2>
                        <p className="mt-3 text-[14px] leading-relaxed text-white/65">Fotos profesionales, recorrido 360° y difusión en todos los portales. Primero, una tasación real y gratuita.</p>
                    </div>
                    <div className="rounded-2xl bg-white p-5 text-[#111]">
                        <p className="text-[15px] font-semibold">Pedí tu tasación gratis</p>
                        <label className="mt-4 block text-[11px] uppercase tracking-wider text-black/50">Barrio</label>
                        <select
                            value={zone}
                            onChange={(e) => setZone(e.target.value)}
                            className="mt-1 w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-[14px]"
                        >
                            {["Zona Norte", "San Isidro", "Vicente López", "Olivos", "Martínez", "Nordelta"].map((z) => (
                                <option key={z}>{z}</option>
                            ))}
                        </select>
                        <label className="mt-3 block text-[11px] uppercase tracking-wider text-black/50">Ambientes</label>
                        <div className="mt-1 grid grid-cols-5 gap-1.5">
                            {[1, 2, 3, 4, 5].map((n) => (
                                <button
                                    key={n}
                                    onClick={() => setRooms(n)}
                                    className={cn("rounded-lg border py-2 text-[13px]", rooms === n ? "border-[#d9622b] bg-[#d9622b] text-white" : "border-black/15")}
                                >
                                    {n === 5 ? "5+" : n}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => toast.show(`Tasación solicitada: ${rooms === 5 ? "5+" : rooms} ambientes en ${zone}. Te contactamos hoy.`)}
                            className="mt-5 w-full rounded-lg bg-[#d9622b] py-3 text-[14px] font-medium text-white"
                        >
                            Quiero mi tasación
                        </button>
                    </div>
                </div>
            </section>

            {/* Confianza */}
            <section className="px-5 py-14 @3xl:px-12">
                <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                        ["25 años", "en Zona Norte"],
                        ["+1.800", "operaciones cerradas"],
                        ["4.9★", "en Google"],
                    ].map(([v, k]) => (
                        <div key={k} className="rounded-xl border border-black/10 p-4">
                            <p className="text-[24px] font-semibold tracking-tight @3xl:text-[32px]">{v}</p>
                            <p className="text-[11px] text-black/55 @3xl:text-[13px]">{k}</p>
                        </div>
                    ))}
                </div>
                <figure className="mt-6 rounded-xl bg-[#f6f3ee] p-6">
                    <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-[#d9622b] text-[#d9622b]" />
                        ))}
                    </div>
                    <blockquote className="mt-3 text-[16px] leading-relaxed @3xl:text-[19px]">
                        “Vendimos la casa de mis viejos en 7 semanas. Nos acompañaron en cada paso, hasta la escritura.”
                    </blockquote>
                    <figcaption className="mt-2 text-[13px] text-black/50">Andrés G. · San Isidro</figcaption>
                </figure>
            </section>

            <footer className="border-t border-black/10 px-5 py-6 text-center text-[11px] text-black/45">NORTE Propiedades · Zona Norte, Buenos Aires</footer>
        </div>
    );
}
