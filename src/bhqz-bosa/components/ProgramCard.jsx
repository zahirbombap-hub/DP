import { motion } from 'framer-motion';
import { ArrowRight, CalendarRange, Layers3, WalletCards } from 'lucide-react';

const smoothEase = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(14px)',
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.78,
      delay: index * 0.12,
      ease: smoothEase,
    },
  }),
};

const getCategoryBadge = (category) => {
  if (category === 'Deporte') {
    return 'border-sky-400/25 bg-sky-400/[0.12] text-sky-100';
  }

  if (category === 'Cultura') {
    return 'border-amber-300/25 bg-amber-300/[0.12] text-amber-100';
  }

  if (category === 'Arte') {
    return 'border-fuchsia-300/25 bg-fuchsia-300/[0.12] text-fuchsia-100';
  }

  return 'border-white/[0.15] bg-white/[0.08] text-white/80';
};

const getPriceLabel = (price) => {
  if (!price || price === '--') {
    return 'A consultar';
  }

  return price;
};

export default function ProgramCard({ program, onSelect = null, index = 0 }) {
  const infoItems = [
    { label: 'Nivel', value: program.level, icon: Layers3 },
    { label: 'Horario', value: program.schedule, icon: CalendarRange },
    { label: 'Precio', value: getPriceLabel(program.price), icon: WalletCards },
  ];

  const actionClasses =
    'group/button relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-sky-300/[0.35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060913]';

  const buttonContent = (
    <>
      <span className="absolute inset-0 translate-y-full bg-[linear-gradient(135deg,rgba(37,99,235,0.96),rgba(239,68,68,0.88))] transition-transform duration-500 ease-out group-hover/button:translate-y-0" />
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover/button:opacity-100" />
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover/button:translate-x-1">
        M&aacute;s informaci&oacute;n
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
      </span>
    </>
  );

  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.014,
        transition: { duration: 0.36, ease: smoothEase },
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,22,34,0.96),rgba(6,9,19,0.98))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.34)] transition-[box-shadow,border-color] duration-500 hover:border-white/[0.18] hover:shadow-[0_32px_70px_rgba(5,12,28,0.6)]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[30px]">
        <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-sky-400/[0.18] blur-3xl transition duration-500 group-hover:opacity-90" />
        <div className="absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-red-500/[0.16] blur-3xl transition duration-500 group-hover:opacity-80" />
        <div className="absolute inset-y-8 left-0 w-px bg-[linear-gradient(180deg,transparent,rgba(125,211,252,0.85),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-[1px] rounded-[29px] border border-white/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span className="z7-number-font inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/[0.55]">
              Actividad {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="max-w-[14ch] text-2xl font-semibold leading-[1.04] text-white transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-white sm:text-[1.8rem]">
              {program.title}
            </h3>
          </div>

          <span
            className={`inline-flex shrink-0 rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${getCategoryBadge(program.category)}`}
          >
            {program.category}
          </span>
        </div>

        <p className="max-w-xl text-sm leading-7 text-white/[0.68] transition-all duration-500 group-hover:translate-y-[-1px] group-hover:text-white/80 sm:text-[0.95rem]">
          {program.description}
        </p>

        <div className="mt-6 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
          {infoItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/[0.08] bg-black/20 p-4 transition-colors duration-300 group-hover:border-white/[0.12] group-hover:bg-white/[0.04]"
              >
                <div className="mb-3 flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/[0.44]">
                  <Icon className="h-3.5 w-3.5 text-sky-200/75" />
                  <span>{item.label}</span>
                </div>
                <p className="text-sm leading-6 text-white/[0.88] transition-transform duration-500 group-hover:translate-y-[-1px]">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex-1" />

        {onSelect ? (
          <motion.button
            type="button"
            whileTap={{ scale: 0.985 }}
            onClick={() => onSelect(program)}
            className={actionClasses}
          >
            {buttonContent}
          </motion.button>
        ) : (
          <motion.a
            href={program.link}
            whileTap={{ scale: 0.985 }}
            className={actionClasses}
          >
            {buttonContent}
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}
