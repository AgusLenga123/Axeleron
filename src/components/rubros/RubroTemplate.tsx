import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, MessageCircle, ShieldCheck, Timer, Wallet } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { CtaButton, Eyebrow, Reveal, SectionHeading, Serif } from "@/components/landing/ui";
import { Booking } from "@/components/landing/Booking";
import { StickyCTA } from "@/components/landing/FinalCTA";
import { DeviceDemo } from "./DeviceDemo";

type Item = { icon: LucideIcon; title: string; text: string };
type Title = { text: string; accent: string };

export type RubroConfig = {
    eyebrow: string;
    hero: Title & { subtitle: React.ReactNode; cta: string };
    demo: { url: string; landing: React.ReactNode; subtitle: string; title?: Title; screenBg?: string };
    problem: Title & { items: Item[] };
    benefits: Title & { subtitle?: string; items: Item[] };
    calculator: Title & { subtitle: string; node: React.ReactNode; note: string };
    steps?: { day: string; title: string; text: string }[];
    cta: Title & { body: string; whatsappMessage: string };
};

const defaultSteps = [
    { day: "Día 1", title: "Llamada", text: "Nos contás de tu negocio, tu cliente ideal y qué querés lograr." },
    { day: "Días 2 – 6", title: "Diseño + desarrollo", text: `Escribimos los textos, diseñamos y programamos. Tenés ${site.revisions} rondas de cambios.` },
    { day: `Día ${site.deliveryDays}`, title: "Online", text: "La publicamos en tu dominio y empezás a recibir consultas." },
];

/** Página de caso por rubro: hero, demo interactiva, problema, beneficios, calculadora, proceso, CTA y agenda. */
export function RubroTemplate({ config: c }: { config: RubroConfig }) {
    return (
        <main className="min-h-screen overflow-x-clip bg-background text-foreground">
            <Hero eyebrow={c.eyebrow} {...c.hero} />
            <Demo {...c.demo} />
            <Problem {...c.problem} />
            <Benefits {...c.benefits} />
            <Calculator {...c.calculator} />
            <Steps steps={c.steps ?? defaultSteps} />
            <FinalCta {...c.cta} />
            <Booking />
            <StickyCTA />
        </main>
    );
}

