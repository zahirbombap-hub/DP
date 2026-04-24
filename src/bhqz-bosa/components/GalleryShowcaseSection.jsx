// BHQZ Bosa - Gallery showcase section
// Full-bleed editorial gallery inspired by signature-style showcases

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const gallerySlides = [
  {
    src: '/multimedia/BHQZ/fotos/foto1.jpg',
    alt: 'Momento destacado BHQZ 1',
    title: 'Escenas que cuentan nuestra energia',
    description:
      'Entrenamientos, encuentros y celebraciones que dejan huella en cada temporada de BHQZ Bosa.',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto3.jpg',
    alt: 'Momento destacado BHQZ 2',
    title: 'Una galeria con movimiento real',
    description:
      'La cancha, la comunidad y la pasion deportiva aparecen aqui como una sola historia visual.',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto5.jpg',
    alt: 'Momento destacado BHQZ 3',
    title: 'Recuerdos de alto impacto',
    description:
      'Cada imagen captura momentos de esfuerzo, tecnica y conexion que definen el espiritu del club.',
  },
  {
    src: '/multimedia/BHQZ/fotos/hero4.jpeg',
    alt: 'Momento destacado BHQZ 4',
    title: 'Historias que merecen quedarse',
    description:
      'Una seleccion visual de momentos que firman la identidad competitiva y humana de BHQZ Bosa.',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto6.jpg',
    alt: 'Momento destacado BHQZ 5',
    title: 'El pulso de nuestra energía',
    description:
      'La galeria mezcla deporte, companerismo y crecimiento en una escena inmersiva de punta a punta.',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto11.jpg',
    alt: 'Momento destacado BHQZ 6',
    title: 'Postales de alto impacto',
    description:
      'Cada toma refuerza la disciplina, el orgullo de equipo y la presencia de BHQZ en cada actividad.',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto11.jpg',
    alt: 'Momento destacado BHQZ 10',
    title: 'Impacto social y deportivo',
    description:
      'Más que un club, somos un motor de transformación para jóvenes y familias en toda la localidad.',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto6.jpg',
    alt: 'Momento destacado BHQZ 11',
    title: 'Pasión en cada jugada',
    description:
      'Capturamos la intensidad y el enfoque de nuestros miembros durante los momentos clave de la acción.',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto1.jpg',
    alt: 'Momento destacado BHQZ 12',
    title: 'Tu deporte al siguiente nivel',
    description:
      'Formación profesional diseñada para potenciar el talento individual dentro de un marco colectivo sólido.',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto3.jpg',
    alt: 'Momento destacado BHQZ 13',
    title: 'Acción en la cancha',
    description:
      'Momentos de intensidad y enfoque técnico durante los entrenamientos de fútbol.',
  },
  {
    src: '/multimedia/BHQZ/fotos/convocatoriavolley.jpg',
    alt: 'Momento destacado BHQZ 14',
    title: 'Talento y Formación',
    description:
      'Espacios dedicados a potenciar las habilidades en voleibol para todas las edades.',
  },
  {
    src: '/multimedia/BHQZ/fotos/voleyballbhqz.png',
    alt: 'Momento destacado BHQZ 15',
    title: 'Pasión por el Voleibol',
    description:
      'Nuestros equipos en constante crecimiento, fomentando el trabajo colaborativo.',
  },
  {
    src: '/multimedia/BHQZ/fotos/Vs-Japon.jpg',
    alt: 'Momento destacado BHQZ 16',
    title: 'Inspiración Deportiva',
    description:
      'Referentes del deporte internacional que motivan a nuestra comunidad día a día.',
  },
  {
    src: '/multimedia/BHQZ/fotos/messi.avif',
    alt: 'Momento destacado BHQZ 17',
    title: 'Grandes Referentes',
    description:
      'El deporte como lenguaje universal y motor de sueños para nuestros jóvenes.',
  },
  {
    src: '/multimedia/BHQZ/fotos/patinaje.png',
    alt: 'Momento destacado BHQZ 18',
    title: 'Velocidad y Destreza',
    description:
      'Nuestras jornadas de patinaje, promoviendo el equilibrio y la disciplina física.',
  },
  {
    src: '/multimedia/BHQZ/fotos/patinajecol.png',
    alt: 'Momento destacado BHQZ 19',
    title: 'Orgullo sobre Ruedas',
    description:
      'Representando con honor a BHQZ Bosa en cada pista y competencia local.',
  },
];

export default function GalleryShowcaseSection({
  autoPlay = true,
  autoPlayInterval = 5000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) {
      return undefined;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gallerySlides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gallerySlides.length);
  };

  const activeSlide = gallerySlides[currentIndex];

  return (
    <section
      className="relative w-screen max-w-none overflow-hidden bg-[#080808]"
      style={{
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
      }}
    >
      <div className="relative min-h-[34rem] overflow-hidden sm:min-h-[38rem] md:min-h-[44rem] lg:min-h-[48rem]">
        {gallerySlides.map((slide, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.85),rgba(8,8,8,0.3),rgba(8,8,8,0.85))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/25 to-[#080808]/15" />

        <div className="pointer-events-none absolute inset-x-0 top-10 z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/70">
            Editorial
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[0.08em] text-white sm:text-5xl md:text-6xl">
            Galeria
          </h2>
        </div>

        <div className="relative z-20 mx-auto flex min-h-[34rem] w-full max-w-7xl flex-col justify-end px-4 pb-8 pt-36 sm:px-6 sm:pb-10 sm:pt-40 md:min-h-[44rem] md:pb-12 md:pt-44 lg:px-8 lg:pb-14">
          <div className="flex flex-col gap-8">
            <div className="max-w-2xl mb-20 sm:mb-24 md:mb-28">
              <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                {activeSlide.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/82 sm:text-base md:text-lg">
                {activeSlide.description}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/50 text-white/85 transition-all duration-300 hover:border-white/30 hover:bg-black/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/50 text-white/85 transition-all duration-300 hover:border-white/30 hover:bg-black/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Miniaturas horizontales en la parte inferior */}
            <div className="absolute bottom-6 left-1/2 z-30 flex w-full -translate-x-1/2 justify-center px-4">
              <div className="flex gap-2 overflow-x-auto no-scrollbar py-2 max-w-full sm:gap-3">
                {gallerySlides.map((slide, index) => {
                  const isActive = index === currentIndex;

                  return (
                    <button
                      key={`${slide.src}-thumb`}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      className={`relative h-14 w-11 shrink-0 overflow-hidden rounded-xl border transition-all duration-500 sm:h-20 sm:w-16 md:h-24 md:w-20 ${
                        isActive
                          ? 'border-white/60 scale-110 z-10 shadow-[0_10px_25px_rgba(0,0,0,0.5)]'
                          : 'border-white/10 opacity-50 hover:opacity-100'
                      }`}
                      aria-label={`Ir a la imagen ${index + 1}`}
                    >
                      <img
                        src={slide.src}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-cover"
                      />
                      <div className={`absolute inset-0 transition-colors duration-300 ${
                        isActive ? 'bg-black/0' : 'bg-black/40'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
