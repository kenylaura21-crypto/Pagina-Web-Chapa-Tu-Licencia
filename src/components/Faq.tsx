import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs } from "@/data/faqs";
import { buildWhatsAppLink, whatsappMessages } from "@/utils/whatsapp";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="section bg-surface-soft">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 id="faq-title" className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl divide-y divide-line rounded-card border border-line bg-white">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-sm font-bold text-primary sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-secondary transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div id={`faq-panel-${i}`} className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={buildWhatsAppLink(whatsappMessages.asesor())}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            ¿Aún tienes dudas? Habla con un asesor
          </a>
        </div>
      </div>
    </section>
  );
}
