export function Methodology() {
  return (
    <section className="py-32 bg-white border-y border-[#b8860b]/20 relative" id="metodo">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl mb-6 italic text-[#b8860b]">Los Pilares de la Excelencia</h2>
                <div className="h-px w-24 bg-[#b8860b] mx-auto opacity-30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-[#b8860b]/10 flex items-center justify-center mb-8 group-hover:bg-[#b8860b] transition-colors">
                        <span className="material-symbols-outlined text-[#b8860b] group-hover:text-white transition-colors">verified_user</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Confianza Inquebrantable</h3>
                    <p className="text-[#2a2a2a]/60 font-light leading-relaxed">
                        Construyendo relaciones duraderas a través de la transparencia y una integridad profesional constante en cada paso.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-[#b8860b]/10 flex items-center justify-center mb-8 group-hover:bg-[#b8860b] transition-colors">
                        <span className="material-symbols-outlined text-[#b8860b] group-hover:text-white transition-colors">lightbulb</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Innovación Moderna</h3>
                    <p className="text-[#2a2a2a]/60 font-light leading-relaxed">
                        Aprovechando la tecnología avanzada y metodologías ágiles para proporcionar estrategias legales de vanguardia.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-[#b8860b]/10 flex items-center justify-center mb-8 group-hover:bg-[#b8860b] transition-colors">
                        <span className="material-symbols-outlined text-[#b8860b] group-hover:text-white transition-colors">military_tech</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Maestría de Élite</h3>
                    <p className="text-[#2a2a2a]/60 font-light leading-relaxed">
                        Un compromiso con los más altos estándares de la teoría legal y una ejecución meticulosa en el servicio al cliente.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}