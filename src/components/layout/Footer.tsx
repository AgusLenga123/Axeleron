import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border/40 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-10 mb-12">
                    <div className="md:col-span-2 space-y-4">
                        <Link href="/" className="text-xl font-bold font-heading tracking-tighter hover:opacity-80 transition-opacity inline-block">
                            Axeliron <span className="text-primary">🚀</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Creamos landing pages que convierten visitantes en clientes. Rápido, claro y enfocado en resultados.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors" aria-label="LinkedIn">
                                <Linkedin size={16} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors" aria-label="Instagram">
                                <Instagram size={16} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-sm">Navegación</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#como-funciona" className="hover:text-primary transition-colors">Cómo funciona</Link></li>
                            <li><Link href="#planes" className="hover:text-primary transition-colors">Planes</Link></li>
                            <li><Link href="#ejemplos" className="hover:text-primary transition-colors">Ejemplos</Link></li>
                            <li><Link href="#garantia" className="hover:text-primary transition-colors">Garantía</Link></li>
                            <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-sm">Contacto</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="https://wa.me/5491136515953" target="_blank" className="hover:text-primary transition-colors">
                                    WhatsApp
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:hola@axeleron.com" className="hover:text-primary transition-colors">
                                    hola@axeleron.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Axeliron. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacidad</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
