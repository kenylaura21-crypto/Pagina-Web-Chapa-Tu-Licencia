import { MousePointerClick, MessageCircle, UserCheck2, HandCoins, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Elige el servicio o paquete",
    description: "Revisa las categorías, servicios y paquetes disponibles en esta página.",
  },
  {
    icon: MessageCircle,
    title: "Escríbenos por WhatsApp",
    description: "Presiona cualquier botón de WhatsApp para iniciar la conversación con nosotros.",
  },
  {
    icon: UserCheck2,
    title: "Recibe asesoría personalizada",
    description: "Un asesor resolverá tus dudas según tu categoría y disponibilidad.",
  },
  {
    icon: HandCoins,
    title: "Coordina el pago y los horarios",
    description: "Todo se define directamente con el asesor, sin trámites en línea.",
  },
  {
    icon: GraduationCap,
    title: "Inicia tu preparación",
    description: "Comienza tus clases y tu proceso de preparación con acompañamiento.",
  },
];

export default function HowToStart() {
  return (
    <section id="como-empezar" aria-labelledby="how-title" className="section bg-primary text-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow text-secondary">Cómo empezar</span>
          <h2 id="how-title" className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            Un proceso simple, sin líos
          </h2>
          <p className="mt-4 text-white/75">
            No necesitas registrarte ni pagar en línea. Todo se coordina directamente con un
            asesor por WhatsApp.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title} className="relative rounded-card border border-white/15 bg-white/5 p-6">
              <span className="font-display text-3xl font-extrabold text-secondary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <step.icon className="mt-4 h-6 w-6 text-white/70" aria-hidden="true" />
              <h3 className="mt-3 font-display text-base font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
