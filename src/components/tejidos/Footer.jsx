export function Footer() {
  return (
    <footer className="bg-[#E8E3DA] dark:bg-[#211811] pt-20 pb-10 border-t border-[#d2691e]/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#d2691e] text-2xl">filter_vintage</span>
                    <h2 className="text-xl font-bold tracking-tight font-['Playfair_Display',serif]">Historias Tejidas</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Catálogo de inspiración artesanal, piezas hechas a mano éticamente con lana orgánica y tintes naturales. Desde el corazón de las montañas.
                </p>
                <div className="flex gap-4">
                    <a className="w-10 h-10 rounded-full bg-[#d2691e]/10 flex items-center justify-center hover:bg-[#d2691e] hover:text-white transition-all" href="#">
                        <span className="material-symbols-outlined text-xl">camera</span>
                    </a>
                    <a className="w-10 h-10 rounded-full bg-[#d2691e]/10 flex items-center justify-center hover:bg-[#d2691e] hover:text-white transition-all" href="#">
                        <span className="material-symbols-outlined text-xl">share</span>
                    </a>
                </div>
            </div>
            <div>
                <h4 className="font-bold mb-6 text-slate-900 dark:text-slate-100 uppercase text-xs tracking-widest">Catálogo</h4>
                <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                    <li><a className="hover:text-[#d2691e] transition-colors" href="#">Nuevas Creaciones</a></li>
                    <li><a className="hover:text-[#d2691e] transition-colors" href="#">Archivo Histórico</a></li>
                    <li><a className="hover:text-[#d2691e] transition-colors" href="#">Colaboraciones</a></li>
                    <li><a className="hover:text-[#d2691e] transition-colors" href="#">Muestrario de Lana</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-6 text-slate-900 dark:text-slate-100 uppercase text-xs tracking-widest">Explorar</h4>
                <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                    <li><a className="hover:text-[#d2691e] transition-colors" href="#">Sostenibilidad</a></li>
                    <li><a className="hover:text-[#d2691e] transition-colors" href="#">Relatos de Artesanos</a></li>
                    <li><a className="hover:text-[#d2691e] transition-colors" href="#">Teñido Natural</a></li>
                    <li><a className="hover:text-[#d2691e] transition-colors" href="#">El Taller</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-6 text-slate-900 dark:text-slate-100 uppercase text-xs tracking-widest">Información</h4>
                <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                    <li><a className="hover:text-[#d2691e] transition-colors" href="#">Guía de Cuidado</a></li>
                    <li><a className="hover:text-[#d2691e] transition-colors" href="#">Puntos de Exhibición</a></li>
                    <li><a className="hover:text-[#d2691e] transition-colors" href="#">Contacto Directo</a></li>
                    <li><a className="hover:text-[#d2691e] transition-colors" href="#">Preguntas Frecuentes</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-[#d2691e]/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400 uppercase tracking-widest">
            <p>© 2024 Historias Tejidas. Catálogo Virtual de Artesanía.</p>
            <div className="flex gap-8">
                <a className="hover:text-[#d2691e]" href="#">Privacidad</a>
                <a className="hover:text-[#d2691e]" href="#">Uso de Imagen</a>
            </div>
        </div>
    </footer>
  );
}
