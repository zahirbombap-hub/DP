export function Manifesto() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic underline decoration-[#0077BE] dark:decoration-[#8a0012] decoration-6 sm:decoration-8 underline-offset-2 sm:underline-offset-4 text-white transition-colors duration-300">EL MANIFIESTO</h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-100">
          Zona 7 Art es el epicentro del <span className="text-white font-black bg-[#0077BE] dark:bg-[#8a0012] px-1 transition-colors duration-300">puntillismo profesional en Bosa</span>. Un espacio especializado donde la técnica se fusiona con el blackwork radical para crear piezas únicas y atemporales.
        </p>
        <div className="halftone-bg p-4 sm:p-6 border-2 border-[#0077BE]/40 dark:border-[#8a0012]/40 rotate-1 mt-2 sm:mt-4 bg-black/60 backdrop-blur-sm transition-colors duration-300">
          <p className="font-mono text-[8px] sm:text-[10px] uppercase text-white leading-tight">
            [ZONA_7_ART_BOSA]<br/>
            IDENTIDAD VISUAL / TÉCNICA DE PUNTILLISMO<br/>
            ARTE RADICAL. SIN LÍMITES.
          </p>
        </div>
      </div>
    </section>
  );
}
