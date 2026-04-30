import { useEffect, useMemo, useRef, useState } from 'react';
import BoldPaymentButton from './BoldPaymentButton.jsx';

const HERO_MENU_ITEMS = [
  { label: 'Nosotros', href: '/bhqz-bosa/nosotros' },
  { label: 'Programas', href: '/bhqz-bosa/programas' },
  { label: 'Galeria', href: '/bhqz-bosa/galeria' },
  { label: 'Inscripciones', href: '/bhqz-bosa/inscripciones' },
  { label: 'Contacto', href: '/bhqz-bosa/contacto' },
];

function splitHeadline(text) {
  return String(text)
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

// BHQZ Bosa - Hero Section Component
// Cinematic hero with immersive header, animated copy and subtle parallax

export default function HeroZ7({
  headline = 'Arte Cultura y Deporte',
  subheadline = 'Descubre nuestros programas y servicios deportivos',
  ctaText = 'Explorar programas',
  ctaLink = '/bhqz-bosa/programas',
  showHeader = true,
}) {
  const sectionRef = useRef(null);
  const revealRootRef = useRef(null);
  const parallaxRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headlineWords = useMemo(() => splitHeadline(headline), [headline]);

  useEffect(() => {
    const revealRootElement = revealRootRef.current;

    if (revealRootElement) {
      const delayedElements = revealRootElement.querySelectorAll('[data-delay]');

      delayedElements.forEach((element) => {
        const delay = Number(element.getAttribute('data-delay')) || 0;
        element.style.setProperty('--reveal-delay', `${delay}s`);
      });
    }

    const animationFrame = requestAnimationFrame(() => {
      setIsReady(true);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [headlineWords.length, subheadline, ctaText]);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;
    const sectionElement = sectionRef.current;

    if (!parallaxElement || !sectionElement) {
      return undefined;
    }

    let animationFrame = null;

    const updateParallax = () => {
      animationFrame = null;

      const sectionRect = sectionElement.getBoundingClientRect();
      const parallaxShift = clamp(sectionRect.top * -0.08, -12, 36);

      parallaxElement.style.setProperty(
        '--hero-parallax',
        `${parallaxShift.toFixed(2)}px`
      );
    };

    const requestUpdate = () => {
      if (animationFrame !== null) {
        return;
      }

      animationFrame = requestAnimationFrame(updateParallax);
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  return (
    <section
      ref={sectionRef}
      className={`hero-z7 relative w-screen overflow-hidden ${isReady ? 'is-ready' : ''} ${
        menuOpen ? 'menu-open' : ''
      }`}
      style={{
        minHeight: '100vh',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      <style>{`
        .hero-z7 {
          --hero-shell-border: rgba(255, 255, 255, 0.14);
          --hero-shell-surface: rgba(7, 8, 12, 0.28);
          --hero-shell-shadow: 0 24px 72px rgba(0, 0, 0, 0.24);
          --hero-accent-start: #ef4444;
          --hero-accent-mid: #f97316;
          --hero-accent-end: #fb7185;
        }

        .hero-z7 .reveal {
          opacity: 0;
          transform: translate3d(var(--reveal-x, 0), var(--reveal-y, 0), 0)
            scale(var(--reveal-scale, 1))
            rotate(var(--reveal-rotate, 0deg));
          transition-property: transform, opacity;
          transition-duration: var(--reveal-duration, 0.7s);
          transition-timing-function: var(
            --reveal-easing,
            cubic-bezier(0.22, 1, 0.36, 1)
          );
          transition-delay: var(--reveal-delay, 0s);
          will-change: transform, opacity;
        }

        .hero-z7.is-ready .reveal {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
        }

        .hero-z7 .reveal-up {
          --reveal-y: 40px;
        }

        .hero-z7 .reveal-scale {
          --reveal-scale: 0.9;
        }

        .hero-z7 .reveal-delay {
          transition-delay: var(--reveal-delay, 0s);
        }

        .hero-z7-parallax {
          transform: translate3d(0, var(--hero-parallax, 0px), 0);
          will-change: transform;
        }

        .hero-z7-bg {
          transform: scale(1.08);
          transition: transform 2.5s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .hero-z7.is-ready .hero-z7-bg {
          transform: scale(1);
        }

        .hero-shell {
          background:
            linear-gradient(135deg, rgba(17, 24, 39, 0.68), rgba(17, 24, 39, 0.3)),
            var(--hero-shell-surface);
          border: 1px solid var(--hero-shell-border);
          box-shadow: var(--hero-shell-shadow);
        }

        .hero-brand,
        .hero-bosa-mark {
          transition: transform 0.28s ease;
          will-change: transform;
        }

        .hero-brand:hover,
        .hero-bosa-mark:hover {
          transform: scale(1.05);
        }

        .hero-menu-button {
          transition: transform 0.25s ease, border-color 0.25s ease;
          will-change: transform;
        }

        .hero-menu-button:hover {
          transform: scale(1.04);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .hero-menu-line {
          transform-origin: center;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .hero-z7.menu-open .hero-menu-line--top {
          transform: translate3d(0, 8px, 0) rotate(45deg);
        }

        .hero-z7.menu-open .hero-menu-line--middle {
          opacity: 0;
        }

        .hero-z7.menu-open .hero-menu-line--bottom {
          transform: translate3d(0, -8px, 0) rotate(-45deg);
        }

        .hero-menu-overlay {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }

        .hero-menu-overlay.is-open {
          opacity: 1;
          pointer-events: auto;
        }

        .hero-menu-panel {
          opacity: 0;
          transform: translate3d(0, -24px, 0) scale(0.98);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease;
          will-change: transform, opacity;
        }

        .hero-menu-overlay.is-open .hero-menu-panel {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        .hero-word-clip {
          display: inline-flex;
          overflow: hidden;
          margin-right: 0.18em;
          vertical-align: top;
        }

        .hero-word {
          display: inline-flex;
        }

        .hero-cta {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          will-change: transform;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
        }

        .hero-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.28);
        }
      `}</style>

      <div ref={revealRootRef} className="relative isolate min-h-screen">
        <div
          ref={parallaxRef}
          className="hero-z7-parallax absolute inset-0 z-0"
          aria-hidden="true"
        >
          <div
            className="hero-z7-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/multimedia/BHQZ/fondo.webp)' }}
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-[linear-gradient(110deg,rgba(3,7,18,0.86)_0%,rgba(3,7,18,0.58)_38%,rgba(3,7,18,0.34)_65%,rgba(3,7,18,0.68)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.22),transparent_32%),radial-gradient(circle_at_left_center,rgba(239,68,68,0.18),transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.46))]"
        />

        {showHeader && (
          <>
            <header className="fixed inset-x-0 top-0 z-[70] px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="hero-shell grid grid-cols-[auto_1fr_auto_auto] items-center gap-2 rounded-full px-3 py-2.5 sm:gap-4 sm:px-5 sm:py-3">
                  <a
                    href="/bhqz-bosa"
                    className="hero-brand reveal reveal-delay flex items-center justify-center rounded-2xl"
                    data-delay="0.04"
                    style={{ '--reveal-y': '-20px', '--reveal-duration': '0.6s' }}
                    aria-label="Ir al inicio de BHQZ"
                  >
                    <img
                      src="/multimedia/BHQZ/logo.webp"
                      alt="BHQZ Logo"
                      className="h-11 w-auto object-contain sm:h-14 lg:h-16"
                    />
                  </a>

                  <div className="flex justify-center px-1">
                    <BoldPaymentButton
                      amount={50000}
                      productName="Membresia BHQZ"
                      className="reveal reveal-scale reveal-delay min-w-[10.5rem] sm:min-w-[12rem]"
                      data-delay="0.12"
                      style={{
                        '--reveal-scale': '0.9',
                        '--reveal-duration': '0.72s',
                        '--reveal-easing': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    className="hero-menu-button reveal reveal-delay flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white sm:h-12 sm:w-12"
                    data-delay="0.18"
                    style={{
                      '--reveal-y': '-16px',
                      '--reveal-rotate': '5deg',
                      '--reveal-duration': '0.64s',
                    }}
                    onClick={() => setMenuOpen((previousValue) => !previousValue)}
                    aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
                    aria-expanded={menuOpen}
                  >
                    <span className="flex h-5 w-5 flex-col items-center justify-between">
                      <span className="hero-menu-line hero-menu-line--top h-0.5 w-5 rounded-full bg-white" />
                      <span className="hero-menu-line hero-menu-line--middle h-0.5 w-5 rounded-full bg-white" />
                      <span className="hero-menu-line hero-menu-line--bottom h-0.5 w-5 rounded-full bg-white" />
                    </span>
                  </button>

                  <a
                    href="/bhqz-bosa"
                    className="hero-bosa-mark reveal reveal-delay flex items-center justify-center rounded-2xl"
                    data-delay="0.22"
                    style={{ '--reveal-y': '-20px', '--reveal-duration': '0.6s' }}
                    aria-label="Ir al inicio de BHQZ Bosa"
                  >
                    <img
                      src="/multimedia/BHQZ/bosaazul.webp"
                      alt="BHQZ Bosa"
                      className="h-11 w-auto object-contain sm:h-14 lg:h-16"
                    />
                  </a>
                </div>
              </div>
            </header>

            <div
              className={`hero-menu-overlay fixed inset-0 z-[80] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 ${
                menuOpen ? 'is-open' : ''
              }`}
              aria-hidden={!menuOpen}
            >
              <button
                type="button"
                className="absolute inset-0 bg-black/68 backdrop-blur-xl"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menu"
              />

              <div className="hero-menu-panel relative mx-auto flex min-h-[18rem] max-w-5xl flex-col justify-between rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,0.96),rgba(17,24,39,0.84))] p-6 text-white shadow-[0_30px_90px_rgba(0,0,0,0.4)] sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-300/80">
                      BHQZ Bosa
                    </div>
                    <div className="mt-2 max-w-lg text-2xl font-bold sm:text-3xl">
                      Navega la experiencia y descubre la energia de nuestra comunidad.
                    </div>
                  </div>

                  <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm uppercase tracking-[0.2em] text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    X
                  </button>
                </div>

                <nav className="mt-10 grid gap-4 sm:grid-cols-2">
                  {HERO_MENU_ITEMS.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-base font-semibold text-white transition-transform duration-300 hover:scale-[1.01] hover:border-white/20 hover:bg-white/[0.08] sm:px-5 sm:text-lg"
                      style={{ transitionDelay: `${index * 40}ms` }}
                    >
                      <span>{item.label}</span>
                      <span className="text-xl text-white/50 transition-transform duration-300 group-hover:translate-x-1">
                        +
                      </span>
                    </a>
                  ))}
                </nav>

                <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xl text-sm leading-relaxed text-white/70">
                    Arte, cultura y deporte conectados en una experiencia formativa con identidad propia.
                  </p>
                  <a
                    href={ctaLink}
                    onClick={() => setMenuOpen(false)}
                    className="hero-cta inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
                  >
                    {ctaText}
                  </a>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="relative z-20 flex min-h-screen items-end">
          <div className="mx-auto flex w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
            <div className="max-w-4xl text-white">
              <h1 className="z7-hero-title text-4xl font-normal leading-[0.9] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
                {headlineWords.map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className="hero-word-clip"
                  >
                    <span
                      className="hero-word reveal reveal-delay"
                      data-delay={(0.18 + index * 0.08).toFixed(2)}
                      style={{
                        '--reveal-y': '60px',
                        '--reveal-duration': '0.9s',
                        '--reveal-easing': 'cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </h1>

              <p
                className="reveal reveal-delay mt-6 max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg md:mt-8 md:text-xl font-normal"
                data-delay="0.58"
                style={{
                  '--reveal-y': '30px',
                  '--reveal-duration': '0.8s',
                }}
              >
                {subheadline}
              </p>

              <div className="mt-8 md:mt-10">
                <a
                  href={ctaLink}
                  className="hero-cta reveal reveal-scale reveal-delay inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 sm:px-9 sm:py-4"
                  data-delay="0.78"
                  style={{
                    '--reveal-scale': '0.85',
                    '--reveal-duration': '0.75s',
                    '--reveal-easing': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  {ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
