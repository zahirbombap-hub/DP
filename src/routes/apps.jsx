import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Contact } from "../components/welcome/Contact.jsx";
import { Footer } from "../components/welcome/Footer.jsx";
import { Header } from "../components/welcome/Header.jsx";
import { AppPreview } from "../components/welcome/AppsShowcase.jsx";
import { appsData } from "../components/welcome/appsData.js";
import { RouteSeo } from "../components/Seo.jsx";

export function meta() {
  return [
    { title: "Don Prueba | Apps" },
    {
      name: "description",
      content:
        "Pagina dedicada a las apps de Don Prueba, con informacion completa sobre problema, valor, flujo y stack.",
    },
  ];
}

const desktopNavItems = [
  { label: "Inicio", type: "link", to: "/#inicio" },
  { label: "Paginas", type: "link", to: "/paginas#inicio" },
  { label: "Automatizaciones", type: "link", to: "/automatizaciones#inicio" },
  { label: "Apps", type: "link", to: "/apps#inicio" },
  { label: "Articulos", type: "link", to: "/articulos#articulos" },
  { label: "Contacto", type: "link", to: "/apps#contact-footer" },
];

const compactNavItems = [
  { label: "Inicio", type: "link", to: "/#inicio" },
  { label: "Paginas", type: "link", to: "/paginas#inicio" },
  { label: "Automatizaciones", type: "link", to: "/automatizaciones#inicio" },
  { label: "Apps", type: "link", to: "/apps#inicio" },
  { label: "Articulos", type: "link", to: "/articulos#articulos" },
  { label: "Contacto", type: "link", to: "/apps#contact-footer" },
];

const themeStyles = {
  red: {
    label: "text-brandRed",
    chip: "border-brandRed/20 bg-brandRed/10 text-brandRed",
    card: "border-brandRed/20",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(255,61,77,0.14),transparent_34%)]",
  },
  yellow: {
    label: "text-brandYellow",
    chip: "border-brandYellow/20 bg-brandYellow/10 text-brandYellow",
    card: "border-brandYellow/20",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(255,216,77,0.14),transparent_34%)]",
  },
  pink: {
    label: "text-brandPink",
    chip: "border-brandPink/20 bg-brandPink/10 text-brandPink",
    card: "border-brandPink/20",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(255,77,199,0.14),transparent_34%)]",
  },
  white: {
    label: "text-white",
    chip: "border-white/15 bg-white/8 text-white",
    card: "border-white/15",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_34%)]",
  },
  emerald: {
    label: "text-emerald-400",
    chip: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
    card: "border-emerald-400/20",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(126,240,182,0.14),transparent_34%)]",
  },
};

function MetricCard({ label, title, text }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
      <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">{label}</p>
      <h3 className="mt-3 text-lg font-black uppercase tracking-tighter text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
    </div>
  );
}

