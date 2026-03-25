import { Icon } from "../Icon.jsx";
import { AGUA_LINDA_EMPRES_HREF, AGUA_LINDA_FACEBOOK_URL, AGUA_LINDA_HOME_HREF } from "./constants.js";

export function Footer() {
  return (
    <footer className="bg-[#0B5ED7] dark:bg-slate-900 pt-20 pb-10 px-6 border-t border-white/10 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <a
                href="/"
                className="w-8 h-8 bg-white dark:bg-[#0077BE] flex items-center justify-center rounded-lg text-[#0B5ED7] dark:text-white font-black text-sm shrink-0"
              >
                DP
              </a>
              <a href={AGUA_LINDA_HOME_HREF} aria-label="Agua Linda" className="flex items-center justify-center">
                <img src="/multimedia/logo-agua-linda.png" alt="Agua Linda" className="h-8 w-auto object-contain" />
              </a>
            </div>
            <p className="mb-6 max-w-xs text-sm text-white/80 dark:text-slate-400">
              Autoridad natural en Villa de Leyva y Sutamarchán. Llevamos agua pura a tu hogar.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href={AGUA_LINDA_FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Agua Linda en Facebook"
                className="facebook-pulse group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white text-[#1877F2] shadow-[0_14px_32px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:scale-110 dark:bg-slate-950 dark:text-[#1877F2]"
              >
                <span aria-hidden="true" className="pulse-beam pulse-beam-1 pointer-events-none absolute inset-[-28%] rounded-full bg-[radial-gradient(circle,rgba(24,119,242,0.38)_0%,rgba(24,119,242,0.18)_35%,transparent_70%)] opacity-0" />
                <span aria-hidden="true" className="pulse-beam pulse-beam-2 pointer-events-none absolute inset-[-38%] rounded-full border border-[#1877F2]/35 opacity-0" />
                <span aria-hidden="true" className="pulse-beam pulse-beam-3 pointer-events-none absolute inset-[-48%] rounded-full border border-white/25 opacity-0" />
                <Icon name="facebook" className="relative z-10 text-2xl" />
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white dark:text-white">Empresa</h5>
            <ul className="space-y-4 text-sm text-white/80 dark:text-slate-400">
              <li>
                <a className="hover:text-white dark:hover:text-[#0077BE]" href={`${AGUA_LINDA_EMPRES_HREF}#quienes-somos`}>
                  Quiénes somos
                </a>
              </li>
              <li>
                <a className="hover:text-white dark:hover:text-[#0077BE]" href={`${AGUA_LINDA_EMPRES_HREF}#nuestra-planta`}>
                  Nuestra planta
                </a>
              </li>
              <li>
                <a className="hover:text-white dark:hover:text-[#0077BE]" href={`${AGUA_LINDA_EMPRES_HREF}#sostenibilidad`}>
                  Sostenibilidad
                </a>
              </li>
              <li>
                <a className="hover:text-white dark:hover:text-[#0077BE]" href={`${AGUA_LINDA_EMPRES_HREF}#contacto`}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white dark:text-white">Atención</h5>
            <ul className="space-y-4 text-sm text-white/80 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <Icon name="schedule" className="text-sm" /> Lun a Sáb: 8 a. m. - 6 p. m.
              </li>
              <li className="flex items-center gap-2">
                <Icon name="location_on" className="text-sm" /> Sutamarchán, Boyacá
              </li>
              <li className="flex items-center gap-2">
                <Icon name="phone" className="text-sm" /> +57 320 284 5492
              </li>
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
              <li>
                <a className="hover:text-white dark:hover:text-[#0077BE]" href="#top">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a className="hover:text-white dark:hover:text-[#0077BE]" href="#top">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 dark:border-slate-800 text-center text-sm text-white/50 dark:text-slate-400">
          <p>© 2026 Agua Linda. Desarrollado por DonPrueba.</p>
        </div>
      </div>
      <style>{`
        @keyframes pulseBeam {
          0% {
            transform: scale(0.72);
            opacity: 0;
          }
          25% {
            opacity: 0.26;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        .facebook-pulse:hover .pulse-beam-1 {
          animation: pulseBeam 1.05s ease-out infinite;
        }

        .facebook-pulse:hover .pulse-beam-2 {
          animation: pulseBeam 1.05s ease-out infinite 140ms;
        }

        .facebook-pulse:hover .pulse-beam-3 {
          animation: pulseBeam 1.05s ease-out infinite 280ms;
        }

        .facebook-pulse:hover {
          box-shadow: 0 16px 36px rgba(24, 119, 242, 0.24);
        }

        @media (prefers-reduced-motion: reduce) {
          .facebook-pulse:hover .pulse-beam-1,
          .facebook-pulse:hover .pulse-beam-2,
          .facebook-pulse:hover .pulse-beam-3 {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
}
