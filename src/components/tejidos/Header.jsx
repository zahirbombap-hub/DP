export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#E8E3DA]/80 dark:bg-[#211811]/80 backdrop-blur-md border-b border-[#d2691e]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-12">
                <a className="flex items-center gap-2 group" href="#top">
                    <span className="material-symbols-outlined text-[#d2691e] text-3xl">filter_vintage</span>
                    <h2 className="text-2xl font-bold tracking-tight font-['Playfair_Display',serif]">Historias Tejidas</h2>
                </a>
                <nav className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-semibold hover:text-[#d2691e] transition-colors" href="#top">Galería Completa</a>
                    <a className="text-sm font-semibold hover:text-[#d2691e] transition-colors" href="#top">El Oficio</a>
                    <a className="text-sm font-semibold hover:text-[#d2691e] transition-colors" href="#top">Materiales</a>
                    <a className="text-sm font-semibold hover:text-[#d2691e] transition-colors" href="#top">Archivo</a>
                </nav>
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden lg:flex items-center bg-[#FFFDD0]/50 dark:bg-white/10 rounded-full px-4 py-1.5 border border-[#d2691e]/5">
                    <span className="material-symbols-outlined text-slate-500 text-xl">search</span>
                    <input className="bg-transparent border-none focus:ring-0 text-sm w-40 placeholder:text-slate-400 outline-none ml-2" placeholder="Buscar pieza..." type="text" />
                </div>
                <div className="flex items-center gap-4">
                    <a className="text-xs uppercase tracking-widest font-bold text-[#d2691e] hover:text-[#3A5B3A] transition-colors border-b border-[#d2691e]/20 pb-0.5" href="#top">Catálogo Digital</a>
                    <a className="text-xs uppercase tracking-widest font-bold hover:text-[#d2691e] transition-colors" href="#top">Contacto</a>
                </div>
            </div>
        </div>
    </header>
  );
}
