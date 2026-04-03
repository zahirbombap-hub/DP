import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "../Icon.jsx";
import { CatalogSearch } from "./CatalogSearch.jsx";

export function Header({
  catalogItems = [],
  catalogLoading = false,
  catalogError = null,
  onCommitCatalogItem,
}) {
  const { pathname, search } = useLocation();
  const isRootPage = pathname === "/handmade-wool";
  const basePath = "/handmade-wool";
  const currentPath = `${pathname}${search || ""}`;

  const topTo = isRootPage ? "#top" : `${basePath}#top`;
  const oficioTo = isRootPage ? "#oficio" : `${basePath}#oficio`;
  const materialesTo = isRootPage ? "#materiales" : `${basePath}#materiales`;
  const catalogoTo =
    pathname === "/handmade-wool/catalogo"
      ? `${currentPath}#catalogo`
      : `${basePath}/catalogo#catalogo`;
  const contactoTo = `${currentPath}#contacto`;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [comboCloseToken, setComboCloseToken] = useState(0);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setComboCloseToken((t) => t + 1);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    function handleChange(e) {
      if (e.matches) {
        setMobileMenuOpen(false);
        setComboCloseToken((t) => t + 1);
      }
    }

    handleChange(mq);

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handleChange);
      return () => mq.removeEventListener("change", handleChange);
    }

    mq.addListener(handleChange);
    return () => mq.removeListener(handleChange);
  }, []);

  function openMobileMenu() {
    setMobileMenuOpen(true);
    setComboCloseToken((t) => t + 1);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setComboCloseToken((t) => t + 1);
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#a54616] border-b border-white/15 wool-fade-up [--delay:0.05s]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 min-h-20 py-3 md:py-0 md:h-20 flex flex-wrap items-center gap-3 md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-5 text-white">
        <div className="flex items-center gap-3 md:gap-4 md:justify-self-start">
          <Link
            to="/"
            className="group w-12 h-12 rounded-full bg-transparent border-0 flex items-center justify-center shadow-none hover:shadow-none transition-all md:w-14 md:h-14"
            aria-label="Volver a Don Prueba"
          >
            <img
              src="/multimedia/logoDP.png"
              alt="Don Prueba"
              className="w-7 h-7 object-contain transform transition-transform duration-200 ease-out group-hover:scale-105 md:w-8 md:h-8"
            />
          </Link>
          <Link
            className="flex items-center gap-3 group transform transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1"
            to={topTo}
          >
            <span className="wool-logo-float flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#a54616] shadow-none md:h-16 md:w-16">
              <img
                src="/multimedia/Yuga/yuya_logoNB.webp"
                alt="Yuga"
                className="block h-full w-full object-contain p-1 md:p-1.5"
              />
            </span>
            <h2 className="text-lg leading-none md:text-xl font-bold tracking-tight font-['Playfair_Display',serif] text-white transform transition-all duration-200 ease-out group-hover:-translate-y-1">
              <span className="block">Tejidos</span>
              <span className="block">Yuga</span>
            </h2>
          </Link>
        </div>

        <div className="hidden md:flex md:justify-self-center md:justify-center">
          <nav className="flex items-center gap-6">
            <Link
              className="text-sm font-semibold text-white hover:text-[#fff3dd] transition-colors wool-link"
              to={oficioTo}
            >
              El Oficio
            </Link>
            <Link
              className="text-sm font-semibold text-white hover:text-[#fff3dd] transition-colors wool-link"
              to={materialesTo}
            >
              Materiales
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-4 justify-end min-w-0 md:justify-self-end">
          <div className="flex-1 lg:flex-none min-w-[10rem]">
            <CatalogSearch
              items={catalogItems}
              closeToken={comboCloseToken}
              className="w-full lg:w-[22rem]"
              disabled={catalogLoading || Boolean(catalogError)}
              onCommitSelection={onCommitCatalogItem}
              placeholder={
                catalogLoading
                  ? "Cargando catálogo..."
                  : catalogError
                    ? "Catálogo no disponible"
                    : "Buscar pieza..."
              }
            />
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              className="text-xs uppercase tracking-widest font-bold text-[#ffd18a] hover:text-[#ffe2b5] transition-colors border-b border-[#ffd18a]/40 pb-0.5 wool-link"
              to={catalogoTo}
            >
              Catálogo Digital
            </Link>
            <Link
              className="text-xs uppercase tracking-widest font-bold text-white hover:text-[#fff3dd] transition-colors wool-link"
              to={contactoTo}
            >
              Contacto
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#ffd18a] hover:bg-[#ffe2b5] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            onClick={() => (mobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
          >
            <Icon
              name={mobileMenuOpen ? "close" : "menu"}
              className="text-[#a54616] text-xl"
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="absolute inset-0 bg-black" onMouseDown={closeMobileMenu} />

        <div
          className={`absolute left-0 top-0 h-full w-80 max-w-[85%] bg-[#a54616] text-white border-r border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onMouseDown={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
        >
          <div className="h-full flex flex-col p-6 gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <img
                    src="/multimedia/Yuga/yuya_logoNB.webp"
                    alt="Yuga"
                    className="h-8 w-8 object-contain"
                  />
                </span>
                <div className="leading-tight">
                  <div className="text-sm uppercase tracking-widest text-white/80">
                    Tejidos
                  </div>
                  <div className="text-lg font-bold font-['Playfair_Display',serif]">
                    Yuga
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 transition-colors"
                onClick={closeMobileMenu}
                aria-label="Cerrar menú"
              >
                <Icon name="close" className="text-white text-xl" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              <Link
                className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 font-semibold transition-colors"
                to={oficioTo}
                onClick={closeMobileMenu}
              >
                El Oficio
              </Link>
              <Link
                className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 font-semibold transition-colors"
                to={materialesTo}
                onClick={closeMobileMenu}
              >
                Materiales
              </Link>
              <Link
                className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 font-semibold transition-colors"
                to={catalogoTo}
                onClick={closeMobileMenu}
              >
                Catálogo Digital
              </Link>
              <Link
                className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 font-semibold transition-colors"
                to={contactoTo}
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
            </nav>

            <div className="mt-auto pt-6 border-t border-white/10">
              <Link
                to="/"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                onClick={closeMobileMenu}
              >
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <img
                    src="/multimedia/logoDP.png"
                    alt="Don Prueba"
                    className="h-6 w-6 object-contain"
                  />
                </span>
                <span className="text-sm font-semibold">Volver a Don Prueba</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
