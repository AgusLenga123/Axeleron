import Link from "next/link";
import { Mail } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "./Navbar";

export function Footer() {
    return (
        <footer className="border-t border-white/[0.06] pb-24 pt-14 md:pb-10">
            <div className="mx-auto max-w-6xl flex flex-col gap-10 px-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-xs space-y-3">
                    <Logo />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        Landing pages que convierten visitas en clientes. Online en {site.deliveryDays} días, por USD {site.price}.
                    </p>
                </div>

                <nav className="flex gap-12 text-sm" aria-label="Pie de página">
                    <ul className="space-y-2.5 text-muted-foreground">
                        <li><Link href="/#proceso" className="hover:text-foreground">Proceso</Link></li>
                        <li><Link href="/#disenos" className="hover:text-foreground">Diseños</Link></li>
                        <li><Link href="/#precio" className="hover:text-foreground">Precio</Link></li>
                        <li><Link href="/#faq" className="hover:text-foreground">FAQ</Link></li>
                    </ul>
                    <ul className="space-y-2.5 text-muted-foreground">
                        <li>
                            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-foreground">
                                <Mail className="h-4 w-4" /> {site.email}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="mx-auto max-w-6xl mt-12 px-4">
                <p className="select-none bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text text-center text-[22vw] font-semibold leading-none tracking-[-0.06em] text-transparent md:text-[min(16vw,230px)]">
                    Axeliron
                </p>
                <p className="mt-6 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Axeliron. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
