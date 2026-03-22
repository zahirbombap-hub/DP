import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AutomationCatalog } from "../components/automatizaciones/AutomationCatalog.jsx";
import { Footer } from "../components/welcome/Footer.jsx";
import { Header } from "../components/welcome/Header.jsx";

export function meta() {
  return [
    { title: "Don Prueba | Automatizaciones" },
    {
      name: "description",
      content:
        "Subpagina dedicada a automatizaciones personalizadas para ahorrar tiempo, reducir errores y escalar operaciones.",
    },
  ];
}

const desktopNavItems = [
  { label: "Inicio", type: "link", to: "/" },
  { label: "Paginas", type: "link", to: "/paginas#inicio" },
  { label: "Automatizaciones", type: "link", to: "/automatizaciones#automatizaciones" },
  { label: "Apps", type: "link", to: "/#apps-showcase" },
  { label: "Articulos", type: "link", to: "/articulos#articulos" },
  { label: "Contacto", type: "link", to: "/#contact-footer" },
];

const compactNavItems = [
  { label: "Inicio", type: "link", to: "/" },
  { label: "Paginas", type: "link", to: "/paginas#inicio" },
  { label: "Automatizaciones", type: "link", to: "/automatizaciones#automatizaciones" },
  { label: "Apps", type: "link", to: "/#apps-showcase" },
  { label: "Articulos", type: "link", to: "/articulos#articulos" },
  { label: "Contacto", type: "link", to: "/#contact-footer" },
];

function IntroMetric({ label, title, text }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
      <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">{label}</p>
      <h3 className="mt-3 text-lg font-black uppercase tracking-tighter text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
    </div>
  );
}

export default function Automatizaciones() {
  useEffect(() => {
    document.title = "Don Prueba | Automatizaciones";
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
      <Header desktopNavItems={desktopNavItems} compactNavItems={compactNavItems} />

      <main id="top" role="main" className="cinematic-load">
        <section
          id="inicio"
          className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-28"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,61,77,0.20)_0%,_rgba(5,5,5,0)_58%)]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px]" />

          <div className="relative mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 border border-[#8a0012]/40 bg-[#8a0012]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-[#ff3d4d] backdrop-blur-sm">
                Don Prueba // Automatizaciones
              </div>

              <h1 className="text-[15vw] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-[10vw] md:text-[7rem]">
                Más trabajo en <br className="sm:hidden" />
                menos tiempo
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Automatizar procesos no es solo una mejora tecnica. Es una decision estrategica para evitar tareas
                repetitivas, aumentar la productividad y liberar tiempo para actividades de mayor valor, tanto en el
                trabajo como en la vida personal.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                Cuando una empresa deja de depender de acciones manuales para mover datos, responder clientes o ordenar
                informacion, gana claridad operativa, menos errores y una forma de crecer con mas control.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#automatizaciones"
                  className="inline-flex items-center justify-center border border-[#ff3d4d] bg-[#ff3d4d] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#ff5664]"
                >
                  Ver automatizaciones
                </a>
                <Link
                  to="/#contact-footer"
                  className="inline-flex items-center justify-center border border-white/10 bg-white/[0.04] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  Solicitar una automatización
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#ff3d4d]">Lema</p>
                <p className="mt-3 text-3xl font-black uppercase leading-[0.9] text-white">Más trabajo en menos tiempo</p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  La automatización elimina fricción para que el tiempo humano se invierta donde realmente importa.
                </p>
              </div>

              <IntroMetric
                label="Repeticion"
                title="Menos tareas manuales"
                text="Las acciones de bajo valor dejan de consumir energia, atencion y horas de equipo."
              />
              <IntroMetric
                label="Productividad"
                title="Mas avance real"
                text="Los procesos siguen moviendose aunque tu equipo este concentrado en decisiones importantes."
              />
              <IntroMetric
                label="Valor"
                title="Tiempo para crecer"
                text="El tiempo liberado se usa para vender, atender mejor, analizar datos o vivir con menos carga."
              />
            </div>
          </div>
        </section>

        <AutomationCatalog />

        <section id="mensaje-final" className="reveal px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-screen-2xl">
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,61,77,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.10),transparent_28%)]" />

              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff3d4d]">
                    Automatizacion personalizada
                  </p>
                  <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl">
                    Cada negocio necesita su propio flujo
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base lg:text-lg">
                    Diseñamos automatizaciones personalizadas que se adaptan a las necesidades especificas de cada
                    negocio, a sus herramientas y a su ritmo operativo, con el objetivo de ahorrar tiempo, reducir
                    errores y escalar operaciones sin sumar complejidad innecesaria.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">A la medida</p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-white">
                      Flujos pensados desde el proceso real del negocio.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">Menos errores</p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-white">
                      Menos pasos manuales, menos ruido y mas control operativo.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">Escala</p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-white">
                      Automatiza hoy para soportar mas volumen mañana sin friccion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 flex flex-wrap gap-3">
                <Link
                  to="/#contact-footer"
                  className="inline-flex items-center justify-center border border-[#ff3d4d] bg-[#ff3d4d] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#ff5664]"
                >
                  Solicitar automatización
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center border border-white/10 bg-white/[0.04] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
