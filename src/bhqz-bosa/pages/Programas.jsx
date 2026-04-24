// BHQZ Bosa - Programs Page

import { Seo } from '../../components/Seo.jsx';
import { useState } from 'react';
import { Z7Layout, ProgramCard, ProgramModal, HeroSection, FilterButtons } from '../components/index.jsx';
import { PROGRAMS, getCategories } from '../data/programs.js';

export default function Programas() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filteredPrograms = selectedCategory
    ? PROGRAMS.filter((program) => program.category === selectedCategory)
    : PROGRAMS;

  const categories = getCategories();

  const categoryItems = categories.map((cat) => ({
    id: cat,
    name: cat,
    count: PROGRAMS.filter((p) => p.category === cat).length,
  }));

  return (
    <>
      <Seo />
      <Z7Layout>
        <HeroSection
          title="Nuestros Programas"
          subtitle="Descubre nuestros cursos, talleres y actividades disponibles para todos los niveles."
          backgroundImage="/multimedia/BHQZ/programas2.png"
        />
        

        <FilterButtons
          items={categoryItems}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          totalCount={PROGRAMS.length}
        />

        <section className="programs-section py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
            {filteredPrograms.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 md:gap-6">
                {filteredPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} onSelect={setSelectedProgram} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-base text-gray-500 sm:text-lg">
                  No hay programas disponibles en esta categoría.
                </p>
              </div>
            )}
          </div>
        </section>

          {selectedProgram ? (
            <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
          ) : null}

        <section className="relative overflow-hidden py-12 text-white md:py-16 lg:py-24">
          <img
            src="/multimedia/BHQZ/programas.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.88),rgba(8,8,8,0.56),rgba(8,8,8,0.88))]" />

          <div className="relative z-10 max-w-7xl mx-auto px-3 text-center sm:px-4 md:px-6">
            <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl">
              ¿No encontraste lo que buscas?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm text-white/90 sm:mb-8 sm:text-base md:text-lg">
              Contactanos para conocer sobre programas personalizados o próximas iniciativas.
            </p>
            <a
              href="/bhqz-bosa/contacto"
              className="inline-block rounded-lg bg-white px-6 py-2 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50 sm:px-8 sm:py-3 sm:text-base"
            >
              Contactar
            </a>
          </div>
        </section>
      </Z7Layout>
    </>
  );
}
