// BHQZ Bosa - About Section Component
// Displays about information with optional stats

export default function AboutZ7({
  title = "Sobre BHQZ Bosa",
  description = "Somos una comunidad dedicada al desarrollo integral a través del arte, la cultura y el deporte.",
  stats = [],
}) {
  return (
    <section className="about-z7 py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-black/70 to-black/40">
      <style>{`
        @keyframes glow-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.8));
          }
        }
        
        .glow-card {
          animation: glow-pulse 3s ease-in-out infinite;
          position: relative;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
        }
        
        .glow-card:hover {
          border-color: rgba(59, 130, 246, 0.8);
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="space-y-4 bg-gradient-to-r from-black/70 to-black/40 p-8 rounded-lg">
          {/* Title */}
          <h2 className="z7-section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium leading-relaxed mb-8 sm:mb-12 drop-shadow-md">
            {description}
          </p>
        </div>

        {/* Stats Grid - Centered */}
        {stats.length > 0 && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-2xl">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glow-card stat-card text-center p-6 sm:p-7 md:p-8 backdrop-blur-sm rounded-xl"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300 mb-2 sm:mb-3">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-white/90 font-semibold line-clamp-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
