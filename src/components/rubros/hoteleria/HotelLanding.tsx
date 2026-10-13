"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BedDouble, Car, Check, Coffee, MapPin, MessageCircle, Mountain, Star, Users, Waves, Wifi } from "lucide-react";
import { MountainLake } from "@/components/landing/Showcase";
import { cn } from "@/lib/utils";

/*
 * Landing de ejemplo para un hotel ficticio ("Casa Alerce").
 * Usa container queries (@container / @3xl:) para adaptarse al marco en el que se muestra
 * (pantalla de computadora o de celular), no al ancho de la ventana.
 */

const rooms = [
    { name: "Suite Lago", desc: "Vista al Nahuel Huapi, hidromasaje y balcón privado.", price: 185, tone: "from-[#9fb5c9] to-[#3f5546]" },
    { name: "Doble Bosque", desc: "Cama king, chimenea a leña y vista al jardín.", price: 140, tone: "from-[#c9b79f] to-[#6b7f62]" },
    { name: "Familiar", desc: "Dos ambientes para 4 personas, ideal con chicos.", price: 210, tone: "from-[#e9a07f] to-[#7d5a4a]" },
];

const amenities = [
    { icon: Coffee, label: "Desayuno regional" },
    { icon: Waves, label: "Spa y piscina climatizada" },
    { icon: Wifi, label: "Wi-Fi de alta velocidad" },
    { icon: Car, label: "Estacionamiento" },
    { icon: Mountain, label: "Excursiones a medida" },
    { icon: BedDouble, label: "Late check-out" },
];

const reviews = [
    { name: "Lucía M.", from: "Córdoba", text: "La vista desde la suite es increíble. Reservamos directo y nos regalaron el late check-out." },
    { name: "Tom R.", from: "Londres", text: "Best breakfast in Patagonia. The staff helped us plan every day." },
    { name: "Familia Pérez", from: "Rosario", text: "Los chicos amaron la piscina. Ya reservamos para el invierno." },
];

