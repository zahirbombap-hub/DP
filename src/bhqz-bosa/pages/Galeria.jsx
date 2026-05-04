// BHQZ Bosa - Gallery Page with WOW Effect Animations

import { useCallback, useEffect, useRef, useState } from 'react';
import { Seo } from '../../components/Seo.jsx';
import { Z7Layout, HeroSection, CtaCarouselSection } from '../components/index.jsx';

const GALLERY_DATA = [
  { id: 1, src: '/multimedia/BHQZ/fotos/foto1.webp', caption: 'Entrenamiento matutino', category: 'futbol' },
  { id: 2, src: '/multimedia/BHQZ/fotos/foto2.webp', caption: 'Partido de práctica', category: 'futbol' },
  { id: 3, src: '/multimedia/BHQZ/fotos/foto3.webp', caption: 'Sesión de voleibol', category: 'voleibol' },
  { id: 4, src: '/multimedia/BHQZ/fotos/foto4.webp', caption: 'Evento comunitario', category: 'comunidad' },
  { id: 5, src: '/multimedia/BHQZ/fotos/foto5.webp', caption: 'Patinaje avanzado', category: 'patinaje' },
  { id: 6, src: '/multimedia/BHQZ/fotos/foto6.webp', caption: 'Entrenamiento grupal', category: 'futbol' },
];

const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'futbol', label: 'Fútbol' },
  { id: 'voleibol', label: 'Voleibol' },
  { id: 'patinaje', label: 'Patinaje' },
  { id: 'comunidad', label: 'Comunidad' },
];

