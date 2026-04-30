// BHQZ Bosa - Registrations Page

import { useEffect, useState, useRef } from 'react';
import { Seo } from '../../components/Seo.jsx';
import {
  Z7Layout,
  HeroSection,
  CtaCarouselSection,
} from '../components/index.jsx';

export default function Inscripciones() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [validFields, setValidFields] = useState({});
  const [shakeField, setShakeField] = useState(null);
  const observerRef = useRef(null);
  const formRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.inscription-card');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-animated');
            animationObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const questionsSection = document.querySelector('.questions-section');
    const scheduleSection = document.querySelector('.schedule-section');

    if (questionsSection) animationObserver.observe(questionsSection);
    if (scheduleSection) animationObserver.observe(scheduleSection);

    return () => animationObserver.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (name, value) => {
    if (!value.trim()) return false;
    if (name === 'correo') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    if (name === 'telefono') {
      return /^\d{7,}$/.test(value.replace(/\s|-/g, ''));
    }
    return true;
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    const isValid = validateField(name, value);

    if (!value.trim()) {
      setShakeField(name);
      setTimeout(() => setShakeField(null), 300);
    } else {
      setValidFields((prev) => ({ ...prev, [name]: isValid }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allValid = Object.keys(formData).every((key) =>
      validateField(key, formData[key])
    );

    if (!allValid) {
      Object.keys(formData).forEach((key) => {
        if (!formData[key].trim()) {
          setShakeField(key);
        }
      });
      return;
    }

    if (formRef.current) {
      formRef.current.classList.add('form-exit');
    }

    setTimeout(() => {
      setSubmitted(true);
      if (successRef.current) {
        successRef.current.classList.add('success-show');
      }
    }, 300);

    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    const scrollKey = 'dp_scroll_to_inscripcion';
    const prefillKey = 'dp_prefill_inscripcion';

    const doScroll = () => {
      const el = document.getElementById('inscripcion-form');
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    try {
      const pre = localStorage.getItem(prefillKey);
      if (pre) {
        localStorage.removeItem(prefillKey);
        try {
          const parsed = JSON.parse(pre);
          if (parsed && typeof parsed === 'object') {
            setFormData((prev) => ({ ...prev, mensaje: parsed.mensaje || '' }));
            setTimeout(doScroll, 120);
          }
        } catch (e) {
          // ignore
        }
      }

      if (localStorage.getItem(scrollKey)) {
        localStorage.removeItem(scrollKey);
        setTimeout(doScroll, 120);
      }
    } catch (e) {
      // ignore
    }

    if (window.location.hash === '#inscripcion-form') {
      setTimeout(doScroll, 40);
    }
  }, []);

  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <>
      <Seo />
      <Z7Layout>
        <HeroSection
          title="Inscripciones"
          subtitle="Únete a nuestra comunidad y comienza tu camino en BHQZ Bosa."
          backgroundImage="/multimedia/BHQZ/fondoinscripciones.webp"
          overlayClass="bg-black/20"
        />

        <style>{`
          :root {
            --color-accent: #cc2200;
            --color-success: #22aa55;
            --color-bg: #0a0404;
            --color-bg-light: #f5f5f5;
            --color-card: #ffffff;
            --color-text-dark: #1a0404;
            --color-text-muted: #555555;
            --radius-card: 20px;
            --radius-card-schedule: 14px;
            --radius-input: 8px;
          }

          /* ═══════════════════════════════════════════════════════════ */
          /* QUESTIONS & SCHEDULE SECTION — UNIFIED                        */
          /* ═══════════════════════════════════════════════════════════ */

          .questions-section {
            background-color: var(--color-bg);
            padding: 64px 40px;
            position: relative;
            overflow: hidden;
          }

          .questions-container {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
          }

          /* TITLE — STAGGERED LETTER ANIMATION */
          .questions-title {
            font-size: 28px;
            font-weight: 800;
            font-style: italic;
            color: #ffffff;
            margin-bottom: 12px;
            letter-spacing: 0.02em;
            word-spacing: 100vw;
            line-height: 1.2;
            position: relative;
          }

          .questions-title::after {
            content: '';
            position: absolute;
            bottom: -24px;
            left: 50%;
            transform: translateX(-50%);
            width: 48px;
            height: 3px;
            background-color: #cc2200;
            border-radius: 2px;
          }

          .title-char {
            display: inline-block;
            will-change: transform, opacity;
            opacity: 0;
            transform: translateY(30px);
          }

          .title-char:nth-child(1) { animation: letterSlide 500ms cubic-bezier(0.22, 1, 0.36, 1) 0ms forwards; }
          .title-char:nth-child(2) { animation: letterSlide 500ms cubic-bezier(0.22, 1, 0.36, 1) 40ms forwards; }
          .title-char:nth-child(3) { animation: letterSlide 500ms cubic-bezier(0.22, 1, 0.36, 1) 80ms forwards; }
          .title-char:nth-child(4) { animation: letterSlide 500ms cubic-bezier(0.22, 1, 0.36, 1) 120ms forwards; }
          .title-char:nth-child(5) { animation: letterSlide 500ms cubic-bezier(0.22, 1, 0.36, 1) 160ms forwards; }
          .title-char:nth-child(6) { animation: letterSlide 500ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards; }
          .title-char:nth-child(7) { animation: letterSlide 500ms cubic-bezier(0.22, 1, 0.36, 1) 240ms forwards; }
          .title-char:nth-child(8) { animation: letterSlide 500ms cubic-bezier(0.22, 1, 0.36, 1) 280ms forwards; }
          .title-char:nth-child(9) { animation: letterSlide 500ms cubic-bezier(0.22, 1, 0.36, 1) 320ms forwards; }
          .title-char:nth-child(10) { animation: letterSlide 500ms cubic-bezier(0.22, 1, 0.36, 1) 360ms forwards; }

          .title-question-mark {
            display: inline-block;
            will-change: transform, opacity;
            opacity: 0;
            transform: scale(0);
            animation: questionBounce 400ms cubic-bezier(0.34, 1.56, 0.64, 1) 380ms forwards;
            margin-left: 0.1em;
          }

          @keyframes letterSlide {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes questionBounce {
            0% {
              opacity: 0;
              transform: scale(0);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          /* CONTACT GRID */
          .questions-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            max-width: 680px;
            margin: 0 auto;
            margin-top: 40px;
          }

          @media (max-width: 768px) {
            .questions-grid {
              grid-template-columns: 1fr;
              gap: 12px;
            }
          }

          /* CONTACT BLOCK — CARD STYLE */
          .contact-block {
            will-change: transform, opacity;
            text-align: center;
            cursor: pointer;
            transition: all 200ms ease;
            background-color: #16090d;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            padding: 20px 24px;
          }

          .contact-block:hover {
            transform: translateY(-4px);
            border-color: rgba(204, 34, 0, 0.3);
          }

          /* CONTACT ICON */
          .contact-icon {
            width: 28px;
            height: 28px;
            margin: 0 auto 10px;
            color: var(--color-accent);
            opacity: 1;
            transform: scale(1);
            will-change: transform, opacity;
            animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
            animation-fill-mode: forwards;
            display: block;
          }

          .contact-block:nth-child(1) .contact-icon {
            animation: iconBounceIn 500ms 200ms;
          }

          .contact-block:nth-child(2) .contact-icon {
            animation: iconBounceIn 500ms 380ms;
          }

          .contact-block:nth-child(3) .contact-icon {
            animation: iconBounceIn 500ms 560ms;
          }

          @keyframes iconBounceIn {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .contact-icon svg {
            width: 100%;
            height: 100%;
            stroke-linecap: round;
            stroke-linejoin: round;
          }

          .contact-block:hover .contact-icon {
            animation: iconHover 250ms ease forwards;
          }

          @keyframes iconHover {
            0% {
              transform: scale(1) rotate(0deg);
            }
            50% {
              transform: scale(1.15) rotate(-4deg);
            }
            100% {
              transform: scale(1.15) rotate(-8deg);
            }
          }

          /* CONTACT CONTENT */
          .contact-content {
            will-change: transform, opacity;
            opacity: 0;
            transform: translateY(10px);
          }

          .contact-block:nth-child(1) .contact-content {
            animation: contentSlideUp 400ms ease-out 350ms forwards;
          }

          .contact-block:nth-child(2) .contact-content {
            animation: contentSlideUp 400ms ease-out 530ms forwards;
          }

          .contact-block:nth-child(3) .contact-content {
            animation: contentSlideUp 400ms ease-out 710ms forwards;
          }

          @keyframes contentSlideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .contact-label {
            font-size: 12px;
            font-weight: 700;
            color: #cc2200;
            margin-bottom: 4px;
            transition: color 200ms ease;
            will-change: color;
            uppercase;
            letter-spacing: 0.1em;
          }

          .contact-block:hover .contact-label {
            color: #ff5533;
          }

          .contact-data {
            font-size: 13px;
            color: #aaaaaa;
            line-height: 1.5;
            word-break: break-word;
          }

          /* SEPARATOR LINE */
          .section-separator {
            margin: 40px auto;
            max-width: 480px;
            border: none;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            opacity: 0;
            will-change: width, opacity;
            animation: separatorExpand 500ms ease-out 800ms forwards;
            width: 0;
          }

          @keyframes separatorExpand {
            to {
              opacity: 1;
              width: 100%;
            }
          }

          /* ═══════════════════════════════════════════════════════════ */
          /* SCHEDULE SECTION — HORARIOS DE ATENCIÓN                      */
          /* ═══════════════════════════════════════════════════════════ */

          .schedule-section {
            background-color: var(--color-bg);
            padding: 0 40px 64px 40px;
            position: relative;
            overflow: hidden;
            min-height: auto;
            display: block;
          }

          .schedule-section::before {
            display: none;
          }

          .schedule-particle {
            display: none;
          }

          .schedule-container {
            position: relative;
            z-index: 10;
            max-width: 680px;
            width: 100%;
            margin: 0 auto;
            text-align: center;
          }

          /* TITLE — WATERMARK EFFECT */
          .schedule-title-wrapper {
            text-align: center;
            margin-bottom: 24px;
            position: relative;
          }

          .schedule-title-wrapper::before {
            content: 'ATENCIÓN AL PÚBLICO';
            display: block;
            font-size: 10px;
            color: #cc2200;
            uppercase;
            letter-spacing: 0.15em;
            margin-bottom: 6px;
            font-weight: 700;
          }

          .schedule-title {
            font-size: 20px;
            font-weight: 700;
            font-style: italic;
            color: #ffffff;
            margin: 0;
            opacity: 0;
            transform: scale(1.08);
            will-change: opacity, transform, filter;
            animation: watermarkFadeIn 600ms ease-out 100ms forwards;
            filter: blur(8px);
            letter-spacing: 0.02em;
          }

          @keyframes watermarkFadeIn {
            to {
              opacity: 1;
              transform: scale(1);
              filter: blur(0px);
            }
          }

          /* SCHEDULE CARD */
          .schedule-card {
            background-color: #16090d;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: none;
            opacity: 0;
            transform: translateY(30px) scale(0.97);
            will-change: transform, opacity;
            animation: cardSlideUp 700ms cubic-bezier(0.22, 1, 0.36, 1) 300ms forwards;
            max-width: 460px;
            margin: 0 auto;
          }

          @keyframes cardSlideUp {
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          /* SCHEDULE ROWS */
          .schedule-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 24px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            position: relative;
            overflow: hidden;
            will-change: transform, opacity;
            opacity: 0;
            transform: translateX(-20px);
            transition: all 200ms ease;
          }

          .schedule-row:last-child {
            border-bottom: none;
          }

          .schedule-row:hover {
            background-color: rgba(204, 34, 0, 0.08);
          }

          .schedule-row:nth-child(1) {
            animation: rowSlideIn 400ms ease-out 450ms forwards;
          }

          .schedule-row:nth-child(2) {
            animation: rowSlideIn 400ms ease-out 580ms forwards;
          }

          .schedule-row:nth-child(3) {
            animation: rowSlideIn 400ms ease-out 710ms forwards;
          }

          @keyframes rowSlideIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .schedule-row::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 28px;
            height: 2px;
            background-color: var(--color-accent);
            width: 0%;
            will-change: width;
          }

          .schedule-row:nth-child(1)::after {
            animation: underlineExpand 350ms ease-out 800ms forwards;
          }

          .schedule-row:nth-child(2)::after {
            animation: underlineExpand 350ms ease-out 930ms forwards;
          }

          .schedule-row:nth-child(3)::after {
            animation: underlineExpand 350ms ease-out 1060ms forwards;
          }

          @keyframes underlineExpand {
            to {
              width: calc(100% - 56px);
            }
          }

          .schedule-day {
            font-size: 14px;
            font-weight: 500;
            color: #ffffff;
            flex: 1;
            text-align: left;
          }

          .schedule-time {
            font-size: 14px;
            color: #ffffff;
            text-align: right;
            transition: all 200ms ease;
            will-change: color, transform;
          }

          .schedule-row:hover .schedule-time {
            color: #ffffff;
            transform: translateX(4px);
          }

          .schedule-closed {
            font-weight: 600;
            color: #ffffff;
            clip-path: inset(0 100% 0 0);
            will-change: clip-path;
            animation: typewriterReveal 400ms ease-out 900ms forwards;
          }

          @keyframes typewriterReveal {
            to {
              clip-path: inset(0 0% 0 0);
            }
          }

          @media (max-width: 768px) {
            .schedule-section {
              padding: 60px 1rem;
            }

            .schedule-card {
              max-width: 100%;
            }

            .schedule-row {
              padding: 16px 16px;
            }

            .schedule-title {
              font-size: 24px;
            }

            .schedule-day,
            .schedule-time {
              font-size: 13px;
            }
          }

          /* ANIMATION CONTROL — PAUSE UNTIL VISIBLE */
          .questions-section .title-char,
          .questions-section .title-question-mark,
          .questions-section .contact-icon,
          .questions-section .contact-content,
          .questions-section .section-separator,
          .schedule-section .schedule-title,
          .schedule-section .schedule-card,
          .schedule-section .schedule-row,
          .schedule-section .schedule-particle {
            animation-play-state: paused;
          }

          /* ANIMATION CONTROL — PLAY WHEN VISIBLE */
          .questions-section.is-animated .title-char,
          .questions-section.is-animated .title-question-mark,
          .questions-section.is-animated .contact-icon,
          .questions-section.is-animated .contact-content,
          .questions-section.is-animated .section-separator,
          .schedule-section.is-animated .schedule-title,
          .schedule-section.is-animated .schedule-card,
          .schedule-section.is-animated .schedule-row,
          .schedule-section.is-animated .schedule-particle {
            animation-play-state: running;
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }

          /* SECTION BACKGROUND */
          .form-section {
            position: relative;
            background-color: var(--color-bg);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding: 3rem 1rem;
          }

          .form-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle 200px at 10% 20%, rgba(125, 211, 252, 0.08), transparent),
                        radial-gradient(circle 250px at 90% 70%, rgba(239, 68, 68, 0.06), transparent);
            pointer-events: none;
          }

          .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background-color: rgba(255, 255, 255, 0.06);
            border-radius: 50%;
            pointer-events: none;
          }

          @keyframes float-particle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(var(--offset)); }
          }

          .particle-1 { left: 5%; top: 10%; animation: float-particle 8s ease-in-out 0s infinite; --offset: -15px; }
          .particle-2 { left: 15%; top: 30%; animation: float-particle 10s ease-in-out 1s infinite; --offset: 20px; }
          .particle-3 { left: 85%; top: 20%; animation: float-particle 12s ease-in-out 2s infinite; --offset: -18px; }
          .particle-4 { left: 75%; top: 60%; animation: float-particle 14s ease-in-out 3s infinite; --offset: 22px; }
          .particle-5 { left: 20%; top: 70%; animation: float-particle 9s ease-in-out 1.5s infinite; --offset: -12px; }
          .particle-6 { left: 60%; top: 15%; animation: float-particle 11s ease-in-out 2.5s infinite; --offset: 18px; }
          .particle-7 { left: 80%; top: 80%; animation: float-particle 13s ease-in-out 0.5s infinite; --offset: -20px; }
          .particle-8 { left: 30%; top: 50%; animation: float-particle 7s ease-in-out 3.5s infinite; --offset: 25px; }

          /* INSCRIPTION CARD */
          .inscription-card {
            position: relative;
            z-index: 10;
            background-color: #16090d;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: var(--radius-card);
            padding: 44px 48px;
            max-width: 580px;
            width: 100%;
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
            will-change: transform, opacity;
          }

          .inscription-card.animate-in {
            animation: cardEnter 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            opacity: 0;
            transform: translateY(50px) scale(0.96);
          }

          @keyframes cardEnter {
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .inscription-card.form-exit {
            animation: cardExit 0.3s ease forwards;
          }

          @keyframes cardExit {
            to {
              opacity: 0;
              transform: translateY(30px) scale(0.98);
            }
          }

          .form-header {
            margin-bottom: 2rem;
          }

          .form-decorline {
            width: 50px;
            height: 3px;
            background-color: var(--color-accent);
            border-radius: 2px;
            margin-bottom: 1rem;
            will-change: width;
            animation: lineExpand 0.4s ease-out 120ms forwards;
            width: 0;
          }

          @keyframes lineExpand {
            to { width: 50px; }
          }

          .form-title {
            font-size: 26px;
            font-weight: 800;
            font-style: italic;
            color: #ffffff;
            margin-bottom: 1.25rem;
            line-height: 1.2;
            word-spacing: normal;
            white-space: nowrap;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }

          .form-title-word {
            display: inline-block;
            will-change: clip-path;
            animation: wordReveal 0.55s cubic-bezier(0.76, 0, 0.24, 1) forwards;
            clip-path: inset(0 100% 0 0);
          }

          .form-title-word:nth-child(1) { animation-delay: 150ms; }
          .form-title-word:nth-child(2) { animation-delay: 270ms; }
          .form-title-word:nth-child(3) { animation-delay: 390ms; }

          @keyframes wordReveal {
            to { clip-path: inset(0 0% 0 0); }
          }

          .form-description {
            font-size: 13px;
            color: #aaaaaa;
            line-height: 1.7;
            max-width: 420px;
            will-change: opacity, transform;
            animation: descriptionEnter 0.45s ease-out 550ms forwards;
            opacity: 0;
            transform: translateY(12px);
          }

          @keyframes descriptionEnter {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* FORM GRID */
          .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-top: 2rem;
          }

          .form-group {
            will-change: transform, opacity;
            animation: fieldEnter 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            opacity: 0;
            transform: translateX(-16px);
          }

          .form-group:nth-child(1) { animation-delay: 650ms; }
          .form-group:nth-child(2) { animation-delay: 750ms; }
          .form-group:nth-child(3) { animation-delay: 850ms; grid-column: 1; }
          .form-group:nth-child(4) { animation-delay: 950ms; grid-column: 1 / -1; }
          .form-group:nth-child(5) { animation-delay: 1050ms; }

          @keyframes fieldEnter {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }



          @media (max-width: 768px) {
            .form-grid {
              grid-template-columns: 1fr;
            }
            .form-group:nth-child(4) {
              grid-column: 1;
            }
          }

          /* LABELS */
          .form-label {
            display: block;
            font-size: 11px;
            font-weight: 600;
            uppercase;
            letter-spacing: 0.08em;
            color: #888888;
            margin-bottom: 0.5rem;
            will-change: transform, color;
            transition: all 200ms ease;
          }

          .form-group:focus-within .form-label {
            transform: translateY(-2px);
            color: var(--color-accent);
          }

          /* INPUTS */
          .form-input,
          .form-textarea {
            width: 100%;
            border: 1.5px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 10px 14px;
            font-size: 13px;
            color: #ffffff;
            background-color: #0f0404;
            font-family: inherit;
            transition: all 200ms ease;
            will-change: border-color, box-shadow;
            position: relative;
          }

          .form-input::placeholder,
          .form-textarea::placeholder {
            color: rgba(255, 255, 255, 0.3);
          }

          .form-input:hover,
          .form-textarea:hover {
            border-color: rgba(204, 34, 0, 0.35);
          }

          .form-input:focus,
          .form-textarea:focus {
            outline: none;
            border-color: #cc2200;
            box-shadow: 0 0 0 3px rgba(204, 34, 0, 0.15);
            background-color: #0f0404;
          }

          .form-input.valid,
          .form-textarea.valid {
            border-color: var(--color-success);
          }

          .form-input.invalid,
          .form-textarea.invalid {
            border-color: var(--color-accent);
            animation: shake 0.3s ease;
          }

          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-4px); }
            75% { transform: translateX(4px); }
          }

          .form-input::after {
            content: '';
            position: absolute;
            bottom: -1.5px;
            left: 0;
            height: 2px;
            background-color: var(--color-accent);
            width: 0%;
            transition: width 250ms ease;
          }

          .form-input:focus::after {
            width: 100%;
          }

          /* VALID ICON */
          .valid-icon {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%) scale(0);
            color: var(--color-success);
            font-size: 14px;
            will-change: transform;
            animation: iconPop 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes iconPop {
            to { transform: translateY(-50%) scale(1); }
          }

          /* TEXTAREA */
          .form-textarea {
            min-height: 110px;
            resize: vertical;
            font-family: inherit;
          }

          .form-textarea::-webkit-scrollbar {
            width: 6px;
          }

          .form-textarea::-webkit-scrollbar-track {
            background-color: transparent;
          }

          .form-textarea::-webkit-scrollbar-thumb {
            background-color: rgba(204, 34, 0, 0.3);
            border-radius: 3px;
          }

          .form-textarea::-webkit-scrollbar-thumb:hover {
            background-color: rgba(204, 34, 0, 0.5);
          }

          /* SUBMIT BUTTON */
          .form-submit {
            grid-column: 1 / -1;
            background-color: var(--color-accent);
            color: #fff;
            font-weight: 700;
            font-size: 14px;
            uppercase;
            border-radius: var(--radius-input);
            width: 100%;
            padding: 14px;
            border: none;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            will-change: transform, box-shadow, background-color;
            transition: all 250ms ease;
            letter-spacing: 0.05em;
            animation: buttonEnter 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1050ms forwards;
            opacity: 0;
            transform: scale(0.9);
          }

          @keyframes buttonEnter {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .form-submit:hover:not(:disabled) {
            background-color: #ff3300;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(204, 34, 0, 0.4);
          }

          .form-submit:active:not(:disabled) {
            transform: scale(0.97);
          }

          .form-submit:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          /* RIPPLE EFFECT */
          .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: rippleExpand 0.6s ease-out;
            pointer-events: none;
          }

          @keyframes rippleExpand {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }

          /* SUCCESS MESSAGE */
          .success-message {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transform: scale(0.95);
            pointer-events: none;
            will-change: opacity, transform;
          }

          .success-message.success-show {
            animation: successShow 0.5s ease forwards;
          }

          @keyframes successShow {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .success-icon {
            width: 60px;
            height: 60px;
            background-color: var(--color-success);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: #fff;
            margin-bottom: 1.5rem;
            transform: scale(0);
            animation: iconBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 200ms forwards;
          }

          @keyframes iconBounce {
            to { transform: scale(1); }
          }

          .success-text {
            text-align: center;
            color: #1a0404;
            font-weight: 600;
            font-size: 16px;
            opacity: 0;
            transform: translateY(10px);
            animation: textSlideUp 0.4s ease-out 400ms forwards;
          }

          @keyframes textSlideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* RESPONSIVE */
          @media (max-width: 768px) {
            .form-section {
              padding: 2rem 1rem;
            }

            .inscription-card {
              padding: 32px 24px;
            }

            .form-title {
              font-size: 22px;
            }

            .form-description {
              font-size: 12px;
            }

            .form-grid {
              gap: 12px;
              margin-top: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .inscription-card {
              padding: 24px 16px;
            }

            .form-title {
              font-size: 20px;
            }

            .form-submit {
              padding: 12px;
              font-size: 12px;
            }
          }
        `}</style>

        <div>
          {/* FORM SECTION */}
          <section id="inscripcion-form" className="form-section">
            {/* Particles */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`particle particle-${i}`} />
            ))}

            {/* Form Card */}
            <div ref={formRef} className="inscription-card">
              {!submitted ? (
                <>
                  <div className="form-header">
                    <div className="form-decorline" />
                    <h2 className="form-title">
                      <span className="form-title-word">Formulario de Inscripción</span>
                    </h2>
                    <p className="form-description">
                      Completa el siguiente formulario para expresar tu interés en nuestros
                      programas. Nos contactaremos pronto para proporcionarte más información.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="form-grid">
                    {/* NOMBRE */}
                    <div className={`form-group ${shakeField === 'nombre' ? 'invalid' : ''}`}>
                      <label className="form-label">Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        className={`form-input ${validFields.nombre ? 'valid' : ''} ${
                          shakeField === 'nombre' ? 'invalid' : ''
                        }`}
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {validFields.nombre && <span className="valid-icon">✓</span>}
                    </div>

                    {/* CORREO */}
                    <div className={`form-group ${shakeField === 'correo' ? 'invalid' : ''}`}>
                      <label className="form-label">Correo Electrónico</label>
                      <input
                        type="email"
                        name="correo"
                        className={`form-input ${validFields.correo ? 'valid' : ''} ${
                          shakeField === 'correo' ? 'invalid' : ''
                        }`}
                        placeholder="tu@email.com"
                        value={formData.correo}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {validFields.correo && <span className="valid-icon">✓</span>}
                    </div>

                    {/* TELÉFONO */}
                    <div className={`form-group ${shakeField === 'telefono' ? 'invalid' : ''}`}>
                      <label className="form-label">Teléfono</label>
                      <input
                        type="tel"
                        name="telefono"
                        className={`form-input ${validFields.telefono ? 'valid' : ''} ${
                          shakeField === 'telefono' ? 'invalid' : ''
                        }`}
                        placeholder="123456789"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {validFields.telefono && <span className="valid-icon">✓</span>}
                    </div>

                    {/* MENSAJE */}
                    <div className={`form-group ${shakeField === 'mensaje' ? 'invalid' : ''}`}>
                      <label className="form-label">Mensaje</label>
                      <textarea
                        name="mensaje"
                        className={`form-textarea ${validFields.mensaje ? 'valid' : ''} ${
                          shakeField === 'mensaje' ? 'invalid' : ''
                        }`}
                        placeholder="Cuéntanos más sobre tu interés"
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {validFields.mensaje && <span className="valid-icon">✓</span>}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="form-submit"
                      onClick={handleRipple}
                    >
                      Enviar Inscripción
                    </button>
                  </form>
                </>
              ) : (
                <div ref={successRef} className="success-message">
                  <div className="success-icon">✓</div>
                  <p className="success-text">
                    ¡Inscripción enviada! Nos contactaremos pronto.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* INFO SECTION — PREGUNTAS */}
          <section className="questions-section">
            <div className="questions-container">
              <h2 className="questions-title">
                <span className="title-char">¿</span>
                <span className="title-char">P</span>
                <span className="title-char">r</span>
                <span className="title-char">e</span>
                <span className="title-char">g</span>
                <span className="title-char">u</span>
                <span className="title-char">n</span>
                <span className="title-char">t</span>
                <span className="title-char">a</span>
                <span className="title-char">s</span>
                <span className="title-question-mark">?</span>
              </h2>
              <div className="questions-grid">
                {/* UBICACIÓN */}
                <div className="contact-block">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-label">Ubicación</h3>
                    <p className="contact-data">Calle Principal 123, Ciudad, CP 1234</p>
                  </div>
                </div>

                {/* TELÉFONO */}
                <div className="contact-block">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-label">Teléfono</h3>
                    <p className="contact-data">+54 (11) 1234-5678</p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="contact-block">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-label">Email</h3>
                    <p className="contact-data">info@z7sport.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* SEPARATOR LINE */}
            <hr className="section-separator" />
          </section>

          {/* SCHEDULE SECTION — HORARIOS DE ATENCIÓN */}
          <section className="schedule-section">
            {/* Floating Particles */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={`schedule-particle-${i}`} className={`schedule-particle schedule-particle-${i}`} />
            ))}

            <div className="schedule-container">
              {/* WATERMARK TITLE */}
              <div className="schedule-title-wrapper">
                <h2 className="schedule-title">Horarios de Atención</h2>
              </div>

              {/* SCHEDULE CARD */}
              <div className="schedule-card">
                {/* FILA 1 — LUNES A VIERNES */}
                <div className="schedule-row">
                  <span className="schedule-day">Lunes a Viernes</span>
                  <span className="schedule-time">9:00 AM – 7:00 PM</span>
                  <div className="row-underline" />
                </div>

                {/* FILA 2 — SÁBADO */}
                <div className="schedule-row">
                  <span className="schedule-day">Sábado</span>
                  <span className="schedule-time">10:00 AM – 5:00 PM</span>
                  <div className="row-underline" />
                </div>

                {/* FILA 3 — DOMINGO */}
                <div className="schedule-row schedule-row-closed">
                  <span className="schedule-day">Domingo</span>
                  <span className="schedule-time schedule-closed">Cerrado</span>
                  <div className="row-underline" />
                </div>
              </div>
            </div>
          </section>
        </div>

        <CtaCarouselSection
          title="¿Quieres conocer más?"
          description="Visita nuestra página de programas para explorar todas las opciones disponibles."
          href="/bhqz-bosa/programas"
          buttonLabel="Ver Programas"
        />
      </Z7Layout>
    </>
  );
}
