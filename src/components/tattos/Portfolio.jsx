import { useEffect, useRef, useState } from "react";
import { Icon } from "../Icon.jsx";
import { InfiniteSliderHorizontal } from "./InfiniteSliderHorizontal.jsx";

const portfolioItems = [
  { alt: "Tatuaje en negro y sombreado 01", src: "/multimedia/FotosTattosLopez/IMG_0001.jpeg" },
  { alt: "Tatuaje en negro y sombreado 02", src: "/multimedia/FotosTattosLopez/IMG_0002.jpeg" },
  { alt: "Tatuaje en negro y sombreado 03", src: "/multimedia/FotosTattosLopez/IMG_0003.jpeg" },
  { alt: "Tatuaje en negro y sombreado 04", src: "/multimedia/FotosTattosLopez/IMG_0004.jpeg" },
  { alt: "Tatuaje en negro y sombreado 05", src: "/multimedia/FotosTattosLopez/IMG_0005.jpeg" },
  { alt: "Tatuaje en negro y sombreado 06", src: "/multimedia/FotosTattosLopez/IMG_0006.jpeg" },
  { alt: "Tatuaje en negro y sombreado 07", src: "/multimedia/FotosTattosLopez/IMG_0007.jpeg" },
  { alt: "Tatuaje en negro y sombreado 08", src: "/multimedia/FotosTattosLopez/IMG_0009.jpeg" },
  { alt: "Tatuaje en negro y sombreado 09", src: "/multimedia/FotosTattosLopez/IMG_0010.jpeg" },
  { alt: "Tatuaje en negro y sombreado 10", src: "/multimedia/FotosTattosLopez/IMG_0011.jpeg" },
  { alt: "Tatuaje en negro y sombreado 11", src: "/multimedia/FotosTattosLopez/IMG_0008.png" },
];