export default function Galeria() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayTimerRef = useRef(null);
  const observerRef = useRef(null);
  const viewerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const filteredImages =
    selectedCategory === 'todos'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((img) => img.category === selectedCategory);

  const images = filteredImages.length > 0 ? filteredImages : GALLERY_DATA;

  // Intersection Observer for entrance animations
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
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(
      '.gallery-filters, .gallery-title, .gallery-subtitle, .gallery-viewer, .gallery-thumbnails'
    );
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    if (categoryId === selectedCategory) return;

    const filterPill = document.querySelector(`[data-filter="${categoryId}"]`);
    if (filterPill) {
      filterPill.classList.add('pill-bounce');
      setTimeout(() => filterPill.classList.remove('pill-bounce'), 300);
    }

    const container = document.querySelector('.gallery-content-wrapper');
    if (container) {
      container.classList.add('fade-out');
      setTimeout(() => {
        setSelectedCategory(categoryId);
        setCurrentIndex(0);
        container.classList.remove('fade-out');
        container.classList.add('fade-in');
      }, 150);
    }
  };

  // Navigation functions
  const resetAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  }, [images.length]);

  const navigate = useCallback((direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    resetAutoPlay();

    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
      setIsTransitioning(false);
    }, 200);
  }, [images.length, isTransitioning, resetAutoPlay]);

  const goToImage = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    resetAutoPlay();

    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [resetAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'ArrowRight') navigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  // Mouse move for ambient glow
  const handleMouseMove = (e) => {
    if (!viewerRef.current) return;
    const rect = viewerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    setSelectedCategory('todos');
  }, []);

  return (
    <>
      <Seo />
      <Z7Layout>
        <HeroSection
          title="Galeria"
          subtitle="Descubre los momentos, trabajos y eventos de nuestra comunidad BHQZ Bosa."
          backgroundImage="/multimedia/BHQZ/fotos/dogajustado.webp"
        />

        <style>{`
          :root {
            --color-accent: #cc2200;
            --color-accent-hover: #ff3300;
            --color-bg: #05070d;
            --color-text: #ffffff;
            --color-muted: #888888;
            --color-secondary-accent: #e05500;
            --radius-card: 16px;
            --radius-thumb: 10px;
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }

          .gallery-section {
            position: relative;
            background-color: var(--color-bg);
            background-image: linear-gradient(180deg, #04060b 0%, #050913 30%, #060913 65%, #04060b 100%);
            overflow: hidden;
          }

          .gallery-section::before {
            content: '';
            position: absolute;
            inset: 0;
            opacity: 0.12;
            background-image: linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
            background-size: 72px 72px;
            pointer-events: none;
          }

          .gallery-section::after {
            content: '';
            position: absolute;
            inset-x: 0;
            top: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(125, 211, 252, 0.55), transparent);
            pointer-events: none;
          }

          .gallery-section-content {
            position: relative;
            z-10;
            padding: 3rem 1rem;
          }

          .gallery-blur-orb-1 {
            position: absolute;
            left: -10%;
            top: 10%;
            width: 288px;
            height: 288px;
            background: radial-gradient(circle, rgba(125, 211, 252, 0.14), transparent);
            border-radius: 50%;
            filter: blur(120px);
            animation: floatOrb1 18s infinite ease-in-out;
            pointer-events: none;
          }

          .gallery-blur-orb-2 {
            position: absolute;
            right: -8%;
            top: 32%;
            width: 320px;
            height: 320px;
            background: radial-gradient(circle, rgba(239, 68, 68, 0.1), transparent);
            border-radius: 50%;
            filter: blur(140px);
            animation: floatOrb2 22s infinite ease-in-out;
            pointer-events: none;
          }

          @keyframes floatOrb1 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(18px, -16px); }
          }

          @keyframes floatOrb2 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-22px, 24px); }
          }

          .gallery-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          /* FILTERS */
          .gallery-filters {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding: 1.5rem 0;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            will-change: opacity, transform;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 1.5rem;
            margin-bottom: 2rem;
          }

          .gallery-filters.animate-in {
            animation: filtersEnter 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes filtersEnter {
            from {
              opacity: 0;
              transform: translateY(-12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .filter-pill {
            padding: 8px 16px;
            border-radius: 24px;
            border: 1.5px solid rgba(255, 255, 255, 0.1);
            background-color: rgba(255, 255, 255, 0.04);
            color: rgba(255, 255, 255, 0.8);
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 200ms ease;
            white-space: nowrap;
            will-change: transform, background-color, border-color;
            position: relative;
            backdrop-filter: blur(12px);
          }

          .filter-pill::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            background-color: var(--color-accent);
            border-radius: 1px;
            width: 0%;
            transition: width 250ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .filter-pill:nth-child(1) {
            animation: pillEnter 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0ms forwards;
          }
          .filter-pill:nth-child(2) {
            animation: pillEnter 0.4s cubic-bezier(0.22, 1, 0.36, 1) 80ms forwards;
          }
          .filter-pill:nth-child(3) {
            animation: pillEnter 0.4s cubic-bezier(0.22, 1, 0.36, 1) 160ms forwards;
          }
          .filter-pill:nth-child(4) {
            animation: pillEnter 0.4s cubic-bezier(0.22, 1, 0.36, 1) 240ms forwards;
          }
          .filter-pill:nth-child(5) {
            animation: pillEnter 0.4s cubic-bezier(0.22, 1, 0.36, 1) 320ms forwards;
          }

          @keyframes pillEnter {
            from {
              opacity: 0;
              transform: translateY(-12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .filter-pill:hover {
            border-color: var(--color-accent);
            color: var(--color-accent);
          }

          .filter-pill.active {
            background-color: var(--color-accent);
            border-color: var(--color-accent);
            color: #fff;
            box-shadow: 0 0 24px rgba(204, 34, 0, 0.35);
          }

          .filter-pill.active::after {
            width: 100%;
          }

          .filter-pill.pill-bounce {
            animation: pillBounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes pillBounce {
            0% { transform: scale(1); }
            50% { transform: scale(0.88); }
            100% { transform: scale(1.05); }
          }

          /* TITLE & SUBTITLE */
          .gallery-title {
            font-size: 24px;
            font-weight: 800;
            font-style: italic;
            color: var(--color-text);
            margin: 2rem 0 0.5rem 0;
            will-change: transform, opacity;
            line-height: 1.2;
          }

          .gallery-title.animate-in {
            animation: titleEnter 0.55s cubic-bezier(0.76, 0, 0.24, 1) 100ms forwards;
          }

          @keyframes titleEnter {
            from {
              clip-path: inset(0 100% 0 0);
            }
            to {
              clip-path: inset(0 0% 0 0);
            }
          }

          .gallery-subtitle {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.68);
            margin: 0.5rem 0 2rem 0;
            will-change: transform, opacity;
          }

          .gallery-subtitle.animate-in {
            animation: subtitleEnter 0.4s ease-out 480ms forwards;
            opacity: 0;
            transform: translateY(10px);
          }

          @keyframes subtitleEnter {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* GALLERY VIEWER */
          .gallery-content-wrapper {
            transition: opacity 150ms ease;
          }

          .gallery-content-wrapper.fade-out {
            opacity: 0;
          }

          .gallery-content-wrapper.fade-in {
            animation: fadeIn 250ms ease forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .gallery-viewer {
            position: relative;
            width: 100%;
            max-width: 700px;
            margin: 0 auto 2rem;
            border-radius: var(--radius-card);
            overflow: hidden;
            background-color: #000;
            height: 420px;
            will-change: clip-path, border-radius;
            border: 1px solid rgba(255, 255, 255, 0.08);
          }

          .gallery-viewer.animate-in {
            animation: viewerReveal 0.8s cubic-bezier(0.76, 0, 0.24, 1) 200ms forwards;
            clip-path: inset(0 0 100% 0);
            border-radius: 0px;
          }

          @keyframes viewerReveal {
            to {
              clip-path: inset(0 0 0% 0);
              border-radius: var(--radius-card);
            }
          }

          .gallery-viewer::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(
              circle 250px at var(--mx, 50%) var(--my, 50%),
              rgba(204, 34, 0, 0.08),
              transparent
            );
            pointer-events: none;
            z-index: 5;
            opacity: 0;
            transition: opacity 300ms ease;
          }

          .gallery-viewer:hover::before {
            opacity: 1;
          }

          .gallery-image-container {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .gallery-image {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            will-change: opacity, transform;
          }

          .gallery-image.active {
            animation: imageEnter 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            opacity: 1;
            transform: scale(1);
          }

          .gallery-image.exit {
            animation: imageExit 0.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes imageEnter {
            from {
              opacity: 0;
              transform: scale(0.97);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes imageExit {
            to {
              opacity: 0;
              transform: scale(1.03);
            }
          }

          /* NAVIGATION BUTTONS */
          .gallery-nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.55);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #fff;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
            will-change: transform, background-color, opacity;
            transition: all 200ms ease;
            backdrop-filter: blur(12px);
          }

          .gallery-nav-btn.animate-in {
            animation: buttonEnter 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 600ms forwards;
            opacity: 0;
            transform: translateY(-50%) scale(0.7);
          }

          @keyframes buttonEnter {
            to {
              opacity: 1;
              transform: translateY(-50%) scale(1);
            }
          }

          .gallery-nav-btn:hover:not(:disabled) {
            background-color: rgba(204, 34, 0, 0.75);
            transform: translateY(-50%) scale(1.1);
          }

          .gallery-nav-btn:active:not(:disabled) {
            transform: translateY(-50%) scale(0.9);
          }

          .gallery-nav-btn:disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }

          .gallery-nav-btn.prev {
            left: 16px;
          }

          .gallery-nav-btn.next {
            right: 16px;
          }

          /* COUNTER & CAPTION */
          .gallery-overlay {
            position: absolute;
            bottom: 16px;
            left: 16px;
            right: 16px;
            z-index: 8;
            pointer-events: none;
          }

          .gallery-counter {
            display: inline-block;
            background-color: rgba(0, 0, 0, 0.6);
            border-radius: 6px;
            padding: 4px 10px;
            font-size: 12px;
            color: #fff;
            font-weight: 600;
            margin-bottom: 0.5rem;
            will-change: transform, opacity;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
          }

          .gallery-counter.counter-flip {
            animation: counterFlip 0.15s ease;
          }

          @keyframes counterFlip {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(-8px); opacity: 0; }
            51% { transform: translateY(8px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }

          .gallery-caption {
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.4;
            max-width: 500px;
            will-change: transform, opacity;
            transition: all 0.2s ease;
          }

          .gallery-caption.exit {
            animation: captionExit 0.2s ease forwards;
          }

          .gallery-caption.enter {
            animation: captionEnter 0.3s ease 0.2s forwards;
            opacity: 0;
            transform: translateY(-6px);
          }

          @keyframes captionExit {
            to {
              opacity: 0;
              transform: translateY(6px);
            }
          }

          @keyframes captionEnter {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* THUMBNAILS */
          .gallery-thumbnails {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding: 1rem 0;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            will-change: opacity;
          }

          .gallery-thumbnails.animate-in {
            animation: thumbnailsEnter 0.5s ease 700ms forwards;
            opacity: 0;
          }

          @keyframes thumbnailsEnter {
            to {
              opacity: 1;
            }
          }

          .gallery-thumbnail {
            position: relative;
            width: 100px;
            height: 70px;
            flex-shrink: 0;
            border-radius: var(--radius-thumb);
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            cursor: pointer;
            background-color: #000;
            will-change: transform, opacity, border-color;
            transition: all 200ms ease;
            opacity: 0.55;
            scale: 0.97;
          }

          .gallery-thumbnail:nth-child(1) {
            animation: thumbnailEnter 0.45s cubic-bezier(0.22, 1, 0.36, 1) 700ms forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          .gallery-thumbnail:nth-child(2) {
            animation: thumbnailEnter 0.45s cubic-bezier(0.22, 1, 0.36, 1) 780ms forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          .gallery-thumbnail:nth-child(3) {
            animation: thumbnailEnter 0.45s cubic-bezier(0.22, 1, 0.36, 1) 860ms forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          .gallery-thumbnail:nth-child(4) {
            animation: thumbnailEnter 0.45s cubic-bezier(0.22, 1, 0.36, 1) 940ms forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          .gallery-thumbnail:nth-child(5) {
            animation: thumbnailEnter 0.45s cubic-bezier(0.22, 1, 0.36, 1) 1020ms forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          .gallery-thumbnail:nth-child(6) {
            animation: thumbnailEnter 0.45s cubic-bezier(0.22, 1, 0.36, 1) 1100ms forwards;
            opacity: 0;
            transform: translateY(20px);
          }

          @keyframes thumbnailEnter {
            to {
              opacity: 0.55;
              transform: translateY(0);
            }
          }

          .gallery-thumbnail:hover:not(.active) {
            opacity: 0.85;
            scale: 1.04;
            border-color: rgba(204, 34, 0, 0.4);
          }

          .gallery-thumbnail.active {
            border-color: var(--color-accent);
            opacity: 1;
            scale: 1;
            animation: thumbnailActivate 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 0 16px rgba(204, 34, 0, 0.25);
          }

          .gallery-thumbnail.active::after {
            content: '';
            position: absolute;
            inset: 0;
            background-color: rgba(204, 34, 0, 0.15);
            animation: overlayFade 0.2s ease forwards;
          }

          @keyframes overlayFade {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes thumbnailActivate {
            from { scale: 0.97; }
            to { scale: 1; }
          }

          .gallery-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          /* RESPONSIVE */
          @media (max-width: 768px) {
            .gallery-section-content {
              padding: 1.5rem 0.5rem;
            }

            .gallery-viewer {
              height: 260px;
            }

            .gallery-title {
              font-size: 20px;
            }

            .gallery-thumbnail {
              width: 70px;
              height: 50px;
            }

            .gallery-nav-btn {
              width: 36px;
              height: 36px;
            }
          }

          @media (max-width: 480px) {
            .gallery-viewer {
              height: 200px;
              border-radius: 12px;
            }

            .gallery-title {
              font-size: 18px;
            }

            .gallery-subtitle {
              font-size: 12px;
            }

            .gallery-thumbnail {
              width: 60px;
              height: 45px;
            }

            .filter-pill {
              padding: 6px 12px;
              font-size: 12px;
            }
          }
        `}</style>

        <section className="gallery-section">
          {/* Blur orbs */}
          <div className="gallery-blur-orb-1" />
          <div className="gallery-blur-orb-2" />

          <div className="gallery-section-content">
            {/* FILTERS */}
            <div className="gallery-filters">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  data-filter={cat.id}
                  className={`filter-pill ${
                    selectedCategory === cat.id ? 'active' : ''
                  }`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* TITLE & SUBTITLE */}
            <h2 className="gallery-title">
              {selectedCategory === 'todos' ? 'Todas las categorías' : CATEGORIES.find((c) => c.id === selectedCategory)?.label}
            </h2>
            <p className="gallery-subtitle">
              {selectedCategory === 'todos'
                ? 'Explora toda nuestra galería'
                : `Descubre nuestros momentos de ${CATEGORIES.find((c) => c.id === selectedCategory)?.label.toLowerCase()}`}
            </p>

            {/* GALLERY CONTENT */}
            <div className="gallery-content-wrapper">
              {/* VIEWER */}
              <div
                ref={viewerRef}
                className="gallery-viewer"
                onMouseMove={handleMouseMove}
                style={{
                  '--mx': `${mousePos.x}px`,
                  '--my': `${mousePos.y}px`,
                }}
              >
                <div className="gallery-image-container">
                  {images.map((img, idx) => (
                    <img
                      key={img.id}
                      src={img.src}
                      alt={img.caption}
                      className={`gallery-image ${
                        idx === currentIndex ? 'active' : 'exit'
                      }`}
                    />
                  ))}
                </div>

                {/* OVERLAY GLOW */}
                <div className="gallery-viewer-glow" />

                {/* NAVIGATION */}
                <button
                  className="gallery-nav-btn prev animate-in"
                  onClick={() => navigate('prev')}
                  aria-label="Imagen anterior"
                  disabled={isTransitioning}
                >
                  ←
                </button>
                <button
                  className="gallery-nav-btn next animate-in"
                  onClick={() => navigate('next')}
                  aria-label="Siguiente imagen"
                  disabled={isTransitioning}
                >
                  →
                </button>

                {/* COUNTER & CAPTION */}
                <div className="gallery-overlay">
                  <div
                    className="gallery-counter"
                    key={`counter-${currentIndex}`}
                  >
                    {currentIndex + 1} / {images.length}
                  </div>
                  {images[currentIndex]?.caption && (
                    <p
                      className="gallery-caption enter"
                      key={`caption-${currentIndex}`}
                    >
                      {images[currentIndex].caption}
                    </p>
                  )}
                </div>
              </div>

              {/* THUMBNAILS */}
              <div className="gallery-thumbnails">
                {images.map((img, idx) => (
                  <button
                    key={img.id}
                    className={`gallery-thumbnail ${
                      idx === currentIndex ? 'active' : ''
                    }`}
                    onClick={() => goToImage(idx)}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  >
                    <img src={img.src} alt="" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaCarouselSection
          title="Se parte de BHQZ Bosa"
          description="Participa en nuestros programas y tu proxima foto podría estar en nuestra galería."
          href="/bhqz-bosa/inscripciones"
          buttonLabel="Inscribirse"
        />
      </Z7Layout>
    </>
  );
}
