// BHQZ Bosa - Filter Buttons Component
// Reusable filter button group for programs and gallery

export default function FilterButtons({ items, selected, onSelect, totalCount = null }) {
  return (
    <section className="filters-section border-b border-white/10 bg-black py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {/* All items button */}
          <button
            onClick={() => onSelect(null)}
            className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors whitespace-nowrap ${
              selected === null
                ? 'bg-blue-600 text-white'
                : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
            }`}
          >
            Todos {totalCount !== null && `(${totalCount})`}
          </button>

          {/* Filter buttons */}
          {items.map((item) => (
            <button
              key={item.id || item}
              onClick={() => onSelect(item.id || item)}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors whitespace-nowrap ${
                selected === (item.id || item)
                  ? 'bg-blue-600 text-white'
                  : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {item.name || item} {item.count !== undefined && `(${item.count})`}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
