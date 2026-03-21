import { Icon } from "../Icon.jsx";

export function Footer() {
  return (
    <footer className="bg-[#0B5ED7] dark:bg-slate-900 pt-20 pb-10 px-6 border-t border-white/10 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <a href="/" className="w-8 h-8 bg-white dark:bg-[#0077BE] flex items-center justify-center rounded-lg text-[#0B5ED7] dark:text-white font-black text-sm">
                DP
              </a>
              <img src="/multimedia/logo-agua-linda.png" alt="Agua Linda" className="h-8 object-contain" />
            </div>
            <p className="text-sm text-white/80 dark:text-slate-400 mb-6">
              Autoridad natural en Villa de Leyva y SutamarchÃ¡n. Llevamos vida a tu hogar.
            </p>
            <div className="flex gap-4">
              <a className="text-white/60 dark:text-slate-400 hover:text-white dark:hover:text-[#0077BE] transition-colors" href="#top">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a className="text-white/60 dark:text-slate-400 hover:text-white dark:hover:text-[#0077BE] transition-colors" href="#top">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white dark:text-white">Empresa</h5>
            <ul className="space-y-4 text-sm text-white/80 dark:text-slate-400">
              <li><a className="hover:text-white dark:hover:text-[#0077BE]" href="#top">Sobre Nosotros</a></li>
              <li><a className="hover:text-white dark:hover:text-[#0077BE]" href="#top">Nuestra Planta</a></li>
              <li><a className="hover:text-white dark:hover:text-[#0077BE]" href="#top">Sostenibilidad</a></li>
              <li><a className="hover:text-white dark:hover:text-[#0077BE]" href="#top">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white dark:text-white">AtenciÃ³n</h5>
            <ul className="space-y-4 text-sm text-white/80 dark:text-slate-400">
              <li className="flex items-center gap-2"><Icon name="schedule" className="text-sm" /> Lun - SÃ¡b: 8am - 6pm</li>
              <li className="flex items-center gap-2"><Icon name="location_on" className="text-sm" /> SutamarchÃ¡n, BoyacÃ¡</li>
              <li className="flex items-center gap-2"><Icon name="phone" className="text-sm" /> +57 300 123 4567</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white dark:text-white">Legal</h5>
            <p className="text-[10px] text-white/80 dark:text-slate-400 mb-4 leading-relaxed uppercase tracking-widest">
              Registro INVIMA: NSA-000000-2023 <br />
              Industria Colombiana <br />
              NIT: 123.456.789-0
            </p>
            <ul className="space-y-4 text-sm text-white/80 dark:text-slate-400">
              <li><a className="hover:text-white dark:hover:text-[#0077BE]" href="#top">TÃ©rminos y Condiciones</a></li>
              <li><a className="hover:text-white dark:hover:text-[#0077BE]" href="#top">PolÃ­tica de Privacidad</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 dark:border-slate-800 text-center text-sm text-white/50 dark:text-slate-400">
          <p>Â© 2026 Agua Linda. Desarrollado por DonPrueba.</p>
        </div>
      </div>
    </footer>
  );
}
