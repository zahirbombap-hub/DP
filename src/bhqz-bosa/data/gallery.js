// BHQZ Bosa - Gallery Data
// Central source for all gallery content organized by categories

export const GALLERY_CATEGORIES = {
  arte: {
    name: 'Arte',
    description: 'Nuestros talleres y exposiciones de artes visuales',
    images: [
      { src: '/multimedia/Yuga/catalogo/placeholder-1.jpg', alt: 'Obra de arte 1', caption: 'Exposición de Artes Visuales' },
      { src: '/multimedia/Yuga/catalogo/placeholder-2.jpg', alt: 'Obra de arte 2', caption: 'Técnicas de Pintura' },
      { src: '/multimedia/Yuga/catalogo/placeholder-3.jpg', alt: 'Obra de arte 3', caption: 'Escultura' },
      { src: '/multimedia/Yuga/catalogo/placeholder-4.jpg', alt: 'Obra de arte 4', caption: 'Instalación Artística' },
      { src: '/multimedia/Yuga/catalogo/placeholder-5.jpg', alt: 'Obra de arte 5', caption: 'Taller de Dibujo' },
      { src: '/multimedia/Yuga/catalogo/placeholder-6.jpg', alt: 'Obra de arte 6', caption: 'Muestra Colectiva' },
    ],
  },
  cultura: {
    name: 'Cultura',
    description: 'Eventos culturales, charlas y actividades comunitarias',
    images: [
      { src: '/multimedia/agua-linda/placeholder-1.jpg', alt: 'Evento cultural 1', caption: 'Festival Cultural' },
      { src: '/multimedia/agua-linda/placeholder-2.jpg', alt: 'Evento cultural 2', caption: 'Charla Patrimonial' },
      { src: '/multimedia/agua-linda/placeholder-3.jpg', alt: 'Evento cultural 3', caption: 'Cine Debate' },
      { src: '/multimedia/agua-linda/placeholder-4.jpg', alt: 'Evento cultural 4', caption: 'Conferencia' },
      { src: '/multimedia/agua-linda/placeholder-5.jpg', alt: 'Evento cultural 5', caption: 'Actividad Comunitaria' },
      { src: '/multimedia/agua-linda/placeholder-6.jpg', alt: 'Evento cultural 6', caption: 'Taller Cultural' },
    ],
  },
  deporte: {
    name: 'Deporte',
    description: 'Entrenamientos, competencias y actividades deportivas',
    images: [
      { src: '/multimedia/cuerna/placeholder-1.jpg', alt: 'Actividad deportiva 1', caption: 'Entrenamiento de Fútbol' },
      { src: '/multimedia/cuerna/placeholder-2.jpg', alt: 'Actividad deportiva 2', caption: 'Clase de Yoga' },
      { src: '/multimedia/cuerna/placeholder-3.jpg', alt: 'Actividad deportiva 3', caption: 'Boxeo Fitness' },
      { src: '/multimedia/cuerna/placeholder-4.jpg', alt: 'Actividad deportiva 4', caption: 'Partido Amistoso' },
      { src: '/multimedia/cuerna/placeholder-5.jpg', alt: 'Actividad deportiva 5', caption: 'Competencia' },
      { src: '/multimedia/cuerna/placeholder-6.jpg', alt: 'Actividad deportiva 6', caption: 'Evento Deportivo' },
    ],
  },
  danza: {
    name: 'Danza',
    description: 'Presentaciones de danza contemporánea y folklórica',
    images: [
      { src: '/multimedia/FotosTattosLopez/placeholder-1.jpg', alt: 'Danza 1', caption: 'Danza Contemporánea' },
      { src: '/multimedia/FotosTattosLopez/placeholder-2.jpg', alt: 'Danza 2', caption: 'Ensayo' },
      { src: '/multimedia/FotosTattosLopez/placeholder-3.jpg', alt: 'Danza 3', caption: 'Presentación en Vivo' },
      { src: '/multimedia/FotosTattosLopez/placeholder-4.jpg', alt: 'Danza 4', caption: 'Taller de Movimiento' },
      { src: '/multimedia/FotosTattosLopez/placeholder-5.jpg', alt: 'Danza 5', caption: 'Actuación' },
      { src: '/multimedia/FotosTattosLopez/placeholder-6.jpg', alt: 'Danza 6', caption: 'Espectáculo' },
    ],
  },
  eventos: {
    name: 'Eventos',
    description: 'Momentos especiales y encuentros de la comunidad',
    images: [
      { src: '/multimedia/Yuga/placeholder-1.jpg', alt: 'Evento 1', caption: 'Encuentro Comunitario' },
      { src: '/multimedia/Yuga/placeholder-2.jpg', alt: 'Evento 2', caption: 'Celebración' },
      { src: '/multimedia/Yuga/placeholder-3.jpg', alt: 'Evento 3', caption: 'Convivencia' },
      { src: '/multimedia/Yuga/placeholder-4.jpg', alt: 'Evento 4', caption: 'Actividad Social' },
      { src: '/multimedia/Yuga/placeholder-5.jpg', alt: 'Evento 5', caption: 'Torneo' },
      { src: '/multimedia/Yuga/placeholder-6.jpg', alt: 'Evento 6', caption: 'Cierre de Temporada' },
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
