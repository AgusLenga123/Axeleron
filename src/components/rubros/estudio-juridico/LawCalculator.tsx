"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { CalculatorShell, Slider, plural, usd } from "../Calculator";

/** Cuánto suman los casos nuevos que trae la web y con cuántos se paga. */
export function LawCalculator() {
    const [fee, setFee] = useState(2500);
    const [cases, setCases] = useState(2);

    const toPayback = Math.max(1, Math.ceil(site.price / fee));

    return (
        <CalculatorShell
            main={{ label: "Honorarios extra por año", value: fee * cases * 12 }}
            secondary={
                <>
                    Cada caso nuevo te deja <b>{usd(fee)}</b> <span className="text-muted-foreground">en promedio</span>
                </>
            }
            payback={
                <>
                    Con <b className="text-lime">{plural(toPayback, "caso nuevo", "casos nuevos")}</b> tu web de <b>USD {site.price}</b> ya se pagó.
                </>
            }
            ctaLabel="Quiero más consultas"
        >
            <Slider label="Honorarios promedio por caso" value={fee} min={300} max={20000} step={100} onChange={setFee} format={(v) => `USD ${v.toLocaleString("es-AR")}`} />
            <Slider label="Casos nuevos extra por mes gracias a tu web" value={cases} min={1} max={10} step={1} onChange={setCases} format={(v) => `${v}`} />
        </CalculatorShell>
    );
}
