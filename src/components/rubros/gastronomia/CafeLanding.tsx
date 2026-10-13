"use client";

import { useMemo, useState } from "react";
import { Clock, MapPin, Minus, Plus, ShoppingBag, Star, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoToast, scrollInDemo, useDemoToast } from "../DemoToast";

/* Landing de ejemplo para una cafetería ficticia ("Almacén Ceibo"). Usa container queries (@3xl:). */

const menu = {
    Café: [
        { id: "fw", name: "Flat white", desc: "Doble ristretto y leche texturizada", price: 3200 },
        { id: "v60", name: "Filtrado V60", desc: "Origen del día, notas frutales", price: 3600 },
        { id: "cb", name: "Cold brew", desc: "16 horas de extracción en frío", price: 3900 },
    ],
    Brunch: [
        { id: "tmm", name: "Tostado de masa madre", desc: "Jamón natural, queso y pickles", price: 5900 },
        { id: "pal", name: "Palta toast", desc: "Huevo poché, semillas y limón", price: 7200 },
        { id: "gra", name: "Bowl de granola", desc: "Yogur, frutos rojos y miel", price: 5400 },
    ],
    Pastelería: [
        { id: "med", name: "Medialuna de manteca", desc: "Hojaldrada, recién horneada", price: 1500 },
        { id: "bud", name: "Budín de limón", desc: "Con glaseado y amapola", price: 2800 },
        { id: "cin", name: "Roll de canela", desc: "Masa madre y frosting", price: 3400 },
    ],
};

type Category = keyof typeof menu;
const money = (n: number) => `$${n.toLocaleString("es-AR")}`;

