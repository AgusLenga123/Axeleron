"use client";

import { useState } from "react";
import { Bot, Check, LayoutDashboard, Plug, Sparkles, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoToast, scrollInDemo, useDemoToast } from "../DemoToast";

/* Landing de ejemplo para un SaaS ficticio ("Flujo"). Usa container queries (@3xl:). */

const plans = [
    { name: "Starter", monthly: 0, desc: "Para probar con tu equipo", items: ["Hasta 3 usuarios", "5 automatizaciones", "Tableros básicos"] },
    { name: "Pro", monthly: 15, desc: "Para equipos que crecen", items: ["Usuarios ilimitados", "Automatizaciones ilimitadas", "Integraciones", "Soporte prioritario"], featured: true },
    { name: "Business", monthly: 29, desc: "Para empresas", items: ["Todo lo de Pro", "SSO y permisos avanzados", "Onboarding dedicado"] },
];

const features = [
    { icon: Bot, t: "Automatizaciones con IA", d: "Describí la tarea en una frase y Flujo arma el proceso: asignar, recordar, aprobar." },
    { icon: LayoutDashboard, t: "Tableros en tiempo real", d: "Todo el estado del equipo en una pantalla, sin pedir actualizaciones por chat." },
    { icon: Plug, t: "Se conecta con todo", d: "Slack, Google Workspace, Notion, HubSpot y más de 80 integraciones." },
];

