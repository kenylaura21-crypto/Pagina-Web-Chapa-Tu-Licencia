import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { licenseCategories } from "@/data/categories";
import { services } from "@/data/services";
import { buildWhatsAppLink, whatsappMessages } from "@/utils/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary" aria-hidden="true">
              CL
            </span>
            <span>
              Chapa Tu <span className="text-secondary">Licencia</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{siteConfig.shortDescription}</p>
          <a
            href={buildWhatsAppLink(whatsappMessages.general())}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-whatsapp mt-5 !py-2.5 text-xs"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Hablar por WhatsApp
          </a>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-secondary">
            Categorías
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {licenseCategories.map((c) => (
              <li key={c.code}>{c.code} — {c.vehicle}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-secondary">
            Servicios
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-secondary">
            Contacto
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.city}</li>
            <li>{siteConfig.phoneDisplay}</li>
            <li>{siteConfig.email}</li>
          </ul>
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <Link to="/politica-de-privacidad" className="text-white/70 hover:text-white">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link to="/terminos-y-condiciones" className="text-white/70 hover:text-white">
                Términos y condiciones
              </Link>
            </li>
            <li className="text-white/70">
              Libro de Reclamaciones: [PENDIENTE: ENLACE DEL LIBRO DE RECLAMACIONES]
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.businessName}. Todos los derechos reservados.
          </p>
          <p className="max-w-2xl">{siteConfig.legal.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
