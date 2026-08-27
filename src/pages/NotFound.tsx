import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/utils/whatsapp";

export default function NotFound() {
  return (
    <section className="section container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-6xl font-extrabold text-primary">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-primary">Página no encontrada</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        La página que buscas no existe o fue movida. Vuelve al inicio o escríbenos por WhatsApp si
        necesitas ayuda.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn-primary">
          Volver al inicio
        </Link>
        <a
          href={buildWhatsAppLink(whatsappMessages.general())}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-whatsapp"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Hablar por WhatsApp
        </a>
      </div>
    </section>
  );
}
