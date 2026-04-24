// BHQZ Bosa - Home Page
// Comprehensive home page using all major components

import { useEffect, useState } from 'react';
import { Seo } from '../../components/Seo.jsx';
import {
  Z7Layout,
  HeroZ7,
  AboutZ7,
  ProgressiveCarousel,
  SplitSection,
  GalleryShowcaseSection,
} from '../components/index.jsx';

const ctaBackgroundImages = [
  {
    src: '/multimedia/BHQZ/fotos/convocatoriavolley.jpg',
    alt: 'Convocatoria de volleyball',
    position: 'center 44%',
  },
  {
    src: '/multimedia/BHQZ/fotos/foto6.jpg',
    alt: 'Jugadora de BHQZ en cancha',
    position: 'center 5%',
  },
  {
    src: '/multimedia/BHQZ/fotos/patinaje.png',
    alt: 'Entrenamiento de patinaje BHQZ',
    position: 'center 38%',
  },
];

export default function Home() {
  const stats = [
    { value: '500+', label: 'Miembros activos' },
    { value: '10+', label: 'Programas' },
    { value: '15+', label: 'Años de experiencia' },
  ];
  const [ctaBackgroundIndex, setCtaBackgroundIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCtaBackgroundIndex((prev) => (prev + 1) % ctaBackgroundImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Seo />
      <Z7Layout isHome={true}>
        <HeroZ7
          headline="Arte Cultura y Deporte"
          subheadline="Descubre nuestros programas y servicios deportivos"
          ctaText="Explorar programas"
          ctaLink="/bhqz-bosa/programas"
        />

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10 }}>
            <AboutZ7
              title="Sobre BHQZ Bosa"
              description="BHQZ Bosa es una organizacion dedicada a promover el desarrollo integral de nuestros miembros a traves de la combinacion del arte, la cultura y el deporte. Creemos que estas disciplinas son fundamentales para crear una comunidad fuerte, inclusiva y transformadora."
              stats={stats}
            />
          </div>

          <div
            style={{
              position: 'relative',
              zIndex: 20,
              borderRadius: '1.5rem 1.5rem 0 0',
              overflow: 'hidden',
              marginTop: '-2rem',
            }}
          >
            <section className="bg-[#080808]">
              <ProgressiveCarousel title="Nuestras Categorias" />
            </section>
          </div>

          <div
            style={{
              position: 'relative',
              zIndex: 30,
              borderRadius: '1.5rem 1.5rem 0 0',
              overflow: 'hidden',
              marginTop: '-2rem',
            }}
          >
            <SplitSection
              leftContent={
                <img
                  src="/multimedia/BHQZ/fotos/foto1.jpg"
                  alt="Jugador destacado de BHQZ"
                  className="h-[260px] w-full object-cover object-top md:h-full md:object-center"
                />
              }
              rightContent={
                <div className="max-w-xl space-y-6">
                  <h3 className="z7-section-title text-[2rem] font-bold text-white">
                    Tu deporte, al siguiente nivel
                  </h3>
                  <p className="text-base leading-relaxed text-white">
                    Encuentros, entrenamientos y asesorias profesionales disenados para llevarte mas lejos, sin importar tu nivel.
                  </p>
                  <ul className="list-disc space-y-3 pl-5 text-base leading-relaxed text-white">
                    <li>Entrenamientos personalizados</li>
                    <li>Acompanamiento y asesoria profesional</li>
                    <li>Competencias y eventos deportivos</li>
                    <li>Actividades culturales y comunitarias</li>
                  </ul>
                    <a
                      href="/bhqz-bosa/programas"
                      className="inline-block rounded-lg px-8 py-3 font-semibold text-white bg-gradient-to-b from-red-700 via-red-800 to-red-900 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm"
                    >
                      Ver todos los programas
                    </a>
                </div>
              }
              containerClassName="my-0"
            />
          </div>

          <div
            style={{
              position: 'relative',
              zIndex: 40,
              borderRadius: '1.5rem 1.5rem 0 0',
              overflow: 'hidden',
              marginTop: '-2rem',
            }}
          >
            <GalleryShowcaseSection />
          </div>
        </div>

        <section
          className="relative isolate w-screen overflow-hidden py-16 text-white md:py-24"
          style={{
            marginLeft: 'calc(50% - 50vw)',
            marginRight: 'calc(50% - 50vw)',
          }}
        >
          <div className="absolute inset-0">
            {ctaBackgroundImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
                  index === ctaBackgroundIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectPosition: image.position }}
              />
            ))}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.9),rgba(8,8,8,0.45),rgba(8,8,8,0.9))]" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[22rem] w-full max-w-7xl items-center justify-center px-4 text-center sm:px-6 lg:px-8">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)] md:text-4xl">
                ¿Listo para comenzar?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
                Unete a nuestra comunidad y descubre todo lo que BHQZ Bosa tiene para ofrecerte.
              </p>
              <a
                href="/bhqz-bosa/inscripciones"
                className="inline-block rounded-lg px-8 py-3 font-semibold text-white bg-gradient-to-b from-red-700 via-red-800 to-red-900 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm"
              >
                Inscribirse ahora
              </a>
            </div>
          </div>
        </section>
      </Z7Layout>
    </>
  );
}