export function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef(null);

  const openLightbox = (index) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsClosing(false);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    if (closeTimerRef.current) {
      return;
    }

    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      setLightboxIndex(null);
      setIsClosing(false);
      closeTimerRef.current = null;
    }, 300);
  };

  const nextImage = () => {
    if (closeTimerRef.current) {
      return;
    }

    setLightboxIndex((current) => {
      if (current === null) {
        return current;
      }

      return (current + 1) % portfolioItems.length;
    });
  };

  const prevImage = () => {
    if (closeTimerRef.current) {
      return;
    }

    setLightboxIndex((current) => {
      if (current === null) {
        return current;
      }

      return (current - 1 + portfolioItems.length) % portfolioItems.length;
    });
  };

  const isLightboxOpen = lightboxIndex !== null;

  const renderPortfolioCard = (item, index, isClone) => (
    <button
      type="button"
      className="portfolio-card sawtooth-edge group relative block p-0 border-0 bg-transparent text-left outline-none"
      onClick={() => openLightbox(index)}
      onDragStart={(event) => event.preventDefault()}
      tabIndex={isClone ? -1 : 0}
      aria-label={`Abrir imagen ${index + 1} del portafolio`}
    >
      <img
        className="portfolio-card__image w-full h-full object-cover"
        src={item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        draggable="false"
      />
      <span className="portfolio-card__veil"></span>
      <span className="portfolio-card__glow"></span>
    </button>
  );

  useEffect(() => {
    if (!isLightboxOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    };
  }, []);

  return (
    <section id="work" className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-black overflow-hidden relative transition-colors duration-300 scroll-mt-[80px]">
      <div className="absolute inset-0 mandala-texture z-0"></div>
      <div id="paginas" className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 md:mb-12 relative z-10">
        <div className="flex flex-col gap-1 sm:gap-2 border-l-4 border-[#0077BE] dark:border-[#8a0012] pl-3 sm:pl-4 transition-colors duration-300">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase italic leading-none text-slate-900 dark:text-white">
            PORTAFOLIO DE CLIENTES
          </h2>
          <p className="text-[#0077BE] dark:text-[#8a0012] font-mono text-[7px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold transition-colors duration-300">
            ZONA 7 ART / PUNTILLISMO RADICAL
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 space-y-6 sm:space-y-8">
        <InfiniteSliderHorizontal
          items={portfolioItems}
          speed={58}
          gap="clamp(0.75rem, 1.25vw, 1.1rem)"
          ariaLabel="Galeria horizontal de tatuajes"
          renderItem={renderPortfolioCard}
        />

        <InfiniteSliderHorizontal
          items={portfolioItems}
          speed={70}
          direction="right"
          gap="clamp(0.7rem, 1.1vw, 1rem)"
          ariaLabel="Segunda galeria horizontal de tatuajes"
          renderItem={renderPortfolioCard}
        />
      </div>

      {lightboxIndex !== null && (
        <div
          className={`fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"}`}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada del portafolio"
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#8a0012] transition-colors z-50"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            type="button"
            aria-label="Cerrar vista ampliada"
          >
            <Icon name="close" className="text-4xl" />
          </button>

          <button
            className="absolute left-4 md:left-8 text-white hover:text-[#8a0012] transition-colors z-50 p-4"
            onClick={(event) => {
              event.stopPropagation();
              prevImage();
            }}
            type="button"
            aria-label="Imagen anterior"
          >
            <Icon name="chevron_left" className="text-4xl md:text-6xl" />
          </button>

          <img
            src={portfolioItems[lightboxIndex].src}
            alt={portfolioItems[lightboxIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl shadow-black"
            onClick={(event) => event.stopPropagation()}
            draggable="false"
          />

          <button
            className="absolute right-4 md:right-8 text-white hover:text-[#8a0012] transition-colors z-50 p-4"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            type="button"
            aria-label="Imagen siguiente"
          >
            <Icon name="chevron_right" className="text-4xl md:text-6xl" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-white/50 font-mono">
            {String(lightboxIndex + 1).padStart(2, "0")} / {String(portfolioItems.length).padStart(2, "0")}
          </div>
        </div>
      )}

      <style>{`
        .portfolio-card {
          width: clamp(10rem, 18vw, 15rem);
          height: clamp(13rem, 22vw, 19rem);
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          isolation: isolate;
          background: linear-gradient(180deg, rgba(17, 17, 17, 0.95), rgba(0, 0, 0, 1));
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.28);
          transform: translateZ(0);
          cursor: pointer;
          touch-action: manipulation;
          user-select: none;
          -webkit-user-drag: none;
          transition:
            transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 280ms ease,
            border-color 280ms ease,
            filter 280ms ease;
        }

        .portfolio-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(140deg, transparent 0%, rgba(255, 255, 255, 0.16) 42%, transparent 75%);
          opacity: 0;
          transform: translateX(-32%);
          transition: opacity 240ms ease, transform 360ms ease;
          z-index: 2;
          pointer-events: none;
        }

        .portfolio-card:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.22);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.45);
        }

        .portfolio-card:active {
          transform: translateY(-2px) scale(1.01);
        }

        .portfolio-card:hover::after {
          opacity: 0.9;
          transform: translateX(34%);
        }

        .portfolio-card__image {
          filter: grayscale(100%) contrast(1.02) brightness(0.96);
          transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), filter 220ms ease;
          transform: scale(1);
          will-change: transform, filter;
        }

        .portfolio-card:hover .portfolio-card__image {
          filter: grayscale(0%) contrast(1.1) brightness(1.02);
          transform: scale(1.04);
        }

        .portfolio-card__veil,
        .portfolio-card__glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .portfolio-card__veil {
          z-index: 1;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.42) 100%);
        }

        .portfolio-card__glow {
          z-index: 3;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity 220ms ease;
        }

        .portfolio-card:hover .portfolio-card__glow {
          opacity: 1;
        }

        .portfolio-card:focus-visible {
          outline: 2px solid #8a0012;
          outline-offset: 3px;
        }

        @media (max-width: 768px) {
          .portfolio-card {
            width: clamp(9.5rem, 42vw, 13rem);
            height: clamp(12.5rem, 56vw, 17rem);
          }
        }
      `}</style>
    </section>
  );
}
