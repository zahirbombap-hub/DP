import { useEffect } from 'react';
import { ModalPortal } from '../../components/welcome/ModalPortal.jsx';

export default function ProgramModal({ program, onClose }) {
  useEffect(() => {
    if (!program) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose?.(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [program, onClose]);

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
    // navigate to inscripciones; hash is included for fallback
    window.location.href = '/bhqz-bosa/inscripciones#inscripcion-form';
  };

  return (
    <ModalPortal>
      <div
        className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-4 py-6"
        onClick={onClose}
        role="presentation"
      >
        <div
          className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="program-modal-title"
        >
          {program.image && (
            <div className="relative h-72 md:h-96 w-full overflow-hidden">
              <img src={program.image} alt={program.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            </div>
          )}

          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 id="program-modal-title" className="text-2xl font-bold text-white">{program.title}</h3>
                <p className="mt-2 text-sm text-white/80">{program.category} • {program.level} • {program.schedule}</p>
                {program.novedad && (
                  <p className="mt-3 text-sm text-yellow-300 bg-yellow-900/10 inline-block px-3 py-1 rounded">{program.novedad}</p>
                )}
              </div>
              <div className="flex flex-col items-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  aria-label="Cerrar detalle"
                >
                  ✕
                </button>
                <div className="text-right">
                  <div className="text-xs font-semibold text-white/70">Precio</div>
                  <div className="text-lg font-bold text-red-600">{program.price}</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-base text-white/90 leading-relaxed">{program.description}</p>
            </div>

            {program.details && (
              <div className="mt-6 rounded-lg border border-white/6 bg-white/[0.02] p-4">
                <h4 className="text-sm font-semibold text-white/80">Detalle</h4>
                <p className="mt-2 text-sm text-gray-300">{program.details}</p>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleInscribirse}
                className="inline-block rounded-lg px-6 py-3 text-sm font-semibold text-white bg-gradient-to-b from-red-700 via-red-800 to-red-900 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm"
              >
                Inscribirse
              </button>
              <button
                onClick={onClose}
                className="inline-block rounded-lg px-6 py-3 text-sm font-medium text-white/90 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
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
