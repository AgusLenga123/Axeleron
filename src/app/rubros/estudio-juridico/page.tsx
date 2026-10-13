import type { Metadata } from "next";
import { Award, Clock, FileText, Gauge, Lock, Scale, Search, Star, UserX, Users } from "lucide-react";
import { site } from "@/lib/site";
import { RubroTemplate, type RubroConfig } from "@/components/rubros/RubroTemplate";
import { LawLanding } from "@/components/rubros/estudio-juridico/LawLanding";
import { LawCalculator } from "@/components/rubros/estudio-juridico/LawCalculator";

export const metadata: Metadata = {
  title: "Web para estudios jurídicos — Más consultas, mejores casos | Axeliron",
  description:
    "Web para abogados y estudios jurídicos: transmite autoridad, explica tus áreas de práctica y convierte visitas en consultas. Online en 7 días por USD 300.",
  openGraph: {
    title: "Web para estudios jurídicos — Axeliron",
    description: "Más consultas, mejores casos. Online en 7 días por USD 300.",
    type: "website",
    locale: "es_AR",
  },
};

const config: RubroConfig = {
  eyebrow: "Web para estudios jurídicos",
  hero: {
    text: "Más consultas,",
    accent: "mejores casos.",
    subtitle: `Una web que transmite la autoridad de tu estudio, explica tus áreas de práctica en lenguaje simple y convierte a quien tiene un problema en una consulta: online en ${site.deliveryDays} días, por USD ${site.price}.`,
    cta: "Quiero la web de mi estudio",
  },
  demo: {
    url: "ferrariasociados.com.ar",
    landing: <LawLanding />,
    screenBg: "#0d1b2a",
    title: { text: "Así se vería", accent: "la web de tu estudio." },
    subtitle: "Una web de ejemplo para un estudio ficticio, diseñada por nuestro equipo. Explorá las áreas de práctica y enviá una consulta.",
  },
  problem: {
    text: "Tenés la experiencia,",
    accent: "pero online no se nota.",
    items: [
      {
        icon: Search,
        title: "Te buscan y no te encuentran",
        text: "Quien tiene un problema legal busca en Google “abogado laboral” o “abogado de accidentes”. Si no aparecés, llama al primero que encuentra.",
      },
      {
        icon: UserX,
        title: "Una web vieja resta confianza",
        text: "Para elegir abogado, la gente necesita confiar. Una web desactualizada o sin web hace que tu trayectoria no se vea.",
      },
      {
        icon: Clock,
        title: "Consultas que no son para vos",
        text: "Llamados sobre temas que no trabajás te consumen tiempo. Una buena web filtra y te trae los casos que querés.",
      },
    ],
  },
  benefits: {
    text: "Una web que transmite",
    accent: "autoridad y confianza.",
    items: [
      { icon: Scale, title: "Áreas de práctica claras", text: "Cada especialidad explicada en lenguaje simple, para que el cliente sepa que sos la persona indicada." },
      { icon: FileText, title: "Formulario de consulta", text: "El cliente elige el tema y cuenta su caso. Te llega ordenado al WhatsApp o al email." },
      { icon: Award, title: "Trayectoria a la vista", text: "Años de experiencia, casos resueltos y reconocimientos, donde más pesan." },
      { icon: Users, title: "Tu equipo", text: "Presentamos a los profesionales del estudio para generar cercanía desde el primer contacto." },
      { icon: Star, title: "Opiniones de clientes", text: "Testimonios reales que ayudan a decidir a quien está dudando." },
      { icon: Search, title: "SEO local por especialidad", text: "Para aparecer cuando buscan tu especialidad en tu zona." },
      { icon: Lock, title: "Confidencialidad", text: "Contacto directo y datos mínimos, cuidando la privacidad desde el primer mensaje." },
      { icon: Gauge, title: "Rápida y pensada para celular", text: "La mayoría busca abogado desde el teléfono, muchas veces con urgencia." },
    ],
  },
  calculator: {
    text: "¿Cuánto vale",
    accent: "cada caso nuevo?",
    subtitle: "Poné tus honorarios promedio y mirá lo que suma recibir algunos casos más por mes.",
    node: <LawCalculator />,
    note: "Es una estimación con tus propios números.",
  },
  cta: {
    text: "Alguien necesita un abogado hoy.",
    accent: "Que te encuentre a vos.",
    body: `Una inversión única de USD ${site.price}. Un solo caso nuevo la paga muchas veces.`,
    whatsappMessage: "¡Hola Axeliron! Tengo un estudio jurídico y quiero una web para recibir más consultas. ¿Hablamos?",
  },
};

export default function EstudioJuridicoPage() {
  return <RubroTemplate config={config} />;
}
