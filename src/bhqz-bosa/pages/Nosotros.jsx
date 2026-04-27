// BHQZ Bosa - About Us Page

import { useEffect, useState, useRef } from 'react';
import { Seo } from '../../components/Seo.jsx';
import { Z7Layout, AboutZ7 } from '../components/index.jsx';

function usePageLoadAnimation() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setIsActive(true);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return isActive;
}

const NOSOTROS_STATS = [
  { value: '500+', label: 'Miembros activos' },
  { value: '50+', label: 'Programas' },
  { value: '15+', label: 'Años de experiencia' }
];

export default function Nosotros() {
  const ctaBackgroundImages = [
    {
      src: '/multimedia/BHQZ/fotos/comunidad.webp',
      alt: 'Comunidad BHQZ',
      position: 'center 44%',
    },
    {
      src: '/multimedia/BHQZ/fotos/foto6.webp',
      alt: 'Evento BHQZ',
      position: 'center 5%',
    },
    {
      src: '/multimedia/BHQZ/fotos/patinaje.webp',
      alt: 'Patinaje BHQZ',
      position: 'center 38%',
    },
  ];

  const values = [
    {
      title: 'Inclusión',
      description: 'Creemos en un espacio seguro y acogedor para todos, sin importar edad, género o nivel de experiencia.',
      icon: '🤝',
    },
    {
      title: 'Excelencia',
      description: 'Nos comprometemos a ofrecer programas de la más alta calidad con profesionales capacitados.',
      icon: '⭐',
    },
    {
      title: 'Transformación',
      description: 'Buscamos generar cambios positivos en la vida de nuestros miembros y la comunidad.',
      icon: '✨',
    },
    {
      title: 'Sostenibilidad',
      description: 'Trabajamos considerando el impacto social y ambiental de nuestras actividades.',
      icon: '🌱',
    },
  ];

  const [ctaBackgroundIndex, setCtaBackgroundIndex] = useState(0);
  const isHeroVisible = usePageLoadAnimation();
  const sectionRef = useRef(null);
  const ctaTimerRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Dejar de observar una vez visible
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal-trigger');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    ctaTimerRef.current = setInterval(() => {
      setCtaBackgroundIndex((prev) => (prev + 1) % ctaBackgroundImages.length);
    }, 4500);

    return () => {
      if (ctaTimerRef.current) {
        clearInterval(ctaTimerRef.current);
      }
    };
  }, [ctaBackgroundImages.length]);

  return (
    <>
      <Seo />
      <Z7Layout>
      {/* Hero Section */}
      <section 
        className="hero-nosotros relative overflow-hidden py-16 text-white md:py-24"
      >
        <style>{`
          .hero-nosotros-bg {
            transform: scale(1.05);
            transition: transform 2s cubic-bezier(0.22, 1, 0.36, 1);
            will-change: transform;
          }

          .hero-nosotros-bg--visible {
            transform: scale(1);
          }

          .hero-nosotros-title {
            opacity: 0;
            transform: translateY(60px) scale(0.98);
            transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
            will-change: opacity, transform;
          }

          .hero-nosotros-title--visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .hero-nosotros-copy {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
            transition-delay: 0.25s;
            will-change: opacity, transform;
          }

          .hero-nosotros-copy--visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
        <div
          className={`hero-nosotros-bg absolute inset-0 bg-cover bg-center bg-no-repeat ${
            isHeroVisible ? 'hero-nosotros-bg--visible' : ''
          }`}
          style={{
            backgroundImage: 'url(/multimedia/BHQZ/fondo%20Mingavsargen.webp)',
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1
              className={`hero-nosotros-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
                isHeroVisible ? 'hero-nosotros-title--visible' : ''
              }`}
            >
              Nosotros
            </h1>
            <p
              className={`hero-nosotros-copy text-lg md:text-xl text-white/90 ${
                isHeroVisible ? 'hero-nosotros-copy--visible' : ''
              }`}
            >
              Conocé nuestra historia, nuestros valores y lo que nos impulsa a crear una comunidad transformadora.
            </p>
          </div>
        </div>
      </section>

      <div className="relative">
        {/* About Section with Stats */}
        <div className="relative z-10 reveal-trigger">
          <div className="w-full">
            <AboutZ7
              title="Sobre BHQZ Bosa"
              description="BHQZ Bosa es una organización dedicada a promover el desarrollo integral de nuestros miembros a través de la combinación del arte, la cultura y el deporte. Desde hace más de 15 años, hemos trabajado incansablemente para crear un espacio donde cada persona pueda descubrir su potencial y crecer en un ambiente de respeto, inclusión y excelencia."
              stats={NOSOTROS_STATS}
            />
          </div>
        </div>

        {/* Misión + Visión + Valores Section */}
        <section 
          ref={sectionRef}
          className="relative z-20 -mt-12 overflow-hidden rounded-t-[2.5rem] pb-16 pt-16 md:-mt-16 md:pb-24 md:pt-24"
          style={{ backgroundColor: '#0f0404' }}
        >
        <style>{`
          .reveal {
            opacity: 0;
            will-change: transform, opacity;
            transition: opacity var(--reveal-duration, 0.7s) var(--reveal-easing, cubic-bezier(0.22, 1, 0.36, 1)) var(--reveal-delay, 0s),
                        transform var(--reveal-duration, 0.7s) var(--reveal-easing, cubic-bezier(0.22, 1, 0.36, 1)) var(--reveal-delay, 0s);
          }

          .reveal-up { transform: translateY(var(--reveal-y, 40px)); }
          .reveal-scale { transform: scale(var(--reveal-scale-val, 0.95)) translateY(var(--reveal-y, 0)); }
          .reveal-up.reveal-scale { transform: translateY(var(--reveal-y, 40px)) scale(var(--reveal-scale-val, 0.95)); }

          .reveal.is-visible,
          .is-visible .reveal {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          /* Card Base & Energy Effect */
          .reveal-card {
            position: relative;
            background-color: #1c0808;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
            z-index: 1;
          }

          .reveal-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, rgba(204, 34, 0, 0.12) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: -1;
          }

          .reveal-card:hover {
            transform: translateY(-8px) scale(1.01);
            border-color: rgba(204, 34, 0, 0.3);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(204, 34, 0, 0.1);
          }

          .reveal-card:hover::before { opacity: 1; }

          /* Micro-interactions */
          .valor-card:hover .valor-emoji {
            transform: rotate(8deg) scale(1.1);
          }
          .valor-card:hover .valor-title {
            color: #ff4422;
          }

          /* Layout */
          .mision-vision-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-bottom: 16px;
          }
          
          .eyebrow {
            font-size: 10px;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: #cc3300;
            margin-bottom: 8px;
            font-weight: 600;
          }
          
          .card-title {
            font-size: 22px;
            font-weight: bold;
            font-style: italic;
            color: #ffffff;
            margin-bottom: 12px;
          }
          
          .card-body {
            font-size: 14px;
            color: #999999;
            line-height: 1.6;
          }
          
          .valores-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            grid-column: 1 / -1;
          }
          
          .valor-emoji {
            font-size: 18px;
            margin-bottom: 6px;
            display: block;
            transition: transform 0.25s ease;
          }
          
          .valor-title {
            font-size: 11px;
            text-transform: uppercase;
            color: #e04020;
            font-weight: bold;
            margin-bottom: 6px;
            transition: color 0.25s ease;
          }
          
          .valor-desc {
            font-size: 10px;
            color: #777777;
            line-height: 1.5;
          }
          
          @media (max-width: 768px) {
            .mision-vision-grid {
              grid-template-columns: 1fr;
            }
            
            .valores-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (max-width: 480px) {
            .valores-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
        
          <div className="container mx-auto px-4">
          <div className="mision-vision-grid">
            <div 
              className="reveal-trigger reveal-card p-6 md:p-8 border-t-2 border-t-[#cc2200] reveal reveal-up reveal-scale"
              style={{ '--reveal-duration': '1s', '--reveal-y': '80px', '--reveal-scale-val': '0.96' }}
            >
              <div className="reveal reveal-up eyebrow" style={{ '--reveal-y': '10px', '--reveal-duration': '0.4s' }}>Propósito Fundamental</div>
              <h3 className="reveal reveal-up card-title" style={{ '--reveal-y': '30px', '--reveal-duration': '0.7s', '--reveal-delay': '0.1s' }}>Nuestra Misión</h3>
              <p className="reveal reveal-up card-body" style={{ '--reveal-y': '20px', '--reveal-duration': '0.8s', '--reveal-delay': '0.2s' }}>
                Promover el desarrollo integral de individuos y comunidades a través de programas innovadores que combinan arte, cultura y deporte. Nos comprometemos a crear espacios accesibles, inclusivos y transformadores donde cada persona pueda descubrir su potencial único y contribuir a una sociedad más justa y dinámica.
              </p>
            </div>
            
            <div 
              className="reveal-trigger reveal-card p-6 md:p-8 border-t-2 border-t-[#e05000] reveal reveal-up reveal-scale"
              style={{ 
                '--reveal-duration': '1s', 
                '--reveal-y': '80px', 
                '--reveal-scale-val': '0.96',
                '--reveal-delay': '0.2s' 
              }}
            >
              <div className="reveal reveal-up eyebrow" style={{ '--reveal-y': '10px', '--reveal-duration': '0.4s' }}>Horizonte Futuro</div>
              <h3 className="reveal reveal-up card-title" style={{ '--reveal-y': '30px', '--reveal-duration': '0.7s', '--reveal-delay': '0.1s' }}>Nuestra Visión</h3>
              <p className="reveal reveal-up card-body" style={{ '--reveal-y': '20px', '--reveal-duration': '0.8s', '--reveal-delay': '0.2s' }}>
                Ser una organización líder en la región, reconocida por la excelencia de nuestros programas, la calidad de nuestros profesionales y el impacto positivo que generamos en la vida de las personas. Aspiramos a ser un referente en la integración del arte, la cultura y el deporte como herramientas de transformación social y personal.
              </p>
            </div>
            
            <div className="reveal-trigger valores-grid">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="reveal-card valor-card p-4 md:p-5 reveal reveal-up reveal-scale"
                  style={{ 
                    '--reveal-delay': `${index * 0.1}s`,
                    '--reveal-duration': '0.6s',
                    '--reveal-y': '40px',
                    '--reveal-scale-val': '0.92',
                    borderTop: index % 2 === 0 ? '2px solid #cc2200' : '2px solid #e05000'
                  }}
                >
                  <span className="valor-emoji">{value.icon}</span>
                  <div className="valor-title">{value.title}</div>
                  <p className="valor-desc">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

        {/* CTA Section (animated background image) */}
        <section
          className="relative isolate z-30 -mt-12 w-screen overflow-hidden rounded-t-3xl py-16 text-white md:-mt-16 md:py-24"
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
                Únete a nuestra comunidad
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
                Si compartes nuestros valores y deseas ser parte de un movimiento transformador, te invitamos a conocer nuestros programas.
              </p>
              <a
                href="/bhqz-bosa/programas"
                className="inline-block rounded-lg px-8 py-3 font-semibold text-white bg-gradient-to-b from-red-700 via-red-800 to-red-900 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm"
              >
                Explorar programas
              </a>
            </div>
          </div>
        </section>
      </div>
    </Z7Layout>
    </>
  );
}
