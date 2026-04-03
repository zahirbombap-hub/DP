import { AGUA_LINDA_HOME_HREF, AGUA_LINDA_WHATSAPP_HREF } from "./constants.js";

const defaultNavItems = [
  { href: "#hero", label: "Inicio" },
  { href: "#el-rey", label: "El Rey de la Casa" },
  { href: "#productos", label: "Productos" },
  { href: "#beneficios", label: "Beneficios" },
];

export function Header({
  navItems = defaultNavItems,
  brandHref = AGUA_LINDA_HOME_HREF,
  ctaHref = AGUA_LINDA_WHATSAPP_HREF,
  ctaLabel = "Pide Ahora",
}) {
  return (
    <>
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0B5ED7]/90 dark:bg-[#0F172A]/70 border-b border-white/10 dark:border-slate-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="/"
              aria-label="Don Prueba"
              className="dp-logo group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white text-[#0B5ED7] font-black text-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform duration-150 hover:-translate-y-px dark:bg-[#0077BE] dark:text-white"
            >
              <span className="relative z-10">DP</span>
              <span
                aria-hidden="true"
                className="dp-logo-sheen pointer-events-none absolute inset-y-[-35%] left-[-90%] w-[70%] rounded-full bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.95)_50%,rgba(214,240,255,0.5)_55%,transparent_68%)] opacity-0"
              />
            </a>
            <a href={brandHref} aria-label="Agua Linda" className="agua-logo group relative hidden h-10 items-center overflow-hidden sm:inline-flex">
              <img
                src="/multimedia/logo-agua-linda.png"
                alt="Agua Linda"
                className="relative z-10 h-10 w-auto object-contain transition-[transform,filter] duration-150"
              />
              <span
                aria-hidden="true"
                className="agua-logo-sheen pointer-events-none absolute inset-y-[-40%] left-[-92%] w-[68%] rounded-full bg-[linear-gradient(115deg,transparent_42%,rgba(255,255,255,0.95)_50%,rgba(175,233,255,0.42)_56%,transparent_70%)] opacity-0"
              />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white dark:text-slate-200">
            {navItems.map((item) => (
              <a key={item.href} className="hover:text-slate-200 dark:hover:text-[#0077BE] transition-colors" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              className="bg-white text-[#0B5ED7] dark:bg-[#0077BE] dark:text-white hover:bg-slate-100 dark:hover:bg-blue-600 px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-black/10 dark:shadow-[#0077BE]/20 hover:scale-105 inline-flex items-center gap-2"
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4 shrink-0 fill-current opacity-95"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.524.904 3.393 1.382 5.289 1.383 5.483.002 9.944-4.461 9.947-9.945.001-2.657-1.034-5.155-2.913-7.034-1.879-1.878-4.377-2.91-7.034-2.911-5.483 0-9.944 4.463-9.947 9.948-.001 1.916.557 3.784 1.612 5.4l-.992 3.626 3.71-.973zm11.366-6.123c-.312-.156-1.848-.912-2.134-1.017-.286-.105-.494-.156-.701.156-.207.312-.803 1.017-.984 1.223-.182.206-.363.231-.675.075-.312-.156-1.316-.484-2.508-1.547-.927-.827-1.552-1.849-1.734-2.161-.181-.312-.019-.481.136-.636.141-.139.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.701-1.69-.961-2.313-.253-.607-.51-.524-.701-.534-.181-.008-.389-.01-.597-.01-.208 0-.545.078-.83.39-.286.312-1.091 1.066-1.091 2.6s1.117 3.016 1.272 3.224c.156.208 2.199 3.357 5.326 4.704.743.321 1.324.512 1.777.655.748.237 1.428.204 1.967.124.6-.089 1.848-.755 2.108-1.484.26-.729.26-1.353.182-1.484-.077-.13-.285-.208-.597-.364z" />
              </svg>
              <span>{ctaLabel}</span>
            </a>
          </div>
        </div>
      </header>
      <style>{`
        @keyframes dpReflect {
          0% {
            transform: translateX(0) skewX(-16deg);
            opacity: 0;
          }
          15% {
            opacity: 0.16;
          }
          45% {
            opacity: 0.78;
          }
          100% {
            transform: translateX(340%) skewX(-16deg);
            opacity: 0;
          }
        }

        @keyframes aguaReflect {
          0% {
            transform: translateX(0) skewX(-12deg);
            opacity: 0;
          }
          15% {
            opacity: 0.08;
          }
          45% {
            opacity: 0.48;
          }
          100% {
            transform: translateX(340%) skewX(-12deg);
            opacity: 0;
          }
        }

        @keyframes aguaLift {
          0%,
          100% {
            transform: translateY(0) scale(1);
            filter: saturate(1) brightness(1);
          }
          50% {
            transform: translateY(-1px) scale(1.02);
            filter: saturate(1.08) brightness(1.05);
          }
        }

        .dp-logo:hover .dp-logo-sheen {
          animation: dpReflect 680ms cubic-bezier(0.22, 1, 0.36, 1) 1;
        }

        .agua-logo:hover .agua-logo-sheen {
          animation: aguaReflect 760ms cubic-bezier(0.22, 1, 0.36, 1) 1;
        }

        .agua-logo:hover img {
          animation: aguaLift 760ms cubic-bezier(0.22, 1, 0.36, 1) 1;
        }

        .dp-logo,
        .agua-logo {
          isolation: isolate;
        }

        @media (prefers-reduced-motion: reduce) {
          .dp-logo:hover .dp-logo-sheen,
          .agua-logo:hover .agua-logo-sheen,
          .agua-logo:hover img {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
