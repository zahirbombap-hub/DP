import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Target, Trophy } from 'lucide-react';
import { Seo } from '../../components/Seo.jsx';
import {
  Z7Layout,
  ProgramCard,
  ProgramModal,
  HeroSection,
  FilterButtons,
  CtaCarouselSection,
} from '../components/index.jsx';
import { PROGRAMS, getCategories } from '../data/programs.js';

const smoothEase = [0.22, 1, 0.36, 1];

const introVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: 'blur(14px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.84,
      ease: smoothEase,
    },
  },
};

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
    count: PROGRAMS.filter((program) => program.category === cat).length,
  }));

  const overviewItems = [
    {
      label: 'Actividades activas',
      value: String(filteredPrograms.length).padStart(2, '0'),
      icon: Sparkles,
    },
    {
      label: 'Enfoque',
      value: selectedCategory || 'Todas',
      icon: Trophy,
    },
    {
      label: 'Experiencia',
      value: 'Formativa + competitiva',
      icon: Target,
    },
  ];

  return (
    <>
      <Seo />
      <Z7Layout>
        <HeroSection
          title="Nuestros Programas"
          subtitle="Descubre nuestros cursos, talleres y actividades disponibles para todos los niveles."
          backgroundImage="/multimedia/BHQZ/programas2.webp"
        />

        <section className="relative isolate overflow-hidden bg-[#05070d] py-14 text-white md:py-20 lg:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#04060b_0%,#050913_30%,#060913_65%,#04060b_100%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, 18, 0], y: [0, -16, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-sky-400/[0.14] blur-[120px]"
          />
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, -22, 0], y: [0, 24, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[-8%] top-[32%] h-80 w-80 rounded-full bg-red-500/10 blur-[140px]"
          />
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.55),transparent)]" />

          <div className="relative z-10">
            <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={introVariants}
                className="flex flex-col gap-8 border-b border-white/10 pb-10 md:gap-10 md:pb-12 lg:flex-row lg:items-end lg:justify-between"
              >
                <div className="max-w-3xl">
                  <motion.span
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.45, delay: 0.08, ease: smoothEase }}
                    className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur-xl"
                  >
                    <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.75)]" />
                    Programaci&oacute;n deportiva
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.56, delay: 0.14, ease: smoothEase }}
                    className="max-w-2xl text-3xl font-semibold leading-[0.96] text-white sm:text-4xl lg:text-[3.25rem]"
                  >
                    Deporte con energ&iacute;a competitiva y una puesta en escena premium.
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.56, delay: 0.22, ease: smoothEase }}
                    className="mt-5 max-w-2xl text-sm leading-7 text-white/[0.68] sm:text-base"
                  >
                    Tres experiencias deportivas dise&ntilde;adas para impulsar disciplina,
                    rendimiento y comunidad, con una composici&oacute;n limpia, oscura y
                    altamente visual desde el primer render.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.62, delay: 0.18, ease: smoothEase }}
                  className="grid gap-3 sm:grid-cols-2 lg:w-[30rem]"
                >
                  {overviewItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className={`rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl ${
                          index === 2 ? 'sm:col-span-2' : ''
                        }`}
                      >
                        <div className="mb-4 flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/[0.45]">
                          <Icon className="h-3.5 w-3.5 text-sky-200/[0.8]" />
                          <span>{item.label}</span>
                        </div>
                        <p className="text-lg font-semibold text-white sm:text-xl">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>

            <FilterButtons
              items={categoryItems}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
              totalCount={PROGRAMS.length}
              variant="premium"
              className="pt-8 md:pt-10 pb-8 md:pb-10"
            />

            <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
              <AnimatePresence mode="wait">
                {filteredPrograms.length > 0 ? (
                  <motion.div
                    key={selectedCategory ?? 'all'}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.38, ease: smoothEase }}
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
                  >
                    {filteredPrograms.map((program, index) => (
                      <ProgramCard
                        key={program.id}
                        program={program}
                        onSelect={setSelectedProgram}
                        index={index}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty-state"
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.42, ease: smoothEase }}
                    className="rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-12 text-center shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
                  >
                    <p className="text-lg font-semibold text-white">
                      No hay programas disponibles en esta categor&iacute;a.
                    </p>
                    <p className="mt-3 text-sm text-white/[0.64]">
                      Prueba otro filtro o cont&aacute;ctanos para conocer pr&oacute;ximas aperturas.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {selectedProgram ? (
          <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
        ) : null}

        <CtaCarouselSection
          title="No encontraste lo que buscas?"
          description="Contactanos para conocer sobre programas personalizados o proximas iniciativas."
          href="/bhqz-bosa/contacto"
          buttonLabel="Contactar"
        />
      </Z7Layout>
    </>
  );
}
