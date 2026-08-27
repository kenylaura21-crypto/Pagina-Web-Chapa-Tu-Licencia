import { Check, Star, MessageCircle } from "lucide-react";
import { packages } from "@/data/packages";
import { buildWhatsAppLink, whatsappMessages } from "@/utils/whatsapp";

export default function Packages() {
  return (
    <section id="paquetes" aria-labelledby="packages-title" className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Paquetes</span>
          <h2 id="packages-title" className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Compara y elige tu paquete
          </h2>
          <p className="mt-4 text-ink-muted">
            Revisa qué incluye cada paquete. Al solicitarlo te contactamos por WhatsApp para
            coordinar el servicio y la forma de pago; no procesamos pagos en la web.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => {
            const priceToSend = pkg.promoPrice || pkg.regularPrice;
            return (
              <article
                key={pkg.id}
                className={`relative flex flex-col rounded-card border bg-white p-6 shadow-card ${
                  pkg.featured ? "border-secondary ring-2 ring-secondary/30" : "border-line"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-pill bg-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    <Star className="h-3 w-3" aria-hidden="true" />
                    Más elegido
                  </span>
                )}

                <p className="text-xs font-bold uppercase tracking-wide text-secondary">
                  {pkg.category} · {pkg.vehicle}
                </p>
                <h3 className="mt-2 font-display text-xl font-extrabold text-primary">{pkg.name}</h3>

                <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl bg-surface-soft p-3">
                    <dt className="font-semibold text-ink-muted">N.° de clases</dt>
                    <dd className="mt-0.5 font-bold text-primary">{pkg.classesCount}</dd>
                  </div>
                  <div className="rounded-xl bg-surface-soft p-3">
                    <dt className="font-semibold text-ink-muted">Duración referencial</dt>
                    <dd className="mt-0.5 font-bold text-primary">{pkg.durationRef}</dd>
                  </div>
                </dl>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-line pt-4">
                  {pkg.promoPrice ? (
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-extrabold text-secondary">
                        {pkg.promoPrice}
                      </span>
                      <span className="text-sm text-ink-muted line-through">{pkg.regularPrice}</span>
                    </div>
                  ) : (
                    <span className="font-display text-2xl font-extrabold text-primary">
                      {pkg.regularPrice}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={buildWhatsAppLink(
                      whatsappMessages.paquete(pkg.name, pkg.category, priceToSend)
                    )}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="btn-primary w-full"
                  >
                    Solicitar este paquete
                  </a>
                  <a
                    href={buildWhatsAppLink(whatsappMessages.categoria(pkg.category))}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="btn-whatsapp w-full !py-2.5 text-xs"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Consultar por WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-ink-muted">
          Los precios y contenidos se coordinan y confirman con un asesor. Esta página no procesa
          pagos ni reservas: toda contratación se realiza directamente por WhatsApp.
        </p>
      </div>
    </section>
  );
}
