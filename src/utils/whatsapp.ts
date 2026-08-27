import { siteConfig } from "@/config/site";

/**
 * Construye un enlace oficial de WhatsApp (wa.me) con un mensaje
 * prellenado y codificado. Nunca indica que un pago ya fue realizado,
 * ni confirma una reserva: siempre invita a "coordinar" con un asesor.
 */
export function buildWhatsAppLink(message: string): string {
  const number = siteConfig.whatsappNumber.replace(/[^\d]/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export const whatsappMessages = {
  general: () => "Hola, Chapa Tu Licencia. Deseo recibir información sobre sus servicios.",

  categoria: (categoria: string) =>
    `Hola, Chapa Tu Licencia. Deseo información sobre la categoría ${categoria}.`,

  clases: (tipoVehiculo: string, nivel: string) =>
    `Hola, Chapa Tu Licencia. Deseo información sobre las clases de ${tipoVehiculo}. Mi nivel de experiencia es ${nivel}.`,

  servicio: (servicio: string, categoria?: string) =>
    categoria
      ? `Hola, Chapa Tu Licencia. Deseo información sobre el servicio de ${servicio} para la categoría ${categoria}.`
      : `Hola, Chapa Tu Licencia. Deseo información sobre el servicio de ${servicio}.`,

  paquete: (paquete: string, categoria: string, precio: string) =>
    `Hola, Chapa Tu Licencia. Estoy interesado(a) en el paquete ${paquete} para la categoría ${categoria}, con precio de ${precio}. Deseo recibir información para coordinar el servicio y la forma de pago.`,

  formulario: (nombre: string, categoria: string, servicio: string, mensaje: string) =>
    `Hola, Chapa Tu Licencia. Soy ${nombre}. Me interesa el servicio "${servicio}" para la categoría "${categoria}". ${
      mensaje ? `Comentario: ${mensaje}` : ""
    }`.trim(),

  asesor: () => "Hola, Chapa Tu Licencia. Quisiera hablar con un asesor para resolver algunas dudas.",
};
