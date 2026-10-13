"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { CalculatorShell, Money, Slider, plural } from "../Calculator";

/** Cuántas ventas suma una página de venta que convierte mejor. */
export function CourseCalculator() {
    const [visits, setVisits] = useState(3000);
    const [conv, setConv] = useState(1);
    const [newConv, setNewConv] = useState(2);
    const [price, setPrice] = useState(97);

    const salesToday = visits * (conv / 100);
    const salesNew = visits * (newConv / 100);
    const extraSales = Math.max(0, salesNew - salesToday);
    const extra = extraSales * price;
    const toPayback = Math.max(1, Math.ceil(site.price / price));

    return (
        <CalculatorShell
            before={{ label: "Lo que vende tu página hoy", value: salesToday * price, suffix: " /mes", strike: false }}
            main={{ label: "Ventas extra con una página que convierte", value: extra, suffix: " /mes" }}
            secondary={
                <>
                    <Money value={extra * 12} /> <span className="text-muted-foreground">al año · {Math.round(extraSales)} alumnos más por mes</span>
                </>
            }
            payback={
                <>
                    Con <b className="text-lime">{plural(toPayback, "venta", "ventas")}</b> tu landing de <b>USD {site.price}</b> ya se pagó.
                </>
            }
            ctaLabel="Quiero vender más mi curso"
        >
            <Slider label="Visitas por mes a tu página de venta" value={visits} min={200} max={50000} step={100} onChange={setVisits} format={(v) => v.toLocaleString("es-AR")} />
            <Slider label="Conversión actual" value={conv} min={0.2} max={10} step={0.1} onChange={setConv} format={(v) => `${v.toFixed(1)}%`} />
            <Slider label="Conversión con una landing optimizada" value={newConv} min={0.2} max={15} step={0.1} onChange={setNewConv} format={(v) => `${v.toFixed(1)}%`} />
            <Slider label="Precio de tu curso" value={price} min={10} max={1000} step={1} onChange={setPrice} format={(v) => `USD ${v}`} />
        </CalculatorShell>
    );
}
