"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { CalculatorShell, Money, Slider, plural } from "../Calculator";

/** Cuánto se va en comisiones de apps de delivery y cuánto se ahorra con pedidos directos. */
export function CafeCalculator() {
    const [orders, setOrders] = useState(400);
    const [ticket, setTicket] = useState(15);
    const [commission, setCommission] = useState(25);
    const [direct, setDirect] = useState(25);

    const monthlyCommission = orders * ticket * (commission / 100);
    const monthlySavings = monthlyCommission * (direct / 100);
    const paybackDays = monthlySavings > 0 ? Math.max(1, Math.ceil((site.price / monthlySavings) * 30)) : null;

    return (
        <CalculatorShell
            before={{ label: "Hoy pagás en comisiones de apps", value: monthlyCommission, suffix: " /mes" }}
            main={{ label: "Con pedidos directos desde tu web ahorrás", value: monthlySavings, suffix: " /mes" }}
            secondary={
                <>
                    <Money value={monthlySavings * 12} /> <span className="text-muted-foreground">al año</span>
                </>
            }
            payback={
                paybackDays !== null && (
                    <>
                        Tu web de <b>USD {site.price}</b> se paga sola en <b className="text-lime">{plural(paybackDays, "día", "días")}</b>.
                    </>
                )
            }
            ctaLabel="Quiero pedidos sin comisiones"
        >
            <Slider label="Pedidos por mes en apps de delivery" value={orders} min={20} max={3000} step={10} onChange={setOrders} format={(v) => v.toLocaleString("es-AR")} />
            <Slider label="Ticket promedio por pedido" value={ticket} min={5} max={60} step={1} onChange={setTicket} format={(v) => `USD ${v}`} />
            <Slider label="Comisión que te cobra la app" value={commission} min={10} max={35} step={1} onChange={setCommission} format={(v) => `${v}%`} />
            <Slider label="Pedidos que pasás a tu web o WhatsApp" value={direct} min={5} max={80} step={5} onChange={setDirect} format={(v) => `${v}%`} />
        </CalculatorShell>
    );
}
