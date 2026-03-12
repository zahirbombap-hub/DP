export function Location() {
  return (
    <section className="py-24 px-6 relative z-10" id="location">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 md:mb-12 text-white">ESTUDIO BOSA / <span className="text-[#0077BE] dark:text-[#8a0012] transition-colors duration-300">LA INDEPENDENCIA</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="map-container group relative aspect-square bg-zinc-950 border-4 border-white/10 shadow-[0px_0px_50px_rgba(0,119,190,0.3)] dark:shadow-[0px_0px_50px_rgba(138,0,18,0.3)] overflow-hidden map-grid cursor-pointer transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-[120%] h-[1px] bg-white/5 rotate-45"></div>
                <div className="absolute w-[120%] h-[1px] bg-white/5 -rotate-45"></div>
                <div className="relative flex flex-col items-center">
                  <span className="material-symbols-outlined text-[#0077BE] dark:text-[#8a0012] text-9xl drop-shadow-[0_0_30px_rgba(0,119,190,0.9)] dark:drop-shadow-[0_0_30px_rgba(138,0,18,0.9)] high-fidelity-pin animate-bounce transition-all duration-300">location_on</span>
                  <div className="bg-[#0077BE] dark:bg-[#8a0012] text-white font-black text-[11px] px-4 py-1.5 mt-4 uppercase tracking-widest border border-white/20 shadow-2xl transition-colors duration-300">
                    BARRIO LA INDEPENDENCIA
                  </div>
                </div>
              </div>
            </div>
            <div className="map-interact-layer absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/70 group-hover:bg-black/30 transition-all duration-700">
              <div className="mt-48 w-full text-center">
                <div className="animate-pulse-slow">
                  <p className="font-display text-[12px] font-black tracking-[0.4em] text-white bg-[#0077BE]/95 dark:bg-[#8a0012]/95 inline-block px-6 py-3 uppercase border-2 border-white/10 shadow-2xl transition-colors duration-300">
                    TOCA PARA VER EL MAPA
                  </p>
                </div>
              </div>
            </div>
            <a className="absolute inset-0 z-40 opacity-0" href="https://maps.google.com" target="_blank" rel="noreferrer">Ver ubicación</a>
          </div>
          <div className="flex flex-col gap-8">
            <div className="bg-black/40 backdrop-blur-md p-8 border-l-8 border-[#0077BE] dark:border-[#8a0012] shadow-xl transition-colors duration-300">
              <h3 className="font-black text-3xl uppercase mb-4 text-white">COORDENADAS</h3>
              <p className="text-slate-200 text-xl leading-relaxed">
                Bosa, Bogotá. Sector La Independencia. Agenda tu visita para coordenadas exactas del estudio privado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
