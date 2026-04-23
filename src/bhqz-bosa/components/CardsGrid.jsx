// BHQZ Bosa - Cards Grid Component
// Displays a grid of Arte, Cultura, and Deporte categories

import Card from './Card.jsx';

const CATEGORIES = [
  {
    id: 'arte',
    title: 'Arte',
    description: 'Expresión y creatividad sin límites. Descubre nuestros programas de artes visuales, música y performance.',
    icon: '🎨',
    link: '/bhqz-bosa/programas?categoria=arte',
  },
  {
    id: 'cultura',
    title: 'Cultura',
    description: 'Conecta con nuestras raíces y tradiciones. Participá en eventos, charlas y experiencias culturales únicas.',
    icon: '🎭',
    link: '/bhqz-bosa/programas?categoria=cultura',
  },
  {
    id: 'deporte',
    title: 'Deporte',
    description: 'Desarrollo físico y mental. Entrená con profesionales y alcanzá tu potencial en diversas disciplinas.',
    icon: '⚽',
    link: '/bhqz-bosa/programas?categoria=deporte',
  },
];

export default function CardsGrid({ categories = CATEGORIES, className = "" }) {
  return (
    <section className={`cards-grid py-8 sm:py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
