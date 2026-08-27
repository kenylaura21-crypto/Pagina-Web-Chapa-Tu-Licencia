import {
  HeartHandshake,
  Award,
  Sprout,
  ClipboardCheck,
  Bike,
  MessagesSquare,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Asesoría personalizada",
    description: "Te orientamos según tu categoría, tu experiencia y tu disponibilidad de tiempo.",
  },
  {
    icon: Award,
    title: "Instructores capacitados",
    description: "Acompañamiento cercano en cada práctica, con paciencia y método.",
  },
  {
    icon: Sprout,
    title: "Enseñanza desde cero",
    description: "Ideal si nunca has manejado. Avanzamos a tu ritmo, sin presiones.",
  },
  {
    icon: ClipboardCheck,
    title: "Preparación para el examen",
    description: "Practicamos las maniobras y el manejo que evaluará la entidad correspondiente.",
  },
  {
    icon: Bike,
    title: "Prácticas para moto y carro",
    description: "Clases específicas según el vehículo y la categoría que necesitas.",
  },
  {
    icon: MessagesSquare,
    title: "Atención directa",
    description: "Resolvemos tus dudas rápido, sin formularios largos ni esperas.",
  },
  {
    icon: Handshake,
    title: "Acompañamiento en el proceso",
    description: "Te orientamos durante las etapas del trámite, cuando corresponda.",
  },
  {
    icon: ShieldCheck,
    title: "Información clara y transparente",
    description: "Sin letras pequeñas: coordinamos contigo cada detalle por WhatsApp.",
  },
];

export default function WhyUs() {
  return (
    <section id="nosotros-destacados" aria-labelledby="whyus-title" className="section bg-surface-soft">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Por qué elegirnos</span>
          <h2 id="whyus-title" className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Preparación seria, trato cercano
          </h2>
          <p className="mt-4 text-ink-muted">
            Acompañamos cada etapa de tu aprendizaje con información clara y práctica real al
            volante o al manubrio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="card animate-fade-up transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-50 text-secondary">
                <reason.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-primary">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
