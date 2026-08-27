import { Target, Eye, Gem, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Misión",
    text: "Brindar asesoría y capacitación práctica y confiable para que cada alumno se prepare con confianza para conducir.",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Ser una escuela de manejo referente en Tacna por su trato cercano, su metodología práctica y su compromiso con la seguridad vial.",
  },
  {
    icon: Gem,
    title: "Valores",
    text: "Transparencia, paciencia, responsabilidad y respeto por el ritmo de aprendizaje de cada alumno.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad vial",
    text: "Promovemos hábitos de manejo responsables desde la primera clase, dentro y fuera del vehículo.",
  },
];

export default function About() {
  return (
    <section id="nosotros" aria-labelledby="about-title" className="section bg-surface-soft">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="eyebrow">Nosotros</span>
          <h2 id="about-title" className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Asesoría cercana, preparación real
          </h2>
          <p className="mt-5 text-ink-muted leading-relaxed">
            Chapa Tu Licencia es una empresa privada de Tacna dedicada a la asesoría, orientación
            y preparación de personas que buscan obtener, revalidar o recategorizar su licencia
            de conducir. Acompañamos a cada alumno desde sus primeras clases hasta su preparación
            para la evaluación correspondiente.
          </p>
          <p className="mt-4 text-ink-muted leading-relaxed">
            [PENDIENTE: HISTORIA BREVE DE LA EMPRESA — cómo y cuándo inició, qué la motiva y qué la
            diferencia. Reemplazar este párrafo con el texto real proporcionado por la empresa.]
          </p>

          <div className="mt-6 rounded-2xl border border-line bg-white p-5">
            <p className="text-sm font-semibold text-primary">Nuestra metodología</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Combinamos orientación clara sobre el trámite con práctica progresiva al volante o
              al manubrio, adaptada al nivel de experiencia de cada alumno.
              [PENDIENTE: DETALLE ADICIONAL DE METODOLOGÍA, si la empresa desea ampliarlo.]
            </p>
          </div>

          <p className="mt-6 rounded-2xl border border-line bg-white p-4 text-xs text-ink-muted">
            Chapa Tu Licencia es una empresa privada de asesoría y capacitación. No es una entidad
            pública, no es un centro evaluador y no emite licencias de conducir.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary">
                <v.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-primary">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
