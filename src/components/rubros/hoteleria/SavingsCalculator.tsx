"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { CalculatorShell, Money, Slider, plural } from "../Calculator";

/** Calculadora: cuánto se va en comisiones de OTAs y cuánto ahorrás pasando parte a reserva directa. */
export function SavingsCalculator() {
    const [bookings, setBookings] = useState(60);
    const [ticket, setTicket] = useState(250);
    const [commission, setCommission] = useState(18);
    const [direct, setDirect] = useState(30);

    const monthlyCommission = bookings * ticket * (commission / 100);
    const monthlySavings = monthlyCommission * (direct / 100);
    const paybackDays = monthlySavings > 0 ? Math.max(1, Math.ceil((site.price / monthlySavings) * 30)) : null;

    return (
        <CalculatorShell
            before={{ label: "Hoy pagás en comisiones", value: monthlyCommission, suffix: " /mes" }}
            main={{ label: "Con tu landing de reservas directas ahorrás", value: monthlySavings, suffix: " /mes" }}
            secondary={
                <>
                    <Money value={monthlySavings * 12} /> <span className="text-muted-foreground">al año</span>
                </>
            }
            payback={
                paybackDays !== null && (
                    <>
                        Tu landing de <b>USD {site.price}</b> se paga sola en <b className="text-lime">{plural(paybackDays, "día", "días")}</b>.
                    </>
                )
            }
            ctaLabel="Quiero dejar de pagar comisiones"
        >
            <Slider label="Reservas por mes que entran por Booking, Expedia o Airbnb" value={bookings} min={5} max={300} step={5} onChange={setBookings} format={(v) => `${v}`} />
            <Slider label="Valor promedio de cada estadía" value={ticket} min={50} max={1500} step={10} onChange={setTicket} format={(v) => `USD ${v}`} />
            <Slider label="Comisión que te cobra la plataforma" value={commission} min={10} max={30} step={1} onChange={setCommission} format={(v) => `${v}%`} />
            <Slider label="Reservas que pasás a tu web" value={direct} min={5} max={80} step={5} onChange={setDirect} format={(v) => `${v}%`} />
        </CalculatorShell>
    );
}
