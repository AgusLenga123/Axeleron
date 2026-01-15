"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date("2026-02-01T00:00:00");

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const units = [
        { label: "Días", value: timeLeft.days },
        { label: "Horas", value: timeLeft.hours },
        { label: "Minutos", value: timeLeft.minutes },
        { label: "Segundos", value: timeLeft.seconds }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4 mt-8"
        >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary animate-pulse">
                🔥 Descuento de inicio de año por tiempo limitado
            </p>
            <div className="flex gap-4 md:gap-8">
                {units.map((unit) => (
                    <div key={unit.label} className="flex flex-col items-center">
                        <div className="bg-secondary/40 backdrop-blur-sm border border-border/50 rounded-xl md:rounded-2xl p-3 md:p-6 min-w-[70px] md:min-w-[100px] shadow-lg shadow-primary/5">
                            <span className="text-2xl md:text-4xl font-bold font-heading tabular-nums bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                                {unit.value.toString().padStart(2, '0')}
                            </span>
                        </div>
                        <span className="text-[10px] md:text-xs uppercase tracking-tighter mt-2 text-muted-foreground font-medium">
                            {unit.label}
                        </span>
                    </div>
                ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
                Aprovechá los precios actuales hasta el 1 de Febrero
            </p>
        </motion.div>
    );
}
