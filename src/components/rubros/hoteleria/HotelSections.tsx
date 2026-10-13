import Link from "next/link";
import {
    ArrowLeft,
    BadgePercent,
    CalendarSearch,
    Contact,
    Gauge,
    Images,
    MapPin,
    MessageCircle,
    Search,
    ShieldCheck,
    Star,
    Store,
    Target,
    Timer,
    Wallet,
} from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { CtaButton, Eyebrow, Reveal, SectionHeading, Serif } from "@/components/landing/ui";
import { DeviceDemo } from "../DeviceDemo";
import { HotelLanding } from "./HotelLanding";
import { SavingsCalculator } from "./SavingsCalculator";

const hotelWhatsapp = whatsappLink("¡Hola Axeliron! Tengo un hotel y quiero una landing para recibir reservas directas. ¿Hablamos?");

export function HotelHero() {
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
                        <Eyebrow>Landing para hoteles</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="mt-6 text-balance text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-[80px]">
                            Más reservas directas.
                            <br />
                            <Serif className="text-brand pr-2">Cero comisiones.</Serif>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                            Booking, Expedia y Airbnb se quedan con una parte de cada reserva. Te hacemos una web que convierte a tus visitas en
                            huéspedes que <span className="font-medium text-foreground">reservan directo con vos</span>: online en {site.deliveryDays} días, por USD{" "}
                            {site.price}.
                        </p>
                    </Reveal>
                    <Reveal delay={0.2} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <CtaButton href="#agendar" className="h-14 w-full px-8 text-base sm:w-auto">
                            Quiero la landing para mi hotel
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
                            ].map(({ icon: Icon, text }) => (
                                <li key={text} className="flex items-center gap-2">
                                    <Icon className="h-4 w-4 text-cyan" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export function HotelDemo() {
    return (
        <section id="demo" className="relative scroll-mt-20 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="Demo en vivo"
                    title={
                        <>
                            Así se vería <Serif className="text-brand">la web de tu hotel.</Serif>
                        </>
                    }
                    subtitle="Una landing de ejemplo para un hotel boutique ficticio, diseñada por nuestro equipo. La tuya se hace a medida, con tus fotos, tu tono y tus habitaciones."
                />
                <Reveal delay={0.1} className="mx-auto mt-14 max-w-6xl">
                    <DeviceDemo url="casaalerce.com">
                        <HotelLanding />
                    </DeviceDemo>
                </Reveal>
            </div>
        </section>
    );
}

const problems = [
    {
        icon: Search,
        title: "Pagás comisión por huéspedes que ya te buscaban",
        text: "Mucha gente busca tu hotel por nombre, no encuentra una web clara y termina reservando por la plataforma. Esa comisión la pagás vos.",
    },
    {
        icon: Contact,
        title: "El huésped queda en manos de la plataforma",
        text: "Sin sus datos no podés volver a contactarlo para la próxima temporada. Cada reserva repetida vuelve a pagar comisión.",
    },
    {
        icon: Store,
        title: "Competís en una vidriera llena de otros hoteles",
        text: "En las plataformas te muestran al lado de tu competencia, ordenados por precio. En tu web, el único hotel sos vos.",
    },
];

export function HotelProblem() {
    return (
        <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="El problema"
                    title={
                        <>
                            Llenás habitaciones, <Serif className="text-brand">pero no te quedás con todo.</Serif>
                        </>
                    }
                />
                <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-3">
                    {problems.map(({ icon: Icon, title, text }, i) => (
                        <Reveal key={title} delay={i * 0.08} className="rounded-3xl border border-white/[0.08] bg-surface p-7">
                            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#ff5f57]/10">
                                <Icon className="h-5 w-5 text-[#ff8a80]" />
                            </span>
                            <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

const benefits = [
    { icon: CalendarSearch, title: "Buscador de disponibilidad", text: "El huésped elige fechas y personas, y la consulta te llega directo al WhatsApp. Si ya usás un motor de reservas, lo conectamos." },
    { icon: BadgePercent, title: "Mejor precio reservando directo", text: "Un beneficio visible (descuento, late check-out, desayuno) que le da una razón para no volver a la plataforma." },
    { icon: Images, title: "Habitaciones que se venden solas", text: "Fotos, precios desde y un botón de reserva en cada habitación. Cero dudas, cero fricción." },
    { icon: Star, title: "Opiniones que generan confianza", text: "Mostramos tus mejores reseñas y tu puntaje para que el huésped se decida sin salir de tu web." },
    { icon: MapPin, title: "Ubicación y cómo llegar", text: "Mapa, distancias a los puntos clave y todo lo que el viajero necesita para elegirte." },
    { icon: Target, title: "Lista para campañas", text: "Meta Pixel y Google Analytics para hacer remarketing a quien visitó tu web y no reservó." },
    { icon: Contact, title: "Tus huéspedes, tus datos", text: "Cada consulta te deja nombre y contacto. Base propia para promociones y temporadas bajas." },
    { icon: Gauge, title: "Rápida y pensada para celular", text: "Carga en menos de un segundo, porque la mayoría de los viajeros reserva desde el teléfono." },
];

export function HotelBenefits() {
    return (
        <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="Qué incluye"
                    title={
                        <>
                            Una web que trabaja <Serif className="text-brand">como tu mejor recepcionista.</Serif>
                        </>
                    }
                    subtitle={`Todo esto viene incluido en los USD ${site.price}. Sin mensualidades y sin comisiones por reserva.`}
                />
                <div className="mx-auto mt-14 grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map(({ icon: Icon, title, text }, i) => (
                        <Reveal key={title} delay={(i % 4) * 0.05} className="bg-surface p-6 md:p-7">
                            <Icon className="h-5 w-5 text-cyan" />
                            <h3 className="mt-4 text-[17px] font-semibold tracking-tight">{title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function HotelCalculator() {
    return (
        <section id="calculadora" className="relative py-16 md:py-24">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="Calculadora"
                    title={
                        <>
                            ¿Cuánto le estás dejando <Serif className="text-brand">a las plataformas?</Serif>
                        </>
                    }
                    subtitle="Mové los valores con los números de tu hotel y mirá cuánto podrías ahorrar pasando parte de tus reservas a tu propia web."
                />
                <Reveal delay={0.1} className="mx-auto mt-14 max-w-5xl">
                    <SavingsCalculator />
                    <p className="mt-4 text-center text-xs text-muted-foreground">
                        Es una estimación con tus propios números. La comisión real depende de cada plataforma y de tu plan.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

const steps = [
    { day: "Día 1", title: "Llamada", text: "Nos contás de tu hotel, tus habitaciones y tu huésped ideal." },
    { day: "Días 2 – 6", title: "Diseño + desarrollo", text: `Escribimos los textos, diseñamos y programamos. Tenés ${site.revisions} rondas de cambios.` },
    { day: `Día ${site.deliveryDays}`, title: "Online", text: "La publicamos en tu dominio y empezás a recibir consultas directas." },
];

export function HotelSteps() {
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

export function HotelCTA() {
    return (
        <section className="relative px-4 py-16 md:py-24">
            <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-surface px-6 py-16 text-center md:py-24">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.35),transparent_60%)]" />
                <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />
                <div className="relative">
                    <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
                        Tu próximo huésped ya te está buscando. <Serif className="text-brand">Que reserve con vos.</Serif>
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                        Una sola inversión de USD {site.price}. Cada reserva directa después es margen que antes se iba en comisiones.
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <CtaButton href="#agendar" className="h-14 w-full px-8 text-base sm:w-auto">
                            Agendar llamada gratis
                        </CtaButton>
                        <CtaButton href={hotelWhatsapp} external variant="ghost" arrow={false} className="h-14 w-full px-8 text-base sm:w-auto">
                            <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
                        </CtaButton>
                    </div>
                    <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Quedan {site.spotsLeft} cupos este mes</p>
                </div>
            </Reveal>
        </section>
    );
}
