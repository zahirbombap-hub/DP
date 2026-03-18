export function Location() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10" id="location">
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter mb-6 sm:mb-8 md:mb-12 text-white leading-tight">ESTUDIO BOSA / <span className="text-[#0077BE] dark:text-[#8a0012] transition-colors duration-300">LA INDEPENDENCIA</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start md:items-center">
          <div className="map-container group relative aspect-square bg-gray-900 border border-gray-800 overflow-hidden transition-all duration-300">
            <iframe
              allowFullScreen
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.156!2d-74.2!3d4.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f0000000000001%3A0x0!2zNzMgU3VyIDczIFR2LiA4OGIsIEJvc2HDoSwgQm9nb3TDoQ!5e0!3m2!1sen!2sco!4v1708801234567"
              style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.2) brightness(0.8)" }}
              width="100%"
              title="Ubicación Estudio Bosa"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-4 border-[#0077BE]/20 dark:border-[#8a0012]/20"></div>
          </div>
          <div className="flex flex-col gap-5 sm:gap-8">
            <div className="bg-black/40 backdrop-blur-md p-5 sm:p-8 border-l-8 border-[#0077BE] dark:border-[#8a0012] shadow-xl transition-colors duration-300">
              <h3 className="font-black text-xl sm:text-2xl md:text-3xl uppercase mb-3 sm:mb-4 text-white">COORDENADAS</h3>
              <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed">
                73 Sur73 Tv. 88b, Bosa. Bogotá. Agenda tu visita para más detalles del estudio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
