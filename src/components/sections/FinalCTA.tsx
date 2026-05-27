import { Suspense } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";
import { FinalCTAButtons } from "@/components/sections/FinalCTAButtons";

export function FinalCTA() {
    return (
        <section id="contacto" className="py-16 bg-secondary/10 relative overflow-hidden">
            <GridBackground opacity={0.025} size={60} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-6">
                        ¿Listo para arrancar?
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                        Tu landing puede estar{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500">online en 7 días</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                        Cada día que pasa sin una landing optimizada es un día que perdés leads potenciales. La conversación inicial es gratis y sin compromiso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Suspense fallback={null}>
                            <FinalCTAButtons />
                        </Suspense>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        {[
                            { icon: Send, text: "Respuesta en menos de 24 hs" },
                            { icon: Phone, text: "Llamada sin compromiso" },
                            { icon: MessageCircle, text: "Atención personalizada" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
