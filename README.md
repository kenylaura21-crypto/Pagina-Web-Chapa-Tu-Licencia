# Chapa Tu Licencia — Sitio web

Sitio web comercial de **Chapa Tu Licencia**, escuela de manejo en Tacna, Perú.
Construido con **React + TypeScript + Vite + Tailwind CSS**, orientado 100% a
generar consultas y solicitudes por **WhatsApp**. No procesa pagos, no tiene
carrito de compras, no agenda citas y no confirma reservas automáticamente.

---

## 1. Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- npm 9 o superior (viene con Node.js)
- Una cuenta de [GitHub](https://github.com) (para versionar el código)
- Una cuenta de [Netlify](https://netlify.com) (para publicar el sitio)

---

## 2. Ejecutar el proyecto en tu computadora

```bash
# 1. Entra a la carpeta del proyecto
cd chapa-tu-licencia

# 2. Instala las dependencias (requiere conexión a internet)
npm install

# 3. Crea tu archivo de variables de entorno a partir del ejemplo
cp .env.example .env
# Edita .env y coloca el número real de WhatsApp (ver sección 4)

# 4. Inicia el servidor de desarrollo
npm run dev
```

Abre la URL que muestra la terminal (normalmente `http://localhost:5173`).
Los cambios que hagas en el código se reflejan automáticamente.

Para generar la versión de producción localmente:

```bash
npm run build     # genera la carpeta /dist
npm run preview   # sirve /dist para probarla antes de publicar
```

---

## 3. Estructura del proyecto

```
chapa-tu-licencia/
├─ index.html                  → SEO, Open Graph, datos estructurados
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ config/site.ts           → Datos generales: contacto, horarios, redes
│  ├─ data/
│  │  ├─ categories.ts         → Categorías de licencia (B-IIb, A-I, etc.)
│  │  ├─ services.ts           → Servicios ofrecidos
│  │  ├─ packages.ts           → Paquetes, precios e inclusiones
│  │  ├─ faqs.ts                → Preguntas frecuentes
│  │  ├─ testimonials.ts       → Testimonios de alumnos
│  │  └─ blog.ts                → Artículos de consejos (SEO local)
│  ├─ utils/whatsapp.ts        → Generador de enlaces y mensajes de WhatsApp
│  ├─ components/              → Todas las secciones de la página
│  │  └─ legal/                → Política de privacidad y términos
│  ├─ pages/                   → Home.tsx y NotFound.tsx
│  ├─ App.tsx                  → Enrutamiento general
│  └─ main.tsx                 → Punto de entrada de React
├─ netlify.toml                → Configuración de build y cabeceras de seguridad
└─ .env.example                → Variables de entorno de ejemplo
```

**Todo el contenido editable vive en `src/config/site.ts` y en `src/data/`.**
No necesitas tocar los componentes para cambiar textos, precios o contacto.

---

## 4. Cómo editar el contenido (sin programar)

### Número de WhatsApp
Edita el archivo `.env` (o `src/config/site.ts` si no usas `.env`):

```
VITE_WHATSAPP_NUMBER=51987654321
```

Formato obligatorio: código de país `51` + número, **sin** `+`, espacios ni guiones.

### Dirección, horarios, redes sociales, correo, RUC
Edita `src/config/site.ts`. Cada campo marcado como `[PENDIENTE: ...]` debe
reemplazarse por el dato real antes de publicar.

### Servicios
Edita `src/data/services.ts`. Cada servicio tiene: nombre, descripción,
categorías relacionadas, precio (o "Consultar") e ícono.

### Paquetes y precios
Edita `src/data/packages.ts`. Cada paquete tiene: nombre, categoría, vehículo,
número de clases, duración referencial, lista de "incluye", precio normal,
precio promocional opcional y la etiqueta "Más elegido" (`featured: true`).
El botón **"Solicitar este paquete"** arma automáticamente el mensaje de
WhatsApp con el nombre, categoría y precio del paquete — no necesitas tocar
el componente.

### Categorías de licencia
Edita `src/data/categories.ts`. **No se deben inventar requisitos, edades,
vigencias ni disposiciones legales** — cualquier dato normativo debe
validarse con fuentes oficiales peruanas (MTC / SUTRAN) antes de publicarse.

### Preguntas frecuentes
Edita `src/data/faqs.ts`.

### Testimonios
Edita `src/data/testimonials.ts`. Reemplaza los marcadores
`[PENDIENTE: ...]` por comentarios reales de alumnos, **con su autorización**.

### Artículos de consejos (blog)
Edita `src/data/blog.ts`.

### Fotografías
La sección "Galería" y el hero usan marcadores gráficos mientras no se
reciban fotografías reales (para no mostrar imágenes genéricas que no
correspondan a la empresa). Cuando tengas fotos reales:
1. Colócalas en `public/images/` (crea la carpeta).
2. Usa formatos **WebP o AVIF** optimizados.
3. Reemplaza los bloques de ícono en `src/components/Gallery.tsx` y
   `src/components/Hero.tsx` por etiquetas `<img>` con `alt` descriptivo y
   `loading="lazy"`.

### Logotipo
Cuando recibas el archivo del logotipo (SVG o PNG transparente):
1. Colócalo en `public/logo.svg` (o `.png`).
2. En `src/components/Header.tsx` y `src/components/Footer.tsx`, reemplaza el
   círculo con las iniciales "CL" por `<img src="/logo.svg" alt="Chapa Tu Licencia" className="h-9 w-auto" />`.
No se debe redibujar, deformar ni recolorear el logotipo original.

---

## 5. Mensajes de WhatsApp

Todos los botones de WhatsApp usan `src/utils/whatsapp.ts`, que arma enlaces
en el formato oficial:

```
https://wa.me/[NUMERO]?text=[MENSAJE_CODIFICADO]
```

Los mensajes nunca afirman que un pago fue realizado ni confirman una
reserva; siempre invitan a **coordinar** con un asesor. Puedes editar el
texto base de cada mensaje en ese mismo archivo.

---

## 6. Qué esta web **no** hace (a propósito)

- No integra pasarelas de pago (Culqi, Mercado Pago, Stripe, PayPal, Yape API).
- No solicita datos de tarjetas.
- No tiene carrito de compras ni checkout.
- No agenda citas ni muestra calendarios de disponibilidad.
- No confirma reservas ni pagos automáticamente.
- No garantiza la aprobación del examen de manejo.
- No se presenta como entidad pública ni emisora de licencias.

Toda compra, pago, coordinación de horarios o contratación se dirige siempre
a WhatsApp para ser coordinada directamente con un asesor humano.

---

## 7. Subir el proyecto a GitHub

```bash
# Dentro de la carpeta del proyecto
git init
git add .
git commit -m "Sitio web Chapa Tu Licencia"

# Crea un repositorio vacío en https://github.com/new (sin README)
git remote add origin https://github.com/TU-USUARIO/chapa-tu-licencia.git
git branch -M main
git push -u origin main
```

El archivo `.gitignore` ya está configurado para **no subir** `node_modules`,
`dist` ni tu archivo `.env` con datos reales.

---

## 8. Publicar en Netlify

### Opción A — Conectando el repositorio de GitHub (recomendada)
1. Entra a [app.netlify.com](https://app.netlify.com) → **"Add new site" → "Import an existing project"**.
2. Elige GitHub y selecciona el repositorio `chapa-tu-licencia`.
3. Netlify detectará automáticamente la configuración desde `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. En **Site settings → Environment variables**, agrega:
   - `VITE_WHATSAPP_NUMBER` = tu número real (ej. `51987654321`)
   - `VITE_SITE_URL` = tu dominio final
5. Presiona **Deploy site**.

### Opción B — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Dominio propio
En **Site settings → Domain management**, agrega tu dominio
(ej. `www.chapatulicencia.pe`) y sigue las instrucciones de Netlify para
apuntar los DNS. Luego actualiza `VITE_SITE_URL`, `index.html` (canonical y
Open Graph), `public/sitemap.xml` y `public/robots.txt` con el dominio final.

---

## 9. Seguridad implementada

- Cabeceras de seguridad (`X-Frame-Options`, `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`) y
  **Content-Security-Policy** configuradas en `netlify.toml`.
- Formulario de contacto con saneamiento básico de entradas y campo
  **honeypot** anti-spam (sin backend ni base de datos propia).
- No se solicitan datos sensibles (tarjetas, DNI, información bancaria).
- Variables sensibles (número de WhatsApp, URL del sitio) gestionadas por
  variables de entorno, nunca hardcodeadas en el repositorio.
- Enlaces externos con `rel="noopener noreferrer"`.
- Dependencias limitadas a paquetes ampliamente utilizados y mantenidos.

---

## 10. Accesibilidad y rendimiento

- Diseño mobile-first, con navegación por teclado y foco visible en todos
  los elementos interactivos.
- Contraste de color verificado contra WCAG 2.2 AA sobre la paleta de marca.
- `prefers-reduced-motion` respetado (desactiva animaciones si el usuario lo
  solicita en su sistema).
- Textos alternativos e íconos marcados como decorativos (`aria-hidden`)
  cuando corresponde.
- Botón flotante de WhatsApp posicionado para no tapar contenido en móvil.
- Sin imágenes pesadas por defecto (se usan marcadores gráficos hasta contar
  con fotografías reales optimizadas en WebP/AVIF).

---

## 11. Lista de datos pendientes antes de publicar

Busca `[PENDIENTE:` en el proyecto (`grep -r "PENDIENTE" src`) para ubicar
todos los campos que faltan. Entre ellos:

- [ ] Logo original en SVG o PNG transparente
- [ ] Número de WhatsApp
- [ ] Dirección exacta y referencia
- [ ] Enlace de incrustación de Google Maps (`googleMapsEmbedUrl`) y enlace directo (`googleMapsUrl`)
- [ ] Correo de contacto
- [ ] Teléfono de contacto (si es distinto al de WhatsApp)
- [ ] Horarios de atención
- [ ] Enlaces de Instagram, Facebook y TikTok
- [ ] Lista final de servicios, con precios reales o "Consultar"
- [ ] Paquetes definitivos: número de clases, duración, inclusiones y precios
- [ ] Fotografías reales (alumnos, instructores, vehículos, instalaciones) con autorización
- [ ] Testimonios reales de alumnos, con autorización
- [ ] Historia, misión, visión y metodología definitivas
- [ ] Razón social y RUC (si se mostrarán públicamente)
- [ ] Política de pagos y política de reprogramaciones
- [ ] Enlace del Libro de Reclamaciones (si corresponde)
- [ ] Dominio definitivo del sitio

---

## 12. Verificación recomendada antes de publicar

- Probar el sitio en un celular real (Android/iOS), tablet y computadora.
- Verificar que **todos** los botones de WhatsApp abran el mensaje correcto.
- Ejecutar `npm run build` y revisar que no existan errores de TypeScript.
- Revisar los enlaces de redes sociales y Google Maps una vez completados.
- Pasar el sitio publicado por [PageSpeed Insights](https://pagespeed.web.dev/)
  para revisar Core Web Vitals.

---

Empresa privada de asesoría y capacitación. No es una entidad pública ni
emite licencias de conducir.
