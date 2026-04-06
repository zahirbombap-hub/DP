import { useEffect, useState } from "react";
import { modalOverlayStyle, modalPanelStyle } from "./modalLayout.js";
import { ModalPortal } from "./ModalPortal.jsx";

const articles = [
  {
    id: "learn-light",
    category: "Aprendizaje",
    title: "Aprender sin saturarte",
    hook: "Menos teoria, mas continuidad",
    summary: "Micro-lecciones, repaso ligero y progreso visible para mantener el ritmo.",
    readingTime: "4 min",
    details:
      "Una ruta corta para sostener el aprendizaje sin sesiones interminables ni plataformas pesadas.",
    takeaways: [
      "Empieza con bloques pequenos.",
      "Haz visible el avance diario.",
      "Cierra cada sesion con un siguiente paso.",
    ],
    theme: "red",
  },
  {
    id: "cook-clear",
    category: "Hogar",
    title: "Cocinar con menos errores",
    hook: "Timers claros, pasos simples",
    summary: "Guia visual para seguir recetas sin perder tiempos ni saltarte pasos clave.",
    readingTime: "3 min",
    details:
      "Pensado para cocinar con mas calma y menos margen de error, sin depender de memoria ni improvisacion.",
    takeaways: [
      "Abre la receta y mira el primer paso.",
      "Activa alertas solo cuando toca.",
      "Marca cada avance sin distracciones.",
    ],
    theme: "yellow",
  },
  {
    id: "focus-work",
    category: "Productividad",
    title: "Trabajar con foco real",
    hook: "Bloques cortos, avance claro",
    summary: "Sesiones simples para bajar ruido, sostener atencion y terminar lo importante.",
    readingTime: "5 min",
    details:
      "Ideal para estudiar, escribir o producir sin caer en el ciclo de abrir mil pestañas y perder el hilo.",
    takeaways: [
      "Define una sola meta por bloque.",
      "Bloquea distracciones visibles.",
      "Cierra con un resumen corto del avance.",
    ],
    theme: "pink",
  },
  {
    id: "habit-streaks",
    category: "Bienestar",
    title: "Habitos que si se sostienen",
    hook: "La racha te ayuda a seguir",
    summary: "Una forma visual de mantener rutinas, medir continuidad y celebrar pequenos avances.",
    readingTime: "4 min",
    details:
      "Sirve para construir rutina sin dramatizar el proceso, usando progreso visible y recordatorios suaves.",
    takeaways: [
      "Haz un seguimiento simple de tu habito.",
      "Mira la racha en tiempo real.",
      "Refuerza la constancia con una senal visual.",
    ],
    theme: "emerald",
  },
];

const themeStyles = {
  red: {
    label: "text-brandRed",
    chip: "border-brandRed/20 bg-brandRed/10 text-brandRed",
    bar: "from-brandRed to-[#ff7a87]",
    dot: "bg-brandRed",
    modalBar: "from-brandRed/70 via-brandRed to-[#ff3d4d]",
  },
  yellow: {
    label: "text-brandYellow",
    chip: "border-brandYellow/20 bg-brandYellow/10 text-brandYellow",
    bar: "from-brandYellow to-[#ffe57a]",
    dot: "bg-brandYellow",
    modalBar: "from-brandYellow/70 via-brandYellow to-[#ffd84d]",
  },
  pink: {
    label: "text-brandPink",
    chip: "border-brandPink/20 bg-brandPink/10 text-brandPink",
    bar: "from-brandPink to-[#ff86d8]",
    dot: "bg-brandPink",
    modalBar: "from-brandPink/70 via-brandPink to-[#ff4dc7]",
  },
  emerald: {
    label: "text-emerald-400",
    chip: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
    bar: "from-emerald-400 to-[#7ef0b6]",
    dot: "bg-emerald-400",
    modalBar: "from-emerald-400/70 via-emerald-400 to-[#7ef0b6]",
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

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
      <path d="M5 12.5 9.5 17 19 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
    </svg>
  );
}