export function HotelLanding() {
    const [sent, setSent] = useState(false);
    const [guests, setGuests] = useState(2);

    const consult = () => {
        setSent(true);
        setTimeout(() => setSent(false), 3200);
    };

    return (
        <div className="@container relative bg-[#f6f2ea] font-sans text-[#1f2a24]">
            {/* Barra de navegación */}
            <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[#1f2a24]/10 bg-[#f6f2ea]/90 px-5 py-3 backdrop-blur @3xl:px-12">
                <span className="font-serif text-xl italic">Casa Alerce</span>
                <nav className="hidden gap-7 text-[13px] text-[#1f2a24]/70 @3xl:flex">
                    <span>Habitaciones</span>
                    <span>Experiencias</span>
                    <span>Ubicación</span>
                    <span>Opiniones</span>
                </nav>
                <span className="rounded-full bg-[#1f2a24] px-4 py-2 text-[12px] font-medium text-white">Reservar</span>
            </header>

            {/* Aviso de consulta enviada: queda fijo arriba de la pantalla simulada, debajo del menú */}
            <div className="pointer-events-none sticky top-16 z-30 h-0">
                <AnimatePresence>
                    {sent && (
                        <motion.div
                            initial={{ opacity: 0, y: -12, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8 }}
                            className="absolute right-4 top-2 flex max-w-[calc(100%-2rem)] items-center gap-2.5 rounded-xl bg-[#1f2a24] px-3.5 py-2.5 text-[12px] text-white shadow-xl"
                        >
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#25D366]">
                                <MessageCircle className="h-3.5 w-3.5" />
                            </span>
                            Consulta enviada al hotel · 12–15 ene · {guests} huéspedes
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="relative h-[420px] @3xl:h-[520px]">
                    <MountainLake />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute inset-x-5 bottom-28 text-white @3xl:inset-x-12 @3xl:bottom-32">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-white/80">Hotel boutique · Bariloche</p>
                        <h1 className="mt-3 max-w-xl font-serif text-[40px] leading-[0.95] @3xl:text-[68px]">
                            Despertá frente <span className="italic">al lago.</span>
                        </h1>
                        <p className="mt-3 max-w-md text-[14px] text-white/85 @3xl:text-[16px]">
                            14 habitaciones a orillas del Nahuel Huapi. Reservando directo, siempre pagás menos.
                        </p>
                    </div>
                </div>

                {/* Motor de consulta */}
                <div className="relative z-10 mx-4 -mt-20 rounded-2xl bg-white p-4 shadow-[0_20px_60px_-20px_rgba(31,42,36,0.45)] @3xl:mx-12 @3xl:-mt-16 @3xl:p-5">
                    <div className="grid gap-2 @3xl:grid-cols-[1fr_1fr_1fr_auto] @3xl:gap-3">
                        <Field label="Llegada" value="Vie 12 ene" />
                        <Field label="Salida" value="Lun 15 ene" />
                        <div className="rounded-xl border border-[#1f2a24]/10 px-3 py-2">
                            <p className="text-[10px] uppercase tracking-wider text-[#1f2a24]/50">Huéspedes</p>
                            <div className="mt-0.5 flex items-center justify-between">
                                <span className="flex items-center gap-1.5 text-[14px] font-medium">
                                    <Users className="h-3.5 w-3.5" /> {guests} adultos
                                </span>
                                <span className="flex gap-1">
                                    <Stepper onClick={() => setGuests((g) => Math.max(1, g - 1))}>−</Stepper>
                                    <Stepper onClick={() => setGuests((g) => Math.min(6, g + 1))}>+</Stepper>
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={consult}
                            className="rounded-xl bg-[#1f2a24] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#2f4a3c]"
                        >
                            Ver disponibilidad
                        </button>
                    </div>
                    <p className="mt-3 flex items-center gap-1.5 text-[12px] text-[#4f6b4a]">
                        <Check className="h-3.5 w-3.5" /> Mejor precio garantizado: -10% y late check-out reservando en nuestra web.
                    </p>

                </div>
            </section>

            {/* Prueba social */}
            <section className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-8 text-[13px] text-[#1f2a24]/70">
                <span className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-[#d9a441] text-[#d9a441]" /> <b className="text-[#1f2a24]">9.4</b> en reseñas de huéspedes
                </span>
                <span>Travellers’ Choice</span>
                <span>Desde 1998</span>
            </section>

            {/* Habitaciones */}
            <section className="px-5 pb-14 @3xl:px-12">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7f62]">Habitaciones</p>
                <h2 className="mt-2 font-serif text-[30px] leading-tight @3xl:text-[40px]">Elegí tu forma de descansar</h2>
                <div className="mt-6 grid gap-4 @3xl:grid-cols-3">
                    {rooms.map((r) => (
                        <article key={r.name} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                            <div className={cn("relative h-36 bg-gradient-to-br", r.tone)}>
                                <BedDouble className="absolute bottom-3 left-3 h-6 w-6 text-white/80" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-serif text-xl">{r.name}</h3>
                                <p className="mt-1 text-[13px] leading-relaxed text-[#1f2a24]/65">{r.desc}</p>
                                <div className="mt-4 flex items-end justify-between">
                                    <p className="text-[12px] text-[#1f2a24]/60">
                                        desde <b className="text-[20px] text-[#1f2a24]">USD {r.price}</b> /noche
                                    </p>
                                    <span className="rounded-full border border-[#1f2a24]/20 px-3 py-1.5 text-[12px]">Reservar</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Servicios */}
            <section className="bg-[#1f2a24] px-5 py-14 text-[#f6f2ea] @3xl:px-12">
                <h2 className="font-serif text-[30px] leading-tight @3xl:text-[40px]">
                    Todo pensado para <span className="italic text-[#c9d6b8]">que no pienses en nada.</span>
                </h2>
                <div className="mt-8 grid grid-cols-2 gap-4 @3xl:grid-cols-3">
                    {amenities.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-3 text-[14px]">
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10">
                                <Icon className="h-4 w-4" />
                            </span>
                            {label}
                        </div>
                    ))}
                </div>
            </section>

            {/* Opiniones */}
            <section className="px-5 py-14 @3xl:px-12">
                <h2 className="font-serif text-[30px] leading-tight @3xl:text-[40px]">Lo que dicen nuestros huéspedes</h2>
                <div className="mt-6 grid gap-4 @3xl:grid-cols-3">
                    {reviews.map((r) => (
                        <blockquote key={r.name} className="rounded-2xl border border-[#1f2a24]/10 bg-white p-5">
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="h-3.5 w-3.5 fill-[#d9a441] text-[#d9a441]" />
                                ))}
                            </div>
                            <p className="mt-3 text-[14px] leading-relaxed">“{r.text}”</p>
                            <footer className="mt-3 text-[12px] text-[#1f2a24]/60">
                                {r.name} · {r.from}
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </section>

            {/* Ubicación + CTA final */}
            <section className="px-5 pb-16 @3xl:px-12">
                <div className="grid overflow-hidden rounded-3xl bg-white @3xl:grid-cols-2">
                    <div className="relative min-h-48 bg-[#dfe7d6]">
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,42,36,0.06)_1px,transparent_1px),linear-gradient(rgba(31,42,36,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
                        <div className="absolute left-0 right-0 top-1/2 h-10 -translate-y-1/2 bg-[#9fb5c9]/70" />
                        <MapPin className="absolute left-1/2 top-[38%] h-8 w-8 -translate-x-1/2 fill-[#c0533a] text-[#f6f2ea]" />
                    </div>
                    <div className="p-6 @3xl:p-10">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7f62]">Av. Bustillo km 8 · Bariloche</p>
                        <h2 className="mt-2 font-serif text-[28px] leading-tight @3xl:text-[36px]">Tu escapada empieza acá.</h2>
                        <p className="mt-2 text-[14px] text-[#1f2a24]/65">A 15 minutos del centro y a 25 del Cerro Catedral.</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            <button onClick={consult} className="rounded-full bg-[#1f2a24] px-5 py-3 text-[13px] font-medium text-white">
                                Consultar disponibilidad
                            </button>
                            <span className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-medium text-white">
                                <MessageCircle className="h-4 w-4" /> WhatsApp
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-[#1f2a24]/10 px-5 py-6 text-center text-[11px] text-[#1f2a24]/50">
                Casa Alerce · Hotel boutique · Bariloche, Argentina
            </footer>
        </div>
    );
}

function Field({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-xl border border-[#1f2a24]/10 px-3 py-2">
            <p className="text-[10px] uppercase tracking-wider text-[#1f2a24]/50">{label}</p>
            <p className="mt-0.5 text-[14px] font-medium">{value}</p>
        </div>
    );
}

function Stepper({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
    return (
        <button
            onClick={onClick}
            className="grid h-6 w-6 place-items-center rounded-full border border-[#1f2a24]/20 text-[14px] leading-none hover:bg-[#1f2a24]/5"
            aria-label={children === "+" ? "Sumar huésped" : "Restar huésped"}
        >
            {children}
        </button>
    );
}
