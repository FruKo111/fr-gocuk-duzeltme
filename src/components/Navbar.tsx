"use client";

import { useState, useEffect } from "react";
import SiteData from "@/data/site-data.json";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "PPF Kaplama", href: "#ppf-kaplama" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { business } = SiteData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    const lenis = (window as unknown as Record<string, { scrollTo: (target: string | HTMLElement, opts?: Record<string, unknown>) => void }>).__lenis;
    if (lenis?.scrollTo) {
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.6 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${business.whatsapp}`, "_blank");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-base-deep/85 backdrop-blur-xl border-b border-white/[0.04] py-2.5 sm:py-3"
          : "bg-transparent py-3 sm:py-5"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 flex-shrink-0">
          <img
            src="/images/gallery/autoprimeatasehirlogo.png"
            alt="Autoprime Ataşehir"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="label-text text-xs lg:text-sm hover:text-accent transition-colors duration-300 cursor-pointer"
            >
              {link.label}
            </a>
          ))}

          {/* Rezervasyon CTA */}
          <button
            onClick={handleWhatsApp}
            className="ml-2 inline-flex items-center gap-2 bg-accent text-black font-semibold px-4 py-2 rounded-xl text-xs tracking-wider uppercase hover:accent-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Rezervasyon
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-[60]"
          aria-label={mobileOpen ? "Menüyü Kapat" : "Menüyü Aç"}
        >
          <span className={cn("block w-5 h-px bg-text-primary transition-all duration-300", mobileOpen && "rotate-45 translate-y-1")} />
          <span className={cn("block w-5 h-px bg-text-primary transition-all duration-300", mobileOpen && "opacity-0")} />
          <span className={cn("block w-3 h-px bg-accent transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-1 w-5")} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[55] bg-base-deep/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollTo(e, link.href)}
            className="text-2xl font-bold tracking-widest uppercase text-text-primary/80 hover:text-accent transition-colors"
          >
            {link.label}
          </a>
        ))}

        {/* Mobile CTA */}
        <button
          onClick={() => {
            setMobileOpen(false);
            handleWhatsApp();
          }}
          className="mt-4 inline-flex items-center gap-3 bg-accent text-black font-bold px-8 py-4 rounded-2xl text-base tracking-wider uppercase"
        >
          <MessageCircle className="w-5 h-5" />
          Rezervasyon
        </button>
      </div>
    </header>
  );
}
