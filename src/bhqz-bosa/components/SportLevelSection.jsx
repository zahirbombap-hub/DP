import { useEffect, useRef } from 'react';

const SECTION_STYLES = `
  .z7-sport-level {
    --color-accent: #cc2200;
    --color-bg-dark: #1a0404;
    --color-bg-mid: #4a0a0a;
    --z7-split-ease-reveal: cubic-bezier(0.76, 0, 0.24, 1);
    --z7-split-ease-copy: cubic-bezier(0.22, 1, 0.36, 1);
    --z7-split-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    overflow: hidden;
    background: #000;
  }

  .z7-sport-level *,
  .z7-sport-level *::before,
  .z7-sport-level *::after {
    box-sizing: border-box;
  }

  .z7-sport-level__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    min-height: 420px;
    width: 100%;
  }

  .z7-sport-level__media,
  .z7-sport-level__panel {
    position: relative;
    min-width: 0;
  }

  .z7-sport-level__media {
    overflow: hidden;
    clip-path: inset(0 0 0 100%);
    background: #090909;
    will-change: transform, opacity, clip-path;
    transition: clip-path 900ms var(--z7-split-ease-reveal);
  }

  .z7-sport-level__media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    will-change: transform, opacity;
    transform: scale(1);
  }

  .z7-sport-level__panel {
    display: flex;
    align-items: center;
    padding: 48px 52px;
    color: #fff;
    background: linear-gradient(160deg, var(--color-bg-mid) 0%, var(--color-bg-dark) 100%);
    isolation: isolate;
    --mx: 50%;
    --my: 50%;
  }

  .z7-sport-level__panel::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background: radial-gradient(circle 300px at var(--mx) var(--my), rgba(204, 34, 0, 0.07), transparent 70%);
  }

  .z7-sport-level__content {
    position: relative;
    z-index: 1;
    max-width: 560px;
  }

  .z7-sport-level__accent {
    width: 0;
    height: 3px;
    margin-bottom: 18px;
    border-radius: 999px;
    background: var(--color-accent);
    will-change: transform, opacity, width;
    transition: width 400ms ease-out 100ms;
  }

  .z7-sport-level__title {
    margin: 0 0 18px;
    color: #fff;
    font-family: var(--z7-font-display, inherit);
    font-size: 32px;
    line-height: 1.08;
    font-weight: 800;
    font-style: italic;
    letter-spacing: -0.02em;
  }

  .z7-sport-level__title-line {
    display: block;
    opacity: 0;
    transform: translateX(-30px);
    will-change: transform, opacity;
    transition:
      transform 600ms var(--z7-split-ease-copy),
      opacity 600ms var(--z7-split-ease-copy);
  }

  .z7-sport-level__title-line--1 {
    transition-delay: 200ms;
  }

  .z7-sport-level__title-line--2 {
    transition-delay: 380ms;
  }

  .z7-sport-level__copy {
    margin: 0 0 26px;
    color: rgba(255, 255, 255, 0.92);
    font-family: var(--z7-font-body, inherit);
    font-size: 14px;
    line-height: 1.7;
    opacity: 0;
    transform: translateY(20px);
    will-change: transform, opacity;
    transition:
      transform 500ms ease-out 540ms,
      opacity 500ms ease-out 540ms;
  }

  .z7-sport-level__list {
    list-style: none;
    margin: 0 0 32px;
    padding: 0;
  }

  .z7-sport-level__list-item {
    position: relative;
    display: block;
    padding-left: 22px;
    color: rgba(255, 255, 255, 0.98);
    font-family: var(--z7-font-body, inherit);
    font-size: 14px;
    line-height: 1.7;
    opacity: 0;
    transform: translateX(-20px);
    will-change: transform, opacity;
    transition:
      transform 450ms ease-out var(--item-delay),
      opacity 450ms ease-out var(--item-delay);
  }

  .z7-sport-level__list-item + .z7-sport-level__list-item {
    margin-top: 12px;
  }

  .z7-sport-level__list-item::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.82em;
    width: 12px;
    height: 3px;
    border-radius: 999px;
    background: var(--color-accent);
    transform: translateY(-50%) scale(0);
    transform-origin: left center;
    opacity: 0;
    will-change: transform, opacity;
    transition:
      transform 320ms ease-out calc(var(--item-delay) + 80ms),
      opacity 320ms ease-out calc(var(--item-delay) + 80ms);
  }

  .z7-sport-level__cta {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 28px;
    border: 0;
    border-radius: 6px;
    background: var(--color-accent);
    color: #fff;
    font-family: var(--z7-font-body, inherit);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;
    opacity: 0;
    transform: scale(0.92);
    will-change: transform, opacity;
    transition:
      background-color 250ms ease,
      transform 250ms ease,
      box-shadow 250ms ease;
    -webkit-tap-highlight-color: transparent;
  }

  .z7-sport-level__cta-label {
    position: relative;
    z-index: 2;
  }

  .z7-sport-level__cta:hover {
    background: #ff3300;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(204, 34, 0, 0.4);
  }

  .z7-sport-level__cta:active {
    transform: scale(0.97);
  }

  .z7-sport-level__cta:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.9);
    outline-offset: 3px;
  }

  .z7-sport-level__ripple {
    position: absolute;
    left: var(--rx);
    top: var(--ry);
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.28);
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 1;
    animation: z7SportLevelRipple 500ms ease-out forwards;
  }

  .z7-sport-level.is-visible .z7-sport-level__media {
    clip-path: inset(0 0 0 0%);
  }

  .z7-sport-level.is-visible .z7-sport-level__media img {
    animation: z7SportLevelKenBurns 8000ms linear 900ms infinite alternate;
  }

  .z7-sport-level.is-visible .z7-sport-level__accent {
    width: 40px;
  }

  .z7-sport-level.is-visible .z7-sport-level__title-line,
  .z7-sport-level.is-visible .z7-sport-level__copy,
  .z7-sport-level.is-visible .z7-sport-level__list-item {
    opacity: 1;
    transform: translate(0, 0);
  }

  .z7-sport-level.is-visible .z7-sport-level__list-item::before {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }

  .z7-sport-level.is-visible .z7-sport-level__cta {
    animation: z7SportLevelCtaIn 400ms var(--z7-split-ease-bounce) 1180ms forwards;
  }

  @keyframes z7SportLevelKenBurns {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.04);
    }
  }

  @keyframes z7SportLevelCtaIn {
    0% {
      opacity: 0;
      transform: scale(0.92);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes z7SportLevelRipple {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .z7-sport-level__grid {
      grid-template-columns: minmax(0, 0.45fr) minmax(0, 0.55fr);
    }

    .z7-sport-level__panel {
      padding: 42px 40px;
    }
  }

  @media (max-width: 767.98px) {
    .z7-sport-level__grid {
      grid-template-columns: 1fr;
      min-height: 420px;
    }

    .z7-sport-level__media {
      display: none;
    }

    .z7-sport-level__panel {
      min-height: 420px;
      padding: 36px 24px 38px;
    }

    .z7-sport-level__content {
      max-width: none;
      width: 100%;
    }

    .z7-sport-level__title {
      font-size: 28px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .z7-sport-level *,
    .z7-sport-level *::before,
    .z7-sport-level *::after {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }

    .z7-sport-level__media {
      clip-path: inset(0 0 0 0) !important;
    }

    .z7-sport-level__accent {
      width: 40px !important;
    }

    .z7-sport-level__title-line,
    .z7-sport-level__copy,
    .z7-sport-level__list-item,
    .z7-sport-level__list-item::before,
    .z7-sport-level__cta {
      opacity: 1 !important;
      transform: none !important;
    }
  }
`;

