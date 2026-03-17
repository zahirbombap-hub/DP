const agendaItems = [
  {
    img: "/multimedia/cuerna/tusa.png",
    alt: "Agropecuario",
    day: "MARTES Y MIÉRCOLES",
    title: "AGROPECUARIO",
    description: "Promos imbatibles en botellas pa' los que saben beber de verdad. El calentamiento oficial.",
    accentClass: "text-brandYellow",
  },
  {
    img: "/multimedia/cuerna/beso.png",
    alt: "De Cuerna",
    day: "VIERNES",
    title: "DE CUERNA",
    description: "Corridos Bélicos & Free Cover. La previa del fin de semana que no perdona a nadie.",
    accentClass: "text-brandRed",
  },
  {
    img: "/multimedia/cuerna/tablazo.png",
    alt: "Desmadre Total",
    day: "FINES DE SEMANA",
    title: "DESMADRE TOTAL",
    description: "Artistas en vivo, perreo intenso y lo que surja en el calor de la noche.",
    accentClass: "text-brandPink",
  },
];

export function AgendaSection() {
  return (
    <section className="py-6 sm:py-8 md:py-20 bg-[#080808] border-y border-white/5 relative" id="agenda">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2 sm:mb-5 md:mb-4">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-header text-brandwhite mb-0 sm:mb-0">LA AGENDA</h2>
          <p className="text-base sm:text-xl text-gray-400 font-sub tracking-[0.25em]">¿QUÉ DÍA QUIERES PECAR?</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {agendaItems.map((item) => (
            <div key={item.title} className="group mx-auto w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] text-left">
              <img
                alt={item.alt}
                className="w-3/4 h-auto block mx-auto transform transition-transform duration-500 hover:scale-105"
                src={item.img}
              />
              <div className="px-3 sm:px-4">
                <span className={`${item.accentClass} font-sub font-bold tracking-widest text-sm sm:text-lg`}>{item.day}</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-header text-white mt-2 mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-gray-300 font-body text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

