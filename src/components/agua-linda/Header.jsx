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
              className="bg-white text-[#0B5ED7] dark:bg-[#0077BE] dark:text-white hover:bg-slate-100 dark:hover:bg-blue-600 px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-black/10 dark:shadow-[#0077BE]/20 hover:scale-105"
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
            >
              {ctaLabel}
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
