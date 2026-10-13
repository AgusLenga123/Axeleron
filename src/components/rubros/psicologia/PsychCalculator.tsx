"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { CalculatorShell, Slider, plural, usd } from "../Calculator";

/** Cuánto representa cada paciente nuevo y con cuántos se paga la landing. */
export function PsychCalculator() {
    const [fee, setFee] = useState(35);
    const [sessions, setSessions] = useState(16);
    const [patients, setPatients] = useState(2);

    const perPatient = fee * sessions;
    const yearly = perPatient * patients * 12;
    const toPayback = Math.max(1, Math.ceil(site.price / perPatient));

    return (
        <CalculatorShell
            main={{ label: "Lo que representan los pacientes nuevos de un año", value: yearly }}
            secondary={
                <>
                    Cada paciente nuevo son <b>{usd(perPatient)}</b> <span className="text-muted-foreground">a lo largo del tratamiento</span>
                </>
            }
            payback={
                <>
                    Con <b className="text-lime">{plural(toPayback, "paciente nuevo", "pacientes nuevos")}</b> tu landing de <b>USD {site.price}</b> ya se pagó.
                </>
            }
            ctaLabel="Quiero llenar mi agenda"
        >
            <Slider label="Valor de cada sesión" value={fee} min={15} max={120} step={5} onChange={setFee} format={(v) => `USD ${v}`} />
            <Slider label="Sesiones promedio por paciente" value={sessions} min={4} max={40} step={1} onChange={setSessions} format={(v) => `${v}`} />
            <Slider label="Pacientes nuevos extra por mes gracias a tu web" value={patients} min={1} max={10} step={1} onChange={setPatients} format={(v) => `${v}`} />
        </CalculatorShell>
    );
}
