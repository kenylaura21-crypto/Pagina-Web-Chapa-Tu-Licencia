export interface BlogPost {
  title: string;
  excerpt: string;
  tag: string;
}

/**
 * Estructura lista para publicar artículos de blog orientados a SEO local.
 * No publicar información normativa sin verificarla con fuentes oficiales.
 */
export const blogPosts: BlogPost[] = [
  {
    title: "5 consejos para principiantes antes de tu primera clase de manejo",
    excerpt: "Prepárate mental y físicamente para comenzar a manejar con confianza desde el primer día.",
    tag: "Principiantes",
  },
  {
    title: "Diferencias entre las categorías de licencia en Perú",
    excerpt: "Una guía general para entender qué categoría podría corresponder a tu necesidad.",
    tag: "Categorías",
  },
  {
    title: "Errores frecuentes al manejar moto por primera vez",
    excerpt: "Identifica y evita los errores más comunes de los conductores nuevos.",
    tag: "Seguridad vial",
  },
  {
    title: "Cómo prepararte mejor para tu examen de manejo",
    excerpt: "Recomendaciones prácticas para llegar con más confianza al día de tu evaluación.",
    tag: "Preparación",
  },
];
