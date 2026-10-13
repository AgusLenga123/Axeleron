"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { CalculatorShell, Slider, plural, usd } from "../Calculator";

/** Cuánto vale cada alumno nuevo y con cuántos se paga la landing. */
export function CoachCalculator() {
    const [price, setPrice] = useState(60);
    const [months, setMonths] = useState(4);
    const [students, setStudents] = useState(3);

    const perStudent = price * months;
    const yearly = perStudent * students * 12;
    const toPayback = Math.max(1, Math.ceil(site.price / perStudent));

    return (
        <CalculatorShell
            main={{ label: "Lo que te dejan los alumnos nuevos de un año", value: yearly }}
            secondary={
                <>
                    Cada alumno vale <b>{usd(perStudent)}</b> <span className="text-muted-foreground">en promedio</span>
                </>
            }
            payback={
                <>
                    Con <b className="text-lime">{plural(toPayback, "alumno nuevo", "alumnos nuevos")}</b> tu landing de <b>USD {site.price}</b> ya se pagó.
                </>
            }
            ctaLabel="Quiero más alumnos"
        >
            <Slider label="Precio mensual de tu plan" value={price} min={20} max={250} step={5} onChange={setPrice} format={(v) => `USD ${v}`} />
            <Slider label="Meses que se queda un alumno en promedio" value={months} min={1} max={12} step={1} onChange={setMonths} format={(v) => plural(v, "mes", "meses")} />
            <Slider label="Alumnos nuevos extra por mes gracias a tu web" value={students} min={1} max={20} step={1} onChange={setStudents} format={(v) => `${v}`} />
        </CalculatorShell>
    );
}
