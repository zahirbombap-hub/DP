import { useEffect, useState } from "react"; 
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink.jsx";
import { BoldPaymentButton } from "./index.jsx";
import "../styles/z7-fonts.css";

const navItems = [
  { label: "Nosotros", to: "/bhqz-bosa/nosotros" },
  { label: "Programas", to: "/bhqz-bosa/programas" },
  { label: "Galería", to: "/bhqz-bosa/galeria" },
  { label: "Inscripciones", to: "/bhqz-bosa/inscripciones" },
  { label: "Contacto", to: "/bhqz-bosa/contacto" },
];

export default function Z7Layout({ children, isHome = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1180);
  const showBosaLogoBackdrop = isHome && !hasScrolled && !mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1180);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const mobileMenu = (
    <div
      className={`fixed inset-0 z-[10010] isolate ${isDesktop ? "hidden" : ""} transition-opacity duration-300 ease-in-out ${
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
        className={`absolute left-0 top-0 z-[10020] h-full w-80 max-w-[85%] border-r border-white/20 bg-gradient-to-b from-red-950/80 via-red-900/80 to-black/80 text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
      >
        <div className="relative h-full overflow-hidden bg-[linear-gradient(180deg,rgba(153,33,33,0.4),rgba(55,15,15,0.5))] p-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,rgba(20,8,4,0.08),rgba(20,8,4,0.18))]"
          />

          <div className="relative z-10 flex h-full flex-col gap-6">
            {/* Header del menú */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/20 border border-yellow-400/40">
                  <img
                    src="/multimedia/BHQZ/logo.png"
                    alt="BHQZ"
                    className="h-8 w-8 object-contain"
                  />
                </span>
                <div className="leading-tight">
                  <div className="text-xs uppercase tracking-widest text-yellow-300">
                    BHQZ
                  </div>
                  <div className="text-lg font-bold text-white">
                    Bosa
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/15"
                onClick={closeMobileMenu}
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Navegación */}
            <nav className="flex flex-col gap-2">
              <NavLink
                to="/bhqz-bosa"
                end={true}
                onClick={closeMobileMenu}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                activeClassName="bg-yellow-400/20 text-yellow-300 border-yellow-400/40"
              >
                Inicio
              </NavLink>
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={closeMobileMenu}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  activeClassName="bg-yellow-400/20 text-yellow-300 border-yellow-400/40"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Bold Payment Button en Mobile */}
            <div className="mt-auto border-t border-white/10 pt-6">
              <BoldPaymentButton
                amount={50000}
                productName="Membresía BHQZ"
                variant="primary"
                className="w-full justify-center text-xs sm:text-sm py-3"
                onClick={closeMobileMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div 
        className="z7-layout flex flex-col min-h-screen lg:min-h-screen"
        style={{ 
          display: "flex", 
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "transparent"
        }}
      >
        {/* Header */}
        <header
          className={`${isDesktop ? "sticky" : "fixed"} top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
            isHome
              ? (hasScrolled || mobileMenuOpen
                  ? "bg-gradient-to-l from-black via-red-950 to-red-900 shadow-[0_14px_34px_rgba(0,0,0,0.28)]"
                  : "bg-transparent")
              : "bg-gradient-to-l from-black via-red-950 to-red-900 shadow-[0_14px_34px_rgba(0,0,0,0.28)]"
          }`}
          style={
            !isDesktop ? {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              width: "100%",
              zIndex: 50,
            } : {}
          }
        >
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 sm:h-28 gap-3 sm:gap-4 lg:h-auto">
              {/* Left: BHQZ Logo */}
              <div className="flex-shrink-0 flex items-center">
                <NavLink 
                  to="/bhqz-bosa"
                  end={true}
                  className="transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                >
                  <img 
                    src="/multimedia/BHQZ/logo.png"
                    alt="BHQZ Logo" 
                    className="h-12 sm:h-20 w-auto object-contain cursor-pointer"
                  />
                </NavLink>
              </div>

              {/* Center: Nav (desktop only) + Bold Button (middle) */}
              <div className="flex flex-1 items-center justify-center gap-6">
                {/* Desktop Nav */}
                <nav className={`${isDesktop ? "flex" : "hidden"} items-center justify-center gap-6`}>
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === "/"}
                      className="text-xs lg:text-sm tracking-widest uppercase text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:font-medium whitespace-nowrap"
                      activeClassName="text-yellow-300 font-medium"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>

                {/* Bold Payment Button - Always in middle */}
                <BoldPaymentButton
                  amount={50000}
                  productName="Membresía BHQZ"
                  variant="primary"
                  className="text-xs sm:text-sm py-2 px-2 sm:px-3 sm:py-2 flex-shrink-0"
                />
              </div>

              {/* Right: Mobile Menu Button + Bosa Logo */}
              <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                {/* Mobile menu button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`${isDesktop ? "hidden" : "inline-flex"} items-center justify-center p-2 text-yellow-300 hover:text-yellow-200 transition-colors`}
                  aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* Bosa Logo - Hidden on mobile */}
                <div
                  className={`hidden sm:flex items-center justify-center rounded-2xl transition-all duration-300 ${
                    showBosaLogoBackdrop
                      ? "border border-white/10 bg-red-900/40 px-2 py-1.5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm"
                      : "border border-transparent bg-transparent px-0 py-0 shadow-none"
                  }`}
                >
                  <img 
                    src="/multimedia/BHQZ/bosaazul.png"
                    alt="BHQZ Bosa" 
                    className="h-12 sm:h-20 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="z7-main flex-1 w-full relative z-10" style={{ paddingTop: !isDesktop ? "5rem" : "0" }}>
          <div className="max-w-7xl mx-auto my-auto">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-gradient-to-b from-red-950 to-black text-white">
          {/* Main Footer */}
          <div className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
            <div className="max-w-5xl mx-auto">
              {/* Top section with logo and description */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 border-b border-white/10 pb-6 sm:gap-x-8 sm:gap-y-7 sm:pb-8 lg:grid-cols-12">
                {/* Brand Section */}
                <div className="col-span-2 text-center sm:text-left lg:col-span-5">
                  <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4 sm:gap-4 sm:justify-start">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-1.5 shadow-[0_14px_28px_rgba(0,0,0,0.22)] sm:h-24 sm:w-24 sm:rounded-2xl sm:p-2.5">
                      <img 
                        src="/multimedia/BHQZ/logo.gif"
                        alt="BHQZ Logo"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-300 sm:text-xs">BHQZ</p>
                      <h3 className="text-lg font-bold text-white sm:text-2xl">Bosa</h3>
                    </div>
                  </div>
                  <p className="mx-auto max-w-xs text-[13px] leading-5 text-gray-300 sm:mx-0 sm:max-w-sm sm:text-sm sm:leading-6 lg:max-w-md">
                    Más que un club, una familia. Promoviendo el arte, la cultura y el deporte.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-5 sm:gap-2.5 sm:justify-start">
                    <a
                      href="https://wa.me/573219943061"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 p-1.5 text-white transition-all duration-300 hover:bg-yellow-400 hover:text-red-950 sm:h-10 sm:w-10 sm:p-2"
                      aria-label="WhatsApp"
                    >
                      <img
                        src="/multimedia/whatssappblanco.png"
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </a>
                    <a
                      href="https://instagram.com/bhqzfc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 p-1.5 text-white transition-all duration-300 hover:bg-yellow-400 hover:text-red-950 sm:h-10 sm:w-10 sm:p-2"
                      aria-label="Instagram"
                    >
                      <img
                        src="/multimedia/logoinstagram.png"
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </a>
                    <a
                      href="https://facebook.com/bhqzfc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-yellow-400 hover:text-red-950 sm:h-10 sm:w-10"
                      aria-label="Facebook"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Información Links */}
                <div className="mx-auto w-full max-w-[10rem] text-left lg:col-span-2 lg:max-w-none">
                  <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white sm:mb-3 sm:text-sm">Información</h4>
                  <nav className="flex flex-col gap-1.5 sm:gap-2.5">
                    <a href="/bhqz-bosa" className="text-[13px] text-gray-300 transition-colors duration-300 hover:text-yellow-300 sm:text-sm">
                      Inicio
                    </a>
                    <a href="/bhqz-bosa/nosotros" className="text-[13px] text-gray-300 transition-colors duration-300 hover:text-yellow-300 sm:text-sm">
                      Nosotros
                    </a>
                    <a href="/bhqz-bosa/programas" className="text-[13px] text-gray-300 transition-colors duration-300 hover:text-yellow-300 sm:text-sm">
                      Programas
                    </a>
                    <a href="/bhqz-bosa/galeria" className="text-[13px] text-gray-300 transition-colors duration-300 hover:text-yellow-300 sm:text-sm">
                      Galería
                    </a>
                  </nav>
                </div>

                {/* Contacto Links */}
                <div className="mx-auto w-full max-w-[10rem] text-left lg:col-span-2 lg:max-w-none">
                  <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white sm:mb-3 sm:text-sm">Comunidad</h4>
                  <nav className="flex flex-col gap-1.5 sm:gap-2.5">
                    <a href="/bhqz-bosa/inscripciones" className="text-[13px] text-gray-300 transition-colors duration-300 hover:text-yellow-300 sm:text-sm">
                      Inscripciones
                    </a>
                    <a href="/bhqz-bosa/contacto" className="text-[13px] text-gray-300 transition-colors duration-300 hover:text-yellow-300 sm:text-sm">
                      Contacto
                    </a>
                    <span className="text-[13px] text-gray-300 sm:text-sm">
                      Eventos
                    </span>
                    <span className="text-[13px] text-gray-300 sm:text-sm">
                      Noticias
                    </span>
                  </nav>
                </div>

                {/* Categorías */}
                <div className="col-span-2 mx-auto w-full max-w-sm text-left sm:text-left lg:col-span-3 lg:max-w-none">
                  <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white sm:mb-3 sm:text-sm">Categorías</h4>
                  <div className="flex flex-wrap gap-1.5 sm:justify-start">
                    <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-200 sm:px-3 sm:text-sm">Sub-10</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-200 sm:px-3 sm:text-sm">Sub-12</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-200 sm:px-3 sm:text-sm">Sub-15</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-200 sm:px-3 sm:text-sm">Sub-17</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-200 sm:px-3 sm:text-sm">Mayores</div>
                  </div>
                </div>
              </div>

              {/* Bottom section with copyright */}
              <div className="flex flex-col gap-2 pt-4 text-center sm:pt-6 md:flex-row md:items-center md:justify-between md:text-left">
                <div className="text-xs text-gray-400 sm:text-sm">
                  <p>© 2026 BHQZ Bosa. Todos los derechos reservados.</p>
                  <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">Participamos en los mejores torneos de Colombia.</p>
                </div>
                <div className="text-xs text-gray-400 sm:text-sm">
                  <p>Diseño y Desarrollo: 
                    <a
                      href="https://donprueba.online/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-yellow-400 transition-colors hover:text-yellow-300"
                    >
                      Don Prueba
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links Bar */}
          <div className="border-t border-white/10 bg-black/40">
            <div className="max-w-5xl mx-auto px-4 py-3 sm:px-6 sm:py-5 lg:px-8">
              <div className="flex flex-col gap-2 text-center text-[11px] text-gray-400 sm:text-xs md:flex-row md:items-center md:justify-between md:text-left">
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 md:justify-start">
                  <span>Términos y Condiciones</span>
                  <span>Política de Privacidad</span>
                </div>
                <div className="text-gray-500">
                  Hecho con ❤️ para la comunidad
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile Menu Portal */}
      {typeof document !== "undefined"
        ? createPortal(mobileMenu, document.body)
        : mobileMenu}
    </>
  );
}
