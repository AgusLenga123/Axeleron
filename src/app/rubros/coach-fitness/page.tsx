import type { Metadata } from "next";
import { AtSign, CreditCard, Gauge, Link2, MessageCircle, MessagesSquare, ShieldCheck, Target, TrendingDown, Trophy } from "lucide-react";
import { site } from "@/lib/site";
import { RubroTemplate, type RubroConfig } from "@/components/rubros/RubroTemplate";
import { CoachLanding } from "@/components/rubros/coach-fitness/CoachLanding";
import { CoachCalculator } from "@/components/rubros/coach-fitness/CoachCalculator";

export const metadata: Metadata = {
  title: "Landing para coaches fitness — Más alumnos, menos DMs | Axeliron",
  description:
    "Web para coaches y entrenadores que convierte seguidores en alumnos: tu método, resultados, planes y WhatsApp. Online en 7 días por USD 300.",
  openGraph: {
    title: "Landing para coaches fitness — Axeliron",
    description: "Más alumnos, menos DMs. Online en 7 días por USD 300.",
    type: "website",
    locale: "es_AR",
  },
};

const config: RubroConfig = {
  eyebrow: "Landing para coaches fitness",
  hero: {
    text: "Más alumnos,",
    accent: "menos DMs.",
    subtitle: `Dejá de explicar tu programa por mensaje privado, uno por uno. Una landing que presenta tu método, muestra resultados y convierte seguidores en alumnos que pagan: online en ${site.deliveryDays} días, por USD ${site.price}.`,
    cta: "Quiero mi landing de coach",
  },
  demo: {
    url: "ironmind.fit",
    landing: <CoachLanding />,
    screenBg: "#0f0f0f",
    title: { text: "Así se vería", accent: "tu web de coaching." },
    subtitle: "Una landing de ejemplo para un coach ficticio, diseñada por nuestro equipo. Probá el selector de objetivos y elegí un plan.",
  },
  problem: {
    text: "Tenés seguidores,",
    accent: "pero pocos alumnos.",
    items: [
      {
        icon: MessagesSquare,
        title: "Vendés por DM, uno por uno",
        text: "Cada interesado pregunta lo mismo: precio, cómo funciona, si le sirve. Respondés horas por día y muchos se enfrían en el camino.",
      },
      {
        icon: Link2,
        title: "El link de tu bio no vende",
        text: "Un árbol de links o un PDF no explica tu método ni genera confianza. El seguidor curioso se va sin dar el paso.",
      },
      {
        icon: TrendingDown,
        title: "Tus resultados no se ven",
        text: "Las transformaciones de tus alumnos se pierden en historias de 24 horas, justo cuando deberían estar convenciendo a los nuevos.",
      },
    ],
  },
  benefits: {
    text: "Tu método, explicado",
    accent: "y vendiendo 24/7.",
    items: [
      { icon: Target, title: "Selector de objetivo", text: "El visitante elige qué quiere lograr y la página le habla a él: bajar grasa, ganar músculo o rendimiento." },
      { icon: Trophy, title: "Resultados que convencen", text: "Antes y después, métricas y testimonios de tus alumnos, ordenados para generar confianza." },
      { icon: CreditCard, title: "Planes y precios claros", text: "Tus planes comparados, con el recomendado destacado. Menos preguntas, más decisiones." },
      { icon: MessageCircle, title: "Leads directo a tu WhatsApp", text: "Cada interesado llega con su objetivo y el plan elegido. Vos solo cerrás." },
      { icon: AtSign, title: "Pensada para Instagram", text: "El link de tu bio lleva a una página que carga al instante en el celular y convierte." },
      { icon: Target, title: "Lista para anuncios", text: "Meta Pixel y Google Analytics para medir y escalar tus campañas." },
      { icon: ShieldCheck, title: "Tu garantía a la vista", text: "Mostrar la garantía baja el miedo a pagar y ayuda a decidir." },
      { icon: Gauge, title: "Rápida y mobile-first", text: "Tus seguidores te encuentran desde el celular. La web carga en menos de un segundo." },
    ],
  },
  calculator: {
    text: "¿Cuánto vale cada",
    accent: "alumno que se te escapa?",
    subtitle: "Poné tus números y mirá cuánto suman los alumnos que hoy se pierden entre mensajes.",
    node: <CoachCalculator />,
    note: "Es una estimación con tus propios números. Los resultados dependen de tu oferta y de tu tráfico.",
  },
  cta: {
    text: "Tus próximos alumnos ya te siguen.",
    accent: "Dales dónde inscribirse.",
    body: `Una inversión única de USD ${site.price} que trabaja todos los días, mientras vos entrenás.`,
    whatsappMessage: "¡Hola Axeliron! Soy coach fitness y quiero una landing para conseguir más alumnos. ¿Hablamos?",
  },
};

export default function CoachFitnessPage() {
  return <RubroTemplate config={config} />;
}