function Hero({ eyebrow, text, accent, subtitle, cta }: RubroConfig["hero"] & { eyebrow: string }) {
    return (
        <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
            <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" />
            <div className="pointer-events-none absolute left-1/2 top-[-280px] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_180deg,rgba(139,92,246,0.35),rgba(34,211,238,0.25),rgba(139,92,246,0.05),rgba(139,92,246,0.35))] opacity-60 blur-[120px]" />

            <div className="container relative mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <Reveal>
                        <Link href="/#disenos" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                            <ArrowLeft className="h-4 w-4" /> Volver a todos los rubros
                        </Link>
                    </Reveal>
                    <Reveal delay={0.05} className="mt-6">
                        <Eyebrow>{eyebrow}</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="mt-6 text-balance text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-[80px]">
                            {text}
                            <br />
                            <Serif className="text-brand pr-2">{accent}</Serif>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">{subtitle}</p>
                    </Reveal>
                    <Reveal delay={0.2} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <CtaButton href="#agendar" className="h-14 w-full px-8 text-base sm:w-auto">
                            {cta}
                        </CtaButton>
                        <CtaButton href="#demo" variant="ghost" arrow={false} className="h-14 w-full px-8 text-base sm:w-auto">
                            Ver la demo
                        </CtaButton>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                            {[
                                { icon: Wallet, text: `USD ${site.price}, pago único` },
                                { icon: Timer, text: `Online en ${site.deliveryDays} días hábiles` },
                                { icon: ShieldCheck, text: "Garantía de devolución" },
                            ].map(({ icon: Icon, text: t }) => (
                                <li key={t} className="flex items-center gap-2">
                                    <Icon className="h-4 w-4 text-cyan" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function Demo({ url, landing, subtitle, title, screenBg }: RubroConfig["demo"]) {
    return (
        <section id="demo" className="relative scroll-mt-20 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="Demo en vivo"
                    title={
                        <>
                            {title?.text ?? "Así se vería"} <Serif className="text-brand">{title?.accent ?? "tu web."}</Serif>
                        </>
                    }
                    subtitle={subtitle}
                />
                <Reveal delay={0.1} className="mx-auto mt-14 max-w-6xl">
                    <DeviceDemo url={url} screenBg={screenBg}>
                        {landing}
                    </DeviceDemo>
                </Reveal>
            </div>
        </section>
    );
}

function Problem({ text, accent, items }: RubroConfig["problem"]) {
    return (
        <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="El problema"
                    title={
                        <>
                            {text} <Serif className="text-brand">{accent}</Serif>
                        </>
                    }
                />
                <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-3">
                    {items.map(({ icon: Icon, title, text: t }, i) => (
                        <Reveal key={title} delay={i * 0.08} className="rounded-3xl border border-white/[0.08] bg-surface p-7">
                            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#ff5f57]/10">
                                <Icon className="h-5 w-5 text-[#ff8a80]" />
                            </span>
                            <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{t}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Benefits({ text, accent, subtitle, items }: RubroConfig["benefits"]) {
    return (
        <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="Qué incluye"
                    title={
                        <>
                            {text} <Serif className="text-brand">{accent}</Serif>
                        </>
                    }
                    subtitle={subtitle ?? `Todo esto viene incluido en los USD ${site.price}. Sin mensualidades.`}
                />
                <div className="mx-auto mt-14 grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
                    {items.map(({ icon: Icon, title, text: t }, i) => (
                        <Reveal key={title} delay={(i % 4) * 0.05} className="bg-surface p-6 md:p-7">
                            <Icon className="h-5 w-5 text-cyan" />
                            <h3 className="mt-4 text-[17px] font-semibold tracking-tight">{title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Calculator({ text, accent, subtitle, node, note }: RubroConfig["calculator"]) {
    return (
        <section id="calculadora" className="relative py-16 md:py-24">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="Calculadora"
                    title={
                        <>
                            {text} <Serif className="text-brand">{accent}</Serif>
                        </>
                    }
                    subtitle={subtitle}
                />
                <Reveal delay={0.1} className="mx-auto mt-14 max-w-5xl">
                    {node}
                    <p className="mt-4 text-center text-xs text-muted-foreground">{note}</p>
                </Reveal>
            </div>
        </section>
    );
}

function Steps({ steps }: { steps: { day: string; title: string; text: string }[] }) {
    return (
        <section className="relative py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
                    {steps.map((s, i) => (
                        <Reveal key={s.title} delay={i * 0.08} className="relative rounded-3xl border border-white/[0.08] bg-surface p-7">
                            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">{s.day}</p>
                            <h3 className="mt-2 text-2xl font-semibold tracking-tight">{s.title}</h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
                            <span className="absolute right-6 top-6 font-serif text-5xl italic text-white/[0.06]">{i + 1}</span>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FinalCta({ text, accent, body, whatsappMessage }: RubroConfig["cta"]) {
    return (
        <section className="relative px-4 py-16 md:py-24">
            <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-surface px-6 py-16 text-center md:py-24">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.35),transparent_60%)]" />
                <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />
                <div className="relative">
                    <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
                        {text} <Serif className="text-brand">{accent}</Serif>
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">{body}</p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <CtaButton href="#agendar" className="h-14 w-full px-8 text-base sm:w-auto">
                            Agendar llamada gratis
                        </CtaButton>
                        <CtaButton href={whatsappLink(whatsappMessage)} external variant="ghost" arrow={false} className="h-14 w-full px-8 text-base sm:w-auto">
                            <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
                        </CtaButton>
                    </div>
                    <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Quedan {site.spotsLeft} cupos este mes</p>
                </div>
            </Reveal>
        </section>
    );
}
