export function HowItWorks() {
  return (
    <section className="py-16 px-6 max-w-screen-2xl mx-auto reveal" id="how-it-works">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 glass-panel p-8 flex flex-col justify-between group transition-all border-l-4 border-l-[#8a0012]">
          <div>
            <h3 className="text-3xl font-black tracking-tighter italic uppercase mb-4 leading-none text-white font-['Space_Grotesk',sans-serif]">Identidad Digital <br /> de Alto Nivel</h3>
            <p className="text-[#a1a1aa] font-light leading-relaxed text-base max-w-md font-['Space_Grotesk',sans-serif]">Cada proyecto es una arquitectura única. Desde la sobriedad legal hasta la rebeldía del arte urbano, aplicamos el mismo rigor técnico para asegurar que su presencia en línea sea impecable.</p>
          </div>
          <div className="flex items-center gap-6 text-[#8a0012] font-black pt-8">
            <span className="text-[9px] uppercase tracking-[0.3em] font-['Space_Grotesk',sans-serif]">Protocolo 02</span>
            <div className="h-[1px] flex-1 bg-[#8a0012]/30"></div>
            <span className="material-symbols-outlined text-sm">architecture</span>
          </div>
        </div>
        <div className="md:col-span-1 glass-panel p-6 flex flex-col items-center justify-center gap-4 text-center group hover:border-[#ff3d4d] transition-all bg-[#121212]">
          <div className="size-16 bg-[#8a0012]/10 flex items-center justify-center border border-[#8a0012]/40 group-hover:rotate-45 transition-transform duration-500">
            <span className="material-symbols-outlined text-[#ff3d4d] text-3xl">brush</span>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-2 text-white font-['Space_Grotesk',sans-serif]">Versatilidad Estética</h4>
            <p className="font-['JetBrains_Mono',monospace] text-[11px] text-[#a1a1aa] uppercase leading-loose">Minimalismo / Neón / <br /> Orgánico / Grunge</p>
          </div>
        </div>
        <div className="md:col-span-1 glass-panel p-6 flex flex-col items-center justify-center text-center border-t-4 border-t-[#8a0012]/40 bg-[#121212]">
          <span className="text-6xl font-black text-[#ff3d4d] tracking-tighter leading-none font-['Space_Grotesk',sans-serif]">100%</span>
          <p className="text-[9px] uppercase tracking-[0.3em] font-black mt-3 text-[#a1a1aa] font-['Space_Grotesk',sans-serif]">Adaptabilidad de Marca</p>
        </div>
      </div>
    </section>
  );
}
