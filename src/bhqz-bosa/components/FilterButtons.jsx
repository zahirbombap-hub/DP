import { motion } from 'framer-motion';

const smoothEase = [0.22, 1, 0.36, 1];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.72,
      ease: smoothEase,
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
    },
  },
};

export default function FilterButtons({
  items,
  selected,
  onSelect,
  totalCount = null,
  variant = 'default',
  className = '',
}) {
  const isPremium = variant === 'premium';
  const resolvedItems = [
    { id: null, name: 'Todos', count: totalCount },
    ...items.map((item) => ({
      id: item?.id ?? item,
      name: item?.name ?? item,
      count: item?.count,
    })),
  ];

  const sectionClassName = isPremium
    ? 'relative py-4 md:py-6'
    : 'filters-section border-b border-white/10 bg-black py-8';

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isPremium ? 0.55 : 0.3 }}
      variants={sectionVariants}
      className={`${sectionClassName} ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        <motion.div
          variants={sectionVariants}
          className={`flex flex-wrap gap-2.5 sm:gap-3 ${
            isPremium ? 'items-center' : ''
          }`}
        >
          {resolvedItems.map((item) => {
            const isActive = selected === item.id;
            const countLabel = item.count !== undefined && item.count !== null ? `(${item.count})` : null;

            return (
              <motion.button
                key={item.id ?? 'all'}
                type="button"
                variants={itemVariants}
                whileHover={
                  isPremium
                    ? {
                        y: -2,
                        scale: 1.02,
                        transition: { duration: 0.22, ease: 'easeOut' },
                      }
                    : undefined
                }
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(item.id)}
                aria-pressed={isActive}
                className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-4 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80 ${
                  isPremium
                    ? `backdrop-blur-xl ${
                        isActive
                          ? 'border-white/20 bg-white/[0.06] text-white shadow-[0_16px_40px_rgba(14,165,233,0.18)]'
                          : 'border-white/10 bg-white/[0.025] text-white/[0.72] hover:border-white/20 hover:bg-white/[0.06] hover:text-white'
                      } focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070d]`
                    : `${
                        isActive
                          ? 'border-blue-500/70 bg-blue-600 text-white shadow-[0_10px_26px_rgba(37,99,235,0.35)]'
                          : 'border-white/20 bg-white/5 text-white hover:bg-white/10'
                      }`
                }`}
              >
                {isPremium ? (
                  <>
                    {isActive ? (
                      <motion.span
                        layoutId="premium-active-filter"
                        className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(37,99,235,0.3),rgba(239,68,68,0.16))]"
                        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                      />
                    ) : null}
                    <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_62%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span
                      className={`relative z-10 h-2 w-2 rounded-full transition-colors duration-300 ${
                        isActive ? 'bg-sky-300' : 'bg-white/[0.35] group-hover:bg-white/[0.65]'
                      }`}
                    />
                    <span className="relative z-10 tracking-[0.14em] uppercase">
                      {item.name}
                    </span>
                    {countLabel ? (
                      <span
                        className={`relative z-10 text-xs ${
                          isActive ? 'text-white/80' : 'text-white/[0.52] group-hover:text-white/[0.72]'
                        }`}
                      >
                        {countLabel}
                      </span>
                    ) : null}
                  </>
                ) : (
                  <span className="relative z-10 whitespace-nowrap">
                    {item.name} {countLabel}
                  </span>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
