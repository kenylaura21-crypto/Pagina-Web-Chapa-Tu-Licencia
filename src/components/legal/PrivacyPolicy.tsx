import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicy() {
  return (
    <section className="section container-page mx-auto max-w-3xl">
      <Link to="/" className="text-sm font-semibold text-primary hover:text-secondary">
        ← Volver al inicio
      </Link>
      <h1 className="mt-6 font-display text-3xl font-extrabold text-primary">
        Política de privacidad
      </h1>
      <p className="mt-2 text-sm text-ink-muted">
        Última actualización: [PENDIENTE: FECHA DE ACTUALIZACIÓN]
      </p>

      <div className="prose prose-sm mt-8 max-w-none space-y-6 text-ink-muted">
        <p>
          {siteConfig.businessName} ("nosotros") respeta tu privacidad. Este sitio web es
          informativo: no procesa pagos ni almacena datos de tarjetas, y no gestiona reservas ni
          citas en línea.
        </p>
        <div>
          <h2 className="font-display text-lg font-bold text-primary">Datos que podemos recibir</h2>
          <p className="mt-2">
            A través del formulario de contacto podemos recibir tu nombre, teléfono, categoría de
            interés, servicio y un mensaje opcional. Estos datos se utilizan únicamente para
            generar un mensaje de WhatsApp y ponerte en contacto con un asesor. No solicitamos DNI
            ni información bancaria mediante formularios públicos.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-primary">Uso de la información</h2>
          <p className="mt-2">
            La información compartida por WhatsApp se utiliza para brindarte asesoría, coordinar
            servicios, horarios y formas de pago directamente con nuestro equipo. No compartimos
            tus datos con terceros con fines comerciales.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-primary">WhatsApp como canal de contacto</h2>
          <p className="mt-2">
            Al presionar un botón de WhatsApp, se abrirá la aplicación o sitio web de WhatsApp con
            un mensaje prellenado. El envío del mensaje y la conversación posterior se rigen por
            las condiciones de WhatsApp.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-primary">Cookies y analítica</h2>
          <p className="mt-2">
            [PENDIENTE: indicar si se utilizarán herramientas de analítica web y, de ser así,
            detallar qué datos recopilan.]
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-primary">Contacto</h2>
          <p className="mt-2">
            Para consultas sobre esta política, escríbenos a {siteConfig.email} o por WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
