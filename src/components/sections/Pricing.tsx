import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, ShieldCheck, Clock, Star, Zap, TrendingUp, Users } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";
import { cn } from "@/lib/utils";

const features = [
    "Landing 100% funcional",
    "Copywriting persuasivo incluido",
    "Diseño premium con animaciones",
    "Entrega en 7 días hábiles",
    "2 rondas de revisiones",
    "Formulario + WhatsApp + Email",
    "Optimización SEO básica",
];

const stats = [
    { icon: Clock, value: "7 días", label: "Tiempo de entrega", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { icon: TrendingUp, value: "+300%", label: "Más conversiones vs. sin landing", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { icon: Users, value: "50+", label: "Clientes satisfechos", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
];

const testimonialSnippets = [
    { text: "Empecé a recibir consultas el mismo día que lanzamos.", author: "Marcos R.", role: "Coach fitness" },
    { text: "Nunca pensé que podía tener algo así a este precio.", author: "Laura M.", role: "Psicóloga" },
];

export function Pricing() {
    return (
        <section id="planes" className="py-16 bg-background relative overflow-hidden">
            <GridBackground opacity={0.03} size={60} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 blur-[180px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                        Precio
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        1 solo precio.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Sin vueltas.
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Sabés exactamente qué incluye y cuánto pagás. Sin letras chicas, sin planes confusos.
                    </p>
                </div>

                {/* 2-col layout */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">

                    {/* LEFT — Pricing card */}
                    <div>
                        {/* Badge above */}
                        <div className="flex justify-center mb-5">
                            <span className="inline-flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full shadow-lg shadow-primary/20">
                                <Sparkles className="w-3.5 h-3.5" />
                                Todo incluido · Precio fijo
                            </span>
                        </div>

                        {/* Card */}
                        <div className="rounded-3xl border border-primary/30 bg-secondary/10 backdrop-blur-sm shadow-xl shadow-primary/5 p-8">
                            {/* Price */}
                            <div className="text-center mb-7">
                                <div>
                                    <span className="text-6xl font-black font-heading bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                                        USD 390
                                    </span>
                                </div>
                                <div className="flex items-center justify-center gap-3 mt-2">
                                    <span className="text-sm text-muted-foreground">pago único</span>
                                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                                    <span className="text-sm text-muted-foreground">sin costos ocultos</span>
                                </div>

                                {/* Value anchor */}
                                <div className="mt-4 mx-auto px-4 py-2.5 rounded-xl bg-primary/8 border border-primary/20 text-xs text-muted-foreground leading-relaxed">
                                    💡 Un freelancer cobra entre{" "}
                                    <span className="text-foreground font-semibold">USD 800–1500</span>{" "}
                                    por lo mismo, en el doble de tiempo.
                                </div>
                            </div>

                            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                            {/* Features list */}
                            <ul className="space-y-2.5 mb-7">
                                {features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <div>
                                <Link
                                    id="plan-cta-pro"
                                    href="/?plan=Pro#contacto"
                                    className={cn(
                                        buttonVariants({ variant: "premium" }),
                                        "w-full h-14 rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:opacity-90 transition-all group"
                                    )}
                                >
                                    Quiero mi landing ahora
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Animated side panel */}
                    <div className="flex flex-col gap-5">
                        {/* Stat cards */}
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-4 p-4 rounded-2xl border ${stat.border} ${stat.bg} backdrop-blur-sm transition-transform hover:scale-[1.02] hover:translate-x-1`}
                            >
                                <div className={`w-11 h-11 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center flex-shrink-0`}>
                                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                </div>
                                <div>
                                    <p className={`text-2xl font-black font-heading ${stat.color}`}>{stat.value}</p>
                                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                                </div>
                            </div>
                        ))}

                        {/* Guarantee badge — pulsing */}
                        <div className="relative rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 overflow-hidden">
                            {/* Pulsing ring */}
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-emerald-400/40 animate-pulse" />
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-emerald-400 mb-1">Garantía de satisfacción</p>
                                    <p className="text-xs text-muted-foreground leading-relaxed">Si no quedás conforme con el diseño inicial, te devolvemos el dinero. Sin preguntas.</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial snippets */}
                        <div className="flex flex-col gap-3">
                            {testimonialSnippets.map((t, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-border/40 bg-secondary/10 p-4"
                                >
                                    {/* Stars */}
                                    <div className="flex gap-0.5 mb-2">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-foreground/80 italic mb-2">&ldquo;{t.text}&rdquo;</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] font-bold text-white">
                                            {t.author[0]}
                                        </div>
                                        <span className="text-xs text-muted-foreground">{t.author} · {t.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Floating "spots" badge */}
                        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-amber-500/25 bg-amber-500/5">
                            <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 animate-pulse" />
                            <p className="text-xs text-muted-foreground">
                                <span className="text-amber-400 font-semibold">Solo 3 lugares disponibles</span> para este mes — la agenda se llena rápido.
                            </p>
                            <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        </div>
                    </div>
                </div>

                {/* Bottom link */}
                <p className="text-center text-sm text-muted-foreground mt-10">
                    ¿Tenés dudas?{" "}
                    <a href="#contacto" className="text-primary hover:underline font-medium">
                        Hablemos y te contamos todo.
                    </a>
                </p>
            </div>
        </section>
    );
}
