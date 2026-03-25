import { forwardRef, useRef, useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const whatsappPhone = "573228083337";

function MailIcon({ className = "" }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M4.5 6.75h15a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 15.75v-7.5a1.5 1.5 0 0 1 1.5-1.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m4.5 7.5 7.5 6 7.5-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

const ContactField = forwardRef(function ContactField({ label, ...props }, ref) {
  return (
    <div className="space-y-1.5">
      <label className="sr-only" htmlFor={props.id}>
        {label}
      </label>
      <input
        ref={ref}
        {...props}
        className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#ff3d4d]/60 focus:bg-black/50 focus:ring-2 focus:ring-[#ff3d4d]/10"
      />
    </div>
  );
});

function CompactChip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[9px] font-black uppercase tracking-[0.28em] text-white/45">
      {children}
    </span>
  );
}

export function Contact() {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const nameInputRef = useRef(null);

  const buildMessage = (useFallback = false) => {
    const name = formData.name.trim() || (useFallback ? "Tu nombre" : "");
    const email = formData.email.trim() || (useFallback ? "Tu correo" : "");
    const message =
      formData.message.trim() || (useFallback ? "Necesito una automatizacion personalizada" : "");

    return `Hola Don Prueba, soy ${name}. Mi correo es ${email}. Quiero solicitar: ${message}.`;
  };

  const hasCompleteForm =
    Boolean(formData.name.trim()) && Boolean(formData.email.trim()) && Boolean(formData.message.trim());

  const resetForm = () => {
    setFormOpen(false);
    setFormData(initialFormState);
  };

  const openRequestForm = () => {
    setFormOpen(true);
    window.setTimeout(() => nameInputRef.current?.focus(), 120);
  };

  const sendWhatsApp = (useFallback = false) => {
    const template = buildMessage(useFallback);
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(template)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    resetForm();
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(
      `Solicitud de automatizacion${formData.name.trim() ? ` - ${formData.name.trim()}` : ""}`,
    );
    const body = encodeURIComponent(buildMessage(!hasCompleteForm));
    const mailto = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    resetForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendWhatsApp(false);
  };

  return (
    <section
      className="reveal border-t border-[#8a0012]/30 bg-[#121212]/20 px-4 py-8 sm:px-6 sm:py-10"
      id="contact-footer"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff3d4d]">
              ¿Tu empresa necesita una solucion web?
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tighter leading-[0.9] text-white sm:text-4xl md:text-5xl">
              Vamos a crear
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#a1a1aa]">
              Este bloque queda mas compacto: abres la solicitud, llenas el formulario y envias un mensaje construido
              para WhatsApp o correo sin perder claridad.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                aria-controls="contact-request-form"
                aria-expanded={formOpen}
                className="inline-flex items-center justify-center rounded-full border border-[#ff3d4d]/30 bg-[#ff3d4d] px-5 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff5664] hover:shadow-[0_16px_30px_rgba(255,61,77,0.18)]"
                form={formOpen ? "contact-request-form" : undefined}
                onClick={formOpen ? undefined : openRequestForm}
                type={formOpen ? "submit" : "button"}
              >
                {formOpen ? "Enviar solicitud" : "Hacer solicitud"}
              </button>

              <button
                aria-label="Abrir WhatsApp"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/40 hover:bg-[#2bd86f] hover:shadow-[0_10px_24px_rgba(37,211,102,0.24)]"
                onClick={() => sendWhatsApp(!hasCompleteForm)}
                type="button"
                title="WhatsApp"
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 invert brightness-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]"
                  src="/multimedia/whatssapp.svg"
                />
              </button>

              <button
                aria-label="Abrir correo"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_10px_24px_rgba(255,255,255,0.08)]"
                onClick={sendEmail}
                type="button"
                title="Correo"
              >
                <MailIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-[-1px]" />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-white/45">
              <span>Sede Central</span>
              <span className="h-px w-8 bg-white/10" />
              <span>Bogota / Colombia</span>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">Solicitud rapida</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Abre el formulario con el boton principal, completa tus datos y envialo con un mensaje construido
                  para tu solicitud.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <CompactChip>1 abrir</CompactChip>
                <CompactChip>2 completar</CompactChip>
                <CompactChip>3 enviar</CompactChip>
              </div>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ${formOpen ? "mt-4 max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
              <form
                aria-label="Formulario de contacto"
                className="space-y-3"
                id="contact-request-form"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <ContactField
                    autoComplete="organization"
                    id="company-name"
                    label="Nombre de la empresa"
                    name="company"
                    onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                    placeholder="NOMBRE DE LA EMPRESA"
                    ref={nameInputRef}
                    required
                    type="text"
                    value={formData.name}
                  />

                  <ContactField
                    autoComplete="email"
                    id="email"
                    label="Correo profesional"
                    name="email"
                    onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                    placeholder="CORREO PROFESIONAL"
                    required
                    type="email"
                    value={formData.email}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="sr-only" htmlFor="project-desc">
                    Descripcion del proyecto
                  </label>
                  <textarea
                    autoComplete="off"
                    className="min-h-[120px] w-full resize-none rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#ff3d4d]/60 focus:bg-black/50 focus:ring-2 focus:ring-[#ff3d4d]/10"
                    id="project-desc"
                    name="message"
                    onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                    placeholder="DESCRIPCION DEL PROYECTO"
                    required
                    rows={4}
                    value={formData.message}
                  />
                </div>

                <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                  El mensaje se construye automaticamente a partir de tus respuestas.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
