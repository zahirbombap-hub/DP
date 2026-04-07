import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/welcome/Header.jsx";
import { Footer } from "../components/welcome/Footer.jsx";
import { Icon } from "../components/Icon.jsx";
import { ScrollStack } from "../components/paginas/ScrollStack.jsx";
import { paginasCases } from "../components/paginas/paginasData.js";

export function meta() {
  return [
    { title: "Don Prueba | Paginas" },
    {
      name: "description",
      content:
        "Casos ampliados de Don Prueba: agua-linda, cuerna, historias tejidas y tattos, mostrados con una experiencia tipo portafolio.",
    },
  ];
}

function IntroCard({ title, text, icon }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-white">
          <Icon name={icon} className="text-xl" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.32em] text-white/45">
            {title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/80">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Paginas() {
  useEffect(() => {
    document.title = "Don Prueba | Paginas";
    document.documentElement.lang = "es";
    document.documentElement.classList.add("scroll-smooth");

    return () => {
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-[#ff3d4d] selection:text-white">
      <Header />

      <main className="pt-16 sm:pt-18">
        <section
          id="inicio"
          className="relative overflow-hidden border-b border-white/10 bg-[#050505]"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at top left, rgba(255,61,77,0.18), transparent 28%), radial-gradient(circle at 80% 20%, rgba(34,211,238,0.12), transparent 24%), linear-gradient(180deg, rgba(10,10,10,0.96), rgba(5,5,5,1))",
            }}
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-20 lg:py-18">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="max-w-3xl space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff3d4d]">
                  Nuestros clientes
                </p>
                <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white sm:text-6xl lg:text-8xl">
                  Paginas
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-white/78 sm:text-base lg:text-lg">
                  Buscamos problemas, proponemos una solución y ejecutamos con enfoque estratégico.
                </p>
                <p className="max-w-2xl text-sm leading-relaxed text-white/62 sm:text-base">
                  A continuación, podras encontrar algunos de nuestros casos de clientes con más contexto, decisiones visuales y lógica de negocio.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/#cases-section"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.09]"
                  >
                    Volver a Cases
                    <Icon name="west" className="text-base" />
                  </Link>
                  <a
                    href="#paginas-stack"
                    className="inline-flex items-center gap-2 rounded-full bg-[#ff3d4d] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff5664]"
                  >
                    Ver stack
                    <Icon name="south" className="text-base" />
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <IntroCard
                  title="Diagnóstico"
                  text="Buscamos el punto débil real del negocio antes de pensar en pantallas, motion o copy."
                  icon="search"
                />
                <IntroCard
                  title="Estrategia"
                  text="Cada decisión visual se apoya en una narrativa que ayude a vender, explicar y posicionar."
                  icon="workspace_premium"
                />
                <IntroCard
                  title="Ejecución"
                  text="La interfaz termina siendo clara, memorable y escalable para seguir creciendo con más casos."
                  icon="rocket_launch"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="paginas-stack"
          className="relative overflow-hidden border-b border-white/10 bg-[#080808]"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle at top right, rgba(255,61,77,0.10), transparent 25%), radial-gradient(circle at 20% 80%, rgba(34,211,238,0.08), transparent 22%)",
            }}
          />

          <div className="relative mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
            <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff3d4d]">
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase leading-[0.92] tracking-tighter text-white sm:text-4xl lg:text-5xl">
                  Casos en detalle
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                Desliza para recorrer las cuatro tarjetas. Cada caso combina imagen, problema,
                solución y una nota final para mostrar el trabajo con más profundidad.
              </p>
            </div>

            <ScrollStack items={paginasCases} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
