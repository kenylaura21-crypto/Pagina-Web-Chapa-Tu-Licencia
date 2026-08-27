export interface Testimonial {
  name: string;
  category: string;
  comment: string;
  rating: number; // 1 a 5
  reviewUrl?: string;
}

/**
 * No se inventan testimonios. Reemplazar por comentarios reales de
 * alumnos, con su autorización, antes de publicar el sitio.
 */
export const testimonials: Testimonial[] = [
  {
    name: "[PENDIENTE: NOMBRE DEL ALUMNO]",
    category: "[PENDIENTE: CATEGORÍA]",
    comment: "[PENDIENTE: COMENTARIO REAL DEL ALUMNO]",
    rating: 5,
  },
  {
    name: "[PENDIENTE: NOMBRE DEL ALUMNO]",
    category: "[PENDIENTE: CATEGORÍA]",
    comment: "[PENDIENTE: COMENTARIO REAL DEL ALUMNO]",
    rating: 5,
  },
  {
    name: "[PENDIENTE: NOMBRE DEL ALUMNO]",
    category: "[PENDIENTE: CATEGORÍA]",
    comment: "[PENDIENTE: COMENTARIO REAL DEL ALUMNO]",
    rating: 5,
  },
];
