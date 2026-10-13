import type { Metadata } from "next";
import { BarChart3, Building2, CreditCard, Gauge, Globe, HelpCircle, LayoutDashboard, Megaphone, MousePointerClick, Rocket, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { RubroTemplate, type RubroConfig } from "@/components/rubros/RubroTemplate";
import { SaasLanding } from "@/components/rubros/saas/SaasLanding";
import { SaasCalculator } from "@/components/rubros/saas/SaasCalculator";

export const metadata: Metadata = {
  title: "Landing para SaaS — Más pruebas gratis, más MRR | Axeliron",
  description:
    "Landing para productos SaaS: propuesta de valor clara, producto en acción, registro en un paso y precios que convierten. Online en 7 días por USD 300.",
  openGraph: {
    title: "Landing para SaaS — Axeliron",
    description: "Más pruebas gratis, más MRR. Online en 7 días por USD 300.",
    type: "website",
    locale: "es_AR",
  },
};

const config: RubroConfig = {
  eyebrow: "Landing para SaaS",
  hero: {
    text: "Más pruebas gratis,",
    accent: "más MRR.",
    subtitle: `Una landing que explica tu producto en 5 segundos, muestra el valor con el producto en acción y convierte visitas en cuentas activas: online en ${site.deliveryDays} días, por USD ${site.price}.`,
    cta: "Quiero la landing de mi SaaS",
  },
  demo: {
    url: "flujo.app",
    landing: <SaasLanding />,
    screenBg: "#05060f",
    title: { text: "Así se vería", accent: "la landing de tu SaaS." },
    subtitle: "Una landing de ejemplo para un SaaS ficticio, diseñada por nuestro equipo. Probá el registro y el cambio de precios mensual o anual.",
  },
  problem: {
    text: "Tenés un gran producto,",
    accent: "pero tu web no lo vende.",
    items: [
      {
        icon: HelpCircle,
        title: "Nadie entiende qué hacés en 5 segundos",
        text: "Un titular genérico y features sueltas. El visitante no ve cómo le resolvés su problema y se va.",
      },
      {
        icon: MousePointerClick,
        title: "Demasiada fricción para probar",
        text: "Formularios largos, “hablá con ventas” y precios escondidos frenan a los que estaban listos para empezar.",
      },
      {
        icon: Megaphone,
        title: "Pagás anuncios que no convierten",
        text: "Cada clic de Google o LinkedIn cuesta caro. Si la landing no convierte, tu costo de adquisición se dispara.",
      },
    ],
  },
  benefits: {
    text: "Una landing pensada",
    accent: "para activar usuarios.",
    items: [
      { icon: Sparkles, title: "Propuesta de valor clara", text: "Un titular que dice qué hacés, para quién y por qué es mejor que la alternativa." },
      { icon: LayoutDashboard, title: "Tu producto en acción", text: "Mockups y animaciones de tu producto real, para que vean el valor antes de registrarse." },
      { icon: Rocket, title: "Registro en un paso", text: "Email y listo. Lo conectamos con tu app o tu herramienta de onboarding." },
      { icon: CreditCard, title: "Precios que convierten", text: "Planes comparados, mensual o anual y el plan recomendado destacado." },
      { icon: Building2, title: "Prueba social", text: "Logos de clientes, métricas y testimonios donde más pesan." },
      { icon: BarChart3, title: "Medición de conversiones", text: "GA4, Meta y LinkedIn Insight Tag configurados para medir cada registro." },
      { icon: Globe, title: "SEO técnico", text: "Metadatos, velocidad y estructura para posicionar tus palabras clave." },
      { icon: Gauge, title: "Carga instantánea", text: "Menos de un segundo. Cada décima cuenta cuando pagás por cada clic." },
    ],
  },
  calculator: {
    text: "¿Cuánto MRR estás",
    accent: "dejando en la mesa?",
    subtitle: "Mové tus números: visitas, conversión y precio. Mirá qué pasa cuando tu landing convierte un poco mejor.",
    node: <SaasCalculator />,
    note: "Es una estimación con tus propios números. La mejora de conversión depende de tu producto, tu tráfico y tu oferta.",
  },
  cta: {
    text: "Tus visitas ya llegan.",
    accent: "Que se queden.",
    body: `Una inversión única de USD ${site.price}, menos que un mes de anuncios, para que cada visita valga más.`,
    whatsappMessage: "¡Hola Axeliron! Tengo un SaaS y quiero una landing para convertir más visitas en pruebas. ¿Hablamos?",
  },
};

export default function SaasPage() {
  return <RubroTemplate config={config} />;
}
