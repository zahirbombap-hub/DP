// BHQZ Bosa - Card Component
// Reusable card component for displaying content

export default function Card({
  title,
  description,
  icon = null,
  link = null,
  className = "",
}) {
  const CardContent = () => (
    <div className={`card p-4 sm:p-5 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 h-full flex flex-col ${className}`}>
      {/* Icon */}
      {icon && (
        <div className="mb-2 sm:mb-3 md:mb-4 text-3xl sm:text-4xl">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-700 flex-grow">
        {description}
      </p>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block hover:no-underline">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}
