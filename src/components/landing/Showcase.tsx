import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading, Serif } from "./ui";

/* Mini landings hechas 100% con CSS: muestran el rango de estilos que diseñamos. */

function CoachCard() {
    return (
        <div className="flex h-full flex-col bg-[#0f0f0f] p-5 text-white">
            <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest">
                <span>Ironmind</span>
                <span className="rounded-full bg-[#ff5a1f] px-2 py-0.5 text-black">Empezar</span>
            </div>
            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#ff5a1f]">Programa 12 semanas</p>
            <p className="mt-2 text-[38px] font-black uppercase leading-[0.85] tracking-tighter">
                Forjá tu
                <br />
                mejor
                <br />
                versión
            </p>
            <div className="mt-auto grid grid-cols-3 gap-1.5">
                {["-8kg", "+40%", "12 sem"].map((s) => (
                    <div key={s} className="rounded-md bg-white/5 py-2 text-center text-[11px] font-bold">
                        {s}
                    </div>
                ))}
            </div>
            <div className="mt-2 rounded-md bg-[#ff5a1f] py-2.5 text-center text-[10px] font-black uppercase tracking-wider text-black">
                Quiero mi plan
            </div>
        </div>
    );
}

function PsychCard() {
    return (
        <div className="flex h-full flex-col bg-[#f4efe7] p-5 text-[#3d3a33]">
            <div className="flex items-center justify-between text-[10px]">
                <span className="font-serif text-sm italic">Lic. Clara Ibáñez</span>
                <span className="text-[#3d3a33]/60">Sobre mí</span>
            </div>
            <div className="mx-auto mt-6 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_35%_30%,#e8d8c3,#b9a184)]" />
            <p className="mt-5 text-center font-serif text-[28px] leading-[1.05]">
                Volvé a sentirte
                <br />
                <span className="italic text-[#8a6f4e]">en calma.</span>
            </p>
            <p className="mx-auto mt-3 max-w-[200px] text-center text-[10px] leading-relaxed text-[#3d3a33]/65">
                Terapia online para ansiedad y estrés. Primera sesión de evaluación sin cargo.
            </p>
            <div className="mx-auto mt-auto rounded-full border border-[#3d3a33]/30 px-5 py-2 text-[10px]">Reservar sesión</div>
        </div>
    );
}

function RealEstateCard() {
    return (
        <div className="flex h-full flex-col bg-white p-4 text-[#111]">
            <div className="flex items-center justify-between text-[10px] font-semibold">
                <span className="tracking-tight">NORTE Propiedades</span>
                <span className="rounded bg-[#111] px-2 py-1 text-white">Tasar</span>
            </div>
            <div className="relative mt-4 h-36 overflow-hidden rounded-xl bg-[linear-gradient(160deg,#9ec5e8,#e9d5b5_60%,#7d8f6a)]">
                <div className="absolute bottom-0 left-6 h-16 w-24 bg-[#f7f4ee] [clip-path:polygon(0_35%,50%_0,100%_35%,100%_100%,0_100%)]" />
                <div className="absolute bottom-0 right-5 h-20 w-16 bg-[#e3ddd2]" />
            </div>
            <p className="mt-4 text-[22px] font-semibold leading-tight tracking-tight">Vendé tu casa en 60 días o no cobramos.</p>
            <div className="mt-auto flex items-center gap-2 rounded-lg border border-black/10 p-1.5 pl-3 text-[10px] text-black/50">
                Barrio, ambientes…
                <span className="ml-auto rounded-md bg-[#111] px-3 py-1.5 font-medium text-white">Buscar</span>
            </div>
        </div>
    );
}

