// BHQZ Bosa - Contact Page

import { Seo } from '../../components/Seo.jsx';
import { Z7Layout, HeroSection } from '../components/index.jsx';
import PixelSnow from '../components/PixelSnow.jsx';
import { SCHEDULE, CONTACT_INFO, SOCIAL_LINKS } from '../data/schedule.js';

export default function Contacto() {
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.156!2d-74.2!3d4.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f0000000000001%3A0x0!2zNzMgU3VyIDczIFR2LiA4OGIsIEJvc2HDoSwgQm9nb3TDoQ!5e0!3m2!1sen!2sco!4v1708801234567';
  const contactCardClasses =
    'glow-card group flex h-full flex-col items-center justify-center rounded-xl p-5 text-center backdrop-blur-sm sm:p-6 md:p-7';
  const quickLinkCardClasses =
    'glow-card group flex h-full flex-col rounded-xl p-5 backdrop-blur-sm sm:p-6';
  const highlightedSectionTitleClasses =
    'mx-auto mb-8 w-fit rounded-full border border-blue-400/30 bg-gradient-to-r from-black/85 via-slate-950/80 to-blue-950/80 px-6 py-3 text-center text-2xl font-bold text-white shadow-[0_16px_40px_rgba(15,23,42,0.35)] sm:mb-12 sm:px-8 sm:text-3xl md:text-4xl';

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
      icon: '✍️',
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
          @keyframes glow-pulse {
            0%, 100% {
              filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
            }
            50% {
              filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.8));
            }
          }

          .glow-card {
            animation: glow-pulse 3s ease-in-out infinite;
            position: relative;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
            border: 1px solid rgba(59, 130, 246, 0.3);
            transition: all 0.3s ease;
          }

          .glow-card:hover {
            border-color: rgba(59, 130, 246, 0.8);
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
          }
        `}</style>

        <HeroSection
          title="Contacto"
          subtitle="Nos encanta escucharte. Comunicate con nosotros para cualquier consulta."
        />

        <section className="contact-info py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 md:gap-6">
              {CONTACT_INFO.map((info, index) => {
                const CardTag = info.link && info.link !== '#' ? 'a' : 'div';

                return (
                  <CardTag
                    key={index}
                    {...(CardTag === 'a' ? { href: info.link } : {})}
                    className={contactCardClasses}
                  >
                    <div className="mb-3 text-3xl text-blue-300 drop-shadow-[0_0_18px_rgba(96,165,250,0.45)] sm:mb-4 sm:text-4xl md:text-5xl">
                      {info.icon}
                    </div>
                    <h3 className="mb-2 text-base font-bold text-white sm:text-lg">
                      {info.title}
                    </h3>
                    <p className="break-words text-xs font-medium text-white/85 sm:text-sm md:text-base">
                      {info.content}
                    </p>
                  </CardTag>
                );
              })}
            </div>
          </div>
        </section>

        <section className="schedule-section relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] py-12 text-white md:py-16">
          <PixelSnow
            color="#dbeafe"
            density={0.22}
            speed={1.1}
            pixelResolution={220}
            flakeSize={0.012}
            minFlakeSize={1.15}
            depthFade={10}
            variant="square"
            className="pointer-events-none opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.72),rgba(15,23,42,0.48),rgba(2,6,23,0.78))]" />

          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
            <h2 className={highlightedSectionTitleClasses}>
              Horarios de Atencion
            </h2>

            <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-black/35 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-8">
              <div className="space-y-3 sm:space-y-4">
                {SCHEDULE.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between ${
                      index !== SCHEDULE.length - 1 ? 'border-b border-white/10 pb-3 sm:pb-4' : ''
                    }`}
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">{item.day}</span>
                    <span className="text-sm text-white/80 sm:text-base">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="location-section py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
            <h2 className={highlightedSectionTitleClasses}>
              Ubicacion
            </h2>

            <div className="max-w-4xl mx-auto">
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

        <section className="social-section bg-gray-50 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-12 sm:text-3xl md:text-4xl">
              Siguenos en Redes Sociales
            </h2>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg text-white shadow-md transition-colors hover:bg-blue-700 hover:shadow-lg sm:h-14 sm:w-14 sm:text-xl md:h-16 md:w-16 md:text-2xl"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="quick-links py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
            <h2 className={highlightedSectionTitleClasses}>
              Enlaces Rapidos
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 md:gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={quickLinkCardClasses}
                >
                  <div className="mb-4 text-3xl text-blue-300 drop-shadow-[0_0_18px_rgba(96,165,250,0.45)] sm:text-4xl">
                    {link.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                    {link.title}
                  </h3>
                  <p className="text-sm font-medium text-white/85 sm:text-base">
                    {link.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 text-white md:py-16 lg:py-24">
          <img
            src="/multimedia/BHQZ/profe.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.88),rgba(8,8,8,0.56),rgba(8,8,8,0.88))]" />

          <div className="relative z-10 max-w-7xl mx-auto px-3 text-center sm:px-4 md:px-6">
            <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl">
              ¿Tienes una pregunta?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm text-white/90 sm:mb-8 sm:text-base md:text-lg">
              No dudes en contactarnos. Estamos aqui para ayudarte y responder todas tus consultas.
            </p>
            <a
              href="mailto:info@z7sport.com"
              className="inline-block rounded-lg bg-white px-6 py-2 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50 sm:px-8 sm:py-3 sm:text-base"
            >
              Enviar Email
            </a>
          </div>
        </section>
      </Z7Layout>
    </>
  );
}
