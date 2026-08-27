import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="testimonios" aria-labelledby="testimonials-title" className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Testimonios</span>
          <h2
            id="testimonials-title"
            className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl"
          >
            Lo que dicen nuestros alumnos
          </h2>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-2xl rounded-card border border-line bg-surface-soft p-8 sm:p-10">
            <div className="flex items-center gap-1" aria-label={`Calificación: ${current.rating} de 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < current.rating ? "fill-secondary text-secondary" : "text-line"}`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <blockquote className="mt-4 text-lg leading-relaxed text-ink">
              “{current.comment}”
            </blockquote>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="font-display text-sm font-bold text-primary">{current.name}</p>
                <p className="text-xs text-ink-muted">Categoría {current.category}</p>
              </div>
              {current.reviewUrl && (
                <a
                  href={current.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary"
                >
                  Ver reseña original
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={prev}
                aria-label="Testimonio anterior"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-primary hover:border-primary"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <div className="flex gap-1.5" role="tablist" aria-label="Seleccionar testimonio">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name + i}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimonio ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === index ? "bg-secondary" : "bg-line"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Siguiente testimonio"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-primary hover:border-primary"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
