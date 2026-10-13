import type { Metadata } from "next";
import { CreditCard, Gauge, Gift, ListChecks, MousePointerClick, PlayCircle, Target, Timer, TrendingDown, Users, VideoOff } from "lucide-react";
import { site } from "@/lib/site";
import { RubroTemplate, type RubroConfig } from "@/components/rubros/RubroTemplate";
import { CourseLanding } from "@/components/rubros/cursos-online/CourseLanding";
import { CourseCalculator } from "@/components/rubros/cursos-online/CourseCalculator";

export const metadata: Metadata = {
  title: "Landing para cursos online — Más inscriptos en cada lanzamiento | Axeliron",
  description:
    "Página de venta para cursos, programas e infoproductos: urgencia real, temario, testimonios y checkout. Online en 7 días por USD 300.",
  openGraph: {
    title: "Landing para cursos online — Axeliron",
    description: "Más inscriptos en cada lanzamiento. Online en 7 días por USD 300.",
    type: "website",
    locale: "es_AR",
  },
};

const config: RubroConfig = {
  eyebrow: "Landing para cursos online",
  hero: {
    text: "Más inscriptos",
    accent: "en cada lanzamiento.",
    subtitle: `Una página de venta pensada para convertir: promesa clara, temario que entusiasma, testimonios, urgencia real y un botón de inscripción imposible de ignorar. Online en ${site.deliveryDays} días, por USD ${site.price}.`,
    cta: "Quiero mi página de venta",
  },
  demo: {
    url: "editapro.com",
    landing: <CourseLanding />,
    screenBg: "#120a24",
    title: { text: "Así se vería", accent: "la página de tu curso." },
    subtitle: "Una página de ejemplo para un curso ficticio, diseñada por nuestro equipo. Mirá la cuenta regresiva, abrí el temario y reservá tu lugar.",
  },
  problem: {
    text: "Tu curso es bueno,",
    accent: "pero la página no lo vende.",
    items: [
      {
        icon: VideoOff,
        title: "Vendés todo por historias y DMs",
        text: "Cada lanzamiento depende de que respondas mensajes a mano. Lo que no cerrás en el momento, se enfría.",
      },
      {
        icon: TrendingDown,
        title: "Una plataforma genérica que no convence",
        text: "La página por defecto de la plataforma de cursos no cuenta tu historia ni genera deseo. La gente entra y no compra.",
      },
      {
        icon: MousePointerClick,
        title: "Tráfico caro que se pierde",
        text: "Pagás anuncios para traer visitas. Si la página no convierte, cada inscripto te cuesta el doble.",
      },
    ],
  },
  benefits: {
    text: "Una página de venta",
    accent: "que hace el trabajo por vos.",
    items: [
      { icon: Target, title: "Promesa clara", text: "Qué van a lograr, en cuánto tiempo y para quién es. En los primeros 5 segundos." },
      { icon: Timer, title: "Urgencia real", text: "Cuenta regresiva, cupos y precio de lanzamiento para que no lo dejen para después." },
      { icon: ListChecks, title: "Temario que entusiasma", text: "Módulos y clases presentados para que vean el valor de cada paso." },
      { icon: Users, title: "Testimonios y resultados", text: "Las historias de tus alumnos, donde más pesan en la decisión." },
      { icon: Gift, title: "Oferta irresistible", text: "Precio, bonus y garantía bien presentados para bajar el riesgo de comprar." },
      { icon: CreditCard, title: "Conectada a tu checkout", text: "Hotmart, Mercado Pago, Stripe o tu plataforma de cursos." },
      { icon: PlayCircle, title: "Clase gratis o video de venta", text: "El formato que más convierte, integrado sin trabas." },
      { icon: Gauge, title: "Lista para anuncios", text: "Carga instantánea y Meta Pixel configurado para medir cada venta." },
    ],
  },
  calculator: {
    text: "¿Cuántas ventas pierde",
    accent: "tu página actual?",
    subtitle: "Mové tus números y mirá cuánto suma que tu página convierta un poco mejor con el mismo tráfico.",
    node: <CourseCalculator />,
    note: "Es una estimación con tus propios números. La conversión depende de tu oferta, tu audiencia y tu tráfico.",
  },
  cta: {
    text: "Tu próximo lanzamiento",
    accent: "puede ser el mejor.",
    body: `Una inversión única de USD ${site.price}. Con unas pocas ventas extra ya se pagó.`,
    whatsappMessage: "¡Hola Axeliron! Tengo un curso online y quiero una página de venta que convierta. ¿Hablamos?",
  },
};

export default function CursosOnlinePage() {
  return <RubroTemplate config={config} />;
}
