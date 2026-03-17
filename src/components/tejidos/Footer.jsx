export function Footer() {
  return (
    <footer className="bg-[color:var(--color-bg)] pt-20 pb-10 border-t border-[#a54616]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 wool-fade-up" style={{ "--delay": "0.1s" }}>
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[color:var(--color-accent)] text-2xl">filter_vintage</span>
                    <h2 className="text-xl font-bold tracking-tight font-['Playfair_Display',serif] wool-heading">Historias Tejidas</h2>
                </div>
                <p className="text-sm wool-text leading-relaxed">
                    Catálogo de inspiración artesanal, piezas hechas a mano éticamente con lana orgánica y tintes naturales. Desde el corazón de las montañas.
                </p>
                <div className="flex gap-4">
                    <a className="w-10 h-10 rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] flex items-center justify-center hover:bg-[color:var(--color-accent)] hover:text-white transition-all wool-btn" href="#top">
                        <span className="material-symbols-outlined text-xl">camera</span>
                    </a>
                    <a className="w-10 h-10 rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] flex items-center justify-center hover:bg-[color:var(--color-accent)] hover:text-white transition-all wool-btn" href="#top">
                        <span className="material-symbols-outlined text-xl">share</span>
                    </a>
                </div>
            </div>
            <div>
                <h4 className="font-bold mb-6 wool-heading uppercase text-xs tracking-widest">Catálogo</h4>
                <ul className="space-y-4 text-sm wool-text">
                    <li><a className="hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#top">Nuevas Creaciones</a></li>
                    <li><a className="hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#top">Archivo Histórico</a></li>
                    <li><a className="hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#top">Colaboraciones</a></li>
                    <li><a className="hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#top">Muestrario de Lana</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-6 wool-heading uppercase text-xs tracking-widest">Explorar</h4>
                <ul className="space-y-4 text-sm wool-text">
                    <li><a className="hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#top">Sostenibilidad</a></li>
                    <li><a className="hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#top">Relatos de Artesanos</a></li>
                    <li><a className="hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#top">Teñido Natural</a></li>
                    <li><a className="hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#top">El Taller</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-6 wool-heading uppercase text-xs tracking-widest">Información</h4>
                <ul className="space-y-4 text-sm wool-text">
                    <li><a className="hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#top">Guía de Cuidado</a></li>
                    <li><a className="hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#top">Puntos de Exhibición</a></li>
                    <li><a className="hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#top">Contacto Directo</a></li>
                    <li><a className="hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#top">Preguntas Frecuentes</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-[#a54616]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs wool-muted uppercase tracking-widest wool-fade-up" style={{ "--delay": "0.2s" }}>
            <p>© 2024 Historias Tejidas. Catálogo Virtual de Artesanía.</p>
            <div className="flex gap-8">
                <a className="hover:text-[color:var(--color-accent)] wool-link" href="#top">Privacidad</a>
                <a className="hover:text-[color:var(--color-accent)] wool-link" href="#top">Uso de Imagen</a>
            </div>
        </div>
    </footer>
  );
}
