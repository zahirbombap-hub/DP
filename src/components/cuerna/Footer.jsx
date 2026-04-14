export function Footer({ year }) {
  return (
    <footer className="bg-black pt-16 md:pt-24 pb-10 md:pb-12 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-header text-white mb-8 sm:mb-10 leading-tight">
              LLEGA Y QUE EL <br />
              <span className="text-brandRed">CUERPO AGUANTE</span>
            </h2>
            <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12" data-purpose="contact-info">
              <div className="flex items-center gap-4 sm:gap-6 text-gray-400 hover:text-brandRed transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brandRed/20 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-sub tracking-wider">Carrera 8 # 41-39, Bogotá</span>
              </div>
              <a className="flex items-center gap-4 sm:gap-6 text-gray-400 hover:text-[#25D366] transition-colors group" href="https://wa.me/573000000000">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-sub tracking-wider">+57 300 000 0000</span>
              </a>
              <div className="flex items-center gap-4 sm:gap-6 text-gray-400 hover:text-brandPink transition-colors group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brandPink/20 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-sub tracking-wider">@cuerna.col</span>
              </div>
            </div>
            <a
              className="inline-flex items-center gap-4 px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-[#25D366] text-black font-bold hover:scale-105 transition-transform rounded-sm uppercase tracking-widest font-sub text-base sm:text-lg md:text-xl"
              href="https://wa.me/573000000000"
            >
              RESERVAR EVENTO - WHATSAPP
            </a>
          </div>
          <div className="h-[320px] sm:h-[400px] md:h-[450px] w-full bg-gray-900 border border-gray-800 relative group overflow-hidden">
            <iframe
              allowFullScreen
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.853047990135!2d-74.0660682241643!3d4.620247942352843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a28892795bd%3A0x6e26715201460361!2sCra.%208%20%2341-39%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1708801234567!5m2!1sen!2sco"
              style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.2) brightness(0.8)" }}
              width="100%"
              title="Mapa Cuerna"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-4 border-brandRed/20"></div>
          </div>
        </div>
        <div className="text-center pt-10 md:pt-12 border-t border-gray-900">
          <div className="mb-6">
            <img alt="Cuerna" className="h-10 sm:h-12 mx-auto grayscale opacity-50" src="/multimedia/cuerna/logo cuerna.webp" />
          </div>
          <p className="text-gray-600 text-xs font-bold tracking-[0.2em] uppercase font-body">
            © {year} CUERNA BOGOTÁ. EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD. PROHÍBASE EL EXPENDIO DE BEBIDAS
            EMBRIAGANTES A MENORES DE EDAD.
          </p>
        </div>
      </div>
    </footer>
  );
}
