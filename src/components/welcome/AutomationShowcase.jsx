import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const automations = [
  {
    id: "email-tasks",
    category: "Operaciones",
    title: "Email → Tareas automáticas",
    summary: "Convierte correos entrantes en tareas claras, con archivos, prioridad y seguimiento centralizado.",
    benefit: "Ahorra 5 h/semana",
    result: "Cada correo importante termina en una tarea con responsable y fecha.",
    nodes: ["Correo nuevo", "Clasifica", "Crea tarea", "Archiva"],
    tech: ["n8n", "Gmail API", "Claude Code", "Notion / Trello", "Drive"],
    details:
      "Ideal para equipos que reciben solicitudes por correo y pierden tiempo copiando datos entre herramientas.",
    steps: [
      "Detecta el correo con una regla o etiqueta específica.",
      "Extrae intención, prioridad y datos clave con reglas y Claude Code.",
      "Crea una tarea en Notion o Trello con responsable y fecha límite.",
      "Guarda adjuntos en Drive y envía confirmación automática.",
    ],
    theme: "red",
  },
  {
    id: "invoice-pdf",
    category: "Finanzas",
    title: "Facturas PDF → Google Sheets",
    summary: "Lee facturas y soportes, extrae datos y los deja listos para contabilidad y conciliación.",
    benefit: "Reduce errores de captura",
    result: "Los datos quedan listos para revisar sin digitar NIT, fecha y valores a mano.",
    nodes: ["PDF", "OCR", "Sheet", "Revisión"],
    tech: ["n8n", "OCR", "Google Sheets", "Webhooks", "Open Source"],
    details:
      "Pensada para equipos que reciben facturas por correo o WhatsApp y necesitan ordenarlas rápido.",
    steps: [
      "Recibe el PDF desde un buzón, carpeta o webhook.",
      "Ejecuta OCR y extracción de campos con validación automática.",
      "Normaliza proveedor, número de factura, impuestos y total.",
      "Registra todo en Google Sheets y notifica si hay inconsistencias.",
    ],
    theme: "yellow",
  },
  {
    id: "forms-crm",
    category: "Ventas",
    title: "Formularios → CRM + respuesta",
    summary: "Cada lead entra limpio al CRM y recibe un mensaje automático con siguiente paso.",
    benefit: "Responde al instante",
    result: "El lead no se enfría y el equipo recibe la información lista para vender.",
    nodes: ["Formulario", "Enriquece", "CRM", "Respuesta"],
    tech: ["n8n", "Webhooks", "HubSpot / CRM", "Email", "Claude Code"],
    details:
      "Sirve para formularios de contacto, cotizaciones, landing pages y captación de prospectos.",
    steps: [
      "Captura el envío desde el formulario con un webhook.",
      "Enriquece el lead con datos útiles para ventas.",
      "Crea o actualiza el contacto en el CRM.",
      "Envía respuesta automática y asigna seguimiento.",
    ],
    theme: "pink",
  },
  {
    id: "weekly-reports",
    category: "Reporting",
    title: "Reportes automáticos semanales",
    summary: "Consolida métricas de varias fuentes y entrega un resumen listo para decidir.",
    benefit: "Visibilidad sin reuniones",
    result: "El equipo recibe un panorama claro sin juntar manualmente hojas o paneles.",
    nodes: ["Datos", "Métricas", "Resumen", "Slack / Mail"],
    tech: ["n8n", "APIs", "Slack", "Google Sheets", "Claude Code"],
    details:
      "Perfecto para operaciones, marketing y dirección que necesitan seguimiento sin fricción.",
    steps: [
      "Consulta fuentes de datos en un horario programado.",
      "Calcula indicadores clave y detecta variaciones relevantes.",
      "Genera un resumen humano con contexto y alertas.",
      "Entrega el reporte por email o Slack cada semana.",
    ],
    theme: "white",
  },
];

