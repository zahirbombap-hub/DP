// BHQZ Bosa - Hero Section Component
// Static hero section with background image

export default function HeroZ7({
  headline = "Arte Cultura y Deporte",
  subheadline = "Explora nuestros programas y servicios",
  ctaText = "Conocer más",
  ctaLink = "#",
}) {
  return (
    <section 
      className="hero-z7 relative w-screen overflow-hidden -mx-full -mt-20 sm:-mt-28"
      style={{ height: '100vh', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
    >
      {/* Background Image */}
      <img
        src="/multimedia/BHQZ/fondo.png"
        alt="Fondo Hero"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center bottom' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-4 sm:px-6">
          <h1 className="z7-hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            {headline}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
            {subheadline}
          </p>
          <a
            href={ctaLink}
            className="inline-block bg-white text-[#EE1E23] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
