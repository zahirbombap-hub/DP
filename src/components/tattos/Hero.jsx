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
        <img
          alt="Tattoo background"
          className="w-full h-full object-cover grayscale brightness-[0.3] scale-105"
          decoding="async"
          fetchPriority="high"
          height="669"
          loading="eager"
          sizes="100vw"
          src="/multimedia/FotosTattosLopez/IMG_0007.jpeg"
          width="1146"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className={`absolute inset-0 hero-welcome-overlay pointer-events-none ${mounted ? "opacity-0" : "opacity-100"}`}></div>
      </div>

      <div class="relative z-20 flex flex-col items-center w-full px-4 sm:px-6 text-center">
        <div class="welcome-hero flex flex-col items-center gap-3 sm:gap-4">
          <div class="bg-[#0077BE] dark:bg-[#8a0012] px-3 sm:px-5 py-1 sm:py-2 inline-block border-2 border-black transform -rotate-1 translate-y-1 sm:translate-y-2 relative z-10 welcome-title welcome-title-1 max-w-[95vw] sm:max-w-[90vw] box-border transition-colors duration-300">
            <h1 class="text-[10vw] sm:text-[12vw] md:text-[14vw] leading-none font-black uppercase tracking-tighter text-white brutalist-text-shadow break-words">
              ZONA 7</h1>
              </div>
              <div class="bg-white px-3 sm:px-5 py-1 sm:py-2 inline-block border-2 border-black transform rotate-1 relative z-0 welcome-title welcome-title-2 max-w-[95vw] sm:max-w-[90vw] box-border">
                <h1 class="text-[10vw] sm:text-[12vw] md:text-[14vw] leading-none font-black uppercase tracking-tighter text-black brutalist-text-shadow-white">
                  ART</h1>
                  </div>
                  <div class="relative mt-6 sm:mt-8 group welcome-subtitle-wrapper"><div class="absolute inset-0 bg-[#0077BE] dark:bg-[#8a0012] translate-x-1 translate-y-1 transition-colors duration-300"></div>
                  <button class="relative bg-white text-black px-4 sm:px-6 py-2 text-[8px] sm:text-[10px] font-black uppercase border-2 border-black tracking-widest welcome-subtitle welcome-subtitle-btn transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-0 active:translate-y-0 whitespace-nowrap" aria-label="Ir a ubicación del estudio" title="BOSA / LA INDEPENDENCIA">BOSA / LA INDEPENDENCIA</button></div></div></div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[2px] h-16 bg-gradient-to-b from-brandRed to-transparent"></div>
      </div>
    </section>
  );
}
