import { useEffect } from "react";
import { Icon } from "../components/Icon.jsx";
import { Footer } from "../components/agua-linda/Footer.jsx";
import { Header } from "../components/agua-linda/Header.jsx";
import { WhatsAppButton } from "../components/agua-linda/WhatsAppButton.jsx";
import { AGUA_LINDA_WHATSAPP_HREF } from "../components/agua-linda/constants.js";
import { RouteSeo } from "../components/Seo.jsx";

const navItems = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#nuestra-planta", label: "Nuestra planta" },
  { href: "#sostenibilidad", label: "Sostenibilidad" },
  { href: "#contacto", label: "Contacto" },
];

const facts = [
  { label: "Base operativa", value: "Sutamarchán" },
  { label: "Cobertura", value: "Villa de Leyva y Sutamarchán" },
  { label: "Planta", value: "Km 1 vía Arcabuco-Gámbita" },
];

const pillars = [
  {
    icon: "eco",
    title: "Distribución local",
    description: "Residimos en Sutamarchán y operamos en Villa de Leyva y Sutamarchán con una logística cercana y ágil.",
  },
  {
    icon: "local_shipping",
    title: "Rutas eficientes",
    description: "Optimizamos recorridos para reducir tiempos, kilómetros innecesarios y la huella de cada entrega.",
  },
  {
    icon: "verified",
    title: "Responsabilidad operativa",
    description: "Priorizamos procesos claros, agua tratada y una atención consistente para hogares y comercios.",
  },
];

export const meta = () => {
  return [
    { title: "Agua Linda | Empresa" },
    {
      name: "description",
      content:
        "Conoce Agua Linda: somos residentes de Sutamarchán, distribuimos agua en Villa de Leyva y Sutamarchán, y nuestra planta está en el Km 1 de la vía Arcabuco-Gámbita.",
    },
  ];
};

export default function AguaLindaEmpres() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="top" className="relative bg-[#0B5ED7] dark:bg-[#0B1120] text-white dark:text-slate-200 font-['Inter',sans-serif] transition-colors duration-300 scroll-smooth snap-y snap-proximity scroll-pt-20">
      <RouteSeo routePath="/agua-linda/empresa" />
      <Header navItems={navItems} />
      <main className="pt-20">
        <section className="relative overflow-hidden px-6 py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute top-1/3 right-[-4rem] h-96 w-96 rounded-full bg-[#25D366]/10 blur-3xl" />
            <div className="absolute bottom-[-6rem] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#0077BE]/20 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div className="reveal">
              <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.35em] text-white/80">
                Agua Linda
              </p>
              <h1 className="font-['Outfit',sans-serif] text-5xl md:text-7xl font-extrabold leading-tight text-white">
                Empresa local con
                <br />
                <span className="text-[#9fe7ff] italic">raíces en Sutamarchán</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-100/90">
                Somos residentes de Sutamarchán y trabajamos en la distribución de agua en Villa de Leyva y Sutamarchán.
                Nuestra operación nace de un conocimiento real del territorio y de una atención cercana para hogares, negocios y eventos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="rounded-full bg-white px-6 py-3 font-bold text-[#0B5ED7] transition-transform hover:scale-105" href="#quienes-somos">
                  Quiénes somos
                </a>
                <a className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20" href="#nuestra-planta">
                  Nuestra planta
                </a>
                <a
                  className="rounded-full bg-[#25D366] px-6 py-3 font-bold text-white transition-transform hover:scale-105"
                  href={AGUA_LINDA_WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>

            <div className="reveal grid gap-4 rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {facts.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-[#0F172A]/50 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[1.75rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0B5ED7]">
                    <Icon name="location_on" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/70">Planta de tratamiento</p>
                    <p className="text-base font-bold text-white">Km 1 vía Arcabuco-Gámbita</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-100/85">
                  Desde esta ubicación tratamos y distribuimos agua con una operación enfocada en cercanía, trazabilidad y servicio continuo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="quienes-somos" className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.92fr]">
            <div className="reveal rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/50">Quiénes somos</p>
              <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl md:text-4xl font-bold text-white">
                Una operación local que entiende el territorio
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-100/90">
                Agua Linda es una marca nacida y gestionada por residentes de Sutamarchán. Trabajamos en el negocio de distribución
                de agua en Villa de Leyva y Sutamarchán, con una mirada práctica: entregar un producto confiable, con atención rápida
                y una relación cercana con cada cliente.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-200/80">
                Nuestro enfoque combina operación local, conocimiento del territorio y una estructura simple para que el servicio
                sea claro, ágil y consistente.
              </p>
            </div>

            <div className="reveal grid gap-4">
              {[
                {
                  title: "Residencia local",
                  desc: "Somos residentes de Sutamarchán y entendemos las necesidades de la región desde dentro.",
                },
                {
                  title: "Cobertura regional",
                  desc: "Abastecemos Villa de Leyva y Sutamarchán con una distribución cercana y oportuna.",
                },
                {
                  title: "Atención directa",
                  desc: "Priorizamos una comunicación simple por WhatsApp para resolver pedidos y consultas rápidamente.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-[#0F172A]/55 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="nuestra-planta" className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="reveal rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] p-8 md:p-10 backdrop-blur-md">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/50">Nuestra planta</p>
                  <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl md:text-4xl font-bold text-white">
                    Ubicada en el Km 1 de la vía Arcabuco-Gámbita
                  </h2>
                  <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-100/90">
                    La planta de tratamiento de agua mineral Agua Linda está estratégicamente ubicada para sostener nuestra operación
                    de distribución y facilitar una respuesta eficiente a los pedidos de la zona.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: "verified",
                      title: "Proceso confiable",
                      desc: "Tratamiento y control enfocados en estabilidad y seguridad del producto.",
                    },
                    {
                      icon: "schedule",
                      title: "Operación continua",
                      desc: "Una logística preparada para responder a pedidos con agilidad.",
                    },
                    {
                      icon: "local_shipping",
                      title: "Distribución cercana",
                      desc: "Recorridos diseñados para Villa de Leyva y Sutamarchán.",
                    },
                    {
                      icon: "location_on",
                      title: "Origen claro",
                      desc: "Información transparente sobre la ubicación de la planta y la operación.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-[#0B1120]/70 p-5">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0B5ED7]">
                        <Icon name={item.icon} />
                      </div>
                      <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-200/80">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sostenibilidad" className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="reveal mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/50">Sostenibilidad</p>
                <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl md:text-4xl font-bold text-white">
                  Operar más cerca también es operar mejor
                </h2>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {pillars.map((item, index) => (
                <div
                  key={item.title}
                  className="reveal rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-md"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0B5ED7]">
                    <Icon name={item.icon} className="text-2xl" />
                  </div>
                  <h3 className="font-['Outfit',sans-serif] text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="reveal rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(37,211,102,0.08))] p-8 md:p-10 backdrop-blur-md">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/50">Contacto</p>
                  <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl md:text-4xl font-bold text-white">
                    Escríbenos y te compartimos el catálogo por WhatsApp
                  </h2>
                  <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-slate-100/90">
                    Podemos enviarte el catálogo, resolver dudas sobre la operación o ayudarte a elegir la presentación que mejor se
                    adapte a tu necesidad.
                  </p>
                </div>
                <a
                  href={AGUA_LINDA_WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-4 font-bold text-white transition-transform hover:scale-105"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.8s ease-out;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
