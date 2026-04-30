import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

// BHQZ Bosa - About Section Component
// Displays about information with optional stats

const STAGGER_DELAY_MS = 150;
const INTRO_TITLE_DELAY_MS = 100;
const PARAGRAPH_BASE_DELAY_MS = 200;
const PARAGRAPH_LINE_STAGGER_MS = 50;

function parseMetricValue(value) {
  const normalizedValue = String(value).trim();
  const match = normalizedValue.match(/^([\d.,]+)(.*)$/);

  if (!match) {
    return { number: 0, suffix: normalizedValue };
  }

  return {
    number: Number(match[1].replace(/[^\d]/g, '')) || 0,
    suffix: match[2] ?? '',
  };
}

function splitWords(text) {
  return String(text)
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function areLinesEqual(previousLines, nextLines) {
  if (previousLines.length !== nextLines.length) {
    return false;
  }

  return previousLines.every((line, index) => line === nextLines[index]);
}

function useInViewOnce(targetRef, threshold) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const targetElement = targetRef.current;

    if (!targetElement || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(targetElement);
      },
      { threshold }
    );

    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, targetRef, threshold]);

  return isVisible;
}

function useSplitTextLines(text) {
  const measurementRef = useRef(null);
  const resizeFrameRef = useRef(null);
  const words = useMemo(() => splitWords(text), [text]);
  const [lines, setLines] = useState(() => {
    const initialText = String(text).trim();
    return initialText ? [initialText] : [];
  });

  useLayoutEffect(() => {
    const measurementElement = measurementRef.current;
    const fallbackLine = String(text).trim();

    if (!measurementElement || words.length === 0) {
      setLines(fallbackLine ? [fallbackLine] : []);
      return undefined;
    }

    const updateLines = () => {
      const wordElements = Array.from(
        measurementElement.querySelectorAll('[data-about-word]')
      );
      const nextLines = [];
      let currentTop = null;

      wordElements.forEach((wordElement) => {
        const wordTop = wordElement.offsetTop;
        const wordText = wordElement.textContent ?? '';

        if (currentTop === null || Math.abs(wordTop - currentTop) > 1) {
          nextLines.push(wordText);
          currentTop = wordTop;
          return;
        }

        nextLines[nextLines.length - 1] += wordText;
      });

      const normalizedLines = nextLines
        .map((line) => line.trimEnd())
        .filter(Boolean);
      const finalLines = normalizedLines.length > 0
        ? normalizedLines
        : (fallbackLine ? [fallbackLine] : []);

      setLines((previousLines) => (
        areLinesEqual(previousLines, finalLines) ? previousLines : finalLines
      ));
    };

    const scheduleUpdate = () => {
      if (resizeFrameRef.current) {
        cancelAnimationFrame(resizeFrameRef.current);
      }

      resizeFrameRef.current = requestAnimationFrame(updateLines);
    };

    scheduleUpdate();

    let resizeObserver;
    let handleWindowResize;

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(scheduleUpdate);
      resizeObserver.observe(measurementElement);
    } else {
      handleWindowResize = () => {
        scheduleUpdate();
      };
      window.addEventListener('resize', handleWindowResize);
    }

    const fontSet = document.fonts;

    if (fontSet?.ready) {
      fontSet.ready.then(scheduleUpdate).catch(() => {});
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }

      if (handleWindowResize) {
        window.removeEventListener('resize', handleWindowResize);
      }

      if (resizeFrameRef.current) {
        cancelAnimationFrame(resizeFrameRef.current);
        resizeFrameRef.current = null;
      }
    };
  }, [text, words]);

  return { lines, measurementRef, words };
}

export default function AboutZ7({
  eyebrow = "QUIENES SOMOS",
  title = "Sobre BHQZ Bosa",
  description = "Somos una comunidad dedicada al desarrollo integral a traves del arte, la cultura y el deporte.",
  stats = [],
}) {
  const introRef = useRef(null);
  const statsContainerRef = useRef(null);
  const isIntroVisible = useInViewOnce(introRef, 0.1);
  const isStatsVisible = useInViewOnce(statsContainerRef, 0.1);
  const { lines: descriptionLines, measurementRef, words: descriptionWords } =
    useSplitTextLines(description);

  return (
    <section className="about-z7 py-12 sm:py-16 md:py-20 pb-20 sm:pb-24">
      <style>{`
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 15px rgba(255, 0, 127, 0.2);
          }
          50% {
            box-shadow: 0 0 25px rgba(255, 0, 127, 0.4);
          }
        }
        
        .glow-card {
          animation: glow-pulse 3s ease-in-out infinite;
          position: relative;
          background: #410909;
          border: 1px solid rgba(255, 0, 127, 0.3);
          transition: all 0.3s ease;
        }
        
        .glow-card:hover {
          border-color: rgba(255, 0, 127, 0.8);
          background: #410909;
        }

        .about-eyebrow {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          will-change: opacity, transform;
        }

        .about-eyebrow--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-title {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .about-title--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-copy-line-clip {
          display: block;
          overflow: hidden;
        }

        .about-copy-line {
          display: block;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .about-copy-line--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .stat-card--visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div
          ref={introRef}
          className="space-y-4 bg-gradient-to-r from-black/70 to-black/40 p-8 rounded-lg"
        >
          <span
            className={`about-eyebrow inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-red-500/90 ${
              isIntroVisible ? 'about-eyebrow--visible' : ''
            }`}
          >
            {eyebrow}
          </span>

          <h2
            className={`about-title z7-section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white ${
              isIntroVisible ? 'about-title--visible' : ''
            }`}
            style={{ transitionDelay: `${INTRO_TITLE_DELAY_MS}ms` }}
          >
            {title}
          </h2>

          <div className="relative">
            <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium leading-relaxed mb-8 sm:mb-12">
              {descriptionLines.map((line, index) => (
                <span key={`${line}-${index}`} className="about-copy-line-clip">
                  <span
                    className={`about-copy-line ${
                      isIntroVisible ? 'about-copy-line--visible' : ''
                    }`}
                    style={{
                      transitionDelay: `${
                        PARAGRAPH_BASE_DELAY_MS +
                        index * PARAGRAPH_LINE_STAGGER_MS
                      }ms`,
                    }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </p>

            <div
              ref={measurementRef}
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 w-full select-none opacity-0"
            >
              <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                {descriptionWords.map((word, index) => (
                  <span
                    key={`measure-${word}-${index}`}
                    data-about-word
                    className="inline-block whitespace-pre"
                  >
                    {index < descriptionWords.length - 1 ? `${word} ` : word}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {stats.length > 0 && (
          <div
            ref={statsContainerRef}
            className="flex justify-center mt-6 sm:mt-12 px-2"
          >
            <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 w-full max-w-3xl">
              {stats.map((stat, index) => {
                const { suffix } = parseMetricValue(stat.value);

                return (
                  <div
                    key={`${stat.label}-${stat.value}`}
                    className={`glow-card stat-card text-center p-2.5 sm:p-7 md:p-8 backdrop-blur-sm rounded-xl ${
                      isStatsVisible ? 'stat-card--visible' : ''
                    }`}
                    style={{ transitionDelay: `${index * STAGGER_DELAY_MS}ms` }}
                  >
                    <div
                      className="z7-number-font text-xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-3"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      +{stat.value}
                      {suffix}
                    </div>
                    <p className="text-[10px] leading-tight sm:text-sm md:text-base text-white/90 font-semibold line-clamp-2">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
