export function Milestones() {
  return (
    <section className="py-32 bg-[#f8f7f2] relative overflow-hidden" id="hitos">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="mb-20">
                <span className="text-[#b8860b] font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Nuestra Trayectoria</span>
                <h2 className="text-5xl leading-tight">Hitos de la Firma</h2>
            </div>
            <div className="space-y-24 relative">
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#b8860b]/20 -translate-x-1/2"></div>

                <div className="relative flex flex-col md:flex-row items-center justify-between group">
                    <div className="hidden md:block w-[45%] text-right pr-12">
                        <span className="text-5xl text-[#b8860b]/30 group-hover:text-[#b8860b] transition-colors font-bold parallax-bg inline-block">2008</span>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#b8860b] -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(184,134,11,0.5)]"></div>
                    <div className="w-full md:w-[45%] pl-8 md:pl-12">
                        <span className="md:hidden block text-2xl text-[#b8860b] font-bold mb-2">2008</span>
                        <h4 className="text-xl font-bold mb-2">La Fundación</h4>
                        <p className="text-[#2a2a2a]/60 font-light">Establecida con la visión de fusionar la sabiduría legal tradicional con una atención al cliente de nivel boutique.</p>
                    </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-between group">
                    <div className="w-full md:w-[45%] text-left md:text-right pr-8 md:pr-12 order-2 md:order-1">
                        <span className="md:hidden block text-2xl text-[#b8860b] font-bold mb-2">2015</span>
                        <h4 className="text-xl font-bold mb-2">Expansión Global</h4>
                        <p className="text-[#2a2a2a]/60 font-light">Apertura de oficinas de enlace internacional para atender intereses comerciales transfronterizos en mercados emergentes.</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#b8860b] -translate-x-1/2 z-10"></div>
                    <div className="hidden md:block w-[45%] pl-12 order-1 md:order-2">
                        <span className="text-5xl text-[#b8860b]/30 group-hover:text-[#b8860b] transition-colors font-bold parallax-bg inline-block">2015</span>
                    </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-between group">
                    <div className="hidden md:block w-[45%] text-right pr-12">
                        <span className="text-5xl text-[#b8860b]/30 group-hover:text-[#b8860b] transition-colors font-bold parallax-bg inline-block">2023</span>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#b8860b] -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(184,134,11,0.5)]"></div>
                    <div className="w-full md:w-[45%] pl-8 md:pl-12">
                        <span className="md:hidden block text-2xl text-[#b8860b] font-bold mb-2">2023</span>
                        <h4 className="text-xl font-bold mb-2">Premio a la Innovación</h4>
                        <p className="text-[#2a2a2a]/60 font-light">Reconocida como la 'Firma Boutique Más Innovadora' por nuestra integración de analítica legal impulsada por IA.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-[#b8860b]/5 parallax-bg pointer-events-none"></div>
    </section>
  );
}