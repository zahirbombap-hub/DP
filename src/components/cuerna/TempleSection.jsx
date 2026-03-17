export function TempleSection() {
  return (
    <section className="py-16 sm:py-8 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
        <div className="group relative mx-auto w-full max-w-[320px] sm:max-w-[420px] md:max-w-[560px] lg:max-w-none px-2 sm:px-0" data-purpose="mexican-imagery">
          <img
            alt="Cuerna Chess"
            className="w-full h-auto max-h-[420px] sm:max-h-[520px] md:max-h-[640px] shadow-2xl scale-100 group-hover:scale-105 transition-transform duration-700 object-contain"
            src="/multimedia/cuerna/Cuerna Ajedrez.png"
          />
          <div className="absolute -bottom-4 -left-4 z-20 bg-brandBg border border-brandRed p-4 rotate-[-12deg] hidden md:block">
            <p className="font-sub text-brandRed text-xl font-bold">TEMPLO BÉLICO</p>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4 text-center lg:text-left px-1 sm:px-0">
          <h2
            className="text-2xl sm:text-3xl lg:text-6xl font-header text-brandYellow leading-[1.05] sm:leading-tight"
            data-purpose="section-title"
          >
            EL TEMPLO DEL <br />
            <span className="text-white">DESMADRE</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed font-body">
            La elegancia sabe a tequila. Somos el refugio de la música popular, los corridos bélicos y la fiesta salvaje
            en el corazón de Bogotá. Aquí no vienes a figurar, vienes a vivir una noche legendaria.
          </p>
          <p className="text-sm sm:text-lg lg:text-xl text-brandRed font-sub font-bold italic py-2 sm:py-3 border-y border-brandPink/20">
            "En Cuerna encuentras el amor... o un buen guayabo"
          </p>
          <div className="flex gap-2 sm:gap-3 flex-wrap pt-3 justify-center lg:justify-start">
            <span className="px-4 sm:px-5 py-2 border border-brandYellow text-brandYellow rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-brandYellow hover:text-black transition-all cursor-default">
              Música Popular
            </span>
            <span className="px-4 sm:px-5 py-2 border border-brandRed text-brandRed rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-brandRed hover:text-white transition-all cursor-default">
              Corridos Bélicos
            </span>
            <span className="px-4 sm:px-5 py-2 border border-brandPink text-brandPink rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-brandPink hover:text-white transition-all cursor-default">
              Tequila Shots
            </span>
            <span className="px-4 sm:px-5 py-2 border border-white text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-default">
              Despecho
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
