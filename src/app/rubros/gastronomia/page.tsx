import type { Metadata } from "next";
import { BookOpen, CalendarCheck, Gauge, Instagram, MapPin, Percent, Search, ShoppingBag, Star, Store, Users } from "lucide-react";
import { site } from "@/lib/site";
import { RubroTemplate, type RubroConfig } from "@/components/rubros/RubroTemplate";
import { CafeLanding } from "@/components/rubros/gastronomia/CafeLanding";
import { CafeCalculator } from "@/components/rubros/gastronomia/CafeCalculator";

export const metadata: Metadata = {
  title: "Web para cafeterías y restaurantes — Mesas llenas, pedidos sin comisiones | Axeliron",
  description:
    "Web para gastronomía: carta online, reservas y pedidos directos por WhatsApp sin comisiones de apps. Online en 7 días por USD 300.",
  openGraph: {
    title: "Web para cafeterías y restaurantes — Axeliron",
    description: "Mesas llenas, pedidos sin comisiones. Online en 7 días por USD 300.",
    type: "website",
    locale: "es_AR",
  },
};

const config: RubroConfig = {
  eyebrow: "Web para cafeterías y restaurantes",
  hero: {
    text: "Mesas llenas,",
    accent: "pedidos sin comisiones.",
    subtitle: `Una web con tu carta, reservas en 10 segundos y pedidos directos por WhatsApp, para dejar de regalarle un porcentaje de cada venta a las apps: online en ${site.deliveryDays} días, por USD ${site.price}.`,
    cta: "Quiero la web de mi local",
  },
  demo: {
    url: "almacenceibo.com.ar",
    landing: <CafeLanding />,
    screenBg: "#f6efe4",
    title: { text: "Así se vería", accent: "la web de tu local." },
    subtitle: "Una web de ejemplo para una cafetería ficticia, diseñada por nuestro equipo. Armá un pedido desde la carta y reservá una mesa.",
  },
  problem: {
    text: "La comida es buenísima,",
    accent: "pero el margen se lo llevan otros.",
    items: [
      {
        icon: Percent,
        title: "Las apps se quedan con una parte de cada pedido",
        text: "Rappi o PedidosYa cobran una comisión alta por cada venta, incluso a clientes que ya te conocían y te hubieran pedido directo.",
      },
      {
        icon: Instagram,
        title: "Tu carta vive en una foto de Instagram",
        text: "Precios desactualizados, letra ilegible y ninguna forma de reservar. El cliente con hambre no tiene paciencia.",
      },
      {
        icon: Store,
        title: "En Google te ven, pero no te eligen",
        text: "Cuando buscan dónde comer cerca, gana el lugar que muestra carta, fotos y horarios claros.",
      },
    ],
  },
  benefits: {
    text: "Una web que llena mesas",
    accent: "y suma pedidos.",
    items: [
      { icon: BookOpen, title: "Carta online siempre actualizada", text: "Por categorías, con precios y descripciones. Fácil de leer en el celular." },
      { icon: ShoppingBag, title: "Pedidos directos por WhatsApp", text: "El cliente arma su pedido y te llega listo, sin comisiones de apps." },
      { icon: CalendarCheck, title: "Reservas en 10 segundos", text: "Personas y horario en dos toques. La confirmación te llega al WhatsApp." },
      { icon: Star, title: "Reseñas que abren el apetito", text: "Tus mejores opiniones de Google, a la vista." },
      { icon: MapPin, title: "Cómo llegar y horarios", text: "Mapa, horarios y todo lo que el cliente necesita para venir hoy." },
      { icon: Search, title: "SEO local", text: "Para aparecer cuando buscan “brunch” o “café de especialidad” en tu barrio." },
      { icon: Users, title: "Clientes propios", text: "Cada pedido directo te deja un contacto para promos y días flojos." },
      { icon: Gauge, title: "Rápida y mobile-first", text: "Se busca dónde comer desde el celular. La web carga al instante." },
    ],
  },
  calculator: {
    text: "¿Cuánto le estás dejando",
    accent: "a las apps de delivery?",
    subtitle: "Mové los valores con los números de tu local y mirá cuánto ahorrás pasando parte de los pedidos a tu propia web.",
    node: <CafeCalculator />,
    note: "Es una estimación con tus propios números. La comisión real depende de cada app y de tu plan.",
  },
  steps: [
    { day: "Día 1", title: "Llamada", text: "Nos contás de tu local, tu carta y cómo trabajás reservas y pedidos." },
    { day: "Días 2 – 6", title: "Diseño + desarrollo", text: `Armamos la carta, las fotos y los textos. Tenés ${site.revisions} rondas de cambios.` },
    { day: `Día ${site.deliveryDays}`, title: "Online", text: "La publicamos y empezás a recibir reservas y pedidos directos." },
  ],
  cta: {
    text: "Cada pedido directo",
    accent: "es margen que vuelve a tu caja.",
    body: `Una inversión única de USD ${site.price} que se paga sola con los pedidos que dejás de compartir con las apps.`,
    whatsappMessage: "¡Hola Axeliron! Tengo un local gastronómico y quiero una web para reservas y pedidos directos. ¿Hablamos?",
  },
};

export default function GastronomiaPage() {
  return <RubroTemplate config={config} />;
}