function ArticlePreview({ article, compact }) {
  const theme = themeStyles[article.theme];

  return (
    <div className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-black/40 p-4 sm:p-5 ${compact ? "min-h-[210px]" : "min-h-[260px]"}`}>
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.06), transparent 42%), radial-gradient(circle at top right, rgba(255,61,77,0.10), transparent 28%)",
        }}
      />
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-white/45">
          <span>Preview</span>
          <span>{article.readingTime}</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className={`font-bold text-white ${compact ? "text-[12px]" : "text-sm"}`}>{article.hook}</p>
              <p className="text-[10px] text-gray-400">Idea editorial</p>
            </div>
            <span className={`rounded-full border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${theme.chip}`}>
              {article.category}
            </span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <div className={`h-full rounded-full bg-gradient-to-r ${theme.bar}`} style={{ width: "72%" }} />
          </div>
        </div>

        <div className="space-y-2">
          {article.takeaways.map((point, index) => (
            <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/35 px-3 py-2.5">
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${theme.dot} text-black`}>
                <CheckIcon />
              </span>
              <p className="text-[11px] font-bold leading-snug text-white">{index + 1}. {point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article, onOpen }) {
  const theme = themeStyles[article.theme];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <p className={`text-[10px] font-bold uppercase tracking-[0.35em] ${theme.label}`}>{article.category}</p>
          <h3 className="text-2xl font-black uppercase leading-[0.95] text-white">{article.title}</h3>
        </div>
        <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${theme.chip}`}>
          {article.readingTime}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-300">{article.summary}</p>

      <div className="mt-5 transition-transform duration-300 group-hover:scale-[1.015]">
        <ArticlePreview article={article} compact />
      </div>

      <div className="mt-auto pt-5">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-colors hover:text-brandYellow"
        >
          <span>Leer idea</span>
          <ArrowIcon />
        </button>
      </div>
    </article>
  );
}

function ArticleModal({ article, onClose }) {
  const theme = themeStyles[article.theme];

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
    <ModalPortal>
      <div
        className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/80 px-4 backdrop-blur-sm sm:px-6"
        style={modalOverlayStyle}
        onClick={onClose}
        role="presentation"
      >
        <div
          className="relative my-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
          style={modalPanelStyle}
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`article-title-${article.id}`}
        >
        <div className={`h-1 w-full bg-gradient-to-r ${theme.modalBar}`} />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 hover:text-brandYellow"
          aria-label="Cerrar detalle"
        >
          <CloseIcon />
        </button>

        <div className="grid flex-1 gap-8 overflow-y-auto overscroll-contain p-6 pr-16 sm:p-8 sm:pr-20 md:grid-cols-[1.05fr_0.95fr] md:p-10 md:pr-20">
          <div>
            <p className={`text-[10px] font-bold uppercase tracking-[0.35em] ${theme.label}`}>{article.category}</p>
            <h3 id={`article-title-${article.id}`} className="mt-3 text-3xl font-black uppercase leading-[0.95] text-white sm:text-4xl">
              {article.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-300">{article.details}</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">Lo que te deja</p>
              <p className="mt-2 text-lg font-medium text-white">Ideas simples que puedes aplicar hoy sin agregar complejidad.</p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">3 ideas clave</p>
              <div className="mt-4 space-y-3">
                {article.takeaways.map((point, index) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-white/10 bg-black/35 p-4">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs font-bold ${theme.label}`}>
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">Preview ampliado</p>
              <div className="mt-4">
                <ArticlePreview article={article} />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">Microcopy</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                Contenido util, claro y sin ruido para avanzar. Lee rapido, entiende rapido y aplica rapido.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </ModalPortal>
  );
}

export function SEOContent() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section
        id="articulos"
        className="reveal welcome-scroll-section relative overflow-hidden border-y border-white/5 bg-[#080808]"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle at top left, rgba(255,61,77,0.08), transparent 35%), radial-gradient(circle at bottom right, rgba(255,255,255,0.05), transparent 30%)",
          }}
        />

        <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[#ff3d4d]">
              Articulos
            </p>
            <h2 className="text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-7xl">
              Ideas cortas que te ayudan a decidir
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
              Contenido util, claro y directo para aprender, cocinar, enfocarte y sostener habitos sin ruido.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} onOpen={() => setSelected(article)} />
            ))}
          </div>
        </div>
      </section>

      {selected ? <ArticleModal article={selected} onClose={() => setSelected(null)} /> : null}
    </>
  );
}
