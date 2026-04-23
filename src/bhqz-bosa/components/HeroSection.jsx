// BHQZ Bosa - Hero Section Component
// Reusable hero section with title and subtitle for pages

export default function HeroSection({ title, subtitle }) {
  return (
    <section 
      className="hero-section py-16 md:py-24 text-white relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/multimedia/BHQZ/fotos/dog.png)',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
