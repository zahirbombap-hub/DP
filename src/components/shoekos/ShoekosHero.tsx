import { Link } from "react-router-dom";

export function ShoekosHero() {
  return (
    <section className="relative bg-black text-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop" 
          alt="Calles de Bogotá" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-6 border border-blue-500/30">
          <span className="material-symbols-outlined text-base">location_on</span> COBERTURA TOTAL EN LA CAPITAL
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          El Catálogo Más Grande de <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-400 to-red-400">Zapatos en Bogotá</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Apoya a vendedores locales y recibe tus zapatos favoritos el mismo día en más de 15 localidades de Bogotá.
        </p>
        
        <div className="max-w-xl mx-auto bg-white p-2 rounded-full flex items-center shadow-2xl focus-within:ring-4 focus-within:ring-blue-500/50">
          <span className="material-symbols-outlined text-2xl text-gray-400 ml-4">search</span>
          <input 
            type="text" 
            placeholder="¿Qué zapatos buscas? (Ej. Botas de lluvia)" 
            className="w-full px-4 py-3 bg-transparent text-black outline-none font-medium placeholder:text-gray-400"
            aria-label="Buscar zapatos en Bogotá"
          />
          <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}