export function CafeLanding() {
    const [cat, setCat] = useState<Category>("Brunch");
    const [cart, setCart] = useState<Record<string, number>>({});
    const [people, setPeople] = useState(2);
    const [slot, setSlot] = useState("Sáb 11:00");
    const toast = useDemoToast();

    const all = useMemo(() => Object.values(menu).flat(), []);
    const count = Object.values(cart).reduce((a, b) => a + b, 0);
    const total = Object.entries(cart).reduce((s, [id, q]) => s + (all.find((x) => x.id === id)?.price ?? 0) * q, 0);
    const add = (id: string, d: number) => setCart((c) => ({ ...c, [id]: Math.max(0, (c[id] ?? 0) + d) }));

    return (
        <div className="@container relative bg-[#f6efe4] font-sans text-[#2a1d16]">
            <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[#2a1d16]/10 bg-[#f6efe4]/90 px-5 py-3 backdrop-blur @3xl:px-12">
                <span className="font-serif text-xl italic">Almacén Ceibo</span>
                <nav className="hidden gap-7 text-[13px] text-[#2a1d16]/60 @3xl:flex">
                    <span>Carta</span>
                    <span>Reservas</span>
                    <span>Cómo llegar</span>
                </nav>
                <button
                    onClick={(e) => scrollInDemo(e.currentTarget, "carta")}
                    className="flex items-center gap-1.5 rounded-full bg-[#2a1d16] px-4 py-2 text-[12px] text-[#f6efe4]"
                >
                    <ShoppingBag className="h-3.5 w-3.5" /> {count > 0 ? `${count} · ${money(total)}` : "Pedir"}
                </button>
            </header>

            <DemoToast message={toast.message} className="bg-[#2a1d16] text-[#f6efe4]" />

            {/* Hero */}
            <section className="grid items-center gap-8 px-5 py-12 @3xl:grid-cols-2 @3xl:px-12 @3xl:py-16">
                <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#b07a4a]">Café de especialidad · Brunch · Pastelería</p>
                    <h1 className="mt-4 font-serif text-[46px] leading-[1] @3xl:text-[68px]">
                        El mejor brunch <span className="italic text-[#b07a4a]">de Belgrano.</span>
                    </h1>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#2a1d16]/70">
                        Masa madre propia, café tostado en casa y un patio para quedarse. Reservá tu mesa o pedí para llevar sin comisiones de apps.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <button onClick={(e) => scrollInDemo(e.currentTarget, "reserva")} className="rounded-full bg-[#2a1d16] px-6 py-3 text-[13px] text-[#f6efe4]">
                            Reservar mesa
                        </button>
                        <button onClick={(e) => scrollInDemo(e.currentTarget, "carta")} className="rounded-full border border-[#2a1d16]/30 px-6 py-3 text-[13px]">
                            Ver la carta
                        </button>
                    </div>
                    <p className="mt-5 flex items-center gap-1.5 text-[13px] text-[#2a1d16]/60">
                        <Star className="h-4 w-4 fill-[#b07a4a] text-[#b07a4a]" /> 4.8 · +900 reseñas en Google
                    </p>
                </div>
                <div className="relative mx-auto aspect-square w-full max-w-[340px]">
                    <div className="absolute inset-0 rounded-full bg-[#e8d9c3]" />
                    <div className="absolute inset-[12%] rounded-full border-[10px] border-[#f6efe4] bg-[radial-gradient(circle,#6b4429_30%,#3b2619_72%)] shadow-2xl" />
                    <div className="absolute inset-[34%] rounded-full bg-[radial-gradient(circle,#c99a6b,#8a5a35)] opacity-80" />
                    <span className="absolute -bottom-1 right-2 rounded-2xl bg-white px-4 py-2.5 text-[12px] shadow-lg">
                        <b className="block text-[15px]">Abierto hoy</b> 8:00 a 19:00
                    </span>
                </div>
            </section>

            {/* Carta */}
            <section data-demo-section="carta" className="bg-[#2a1d16] px-5 py-14 text-[#f6efe4] @3xl:px-12">
                <div className="flex flex-col justify-between gap-4 @3xl:flex-row @3xl:items-end">
                    <h2 className="font-serif text-[34px] leading-tight @3xl:text-[46px]">La carta</h2>
                    <div className="flex gap-1 rounded-full bg-white/10 p-1">
                        {(Object.keys(menu) as Category[]).map((c) => (
                            <button
                                key={c}
                                onClick={() => setCat(c)}
                                className={cn("rounded-full px-4 py-1.5 text-[13px] transition-colors", cat === c ? "bg-[#f6efe4] text-[#2a1d16]" : "text-[#f6efe4]/70")}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-6 divide-y divide-dashed divide-[#f6efe4]/15">
                    {menu[cat].map((it) => (
                        <div key={it.id} className="flex items-center gap-4 py-4">
                            <div className="flex-1">
                                <p className="text-[16px]">{it.name}</p>
                                <p className="text-[13px] text-[#f6efe4]/55">{it.desc}</p>
                            </div>
                            <span className="text-[15px] text-[#e3a86b]">{money(it.price)}</span>
                            <div className="flex items-center gap-2">
                                {(cart[it.id] ?? 0) > 0 && (
                                    <>
                                        <button onClick={() => add(it.id, -1)} className="grid h-7 w-7 place-items-center rounded-full border border-[#f6efe4]/30" aria-label="Quitar">
                                            <Minus className="h-3.5 w-3.5" />
                                        </button>
                                        <span className="w-4 text-center text-[14px]">{cart[it.id]}</span>
                                    </>
                                )}
                                <button onClick={() => add(it.id, 1)} className="grid h-7 w-7 place-items-center rounded-full bg-[#e3a86b] text-[#2a1d16]" aria-label="Agregar">
                                    <Plus className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl bg-white/[0.06] p-4 @3xl:flex-row @3xl:items-center">
                    <p className="text-[14px] text-[#f6efe4]/80">
                        {count > 0 ? (
                            <>
                                Tu pedido: <b className="text-[#f6efe4]">{count} productos · {money(total)}</b>
                            </>
                        ) : (
                            "Sumá productos y pedí para retirar por WhatsApp, sin comisiones."
                        )}
                    </p>
                    <button
                        onClick={() => toast.show(count > 0 ? `Pedido enviado por WhatsApp: ${count} productos, ${money(total)}. ¡Listo en 15 minutos!` : "Agregá algo de la carta para hacer tu pedido.")}
                        className="rounded-full bg-[#25D366] px-5 py-2.5 text-[13px] font-medium text-white"
                    >
                        Pedir por WhatsApp
                    </button>
                </div>
            </section>

            {/* Reserva */}
            <section data-demo-section="reserva" className="px-5 py-14 @3xl:px-12">
                <div className="grid gap-6 rounded-3xl bg-white p-6 @3xl:grid-cols-2 @3xl:p-10">
                    <div>
                        <h2 className="font-serif text-[32px] leading-tight @3xl:text-[42px]">Reservá tu mesa</h2>
                        <p className="mt-2 text-[14px] text-[#2a1d16]/65">Los fines de semana se llena. Asegurá tu lugar en el patio en 10 segundos.</p>
                    </div>
                    <div>
                        <p className="text-[11px] uppercase tracking-wider text-[#2a1d16]/50">Personas</p>
                        <div className="mt-1 flex items-center gap-3">
                            <button onClick={() => setPeople((p) => Math.max(1, p - 1))} className="grid h-9 w-9 place-items-center rounded-full border border-[#2a1d16]/20" aria-label="Menos personas">
                                <Minus className="h-4 w-4" />
                            </button>
                            <span className="flex items-center gap-1.5 text-[16px]">
                                <Users className="h-4 w-4" /> {people}
                            </span>
                            <button onClick={() => setPeople((p) => Math.min(10, p + 1))} className="grid h-9 w-9 place-items-center rounded-full border border-[#2a1d16]/20" aria-label="Más personas">
                                <Plus className="h-4 w-4" />
                            </button>
                        </div>
                        <p className="mt-4 text-[11px] uppercase tracking-wider text-[#2a1d16]/50">Horario</p>
                        <div className="mt-1 flex flex-wrap gap-2">
                            {["Sáb 10:00", "Sáb 11:00", "Sáb 12:30", "Dom 10:00", "Dom 11:30"].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSlot(s)}
                                    className={cn("rounded-full border px-3.5 py-1.5 text-[13px]", slot === s ? "border-[#b07a4a] bg-[#b07a4a] text-white" : "border-[#2a1d16]/15")}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => toast.show(`Mesa reservada para ${people} el ${slot} hs. Te confirmamos por WhatsApp.`)}
                            className="mt-5 w-full rounded-full bg-[#2a1d16] py-3 text-[14px] text-[#f6efe4]"
                        >
                            Confirmar reserva
                        </button>
                    </div>
                </div>
            </section>

            {/* Ubicación */}
            <section className="grid gap-4 px-5 pb-14 @3xl:grid-cols-3 @3xl:px-12">
                {[
                    { icon: MapPin, t: "Juramento 2100, Belgrano", d: "A 3 cuadras del subte D" },
                    { icon: Clock, t: "Todos los días", d: "8:00 a 19:00 · Brunch hasta las 16" },
                    { icon: Star, t: "Pet friendly", d: "Patio con sombra y agua para tu perro" },
                ].map(({ icon: Icon, t, d }) => (
                    <div key={t} className="rounded-2xl border border-[#2a1d16]/10 p-5">
                        <Icon className="h-5 w-5 text-[#b07a4a]" />
                        <p className="mt-3 text-[15px] font-medium">{t}</p>
                        <p className="text-[13px] text-[#2a1d16]/60">{d}</p>
                    </div>
                ))}
            </section>

            <footer className="border-t border-[#2a1d16]/10 px-5 py-6 text-center text-[11px] text-[#2a1d16]/50">Almacén Ceibo · Café y brunch · Belgrano, CABA</footer>
        </div>
    );
}
