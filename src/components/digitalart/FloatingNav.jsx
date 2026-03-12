export function FloatingNav() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-auto">
      <nav className="bg-[rgba(13,13,13,0.7)] backdrop-blur-md border border-[#00ffff]/20 px-6 py-3 rounded-full flex items-center gap-2 shadow-2xl">
        <a className="w-12 h-12 flex items-center justify-center rounded-full text-[#00ffff] hover:bg-[#00ffff]/20 transition-all duration-400" href="#" title="Inicio">
          <span className="material-symbols-outlined">home</span>
        </a>
        <a className="w-12 h-12 flex items-center justify-center rounded-full text-slate-400 hover:text-[#00ffff] hover:bg-[#00ffff]/10 transition-all duration-400" href="#gallery" title="Galería">
          <span className="material-symbols-outlined">grid_view</span>
        </a>
        <a className="w-12 h-12 flex items-center justify-center rounded-full text-slate-400 hover:text-[#00ffff] hover:bg-[#00ffff]/10 transition-all duration-400" href="#about" title="Sobre mí">
          <span className="material-symbols-outlined">person</span>
        </a>
        <div className="w-[1px] h-6 bg-slate-700 mx-2"></div>
        <a className="flex items-center justify-center gap-2 px-6 h-12 rounded-full bg-[#00ffff]/20 text-[#00ffff] border border-[#00ffff]/50 font-bold hover:bg-[#00ffff] hover:text-[#0D0D0D] transition-all duration-400" href="#contact" title="Contacto">
          <span className="material-symbols-outlined text-sm">mail</span>
          <span className="hidden sm:inline uppercase">Contacto</span>
        </a>
      </nav>
    </div>
  );
}
