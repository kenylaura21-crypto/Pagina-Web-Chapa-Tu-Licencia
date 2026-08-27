import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/utils/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink(whatsappMessages.general())}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="Escribir por WhatsApp a Chapa Tu Licencia"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-floating transition-transform hover:scale-105 focus-visible:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
    </a>
  );
}
