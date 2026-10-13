"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { CalculatorShell, Money, Slider, plural } from "../Calculator";

/** Cuánto MRR suma mejorar la conversión de la web a prueba gratuita. */
export function SaasCalculator() {
    const [visits, setVisits] = useState(5000);
    const [conv, setConv] = useState(2);
    const [newConv, setNewConv] = useState(3.5);
    const [trialToPaid, setTrialToPaid] = useState(20);
    const [price, setPrice] = useState(49);

    const mrrToday = visits * (conv / 100) * (trialToPaid / 100) * price;
    const mrrNew = visits * (newConv / 100) * (trialToPaid / 100) * price;
    const extra = Math.max(0, mrrNew - mrrToday);
    const paybackDays = extra > 0 ? Math.max(1, Math.ceil((site.price / extra) * 30)) : null;

    return (
        <CalculatorShell
            before={{ label: "MRR nuevo que suma tu web hoy, cada mes", value: mrrToday, suffix: " /mes", strike: false }}
            main={{ label: "MRR extra que suma cada mes con una landing optimizada", value: extra, suffix: " /mes" }}
            secondary={
                <>
                    <Money value={extra * 12} /> <span className="text-muted-foreground">al año por cada mes de nuevas altas</span>
                </>
            }
            payback={
                paybackDays !== null ? (
                    <>
                        Tu landing de <b>USD {site.price}</b> se paga en <b className="text-lime">{plural(paybackDays, "día", "días")}</b>.
                    </>
                ) : (
                    <>Subí la conversión con la nueva landing para ver el impacto.</>
                )
            }
            ctaLabel="Quiero convertir más visitas"
        >
            <Slider label="Visitas por mes a tu web" value={visits} min={500} max={50000} step={500} onChange={setVisits} format={(v) => v.toLocaleString("es-AR")} />
            <Slider label="Conversión actual a prueba gratis" value={conv} min={0.5} max={10} step={0.5} onChange={setConv} format={(v) => `${v}%`} />
            <Slider label="Conversión con una landing optimizada" value={newConv} min={0.5} max={15} step={0.5} onChange={setNewConv} format={(v) => `${v}%`} />
            <Slider label="Pruebas que pasan a pago" value={trialToPaid} min={5} max={60} step={1} onChange={setTrialToPaid} format={(v) => `${v}%`} />
            <Slider label="Precio mensual por cliente" value={price} min={10} max={500} step={1} onChange={setPrice} format={(v) => `USD ${v}`} />
        </CalculatorShell>
    );
}
