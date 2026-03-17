import { Link } from "react-router-dom";

export function ProductCard({ product, delay }) {
  const animationStyle = delay ? { "--delay": delay } : undefined;
  return (
    <Link
      to={`/shoekos/producto/${product.id}`}
      className="group flex flex-col shoekos-card shoekos-fade-up"
      style={animationStyle}
    >
      <div className="relative aspect-square rounded-xl bg-gray-100 mb-4 overflow-hidden">
        {product.isNew && (
          <div className="absolute top-3 left-3 z-10 bg-black text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
            Nuevo
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy" 
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500 shoekos-card-image"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <span className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">{product.brand}</span>
        <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          <span className="material-symbols-outlined text-sm text-yellow-400 fill-current">star</span>
          <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        <div className="mt-auto pt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-gray-900">
              ${product.price.toLocaleString('es-CO')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toLocaleString('es-CO')}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
