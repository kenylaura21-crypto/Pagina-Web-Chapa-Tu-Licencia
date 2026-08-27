export type CategoryGroup = "motos" | "autos" | "profesionales" | "especiales";

export interface LicenseCategory {
  code: string;
  group: CategoryGroup;
  vehicle: string;
  description: string;
}

/**
 * IMPORTANTE: no se agregan requisitos, edades, vigencias ni disposiciones
 * legales. Cualquier dato normativo debe validarse con fuentes oficiales
 * peruanas antes de publicarse (MTC / SUTRAN).
 */
export const categoryGroups: { id: CategoryGroup; label: string }[] = [
  { id: "motos", label: "Motos" },
  { id: "autos", label: "Autos" },
  { id: "profesionales", label: "Profesionales" },
  { id: "especiales", label: "Especiales" },
];

export const licenseCategories: LicenseCategory[] = [
  {
    code: "B-IIb",
    group: "motos",
    vehicle: "Motocicletas",
    description:
      "Asesoría y preparación para conducir motocicletas. Incluye orientación sobre el proceso y clases prácticas.",
  },
  {
    code: "B-IIc",
    group: "motos",
    vehicle: "Mototaxi / moto torito",
    description:
      "Asesoría y preparación orientada a vehículos menores de tres ruedas, como mototaxi o moto torito.",
  },
  {
    code: "A-I",
    group: "autos",
    vehicle: "Automóviles y vehículos livianos",
    description:
      "Asesoría y preparación para conducir autos y vehículos livianos, incluyendo clases desde cero.",
  },
  {
    code: "A-IIa",
    group: "autos",
    vehicle: "Vehículos livianos (siguiente nivel)",
    description: "Orientación sobre el proceso de obtención y recategorización para esta categoría.",
  },
  {
    code: "A-IIb",
    group: "profesionales",
    vehicle: "Vehículos de transporte (profesional)",
    description: "Asesoría para licencias profesionales y preparación específica para su evaluación.",
  },
  {
    code: "A-IIIa",
    group: "profesionales",
    vehicle: "Transporte de pasajeros / carga (profesional)",
    description: "Orientación sobre requisitos y etapas del trámite para esta categoría profesional.",
  },
  {
    code: "A-IIIb",
    group: "profesionales",
    vehicle: "Transporte de pasajeros / carga (profesional)",
    description: "Asesoría durante las etapas del proceso de obtención o recategorización.",
  },
  {
    code: "A-IIIc",
    group: "profesionales",
    vehicle: "Transporte de pasajeros / carga (profesional)",
    description: "Acompañamiento y orientación especializada para esta categoría profesional.",
  },
  {
    code: "A-IV",
    group: "especiales",
    vehicle: "Categoría especial",
    description: "Asesoría orientativa para esta categoría especial. Consulta con un asesor los detalles.",
  },
];
