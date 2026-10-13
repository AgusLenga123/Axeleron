const niches = [
    "Hoteles",
    "Coaches",
    "Clínicas",
    "Odontólogos",
    "Psicólogos",
    "Estudios jurídicos",
    "Inmobiliarias",
    "Gimnasios",
    "Consultores",
    "Restaurantes",
    "Ecommerce",
    "Cursos online",
    "Startups",
];

export function Marquee() {
    return (
        <section aria-label="Rubros con los que trabajamos" className="border-y border-white/[0.06] bg-surface/50 py-6">
            <div className="mask-fade-x flex overflow-hidden">
                <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 hover:[animation-play-state:paused]">
                    {[...niches, ...niches].map((n, i) => (
                        <span key={i} className="flex items-center gap-10 whitespace-nowrap text-lg text-white/45 md:text-xl">
                            <span className={i % 3 === 1 ? "font-serif italic text-white/70" : "font-medium tracking-tight"}>{n}</span>
                            <span className="text-cyan/50">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
