import React, { useState, useCallback } from 'react';
export function Portfolio() {
  const images = [
    '/multimedia/FotosTattosLopez/IMG_0001.jpeg',
    '/multimedia/FotosTattosLopez/IMG_0002.jpeg',
    '/multimedia/FotosTattosLopez/IMG_0003.jpeg',
    '/multimedia/FotosTattosLopez/IMG_0004.jpeg',
    '/multimedia/FotosTattosLopez/IMG_0005.jpeg',
    '/multimedia/FotosTattosLopez/IMG_0006.jpeg',
    '/multimedia/FotosTattosLopez/IMG_0007.jpeg',
    '/multimedia/FotosTattosLopez/IMG_0009.jpeg',
    '/multimedia/FotosTattosLopez/IMG_0010.jpeg',
    '/multimedia/FotosTattosLopez/IMG_0011.jpeg',
    '/multimedia/FotosTattosLopez/IMG_0008.png',
  ];

  const [hoveredCard, setHoveredCard] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsClosing(false);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setLightboxIndex(null);
      setIsClosing(false);
      document.body.style.overflow = '';
    }, 300);
  }, []);

  const nextImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setHoveredCard(index);

    // Parallax effect optimizado
    const rotateX = (y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / -15;
    
    const el = e.currentTarget;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = (e) => {
    setHoveredCard(null);
    const el = e.currentTarget;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-black overflow-hidden relative transition-colors duration-300">
      <div className="absolute inset-0 mandala-texture z-0"></div>
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 relative z-10">
        <div id="work" className="flex flex-col gap-2 border-l-4 border-[#0077BE] dark:border-[#8a0012] pl-4 scroll-mt-24 transition-colors duration-300">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic leading-none text-slate-900 dark:text-white">PORTAFOLIO DE CLIENTES</h2>
          <p className="text-[#0077BE] dark:text-[#8a0012] font-mono text-[9px] uppercase tracking-[0.2em] font-bold transition-colors duration-300">ZONA 7 ART / PUNTILLISMO RADICAL</p>
        </div>
      </div>
      <div className="carousel-container relative z-10 w-full">
          <div className="carousel-track animate-scroll-left-slow">
            <div className="flex">
              {images.map((src, i) => (
                <div 
                  key={`l-${i}`} 
                  className="gallery-card sawtooth-edge gallery-card-interactive"
                  onClick={() => openLightbox(i)}
                  onMouseMove={(e) => handleMouseMove(e, i)}
                  onMouseLeave={handleMouseLeave}
                  style={{ transition: hoveredCard === i ? 'none' : 'transform 0.3s ease-out' }}
                >
                  <img className="w-full h-full object-cover" src={src} alt="Tattoo work" loading="lazy" decoding="async" />
                </div>
              ))}
              {images.map((src, i) => (
                <div 
                  key={`l-dup-${i}`} 
                  className="gallery-card sawtooth-edge gallery-card-interactive"
                  onClick={() => openLightbox(i)}
                  onMouseMove={(e) => handleMouseMove(e, i + images.length)}
                  onMouseLeave={handleMouseLeave}
                  style={{ transition: hoveredCard === i + images.length ? 'none' : 'transform 0.3s ease-out' }}
                >
                  <img className="w-full h-full object-cover" src={src} alt="Tattoo work" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-track animate-scroll-right-slow">
            <div className="flex">
              {images.map((src, i) => (
                <div 
                  key={`r-${i}`} 
                  className="gallery-card sawtooth-edge gallery-card-interactive"
                  onClick={() => openLightbox(i)}
                  onMouseMove={(e) => handleMouseMove(e, i + 100)}
                  onMouseLeave={handleMouseLeave}
                  style={{ transition: hoveredCard === i + 100 ? 'none' : 'transform 0.3s ease-out' }}
                >
                  <img className="w-full h-full object-cover" src={src} alt="Tattoo work" loading="lazy" decoding="async" />
                </div>
              ))}
              {images.map((src, i) => (
                <div 
                  key={`r-dup-${i}`} 
                  className="gallery-card sawtooth-edge gallery-card-interactive"
                  onClick={() => openLightbox(i)}
                  onMouseMove={(e) => handleMouseMove(e, i + 100 + images.length)}
                  onMouseLeave={handleMouseLeave}
                  style={{ transition: hoveredCard === i + 100 + images.length ? 'none' : 'transform 0.3s ease-out' }}
                >
                  <img className="w-full h-full object-cover" src={src} alt="Tattoo work" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        </div>
      
      {lightboxIndex !== null && (
        <div 
          className={`fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#8a0012] transition-colors z-50"
            onClick={closeLightbox}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          <button 
            className="absolute left-4 md:left-8 text-white hover:text-[#8a0012] transition-colors z-50 p-4"
            onClick={prevImage}
          >
            <span className="material-symbols-outlined text-4xl md:text-6xl">chevron_left</span>
          </button>

          <img 
            src={images[lightboxIndex]} 
            alt="Tattoo detail" 
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl shadow-black"
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            className="absolute right-4 md:right-8 text-white hover:text-[#8a0012] transition-colors z-50 p-4"
            onClick={nextImage}
          >
            <span className="material-symbols-outlined text-4xl md:text-6xl">chevron_right</span>
          </button>
        </div>
      )}

      <style>{`
        .gallery-card-interactive {
          transform-style: preserve-3d;
          transition: transform 0.3s ease-out, filter 0.5s ease;
          cursor: none;
          filter: grayscale(100%);
        }

        .gallery-card-interactive:hover {
          filter: grayscale(0%);
        }

        @media (max-width: 768px) {
          .gallery-card-interactive {
            transform: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-card-interactive {
            transform: none !important;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
