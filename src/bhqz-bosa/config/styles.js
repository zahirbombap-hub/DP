// BHQZ Bosa - Global Style Configuration
// Centralized color and typography variables

export const Z7_STYLES = {
  // Color Palette
  colors: {
    // Primary colors
    primary: {
      50: 'bg-blue-50 text-blue-50',
      100: 'bg-blue-100 text-blue-100',
      600: 'bg-blue-600 text-blue-600',
      700: 'bg-blue-700 text-blue-700',
      900: 'bg-blue-900 text-blue-900',
    },
    // Secondary colors
    secondary: {
      50: 'bg-gray-50 text-gray-50',
      100: 'bg-gray-100 text-gray-100',
      200: 'bg-gray-200 text-gray-200',
      300: 'bg-gray-300 text-gray-300',
      600: 'bg-gray-600 text-gray-600',
      700: 'bg-gray-700 text-gray-700',
      900: 'bg-gray-900 text-gray-900',
    },
    // Accent colors
    accent: {
      success: 'bg-green-50 text-green-700 border-green-200',
      error: 'bg-red-50 text-red-700 border-red-200',
      warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    },
    // Status colors
    category: {
      arte: 'bg-purple-100 text-purple-700',
      cultura: 'bg-amber-100 text-amber-700',
      deporte: 'bg-blue-100 text-blue-700',
    },
  },

  // Typography
  typography: {
    // Headings
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
    
    // Body text
    body: 'text-base text-gray-700 leading-relaxed',
    bodyLarge: 'text-lg text-gray-700 leading-relaxed',
    bodySmall: 'text-sm text-gray-600',
    
    // Semantic
    label: 'text-sm font-semibold text-gray-900',
    caption: 'text-xs text-gray-600',
  },

  // Spacing
  spacing: {
    section: 'py-12 md:py-16',
    sectionLarge: 'py-16 md:py-24',
    card: 'p-6',
  },

  // Common patterns
  patterns: {
    // Hero section
    heroGradient: 'bg-gradient-to-b from-blue-900 to-blue-800 text-white',
    
    // Card base
    card: 'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200',
    cardHover: 'hover:shadow-xl',
    
    // Button base
    buttonPrimary: 'bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors',
    buttonSecondary: 'bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors',
    buttonSmall: 'px-4 py-2 rounded-lg font-semibold transition-colors',
    
    // Input base
    inputBase: 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
    inputError: 'border-red-500',
    inputNormal: 'border-gray-300',
    
    // Container
    container: 'container mx-auto px-4',
    maxWidth: 'max-w-3xl',
  },

  // Responsive breakpoints
  breakpoints: {
    tiny: 'max-w-xs',
    small: 'max-w-sm',
    medium: 'max-w-md',
    large: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
  },
};

/**
 * Utility function to get color class
 */
export const getColorClass = (type, intensity) => {
  return Z7_STYLES.colors[type]?.[intensity] || '';
};

/**
 * Utility function to get typography class
 */
export const getTypographyClass = (level) => {
  return Z7_STYLES.typography[level] || '';
};

/**
 * Utility function to combine classes
 */
export const cx = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
