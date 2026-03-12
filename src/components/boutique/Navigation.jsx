export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f8f7f2]/80 backdrop-blur-md border-b border-[#b8860b]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#b8860b] text-3xl">balance</span>
                <span className="text-2xl font-bold tracking-tight">Lex & Co.</span>
            </div>
            <div className="hidden md:flex items-center gap-10">
                <a className="text-sm uppercase tracking-widest hover:text-[#b8860b] transition-colors" href="#casos">Casos de Éxito</a>
                <a className="text-sm uppercase tracking-widest hover:text-[#b8860b] transition-colors" href="#metodo">Nuestro Método</a>
                <a className="text-sm uppercase tracking-widest hover:text-[#b8860b] transition-colors" href="#hitos">Hitos</a>
                <a className="text-sm uppercase tracking-widest hover:text-[#b8860b] transition-colors" href="#perspectivas">Perspectivas</a>
            </div>
            <a className="bg-[#b8860b] hover:bg-[#b8860b]/90 text-white px-8 py-3 rounded-lg text-sm font-bold tracking-wider transition-all shadow-sm" href="#consulta">
                CONSULTA
            </a>
        </div>
    </nav>
  );
}
