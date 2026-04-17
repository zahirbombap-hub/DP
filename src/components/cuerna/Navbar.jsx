import React, { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/40 shadow-lg h-16" : "bg-transparent h-20"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            className="flex items-center justify-center transition-transform duration-200 hover:scale-[1.03] transform-gpu"
            href="/"
            aria-label="Don Prueba"
          >
            <img
              alt="Don Prueba Logo Icon"
              className={`object-contain transition-all duration-300 ${scrolled ? "h-8 w-8" : "h-10 w-10"}`}
              data-purpose="navbar-logo-dp"
              src="/multimedia/logoDP.png"
            />
          </a>
          <a className="block transition-transform duration-200 hover:scale-[1.03] transform-gpu" href="/cuerna">
            <img
              alt="Cuerna Logo Icon"
              className={`object-contain transition-all duration-300 ${scrolled ? "h-9" : "h-12"}`}
              data-purpose="navbar-logo-cuerna"
              src="/multimedia/cuerna/logo cuerna.webp"
            />
          </a>
        </div>
        <a
          className="px-4 sm:px-6 py-2 bg-brandRed hover:bg-red-600 text-white font-bold skew-x-[-10deg] transition-all hover:scale-105 shadow-[0_0_15px_rgba(217,26,26,0.5)] flex items-center group text-xs sm:text-sm"
          href="https://wa.me/573000000000?text=Hola%2C%20quiero%20reservar%20en%20Cuerna%0A%C2%A1El%20templo%20del%20desmadre!"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="block skew-x-[10deg] font-sub tracking-widest">RESERVAR EVENTO</span>
        </a>
      </div>
    </nav>
  );
}
