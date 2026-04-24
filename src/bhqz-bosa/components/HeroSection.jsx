// BHQZ Bosa - Hero Section Component
// Reusable hero section with title and subtitle for pages

export default function HeroSection({ title, subtitle, backgroundImage, overlayClass }) {
  const bg = backgroundImage || '/multimedia/BHQZ/fotos/dog.png';

  return (
    <section
      className="hero-section py-16 md:py-24 text-white relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className={`absolute inset-0 ${overlayClass || 'bg-black/50'}`} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="z7-title-font text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {title}
          </h1>
          <p className="z7-subtitle-font text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
