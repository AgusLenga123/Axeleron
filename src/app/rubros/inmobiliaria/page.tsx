import type { Metadata } from "next";
import { Award, ClipboardList, Gauge, Images, MapPin, MessageCircle, Search, Store, Target, UserX, Wallet } from "lucide-react";
import { site } from "@/lib/site";
import { RubroTemplate, type RubroConfig } from "@/components/rubros/RubroTemplate";
import { RealEstateLanding } from "@/components/rubros/inmobiliaria/RealEstateLanding";
import { RealEstateCalculator } from "@/components/rubros/inmobiliaria/RealEstateCalculator";

export const metadata: Metadata = {
  title: "Web para inmobiliarias — Más captaciones, más operaciones | Axeliron",
  description:
    "Web para inmobiliarias con buscador de propiedades, fichas que venden y formulario de tasación para captar propietarios. Online en 7 días por USD 300.",
  openGraph: {
    title: "Web para inmobiliarias — Axeliron",
    description: "Más captaciones, más operaciones. Online en 7 días por USD 300.",
    type: "website",
    locale: "es_AR",
  },
};

const config: RubroConfig = {
  eyebrow: "Web para inmobiliarias",
  hero: {
    text: "Más captaciones,",
    accent: "más operaciones.",
    subtitle: `Una web que muestra tus propiedades como se merecen, genera consultas de compradores y, sobre todo, trae propietarios que quieren vender: online en ${site.deliveryDays} días, por USD ${site.price}.`,
    cta: "Quiero la web de mi inmobiliaria",
  },
  demo: {
    url: "norte-propiedades.com.ar",
    landing: <RealEstateLanding />,
    screenBg: "#ffffff",
    title: { text: "Así se vería", accent: "la web de tu inmobiliaria." },
    subtitle: "Una web de ejemplo para una inmobiliaria ficticia, diseñada por nuestro equipo. Probá el buscador, guardá favoritas y pedí una tasación.",
  },
  problem: {
    text: "Publicás en todos los portales,",
    accent: "pero no tenés marca propia.",
    items: [
      {
        icon: Store,
        title: "En los portales sos uno más",
        text: "Tus propiedades aparecen al lado de las de la competencia. El comprador recuerda la casa, no tu inmobiliaria.",
      },
      {
        icon: UserX,
        title: "Te faltan propietarios, no compradores",
        text: "Sin una web que genere confianza, el dueño que quiere vender llama a la inmobiliaria que encontró primero.",
      },
      {
        icon: Wallet,
        title: "Pagás por cada aviso",
        text: "Los portales cobran por publicar y destacar. Tu web es un canal propio que no te cobra por propiedad.",
      },
    ],
  },
  benefits: {
    text: "Una web que capta",
    accent: "propietarios y compradores.",
    items: [
      { icon: Search, title: "Buscador de propiedades", text: "Filtros por operación y tipo, con fichas claras y un botón para coordinar visita." },
      { icon: ClipboardList, title: "Formulario de tasación", text: "El imán de propietarios: piden tasación en 30 segundos y te llega al WhatsApp." },
      { icon: Images, title: "Fichas que venden", text: "Fotos grandes, metros, ambientes y ubicación en cada propiedad." },
      { icon: Award, title: "Tu trayectoria a la vista", text: "Años en la zona, operaciones cerradas y opiniones de clientes." },
      { icon: MapPin, title: "SEO local", text: "Para aparecer cuando buscan “inmobiliaria en” tu zona." },
      { icon: Target, title: "Lista para campañas", text: "Meta Pixel y Google para anuncios de captación y remarketing." },
      { icon: MessageCircle, title: "Consultas directo al asesor", text: "Cada consulta llega con la propiedad que le interesa." },
      { icon: Gauge, title: "Rápida y mobile-first", text: "La mayoría busca propiedades desde el celular. La web carga al instante." },
    ],
  },
  calculator: {
    text: "¿Cuánto vale",
    accent: "una operación más?",
    subtitle: "Poné el valor de tus propiedades y tu comisión. Mirá lo que suma cerrar algunas operaciones extra al año.",
    node: <RealEstateCalculator />,
    note: "Es una estimación con tus propios números.",
  },
  cta: {
    text: "El próximo propietario que quiere vender",
    accent: "te está buscando.",
    body: `Una inversión única de USD ${site.price}. Una sola operación extra la paga muchas veces.`,
    whatsappMessage: "¡Hola Axeliron! Tengo una inmobiliaria y quiero una web para conseguir más captaciones. ¿Hablamos?",
  },
};

export default function InmobiliariaPage() {
  return <RubroTemplate config={config} />;
}
