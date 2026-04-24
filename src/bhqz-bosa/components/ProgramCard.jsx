// BHQZ Bosa - Program Card Component
// Renders a single program card with details

import { Z7_STYLES } from '../config/styles.js';

export default function ProgramCard({ program, onSelect = null }) {
  const getCategoryColor = (category) => {
    const colors = {
      Arte: Z7_STYLES.colors.category.arte,
      Cultura: Z7_STYLES.colors.category.cultura,
      Deporte: Z7_STYLES.colors.category.deporte,
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <article className="program-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 flex flex-col h-full">
      {/* Image */}
      {program.image && (
        <div className="h-40 w-full overflow-hidden">
          <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">{program.title}</h3>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${getCategoryColor(program.category)}`}>
            {program.category}
          </span>
        </div>

        <p className="text-sm text-gray-700 mb-4 flex-1 leading-relaxed">{program.description}</p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-600 mb-4">
          <div className="flex gap-3">
            <div>
              <div className="text-xs font-semibold text-gray-900">Nivel</div>
              <div className="text-sm text-gray-700">{program.level}</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-900">Horario</div>
              <div className="text-sm text-gray-700">{program.schedule}</div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-semibold text-gray-900">Precio</div>
            <div className="text-sm font-semibold text-red-700">{program.price}</div>
          </div>
        </div>

        <div>
          {onSelect ? (
            <button
              onClick={() => onSelect(program)}
              className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-b from-red-700 via-red-800 to-red-900 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm"
            >
              Más información
            </button>
          ) : (
            <a
              href={program.link}
              className="inline-block w-full text-center rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-b from-red-700 via-red-800 to-red-900 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm"
            >
              Más información
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
