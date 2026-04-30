import { useEffect, useRef } from 'react';

import { Seo } from '../../components/Seo.jsx';
import { Z7Layout, HeroSection, CtaCarouselSection } from '../components/index.jsx';

const CONTACT_SHOWCASE_ITEMS = [
  {
    key: 'location',
    icon: 'location',
    tone: 'red',
    title: 'Ubicacion',
    content: 'Calle Principal 123, Ciudad, CP 1234',
  },
  {
    key: 'phone',
    icon: 'phone',
    tone: 'red',
    title: 'Telefono',
    content: '+54 (11) 1234-5678',
    href: 'tel:+541112345678',
  },
  {
    key: 'email',
    icon: 'email',
    tone: 'blue',
    title: 'Email',
    content: 'info@z7sport.com',
    href: 'mailto:info@z7sport.com',
  },
  {
    key: 'web',
    icon: 'web',
    tone: 'cyan',
    title: 'Web',
    content: 'www.z7sport.com',
    href: 'https://www.z7sport.com',
  },
];

const ATTENTION_HOURS = [
  { day: 'Lunes a Viernes', time: '9:00 AM - 7:00 PM' },
  { day: 'Sabado', time: '10:00 AM - 5:00 PM' },
  { day: 'Domingo', time: 'Cerrado', closed: true },
];

const SOCIAL_BUTTONS = [
  {
    key: 'facebook',
    label: 'Facebook',
    href: 'https://facebook.com/bhqzbosa',
    delay: '140ms',
    meta: 'facebook.com/bhqzbosa',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/bhqzbosa',
    delay: '240ms',
    meta: '@bhqzbosa',
  },
  {
    key: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com/bhqzbosa',
    delay: '340ms',
    meta: 'youtube.com/bhqzbosa',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/bhqzbosa',
    delay: '440ms',
    meta: 'linkedin.com/company/bhqzbosa',
  },
];

