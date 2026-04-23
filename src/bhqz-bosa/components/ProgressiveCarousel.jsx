// BHQZ Bosa - Progressive Carousel
// Interactive sport selector with per-section image toggling

import { useRef, useState } from 'react';

const THUMBNAIL_ROTATION_STEP = 252;

const sportSections = [
  {
    title: 'Voleibol',
    message: 'Salta más alto. Juega en equipo. Vive el voleibol.',
    images: [
      '/multimedia/BHQZ/fotos/voleyballbhqz.png',
      '/multimedia/BHQZ/fotos/Vs-Japon.jpg',
    ],
    thumbnail: '/multimedia/BHQZ/balonvol.png',
    accentClassName: 'from-sky-500/30 via-cyan-400/10 to-transparent',
    badgeClassName: 'border-sky-300/30 bg-sky-300/10 text-sky-100',
  },
  {
    title: 'Futbol',
    message: 'Cada pase cuenta. Cada gol, una historia.',
    images: [
      '/multimedia/BHQZ/fotos/foto3.jpg',
      '/multimedia/BHQZ/fotos/messi.avif',
    ],
    thumbnail: '/multimedia/BHQZ/balonfut.png',
    accentClassName: 'from-emerald-500/30 via-lime-400/10 to-transparent',
    badgeClassName: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-100',
  },
  {
    title: 'Patinaje',
    message: 'Velocidad, equilibrio y pasión sobre ruedas.',
    images: [
      '/multimedia/BHQZ/fotos/patinajecol.png',
      '/multimedia/BHQZ/fotos/patinaje.png',
    ],
    thumbnail: '/multimedia/BHQZ/llanta.png',
    accentClassName: 'from-rose-500/30 via-fuchsia-400/10 to-transparent',
    badgeClassName: 'border-rose-300/30 bg-rose-300/10 text-rose-100',
  },
];

export default function ProgressiveCarousel({
  title = 'Nuestras Categorias',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionImageIndices, setSectionImageIndices] = useState([0, 0, 0]);
  const [thumbnailRotations, setThumbnailRotations] = useState([0, 0, 0]);

  const imageIndicesRef = useRef([0, 0, 0]);
  const visitedRef = useRef([true, false, false]);
  const rotationAnglesRef = useRef([0, 0, 0]);

  const activateSection = (nextIndex) => {
    if (nextIndex === activeIndex) {
      return;
    }

    if (visitedRef.current[nextIndex]) {
      imageIndicesRef.current[nextIndex] =
        (imageIndicesRef.current[nextIndex] + 1) % sportSections[nextIndex].images.length;
    } else {
      visitedRef.current[nextIndex] = true;
    }

    const nextRotations = [...rotationAnglesRef.current];
    nextRotations[activeIndex] -= THUMBNAIL_ROTATION_STEP;
    nextRotations[nextIndex] += THUMBNAIL_ROTATION_STEP;
    rotationAnglesRef.current = nextRotations;

    setThumbnailRotations(nextRotations);
    setSectionImageIndices([...imageIndicesRef.current]);
    setActiveIndex(nextIndex);
  };

  return (
    <div
      className="progressive-carousel relative w-screen max-w-none overflow-hidden"
      style={{
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
      }}
    >
      <div className="relative min-h-[24rem] overflow-hidden bg-[#080808] sm:min-h-[28rem] md:min-h-[36rem] lg:min-h-[42rem]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 md:pt-10 lg:px-8">
          <h2 className="z7-section-title text-center text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
        </div>

        <div className="absolute right-2 top-1/2 z-20 -translate-y-1/2 sm:right-3 md:right-2 lg:right-3">
          <div className="flex flex-col items-center gap-3 rounded-full border border-white/10 bg-black/30 px-2 py-3 backdrop-blur-sm sm:gap-4 sm:px-2.5 md:gap-5">
            {sportSections.map((section, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={section.title}
                  type="button"
                  onMouseEnter={() => activateSection(index)}
                  onFocus={() => activateSection(index)}
                  onClick={() => activateSection(index)}
                  className={`flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem] lg:h-20 lg:w-20 ${
                    isActive
                      ? 'border-white/20 bg-white/10 shadow-[0_18px_35px_rgba(0,0,0,0.28)]'
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                  }`}
                  aria-label={`Activar ${section.title}`}
                >
                  <img
                    src={section.thumbnail}
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-8 object-contain transition-transform duration-500 ease-in-out sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12"
                    style={{ transform: `rotate(${thumbnailRotations[index]}deg)` }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {sportSections.map((section, index) => {
          const isActive = index === activeIndex;
          const currentImage = section.images[sectionImageIndices[index]];

          return (
            <article
              key={section.title}
              className={`absolute inset-0 transition-all duration-500 ease-out ${
                isActive
                  ? 'translate-x-0 scale-100 opacity-100'
                  : 'pointer-events-none translate-x-4 scale-[1.015] opacity-0'
              }`}
            >
              <img
                src={currentImage}
                alt={section.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
              <div className={`absolute inset-0 bg-gradient-to-br ${section.accentClassName}`} />

              <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-7xl px-4 pb-8 pr-24 sm:px-6 sm:pr-28 md:pb-10 md:pr-32 lg:px-8 lg:pr-36">
                <div className="max-w-2xl">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] ${section.badgeClassName}`}
                  >
                    {section.title}
                  </span>
                  <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-white sm:text-xl">
                    {section.message}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
