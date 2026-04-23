// BHQZ Bosa - Home Page

import {
  Z7Layout,
  HeroZ7,
  CardsGrid,
  GalleryShowcaseSection,
} from '../components/index.jsx';

export default function Z7SportHome() {
  return (
    <Z7Layout>
      <HeroZ7
        headline="Arte Cultura y Deporte"
        subheadline="Descubre nuestros programas y servicios deportivos"
        ctaText="Explorar programas"
        ctaLink="/bhqz-bosa/programas"
      />

      <CardsGrid />

      <GalleryShowcaseSection />

      <div className="py-12">
        <h2 className="mb-4 text-3xl font-bold">Proximamente</h2>
        <p>Mas secciones en desarrollo...</p>
      </div>
    </Z7Layout>
  );
}
