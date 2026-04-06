import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appsData } from "./appsData.js";
import { modalOverlayStyle, modalPanelStyle } from "./modalLayout.js";
import { ModalPortal } from "./ModalPortal.jsx";

const featuredApps = appsData.filter((app) => app.id !== "task-tray");

const themeStyles = {
  red: {
    label: "text-brandRed",
    dot: "bg-brandRed",
    chip: "border-brandRed/20 bg-brandRed/10 text-brandRed",
    bar: "from-brandRed to-[#ff7a87]",
    modalBar: "from-brandRed/70 via-brandRed to-[#ff3d4d]",
  },
  yellow: {
    label: "text-brandYellow",
    dot: "bg-brandYellow",
    chip: "border-brandYellow/20 bg-brandYellow/10 text-brandYellow",
    bar: "from-brandYellow to-[#ffe57a]",
    modalBar: "from-brandYellow/70 via-brandYellow to-[#ffd84d]",
  },
  pink: {
    label: "text-brandPink",
    dot: "bg-brandPink",
    chip: "border-brandPink/20 bg-brandPink/10 text-brandPink",
    bar: "from-brandPink to-[#ff86d8]",
    modalBar: "from-brandPink/70 via-brandPink to-[#ff4dc7]",
  },
  white: {
    label: "text-white",
    dot: "bg-white",
    chip: "border-white/15 bg-white/5 text-white",
    bar: "from-white to-[#f0f0f0]",
    modalBar: "from-white/70 via-white to-[#f5f5f5]",
  },
  emerald: {
    label: "text-emerald-400",
    dot: "bg-emerald-400",
    chip: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
    bar: "from-emerald-400 to-[#7ef0b6]",
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

function AppsCtaButton({ href, children }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#8a0012]/60 bg-[linear-gradient(135deg,#ff3d4d_0%,#ff7a00_38%,#ffcc00_72%,#ff4dc7_100%)] px-5 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-[0_18px_36px_rgba(255,61,77,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(255,61,77,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandYellow/70"
    >
      <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.35)_50%,transparent_80%)] -translate-x-[120%] transition-transform duration-700 group-hover:translate-x-[120%]" />
      <span className="relative inline-flex items-center gap-2">
        {children}
        <ArrowIcon />
      </span>
    </a>
  );
}

function AppsPageButton({ to, children }) {
  return (
    <Link
      to={to}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brandRed/40 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandRed/40"
    >
      <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,61,77,0.18),rgba(255,204,0,0.06),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative inline-flex items-center gap-2">
        {children}
        <ArrowIcon />
      </span>
    </Link>
  );
}

function PreviewShell({ compact, children }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-black/45 ${
        compact ? "min-h-[210px] p-3 sm:h-[210px] sm:min-h-[210px] sm:p-4" : "min-h-[280px] p-4 sm:p-5"
      }`}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.06), transparent 42%), radial-gradient(circle at top right, rgba(255,61,77,0.12), transparent 30%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

function LearningPreview({ preview, compact, theme }) {
  return (
    <PreviewShell compact={compact}>
      <div className="flex h-full flex-col justify-between gap-3">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-white/45">
          <span>Daily flow</span>
          <span>{preview.metric}</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2.5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className={`font-bold text-white ${compact ? "text-[12px]" : "text-sm"}`}>{preview.lesson}</p>
              <p className="text-[10px] text-gray-400">Micro lesson</p>
            </div>
            <span className={`rounded-full border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${theme.chip}`}>
              {preview.progress}%
            </span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <div className={`h-full rounded-full bg-gradient-to-r ${theme.bar}`} style={{ width: `${preview.progress}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {preview.checklist.map((step, index) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-black/35 p-2">
              <div className={`mb-1.5 h-2 w-2 rounded-full ${theme.dot}`} />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">{index + 1}. {step}</p>
            </div>
          ))}
        </div>
      </div>
    </PreviewShell>
  );
}

