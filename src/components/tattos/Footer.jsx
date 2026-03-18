export function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-5 sm:gap-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="dp-logo text-[10px] sm:text-xs px-2 sm:px-3 py-1">DP</div>
            <div>
              <h4 className="font-black uppercase text-lg sm:text-xl md:text-2xl text-white tracking-tighter leading-tight">ZONA 7 ART</h4>
              <p className="text-[8px] sm:text-[10px] text-[#8a0012] font-mono tracking-[0.3em] sm:tracking-[0.4em] uppercase font-extrabold">PUNTILLISMO & BLACKWORK</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 text-sm">
            <div className="flex items-center gap-2 sm:gap-3 text-slate-100 hover:text-[#8a0012] transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-base sm:text-lg shrink-0">call</span>
              <a className="text-xs sm:text-sm font-mono font-bold tracking-[0.15em] sm:tracking-[0.2em]" href="https://wa.me/573018688104">301 868 8104</a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-slate-100 hover:text-[#8a0012] transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-base sm:text-lg shrink-0">photo_camera</span>
              <a className="text-xs sm:text-sm font-mono font-bold tracking-[0.15em] sm:tracking-[0.2em]" href="https://instagram.com/zone_tatt00">@ZONE_TATT00</a>
            </div>
          </div>
        </div>
        <div className="text-[7px] sm:text-[9px] md:text-[10px] font-bold font-mono text-slate-400 uppercase flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 border-t border-white/10 pt-6 sm:pt-8">
          <span className="leading-tight">© 2024 ZONA 7 ART. ARTE, TATUAJES Y PINTURAS RADICALES.</span>
          <span className="text-[#8a0012] font-black whitespace-nowrap">BOSA / LA INDEPENDENCIA / COLOMBIA</span>
        </div>
      </div>
    </footer>
  );
}
