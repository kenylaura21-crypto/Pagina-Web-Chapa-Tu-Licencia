import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { categoryGroups, licenseCategories } from "@/data/categories";
import { services } from "@/data/services";
import { buildWhatsAppLink, whatsappMessages } from "@/utils/whatsapp";

/** Elimina caracteres de control y recorta espacios para una entrada más segura. */
function sanitize(value: string): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, 300);
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot anti-spam, debe permanecer vacío
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (website) return; // bot detectado, no continuar

    const cleanName = sanitize(name);
    const cleanPhone = sanitize(phone);
    const cleanMessage = sanitize(message);

    if (!cleanName || !cleanPhone || !category || !service) {
      setError("Por favor completa nombre, teléfono, categoría y servicio antes de continuar.");
      return;
    }

    const fullMessage = `${whatsappMessages.formulario(
      cleanName,
      category,
      service,
      cleanMessage
    )} Teléfono de contacto: ${cleanPhone}.`;

    window.open(buildWhatsAppLink(fullMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" aria-labelledby="contact-title" className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Contacto</span>
          <h2 id="contact-title" className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Cuéntanos qué necesitas
          </h2>
          <p className="mt-4 text-ink-muted">
            Completa el formulario y se abrirá WhatsApp con tu mensaje listo para enviar. No
            compartimos ni almacenamos estos datos en servidores propios.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-xl space-y-5 rounded-card border border-line bg-surface-soft p-6 sm:p-8"
          noValidate
        >
          {/* Honeypot: campo oculto para bots, invisible para personas */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">No completar este campo</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-ink">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={80}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none focus-visible:border-primary"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-semibold text-ink">
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                required
                maxLength={20}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none focus-visible:border-primary"
                placeholder="9XXXXXXXX"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="category" className="text-sm font-semibold text-ink">
                Categoría de interés
              </label>
              <select
                id="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none focus-visible:border-primary"
              >
                <option value="">Selecciona una categoría</option>
                {categoryGroups.map((group) => (
                  <optgroup key={group.id} label={group.label}>
                    {licenseCategories
                      .filter((c) => c.group === group.id)
                      .map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code} — {c.vehicle}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="service" className="text-sm font-semibold text-ink">
                Servicio
              </label>
              <select
                id="service"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none focus-visible:border-primary"
              >
                <option value="">Selecciona un servicio</option>
                {services.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-semibold text-ink">
              Mensaje (opcional)
            </label>
            <textarea
              id="message"
              rows={3}
              maxLength={300}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1.5 w-full resize-none rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none focus-visible:border-primary"
              placeholder="Cuéntanos brevemente qué necesitas"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm font-semibold text-secondary-hover">
              {error}
            </p>
          )}

          <button type="submit" className="btn-whatsapp w-full">
            <Send className="h-4 w-4" aria-hidden="true" />
            Enviar por WhatsApp
          </button>

          <p className="text-center text-xs text-ink-muted">
            No solicitamos DNI ni información bancaria en este formulario. El pago y la
            contratación se coordinan directamente con un asesor por WhatsApp.
          </p>
        </form>
      </div>
    </section>
  );
}
