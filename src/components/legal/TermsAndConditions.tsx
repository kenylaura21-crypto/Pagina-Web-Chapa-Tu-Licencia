import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

export default function TermsAndConditions() {
  return (
    <section className="section container-page mx-auto max-w-3xl">
      <Link to="/" className="text-sm font-semibold text-primary hover:text-secondary">
        ← Volver al inicio
      </Link>
      <h1 className="mt-6 font-display text-3xl font-extrabold text-primary">
        Términos y condiciones
      </h1>
      <p className="mt-2 text-sm text-ink-muted">
        Última actualización: [PENDIENTE: FECHA DE ACTUALIZACIÓN]
      </p>

      <div className="prose prose-sm mt-8 max-w-none space-y-6 text-ink-muted">
        <div>
          <h2 className="font-display text-lg font-bold text-primary">Naturaleza del servicio</h2>
          <p className="mt-2">
            {siteConfig.businessName} es una empresa privada de asesoría, orientación y
            capacitación para personas interesadas en obtener, revalidar o recategorizar su
            licencia de conducir en Perú. No somos una entidad pública, no somos un centro de
            evaluación y no emitimos licencias de conducir.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-primary">Sobre esta página web</h2>
          <p className="mt-2">
            Esta web es un canal informativo. No realiza cobros, no procesa pagos, no administra
            reservas ni citas, y no confirma contrataciones de forma automática. Toda solicitud de
            información, compra, pago o coordinación de horarios se realiza exclusivamente de
            forma directa con un asesor a través de WhatsApp.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-primary">Precios y paquetes</h2>
          <p className="mt-2">
            Los precios y contenidos de los paquetes mostrados son referenciales y están sujetos a
            confirmación por parte de un asesor. Las promociones pueden tener vigencia limitada.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-primary">Sobre el examen de manejo</h2>
          <p className="mt-2">
            Brindamos preparación y práctica orientada a la evaluación de manejo. No garantizamos
            la aprobación del examen, ya que su resultado depende de la entidad evaluadora
            correspondiente y del desempeño de cada alumno.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-primary">Política de pagos</h2>
          <p className="mt-2">
            [PENDIENTE: detallar la política de pagos de la empresa — medios aceptados, adelantos,
            comprobantes, etc.]
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-primary">Política de reprogramaciones</h2>
          <p className="mt-2">
            [PENDIENTE: detallar la política de reprogramación o cancelación de clases.]
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-primary">Contacto</h2>
          <p className="mt-2">
            Ante cualquier duda sobre estos términos, escríbenos a {siteConfig.email} o por
            WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
