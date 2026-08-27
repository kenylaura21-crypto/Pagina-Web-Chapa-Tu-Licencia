import { UserCheck, GraduationCap, Timer, LayoutGrid, MessageCircleMore } from "lucide-react";
import { siteConfig } from "@/config/site";

const indicators = [
  { icon: UserCheck, label: "Atención personalizada" },
  { icon: GraduationCap, label: "Clases desde cero" },
  { icon: Timer, label: "Preparación práctica" },
  { icon: LayoutGrid, label: "Distintas categorías" },
  { icon: MessageCircleMore, label: "Atención rápida por WhatsApp" },
];

const stats = [
  { value: siteConfig.stats.alumnos, label: "Alumnos capacitados" },
  { value: siteConfig.stats.anios, label: "Años de experiencia" },
  { value: siteConfig.stats.categorias, label: "Categorías atendidas" },
  { value: siteConfig.stats.recomendacion, label: "De recomendación" },
];

export default function TrustBar() {
  return (
    <section aria-label="Indicadores de confianza" className="border-y border-line bg-white">
      <div className="container-page grid gap-8 py-10 md:py-12">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
          {indicators.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-ink">{label}</span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
