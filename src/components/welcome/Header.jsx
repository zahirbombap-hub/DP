import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-[#8a0012]/30 bg-[#050505]/90 backdrop-blur-xl cinematic-load">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <a aria-label="Don Prueba Inicio" className="flex items-center gap-4 group" href="/" onClick={() => window.location.reload()}>
          <div className="relative flex items-center justify-center size-9 bg-[#8a0012] text-white font-['JetBrains_Mono',monospace] font-extrabold text-lg dp-logo-mark transition-transform group-hover:bg-[#ff3d4d] group-hover:skew-x-[-10deg]">
            DP
          </div>
          <span className="font-['JetBrains_Mono',monospace] text-lg font-extrabold tracking-tighter uppercase text-white">
            Don <span className="text-[#ff3d4d]">Prueba</span>
          </span>
        </a>
        <nav aria-label="Navegación Principal" className="flex items-center gap-8 max-[750px]:hidden">
          <a className="nav-link text-[10px] font-bold transition-colors uppercase tracking-[0.2em] text-[#a1a1aa]" href="#cases-section">Páginas</a>
          <a className="nav-link text-[10px] font-bold transition-colors uppercase tracking-[0.2em] text-[#a1a1aa]" href="#how-it-works">Proceso</a>
          <a className="nav-link text-[10px] font-bold transition-colors uppercase tracking-[0.2em] text-[#a1a1aa]" href="#pricing-section">Precios</a>
          <a className="nav-link text-[10px] font-bold transition-colors uppercase tracking-[0.2em] text-[#a1a1aa]" href="#contact-footer">Contacto</a>
        </nav>
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Mobile menu button - visible on screens < 800 */}
          <div className="hidden max-[750px]:block relative">
            <button
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md bg-transparent text-white hover:bg-white/5 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>

            <div
              id="mobile-menu"
              className={`origin-top-right right-0 mt-2 w-44 bg-[#050505]/95 border border-[#8a0012]/20 rounded-md overflow-hidden transition-all duration-300 ease-in-out lg:hidden absolute z-50`}
              style={{ maxHeight: open ? '240px' : '0px', opacity: open ? 1 : 0 }}
              aria-hidden={!open}
            >
              <nav className="flex flex-col text-sm">
                <a href="#cases-section" title="Ir a Páginas" className="px-4 py-3 hover:bg-white/3" onClick={() => setOpen(false)}>Páginas</a>
                <a href="#how-it-works" title="Ir a Proceso" className="px-4 py-3 hover:bg-white/3" onClick={() => setOpen(false)}>Proceso</a>
                <a href="#pricing-section" title="Ir a Precios" className="px-4 py-3 hover:bg-white/3" onClick={() => setOpen(false)}>Precios</a>
                <a href="#contact-footer" title="Ir a Contáctanos" className="px-4 py-3 hover:bg-white/3" onClick={() => setOpen(false)}>Contáctanos</a>
              </nav>
            </div>
          </div>

          <button
            onClick={() => {
              const target = document.getElementById('contact-footer');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const firstInput = document.getElementById('company-name');
                // delay focus slightly to allow scroll
                setTimeout(() => firstInput?.focus(), 500);
              }
            }}
            aria-label="Ir al formulario de contacto"
            title="Ir al formulario de contacto"
            className="cta-button text-white px-3 sm:px-5 py-2 text-[9px] sm:text-[10px] font-black uppercase tracking-widest active:scale-95"
          >
            Iniciar Proyecto
          </button>
        </div>
      </div>
    </header>
  );
}
