export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col items-center text-center gap-8">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[85vw] h-[85vw] md:w-[60vw] md:h-[60vw] border border-[#00ffff]/20 rounded-full opacity-0 animate-[expandCenter_1.2s_cubic-bezier(0.34,1.56,0.64,1)_forwards] animate-[pulseSubtle_4s_ease-in-out_infinite]"></div>
          <div className="absolute w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] border border-[#FF00FF]/10 rounded-full rotate-45 opacity-0 animate-[expandCenter_1.2s_cubic-bezier(0.34,1.56,0.64,1)_forwards]" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <div className="relative opacity-0 animate-[expandCenter_1.2s_cubic-bezier(0.34,1.56,0.64,1)_forwards]" style={{ animationDelay: '0.4s' }}>
          <span className="inline-block px-4 py-1 rounded-full bg-[#00ffff]/10 border border-[#00ffff]/30 text-[#00ffff] text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Disponible para Comisiones
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-white drop-shadow-2xl">
            LIENZO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] via-[#FF00FF] to-[#00ffff] bg-[length:200%_auto] animate-[gradient_8s_ease_infinite]" style={{ textShadow: '0 0 8px rgba(0, 255, 255, 0.8)' }}>DIGITAL</span> <br />
            SIN LÍMITES
          </h1>
        </div>
        <p className="max-w-xl text-slate-400 text-lg md:text-xl font-light leading-relaxed opacity-0 animate-[expandCenter_1.2s_cubic-bezier(0.34,1.56,0.64,1)_forwards]" style={{ animationDelay: '0.6s' }}>
          Experiencias digitales inmersivas creadas en el vacío de neón. Explorando la intersección entre la emoción humana y la estética cibernética.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 opacity-0 animate-[expandCenter_1.2s_cubic-bezier(0.34,1.56,0.64,1)_forwards]" style={{ animationDelay: '0.8s' }}>
          <button className="px-8 py-4 rounded-full bg-[#00ffff] text-[#0D0D0D] font-bold tracking-wider hover:bg-white hover:scale-105 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] shadow-[0_0_15px_rgba(0,255,255,0.4)]">
            EXPLORAR LA BÓVEDA
          </button>
          <button className="px-8 py-4 rounded-full border border-slate-700 bg-[#0D0D0D]/50 backdrop-blur-sm text-white font-bold tracking-wider hover:border-[#FF00FF] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
            EL PROCESO
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#00ffff]">Deslizar</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#00ffff] to-transparent"></div>
      </div>
    </section>
  );
}