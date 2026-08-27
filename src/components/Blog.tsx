import { ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <section id="consejos" aria-labelledby="blog-title" className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Consejos</span>
          <h2 id="blog-title" className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Aprende antes de subirte al volante
          </h2>
          <p className="mt-4 text-ink-muted">
            Recomendaciones prácticas sobre manejo, seguridad vial y preparación para el examen.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <article key={post.title} className="card flex flex-col">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-50 text-secondary">
                <BookOpen className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <span className="mt-4 text-[11px] font-bold uppercase tracking-wide text-secondary">
                {post.tag}
              </span>
              <h3 className="mt-2 font-display text-sm font-bold leading-snug text-primary">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-muted">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Próximamente
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-muted">
          Contenido informativo general. La información normativa debe verificarse con fuentes
          oficiales antes de su publicación.
        </p>
      </div>
    </section>
  );
}
