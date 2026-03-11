import type { MetaFunction } from "react-router-dom";
import { Benefits } from "../components/shoekos/Benefits.tsx";
import { Breadcrumbs } from "../components/shoekos/Breadcrumbs.tsx";
import { PopularProducts } from "../components/shoekos/PopularProducts.tsx";
import { Product } from "../components/shoekos/ProductCard.tsx";
import { SEOContent } from "../components/shoekos/SEOContent.tsx";
import { ShoekosHero } from "../components/shoekos/ShoekosHero.tsx";

export const meta: MetaFunction = () => {
  return [
    { title: "Zapatos en Bogotá | Comprar Calzado con Envío Rápido" },
    { name: "description", content: "Encuentra los mejores zapatos en Bogotá. Catálogo gigante de tenis, botas y zapatos formales. Envíos el mismo día en la capital y cientos de vendedores locales." },
  ];
};

const BOGOTA_PRODUCTS: Product[] = [
  {
    id: 'b1',
    name: 'Tenis Urbanos BGT',
    brand: 'Bogotá Kicks',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1519976691384-bd9c1d4a95fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    rating: 4.9,
    reviews: 432,
    isNew: true,
    category: 'Urbanos'
  },
  {
    id: 'b2',
    name: 'Botas para Lluvia Capital',
    brand: 'RainWalk',
    price: 180000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1521463399992-df6fb57d30bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    rating: 4.8,
    reviews: 890,
    category: 'Industriales'
  },
  {
    id: 'b3',
    name: 'Mocasines Ejecutivos Centro',
    brand: 'Arturo Calle',
    price: 310000,
    image: 'https://images.unsplash.com/photo-1576792741377-eb0f4f6d1a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    rating: 4.7,
    reviews: 156,
    category: 'Elegantes'
  },
  {
    id: 'b4',
    name: 'Deportivas Ciclovía',
    brand: 'Nike',
    price: 420000,
    image: 'https://images.unsplash.com/photo-1619253341026-74c609e6ce50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    rating: 4.9,
    reviews: 567,
    category: 'Deportivos'
  }
];

export default function ShoekosLanding() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <ShoekosHero />
      <Breadcrumbs />
      <Benefits />
      <PopularProducts products={BOGOTA_PRODUCTS} />
      <SEOContent />
    </div>
  );
}