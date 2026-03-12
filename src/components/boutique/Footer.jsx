export function Footer() {
  return (
    <footer className="py-20 border-t border-[#b8860b]/20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-sm">
                <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-[#b8860b] text-3xl">balance</span>
                    <span className="text-2xl font-bold tracking-tight">Lex & Co.</span>
                </div>
                <p className="text-[#2a2a2a]/50 text-sm leading-relaxed">
                    Una práctica legal boutique dedicada a la excelencia estratégica y al liderazgo ético en el comercio global.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                <div>
                    <h6 className="text-xs font-bold tracking-widest uppercase mb-6 text-[#b8860b]">Firma</h6>
                    <ul className="space-y-4 text-sm text-[#2a2a2a]/70">
                        <li><a className="hover:text-[#b8860b] transition-colors" href="#">Nuestro Equipo</a></li>
                        <li><a className="hover:text-[#b8860b] transition-colors" href="#">Historia</a></li>
                        <li><a className="hover:text-[#b8860b] transition-colors" href="#">Carreras</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-xs font-bold tracking-widest uppercase mb-6 text-[#b8860b]">Práctica</h6>
                    <ul className="space-y-4 text-sm text-[#2a2a2a]/70">
                        <li><a className="hover:text-[#b8860b] transition-colors" href="#">Corporativo</a></li>
                        <li><a className="hover:text-[#b8860b] transition-colors" href="#">Litigio de PI</a></li>
                        <li><a className="hover:text-[#b8860b] transition-colors" href="#">M&A</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-xs font-bold tracking-widest uppercase mb-6 text-[#b8860b]">Contacto</h6>
                    <ul className="space-y-4 text-sm text-[#2a2a2a]/70">
                        <li>NY • LDN • HK</li>
                        <li>+1 212 555 0198</li>
                        <li>Política de Privacidad</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#b8860b]/20 flex flex-col md:flex-row justify-between items-center text-xs text-[#2a2a2a]/30 uppercase tracking-widest font-bold">
            <p>© 2024 Lex & Co. Todos los derechos reservados.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
                <a className="hover:text-[#b8860b]" href="#">LinkedIn</a>
                <a className="hover:text-[#b8860b]" href="#">Instagram</a>
                <a className="hover:text-[#b8860b]" href="#">Diario</a>
            </div>
        </div>
    </footer>
  );
}
