import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const defaultDesktopNavItems = [
  { label: "Inicio", type: "link", to: "/#inicio" },
  { label: "Paginas", type: "link", to: "/paginas#inicio" },
  { label: "Automatizaciones", type: "link", to: "/automatizaciones#inicio" },
  { label: "Apps", type: "link", to: "/apps#inicio" },
  { label: "Articulos", type: "link", to: "/articulos#articulos" },
  { label: "Contacto", type: "anchor", to: "#contact-footer" },
];

const defaultCompactNavItems = [
  { label: "Paginas", type: "link", to: "/paginas#inicio" },
  { label: "Automatizaciones", type: "link", to: "/automatizaciones#inicio" },
  { label: "Apps", type: "link", to: "/apps#inicio" },
  { label: "Articulos", type: "link", to: "/articulos#articulos" },
  { label: "Contacto", type: "anchor", to: "#contact-footer" },
];

function NavItem({ item, className, onClick }) {
  const sharedProps = {
    className,
    onClick,
  };

  if (item.type === "link") {
    return (
      <Link to={item.to} {...sharedProps}>
        {item.label}
      </Link>
    );
  }

  return <Link to={`/${item.to}`} {...sharedProps}>{item.label}</Link>;
}

export function Header({
  desktopNavItems = defaultDesktopNavItems,
  compactNavItems = defaultCompactNavItems,
}) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const handleContactClick = () => {
    const target = document.getElementById("contact-footer");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstInput = document.getElementById("company-name");
      setTimeout(() => firstInput?.focus(), 500);
      return;
    }

    navigate("/#contact-footer");
  };

  const handleHomeLinkClick = (event) => {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    setOpen(false);
    document.getElementById("inicio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(min-width: 970px)");
    const closeCompactMenu = () => {
      if (mediaQuery.matches) {
        setOpen(false);
      }
    };

    closeCompactMenu();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", closeCompactMenu);
      return () => mediaQuery.removeEventListener("change", closeCompactMenu);
    }

    mediaQuery.addListener(closeCompactMenu);
    return () => mediaQuery.removeListener(closeCompactMenu);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const header = headerRef.current;
    if (!header) {
      return undefined;
    }

    const root = document.documentElement;
    const updateHeaderHeight = () => {
      const headerHeight = Math.ceil(header.getBoundingClientRect().height);
      root.style.setProperty("--welcome-header-height", `${headerHeight}px`);
    };

    updateHeaderHeight();

    const resizeObserver =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(updateHeaderHeight) : null;

    resizeObserver?.observe(header);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="welcome-fixed-header fixed top-0 left-0 z-50 w-full border-b border-[#8a0012]/30 bg-[#050505]/90 px-3 py-3 backdrop-blur-xl sm:px-6 sm:py-4 cinematic-load"
    >
      <style>{`
        @font-face {
          font-family: "Frick03 Regular";
          src: url("/fuentes/Frick03-Regular.otf") format("opentype");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
      `}</style>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 sm:grid-cols-[auto_1fr_auto] sm:gap-4">
        <Link
          aria-label="Don Prueba Inicio"
          className="welcome-brand group flex min-w-0 items-center gap-2.5 sm:gap-4"
          onClick={handleHomeLinkClick}
          to="/#inicio"
        >
          <div className="welcome-brand-mark dp-logo-mark relative flex size-11 shrink-0 items-center justify-center overflow-hidden bg-transparent transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.06] group-hover:rotate-[-3deg] sm:size-12">
            <img
              alt="DP"
              className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-[2deg]"
              decoding="async"
              draggable="false"
              src="/multimedia/Logo DonPrueba Procesado 7rojo.png"
            />
          </div>
          <span className="welcome-brand-text min-w-0 truncate font-['JetBrains_Mono',monospace] text-[0.95rem] font-extrabold uppercase leading-none tracking-tight text-white sm:text-lg">
            Don <span className="text-[#ff3d4d]">Prueba</span>
          </span>
        </Link>

        <div className="hidden min-w-0 justify-center min-[970px]:flex">
          <nav aria-label="Navegacion Principal" className="welcome-desktop-nav flex items-center gap-8">
            {desktopNavItems.map((item) => (
              <NavItem
                key={`${item.to}-${item.label}`}
                item={item}
                className="nav-link text-[10px] font-bold uppercase tracking-[0.2em] text-[#a1a1aa] transition-colors hover:text-[#ff3d4d]"
              />
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end gap-2 sm:gap-3 lg:gap-6">
          <Link
            className="welcome-home-link hidden shrink-0 text-[9px] font-bold uppercase tracking-[0.16em] text-[#a1a1aa] transition-colors hover:text-[#ff3d4d] min-[420px]:inline-flex sm:text-[10px] min-[970px]:hidden"
            onClick={handleHomeLinkClick}
            to="/#inicio"
          >
            Inicio
          </Link>

          <div className="welcome-compact-nav relative flex items-center min-[970px]:hidden">
            <button
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? "Cerrar menu" : "Abrir menu"}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#8a0012]/20 bg-white/[0.03] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]"
              onClick={() => setOpen(!open)}
            >
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>

            <div
              id="mobile-menu"
              className="absolute right-0 top-full z-50 mt-2 w-[min(15rem,calc(100vw-1.5rem))] origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-[#050505]/55 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[#050505]/45 transition-all duration-300 ease-in-out"
              style={{ maxHeight: open ? "320px" : "0px", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
              aria-hidden={!open}
            >
              <nav className="flex flex-col text-sm">
                {compactNavItems.map((item) => (
                  <NavItem
                    key={`${item.to}-${item.label}`}
                    item={item}
                    className="px-4 py-3 text-[#a1a1aa] transition-colors hover:bg-white/3 hover:text-white"
                    onClick={() => setOpen(false)}
                  />
                ))}
              </nav>
            </div>
          </div>

          <button
            onClick={handleContactClick}
            aria-label="Ir al formulario de contacto"
            title="Ir al formulario de contacto"
            className="cta-button inline-flex h-10 w-[9.25rem] shrink-0 items-center justify-center rounded-full px-0 text-[8.5px] font-black uppercase tracking-[0.16em] text-white whitespace-nowrap active:scale-95 min-[420px]:text-[9px]"
          >
            Comenzar Proyecto
          </button>
        </div>
      </div>
    </header>
  );
}
