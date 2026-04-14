export function ArsenalSection() {
  return (
    <section className="py-4 md:py-16 relative overflow-hidden bg-brandRed">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-center pointer-events-none">
        <span className="font-header text-[40vw] text-black whitespace-nowrap opacity-5 select-none">
          CUERNA CUERNA CUERNA
        </span>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div data-purpose="arsenal-info" className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-header text-black mb-6 sm:mb-8 md:mb-10" style={{ textShadow: "none" }}>
              EL ARSENAL
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-black/10 p-4 sm:p-6 md:p-8 backdrop-blur-md border-l-4 md:border-l-8 border-black hover:bg-black/20 transition-all group">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-sub font-bold uppercase text-black">Los Tablazos</h3>
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm sm:text-base font-medium font-body leading-tight">
                  "Ni flores ni chocolates, aquí te invitan tablazos." Nuestra especialidad para calentar el alma.
                </p>
              </div>
              <div className="bg-black/10 p-4 sm:p-6 md:p-8 backdrop-blur-md border-l-4 md:border-l-8 border-black hover:bg-black/20 transition-all">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-sub font-bold uppercase text-black">Cubetazos</h3>
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.703 2.703 0 01-3 0 2.703 2.703 0 01-3 0 2.704 2.704 0 01-1.5-.454M3 8v4.5A2.5 2.5 0 005.5 15h13a2.5 2.5 0 002.5-2.5V8M12 3v13m-9-5h18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm sm:text-base font-medium font-body leading-tight">
                  Cerveza nacional e importada al clima perfecto (bajo cero). Pide la cubeta pal parche.
                </p>
              </div>
              <div className="bg-black/10 p-4 sm:p-6 md:p-8 backdrop-blur-md border-l-4 md:border-l-8 border-black hover:bg-black/20 transition-all">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-sub font-bold uppercase text-black">Botellería</h3>
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm sm:text-base font-medium font-body leading-tight">
                  Aguardiente, Ron y Tequilas Premium. Solo para hígados blindados.
                </p>
              </div>
            </div>
          </div>
          <div className="relative" data-purpose="arsenal-visual">
            <div className="border-8 border-black p-4 rotate-3 bg-black shadow-2xl overflow-hidden group">
              <img
                alt="Tequila Arsenal"
                className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                src="/multimedia/cuerna/Tablazo aereo.webp"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-black text-brandYellow px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 font-header text-xl sm:text-2xl md:text-3xl rotate-[-5deg] shadow-2xl border-2 border-brandYellow z-20">
              Otro Tablazo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
