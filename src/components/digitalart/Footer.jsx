export function Footer() {
  return (
    <footer className="py-12 border-t border-slate-900 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00ffff]/20 rounded-full flex items-center justify-center border border-[#00ffff]/30">
            <span className="material-symbols-outlined text-[#00ffff] text-xl">blur_on</span>
          </div>
          <span className="text-white font-bold tracking-widest uppercase">LIENZO SIN LÍMITES</span>
        </div>
        <div className="flex items-center gap-8">
          <a className="text-slate-500 hover:text-[#00ffff] transition-colors" href="#top">Instagram</a>
          <a className="text-slate-500 hover:text-[#00ffff] transition-colors" href="#top">Behance</a>
          <a className="text-slate-500 hover:text-[#00ffff] transition-colors" href="#top">Twitter</a>
        </div>
        <p className="text-slate-600 text-sm">© 2024 LIENZO SIN LÍMITES. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </footer>
  );
}
