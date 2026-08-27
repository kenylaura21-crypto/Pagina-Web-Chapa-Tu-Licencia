import { useState } from "react";
import { Bike, Car, Briefcase, Sparkles, MessageCircle } from "lucide-react";
import { categoryGroups, licenseCategories, type CategoryGroup } from "@/data/categories";
import { buildWhatsAppLink, whatsappMessages } from "@/utils/whatsapp";

const groupIcons: Record<CategoryGroup, typeof Bike> = {
  motos: Bike,
  autos: Car,
  profesionales: Briefcase,
  especiales: Sparkles,
};

export default function Categories() {
  const [active, setActive] = useState<CategoryGroup>("motos");
  const filtered = licenseCategories.filter((c) => c.group === active);

  return (
    <section id="categorias" aria-labelledby="categories-title" className="section bg-surface-soft">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Categorías atendidas</span>
          <h2 id="categories-title" className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Encuentra tu categoría
          </h2>
          <p className="mt-4 text-ink-muted">
            Identifica la categoría que necesitas y consulta con un asesor los detalles de tu
            trámite. La normativa vigente debe verificarse con la entidad oficial correspondiente.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Filtrar categorías por grupo"
          className="mt-8 flex flex-wrap gap-2"
        >
          {categoryGroups.map((group) => {
            const Icon = groupIcons[group.id];
            const isActive = group.id === active;
            return (
              <button
                key={group.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(group.id)}
                className={`inline-flex items-center gap-2 rounded-pill border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-primary bg-primary text-white"
                    : "border-line bg-white text-ink hover:border-primary"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {group.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
          {filtered.map((cat) => (
            <article key={cat.code} className="card">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-extrabold text-primary">{cat.code}</h3>
                <span className="rounded-full bg-secondary-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-secondary">
                  {cat.vehicle}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{cat.description}</p>
              <a
                href={buildWhatsAppLink(whatsappMessages.categoria(cat.code))}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-whatsapp mt-5 w-full !py-2.5 text-xs"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Consultar por WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
