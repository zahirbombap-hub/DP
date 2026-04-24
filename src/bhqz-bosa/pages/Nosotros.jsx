// BHQZ Bosa - About Us Page

import { Seo } from '../../components/Seo.jsx';
import { Z7Layout, AboutZ7 } from '../components/index.jsx';

export default function Nosotros() {
  const stats = [
    { value: '500+', label: 'Miembros activos' },
    { value: '50+', label: 'Programas' },
    { value: '15+', label: 'Años de experiencia' }
  ];

  const values = [
    {
      title: 'Inclusión',
      description: 'Creemos en un espacio seguro y acogedor para todos, sin importar edad, género o nivel de experiencia.',
      icon: '🤝',
    },
    {
      title: 'Excelencia',
      description: 'Nos comprometemos a ofrecer programas de la más alta calidad con profesionales capacitados.',
      icon: '⭐',
    },
    {
      title: 'Transformación',
      description: 'Buscamos generar cambios positivos en la vida de nuestros miembros y la comunidad.',
      icon: '✨',
    },
    {
      title: 'Sostenibilidad',
      description: 'Trabajamos considerando el impacto social y ambiental de nuestras actividades.',
      icon: '🌱',
    },
  ];

  return (
    <>
      <Seo />
      <Z7Layout>
      {/* Hero Section */}
      <section 
        className="hero-nosotros py-16 md:py-24 text-white relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/multimedia/BHQZ/fondo%20Mingavsargen.webp)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nosotros
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Conocé nuestra historia, nuestros valores y lo que nos impulsa a crear una comunidad transformadora.
            </p>
          </div>
        </div>
      </section>

      {/* About Section with Stats (sticky for scroll-stacking) */}
      <div className="relative">
        <div className="sticky top-0 z-10 h-screen flex items-center">
          <div className="w-full">
            <AboutZ7
              title="Sobre BHQZ Bosa"
              description="BHQZ Bosa es una organización dedicada a promover el desarrollo integral de nuestros miembros a través de la combinación del arte, la cultura y el deporte. Desde hace más de 15 años, hemos trabajado incansablemente para crear un espacio donde cada persona pueda descubrir su potencial y crecer en un ambiente de respeto, inclusión y excelencia."
              stats={stats}
            />
          </div>
        </div>
      </div>

      {/* Misión + Visión (shared gradient) */}
      <div className="relative z-20 -mt-12 md:-mt-16 rounded-t-3xl overflow-hidden bg-gradient-to-b from-red-950 to-black text-white">
        <section className="mision-section py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Nuestra Misión
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Promover el desarrollo integral de individuos y comunidades a través de programas innovadores que combinan arte, cultura y deporte. Nos comprometemos a crear espacios accesibles, inclusivos y transformadores donde cada persona pueda descubrir su potencial único y contribuir a una sociedad más justa y dinámica.
              </p>
            </div>
          </div>
        </section>

        <section className="vision-section py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Nuestra Visión
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Ser una organización líder en la región, reconocida por la excelencia de nuestros programas, la calidad de nuestros profesionales y el impacto positivo que generamos en la vida de las personas. Aspiramos a ser un referente en la integración del arte, la cultura y el deporte como herramientas de transformación social y personal.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Valores Section */}
      <section className="valores-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="valor-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (background image) */}
      <section
        className="py-16 md:py-24 text-white relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/multimedia/BHQZ/fotos/comunidad.webp)' }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Únete a nuestra comunidad
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Si compartes nuestros valores y deseas ser parte de un movimiento transformador, te invitamos a conocer nuestros programas.
          </p>
          <a
            href="/bhqz-bosa/programas"
            className="inline-block rounded-lg px-8 py-3 font-semibold text-white bg-gradient-to-b from-red-700 via-red-800 to-red-900 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm"
          >
            Explorar programas
          </a>
        </div>
      </section>
    </Z7Layout>
    </>
  );
}
