"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Cómo funciona", href: "#como-funciona" },
        { name: "Planes", href: "#planes" },
        // { name: "Ejemplos", href: "#ejemplos" }, // Hidden - not deleted
        // { name: "FAQ", href: "#faq" }, // Hidden - not deleted
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-2xl md:text-3xl font-bold font-heading tracking-tighter">
                        Axeliron <span className="text-primary">🚀</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="#contacto"
                        className={cn(buttonVariants({ variant: "premium" }), "font-semibold px-5")}
                    >
                        Quiero mi landing →
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    id="mobile-menu-toggle"
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden bg-background border-b border-border overflow-hidden transition-[max-height,opacity] duration-300",
                    isMobileMenuOpen ? "max-h-96 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
                )}
                aria-hidden={!isMobileMenuOpen}
            >
                <div className="flex flex-col p-4 gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="#contacto"
                        className={cn(buttonVariants({ variant: "premium" }), "w-full justify-center")}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Quiero mi landing →
                    </a>
                </div>
            </div>
        </nav>
    );
}