function CookingPreview({ preview, compact, theme }) {
  return (
    <PreviewShell compact={compact}>
      <div className="grid h-full gap-3 grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col items-center justify-center rounded-[22px] border border-white/10 bg-white/[0.03] p-3">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-black/55 sm:h-24 sm:w-24">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Timer</p>
              <p className="mt-1 text-xl font-black text-white sm:text-2xl">{preview.timer}</p>
            </div>
          </div>
          <div className="mt-3 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Heat</p>
            <p className="mt-1 text-sm font-bold text-white">{preview.heat}</p>
          </div>
        </div>

        <div className="space-y-1.5">
          {preview.checklist.map((step, index) => (
            <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-3 py-2">
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-[10px] font-black ${theme.label}`}>
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-bold text-white">{step}</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">Paso guiado</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PreviewShell>
  );
}

function FocusPreview({ preview, compact, theme }) {
  return (
    <PreviewShell compact={compact}>
      <div className="flex h-full flex-col justify-between gap-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/45">Session</p>
              <p className={`font-black text-white ${compact ? "text-3xl" : "text-4xl"}`}>{preview.timer}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/45">Blocked</p>
              <p className="text-xl font-bold text-white">{preview.blocked}</p>
            </div>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/10">
            <div className={`h-full rounded-full bg-gradient-to-r ${theme.bar}`} style={{ width: `${preview.progress}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {preview.distractions.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/35 px-2.5 py-2 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </PreviewShell>
  );
}

function TasksPreview({ preview, compact, theme }) {
  return (
    <PreviewShell compact={compact}>
      <div className="grid h-full gap-1.5 sm:grid-cols-3">
        {preview.columns.map((column) => (
          <div key={column.label} className="rounded-[20px] border border-white/10 bg-white/[0.03] p-2.5">
            <div className="flex items-center justify-between">
              <p className={`text-[10px] font-bold uppercase tracking-[0.35em] ${theme.label}`}>{column.label}</p>
              <span className="text-[10px] text-white/45">{column.items.length}</span>
            </div>
            <div className="mt-2.5 space-y-1.5">
              {column.items.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-black/35 px-2.5 py-1.5">
                  <div className="flex items-start gap-2">
                    <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${theme.dot} text-black`}>
                      <CheckIcon />
                    </span>
                    <p className="text-[11px] font-bold leading-snug text-white">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

function HabitsPreview({ preview, compact, theme }) {
  return (
    <PreviewShell compact={compact}>
      <div className="flex h-full flex-col justify-between gap-2.5">
        <div className="flex items-center justify-between rounded-[22px] border border-white/10 bg-white/[0.03] p-2.5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/45">Streak</p>
            <p className="mt-1 text-2xl font-black text-white sm:text-3xl">{preview.streak}</p>
          </div>
          <span className={`rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] ${theme.chip}`}>
            {preview.goal}
          </span>
        </div>

        <div className="h-2 rounded-full bg-white/10">
          <div className={`h-full rounded-full bg-gradient-to-r ${theme.bar}`} style={{ width: `${preview.progress}%` }} />
        </div>

        <div className="grid grid-cols-5 gap-1">
          {preview.heatmap.map((cell, index) => (
            <div
              key={`${preview.streak}-${index}`}
              className={`aspect-square rounded-xl border ${
                cell > 1
                  ? "border-emerald-400/30 bg-emerald-400/70"
                  : cell > 0
                    ? "border-emerald-400/25 bg-emerald-400/30"
                    : "border-white/10 bg-white/[0.03]"
              }`}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {preview.habits.map((habit) => (
            <span key={habit} className="rounded-full border border-white/10 bg-black/35 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/80">
              {habit}
            </span>
          ))}
        </div>
      </div>
    </PreviewShell>
  );
}

export function AppPreview({ app, compact = false }) {
  const theme = themeStyles[app.theme];
  const preview = app.preview;

  switch (preview.type) {
    case "learning":
      return <LearningPreview preview={preview} compact={compact} theme={theme} />;
    case "cooking":
      return <CookingPreview preview={preview} compact={compact} theme={theme} />;
    case "focus":
      return <FocusPreview preview={preview} compact={compact} theme={theme} />;
    case "tasks":
      return <TasksPreview preview={preview} compact={compact} theme={theme} />;
    case "habits":
      return <HabitsPreview preview={preview} compact={compact} theme={theme} />;
    default:
      return null;
  }
}

function AppCard({ app, onOpen }) {
  const theme = themeStyles[app.theme];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <p className={`text-[10px] font-bold uppercase tracking-[0.35em] ${theme.label}`}>{app.category}</p>
          <h3 className="text-2xl font-black uppercase leading-[0.95] text-white">{app.title}</h3>
        </div>
        <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${theme.chip}`}>
          {app.benefit}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-300">{app.problem}</p>

      <div className="mt-5 transition-transform duration-300 group-hover:scale-[1.015]">
        <AppPreview app={app} compact />
      </div>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {app.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-gray-200">
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-colors hover:text-brandYellow"
          >
            <span>Ver preview</span>
            <ArrowIcon />
          </button>
        </div>

        <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-white/50">
          Stack: <span className="text-white/80">{app.stack.join(" Ã‚Â· ")}</span>
        </p>
      </div>
    </article>
  );
}

function AppModal({ app, onClose }) {
  const theme = themeStyles[app.theme];

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
          className="relative my-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
          style={modalPanelStyle}
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`app-title-${app.id}`}
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

        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="grid gap-6 p-6 pr-16 sm:gap-8 sm:p-8 sm:pr-20 md:grid-cols-[1.02fr_0.98fr] md:p-9 md:pr-20">
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-[0.35em] ${theme.label}`}>{app.category}</p>
              <h3 id={`app-title-${app.id}`} className="mt-3 text-3xl font-black uppercase leading-[0.95] text-white sm:text-4xl">
                {app.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">{app.details}</p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">Problema que resuelve</p>
                <p className="mt-2 text-sm leading-relaxed text-white/90">{app.problem}</p>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">Valor principal</p>
                <p className="mt-2 text-lg font-medium text-white">{app.value}</p>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">Microcopy</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  Soluciones simples para problemas reales. Apps pensadas para aprender, cocinar, enfocarte y sostener rutinas con menos friccion.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">Como se usa</p>
                <div className="mt-4 space-y-3">
                  {app.steps.slice(0, 3).map((step, index) => (
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
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">Stack sutil</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {app.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">Preview ampliado</p>
                <div className="mt-4">
                  <AppPreview app={app} />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </ModalPortal>
  );
}

export function AppsShowcase() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section
        id="apps-showcase"
        className="reveal welcome-scroll-section relative overflow-hidden border-y border-white/5 bg-[#090909]"
        style={{
          "--apps-accent": "#ff3d4d",
          "--apps-accent-soft": "rgba(255,61,77,0.12)",
          "--apps-border": "rgba(255,255,255,0.10)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle at top left, rgba(255,61,77,0.08), transparent 35%), radial-gradient(circle at bottom right, rgba(255,204,0,0.05), transparent 30%)",
          }}
        />

        <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[#ff3d4d]">
              Apps
            </p>
            <h2 className="text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-7xl">
              Apps que hacen el trabajo por ti
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
              Menos friccion, mas accion. Cada preview muestra una app real en formato rapido de entender, pensada para aprender, cocinar, enfocarte y sostener habitos.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredApps.map((app) => (
              <AppCard key={app.id} app={app} onOpen={() => setSelected(app)} />
            ))}
          </div>

          <div
            className="mt-6 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:px-8"
            style={{ borderColor: "var(--apps-border)" }}
          >
            <div className="max-w-2xl">
              <h3 className="mt-2 text-2xl font-black uppercase text-white sm:text-3xl">
                &iquest;Quieres una app asi?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                La vista queda compacta para que revises el conjunto rapido. Si buscas una app a medida, hablemos y la
                construimos juntos.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <AppsPageButton to="/apps#inicio">Ver pagina de apps</AppsPageButton>
              <AppsCtaButton href="#contact-footer">Solicitar una app</AppsCtaButton>
            </div>
          </div>
        </div>
      </section>

      {selected ? <AppModal app={selected} onClose={() => setSelected(null)} /> : null}
    </>
  );
}