function AppArticle({ app }) {
  const theme = themeStyles[app.theme] ?? themeStyles.white;

  return (
    <article
      id={app.id}
      className={`reveal relative overflow-hidden rounded-[34px] border bg-white/[0.03] p-6 sm:p-8 lg:p-10 ${theme.card}`}
    >
      <div className={`absolute inset-0 pointer-events-none opacity-90 ${theme.glow}`} />

      <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] ${theme.chip}`}>
              {app.category}
            </span>
            <span className="inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-white/60">
              {app.benefit}
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl">
            {app.title}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/72">
            {app.summary}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/58 sm:text-base">
            {app.details}
          </p>

          <div className="mt-6 rounded-[28px] border border-white/10 bg-black/30 p-4 sm:p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">Preview de la app</p>
            <div className="mt-4">
              <AppPreview app={app} />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-[28px] border border-white/10 bg-black/30 p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">Problema</p>
            <p className="mt-3 text-sm leading-relaxed text-white/82 sm:text-base">{app.problem}</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">Valor principal</p>
            <p className="mt-3 text-lg font-semibold leading-relaxed text-white">{app.value}</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/30 p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">Como funciona</p>
            <div className="mt-4 space-y-3">
              {app.steps.map((step, index) => (
                <div key={`${app.id}-${index}`} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs font-black ${theme.label}`}>
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-white/78">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/30 p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">Stack y etiquetas</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {app.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <span key={tag} className={`rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] ${theme.chip}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Apps() {
  useEffect(() => {
    document.documentElement.lang = "es";
    document.documentElement.classList.add("scroll-smooth");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  return (
    <div className="welcome-page min-h-screen overflow-x-hidden bg-[#050505] font-['Space_Grotesk',sans-serif] text-white antialiased selection:bg-[#ff3d4d] selection:text-white">
      <RouteSeo routePath="/apps" />
      <Header desktopNavItems={desktopNavItems} compactNavItems={compactNavItems} />

      <main id="top" role="main" className="cinematic-load">
        <section id="inicio" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,61,77,0.20)_0%,_rgba(5,5,5,0)_58%)]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px]" />

          <div className="relative mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 border border-[#8a0012]/40 bg-[#8a0012]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-[#ff3d4d] backdrop-blur-sm">
                Don Prueba // Apps
              </div>

              <h1 className="text-[15vw] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-[10vw] md:text-[7rem]">
                Apps con <br className="sm:hidden" />
                foco real
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Esta pagina concentra la informacion completa de nuestras apps: el problema que resuelven, el valor
                que entregan, la forma en que funcionan y el stack con el que podrian construirse.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                Son productos ligeros pensados para aprender, cocinar, enfocarte, ordenar tareas o sostener habitos
                con menos friccion y mas claridad operativa.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#apps-catalog"
                  className="inline-flex items-center justify-center border border-[#ff3d4d] bg-[#ff3d4d] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#ff5664]"
                >
                  Ver catalogo
                </a>
                <Link
                  to="/apps#contact-footer"
                  className="inline-flex items-center justify-center border border-white/10 bg-white/[0.04] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  Solicitar una app
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <MetricCard
                label="Catalogo"
                title={`${appsData.length} apps completas`}
                text="Cada bloque muestra resumen, valor, flujo, stack y preview para revisar el concepto completo."
              />
              <MetricCard
                label="Cobertura"
                title="Rutina, foco y operacion"
                text="La seleccion cubre aprendizaje, cocina, productividad, organizacion y habitos desde una logica clara."
              />
              <MetricCard
                label="Enfoque"
                title="Productos ligeros"
                text="Apps pequenas, utiles y directas, pensadas para reducir friccion y hacer visible el avance."
              />
            </div>
          </div>
        </section>

        <section id="apps-catalog" className="reveal px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-screen-2xl">
            <div className="max-w-3xl">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff3d4d]">Catalogo de apps</p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl">
                Todas las apps en detalle
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
                Aqui no solo ves la idea general. Tambien encuentras el problema, la propuesta de valor, el flujo de
                uso y el stack de cada app.
              </p>
            </div>

            <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
              {appsData.map((app) => (
                <AppArticle key={app.id} app={app} />
              ))}
            </div>
          </div>
        </section>

        <section className="reveal px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-screen-2xl">
            <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff3d4d]">
                    Siguiente paso
                  </p>
                  <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl">
                    Si una de estas apps encaja, la aterrizamos contigo
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base lg:text-lg">
                    Podemos convertir cualquiera de estos conceptos en una app a medida, ajustada a tu flujo, tus
                    usuarios y tus prioridades reales.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <Link
                    to="/apps#contact-footer"
                    className="inline-flex items-center justify-center border border-[#ff3d4d] bg-[#ff3d4d] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#ff5664]"
                  >
                    Solicitar una app
                  </Link>
                  <Link
                    to="/#inicio"
                    className="inline-flex items-center justify-center border border-white/10 bg-white/[0.04] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                  >
                    Volver al inicio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