export default function SportLevelSection() {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);
  const navigationTimerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const button = buttonRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer = null;

    if (!section) {
      return undefined;
    }

    const activateSection = () => {
      section.classList.add('is-visible');
    };

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      activateSection();
    } else {
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activateSection();
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(section);
    }

    const handleMouseMove = (event) => {
      if (!panel) return;
      const rect = panel.getBoundingClientRect();
      panel.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      panel.style.setProperty('--my', `${event.clientY - rect.top}px`);
    };

    const handleMouseLeave = () => {
      if (!panel) return;
      panel.style.setProperty('--mx', '50%');
      panel.style.setProperty('--my', '50%');
    };

    const handleButtonClick = (event) => {
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'z7-sport-level__ripple';
      ripple.style.setProperty('--rx', `${event.clientX - rect.left}px`);
      ripple.style.setProperty('--ry', `${event.clientY - rect.top}px`);
      button.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });

      if (navigationTimerRef.current) {
        clearTimeout(navigationTimerRef.current);
      }

      navigationTimerRef.current = setTimeout(() => {
        window.location.href = '/bhqz-bosa/programas';
      }, 220);
    };

    if (panel && !reducedMotion.matches) {
      panel.addEventListener('mousemove', handleMouseMove);
      panel.addEventListener('mouseleave', handleMouseLeave);
    }

    if (button) {
      button.addEventListener('click', handleButtonClick);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }

      if (panel) {
        panel.removeEventListener('mousemove', handleMouseMove);
        panel.removeEventListener('mouseleave', handleMouseLeave);
      }

      if (button) {
        button.removeEventListener('click', handleButtonClick);
      }

      if (navigationTimerRef.current) {
        clearTimeout(navigationTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{SECTION_STYLES}</style>
      <section ref={sectionRef} className="z7-sport-level" aria-labelledby="z7-sport-level-title">
        <div className="z7-sport-level__grid">
          <figure className="z7-sport-level__media" aria-hidden="true">
            <img
              src="/multimedia/BHQZ/fotos/foto1.webp"
              alt="Jugador destacado de BHQZ"
            />
          </figure>

          <div ref={panelRef} className="z7-sport-level__panel">
            <div className="z7-sport-level__content">
              <div className="z7-sport-level__accent" aria-hidden="true" />

              <h2 id="z7-sport-level-title" className="z7-sport-level__title">
                <span className="z7-sport-level__title-line z7-sport-level__title-line--1">
                  Tu deporte,
                </span>
                <span className="z7-sport-level__title-line z7-sport-level__title-line--2">
                  al siguiente nivel
                </span>
              </h2>

              <p className="z7-sport-level__copy">
                Encuentros, entrenamientos y asesorias profesionales disenados para llevarte
                mas lejos, sin importar tu nivel.
              </p>

              <ul className="z7-sport-level__list">
                <li className="z7-sport-level__list-item" style={{ '--item-delay': '680ms' }}>
                  Entrenamientos personalizados
                </li>
                <li className="z7-sport-level__list-item" style={{ '--item-delay': '800ms' }}>
                  Acompanamiento y asesoria profesional
                </li>
                <li className="z7-sport-level__list-item" style={{ '--item-delay': '920ms' }}>
                  Competencias y eventos deportivos
                </li>
                <li className="z7-sport-level__list-item" style={{ '--item-delay': '1040ms' }}>
                  Actividades culturales y comunitarias
                </li>
              </ul>

              <button ref={buttonRef} type="button" className="z7-sport-level__cta">
                <span className="z7-sport-level__cta-label">Ver todos los programas</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
