import React, { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0"
      id="top"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/multimedia/cuerna/Tablazo aereo.jpg"
          className="w-full h-full object-cover opacity-60 scale-110 blur-[2px]"
        >
          <source src="/multimedia/cuerna/fondo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brandBg/80 via-transparent to-brandBg/80"></div>
        <div className={`absolute inset-0 hero-welcome-overlay pointer-events-none ${mounted ? "opacity-0" : "opacity-100"}`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <img
            alt="CUERNA Logo"
            className={`max-w-[90%] md:max-w-[600px] h-auto object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] transform transition-all duration-1000 ease-out ${
              mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
            }`}
            src="/multimedia/cuerna/cuerna cuerna.png"
            data-purpose="hero-logo"
          />
        </div>

        <p
          className={`text-xl md:text-3xl mb-12 tracking-[0.2em] text-brandYellow font-sub font-bold italic transform transition-all duration-1000 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          data-purpose="hero-tagline"
          style={{ transitionDelay: mounted ? "180ms" : "0ms" }}
        >
          LA ELEGANCIA SABE A TEQUILA
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[2px] h-16 bg-gradient-to-b from-brandRed to-transparent"></div>
      </div>
    </section>
  );
}
