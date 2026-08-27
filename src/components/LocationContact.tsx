import { MapPin, Clock, Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink, whatsappMessages } from "@/utils/whatsapp";

function TikTokIcon() {
  // Lucide no incluye el ícono de TikTok; se usa un SVG simple propio.
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.6h-3.1v13.5c0 1.53-1.24 2.77-2.77 2.77a2.77 2.77 0 0 1-2.77-2.77 2.77 2.77 0 0 1 2.77-2.77c.28 0 .55.04.8.12V9.9a5.9 5.9 0 0 0-.8-.05 5.9 5.9 0 0 0-5.9 5.9 5.9 5.9 0 0 0 5.9 5.9 5.9 5.9 0 0 0 5.9-5.9V9.3a7.6 7.6 0 0 0 4.4 1.4V7.6a4.85 4.85 0 0 1-3.03-1.78z" />
    </svg>
  );
}

export default function LocationContact() {
  return (
    <section id="ubicacion" aria-labelledby="location-title" className="section bg-surface-soft">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Ubicación y contacto</span>
          <h2 id="location-title" className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Visítanos o escríbenos
          </h2>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-ink">{siteConfig.address}</p>
                <p className="text-sm text-ink-muted">{siteConfig.addressReference}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
              <div className="text-sm text-ink-muted">
                {siteConfig.schedule.map((s) => (
                  <p key={s.day}>
                    <span className="font-semibold text-ink">{s.day}:</span> {s.hours}
                  </p>
                ))}
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
              <span className="text-sm text-ink-muted">{siteConfig.phoneDisplay}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
              <span className="text-sm text-ink-muted">{siteConfig.email}</span>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Chapa Tu Licencia"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-primary hover:border-primary"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Chapa Tu Licencia"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-primary hover:border-primary"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Chapa Tu Licencia"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-primary hover:border-primary"
            >
              <TikTokIcon />
            </a>
          </div>

          <a href={buildWhatsAppLink(whatsappMessages.general())} target="_blank" rel="noopener noreferrer nofollow" className="btn-whatsapp mt-8">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Escribir por WhatsApp
          </a>
        </div>

        <div className="overflow-hidden rounded-card border border-line bg-white shadow-card">
          {siteConfig.googleMapsEmbedUrl.startsWith("http") ? (
            <iframe
              title="Ubicación de Chapa Tu Licencia en Tacna"
              src={siteConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ minHeight: 360, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex min-h-[360px] flex-col items-center justify-center gap-3 bg-surface-soft p-8 text-center">
              <MapPin className="h-8 w-8 text-secondary" aria-hidden="true" />
              <p className="text-sm font-semibold text-primary">Mapa pendiente de configurar</p>
              <p className="max-w-xs text-xs text-ink-muted">
                Agrega el enlace de incrustación de Google Maps en{" "}
                <code className="rounded bg-white px-1 py-0.5">src/config/site.ts</code> para
                mostrar el mapa aquí.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
