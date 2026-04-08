import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
    if (!mobileMenuOpen) return undefined;

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
    if (!mobileMenuOpen) return undefined;

    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

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

  const mobileMenu = (
      <div
        className={`fixed inset-0 z-[10010] isolate lg:hidden transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="absolute inset-0 z-0 bg-transparent"
          onMouseDown={closeMobileMenu}
        />

      <div
        className={`absolute left-0 top-0 z-[10020] h-full w-80 max-w-[85%] border-r border-white/20 bg-[#8f3711]/34 text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="relative h-full overflow-hidden bg-[linear-gradient(180deg,rgba(143,55,17,0.42),rgba(86,32,10,0.34))] p-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_34%),linear-gradient(180deg,rgba(20,8,4,0.08),rgba(20,8,4,0.18))]"
          />

          <div className="relative z-10 flex h-full flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/15"
                onClick={closeMobileMenu}
                aria-label="Cerrar menu"
              >
                <Icon name="close" className="text-xl text-white" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              <Link
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold transition-colors hover:bg-white/10"
                to={oficioTo}
                onClick={closeMobileMenu}
              >
                El Oficio
              </Link>
              <Link
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold transition-colors hover:bg-white/10"
                to={materialesTo}
                onClick={closeMobileMenu}
              >
                Materiales
              </Link>
              <Link
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold transition-colors hover:bg-white/10"
                to={catalogoTo}
                onClick={closeMobileMenu}
              >
                Catalogo Digital
              </Link>
              <Link
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold transition-colors hover:bg-white/10"
                to={contactoTo}
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
            </nav>

            <div className="mt-auto border-t border-white/10 pt-6">
              <Link
                to="/"
                className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                onClick={closeMobileMenu}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
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
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/15 bg-[#a54616] wool-fade-up [--delay:0.05s]">
        <div className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center gap-3 px-4 py-3 text-white md:grid md:h-20 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-5 md:px-6 md:py-0">
          <div className="flex items-center gap-3 md:justify-self-start md:gap-4">
            <Link
              to="/"
              className="group flex h-12 w-12 items-center justify-center rounded-full border-0 bg-transparent shadow-none transition-all hover:shadow-none md:h-14 md:w-14"
              aria-label="Volver a Don Prueba"
            >
              <img
                src="/multimedia/logoDP.png"
                alt="Don Prueba"
                className="h-7 w-7 object-contain transition-transform duration-200 ease-out group-hover:scale-105 md:h-8 md:w-8"
              />
            </Link>

            <Link
              className="group flex items-center gap-3 transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-105"
              to={topTo}
            >
              <span className="wool-logo-float flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#a54616] shadow-none md:h-16 md:w-16">
                <img
                  src="/multimedia/Yuga/yuya_logoNB.webp"
                  alt="Yuga"
                  className="block h-full w-full object-contain p-1 md:p-1.5"
                />
              </span>
              <h2 className="font-['Playfair_Display',serif] text-lg font-bold leading-none tracking-tight text-white transition-all duration-200 ease-out group-hover:-translate-y-1 md:text-xl">
                <span className="block">Tejidos</span>
                <span className="block">Yuga</span>
              </h2>
            </Link>
          </div>

          <div className="hidden md:flex md:justify-center md:justify-self-center">
            <nav className="flex items-center gap-6">
              <Link
                className="wool-link text-sm font-semibold text-white transition-colors hover:text-[#fff3dd]"
                to={oficioTo}
              >
                El Oficio
              </Link>
              <Link
                className="wool-link text-sm font-semibold text-white transition-colors hover:text-[#fff3dd]"
                to={materialesTo}
              >
                Materiales
              </Link>
            </nav>
          </div>

          <div className="ml-auto flex w-full min-w-0 items-center justify-end gap-3 sm:w-auto md:w-auto md:justify-self-end md:gap-4">
            <div className="min-w-[10rem] max-w-[22rem] flex-1 lg:flex-none">
              <CatalogSearch
                items={catalogItems}
                closeToken={comboCloseToken}
                className="w-full lg:w-[22rem]"
                disabled={catalogLoading || Boolean(catalogError)}
                onCommitSelection={onCommitCatalogItem}
                placeholder={
                  catalogLoading
                    ? "Cargando catalogo..."
                    : catalogError
                      ? "Catalogo no disponible"
                      : "Buscar pieza..."
                }
              />
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <Link
                className="wool-link border-b border-[#ffd18a]/40 pb-0.5 text-xs font-bold uppercase tracking-widest text-[#ffd18a] transition-colors hover:text-[#ffe2b5]"
                to={catalogoTo}
              >
                Catalogo Digital
              </Link>
              <Link
                className="wool-link text-xs font-bold uppercase tracking-widest text-white transition-colors hover:text-[#fff3dd]"
                to={contactoTo}
              >
                Contacto
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#ffd18a] transition-colors hover:bg-[#ffe2b5] focus:outline-none lg:hidden"
              aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => (mobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
            >
              <Icon
                name={mobileMenuOpen ? "close" : "menu"}
                className="text-xl text-[#a54616]"
              />
            </button>
          </div>
        </div>
      </header>

      {typeof document !== "undefined"
        ? createPortal(mobileMenu, document.body)
        : mobileMenu}
    </>
  );
}
