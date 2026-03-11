export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="z-10 order-2 lg:order-1 animate-[fadeUp_1.2s_cubic-bezier(0.215,0.61,0.355,1)_forwards]">
                <span className="text-[#b8860b] font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Excelencia Boutique</span>
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] mb-8 tracking-tighter">
                    Soluciones <br />
                    <span className="italic font-normal">Legales</span> <br />
                    Estratégicas
                </h1>
                <p className="text-xl max-w-md mb-10 text-[#2a2a2a]/70 leading-relaxed font-light">
                    Redefiniendo la jurisprudencia moderna con un enfoque personalizado para los desafíos globales más complejos.
                </p>
                <div className="flex flex-wrap gap-6">
                    <a className="border border-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-white px-10 py-4 rounded-lg transition-all text-sm font-bold tracking-widest uppercase inline-block" href="#casos">
                        Ver Casos de Éxito
                    </a>
                    <a className="flex items-center gap-2 text-[#b8860b] font-bold tracking-widest uppercase text-sm group" href="#metodo">
                        Nuestra Filosofía
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>
            </div>
            <div className="relative order-1 lg:order-2 h-[500px] lg:h-[700px] group">
                <div className="absolute inset-0 border-[1px] border-[#b8860b] translate-x-4 translate-y-4 rounded-lg"></div>
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-slate-200 grayscale">
                    <img alt="Retrato profesional de abogado" className="w-full h-full object-cover animate-[kenburns_20s_ease-out_forwards]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUq5_noGPOUsm6gLTOGFpa8kJgVzds0szAVv3pQ9kblH6CzqagXL0tmtcI7U84yTEtNHx9MProrxETq7qPonOpJMGbSrsViRHqpLjeSS5qcAwGMQPgwzHYWwyk7nhG0kwozHhuh5CPqwCIpNcbsMeY0LReXsKsi3KMtNheqiGlB8CKP3Sol_t_Q_M5affqkN_Lt1otFr2OkaylzQBWQkyhDMDC3LmVAIInqSPh-4hOSWNtG9N5BlkcGLdhsrsSbCXvMuA5Qu6H_T0" />
                </div>
            </div>
        </div>
    </section>
  );
}