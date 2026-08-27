export interface Service {
  id: string;
  name: string;
  description: string;
  categories: string[];
  price: string; // texto libre o "Consultar"
  icon:
    | "id-card"
    | "refresh-cw"
    | "layers"
    | "bike"
    | "truck"
    | "car"
    | "clipboard-check"
    | "key"
    | "graduation-cap"
    | "monitor";
}

export const services: Service[] = [
  {
    id: "licencia-nueva",
    name: "Asesoría para licencia nueva",
    description:
      "Orientación completa sobre requisitos y etapas del trámite para obtener tu primera licencia.",
    categories: ["B-IIb", "B-IIc", "A-I"],
    price: "Consultar",
    icon: "id-card",
  },
  {
    id: "revalidacion",
    name: "Revalidación de licencia",
    description: "Asesoría para renovar tu licencia vigente y orientación sobre el proceso a seguir.",
    categories: ["B-IIb", "B-IIc", "A-I", "A-IIa"],
    price: "Consultar",
    icon: "refresh-cw",
  },
  {
    id: "recategorizacion",
    name: "Recategorización",
    description: "Acompañamiento para pasar a una categoría superior según tu experiencia y necesidad.",
    categories: ["A-IIa", "A-IIb", "A-IIIa", "A-IIIb", "A-IIIc"],
    price: "Consultar",
    icon: "layers",
  },
  {
    id: "clases-moto-lineal",
    name: "Clases de moto lineal",
    description: "Clases prácticas desde cero para perder el miedo y manejar con seguridad.",
    categories: ["B-IIb"],
    price: "Consultar",
    icon: "bike",
  },
  {
    id: "clases-moto-torito",
    name: "Clases de mototaxi / moto torito",
    description: "Práctica dirigida para el manejo de vehículos menores de tres ruedas.",
    categories: ["B-IIc"],
    price: "Consultar",
    icon: "truck",
  },
  {
    id: "clases-auto",
    name: "Clases de automóvil",
    description: "Aprende a manejar auto desde cero con acompañamiento paso a paso.",
    categories: ["A-I"],
    price: "Consultar",
    icon: "car",
  },
  {
    id: "preparacion-examen",
    name: "Preparación para el examen",
    description: "Práctica enfocada en la evaluación de manejo, según la categoría que te corresponda.",
    categories: ["B-IIb", "B-IIc", "A-I", "A-IIb"],
    price: "Consultar",
    icon: "clipboard-check",
  },
  {
    id: "alquiler-vehiculo",
    name: "Alquiler de vehículo para examen",
    description: "Disponibilidad de vehículo para rendir tu evaluación, cuando corresponda.",
    categories: ["B-IIb", "B-IIc", "A-I"],
    price: "Consultar",
    icon: "key",
  },
  {
    id: "curso-actualizacion",
    name: "Cursos de actualización",
    description: "Refuerza tus conocimientos y técnica de manejo con clases de actualización.",
    categories: ["A-I", "A-IIa"],
    price: "Consultar",
    icon: "graduation-cap",
  },
  {
    id: "simulador-examen",
    name: "Simulador de examen de conocimientos",
    description: "Practica con preguntas de referencia para familiarizarte con la evaluación teórica.",
    categories: ["B-IIb", "B-IIc", "A-I"],
    price: "Consultar",
    icon: "monitor",
  },
];
