export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-white pt-20" id="hero">
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt="Paisaje de Villa de Leyva"
          className="parallax-bg absolute inset-0 h-full w-full object-cover blur-[3px] scale-105 will-change-transform"
          decoding="async"
          fetchPriority="high"
          height="800"
          loading="eager"
          sizes="100vw"
          src="/multimedia/villa.png"
          width="1280"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-['Outfit',sans-serif] text-5xl md:text-7xl font-extrabold mb-6 leading-tight reveal">
          Pureza Natural de <br /> <span className="text-[#0077BE] italic">Villa de Leyva</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto reveal" style={{ transitionDelay: "200ms" }}>
          Desde las montañas de Boyacá hasta tu mesa, Agua Linda lleva la pureza de Sutamarchán y la frescura del altiplano a cada hogar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{ transitionDelay: "400ms" }}>
          <a className="bg-[#0077BE] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2" href="#el-rey">
            <span aria-hidden="true" className="inline-flex">
              <svg fill="none" viewBox="0 0 24 24" className="text-2xl" style={{ width: "1em", height: "1em" }}>
                <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
              </svg>
            </span>
            Ver Productos
          </a>
          <a className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all" href="#beneficios">
            Ver Beneficios
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg aria-hidden="true" className="text-3xl" fill="none" viewBox="0 0 24 24" style={{ width: "1em", height: "1em" }}>
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </svg>
      </div>
    </section>
  );
}
