import type { Product } from "./ProductCard.tsx";
import { ProductCard } from "./ProductCard.tsx";

interface PopularProductsProps {
  products: Product[];
}

export function PopularProducts({ products }: PopularProductsProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Tendencias en la Capital</h2>
          <p className="text-gray-500 mt-2 text-lg">Lo que están comprando los bogotanos esta semana.</p>
        </div>
        <a href="#" className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-1 transition-colors">
          Ver catálogo completo <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}