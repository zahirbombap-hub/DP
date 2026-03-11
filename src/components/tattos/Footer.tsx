export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="dp-logo text-xs">DP</div>
            <div>
              <h4 className="font-black uppercase text-2xl text-white tracking-tighter">ZONA 7 ART</h4>
              <p className="text-[10px] text-[#8a0012] font-mono tracking-[0.4em] uppercase font-extrabold">PUNTILLISMO & BLACKWORK</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-slate-100 hover:text-[#8a0012] transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-lg">call</span>
              <a className="text-sm font-mono font-bold tracking-[0.2em]" href="https://wa.me/573018688104">301 868 8104</a>
            </div>
            <div className="flex items-center gap-3 text-slate-100 hover:text-[#8a0012] transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-lg">photo_camera</span>
              <a className="text-sm font-mono font-bold tracking-[0.2em]" href="https://instagram.com/zone_tatt00">@ZONE_TATT00</a>
            </div>
          </div>
        </div>
        <div className="text-[10px] font-bold font-mono text-slate-400 uppercase flex flex-col md:flex-row justify-between gap-4 border-t border-white/10 pt-8">
          <span>© 2024 ZONA 7 ART. ARTE, TATUAJES Y PINTURAS RADICALES.</span>
          <span className="text-[#8a0012] font-black">BOSA / LA INDEPENDENCIA / COLOMBIA</span>
        </div>
      </div>
    </footer>
  );
}