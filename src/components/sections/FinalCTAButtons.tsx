"use client";

import { useSearchParams } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function FinalCTAButtons() {
    const searchParams = useSearchParams();
    const selectedPlan = searchParams?.get("plan")?.trim() ?? "";

    const whatsappMessage = encodeURIComponent(
        selectedPlan
            ? `Hola! Me interesa el plan ${selectedPlan} de Axeliron para crear mi landing page. ¿Podemos hablar?`
            : "Hola! Me interesa crear una landing page con Axeliron. ¿Podemos hablar?"
    );

    return (
        <>
            <a
                id="final-cta-whatsapp"
                href={`https://wa.me/5491136515953?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className={cn(
                    buttonVariants({ size: "lg" }),
                    "group h-14 px-8 rounded-xl font-bold text-base bg-green-500 hover:bg-green-600 text-white shadow-2xl shadow-green-500/20 border-0"
                )}
            >
                <MessageCircle className="mr-2 h-5 w-5" />
                Escribinos por WhatsApp
            </a>
            <a
                id="final-cta-call"
                href="https://calendly.com/axeliron/reunion-axeliron-team"
                target="_blank"
                rel="noreferrer"
                className={cn(
                    buttonVariants({ variant: "premium", size: "lg" }),
                    "group h-14 px-8 rounded-xl font-bold text-base shadow-2xl shadow-primary/20"
                )}
            >
                <Phone className="mr-2 h-5 w-5" />
                Agendá una llamada
            </a>
        </>
    );
}
