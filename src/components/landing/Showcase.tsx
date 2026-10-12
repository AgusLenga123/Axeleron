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

const designs = [
    { label: "Coach fitness", style: "Bold & enérgico", Comp: CoachCard },
    { label: "Psicóloga", style: "Cálido & editorial", Comp: PsychCard },
    { label: "SaaS", style: "Tech & gradientes", Comp: SaasCard },
    { label: "Inmobiliaria", style: "Limpio & confiable", Comp: RealEstateCard },
    { label: "Estudio jurídico", style: "Clásico & premium", Comp: LawCard },
    { label: "Cafetería", style: "Artesanal & cálido", Comp: CafeCard },
    { label: "Curso online", style: "Urgencia & venta", Comp: CourseCard },
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
                    {[...designs, ...designs].map(({ label, style, Comp }, i) => (
                        <figure key={i} className="group w-[260px] shrink-0 sm:w-[290px]">
                            <div className="h-[380px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:-translate-y-2 sm:h-[420px]">
                                <Comp />
                            </div>
                            <figcaption className="mt-4 flex items-center justify-between px-1 text-sm">
                                <span className="font-medium">{label}</span>
                                <span className="font-mono text-[11px] text-muted-foreground">{style}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
