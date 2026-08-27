import {
  IdCard,
  RefreshCw,
  Layers,
  Bike,
  Truck,
  Car,
  ClipboardCheck,
  Key,
  GraduationCap,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { buildWhatsAppLink, whatsappMessages } from "@/utils/whatsapp";

const iconMap: Record<string, LucideIcon> = {
  "id-card": IdCard,
  "refresh-cw": RefreshCw,
  layers: Layers,
  bike: Bike,
  truck: Truck,
  car: Car,
  "clipboard-check": ClipboardCheck,
  key: Key,
  "graduation-cap": GraduationCap,
  monitor: Monitor,
};

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="services-title" className="section bg-white">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Servicios</span>
            <h2 id="services-title" className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
              Todo lo que necesitas para tu licencia
            </h2>
            <p className="mt-4 text-ink-muted">
              Desde la asesoría del trámite hasta las clases prácticas. Elige el servicio que
              buscas y consulta directamente por WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article key={service.id} className="card flex flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-primary">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Categorías disponibles">
                  {service.categories.map((cat) => (
                    <li
                      key={cat}
                      className="rounded-full border border-line bg-surface-soft px-2.5 py-1 text-[11px] font-semibold text-ink-muted"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 font-display text-sm font-bold text-secondary">{service.price}</p>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <a
                    href={buildWhatsAppLink(whatsappMessages.servicio(service.name))}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="btn-outline flex-1 !px-4 !py-2.5 text-xs"
                  >
                    Solicitar información
                  </a>
                  <a
                    href={buildWhatsAppLink(whatsappMessages.servicio(service.name))}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="btn-whatsapp flex-1 !px-4 !py-2.5 text-xs"
                  >
                    WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
