// BHQZ Bosa - Gallery Preview Component
// Displays a responsive grid of images

export default function GalleryPreview({
  images = [],
  columns = 3,
  gap = "gap-4",
  className = "",
  showCaption = true,
}) {
  if (!images || images.length === 0) {
    return (
      <div className="gallery-preview py-8">
        <p className="text-gray-500 text-center">No hay imágenes disponibles</p>
      </div>
    );
  }

  // Mobile-first responsive grid with adaptive gap
  const responsiveGap = 'gap-1.5 sm:gap-3 md:gap-4';
  const gridColsClass = `grid-cols-2 md:grid-cols-3 ${columns >= 4 ? 'lg:grid-cols-4' : ''}`;

  return (
    <section className={`gallery-preview py-4 sm:py-8 md:py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <div className={`grid ${gridColsClass} ${responsiveGap}`}>
          {images.map((image, index) => (
            <div key={index} className="gallery-item overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* Image Container - responsive with natural aspect ratio */}
              <div className="w-full h-auto bg-gray-200 aspect-square">
                <img
                  src={image.src || image}
                  alt={image.alt || `Galería imagen ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Caption */}
              {showCaption && image.caption && (
                <div className="p-2 sm:p-3 md:p-4 bg-white">
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
