// BHQZ Bosa - Registrations Page

import { Seo } from '../../components/Seo.jsx';
import { Z7Layout, RegistrationForm, HeroSection } from '../components/index.jsx';
import { useEffect, useState } from 'react';
import { SCHEDULE, CONTACT_INFO } from '../data/schedule.js';

export default function Inscripciones() {
  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
  };

  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    const key = 'dp_scroll_to_inscripcion';
    const prefillKey = 'dp_prefill_inscripcion';
    const doScroll = () => {
      const el = document.getElementById('inscripcion-form');
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const focusable = el.querySelector('input, select, textarea, button');
      if (focusable) focusable.focus({ preventScroll: true });
    };

    try {
      const pre = localStorage.getItem(prefillKey);
      if (pre) {
        localStorage.removeItem(prefillKey);
        let parsed = null;
        try { parsed = JSON.parse(pre); } catch (e) { parsed = null; }
        if (parsed && typeof parsed === 'object') {
          setInitialData((prev) => ({ ...prev, mensaje: parsed.mensaje || '' }));
          // ensure the form is centered when arriving from modal
          setTimeout(doScroll, 120);
        }
      }

      if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        setTimeout(doScroll, 120);
        return;
      }
    } catch (err) {
      // ignore storage errors
    }

    if (window.location.hash === '#inscripcion-form') {
      setTimeout(doScroll, 40);
    }
  }, []);

  return (
    <>
      <Seo />
      <Z7Layout>
        <HeroSection
          title="Inscripciones"
          subtitle="Únete a nuestra comunidad y comienza tu camino en BHQZ Bosa."
          backgroundImage="/multimedia/BHQZ/fondoinscripciones.png"
          overlayClass="bg-black/20"
        />
          <div>
            <div>
              <section
                id="inscripcion-form"
                className="form-section py-12 md:py-16 bg-cover bg-center relative"
                style={{ backgroundImage: 'url(/multimedia/BHQZ/fondocanchas.png)' }}
              >
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
                  <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-white px-4 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:px-6 sm:py-10 md:px-8 md:py-12">
                    <div className="relative z-10 mb-8 sm:mb-12">
                      <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl md:text-4xl">
                        Formulario de Inscripción
                      </h2>
                      <p className="text-sm text-gray-700 sm:text-base md:text-lg">
                        Completa el siguiente formulario para expresar tu interés en nuestros programas. Nos contactaremos pronto para proporcionarte más información.
                      </p>
                    </div>
                    <div className="relative z-10">
                      <RegistrationForm onSubmit={handleFormSubmit} initialData={initialData} />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="relative">
              <section className="info-section bg-gray-50 py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
                  <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-12 sm:text-3xl md:text-4xl">
                    ¿Preguntas?
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                    {CONTACT_INFO.slice(0, 3).map((info, index) => (
                      <div key={index} className="text-center">
                        <div className="mb-3 text-3xl sm:mb-4 sm:text-4xl">{info.icon}</div>
                        <h3 className="mb-1 text-lg font-bold text-gray-900 sm:mb-2 sm:text-xl">
                          {info.title}
                        </h3>
                        <p className="break-words text-sm text-gray-700 sm:text-base">{info.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <div className="relative">
              <section className="schedule-section py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
                  <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-12 sm:text-3xl md:text-4xl">
                    Horarios de Atención
                  </h2>
                  <div className="max-w-2xl mx-auto rounded-lg bg-white p-6 shadow-md sm:p-8">
                    <div className="space-y-3 sm:space-y-4">
                      {SCHEDULE.map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between ${
                            index !== SCHEDULE.length - 1 ? 'border-b pb-3 sm:pb-4' : ''
                          }`}
                        >
                          <span className="text-sm font-semibold text-gray-900 sm:text-base">{item.day}</span>
                          <span className="text-sm text-gray-700 sm:text-base">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

        <section className="relative overflow-hidden py-12 text-white md:py-16 lg:py-24">
          <img
            src="/multimedia/BHQZ/inscripcion.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.88),rgba(8,8,8,0.58),rgba(8,8,8,0.88))]" />

          <div className="relative z-10 max-w-7xl mx-auto px-3 text-center sm:px-4 md:px-6">
            <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl">
              ¿Quieres conocer más?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm text-white/90 sm:mb-8 sm:text-base md:text-lg">
              Visita nuestra página de programas para explorar todas las opciones disponibles.
            </p>
            <a
              href="/bhqz-bosa/programas"
              className="inline-block rounded-lg bg-white px-6 py-2 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50 sm:px-8 sm:py-3 sm:text-base"
            >
              Ver Programas
            </a>
          </div>
        </section>
      </Z7Layout>
    </>
  );
}
