export interface Package {
  id: string;
  name: string;
  category: string;
  vehicle: string;
  classesCount: string;
  durationRef: string;
  includes: string[];
  regularPrice: string;
  promoPrice?: string;
  featured?: boolean;
}

/**
 * Precios y contenidos de ejemplo. Reemplazar por la información real
 * antes de publicar (ver sección "Datos pendientes" del README).
 */
export const packages: Package[] = [
  {
    id: "pack-moto-basico",
    name: "Paquete Moto Básico",
    category: "B-IIb",
    vehicle: "Moto lineal",
    classesCount: "[PENDIENTE: N.° DE CLASES]",
    durationRef: "[PENDIENTE: DURACIÓN REFERENCIAL]",
    includes: [
      "Clases prácticas de manejo",
      "Orientación sobre el trámite",
      "Preparación básica para el examen",
    ],
    regularPrice: "[PENDIENTE: PRECIO]",
  },
  {
    id: "pack-moto-completo",
    name: "Paquete Moto Completo",
    category: "B-IIb",
    vehicle: "Moto lineal",
    classesCount: "[PENDIENTE: N.° DE CLASES]",
    durationRef: "[PENDIENTE: DURACIÓN REFERENCIAL]",
    includes: [
      "Clases prácticas de manejo",
      "Preparación para el examen",
      "Asesoría durante todo el proceso",
      "Simulador de examen de conocimientos",
    ],
    regularPrice: "[PENDIENTE: PRECIO]",
    promoPrice: "[PENDIENTE: PRECIO PROMOCIONAL]",
    featured: true,
  },
  {
    id: "pack-mototaxi",
    name: "Paquete Mototaxi",
    category: "B-IIc",
    vehicle: "Mototaxi / moto torito",
    classesCount: "[PENDIENTE: N.° DE CLASES]",
    durationRef: "[PENDIENTE: DURACIÓN REFERENCIAL]",
    includes: ["Clases prácticas dirigidas", "Orientación sobre el trámite"],
    regularPrice: "[PENDIENTE: PRECIO]",
  },
  {
    id: "pack-auto-desde-cero",
    name: "Paquete Auto Desde Cero",
    category: "A-I",
    vehicle: "Automóvil",
    classesCount: "[PENDIENTE: N.° DE CLASES]",
    durationRef: "[PENDIENTE: DURACIÓN REFERENCIAL]",
    includes: [
      "Clases prácticas desde cero",
      "Orientación sobre requisitos y etapas",
      "Preparación para el examen",
    ],
    regularPrice: "[PENDIENTE: PRECIO]",
    promoPrice: "[PENDIENTE: PRECIO PROMOCIONAL]",
    featured: true,
  },
  {
    id: "pack-auto-intensivo",
    name: "Paquete Auto Intensivo",
    category: "A-I",
    vehicle: "Automóvil",
    classesCount: "[PENDIENTE: N.° DE CLASES]",
    durationRef: "[PENDIENTE: DURACIÓN REFERENCIAL]",
    includes: [
      "Clases prácticas intensivas",
      "Preparación para el examen",
      "Alquiler de vehículo para examen, cuando corresponda",
    ],
    regularPrice: "[PENDIENTE: PRECIO]",
  },
  {
    id: "pack-recategorizacion",
    name: "Paquete Recategorización",
    category: "A-IIa",
    vehicle: "Según categoría destino",
    classesCount: "[PENDIENTE: N.° DE CLASES]",
    durationRef: "[PENDIENTE: DURACIÓN REFERENCIAL]",
    includes: ["Asesoría de recategorización", "Orientación sobre requisitos", "Acompañamiento en el proceso"],
    regularPrice: "[PENDIENTE: PRECIO]",
  },
];