export function SaasLanding() {
    const [annual, setAnnual] = useState(true);
    const [email, setEmail] = useState("");
    const toast = useDemoToast();

    const signup = () =>
        toast.show(email.includes("@") ? `¡Listo! Enviamos el acceso a ${email}. Tenés 14 días gratis.` : "Escribí tu email para crear tu cuenta gratis.");

    return (
        <div className="@container relative bg-[#05060f] font-sans text-white">
            <header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#05060f]/85 px-5 py-3 backdrop-blur @3xl:px-12">
                <span className="flex items-center gap-2 text-[15px] font-semibold">
                    <span className="h-5 w-5 rounded-md bg-gradient-to-br from-[#4f7cff] to-[#00e0b8]" /> Flujo
                </span>
                <nav className="hidden gap-7 text-[13px] text-white/60 @3xl:flex">
                    <span>Producto</span>
                    <span>Precios</span>
                    <span>Clientes</span>
                </nav>
                <span className="flex items-center gap-4 text-[13px]">
                    <span className="hidden text-white/60 @3xl:inline">Ingresar</span>
                    <button onClick={(e) => scrollInDemo(e.currentTarget, "precios")} className="rounded-lg bg-white px-3.5 py-2 font-medium text-black">
                        Probar gratis
                    </button>
                </span>
            </header>

            <DemoToast message={toast.message} className="bg-white text-black" />

            {/* Hero */}
            <section className="relative overflow-clip px-5 pb-10 pt-12 text-center @3xl:px-12 @3xl:pt-20">
                <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#4f7cff]/30 to-[#00e0b8]/20 blur-3xl" />
                <p className="relative mx-auto inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                    <Sparkles className="h-3 w-3 text-[#00e0b8]" /> Nuevo: automatizaciones con IA
                </p>
                <h1 className="relative mx-auto mt-5 max-w-3xl text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] @3xl:text-[68px]">
                    Tu equipo, el doble
                    <br />
                    <span className="bg-gradient-to-r from-[#4f7cff] to-[#00e0b8] bg-clip-text text-transparent">de productivo.</span>
                </h1>
                <p className="relative mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
                    Flujo junta tareas, aprobaciones y reportes en un solo lugar, y automatiza lo repetitivo. Menos reuniones, más trabajo hecho.
                </p>
                <div className="relative mx-auto mt-7 flex max-w-md flex-col gap-2 @3xl:flex-row">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && signup()}
                        placeholder="tu@empresa.com"
                        className="h-11 flex-1 rounded-lg border border-white/15 bg-white/5 px-4 text-[14px] text-white placeholder:text-white/35 focus:border-[#4f7cff] focus:outline-none"
                    />
                    <button onClick={signup} className="h-11 rounded-lg bg-gradient-to-r from-[#4f7cff] to-[#00a8e0] px-5 text-[14px] font-medium">
                        Empezar gratis
                    </button>
                </div>
                <p className="relative mt-3 text-[12px] text-white/40">14 días gratis · Sin tarjeta · Cancelás cuando quieras</p>

                {/* Producto */}
                <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-[#0b0d1c] text-left shadow-2xl">
                    <div className="grid @3xl:grid-cols-[170px_1fr]">
                        <aside className="hidden border-r border-white/10 p-3 @3xl:block">
                            {["Inicio", "Mis tareas", "Automatizaciones", "Reportes", "Equipo"].map((x, i) => (
                                <div key={x} className={cn("rounded-md px-2.5 py-2 text-[12px]", i === 2 ? "bg-white/10 text-white" : "text-white/50")}>
                                    {x}
                                </div>
                            ))}
                        </aside>
                        <div className="p-4">
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    ["Tareas cerradas", "1.284", "+18%"],
                                    ["Horas ahorradas", "312 h", "+42%"],
                                    ["Aprobaciones", "96%", "+9%"],
                                ].map(([k, v, d]) => (
                                    <div key={k} className="rounded-lg border border-white/10 p-2.5">
                                        <p className="text-[10px] text-white/45">{k}</p>
                                        <p className="mt-1 text-[17px] font-semibold">{v}</p>
                                        <p className="text-[10px] text-[#00e0b8]">{d}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 flex h-28 items-end gap-1.5 rounded-lg border border-white/10 p-3">
                                {[30, 42, 38, 55, 50, 64, 60, 72, 70, 84, 80, 95].map((h, i) => (
                                    <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-[#4f7cff]/40 to-[#00e0b8]" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                            <div className="mt-3 space-y-1.5">
                                {[
                                    ["Aprobar presupuesto Q3", "Automatizado", true],
                                    ["Onboarding cliente Ventra", "En curso", false],
                                ].map(([t, s, auto]) => (
                                    <div key={t as string} className="flex items-center justify-between rounded-md bg-white/[0.03] px-3 py-2 text-[12px]">
                                        <span className="flex items-center gap-2">
                                            <span className={cn("h-3.5 w-3.5 rounded-full border", auto ? "border-[#00e0b8] bg-[#00e0b8]/30" : "border-white/30")} />
                                            {t}
                                        </span>
                                        <span className={auto ? "text-[#00e0b8]" : "text-white/40"}>{s}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logos */}
            <section className="px-5 pb-12 @3xl:px-12">
                <p className="text-center text-[11px] uppercase tracking-[0.25em] text-white/35">Equipos que ya trabajan con Flujo</p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[17px] font-semibold text-white/35">
                    {["Nubo", "Ventra", "lumi", "KARGO", "Órbita"].map((x) => (
                        <span key={x}>{x}</span>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className="border-t border-white/10 px-5 py-14 @3xl:px-12">
                <h2 className="max-w-xl text-[30px] font-semibold leading-tight tracking-tight @3xl:text-[42px]">Todo lo que tu equipo necesita, sin cambiar de pestaña.</h2>
                <div className="mt-8 grid gap-4 @3xl:grid-cols-3">
                    {features.map(({ icon: Icon, t, d }) => (
                        <div key={t} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#4f7cff]/30 to-[#00e0b8]/20">
                                <Icon className="h-4 w-4 text-[#00e0b8]" />
                            </span>
                            <h3 className="mt-4 text-[17px] font-semibold">{t}</h3>
                            <p className="mt-1.5 text-[14px] leading-relaxed text-white/55">{d}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3 rounded-xl border border-white/10 p-5 text-center">
                    {[
                        ["-6 h", "de reuniones por semana"],
                        ["3x", "más rápido en aprobar"],
                        ["4.8★", "en reseñas de usuarios"],
                    ].map(([v, k]) => (
                        <div key={k}>
                            <p className="bg-gradient-to-r from-[#4f7cff] to-[#00e0b8] bg-clip-text text-[26px] font-semibold text-transparent @3xl:text-[34px]">{v}</p>
                            <p className="text-[11px] text-white/50 @3xl:text-[13px]">{k}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Precios */}
            <section data-demo-section="precios" className="px-5 py-14 @3xl:px-12">
                <div className="flex flex-col items-start justify-between gap-4 @3xl:flex-row @3xl:items-end">
                    <h2 className="text-[30px] font-semibold leading-tight tracking-tight @3xl:text-[42px]">Precios simples</h2>
                    <div className="flex items-center gap-1 rounded-lg border border-white/10 p-1 text-[12px]">
                        {[
                            { v: false, l: "Mensual" },
                            { v: true, l: "Anual · -20%" },
                        ].map(({ v, l }) => (
                            <button
                                key={l}
                                onClick={() => setAnnual(v)}
                                className={cn("rounded-md px-3 py-1.5 transition-colors", annual === v ? "bg-white text-black" : "text-white/60")}
                            >
                                {l}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-8 grid gap-4 @3xl:grid-cols-3">
                    {plans.map((p) => {
                        const price = annual ? Math.round(p.monthly * 0.8) : p.monthly;
                        return (
                            <div
                                key={p.name}
                                className={cn(
                                    "rounded-xl border p-5",
                                    p.featured ? "border-[#4f7cff] bg-gradient-to-b from-[#4f7cff]/15 to-transparent" : "border-white/10"
                                )}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[17px] font-semibold">{p.name}</h3>
                                    {p.featured && <span className="rounded-full bg-[#4f7cff] px-2 py-0.5 text-[10px]">Popular</span>}
                                </div>
                                <p className="mt-1 text-[13px] text-white/50">{p.desc}</p>
                                <p className="mt-4">
                                    <span className="text-[36px] font-semibold">USD {price}</span>
                                    <span className="text-[12px] text-white/45"> /usuario/mes</span>
                                </p>
                                <ul className="mt-4 space-y-2">
                                    {p.items.map((it) => (
                                        <li key={it} className="flex items-center gap-2 text-[13px] text-white/70">
                                            <Check className="h-4 w-4 text-[#00e0b8]" /> {it}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => toast.show(`Plan ${p.name} activado: 14 días gratis, sin tarjeta.`)}
                                    className={cn("mt-6 w-full rounded-lg py-2.5 text-[13px] font-medium", p.featured ? "bg-white text-black" : "border border-white/15")}
                                >
                                    {p.monthly === 0 ? "Empezar gratis" : "Probar 14 días"}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Testimonio + CTA */}
            <section className="px-5 pb-16 @3xl:px-12">
                <figure className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                    <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-[#00e0b8] text-[#00e0b8]" />
                        ))}
                    </div>
                    <blockquote className="mt-3 text-[18px] leading-relaxed @3xl:text-[22px]">
                        “Dejamos de perseguir aprobaciones por mail. En un mes recuperamos medio día por semana por persona.”
                    </blockquote>
                    <figcaption className="mt-3 text-[13px] text-white/50">Paula Ríos · COO en Ventra</figcaption>
                </figure>
                <div className="mt-6 rounded-xl bg-gradient-to-r from-[#4f7cff] to-[#00a8e0] p-8 text-center">
                    <h2 className="text-[28px] font-semibold leading-tight @3xl:text-[38px]">Probalo hoy con tu equipo.</h2>
                    <button onClick={(e) => scrollInDemo(e.currentTarget, "precios")} className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-[14px] font-medium text-black">
                        <Zap className="h-4 w-4" /> Crear cuenta gratis
                    </button>
                </div>
            </section>

            <footer className="border-t border-white/10 px-5 py-6 text-center text-[11px] text-white/35">Flujo · Gestión de equipos con IA</footer>
        </div>
    );
}
