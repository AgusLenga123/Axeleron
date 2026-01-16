"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, RefreshCw } from "lucide-react";
import { useEffect } from "react";

interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
    service?: string;
}

export function Contact() {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>();

    // Listen for custom event from services section
    useEffect(() => {
        const handleServiceSelect = (event: CustomEvent<string>) => {
            const detail = event.detail;
            if (detail.startsWith("Pack:")) {
                const packName = detail.replace("Pack: ", "");
                setValue("service", "Paquete Estratégico");
                setValue("message", `Hola, estoy interesado en contratar el ${detail}. Me gustaría más información sobre el proceso de implementación y tiempos estimado para una ${packName}.`);
            } else {
                setValue("service", detail);
                setValue("message", `Hola, estoy interesado en el servicio de: ${detail}. Me gustaría agendar una reunión para conocer más detalles.`);
            }
        };

        window.addEventListener('selectService', handleServiceSelect as EventListener);
        return () => {
            window.removeEventListener('selectService', handleServiceSelect as EventListener);
        };
    }, [setValue]);

    const onSubmit = (data: FormData) => {
        console.log(data);
        alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
        reset();
    };

    return (
        <section id="contacto" className="py-24 bg-background relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Hablemos de tu <span className="text-primary">Próximo Proyecto</span> 🚀
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        ¿Listo para escalar tu negocio? Dejanos tus datos y un especialista te contactará para agendar una consultoría GRATUITA.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                                <Mail className="text-primary" />
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground">Email</div>
                                <div className="font-semibold">hola@axeleron.ar</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                                <Phone className="text-primary" />
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground">Teléfono / WhatsApp</div>
                                <div className="font-semibold">+54 9 11 5055 2525</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                                <MapPin className="text-primary" />
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground">Oficinas</div>
                                <div className="font-semibold">Martinez, Provincia de Buenos Aires</div>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-secondary/20 p-8 rounded-2xl border border-border backdrop-blur-sm relative"
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => reset()}
                        className="absolute top-4 right-4 text-muted-foreground hover:text-white"
                        title="Borrar formulario"
                    >
                        <RefreshCw className="w-4 h-4" />
                    </Button>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nombre</Label>
                                <Input
                                    id="name"
                                    placeholder="Tu nombre"
                                    {...register("name", { required: true })}
                                    className={errors.name ? "border-red-500" : ""}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company">Empresa</Label>
                                <Input
                                    id="company"
                                    placeholder="Tu empresa"
                                    {...register("company")}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="tu@email.com"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                className={errors.email ? "border-red-500" : ""}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="service">Servicio de interés</Label>
                            <select
                                id="service"
                                {...register("service")}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="" className="bg-secondary text-white">Selecciona un servicio (opcional)</option>
                                <option value="Paquete Estratégico" className="bg-secondary text-white">🎉 Paquete Estratégico (Promo)</option>
                                <option value="Desarrollo Landing Pages" className="bg-secondary text-white">Desarrollo Landing Pages</option>
                                <option value="Aplicaciones Fullstack" className="bg-secondary text-white">Aplicaciones Fullstack</option>
                                <option value="Automatización & Agentes IA" className="bg-secondary text-white">Automatización & Agentes IA</option>
                                <option value="Chatbots 24/7" className="bg-secondary text-white">Chatbots 24/7</option>
                                <option value="Optimización SEO" className="bg-secondary text-white">Optimización SEO</option>
                                <option value="Branding & Diseño" className="bg-secondary text-white">Branding & Diseño</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Mensaje</Label>
                            <Textarea
                                id="message"
                                placeholder="¿Cómo podemos ayudarte?"
                                rows={4}
                                {...register("message", { required: true })}
                                className={errors.message ? "border-red-500" : ""}
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                            Enviar Mensaje
                            <Send className="w-4 h-4 ml-2" />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
