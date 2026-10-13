"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { CalculatorShell, Slider, usd } from "../Calculator";

/** Cuánto dejan en comisiones las operaciones extra que trae la web. */
export function RealEstateCalculator() {
    const [value, setValue] = useState(150000);
    const [commission, setCommission] = useState(3);
    const [deals, setDeals] = useState(2);

    const perDeal = value * (commission / 100);
    const times = Math.floor(perDeal / site.price);

    return (
        <CalculatorShell
            main={{ label: "Comisiones extra por año", value: perDeal * deals }}
            secondary={
                <>
                    Cada operación te deja <b>{usd(Math.round(perDeal))}</b>
                </>
            }
            payback={
                <>
                    Con <b className="text-lime">una sola operación</b> pagás tu landing de <b>USD {site.price}</b>
                    {times > 1 && <> {times.toLocaleString("es-AR")} veces</>}.
                </>
            }
            ctaLabel="Quiero más captaciones"
        >
            <Slider
                label="Valor promedio de las propiedades que operás"
                value={value}
                min={50000}
                max={1000000}
                step={10000}
                onChange={setValue}
                format={(v) => `USD ${v.toLocaleString("es-AR")}`}
            />
            <Slider label="Tu comisión por operación" value={commission} min={1} max={6} step={0.5} onChange={setCommission} format={(v) => `${v}%`} />
            <Slider label="Operaciones extra por año gracias a tu web" value={deals} min={1} max={12} step={1} onChange={setDeals} format={(v) => `${v}`} />
        </CalculatorShell>
    );
}
