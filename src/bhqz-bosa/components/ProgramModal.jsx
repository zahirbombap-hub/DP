import { useCallback, useEffect, useRef } from 'react';
import { ModalPortal } from '../../components/welcome/ModalPortal.jsx';

export default function ProgramModal({ program, onClose }) {
  const overlayRef = useRef(null);
  const cardRef = useRef(null);
  const primaryButtonRef = useRef(null);
  const closeTimerRef = useRef(null);
  const isClosingRef = useRef(false);

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const requestClose = useCallback(() => {
    if (isClosingRef.current) {
      return;
    }

    if (prefersReducedMotion()) {
      onClose?.();
      return;
    }

    isClosingRef.current = true;
    overlayRef.current?.classList.remove('modal-open');
    overlayRef.current?.classList.add('modal-closing');

    closeTimerRef.current = window.setTimeout(() => {
      onClose?.();
    }, 250);
  }, [onClose]);

  useEffect(() => {
    if (!program) return undefined;

    isClosingRef.current = false;
    const overlayElement = overlayRef.current;
    const cardElement = cardRef.current;
    const primaryButton = primaryButtonRef.current;

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        requestClose();
      }
    };

    const handleMouseMove = (e) => {
      if (!cardElement) return;
      const rect = cardElement.getBoundingClientRect();
      cardElement.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      cardElement.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };

    const handleMouseLeave = () => {
      if (!cardElement) return;
      cardElement.style.setProperty('--mx', '50%');
      cardElement.style.setProperty('--my', '50%');
    };

    const handlePrimaryPointerDown = (e) => {
      const button = primaryButtonRef.current;

      if (!button) return;

      const rect = button.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = 300;

      ripple.className = 'program-modal-ripple';
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;

      button.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 500);
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    cardElement?.addEventListener('mousemove', handleMouseMove);
    cardElement?.addEventListener('mouseleave', handleMouseLeave);
    primaryButton?.addEventListener('pointerdown', handlePrimaryPointerDown);

    const frame = window.requestAnimationFrame(() => {
      overlayElement?.classList.remove('modal-closing');
      overlayElement?.classList.add('modal-open');
    });

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      cardElement?.removeEventListener('mousemove', handleMouseMove);
      cardElement?.removeEventListener('mouseleave', handleMouseLeave);
      primaryButton?.removeEventListener('pointerdown', handlePrimaryPointerDown);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(closeTimerRef.current);
    };
  }, [program, requestClose]);

  if (!program) return null;

  const handleInscribirse = (e) => {
    e?.preventDefault?.();
    onClose?.();
    try {
      localStorage.setItem('dp_scroll_to_inscripcion', '1');
      const payload = {
        mensaje: `Quiero Inscribirme a "${program.title}" y ${program.category || ''}`.trim(),
        programId: program.id || null,
        programTitle: program.title || '',
        programCategory: program.category || '',
      };
      localStorage.setItem('dp_prefill_inscripcion', JSON.stringify(payload));
    } catch (err) {
      // ignore
    }
    window.location.href = '/bhqz-bosa/inscripciones#inscripcion-form';
  };

  return (
    <ModalPortal>
      <style>{`
        .program-modal-overlay {
          opacity: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          transition:
            opacity 250ms ease-out,
            backdrop-filter 300ms ease-out,
            -webkit-backdrop-filter 300ms ease-out;
        }

        .program-modal-card {
          --mx: 50%;
          --my: 50%;
          opacity: 0;
          transform: translateY(24px) scale(0.88);
          will-change: transform, opacity;
          transition:
            opacity 400ms cubic-bezier(0.34, 1.56, 0.64, 1),
            transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .program-modal-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            circle 200px at var(--mx) var(--my),
            rgba(204, 34, 0, 0.05),
            transparent 70%
          );
          opacity: 0;
          pointer-events: none;
          transition: opacity 250ms ease;
        }

        .program-modal-card:hover::before {
          opacity: 1;
        }

        .program-modal-overlay.modal-open {
          opacity: 1;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .program-modal-overlay.modal-open .program-modal-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .program-modal-overlay.modal-closing {
          opacity: 0;
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
        }

        .program-modal-overlay.modal-closing .program-modal-card {
          opacity: 0;
          transform: translateY(16px) scale(0.92);
          transition:
            opacity 250ms cubic-bezier(0.55, 0, 1, 0.45),
            transform 250ms cubic-bezier(0.55, 0, 1, 0.45);
        }

        .program-modal-title,
        .program-modal-meta,
        .program-modal-price,
        .program-modal-alert,
        .program-modal-description,
        .program-modal-details,
        .program-modal-action--primary,
        .program-modal-action--secondary {
          opacity: 0;
          transform: translateY(10px);
          will-change: transform, opacity;
        }

        .program-modal-title {
          position: relative;
          margin-bottom: 0;
          padding-bottom: 18px;
        }

        .program-modal-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 3px;
          border-radius: 999px;
          background: #cc2200;
        }

        .program-modal-close {
          transition:
            transform 200ms ease,
            background-color 200ms ease,
            border-color 200ms ease;
        }

        .program-modal-close:hover {
          transform: rotate(90deg);
          background: rgba(255, 255, 255, 0.1);
        }

        .program-modal-close:active {
          transform: scale(0.85) rotate(90deg);
          transition-duration: 100ms;
        }

        .program-modal-action--primary,
        .program-modal-action--secondary {
          position: relative;
          overflow: hidden;
        }

        .program-modal-action--primary {
          transform: translateY(10px) scale(0.9);
          transition:
            background-color 200ms ease,
            transform 200ms ease,
            box-shadow 200ms ease;
        }

        .program-modal-action--primary:hover {
          background: #ff3300 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(204, 34, 0, 0.4);
        }

        .program-modal-action--primary:active {
          transform: translateY(-1px) scale(0.97);
          transition-duration: 80ms;
        }

        .program-modal-ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          transform: translate(-50%, -50%) scale(0);
          pointer-events: none;
          opacity: 1;
          animation: programModalRipple 500ms ease-out forwards;
        }

        .program-modal-action--secondary {
          transition:
            border-color 200ms ease,
            color 200ms ease,
            background-color 200ms ease,
            transform 200ms ease;
        }

        .program-modal-action--secondary:hover {
          border-color: rgba(255, 255, 255, 0.25) !important;
          color: #ffffff !important;
        }

        .program-modal-action--secondary:active {
          transform: scale(0.97);
        }

        .program-modal-alert {
          border-left: 3px solid transparent;
          box-shadow: 0 0 0 rgba(230, 168, 23, 0);
        }

        .program-modal-overlay.modal-open .program-modal-title {
          animation: programModalItemIn 300ms ease-out 400ms forwards;
        }

        .program-modal-overlay.modal-open .program-modal-title::after {
          animation: programModalLineIn 350ms ease-out 420ms forwards;
        }

        .program-modal-overlay.modal-open .program-modal-meta,
        .program-modal-overlay.modal-open .program-modal-price {
          animation: programModalItemIn 300ms ease-out 480ms forwards;
        }

        .program-modal-overlay.modal-open .program-modal-alert {
          animation:
            programModalItemIn 300ms ease-out 580ms forwards,
            programModalAlertAccent 250ms ease-out 580ms forwards,
            programModalAlertPulse 1200ms ease-out 930ms 1 forwards;
        }

        .program-modal-overlay.modal-open .program-modal-description,
        .program-modal-overlay.modal-open .program-modal-details {
          animation: programModalItemIn 300ms ease-out 660ms forwards;
        }

        .program-modal-overlay.modal-open .program-modal-action--primary {
          animation: programModalPrimaryIn 300ms cubic-bezier(0.34, 1.56, 0.64, 1) 760ms forwards;
        }

        .program-modal-overlay.modal-open .program-modal-action--secondary {
          animation: programModalSecondaryIn 300ms ease-out 840ms forwards;
        }

        @keyframes programModalItemIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes programModalPrimaryIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes programModalSecondaryIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 0.7;
            transform: translateY(0);
          }
        }

        @keyframes programModalLineIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes programModalAlertAccent {
          from {
            border-left-color: transparent;
          }
          to {
            border-left-color: #e6a817;
          }
        }

        @keyframes programModalAlertPulse {
          0% {
            box-shadow: 0 0 0 rgba(230, 168, 23, 0);
          }
          50% {
            box-shadow: 0 0 12px rgba(230, 168, 23, 0.3);
          }
          100% {
            box-shadow: 0 0 0 rgba(230, 168, 23, 0);
          }
        }

        @keyframes programModalRipple {
          from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .program-modal-overlay,
          .program-modal-card,
          .program-modal-card::before,
          .program-modal-title,
          .program-modal-meta,
          .program-modal-price,
          .program-modal-alert,
          .program-modal-description,
          .program-modal-details,
          .program-modal-action--primary,
          .program-modal-action--secondary,
          .program-modal-title::after,
          .program-modal-close,
          .program-modal-ripple {
            animation: none !important;
            transition: none !important;
          }

          .program-modal-overlay {
            opacity: 1 !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }

          .program-modal-card,
          .program-modal-title,
          .program-modal-meta,
          .program-modal-price,
          .program-modal-alert,
          .program-modal-description,
          .program-modal-details,
          .program-modal-action--primary,
          .program-modal-action--secondary {
            opacity: 1 !important;
            transform: none !important;
          }

          .program-modal-title::after {
            width: 100% !important;
          }

          .program-modal-action--secondary {
            opacity: 1 !important;
          }
        }
      `}</style>
      <div
        ref={overlayRef}
        className="program-modal-overlay fixed inset-0 z-[90] flex items-center justify-center px-4 py-6"
        onClick={requestClose}
        role="presentation"
      >
        <div
          ref={cardRef}
          className="program-modal-card relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="program-modal-title"
        >
          {program.image && (
            <div className="relative h-72 w-full overflow-hidden md:h-96">
              <img src={program.image} alt={program.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            </div>
          )}

          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 id="program-modal-title" className="program-modal-title text-2xl font-bold text-white">
                  {program.title}
                </h3>
                <p className="program-modal-meta mt-2 text-sm text-white/80">
                  {program.category}
                  {' • '}
                  {program.level}
                  {' • '}
                  {program.schedule}
                </p>
                {program.novedad && (
                  <p className="program-modal-alert mt-3 inline-block rounded px-3 py-1 text-sm text-yellow-300 bg-yellow-900/10">
                    {program.novedad}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end gap-3">
                <button
                  type="button"
                  onClick={requestClose}
                  className="program-modal-close inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  aria-label="Cerrar detalle"
                >
                  {'✕'}
                </button>
                <div className="program-modal-price text-right">
                  <div className="text-xs font-semibold text-white/70">Precio</div>
                  <div className="text-lg font-bold text-red-600">{program.price}</div>
                </div>
              </div>
            </div>

            <div className="program-modal-description mt-6">
              <p className="text-base leading-relaxed text-white/90">{program.description}</p>
            </div>

            {program.details && (
              <div className="program-modal-details mt-6 rounded-lg border border-white/6 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold text-white/80">Detalle</h4>
                <p className="mt-2 text-sm text-gray-300">{program.details}</p>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                ref={primaryButtonRef}
                type="button"
                onClick={handleInscribirse}
                className="program-modal-action--primary inline-block rounded-lg bg-gradient-to-b from-red-700 via-red-800 to-red-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                Inscribirse
              </button>
              <button
                type="button"
                onClick={requestClose}
                className="program-modal-action--secondary inline-block rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/[0.04]"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}
