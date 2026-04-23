export function Footer({ year }) {
  return (
    <footer className="border-t border-gray-900 bg-black py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]">
            <div className="rounded-[28px] border border-gray-800 bg-white/[0.03] p-6 sm:p-8">
              <p className="mb-4 text-[11px] font-sub uppercase tracking-[0.45em] text-gray-500">
                Bogota / Gastrobar
              </p>
              <h2 className="text-4xl font-header leading-[0.95] text-white sm:text-5xl md:text-6xl">
                LLEGA Y QUE EL <br />
                <span className="text-brandRed">CUERPO AGUANTE</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
                Reserva rapido, ubicanos facil y mueve a tu gente desde un footer mas directo y mejor organizado.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-black transition-transform hover:scale-[1.02] sm:px-8 sm:text-base"
                  href="https://wa.me/573000000000"
                >
                  Reservar Evento
                </a>
                <span className="text-[11px] font-sub uppercase tracking-[0.36em] text-gray-500">
                  Respuesta rapida por WhatsApp
                </span>
              </div>
            </div>

            <div className="grid gap-3" data-purpose="contact-info">
              <div className="group rounded-2xl border border-gray-800 bg-white/[0.03] p-4 transition-colors hover:border-brandRed/40 hover:bg-white/[0.05]">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-colors group-hover:bg-brandRed/15 group-hover:text-brandRed">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="min-w-0">
                    <p className="text-[11px] font-sub uppercase tracking-[0.32em] text-gray-500">
                      Direccion
                    </p>
                    <p className="mt-2 break-words text-sm font-sub tracking-wider text-gray-200 sm:text-base">
                      Carrera 8 # 41-39, Bogota
                    </p>
                  </div>
                </div>
              </div>

              <a
                className="group rounded-2xl border border-gray-800 bg-white/[0.03] p-4 transition-colors hover:border-[#25D366]/40 hover:bg-white/[0.05]"
                href="https://wa.me/573000000000"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-colors group-hover:bg-[#25D366]/15 group-hover:text-[#25D366]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-sub uppercase tracking-[0.32em] text-gray-500">
                      WhatsApp
                    </p>
                    <p className="mt-2 text-sm font-sub tracking-wider text-gray-200 sm:text-base">
                      +57 300 000 0000
                    </p>
                  </div>
                </div>
              </a>

              <div className="group rounded-2xl border border-gray-800 bg-white/[0.03] p-4 transition-colors hover:border-brandPink/40 hover:bg-white/[0.05]">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-colors group-hover:bg-brandPink/15 group-hover:text-brandPink">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-sub uppercase tracking-[0.32em] text-gray-500">
                      Instagram
                    </p>
                    <p className="mt-2 text-sm font-sub tracking-wider text-gray-200 sm:text-base">
                      @cuerna.col
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-gray-800 bg-gray-900">
            <div className="flex items-center justify-between border-b border-gray-800 bg-white/[0.03] px-4 py-3 sm:px-5">
              <div>
                <p className="text-[11px] font-sub uppercase tracking-[0.32em] text-gray-500">
                  Ubicacion
                </p>
                <p className="mt-1 text-sm font-sub tracking-wider text-gray-200 sm:text-base">
                  Carrera 8 # 41-39
                </p>
              </div>
              <span className="rounded-full border border-brandRed/25 bg-brandRed/10 px-3 py-1 text-[10px] font-sub uppercase tracking-[0.28em] text-brandRed">
                Google Maps
              </span>
            </div>

            <div className="relative h-[260px] w-full overflow-hidden sm:h-[300px] md:h-[340px]">
              <iframe
                allowFullScreen
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.853047990135!2d-74.0660682241643!3d4.620247942352843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a28892795bd%3A0x6e26715201460361!2sCra.%208%20%2341-39%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1708801234567!5m2!1sen!2sco"
                style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.2) brightness(0.8)" }}
                title="Mapa Cuerna"
                width="100%"
              ></iframe>
              <div className="pointer-events-none absolute inset-0 border-4 border-brandRed/20"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-gray-900 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <img
              alt="Cuerna"
              className="h-10 grayscale opacity-50 sm:h-12"
              src="/multimedia/cuerna/logo cuerna.webp"
            />
            <span className="text-[11px] font-sub uppercase tracking-[0.32em] text-gray-600">
              Noches intensas en Bogota
            </span>
          </div>

          <p className="max-w-3xl text-center text-[11px] font-bold uppercase tracking-[0.18em] text-gray-600 md:text-right">
            © {year} CUERNA BOGOTA. EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD. PROHIBASE EL EXPENDIO DE
            BEBIDAS EMBRIAGANTES A MENORES DE EDAD.
          </p>
        </div>
      </div>
    </footer>
  );
}
