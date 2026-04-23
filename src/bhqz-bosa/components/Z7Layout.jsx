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
          <div className="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Top section with logo and description */}
              <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 xl:grid-cols-5 xl:gap-12">
                {/* Brand Section */}
                <div className="text-center md:col-span-2 md:text-left xl:col-span-2">
                  <div className="mb-6 flex flex-col items-center gap-5 md:flex-row md:items-center">
                    <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                      <img 
                        src="/multimedia/BHQZ/logo.gif"
                        alt="BHQZ Logo"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">BHQZ</p>
                      <h3 className="text-2xl font-bold text-white sm:text-3xl">Bosa</h3>
                    </div>
                  </div>
                  <p className="mx-auto max-w-md text-sm leading-6 text-gray-300 md:mx-0">
                    Más que un club, una familia. Promoviendo el arte, la cultura y el deporte.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                    <a
                      href="https://wa.me/573219943061"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-yellow-400 hover:text-red-950"
                      aria-label="WhatsApp"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.41 2.123 7.723l-2.254 8.23 8.467-2.222c2.236 1.214 4.743 1.857 7.466 1.857 9.793 0 17.789-7.995 17.789-17.789 0-4.726-1.888-9.169-5.320-12.601-3.432-3.432-7.875-5.32-12.601-5.32"/>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/bhqzfc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-yellow-400 hover:text-red-950"
                      aria-label="Instagram"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com/bhqzfc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-yellow-400 hover:text-red-950"
                      aria-label="Facebook"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Información Links */}
                <div className="text-center md:text-left">
                  <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-white">Información</h4>
                  <nav className="flex flex-col gap-3">
                    <a href="/bhqz-bosa" className="text-sm text-gray-300 hover:text-yellow-300 transition-colors duration-300">
                      Inicio
                    </a>
                    <a href="/bhqz-bosa/nosotros" className="text-sm text-gray-300 hover:text-yellow-300 transition-colors duration-300">
                      Nosotros
                    </a>
                    <a href="/bhqz-bosa/programas" className="text-sm text-gray-300 hover:text-yellow-300 transition-colors duration-300">
                      Programas
                    </a>
                    <a href="/bhqz-bosa/galeria" className="text-sm text-gray-300 hover:text-yellow-300 transition-colors duration-300">
                      Galería
                    </a>
                  </nav>
                </div>

                {/* Contacto Links */}
                <div className="text-center md:text-left">
                  <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-white">Comunidad</h4>
                  <nav className="flex flex-col gap-3">
                    <a href="/bhqz-bosa/inscripciones" className="text-sm text-gray-300 hover:text-yellow-300 transition-colors duration-300">
                      Inscripciones
                    </a>
                    <a href="/bhqz-bosa/contacto" className="text-sm text-gray-300 hover:text-yellow-300 transition-colors duration-300">
                      Contacto
                    </a>
                    <span className="text-sm text-gray-300">
                      Eventos
                    </span>
                    <span className="text-sm text-gray-300">
                      Noticias
                    </span>
                  </nav>
                </div>

                {/* Categorías */}
                <div className="text-center md:text-left">
                  <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-white">Categorías</h4>
                  <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200">Sub-10</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200">Sub-12</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200">Sub-15</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200">Sub-17</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200">Mayores</div>
                  </div>
                </div>
              </div>

              {/* Bottom section with copyright */}
              <div className="flex flex-col gap-6 pt-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
                <div className="text-sm text-gray-400">
                  <p>© 2026 BHQZ Bosa. Todos los derechos reservados.</p>
                  <p className="mt-2 text-xs text-gray-500">Participamos en los mejores torneos de Colombia.</p>
                </div>
                <div className="text-sm text-gray-400">
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
          <div className="border-t border-white/10 bg-black/50">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-4 text-center text-xs text-gray-400 md:flex-row md:items-center md:justify-between md:text-left">
                <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
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
