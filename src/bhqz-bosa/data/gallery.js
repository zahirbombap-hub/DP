// BHQZ Bosa - Gallery Data
// Central source for all gallery content organized by categories

export const GALLERY_CATEGORIES = {
  futbol: {
    name: 'Fútbol',
    description: 'Entrenamientos y competencias de nuestras categorías de fútbol.',
    images: [
      { src: '/multimedia/BHQZ/fotos/foto1.webp', alt: 'Fútbol 1', caption: 'Entrenamiento matutino' },
      { src: '/multimedia/BHQZ/fotos/foto3.webp', alt: 'Fútbol 2', caption: 'Técnica individual' },
      { src: '/multimedia/BHQZ/fotos/foto5.webp', alt: 'Fútbol 3', caption: 'Trabajo en equipo' },
      { src: '/multimedia/BHQZ/fotos/hero4.webp', alt: 'Fútbol 4', caption: 'Categorías juveniles' },
      { src: '/multimedia/BHQZ/fotos/foto1.webp', alt: 'Fútbol 5', caption: 'Sesión técnica' },
      { src: '/multimedia/BHQZ/fotos/foto3.webp', alt: 'Fútbol 6', caption: 'Enfoque y disciplina' },
    ],
  },
  voleibol: {
    name: 'Voleibol',
    description: 'Nuestra formación integral en la disciplina de voleibol.',
    images: [
      { src: '/multimedia/BHQZ/fotos/voleyballbhqz.webp', alt: 'Voleibol 1', caption: 'Equipo representativo' },
      { src: '/multimedia/BHQZ/fotos/convocatoriavolley.webp', alt: 'Voleibol 2', caption: 'Nuevos talentos' },
      { src: '/multimedia/BHQZ/fotos/Vs-Japon.webp', alt: 'Inspiración', caption: 'Referentes del deporte' },
    ],
  },
  patinaje: {
    name: 'Patinaje',
    description: 'Velocidad y destreza en nuestras jornadas sobre ruedas.',
    images: [
      { src: '/multimedia/BHQZ/fotos/patinaje.webp', alt: 'Patinaje 1', caption: 'Escuela de formación' },
      { src: '/multimedia/BHQZ/fotos/patinajecol.webp', alt: 'Patinaje 2', caption: 'Orgullo local' },
    ],
  },
  comunidad: {
    name: 'Comunidad',
    description: 'Momentos que fortalecen la identidad de BHQZ Bosa.',
    images: [
      { src: '/multimedia/BHQZ/fotos/foto6.webp', alt: 'Comunidad 1', caption: 'Valores compartidos' },
      { src: '/multimedia/BHQZ/fotos/foto1.webp', alt: 'Comunidad 2', caption: 'Identidad BHQZ' },
      { src: '/multimedia/BHQZ/fotos/foto11.webp', alt: 'Impacto Social', caption: 'Transformando vidas' },
      { src: '/multimedia/BHQZ/fotos/messi.webp', alt: 'Inspiración', caption: 'Nuestros sueños' },
    ],
  },
};

/**
 * Get all categories with their metadata
 */
export const getGalleryCategories = () => {
  return Object.keys(GALLERY_CATEGORIES).map((key) => ({
    id: key,
    ...GALLERY_CATEGORIES[key],
  }));
};

/**
 * Get images for a specific category
 */
export const getGalleryByCategory = (categoryId) => {
  return GALLERY_CATEGORIES[categoryId] || null;
};

/**
 * Get all images from all categories (flattened)
 */
export const getAllGalleryImages = () => {
  return Object.values(GALLERY_CATEGORIES).flatMap((category) => category.images);
};
