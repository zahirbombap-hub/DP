export function Footer() {
  return (
    <footer className="p-6 border-t border-[#8a0012]/30 bg-[#050505] reveal cinematic-load">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="size-7 bg-[#8a0012] text-white font-['JetBrains_Mono',monospace] font-extrabold text-xs flex items-center justify-center dp-logo-mark">DP</div>
          <p className="font-black tracking-tighter text-xs uppercase text-white font-['Space_Grotesk',sans-serif]">Don Prueba © 2026</p>
        </div>
        <nav aria-label="Redes Sociales" className="flex flex-wrap justify-center gap-8">
          <a className="text-[9px] font-black uppercase tracking-[0.2em] text-[#a1a1aa] hover:text-[#ff3d4d] transition-colors font-['Space_Grotesk',sans-serif]" href="#top">Instagram</a>
          <a
            className="text-[9px] font-black uppercase tracking-[0.2em] text-[#a1a1aa] hover:text-[#ff3d4d] transition-colors font-['Space_Grotesk',sans-serif]"
            href="https://wa.me/573228988201?text=Hola%2C%20quiero%20crear%20mi%20p%C3%A1gina%20web%20para%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
        </nav>
        <p className="text-[9px] text-[#a1a1aa]/60 font-['JetBrains_Mono',monospace] uppercase tracking-widest">Protocolo de diseño para alto rendimiento</p>
      </div>
    </footer>
  );
}
