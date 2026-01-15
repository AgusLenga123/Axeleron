import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary/30 border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="text-xl font-bold font-heading tracking-tighter hover:opacity-80 transition-opacity">
                            Axeleron
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Agencia de desarrollo tecnológico enfocada en resultados para PYMES y startups de Argentina al mundo.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Servicios</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#servicios" className="hover:text-primary transition-colors">Desarrollo Web</Link></li>
                            <li><Link href="#servicios" className="hover:text-primary transition-colors">Apps Móviles</Link></li>
                            <li><Link href="#servicios" className="hover:text-primary transition-colors">Automatización</Link></li>
                            <li><Link href="#servicios" className="hover:text-primary transition-colors">Chatbots IA</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Empresa</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>

                            <li><Link href="#planes" className="hover:text-primary transition-colors">Paquetes</Link></li>
                            <li><Link href="#contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Síguenos</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors">
                                <Github size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Axeleron. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground">Privacidad</Link>
                        <Link href="#" className="hover:text-foreground">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