const themeStyles = {
  red: {
    label: "text-brandRed",
    dot: "bg-brandRed",
    chip: "border-brandRed/20 bg-brandRed/10 text-brandRed",
    result: "border-brandRed/20 bg-brandRed/5",
    modalBar: "from-brandRed/70 via-brandRed to-[#ff3d4d]",
  },
  yellow: {
    label: "text-brandYellow",
    dot: "bg-brandYellow",
    chip: "border-brandYellow/20 bg-brandYellow/10 text-brandYellow",
    result: "border-brandYellow/20 bg-brandYellow/5",
    modalBar: "from-brandYellow/70 via-brandYellow to-[#ffd84d]",
  },
  pink: {
    label: "text-brandPink",
    dot: "bg-brandPink",
    chip: "border-brandPink/20 bg-brandPink/10 text-brandPink",
    result: "border-brandPink/20 bg-brandPink/5",
    modalBar: "from-brandPink/70 via-brandPink to-[#ff4dc7]",
  },
  white: {
    label: "text-white",
    dot: "bg-white",
    chip: "border-white/15 bg-white/8 text-white",
    result: "border-white/15 bg-white/5",
    modalBar: "from-white/70 via-white to-[#f5f5f5]",
  },
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
    </svg>
  );
}

function AutomationCard({ item, onOpen }) {
  const theme = themeStyles[item.theme];

  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
      <div className="flex items-center justify-between gap-3">
        <p className={`text-[10px] font-bold uppercase tracking-[0.35em] ${theme.label}`}>{item.category}</p>
        <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${theme.chip}`}>
          {item.benefit}
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-black uppercase leading-[0.95] text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.summary}</p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {item.nodes.map((node, index) => (
            <div key={node} className="relative rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <span className={`mb-3 block h-2.5 w-2.5 rounded-full ${theme.dot}`} />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/85">{node}</p>
              {index < item.nodes.length - 1 ? (
                <span className="absolute -right-1 top-1/2 hidden h-px w-2 bg-gradient-to-r from-white/30 to-transparent sm:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.tech.map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-200">
            {tech}
          </span>
        ))}
      </div>

      <div className={`mt-5 rounded-2xl border p-4 ${theme.result}`}>
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">Resultado</p>
        <p className="mt-2 text-sm leading-relaxed text-white">{item.result}</p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-colors hover:text-brandYellow"
        >
          <span>Ver cómo funciona</span>
          <ArrowIcon />
        </button>
      </div>
    </article>
  );
}

function AutomationModal({ item, onClose }) {
  const theme = themeStyles[item.theme];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`automation-title-${item.id}`}
      >
        <div className={`h-1 w-full bg-gradient-to-r ${theme.modalBar}`} />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 hover:text-brandYellow"
          aria-label="Cerrar detalle"
        >
          <CloseIcon />
        </button>

        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <p className={`text-[10px] font-bold uppercase tracking-[0.35em] ${theme.label}`}>{item.category}</p>
            <h3 id={`automation-title-${item.id}`} className="mt-3 text-3xl font-black uppercase leading-[0.95] text-white sm:text-4xl">
              {item.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-300">{item.details}</p>

            <div className={`mt-6 rounded-2xl border p-5 ${theme.result}`}>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">Beneficio concreto</p>
              <p className="mt-2 text-lg font-medium text-white">{item.result}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">Microcopy</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                Sistemas que capturan, ordenan y responden por ti. Menos fricción, menos copia y pega, más tiempo útil para tu equipo.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">Flujo del sistema</p>
              <div className="mt-4 space-y-3">
                {item.steps.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs font-bold ${theme.label}`}>
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">Tecnologías</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AutomationShowcase() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section
        id="automatizaciones"
        className="reveal scroll-mt-24 relative overflow-hidden border-y border-white/5 bg-[#080808]"
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,61,77,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,204,0,0.06),transparent_30%)]" />

        <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[#ff3d4d]">
              Automatizaciones
            </p>
            <h2 className="text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-7xl">
              Sistemas que trabajan por ti
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
              Automatizaciones reales para quitar trabajo repetitivo, mover datos entre herramientas y devolver horas al equipo.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            {automations.map((item) => (
              <AutomationCard key={item.id} item={item} onOpen={() => setSelected(item)} />
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/[0.03] px-6 py-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">Bonus</p>
              <h3 className="mt-2 text-2xl font-black uppercase text-white sm:text-3xl">Automatiza tu flujo</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400">
                Diseñamos sistemas que capturan, clasifican, notifican y ordenan sin añadir fricción al equipo.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/automatizaciones#inicio"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] sm:px-7"
              >
                Ver subpagina
              </Link>
              <a
                href="#contact-footer"
                className="cta-button inline-flex items-center justify-center rounded-xl px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition-transform hover:scale-[1.02] sm:px-7"
              >
                Automatiza tu flujo
              </a>
            </div>
          </div>
        </div>
      </section>

      {selected ? <AutomationModal item={selected} onClose={() => setSelected(null)} /> : null}
    </>
  );
}
