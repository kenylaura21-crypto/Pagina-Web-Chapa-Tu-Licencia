/**
 * CONFIGURACIÓN GENERAL DEL SITIO
 * ---------------------------------------------------------------
 * Este archivo concentra los datos que cambian con más frecuencia:
 * contacto, redes sociales, horarios y textos institucionales.
 * Edítalo aquí y se actualizará en toda la web automáticamente.
 *
 * Los valores marcados como [PENDIENTE: ...] son obligatorios y
 * deben reemplazarse antes de publicar el sitio en producción.
 * ---------------------------------------------------------------
 */

export const siteConfig = {
  businessName: "Chapa Tu Licencia",
  shortDescription:
    "Escuela de manejo en Tacna. Asesoría y preparación para licencias de conducir de moto y auto.",
  city: "Tacna, Perú",

  // Número de WhatsApp: código de país 51 + número, SIN "+", espacios ni guiones.
  // Se puede sobreescribir con la variable de entorno VITE_WHATSAPP_NUMBER.
  whatsappNumber:
    import.meta.env.VITE_WHATSAPP_NUMBER || "[PENDIENTE: NÚMERO DE WHATSAPP]",

  phoneDisplay: "[PENDIENTE: TELÉFONO DE CONTACTO]",
  email: "[PENDIENTE: CORREO DE CONTACTO]",

  address: "[PENDIENTE: DIRECCIÓN EXACTA]",
  addressReference: "[PENDIENTE: REFERENCIA DE UBICACIÓN]",
  googleMapsEmbedUrl: "[PENDIENTE: ENLACE DE INCRUSTACIÓN DE GOOGLE MAPS]",
  googleMapsUrl: "[PENDIENTE: ENLACE DE GOOGLE MAPS]",

  schedule: [
    { day: "Lunes a viernes", hours: "[PENDIENTE: HORARIO]" },
    { day: "Sábados", hours: "[PENDIENTE: HORARIO]" },
    { day: "Domingos", hours: "[PENDIENTE: HORARIO]" },
  ],

  social: {
    instagram: "[PENDIENTE: ENLACE DE INSTAGRAM]",
    facebook: "[PENDIENTE: ENLACE DE FACEBOOK]",
    tiktok: "[PENDIENTE: ENLACE DE TIKTOK]",
  },

  legal: {
    razonSocial: "[PENDIENTE: RAZÓN SOCIAL]",
    ruc: "[PENDIENTE: RUC]",
    disclaimer:
      "Chapa Tu Licencia es una empresa privada de asesoría y capacitación. No es una entidad pública ni emite licencias de conducir.",
  },

  stats: {
    alumnos: "[PENDIENTE: CANTIDAD REAL DE ALUMNOS]",
    anios: "[PENDIENTE: AÑOS DE EXPERIENCIA]",
    categorias: "8",
    recomendacion: "[PENDIENTE: % DE RECOMENDACIÓN]",
  },
};

export type SiteConfig = typeof siteConfig;
