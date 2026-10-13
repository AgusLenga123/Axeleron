import type { Metadata } from "next";
import { CalendarCheck, Gauge, HeartHandshake, HelpCircle, ListChecks, Lock, MessagesSquare, Search, UserRound, UserX } from "lucide-react";
import { site } from "@/lib/site";
import { RubroTemplate, type RubroConfig } from "@/components/rubros/RubroTemplate";
import { PsychLanding } from "@/components/rubros/psicologia/PsychLanding";
import { PsychCalculator } from "@/components/rubros/psicologia/PsychCalculator";

export const metadata: Metadata = {
  title: "Web para psicólogos — Tu agenda llena, con los pacientes indicados | Axeliron",
  description:
    "Web profesional para psicólogas y psicólogos: transmite confianza, explica tu enfoque y permite reservar turnos. Online en 7 días por USD 300.",
  openGraph: {
    title: "Web para psicólogos — Axeliron",
    description: "Tu agenda llena, con los pacientes indicados. Online en 7 días por USD 300.",
    type: "website",
    locale: "es_AR",
  },
};

const config: RubroConfig = {
  eyebrow: "Web para psicólogos",
  hero: {
    text: "Tu agenda llena,",
    accent: "con los pacientes indicados.",
    subtitle: `Una web profesional y cálida que transmite confianza, explica cómo trabajás y permite reservar la primera entrevista sin vueltas: online en ${site.deliveryDays} días, por USD ${site.price}.`,
    cta: "Quiero mi web profesional",
  },
  demo: {
    url: "claraibanez.com.ar",
    landing: <PsychLanding />,
    screenBg: "#f4efe7",
    title: { text: "Así se vería", accent: "tu consultorio online." },
    subtitle: "Una web de ejemplo para una psicóloga ficticia, diseñada por nuestro equipo. Marcá lo que sentís y probá reservar un turno.",
  },
  problem: {
    text: "Sos excelente en consulta,",
    accent: "pero cuesta que te encuentren.",
    items: [
      {
        icon: UserX,
        title: "Dependés del boca en boca",
        text: "Cuando las derivaciones bajan, la agenda queda con huecos y no hay otro canal que traiga consultas.",
      },
      {
        icon: Search,
        title: "Sin web, cuesta generar confianza",
        text: "Antes de escribirte, la gente quiere saber quién sos, cómo trabajás y si podés ayudarla. Si no lo encuentra, sigue buscando.",
      },
      {
        icon: MessagesSquare,
        title: "Coordinar turnos te consume horas",
        text: "Mensajes de ida y vuelta para encontrar un horario, entre sesión y sesión.",
      },
    ],
  },
  benefits: {
    text: "Una web que transmite",
    accent: "calma y confianza.",
    items: [
      { icon: HeartHandshake, title: "Tono cálido y profesional", text: "Diseño y textos que acompañan, sin sonar fríos ni comerciales." },
      { icon: ListChecks, title: "“¿Te pasa esto?”", text: "Una sección donde el paciente se identifica con lo que siente y se anima a dar el primer paso." },
      { icon: CalendarCheck, title: "Turnos sin idas y vueltas", text: "El paciente elige día y horario, o lo conectamos con tu agenda de Calendly o Google." },
      { icon: UserRound, title: "Vos y tu enfoque", text: "Tu formación, tu forma de trabajar y tu matrícula, para que te elijan con confianza." },
      { icon: Search, title: "Que te encuentren en Google", text: "SEO local para búsquedas como “psicóloga en tu barrio” o “terapia online”." },
      { icon: Lock, title: "Confidencialidad desde el primer mensaje", text: "Datos mínimos y contacto directo con vos, sin intermediarios." },
      { icon: HelpCircle, title: "Preguntas frecuentes", text: "Obra social, duración, modalidad: respondido antes de que pregunten." },
      { icon: Gauge, title: "Rápida y pensada para celular", text: "La mayoría busca ayuda desde el teléfono. La web carga al instante." },
    ],
  },
  calculator: {
    text: "¿Cuánto vale",
    accent: "cada paciente nuevo?",
    subtitle: "Poné tus números y mirá lo que representa sumar pacientes a tu agenda cada mes.",
    node: <PsychCalculator />,
    note: "Es una estimación con tus propios números.",
  },
  cta: {
    text: "Alguien está buscando ayuda hoy.",
    accent: "Que te encuentre a vos.",
    body: `Una inversión única de USD ${site.price} para tener una presencia profesional que trabaja por vos todos los días.`,
    whatsappMessage: "¡Hola Axeliron! Soy psicóloga/o y quiero una web para recibir más consultas. ¿Hablamos?",
  },
};

export default function PsicologiaPage() {
  return <RubroTemplate config={config} />;
}
