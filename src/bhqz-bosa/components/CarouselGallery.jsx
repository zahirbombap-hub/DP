// BHQZ Bosa - Carousel Gallery Component
// Card-style gallery inspired by stacked carousel layouts

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// The carouselImages array is now synchronized with the gallerySlides from GalleryShowcaseSection.jsx
const carouselImages = [
  {
    src: '/multimedia/BHQZ/fotos/foto1.webp',
    alt: 'Momento destacado BHQZ 1',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto3.webp',
    alt: 'Momento destacado BHQZ 2',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto5.webp',
    alt: 'Momento destacado BHQZ 3',
  },
  {
    src: '/multimedia/BHQZ/fotos/hero4.webp',
    alt: 'Momento destacado BHQZ 4',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto6.webp',
    alt: 'Momento destacado BHQZ 5',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto11.webp',
    alt: 'Momento destacado BHQZ 6',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto6.webp',
    alt: 'Momento destacado BHQZ 11',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto1.webp',
    alt: 'Momento destacado BHQZ 12',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto3.webp',
    alt: 'Momento destacado BHQZ 13',
  },
  {
    src: '/multimedia/BHQZ/fotos/convocatoriavolley.webp',
    alt: 'Momento destacado BHQZ 14',
  },
  {
    src: '/multimedia/BHQZ/fotos/voleyballbhqz.webp',
    alt: 'Momento destacado BHQZ 15',
  },
  {
    src: '/multimedia/BHQZ/fotos/Vs-Japon.webp',
    alt: 'Momento destacado BHQZ 16',
  },
  {
    src: '/multimedia/BHQZ/fotos/messi.webp',
    alt: 'Momento destacado BHQZ 17',
  },
  {
    src: '/multimedia/BHQZ/fotos/patinaje.webp',
    alt: 'Momento destacado BHQZ 18',
  },
  {
    src: '/multimedia/BHQZ/fotos/patinajecol.webp',
    alt: 'Momento destacado BHQZ 19',
  },
];

function getWrappedOffset(index, currentIndex, total) {
  let offset = index - currentIndex;
  const midpoint = Math.floor(total / 2);

  if (offset > midpoint) {
    offset -= total;
  }

  if (offset < -midpoint) {
    offset += total;
  }

  return offset;
}

function getCardStyle(offset) {
  const distance = Math.abs(offset);

  if (distance === 0) {
    return {
      opacity: 1,
      zIndex: 40,
      transform: 'translate3d(-50%, -50%, 0) scale(1)',
    };
  }

  if (distance === 1) {
    return {
      opacity: 0.68,
      zIndex: 30,
      transform: `translate3d(calc(-50% + ${offset * 82}%), -50%, 0) scale(0.82)`,
    };
  }

  if (distance === 2) {
    return {
      opacity: 0.22,
      zIndex: 20,
      transform: `translate3d(calc(-50% + ${offset * 118}%), -50%, 0) scale(0.66)`,
    };
  }

  return {
    opacity: 0,
    zIndex: 10,
    transform: `translate3d(calc(-50% + ${offset * 135}%), -50%, 0) scale(0.56)`,
  };
}

export default function CarouselGallery({
  autoPlay = true,
  autoPlayInterval = 4500,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) {
      return undefined;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-[#080808] px-0 py-8 md:py-10"
      aria-label="Carrusel destacado de la galeria"
      role="region"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_42%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.06),_transparent_32%)]" />

      <div className="relative h-[25rem] sm:h-[28rem] md:h-[31rem]">
        {carouselImages.map((image, index) => {
          const offset = getWrappedOffset(index, currentIndex, carouselImages.length);
          const cardStyle = getCardStyle(offset);
          const isActive = index === currentIndex;

          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className="absolute left-1/2 top-1/2 h-[18.5rem] w-[12.5rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:h-[22rem] sm:w-[14.5rem] md:h-[26rem] md:w-[18.5rem]"
              style={cardStyle}
              aria-current={isActive}
              aria-label={`Mostrar imagen ${index + 1} de la galeria`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/25" />
              <div
                className={`absolute inset-0 border border-white/10 transition-opacity duration-500 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          );
        })}

        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/70 text-white/80 transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:left-6 md:left-8"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          className="absolute right-3 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/70 text-white/80 transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:right-6 md:right-8"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 md:bottom-4">
          {carouselImages.map((image, index) => {
            const isActive = index === currentIndex;

            return (
              <button
                key={`${image.src}-indicator`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-8 bg-sky-400'
                    : 'w-2.5 bg-white/15 hover:bg-white/30'
                }`}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
