import { useEffect } from "react";
import { Contact } from "../components/welcome/Contact.jsx";
import { Footer } from "../components/welcome/Footer.jsx";
import { Header } from "../components/welcome/Header.jsx";
import { SEOContent } from "../components/welcome/SEOContent.jsx";
import { RouteSeo } from "../components/Seo.jsx";

export function meta() {
  return [
    { title: "Articulos - Don Prueba" },
    { name: "description", content: "Articulos y notas de Don Prueba sobre desarrollo, automatizacion y producto." },
  ];
}

function ArchiveSection() {
  const items = [
    {
      title: "Automatizaciones",
      description: "Casos y flujos para reducir trabajo manual con sistemas conectados.",
      href: "/automatizaciones#inicio",
    },
    {
      title: "Apps",
      description: "Interfaces, productos y experiencias hechas para operar de forma clara.",
      href: "/apps#inicio",
    },
    {
      title: "Contacto",
      description: "Si quieres una pieza similar para tu marca, este es el punto de entrada.",
      href: "/#contact-footer",
    },
  ];

  return (
    <section id="archivo" className="reveal px-4 sm:px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff3d4d]">Archivo</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
            Rutas utiles para seguir explorando
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#a1a1aa]">
            Este bloque funciona como un mapa rapido hacia otras partes del sitio. La navegacion sigue siendo util mientras estas dentro de la subpagina.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#ff3d4d]">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#d4d4d8]">{item.description}</p>
              <span className="mt-6 inline-flex text-[10px] font-black uppercase tracking-[0.28em] text-white transition-colors group-hover:text-[#ff3d4d]">
                Ir ahora
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Articulos() {
  useEffect(() => {
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
    <div className="welcome-page font-['Space_Grotesk',sans-serif] text-white selection:bg-[#ff3d4d] selection:text-white antialiased bg-[#050505]">
      <RouteSeo routePath="/articulos" />
      <a href="#top" className="skip-link">Saltar al contenido</a>
      <Header />

      <main id="top" role="main" className="cinematic-load">
        <section id="inicio" className="relative overflow-hidden px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(138,0,18,0.28)_0%,_rgba(5,5,5,0)_60%)]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px]" />

          <div className="relative mx-auto flex max-w-screen-2xl flex-col gap-8">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 border border-[#8a0012]/40 bg-[#8a0012]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-[#ff3d4d] backdrop-blur-sm">
                Don Prueba // Articulos
              </div>
              <h1 className="text-[15vw] sm:text-[10vw] md:text-[7rem] leading-[0.9] font-black uppercase tracking-[-0.06em] text-white">
                Lecturas <br className="sm:hidden" /> y notas
              </h1>
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#a1a1aa]">
                Un espacio para ideas, sistemas y criterios de trabajo. La pagina mantiene la estructura visual del portafolio, pero abre una ruta editorial propia.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#articulos"
                className="inline-flex items-center justify-center border border-[#8a0012] bg-[#8a0012] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#a30017]"
              >
                Explorar articulos
              </a>
              <a
                href="#archivo"
                className="inline-flex items-center justify-center border border-white/10 bg-white/[0.04] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                Ver archivo
              </a>
            </div>
          </div>
        </section>

        <SEOContent />
        <ArchiveSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
