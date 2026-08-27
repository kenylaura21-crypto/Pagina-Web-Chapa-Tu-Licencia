import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/utils/whatsapp";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#categorias", label: "Categorías" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const goToSection = (hash: string) => {
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white/70 backdrop-blur"
      }`}
    >
      <a href="#main-content" className="sr-only-focusable">
        Saltar al contenido principal
      </a>
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold text-primary">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-secondary"
            aria-hidden="true"
          >
            CL
          </span>
          <span>
            Chapa Tu <span className="text-secondary">Licencia</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => goToSection(link.href)}
              className="text-sm font-semibold text-ink/80 transition-colors hover:text-secondary"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppLink(whatsappMessages.general())}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Hablar por WhatsApp
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-primary lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden" role="dialog" aria-label="Menú móvil">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => goToSection(link.href)}
                className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-ink hover:bg-surface-soft"
              >
                {link.label}
              </button>
            ))}
            <a
              href={buildWhatsAppLink(whatsappMessages.general())}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-whatsapp mt-2 w-full"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Hablar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
