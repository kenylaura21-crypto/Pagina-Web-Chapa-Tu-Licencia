import { ArrowRight, MessageCircle, Bike, Car, Truck } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/utils/whatsapp";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-surface-soft">
      <div className="container-page grid gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
        <div className="max-w-xl animate-fade-up">
          <span className="eyebrow">Escuela de manejo en Tacna</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
            Tu licencia comienza con una buena preparación
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Te asesoramos durante el proceso y te preparamos con clases prácticas para moto y carro,
            desde cero hasta el día de tu evaluación.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#paquetes" className="btn-primary">
              Ver nuestros paquetes
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={buildWhatsAppLink(whatsappMessages.asesor())}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Hablar con un asesor
            </a>
          </div>

          <p className="mt-6 text-xs text-ink-muted">
            Empresa privada de asesoría y capacitación. No emitimos licencias de conducir.
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-card border border-line bg-primary shadow-card">
            <div className="grid grid-cols-3 gap-3 p-6 sm:p-8">
              <div className="col-span-3 rounded-2xl bg-white/5 p-5 text-white">
                <p className="font-display text-sm font-bold uppercase tracking-widest text-secondary">
                  Aprende con confianza
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Clases prácticas de moto, mototaxi y auto con acompañamiento personalizado en cada
                  sesión.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/10 py-6 text-white">
                <Bike className="h-7 w-7 text-secondary" aria-hidden="true" />
                <span className="text-xs font-semibold">Moto</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/10 py-6 text-white">
                <Truck className="h-7 w-7 text-secondary" aria-hidden="true" />
                <span className="text-xs font-semibold">Mototaxi</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/10 py-6 text-white">
                <Car className="h-7 w-7 text-secondary" aria-hidden="true" />
                <span className="text-xs font-semibold">Auto</span>
              </div>
            </div>

            {/* Carretera animada: representa el camino hacia la licencia */}
            <div className="relative h-14 overflow-hidden border-t border-white/10 bg-primary-hover">
              <div className="road-divider absolute left-0 top-1/2 -translate-y-1/2" aria-hidden="true" />
              <div className="animate-drive absolute top-1/2 -translate-y-1/2 text-secondary" aria-hidden="true">
                <Car className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-line bg-white px-5 py-4 shadow-card sm:block">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Categorías</p>
            <p className="font-display text-lg font-extrabold text-primary">B-IIb · B-IIc · A-I y más</p>
          </div>
        </div>
      </div>
    </section>
  );
}
