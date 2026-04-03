import { Icon } from "../Icon.jsx";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center py-24 md:py-28 overflow-hidden wool-hero">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center bg-fixed wool-hero-image" />
        <div className="absolute inset-0 wool-hero-overlay"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
          <div className="space-y-5">
            <span
              className="inline-block px-4 py-1 bg-white/10 text-[color:var(--color-surface)] border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest wool-fade-up wool-float"
              style={{ "--delay": "0.4s" }}
            >
              Un legado en cada hebra
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Playfair_Display',serif] font-medium leading-tight text-[color:var(--color-surface)] wool-hero-title animate-[blurFocus_1.8s_cubic-bezier(0.22,1,0.36,1)_forwards]">
              Historias Tejidas, <br /> <span className="italic wool-underline-accent">Vestidas con Amor</span>
            </h1>
          </div>
          <div className="space-y-8 lg:pl-6">
            <p
              className="text-lg md:text-xl text-[color:var(--color-surface)] max-w-xl leading-relaxed opacity-90 wool-fade-up"
              style={{ "--delay": "0.8s" }}
            >
              Un archivo visual de piezas artesanales creadas con materiales éticos. Una oda a la paciencia y al detalle de la lana pura.
            </p>
            <div
              className="flex flex-wrap gap-4 wool-fade-up"
              style={{ "--delay": "1.05s" }}
            >
              <button className="px-8 py-4 md:px-10 md:py-5 bg-[color:var(--color-accent)] text-white rounded-full font-bold text-base md:text-lg hover:shadow-xl transition-all flex items-center gap-2 wool-texture wool-btn">
                Descubrir el Oficio
                <Icon name="arrow_forward" />
              </button>
              <button className="px-8 py-4 md:px-10 md:py-5 bg-white/15 text-[color:var(--color-surface)] rounded-full font-bold text-base md:text-lg border border-white/25 hover:bg-white/20 transition-all wool-btn">
                Nuestra Filosofía
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