function ContactShowcaseIcon({ icon, tone }) {
  const toneClass = {
    red: 'contact-showcase__icon--red',
    blue: 'contact-showcase__icon--blue',
    cyan: 'contact-showcase__icon--cyan',
  }[tone];

  switch (icon) {
    case 'location':
      return (
        <svg
          aria-hidden="true"
          className={`contact-showcase__icon ${toneClass}`}
          viewBox="0 0 48 48"
        >
          <path
            d="M24 43c7.5-8.2 11.2-14.2 11.2-20.1C35.2 15 30.1 10 24 10S12.8 15 12.8 22.9C12.8 28.8 16.5 34.8 24 43Z"
            fill="currentColor"
          />
          <circle cx="24" cy="22" fill="#0f0a1a" r="5.2" />
        </svg>
      );
    case 'phone':
      return (
        <svg
          aria-hidden="true"
          className={`contact-showcase__icon ${toneClass}`}
          viewBox="0 0 48 48"
        >
          <path
            d="M15.8 12.5c1.1-1.1 2.8-1.2 4-.3l4.2 3.1c1.2.9 1.6 2.5 1 3.8l-1.6 3.4c2.8 4.2 6.1 7.5 10.3 10.3l3.4-1.6c1.3-.6 2.9-.2 3.8 1l3.1 4.2c.9 1.2.8 2.9-.3 4-1.9 1.9-4.8 2.5-7.4 1.5-6.7-2.6-12.7-7.2-17.3-13.3C13.3 24.1 11 18.1 10.5 14c-.2-1.7.4-3.3 1.5-4.5l3.8 3Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'email':
      return (
        <svg
          aria-hidden="true"
          className={`contact-showcase__icon ${toneClass}`}
          viewBox="0 0 48 48"
        >
          <rect fill="currentColor" height="24" rx="5.5" width="34" x="7" y="12" />
          <path
            d="M10 16.5 24 27l14-10.5"
            fill="none"
            stroke="#0f0a1a"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </svg>
      );
    case 'web':
      return (
        <svg
          aria-hidden="true"
          className={`contact-showcase__icon ${toneClass}`}
          viewBox="0 0 48 48"
        >
          <circle cx="24" cy="24" fill="none" r="14" stroke="currentColor" strokeWidth="3" />
          <path
            d="M10 24h28M24 10c4.7 5.2 7 9.9 7 14s-2.3 8.8-7 14m0-28c-4.7 5.2-7 9.9-7 14s2.3 8.8 7 14"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </svg>
      );
    default:
      return null;
  }
}

function SocialIcon({ icon }) {
  switch (icon) {
    case 'facebook':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="M13.5 21v-7h2.4l.36-2.74H13.5V9.52c0-.8.22-1.34 1.37-1.34h1.46V5.72c-.7-.12-1.4-.18-2.1-.18-2.08 0-3.52 1.27-3.52 3.6v2.12H8.33V14h2.38v7h2.79Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'instagram':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.9A2.6 2.6 0 0 0 4.9 7.5v9a2.6 2.6 0 0 0 2.6 2.6h9a2.6 2.6 0 0 0 2.6-2.6v-9a2.6 2.6 0 0 0-2.6-2.6h-9Zm9.62 1.48a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16ZM12 7.62A4.38 4.38 0 1 1 7.62 12 4.38 4.38 0 0 1 12 7.62Zm0 1.9A2.48 2.48 0 1 0 14.48 12 2.49 2.49 0 0 0 12 9.52Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'youtube':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="M20.62 7.34a2.78 2.78 0 0 0-1.96-1.96C16.93 4.9 12 4.9 12 4.9s-4.93 0-6.66.48A2.78 2.78 0 0 0 3.38 7.34C2.9 9.07 2.9 12 2.9 12s0 2.93.48 4.66a2.78 2.78 0 0 0 1.96 1.96c1.73.48 6.66.48 6.66.48s4.93 0 6.66-.48a2.78 2.78 0 0 0 1.96-1.96c.48-1.73.48-4.66.48-4.66s0-2.93-.48-4.66ZM10.42 15.3V8.7L15.92 12l-5.5 3.3Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'linkedin':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="M6.28 8.1A1.6 1.6 0 1 1 6.3 4.9a1.6 1.6 0 0 1-.02 3.2ZM4.95 9.6h2.66V19H4.95V9.6Zm4.33 0h2.55v1.28h.04c.35-.67 1.22-1.38 2.5-1.38 2.67 0 3.16 1.76 3.16 4.04V19h-2.66v-4.03c0-.96-.02-2.2-1.34-2.2-1.34 0-1.55 1.05-1.55 2.13V19H9.28V9.6Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Contacto() {
  const showcaseRef = useRef(null);
  const quickLinksRef = useRef(null);
  const socialSectionRef = useRef(null);

  useEffect(() => {
    const showcaseElement = showcaseRef.current;

    if (!showcaseElement) {
      return undefined;
    }

    const observedElements = [
      showcaseElement,
      ...showcaseElement.querySelectorAll('[data-reveal-group]'),
    ];

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotionQuery.matches || !('IntersectionObserver' in window)) {
      observedElements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    observedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Visibility observer for quick-links with robust mount check
  useEffect(() => {
    const element = quickLinksRef.current;
    if (!element) return;

    const setupObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: '50px' }
      );
      observer.observe(element);
      return observer;
    };

    const observer = setupObserver();
    
    // Fallback: Si después de 2.5s no se ha activado, forzar visibilidad
    const timeout = setTimeout(() => element.classList.add('is-visible'), 2500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const element = socialSectionRef.current;

    if (!element) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotionQuery.matches || !('IntersectionObserver' in window)) {
      element.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleRipple = (e) => {
    const card = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'quick-link-ripple';
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    card.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 500);
  };

  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.156!2d-74.2!3d4.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f0000000000001%3A0x0!2zNzMgU3VyIDczIFR2LiA4OGIsIEJvc2HDoSwgQm9nb3TDoQ!5e0!3m2!1sen!2sco!4v1708801234567';

  const quickLinks = [
    {
      icon: '📚',
      title: 'Nuestros Programas',
      description: 'Descubre todos nuestros cursos y actividades disponibles.',
      href: '/bhqz-bosa/programas',
    },
    {
      icon: 'ℹ️',
      title: 'Sobre Nosotros',
      description: 'Conoce quienes somos y cual es nuestra mision.',
      href: '/bhqz-bosa/nosotros',
    },
    {
      icon: '📝',
      title: 'Inscribirse',
      description: 'Completa el formulario para unirte a nuestra comunidad.',
      href: '/bhqz-bosa/inscripciones',
    },
  ];

  return (
    <>
      <Seo />
      <Z7Layout>
        <style>{`
          :root {
            --contact-accent: #cc2200;
            --contact-bg: #0a0404;
            --contact-card: #0f0a1a;
            --contact-border: rgba(255, 255, 255, 0.08);
            --contact-text: #ffffff;
            --contact-muted: #888888;
            --contact-grid: rgba(255, 255, 255, 0.03);
            --contact-ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
            --contact-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          /* Quick Links - Senior Motion Design */
          .quick-links {
            background: var(--contact-bg);
            position: relative;
            min-height: 300px;
            isolation: isolate;
          }
          
          .quick-links__pill {
            display: block;
            width: fit-content;
            margin: 0 auto 32px;
            background: var(--contact-card);
            border: 1.5px solid rgba(255, 255, 255, 0.15);
            border-radius: 30px;
            padding: 10px 28px;
            color: #fff;
            font-size: 18px;
            font-weight: 800;
            font-style: italic;
            text-align: center;
            opacity: 0;
            transform: scale(0.85);
            transition: opacity 500ms var(--contact-ease-bounce), transform 500ms var(--contact-ease-bounce);
            will-change: transform, opacity;
            z-index: 10;
          }
          
          .is-visible .quick-links__pill {
            opacity: 1;
            transform: scale(1);
            animation: contact-pill-glow 3s alternate infinite;
          }

          .quick-links__grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            max-width: 900px;
            margin: 32px auto 0;
            z-index: 10;
          }

          .quick-link-card {
            position: relative;
            display: block;
            text-decoration: none;
            background: var(--contact-card);
            border-radius: 14px;
            border: 1px solid var(--contact-border);
            padding: 28px 24px;
            cursor: pointer;
            overflow: hidden;
            opacity: 0;
            transform: translateY(36px) scale(0.95);
            transition: 
              opacity 650ms var(--contact-ease-smooth),
              transform 650ms var(--contact-ease-smooth),
              border-color 250ms ease,
              box-shadow 250ms ease;
            will-change: transform, opacity;
            transition-delay: var(--card-delay, 0ms);
          }

          .quick-link-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background-color: var(--contact-accent);
            transform: translateX(-50%);
            transition: width 300ms ease;
          }

          .quick-link-card:hover {
            transform: translateY(-8px);
            border-color: rgba(204, 34, 0, 0.45);
            box-shadow: 0 16px 40px rgba(204, 34, 0, 0.15);
          }

          .quick-link-card:hover::before { width: 100%; }

          .quick-link-card:active {
            transform: translateY(-8px) scale(0.98);
            transition: transform 100ms ease;
          }

          .quick-link-ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(204, 34, 0, 0.15);
            transform: translate(-50%, -50%) scale(0);
            pointer-events: none;
            width: 400px;
            height: 400px;
            animation: rippleEffect 500ms ease-out forwards;
          }

          @keyframes rippleEffect {
            to { transform: translate(-50%, -50%) scale(1); opacity: 0; }
          }

          .quick-link-icon-box {
            width: 44px;
            height: 44px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--contact-border);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            opacity: 0; /* Added for consistency with other hidden elements */
            transform: scale(0) rotate(-20deg);
            transition: opacity 500ms var(--contact-ease-bounce), transform 500ms var(--contact-ease-bounce), background 250ms ease, border-color 250ms ease;
            will-change: transform, opacity;
            transition-delay: var(--icon-delay, 0ms);
          }

          .quick-link-card:hover .quick-link-icon-box {
            background: rgba(204, 34, 0, 0.12);
            border-color: rgba(204, 34, 0, 0.3);
            transform: scale(1.15) rotate(-5deg);
          }

          .quick-link-title {
            color: #ffffff;
            font-size: 14px;
            font-weight: 700;
            font-style: italic;
            margin-top: 14px;
            opacity: 0;
            transform: translateX(-12px);
            transition: opacity 400ms ease-out, transform 400ms ease-out, color 200ms ease;
            will-change: transform, opacity;
            transition-delay: var(--title-delay, 0ms);
          }

          .quick-link-card:hover .quick-link-title { color: var(--contact-accent); }

          .quick-link-desc {
            color: var(--contact-muted);
            font-size: 12px;
            line-height: 1.6;
            margin-top: 6px;
            opacity: 0;
            transform: translateY(8px);
            transition: opacity 350ms ease-out, transform 350ms ease-out;
            will-change: transform, opacity;
            transition-delay: var(--desc-delay, 0ms);
          }

          .quick-link-arrow {
            position: absolute;
            bottom: 16px;
            right: 16px;
            color: var(--contact-accent);
            font-size: 16px;
            opacity: 0;
            transform: translateX(-8px);
            transition: opacity 250ms ease, transform 250ms ease;
          }

          .quick-link-card:hover .quick-link-arrow { opacity: 1; transform: translateX(0); }

          .is-visible .quick-link-card { opacity: 1; transform: translateY(0) scale(1); }
          .is-visible .quick-link-icon-box { opacity: 1; transform: scale(1) rotate(0deg); }
          .is-visible .quick-link-title { opacity: 1; transform: translateX(0); }
          .is-visible .quick-link-desc { opacity: 1; transform: translateY(0); }

          .bhqz-social-showcase {
            position: relative;
            overflow: hidden;
            background:
              radial-gradient(circle at top, rgba(64, 64, 204, 0.08), transparent 28%),
              var(--contact-bg);
            padding: 72px 20px 88px;
          }

          .bhqz-social-showcase__shell {
            max-width: 1040px;
            margin: 0 auto;
          }

          .bhqz-social-showcase__title {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0 10px;
            margin: 0;
            color: #ffffff;
            font-size: 26px;
            font-weight: 800;
            font-style: italic;
            line-height: 1.08;
            text-align: center;
          }

          .bhqz-social-showcase__word {
            display: inline-block;
            clip-path: inset(0 100% 0 0);
            will-change: clip-path;
            transition: clip-path 500ms cubic-bezier(0.76, 0, 0.24, 1) var(--word-delay);
          }

          .bhqz-social-showcase__subtitle {
            max-width: 560px;
            margin: 14px auto 0;
            color: rgba(255, 255, 255, 0.72);
            font-size: 14px;
            line-height: 1.7;
            text-align: center;
            opacity: 0;
            transform: translateY(16px);
            will-change: transform, opacity;
            transition:
              opacity 550ms var(--contact-ease-smooth) 120ms,
              transform 550ms var(--contact-ease-smooth) 120ms;
          }

          .bhqz-social-showcase__panel {
            position: relative;
            overflow: hidden;
            margin-top: 34px;
            padding: 28px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 32px;
            background:
              linear-gradient(155deg, rgba(17, 10, 28, 0.98), rgba(10, 4, 4, 0.98)),
              #0f0a1a;
            box-shadow:
              0 26px 70px rgba(10, 4, 4, 0.25),
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
            opacity: 0;
            transform: translateY(30px) scale(0.97);
            will-change: transform, opacity;
            transition:
              opacity 800ms var(--contact-ease-smooth) 140ms,
              transform 800ms var(--contact-ease-smooth) 140ms;
          }

          .bhqz-social-showcase__panel::before {
            content: '';
            position: absolute;
            inset: auto auto -20% -10%;
            width: 260px;
            height: 260px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(64, 64, 204, 0.36), transparent 68%);
            filter: blur(10px);
            pointer-events: none;
          }

          .bhqz-social-showcase__panel::after {
            content: '';
            position: absolute;
            inset: 0;
            background:
              linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.06), transparent),
              linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: auto, 72px 72px, 72px 72px;
            opacity: 0.35;
            pointer-events: none;
          }

          .bhqz-social-showcase__grid {
            position: relative;
            z-index: 1;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 16px;
          }

          .bhqz-social-showcase__link {
            position: relative;
            display: block;
            padding: 22px 18px 18px;
            border: 1px solid rgba(255, 255, 255, 0.09);
            border-radius: 24px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.025));
            color: #ffffff;
            text-align: center;
            text-decoration: none;
            box-shadow: 0 16px 30px rgba(0, 0, 0, 0);
            opacity: 0;
            transform: translateY(28px) scale(0.94);
            will-change: transform, opacity;
            transition:
              transform 280ms ease,
              border-color 280ms ease,
              box-shadow 280ms ease,
              background-color 280ms ease;
          }

          .bhqz-social-showcase__link::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            border: 1px solid rgba(64, 64, 204, 0);
            transition: border-color 280ms ease;
          }

          .bhqz-social-showcase__icon-shell {
            position: relative;
            display: grid;
            place-items: center;
            width: 78px;
            height: 78px;
            margin: 0 auto 16px;
            border-radius: 24px;
            background:
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0) 48%),
              linear-gradient(145deg, rgba(90, 96, 255, 0.98), rgba(64, 64, 204, 0.88));
            box-shadow:
              0 16px 32px rgba(64, 64, 204, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.22);
            transition:
              transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 320ms ease;
          }

          .bhqz-social-showcase__icon-shell::before {
            content: '';
            position: absolute;
            inset: 10px;
            border-radius: 18px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            opacity: 0.9;
          }

          .bhqz-social-showcase__icon-shell svg {
            width: 28px;
            height: 28px;
            display: block;
            position: relative;
            z-index: 1;
            transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .bhqz-social-showcase__name {
            margin: 0;
            font-size: 15px;
            font-weight: 700;
            line-height: 1.2;
          }

          .bhqz-social-showcase__meta {
            margin-top: 8px;
            color: rgba(255, 255, 255, 0.62);
            font-size: 12px;
            line-height: 1.45;
            overflow-wrap: anywhere;
          }

          .bhqz-social-showcase__cta {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-top: 14px;
            color: #a8afff;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .bhqz-social-showcase__cta span:last-child {
            font-size: 14px;
            line-height: 1;
            transition: transform 240ms ease;
          }

          .bhqz-social-showcase.is-visible .bhqz-social-showcase__word {
            clip-path: inset(0 0 0 0);
          }

          .bhqz-social-showcase.is-visible .bhqz-social-showcase__subtitle,
          .bhqz-social-showcase.is-visible .bhqz-social-showcase__panel {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .bhqz-social-showcase.is-visible .bhqz-social-showcase__link {
            animation: bhqzSocialCardIn 650ms var(--contact-ease-smooth) var(--social-delay) forwards;
          }

          .bhqz-social-showcase__link:hover {
            transform: translateY(-8px) rotate(-1deg);
            border-color: rgba(64, 64, 204, 0.32);
            box-shadow: 0 24px 36px rgba(0, 0, 0, 0.22);
          }

          .bhqz-social-showcase__link:hover::after {
            border-color: rgba(64, 64, 204, 0.28);
          }

          .bhqz-social-showcase__link:hover .bhqz-social-showcase__icon-shell {
            transform: translateY(-4px) rotate(-8deg) scale(1.04);
            box-shadow:
              0 20px 38px rgba(64, 64, 204, 0.42),
              inset 0 1px 0 rgba(255, 255, 255, 0.24);
          }

          .bhqz-social-showcase__link:hover .bhqz-social-showcase__icon-shell svg {
            transform: scale(1.08);
          }

          .bhqz-social-showcase__link:hover .bhqz-social-showcase__cta span:last-child {
            transform: translateX(4px);
          }

          .bhqz-social-showcase__link:active {
            transform: translateY(-3px) scale(0.98);
          }

          .bhqz-social-showcase__link:focus-visible {
            outline: 2px solid rgba(26, 4, 4, 0.85);
            outline-offset: 4px;
          }

          @keyframes bhqzSocialCardIn {
            from {
              opacity: 0;
              transform: translateY(28px) scale(0.94);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @media (max-width: 1024px) {
            .quick-links__grid { grid-template-columns: repeat(2, 1fr); }
            .quick-link-card:last-child { grid-column: span 2; justify-self: center; width: calc(50% - 10px); }

            .bhqz-social-showcase__grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
          @media (max-width: 768px) {
            .quick-links__grid { grid-template-columns: 1fr; }
            .quick-link-card:last-child { grid-column: span 1; width: 100%; }

            .bhqz-social-showcase {
              padding: 60px 16px 72px;
            }

            .bhqz-social-showcase__panel {
              padding: 20px;
              border-radius: 28px;
            }
          }

          /* Patterns & Utils */
          @keyframes contact-pill-glow {
            0% { box-shadow: 0 0 0 rgba(255, 255, 255, 0); }
            100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.08); }
          }

          @keyframes contact-square-pulse {
            0% { opacity: 0.02; }
            100% { opacity: 0.08; }
          }

          .contact-showcase {
            position: relative;
            overflow: hidden;
            background: var(--contact-bg);
            padding: 72px 20px 88px;
            isolation: isolate;
          }

          .contact-showcase__pattern {
            position: absolute;
            inset: 0;
            opacity: 0;
            background-image:
              linear-gradient(to right, var(--contact-grid) 1px, transparent 1px),
              linear-gradient(to bottom, var(--contact-grid) 1px, transparent 1px);
            background-size: 40px 40px;
            transition: opacity 800ms ease;
            pointer-events: none;
            z-index: 0;
          }

          .contact-showcase.is-visible .contact-showcase__pattern {
            opacity: 1;
          }

          .contact-showcase__square {
            position: absolute;
            width: 6px;
            height: 6px;
            background: rgba(255, 255, 255, 0.06);
            opacity: 0;
            pointer-events: none;
            z-index: 0;
            animation-play-state: paused;
          }

          .contact-showcase.is-visible .contact-showcase__square {
            opacity: 0.04;
            animation: contact-square-pulse var(--square-duration) ease-in-out var(--square-delay) infinite alternate;
            animation-play-state: running;
          }

          .contact-showcase__square--1 { top: 12%; left: 8%; --square-duration: 4s; --square-delay: 0.2s; }
          .contact-showcase__square--2 { top: 21%; right: 11%; --square-duration: 5.3s; --square-delay: 0.6s; }
          .contact-showcase__square--3 { top: 48%; left: 14%; --square-duration: 6.7s; --square-delay: 0.4s; }
          .contact-showcase__square--4 { top: 59%; right: 18%; --square-duration: 8.2s; --square-delay: 0.1s; }
          .contact-showcase__square--5 { bottom: 23%; left: 31%; --square-duration: 7.1s; --square-delay: 0.9s; }
          .contact-showcase__square--6 { bottom: 17%; right: 10%; --square-duration: 8.9s; --square-delay: 0.3s; }

          .contact-showcase__shell {
            position: relative;
            z-index: 1;
            max-width: 1080px;
            margin: 0 auto;
          }

          .contact-showcase__cards {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 16px;
            max-width: 900px;
            margin: 0 auto;
          }

          .contact-showcase__card {
            position: relative;
            overflow: hidden;
            display: flex;
            min-height: 188px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 14px;
            border: 1px solid var(--contact-border);
            background: var(--contact-card);
            padding: 28px 20px;
            text-align: center;
            text-decoration: none;
            opacity: 0;
            transform: translateY(32px) scale(0.95);
            will-change: transform, opacity;
            transition:
              opacity 600ms var(--contact-ease-smooth) var(--card-delay),
              transform 600ms var(--contact-ease-smooth) var(--card-delay),
              border-color 250ms ease,
              box-shadow 250ms ease;
          }

          .contact-showcase__card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            width: 0%;
            height: 2px;
            background: var(--contact-accent);
            transform: translateX(-50%);
            transition: width 300ms ease;
          }

          .contact-showcase__card:hover {
            transform: translateY(-6px);
            border-color: rgba(204, 34, 0, 0.4);
            box-shadow: 0 12px 32px rgba(204, 34, 0, 0.15);
          }

          .contact-showcase__card:hover::before {
            width: 100%;
          }

          .contact-showcase__card:focus-visible {
            outline: 2px solid rgba(255, 255, 255, 0.95);
            outline-offset: 4px;
          }

          .contact-showcase__icon {
            width: 40px;
            height: 40px;
            transform: scale(0) rotate(-15deg);
            opacity: 0;
            will-change: transform, opacity;
            transition:
              opacity 450ms var(--contact-ease-bounce) var(--icon-delay),
              transform 450ms var(--contact-ease-bounce) var(--icon-delay);
          }

          .contact-showcase__cards.is-visible .contact-showcase__card {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .contact-showcase__cards.is-visible .contact-showcase__icon {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }

          .contact-showcase__card:hover .contact-showcase__icon {
            transform: scale(1.15) rotate(0deg);
          }

          .contact-showcase__icon--red {
            color: var(--contact-accent);
          }

          .contact-showcase__icon--blue {
            color: #4090ff;
          }

          .contact-showcase__icon--cyan {
            color: #40b0ff;
          }

          .contact-showcase__label {
            margin-top: 12px;
            color: var(--contact-text);
            font-size: 13px;
            font-style: italic;
            font-weight: 700;
          }

          .contact-showcase__value {
            margin-top: 6px;
            color: #aaaaaa;
            font-size: 12px;
            line-height: 1.5;
          }

          .contact-showcase__hours {
            max-width: 760px;
            margin: 72px auto 0;
            text-align: center;
          }

          .contact-showcase__pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 28px;
            padding: 10px 28px;
            border-radius: 30px;
            border: 1.5px solid rgba(255, 255, 255, 0.15);
            background: var(--contact-card);
            color: var(--contact-text);
            font-size: 18px;
            font-style: italic;
            font-weight: 800;
            opacity: 0;
            transform: scale(0.85);
            will-change: transform, opacity;
            transition:
              opacity 500ms var(--contact-ease-bounce) 100ms,
              transform 500ms var(--contact-ease-bounce) 100ms;
          }

          .contact-showcase__hours-card {
            overflow: hidden;
            max-width: 460px;
            margin: 0 auto;
            border-radius: 12px;
            border: 1px solid var(--contact-border);
            background: var(--contact-card);
            opacity: 0;
            transform: translateY(24px) scale(0.97);
            will-change: transform, opacity;
            transition:
              opacity 700ms var(--contact-ease-smooth) 300ms,
              transform 700ms var(--contact-ease-smooth) 300ms;
          }

          .contact-showcase__row {
            position: relative;
            display: flex;
            justify-content: space-between;
            gap: 16px;
            padding: 16px 24px;
            opacity: 0;
            transform: translateX(-16px);
            will-change: transform, opacity;
            transition:
              opacity 400ms ease-out var(--row-delay),
              transform 400ms ease-out var(--row-delay),
              background-color 200ms ease;
          }

          .contact-showcase__row::after {
            content: '';
            position: absolute;
            left: 24px;
            right: 24px;
            bottom: 0;
            height: 1px;
            width: 0%;
            background: rgba(255, 255, 255, 0.06);
            transition: width 400ms ease calc(var(--row-delay) + 350ms);
          }

          .contact-showcase__row:last-child::after {
            display: none;
          }

          .contact-showcase__row:hover {
            background: rgba(204, 34, 0, 0.04);
          }

          .contact-showcase__day {
            color: #cccccc;
            font-size: 13px;
            font-weight: 500;
            text-align: left;
          }

          .contact-showcase__time {
            color: var(--contact-muted);
            font-size: 13px;
            text-align: right;
            transition: color 200ms ease, transform 200ms ease;
          }

          .contact-showcase__row:hover .contact-showcase__time {
            color: var(--contact-accent);
            transform: translateX(4px);
          }

          .contact-showcase__time--closed {
            color: var(--contact-accent);
            font-weight: 600;
            clip-path: inset(0 100% 0 0);
            transition: clip-path 400ms ease 900ms;
          }

          .contact-showcase__hours.is-visible .contact-showcase__pill {
            opacity: 1;
            transform: scale(1);
            animation: contact-pill-glow 3s ease-in-out 700ms infinite alternate;
          }

          .contact-showcase__hours.is-visible .contact-showcase__hours-card {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .contact-showcase__hours.is-visible .contact-showcase__row {
            opacity: 1;
            transform: translateX(0);
          }

          .contact-showcase__hours.is-visible .contact-showcase__row::after {
            width: calc(100% - 48px);
          }

          .contact-showcase__hours.is-visible .contact-showcase__time--closed {
            clip-path: inset(0 0 0 0);
          }

          @media (max-width: 767.98px) {
            .contact-showcase {
              padding: 56px 16px 72px;
            }

            .contact-showcase__cards {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .contact-showcase__hours {
              margin-top: 56px;
            }
          }

          @media (max-width: 479.98px) {
            .contact-showcase__cards {
              grid-template-columns: 1fr;
            }

            .contact-showcase__pill {
              padding: 10px 22px;
              font-size: 17px;
            }

            .contact-showcase__row {
              padding: 15px 18px;
            }

            .contact-showcase__row::after {
              left: 18px;
              right: 18px;
            }

            .contact-showcase__hours.is-visible .contact-showcase__row::after {
              width: calc(100% - 36px);
            }

            .bhqz-social-showcase__title {
              font-size: 22px;
              gap: 0 8px;
            }

            .bhqz-social-showcase__subtitle {
              font-size: 13px;
            }

            .bhqz-social-showcase__grid {
              grid-template-columns: 1fr;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .contact-showcase__pattern,
            .contact-showcase__square,
            .contact-showcase__card,
            .contact-showcase__icon,
            .contact-showcase__pill,
            .contact-showcase__hours-card,
            .contact-showcase__row,
            .contact-showcase__time--closed {
              animation: none !important;
              transition: none !important;
            }

            .contact-showcase__pattern {
              opacity: 1 !important;
            }

            .contact-showcase__card,
            .contact-showcase__icon,
            .contact-showcase__pill,
            .contact-showcase__hours-card,
            .contact-showcase__row {
              opacity: 1 !important;
              transform: none !important;
            }

            .contact-showcase__time--closed {
              clip-path: inset(0 0 0 0) !important;
            }

            .contact-showcase__square {
              opacity: 0.06 !important;
            }

            .bhqz-social-showcase__word,
            .bhqz-social-showcase__subtitle,
            .bhqz-social-showcase__panel,
            .bhqz-social-showcase__link,
            .bhqz-social-showcase__icon-shell,
            .bhqz-social-showcase__icon-shell svg,
            .bhqz-social-showcase__cta span:last-child {
              animation: none !important;
              transition: none !important;
            }

            .bhqz-social-showcase__word {
              clip-path: inset(0 0 0 0) !important;
            }

            .bhqz-social-showcase__subtitle,
            .bhqz-social-showcase__panel,
            .bhqz-social-showcase__link {
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>

        <HeroSection
          title="Contacto"
          subtitle="Nos encanta escucharte. Comunicate con nosotros para cualquier consulta."
          backgroundImage="/multimedia/BHQZ/profe.webp"
        />

        <section className="contact-showcase" ref={showcaseRef}>
          <div aria-hidden="true" className="contact-showcase__pattern" />
          <span aria-hidden="true" className="contact-showcase__square contact-showcase__square--1" />
          <span aria-hidden="true" className="contact-showcase__square contact-showcase__square--2" />
          <span aria-hidden="true" className="contact-showcase__square contact-showcase__square--3" />
          <span aria-hidden="true" className="contact-showcase__square contact-showcase__square--4" />
          <span aria-hidden="true" className="contact-showcase__square contact-showcase__square--5" />
          <span aria-hidden="true" className="contact-showcase__square contact-showcase__square--6" />

          <div className="contact-showcase__shell">
            <div className="contact-showcase__cards" data-reveal-group>
              {CONTACT_SHOWCASE_ITEMS.map((item, index) => {
                const CardTag = item.href ? 'a' : 'div';

                return (
                  <CardTag
                    key={item.key}
                    {...(item.href ? { href: item.href, target: item.key === 'web' ? '_blank' : undefined, rel: item.key === 'web' ? 'noreferrer' : undefined } : {})}
                    className="contact-showcase__card"
                    style={{
                      '--card-delay': `${index * 120}ms`,
                      '--icon-delay': `${index * 120 + 100}ms`,
                    }}
                  >
                    <ContactShowcaseIcon icon={item.icon} tone={item.tone} />
                    <h3 className="contact-showcase__label">{item.title}</h3>
                    <p className="contact-showcase__value">{item.content}</p>
                  </CardTag>
                );
              })}
            </div>

            <div className="contact-showcase__hours" data-reveal-group>
              <div className="contact-showcase__pill">Horarios de Atencion</div>

              <div className="contact-showcase__hours-card">
                {ATTENTION_HOURS.map((item, index) => (
                  <div
                    className="contact-showcase__row"
                    key={item.day}
                    style={{ '--row-delay': `${450 + index * 130}ms` }}
                  >
                    <span className="contact-showcase__day">{item.day}</span>
                    <span
                      className={`contact-showcase__time ${
                        item.closed ? 'contact-showcase__time--closed' : ''
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="location-section py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
            <div className="quick-links__pill">Ubicación</div>

            <div className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                <div className="relative h-64 w-full overflow-hidden sm:h-80 md:h-96">
                  <iframe
                    allowFullScreen
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapEmbedUrl}
                    style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2) brightness(0.8)' }}
                    title="Ubicacion BHQZ Bosa"
                    width="100%"
                  ></iframe>
                  <div className="pointer-events-none absolute inset-0 border-4 border-red-700/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bhqz-social-showcase" ref={socialSectionRef}>
          <div className="bhqz-social-showcase__shell">
            <h2 className="bhqz-social-showcase__title">
              {['Siguenos', 'en', 'Redes', 'Sociales'].map((word, index) => (
                <span
                  className="bhqz-social-showcase__word"
                  key={word}
                  style={{ '--word-delay': `${index * 90}ms` }}
                >
                  {word}
                </span>
              ))}
            </h2>

            <p className="bhqz-social-showcase__subtitle">
              Encuentra novedades, videos, resultados y momentos de la comunidad BHQZ Bosa en
              cada una de nuestras plataformas.
            </p>

            <div className="bhqz-social-showcase__panel">
              <div className="bhqz-social-showcase__grid">
                {SOCIAL_BUTTONS.map((social) => (
                  <a
                    aria-label={social.label}
                    className="bhqz-social-showcase__link"
                    href={social.href}
                    key={social.key}
                    rel="noopener noreferrer"
                    style={{ '--social-delay': social.delay }}
                    target="_blank"
                    title={social.label}
                  >
                    <div className="bhqz-social-showcase__icon-shell">
                      <SocialIcon icon={social.key} />
                    </div>
                    <p className="bhqz-social-showcase__name">{social.label}</p>
                    <p className="bhqz-social-showcase__meta">{social.meta}</p>
                    <div className="bhqz-social-showcase__cta">
                      <span>Visitar</span>
                      <span>{'->'}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="quick-links py-16 md:py-24" ref={quickLinksRef}>
          <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
            <div className="quick-links__pill">Enlaces Rapidos</div>

            <div className="quick-links__grid">
              {quickLinks.map((link, index) => (
                <a 
                  key={index} 
                  className="quick-link-card" 
                  href={link.href}
                  onClick={handleRipple}
                  style={{
                    '--card-delay': `${index * 150}ms`,
                    '--icon-delay': `${index * 150 + 120}ms`,
                    '--title-delay': `${index * 150 + 250}ms`,
                    '--desc-delay': `${index * 150 + 350}ms`,
                  }}
                >
                  <div className="quick-link-icon-box" style={{ background: index < 2 ? '#0a1020' : undefined }}>
                    {link.icon}
                  </div>
                  <h3 className="quick-link-title">
                    {link.title}
                  </h3>
                  <p className="quick-link-desc">
                    {link.description}
                  </p>
                  <span className="quick-link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CtaCarouselSection
          title="Tienes una pregunta?"
          description="No dudes en contactarnos. Estamos aqui para ayudarte y responder todas tus consultas."
          href="mailto:info@z7sport.com"
          buttonLabel="Enviar Email"
        />
      </Z7Layout>
    </>
  );
}
