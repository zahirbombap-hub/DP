export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      <style>{`
        @keyframes welcome-fade {
          0%, 20% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#8a0012] to-[#050505]" 
        style={{ animation: 'welcome-fade 2.5s ease-out forwards' }} 
      />
      <div className="flex flex-col items-center text-center z-10">
        <div className="mb-6 px-4 py-1 border border-[#8a0012]/40 bg-[#8a0012]/10 backdrop-blur-sm">
          <span className="text-[#ff3d4d] text-[9px] font-black tracking-[0.4em] uppercase font-['Space_Grotesk',sans-serif]">Don Prueba // Portafolio Empresarial</span>
        </div>
        <h1 className="text-[14vw] sm:text-[11vw] leading-[0.85] font-black uppercase tracking-tighter mb-8 bg-gradient-to-b from-white via-white to-[#a1a1aa] bg-clip-text text-transparent select-none font-['Space_Grotesk',sans-serif]">
          DON <br className="md:hidden"/> PRUEBA
        </h1>
        <div className="max-w-3xl space-y-6">
          <p className="text-lg md:text-xl text-[#a1a1aa] font-light leading-snug tracking-tight font-['Space_Grotesk',sans-serif]">
            Desarrollamos ecosistemas digitales con el rigor del <span className="text-white font-normal italic">Protocolo Crimson</span>. Soluciones web empresariales para visionarios y marcas de alto impacto.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <span className="h-[1px] w-10 bg-[#8a0012] self-center"></span>
            <span className="font-['JetBrains_Mono',monospace] text-[#ff3d4d] text-[10px] uppercase tracking-widest">Est. 2024 / Portafolio Activo</span>
            <span className="h-[1px] w-10 bg-[#8a0012] self-center"></span>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#a1a1aa]/50 font-['Space_Grotesk',sans-serif]">Explorar Portafolio</span>
            <span className="material-symbols-outlined text-[#ff3d4d] text-sm animate-bounce">south</span>
          </div>
        </div>
      </div>
    </section>
  );
}