function CafeCard() {
    return (
        <div className="flex h-full flex-col bg-[#2a1d16] p-5 text-[#f3e6d6]">
            <p className="text-center font-serif text-lg italic">Almacén Ceibo</p>
            <p className="text-center text-[8px] uppercase tracking-[0.3em] text-[#f3e6d6]/50">Café · Brunch · Pastelería</p>
            <div className="mx-auto mt-6 h-28 w-28 rounded-full border-[6px] border-[#f3e6d6]/10 bg-[radial-gradient(circle,#6b4429_30%,#3b2619_70%)]" />
            <p className="mt-6 text-center font-serif text-[26px] leading-tight">El mejor brunch de Belgrano</p>
            <div className="mt-auto space-y-1.5 text-[10px]">
                {[
                    ["Flat white", "$3.200"],
                    ["Tostado de masa madre", "$5.900"],
                ].map(([a, b]) => (
                    <div key={a} className="flex justify-between border-b border-dashed border-[#f3e6d6]/15 pb-1">
                        <span>{a}</span>
                        <span className="text-[#e3a86b]">{b}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SaasCard() {
    return (
        <div className="flex h-full flex-col bg-[#05060f] p-5 text-white">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold">
                <span className="h-3 w-3 rounded bg-gradient-to-br from-[#4f7cff] to-[#00e0b8]" /> Flujo
            </div>
            <p className="mx-auto mt-6 rounded-full border border-white/10 px-2.5 py-0.5 text-[8px] text-white/60">Nuevo: automatizaciones con IA</p>
            <p className="mt-3 text-center text-[24px] font-semibold leading-[1.05] tracking-tight">
                Tu equipo, el doble
                <br />
                <span className="bg-gradient-to-r from-[#4f7cff] to-[#00e0b8] bg-clip-text text-transparent">de productivo.</span>
            </p>
            <div className="mt-5 flex-1 rounded-t-xl border border-b-0 border-white/10 bg-white/[0.03] p-2.5">
                <div className="flex items-end gap-1 pt-6">
                    {[30, 45, 38, 60, 52, 75, 90].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-[#4f7cff]/40 to-[#00e0b8]" style={{ height: h * 0.9 }} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function LawCard() {
    return (
        <div className="flex h-full flex-col bg-[#0d1b2a] p-5 text-[#e9e4d8]">
            <div className="flex items-center justify-between border-b border-[#c8a96a]/30 pb-3 text-[10px]">
                <span className="font-serif text-sm">Ferrari &amp; Asoc.</span>
                <span className="text-[#c8a96a]">Consulta</span>
            </div>
            <p className="mt-8 text-[9px] uppercase tracking-[0.3em] text-[#c8a96a]">Derecho laboral</p>
            <p className="mt-2 font-serif text-[30px] leading-[1.02]">
                Defendemos lo que
                <br />
                <span className="italic">te corresponde.</span>
            </p>
            <p className="mt-3 text-[10px] leading-relaxed text-[#e9e4d8]/60">Más de 1.500 casos ganados. Solo cobramos si ganás.</p>
            <div className="mt-auto bg-[#c8a96a] py-2.5 text-center text-[10px] font-semibold uppercase tracking-wider text-[#0d1b2a]">
                Consulta gratuita
            </div>
        </div>
    );
}

function CourseCard() {
    return (
        <div className="flex h-full flex-col bg-[#5b21b6] p-5 text-white">
            <span className="w-fit -rotate-2 bg-[#facc15] px-2 py-0.5 text-[10px] font-black uppercase text-black">Cupos limitados</span>
            <p className="mt-5 text-[30px] font-black leading-[0.95] tracking-tight">
                Aprendé a editar videos que <span className="text-[#facc15]">se hacen virales.</span>
            </p>
            <div className="mt-5 grid grid-cols-4 gap-1.5">
                {[
                    ["02", "días"],
                    ["14", "hs"],
                    ["36", "min"],
                    ["09", "seg"],
                ].map(([n, u]) => (
                    <div key={u} className="rounded-md bg-black/25 py-1.5 text-center">
                        <p className="text-sm font-black">{n}</p>
                        <p className="text-[8px] uppercase text-white/60">{u}</p>
                    </div>
                ))}
            </div>
            <div className="mt-auto rounded-full bg-[#facc15] py-2.5 text-center text-[11px] font-black text-black">Inscribirme ahora →</div>
        </div>
    );
}

function HotelCard() {
    return (
        <div className="flex h-full flex-col bg-[#f3efe6] text-[#1f2a24]">
            <div className="relative h-44 overflow-hidden">
                <MountainLake />
                <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[10px] font-medium text-white">
                    <span className="font-serif text-sm italic">Casa Alerce</span>
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-[#1f2a24]">Reservar</span>
                </div>
            </div>
            <div className="flex flex-1 flex-col p-4">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#6b7f62]">Hotel boutique · Bariloche</p>
                <p className="mt-1.5 font-serif text-[24px] leading-[1.05]">
                    Despertá frente
                    <br />
                    <span className="italic text-[#4f6b4a]">al lago.</span>
                </p>
                <div className="mt-auto grid grid-cols-3 gap-1 rounded-lg border border-[#1f2a24]/10 bg-white p-1.5 text-[9px]">
                    <span className="rounded bg-[#f3efe6] px-1.5 py-1">12 ene</span>
                    <span className="rounded bg-[#f3efe6] px-1.5 py-1">15 ene</span>
                    <span className="rounded bg-[#1f2a24] px-1.5 py-1 text-center text-white">Ver</span>
                </div>
                <p className="mt-2 text-center text-[9px] text-[#4f6b4a]">-10% reservando directo</p>
            </div>
        </div>
    );
}

/** Paisaje de lago y montañas en SVG (se reutiliza en la demo del rubro hotelero). */
export function MountainLake({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className={className ?? "absolute inset-0 h-full w-full"} aria-hidden>
            <defs>
                <linearGradient id="ml-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#f6c89f" />
                    <stop offset="0.55" stopColor="#e9a07f" />
                    <stop offset="1" stopColor="#9fb5c9" />
                </linearGradient>
                <linearGradient id="ml-lake" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#6f8fa8" />
                    <stop offset="1" stopColor="#2f4a5c" />
                </linearGradient>
            </defs>
            <rect width="400" height="240" fill="url(#ml-sky)" />
            <circle cx="300" cy="70" r="22" fill="#fde8c8" opacity="0.9" />
            <path d="M0 150 L60 95 L105 130 L165 70 L230 135 L280 100 L340 140 L400 105 L400 160 L0 160Z" fill="#6c7f8f" />
            <path d="M150 82 L165 70 L180 84 L172 82 L165 88 L158 82Z" fill="#f4f1ea" />
            <path d="M0 165 L50 130 L110 160 L170 120 L240 162 L300 135 L360 158 L400 140 L400 170 L0 170Z" fill="#3f5546" />
            <rect y="166" width="400" height="74" fill="url(#ml-lake)" />
            <path d="M0 175 H400 M30 190 H180 M220 186 H380 M60 205 H260" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
        </svg>
    );
}

type Design = { label: string; style: string; Comp: () => React.JSX.Element; href?: string };

// Los rubros con `href` tienen su propia página de caso en /rubros/<slug>.
const designs: Design[] = [
    { label: "Hotelería", style: "Natural & premium", Comp: HotelCard, href: "/rubros/hoteleria/" },
    { label: "Coach fitness", style: "Bold & enérgico", Comp: CoachCard, href: "/rubros/coach-fitness/" },
    { label: "Psicología", style: "Cálido & editorial", Comp: PsychCard, href: "/rubros/psicologia/" },
    { label: "SaaS", style: "Tech & gradientes", Comp: SaasCard, href: "/rubros/saas/" },
    { label: "Inmobiliaria", style: "Limpio & confiable", Comp: RealEstateCard, href: "/rubros/inmobiliaria/" },
    { label: "Estudio jurídico", style: "Clásico & premium", Comp: LawCard, href: "/rubros/estudio-juridico/" },
    { label: "Gastronomía", style: "Artesanal & cálido", Comp: CafeCard, href: "/rubros/gastronomia/" },
    { label: "Curso online", style: "Urgencia & venta", Comp: CourseCard, href: "/rubros/cursos-online/" },
];

export function Showcase() {
    return (
        <section id="disenos" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
            <div className="container mx-auto px-4">
                <SectionHeading
                    eyebrow="Diseños"
                    title={
                        <>
                            Nada de plantillas. <Serif className="text-brand">Diseño a tu medida.</Serif>
                        </>
                    }
                    subtitle="Cada negocio tiene su tono. Estos son conceptos creados por nuestro equipo para mostrar el rango de estilos que podemos hacer para vos."
                />
            </div>

            <div className="mask-fade-x mt-16 flex overflow-hidden">
                <div className="flex shrink-0 animate-marquee-slow gap-6 pr-6 hover:[animation-play-state:paused]">
                    {[...designs, ...designs].map((d, i) => (
                        <DesignCard key={i} {...d} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function DesignCard({ label, style, Comp, href }: Design) {
    const card = (
        <>
            <div className="relative h-[380px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:-translate-y-2 sm:h-[420px]">
                <Comp />
                {href && (
                    <span className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-center gap-1.5 rounded-full bg-black/75 py-2.5 text-sm font-medium text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        Ver caso completo <ArrowUpRight className="h-4 w-4" />
                    </span>
                )}
            </div>
            <figcaption className="mt-4 flex items-center justify-between px-1 text-sm">
                <span className="flex items-center gap-2 font-medium">
                    {label}
                    {href && <span className="rounded-full bg-cyan/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan">Ver caso</span>}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">{style}</span>
            </figcaption>
        </>
    );

    return href ? (
        <Link href={href} className="group block w-[260px] shrink-0 sm:w-[290px]" aria-label={`Ver caso: landing para ${label}`}>
            <figure>{card}</figure>
        </Link>
    ) : (
        <figure className="group w-[260px] shrink-0 sm:w-[290px]">{card}</figure>
    );
}
