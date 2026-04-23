// BHQZ Bosa - Program Card Component
// Renders a single program card with details

import { Z7_STYLES } from '../config/styles.js';

export default function ProgramCard({ program, onSelect = null }) {
  const getCategoryColor = (category) => {
    const colors = {
      'Arte': Z7_STYLES.colors.category.arte,
      'Cultura': Z7_STYLES.colors.category.cultura,
      'Deporte': Z7_STYLES.colors.category.deporte,
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className={`program-card ${Z7_STYLES.patterns.card} overflow-hidden h-full flex flex-col`}>
      {/* Header with category badge */}
      <div className={`${Z7_STYLES.patterns.card} pb-2 sm:pb-3 border-b border-gray-200`}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2 sm:mb-0">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex-1">
            {program.title}
          </h3>
          <span className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap ${getCategoryColor(program.category)}`}>
            {program.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`${Z7_STYLES.patterns.card} flex-grow pt-2 sm:pt-4`}>
        <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
          {program.description}
        </p>

        {/* Details */}
        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
          <div className="flex flex-col xs:flex-row xs:items-start gap-1 xs:gap-2">
            <span className="font-semibold text-gray-900">Nivel:</span>
            <span className="break-words">{program.level}</span>
          </div>
          <div className="flex flex-col xs:flex-row xs:items-start gap-1 xs:gap-2">
            <span className="font-semibold text-gray-900">Horario:</span>
            <span className="break-words">{program.schedule}</span>
          </div>
          <div className="flex flex-col xs:flex-row xs:items-start gap-1 xs:gap-2">
            <span className="font-semibold text-gray-900">Precio:</span>
            <span className={`font-semibold break-words`} style={{ color: Z7_STYLES.colors.primary[600].split(' ')[1] }}>
              {program.price}
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={`${Z7_STYLES.patterns.card} pt-2 sm:pt-3 border-t border-gray-200 mt-2 sm:mt-3`}>
        {onSelect ? (
          <button
            onClick={() => onSelect(program.id)}
            className="w-full bg-blue-600 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors"
          >
            Más información
          </button>
        ) : (
          <a
            href={program.link}
            className="block text-center bg-blue-600 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors"
          >
            Más información
          </a>
        )}
      </div>
    </div>
  );
}
