// BHQZ Bosa - Programs Data
// Central source for all program information

export const PROGRAMS = [
  {
    id: 'futbol',
    title: 'Fútbol Profesional y Recreativo',
    category: 'Deporte',
    description: 'Participá en entrenamientos tácticos y partidos amistosos en un ambiente competitivo pero inclusivo.',
    level: 'Todos los niveles',
    schedule: 'Lunes y viernes, 7:00 PM - 8:30 PM',
    price: '$50 por mes',
    link: '/bhqz-bosa/programas/futbol',
  },
  {
    id: 'patinaje',
    title: 'Patinaje',
    category: 'Deporte',
    description: 'Ejercitá tu cuerpo y mente con combinaciones de patinaje en un entorno motivador y profesional.',
    level: 'Todos los niveles',
    schedule: 'Martes y jueves, 5:00 PM - 6:00 PM',
    price: 'La proxima convocatoria iniciará muy pronto, mantente atento a nuestras redes sociales para más información.',
    link: '/bhqz-bosa/programas/patinaje',
  },
  {
    id: 'voleibol',
    title: 'Voleibol',
    category: 'Deporte',
    description: 'Participá en entrenamientos tácticos y partidos amistosos, desarrollando tu habilidad y estrategia de juego en equipo.',
    level: 'Todos los niveles',
    schedule: 'Viernes, 3:00 PM - 5:00 PM',
    price: 'La proxima convocatoria iniciará muy pronto, mantente atento a nuestras redes sociales para más información.',
    link: '/bhqz-bosa/programas/voleibol',
  },
];

/**
 * Helper function to get programs by category
 */
export const getProgramsByCategory = (category) => {
  if (!category) return PROGRAMS;
  return PROGRAMS.filter((program) => program.category === category);
};

/**
 * Helper function to get a single program by ID
 */
export const getProgramById = (id) => {
  return PROGRAMS.find((program) => program.id === id);
};

/**
 * Helper function to get unique categories
 */
export const getCategories = () => {
  return [...new Set(PROGRAMS.map((program) => program.category))];
};
