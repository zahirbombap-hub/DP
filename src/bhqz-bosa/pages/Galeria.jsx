// BHQZ Bosa - Gallery Page

import { Seo } from '../../components/Seo.jsx';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Z7Layout, HeroSection, FilterButtons } from '../components/index.jsx';
import { getGalleryCategories, getGalleryByCategory } from '../data/gallery.js';

export default function Galeria() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = getGalleryCategories();
  
  // Get images to display
  const galleryData = selectedCategory
    ? getGalleryByCategory(selectedCategory)
    : { name: 'Todas las categorías', description: 'Explora toda nuestra galería', images: categories.flatMap((cat) => cat.images) };

  // Format categories for FilterButtons
  const categoryItems = categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
  }));

  const images = galleryData?.images || [];

  // Reset the index when changing categories
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <Seo />
      <Z7Layout>
        {/* Hero Section */}
        <HeroSection
          title="Galería"
          subtitle="Descubre los momentos, trabajos y eventos de nuestra comunidad BHQZ Bosa."
          backgroundImage="/multimedia/BHQZ/fotos/dog.webp"
        />

        {/* Category Filters */}
        <FilterButtons
          items={categoryItems}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Category Description */}
        {galleryData && (
          <section className="category-info pt-8 pb-2 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {galleryData.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                {galleryData.description}
              </p>
            </div>
          </section>
        )}

        {/* Main Gallery Carousel */}
        {images.length > 0 ? (
          <section className="gallery-carousel-section px-4 pb-16 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              {/* Viewport Principal: Ajusta su tamaño dinámicamente según el dispositivo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-900 shadow-2xl sm:aspect-video lg:aspect-[21/9]">
                {images.map((img, index) => (
                  <img
                    key={img.src || img}
                    src={img.src || img}
                    alt={img.alt || `Galería imagen ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                ))}

                {/* Controles de Navegación */}
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                  <button
                    onClick={goToPrevious}
                    className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-black/50 transition-all active:scale-90"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md hover:bg-black/50 transition-all active:scale-90"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Badge de contador y descripción */}
                <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
                  <div className="inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold mb-2">
                    {currentIndex + 1} / {images.length}
                  </div>
                  {images[currentIndex]?.caption && (
                    <p className="text-white text-sm sm:text-base font-medium drop-shadow-md line-clamp-2">
                      {images[currentIndex]?.caption}
                    </p>
                  )}
                </div>
              </div>

              {/* Tira de Miniaturas: Scroll horizontal táctil */}
              <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar py-2 px-1">
                {images.map((img, index) => (
                  <button
                    key={`${img.src || img}-thumb`}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative h-16 w-24 sm:h-20 sm:w-32 md:h-24 md:w-40 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                      index === currentIndex 
                        ? 'border-red-600 scale-105 shadow-lg' 
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img.src || img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-12 md:py-16 text-center">
            <p className="text-base sm:text-lg text-gray-500">
              No hay imágenes disponibles en esta categoría.
            </p>
          </section>
        )}

        {/* CTA Section */}
        <section
          className="bg-cover bg-center bg-no-repeat py-12 text-white md:py-16 lg:py-24"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(10, 10, 10, 0.72), rgba(23, 23, 23, 0.58)), url('/multimedia/BHQZ/fotos/foto11.webp')",
          }}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Sé parte de BHQZ Bosa
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Participa en nuestros programas y tu próxima foto podría estar en nuestra galería.
            </p>
            <a
              href="/bhqz-bosa/inscripciones"
              className="inline-block rounded-lg bg-white px-6 py-2 text-sm font-semibold text-red-950 transition-colors hover:bg-yellow-200 sm:px-8 sm:py-3 sm:text-base"
            >
              Inscribirse
            </a>
          </div>
        </section>
      </Z7Layout>
    </>
  );
}
