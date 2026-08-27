import { useState } from "react";
import { Bike, Truck, Car, Users, Building2, Wrench, X, ImageOff } from "lucide-react";

const items = [
  { icon: Bike, label: "Prácticas de moto" },
  { icon: Truck, label: "Prácticas de mototaxi" },
  { icon: Car, label: "Prácticas de automóvil" },
  { icon: Users, label: "Instructores" },
  { icon: Building2, label: "Instalaciones" },
  { icon: Wrench, label: "Vehículos" },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="galeria" aria-labelledby="gallery-title" className="section bg-surface-soft">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Galería</span>
          <h2 id="gallery-title" className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Nuestras clases y espacios
          </h2>
          <p className="mt-4 text-ink-muted">
            [PENDIENTE: reemplazar estos marcadores por fotografías reales de alumnos, instructores,
            vehículos e instalaciones, con autorización correspondiente.]
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {items.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setOpen(i)}
              className="group relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden rounded-card border border-line bg-primary/95 text-white transition-transform hover:-translate-y-1"
              aria-label={`Ver ${item.label} (marcador, foto pendiente)`}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #ED7318 0 2px, transparent 2px 18px)",
                }}
                aria-hidden="true"
              />
              <item.icon className="relative h-9 w-9 text-secondary" aria-hidden="true" />
              <span className="relative text-sm font-semibold">{item.label}</span>
              <span className="relative flex items-center gap-1 text-[10px] uppercase tracking-wide text-white/60">
                <ImageOff className="h-3 w-3" aria-hidden="true" />
                Foto pendiente
              </span>
            </button>
          ))}
        </div>

        {open !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={items[open].label}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-6"
            onClick={() => setOpen(null)}
          >
            <div className="relative w-full max-w-lg rounded-card bg-white p-8 text-center" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setOpen(null)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line text-primary hover:border-primary"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
              {(() => {
                const Icon = items[open].icon;
                return <Icon className="mx-auto h-12 w-12 text-secondary" aria-hidden="true" />;
              })()}
              <p className="mt-4 font-display text-lg font-bold text-primary">{items[open].label}</p>
              <p className="mt-2 text-sm text-ink-muted">
                Esta sección mostrará fotografías reales una vez sean proporcionadas por la empresa.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
