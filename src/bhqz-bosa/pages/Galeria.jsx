// BHQZ Bosa - Gallery Page

import { Seo } from '../../components/Seo.jsx';
import { useState } from 'react';
import { Z7Layout, GalleryPreview, HeroSection, FilterButtons } from '../components/index.jsx';
import { getGalleryCategories, getGalleryByCategory } from '../data/gallery.js';

export default function Galeria() {
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  return (
    <>
      <Seo />
      <Z7Layout>
        {/* Hero Section */}
        <HeroSection
          title="Galería"
          subtitle="Descubre los momentos, trabajos y eventos de nuestra comunidad BHQZ Bosa."
        />

        {/* Category Filters */}
        <FilterButtons
          items={categoryItems}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Category Description */}
        {galleryData && (
          <section className="category-info py-6 sm:py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {galleryData.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                {galleryData.description}
              </p>
            </div>
          </section>
        )}

        {/* Gallery Preview */}
        {galleryData && galleryData.images && galleryData.images.length > 0 ? (
          <GalleryPreview
            images={galleryData.images}
            columns={3}
            showCaption={true}
          />
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
              "linear-gradient(120deg, rgba(10, 10, 10, 0.72), rgba(23, 23, 23, 0.58)), url('/multimedia/BHQZ/fotos/foto11.jpg')",
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
