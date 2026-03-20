import { Icon } from "../Icon.jsx";

export function Hero() {
  return (
    <section id="inicio" className="welcome-hero scroll-mt-24 relative min-h-[70vh] sm:min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-16 sm:pt-18 md:pt-20 overflow-hidden">
      <style>{`
        @font-face {
          font-family: "DxRuiga SemiBold";
          src: url("/fuentes/DxRuiga-SemiBold.otf") format("opentype");
          font-style: normal;
          font-weight: 600;
          font-display: swap;
        }

        @font-face {
          font-family: "ElanorFreePersonalUse-ExBdIt";
          src: url("/fuentes/ElanorFreePersonalUse-ExBdIt.otf") format("opentype");
          font-style: italic;
          font-weight: 800;
          font-display: swap;
        }

        @keyframes welcome-fade {
          0%, 20% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#8a0012] to-[#050505]"
        style={{ animation: "welcome-fade 2.5s ease-out forwards" }}
      />
      <div className="flex flex-col items-center text-center z-10">
        <div className="mt-0 mb-5 px-4 py-1 border border-[#8a0012]/40 bg-[#8a0012]/10 backdrop-blur-sm">
          <span className="text-[#ff3d4d] text-[9px] font-black tracking-[0.4em] uppercase font-['Space_Grotesk',sans-serif]">Don Prueba // Desarrollo de Software</span>
        </div>
        <h1 className="hero-title text-[14vw] sm:text-[11vw] leading-[0.82] not-italic uppercase tracking-[-0.04em] mb-8 text-white select-none">
          DON <br className="md:hidden" /> PRUEBA
        </h1>
        <div className="max-w-3xl space-y-6">
          <p className="text-lg md:text-xl text-[#a1a1aa] font-light leading-snug tracking-tight font-['Space_Grotesk',sans-serif]">
            Desarrollamos ecosistemas digitales con el rigor del <span className="text-white font-normal italic">Protocolo Crimson</span>. Soluciones web empresariales para visionarios y marcas de alto impacto.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <span className="h-[1px] w-10 bg-[#8a0012] self-center"></span>
            <span className="font-['JetBrains_Mono',monospace] text-[#ff3d4d] text-[10px] uppercase tracking-widest">Est. 2026 / Portafolio Activo</span>
            <span className="h-[1px] w-10 bg-[#8a0012] self-center"></span>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#a1a1aa]/50 font-['Space_Grotesk',sans-serif]">Explorar Portafolio</span>
            <Icon name="south" className="text-[#ff3d4d] text-sm animate-bounce" />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="section-title">
          <div className="marquee-container" aria-label="Servicios">
            <div className="marquee">
              <span>Paginas Web - Automatizaciones - Apps - Marketing -</span>
              <span aria-hidden="true">Paginas Web - Automatizaciones - Apps - Marketing -</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
