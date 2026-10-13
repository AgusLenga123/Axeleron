import type { Metadata } from "next";
import { BadgePercent, CalendarSearch, Contact, Gauge, Images, MapPin, Search, Star, Store, Target } from "lucide-react";
import { site } from "@/lib/site";
import { RubroTemplate, type RubroConfig } from "@/components/rubros/RubroTemplate";
import { HotelLanding } from "@/components/rubros/hoteleria/HotelLanding";
import { SavingsCalculator } from "@/components/rubros/hoteleria/SavingsCalculator";

export const metadata: Metadata = {
  title: "Landing para hoteles — Más reservas directas, cero comisiones | Axeliron",
  description:
    "Web para hoteles que convierte visitas en reservas directas. Buscador de disponibilidad, WhatsApp, opiniones y SEO local. Online en 7 días por USD 300.",
  openGraph: {
    title: "Landing para hoteles — Axeliron",
    description: "Más reservas directas, cero comisiones. Online en 7 días por USD 300.",
    type: "website",
    locale: "es_AR",
  },
};

const config: RubroConfig = {
  eyebrow: "Landing para hoteles",
  hero: {
    text: "Más reservas directas.",
    accent: "Cero comisiones.",
    subtitle: (
      <>
        Booking, Expedia y Airbnb se quedan con una parte de cada reserva. Te hacemos una web que convierte a tus visitas en huéspedes que{" "}
        <span className="font-medium text-foreground">reservan directo con vos</span>: online en {site.deliveryDays} días, por USD {site.price}.
      </>
    ),
    cta: "Quiero la landing para mi hotel",
  },
  demo: {
    url: "casaalerce.com",
    landing: <HotelLanding />,
    title: { text: "Así se vería", accent: "la web de tu hotel." },
    subtitle:
      "Una landing de ejemplo para un hotel boutique ficticio, diseñada por nuestro equipo. La tuya se hace a medida, con tus fotos, tu tono y tus habitaciones.",
  },
  problem: {
    text: "Llenás habitaciones,",
    accent: "pero no te quedás con todo.",
    items: [
      {
        icon: Search,
        title: "Pagás comisión por huéspedes que ya te buscaban",
        text: "Mucha gente busca tu hotel por nombre, no encuentra una web clara y termina reservando por la plataforma. Esa comisión la pagás vos.",
      },
      {
        icon: Contact,
        title: "El huésped queda en manos de la plataforma",
        text: "Sin sus datos no podés volver a contactarlo para la próxima temporada. Cada reserva repetida vuelve a pagar comisión.",
      },
      {
        icon: Store,
        title: "Competís en una vidriera llena de otros hoteles",
        text: "En las plataformas te muestran al lado de tu competencia, ordenados por precio. En tu web, el único hotel sos vos.",
      },
    ],
  },
  benefits: {
    text: "Una web que trabaja",
    accent: "como tu mejor recepcionista.",
    subtitle: `Todo esto viene incluido en los USD ${site.price}. Sin mensualidades y sin comisiones por reserva.`,
    items: [
      { icon: CalendarSearch, title: "Buscador de disponibilidad", text: "El huésped elige fechas y personas, y la consulta te llega directo al WhatsApp. Si ya usás un motor de reservas, lo conectamos." },
      { icon: BadgePercent, title: "Mejor precio reservando directo", text: "Un beneficio visible (descuento, late check-out, desayuno) que le da una razón para no volver a la plataforma." },
      { icon: Images, title: "Habitaciones que se venden solas", text: "Fotos, precios desde y un botón de reserva en cada habitación. Cero dudas, cero fricción." },
      { icon: Star, title: "Opiniones que generan confianza", text: "Mostramos tus mejores reseñas y tu puntaje para que el huésped se decida sin salir de tu web." },
      { icon: MapPin, title: "Ubicación y cómo llegar", text: "Mapa, distancias a los puntos clave y todo lo que el viajero necesita para elegirte." },
      { icon: Target, title: "Lista para campañas", text: "Meta Pixel y Google Analytics para hacer remarketing a quien visitó tu web y no reservó." },
      { icon: Contact, title: "Tus huéspedes, tus datos", text: "Cada consulta te deja nombre y contacto. Base propia para promociones y temporadas bajas." },
      { icon: Gauge, title: "Rápida y pensada para celular", text: "Carga en menos de un segundo, porque la mayoría de los viajeros reserva desde el teléfono." },
    ],
  },
  calculator: {
    text: "¿Cuánto le estás dejando",
    accent: "a las plataformas?",
    subtitle: "Mové los valores con los números de tu hotel y mirá cuánto podrías ahorrar pasando parte de tus reservas a tu propia web.",
    node: <SavingsCalculator />,
    note: "Es una estimación con tus propios números. La comisión real depende de cada plataforma y de tu plan.",
  },
  steps: [
    { day: "Día 1", title: "Llamada", text: "Nos contás de tu hotel, tus habitaciones y tu huésped ideal." },
    { day: "Días 2 – 6", title: "Diseño + desarrollo", text: `Escribimos los textos, diseñamos y programamos. Tenés ${site.revisions} rondas de cambios.` },
    { day: `Día ${site.deliveryDays}`, title: "Online", text: "La publicamos en tu dominio y empezás a recibir consultas directas." },
  ],
  cta: {
    text: "Tu próximo huésped ya te está buscando.",
    accent: "Que reserve con vos.",
    body: `Una sola inversión de USD ${site.price}. Cada reserva directa después es margen que antes se iba en comisiones.`,
    whatsappMessage: "¡Hola Axeliron! Tengo un hotel y quiero una landing para recibir reservas directas. ¿Hablamos?",
  },
};

export default function HoteleriaPage() {
  return <RubroTemplate config={config} />;
}
