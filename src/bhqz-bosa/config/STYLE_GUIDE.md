// BHQZ Bosa - Style Guide and Documentation
// How to use global styles and variables

/**
 * IMPORTAR LOS ESTILOS EN TUS COMPONENTES
 * 
 * import { Z7_STYLES, getColorClass, getTypographyClass, cx } from '../config/styles.js';
 */

/**
 * EJEMPLO 1: Usar colores
 * 
 * Colores disponibles:
 * - Z7_STYLES.colors.primary[50, 100, 600, 700, 900]
 * - Z7_STYLES.colors.secondary[50, 100, 200, 300, 600, 700, 900]
 * - Z7_STYLES.colors.accent.success / error / warning
 * - Z7_STYLES.colors.category.arte / cultura / deporte
 * 
 * Uso en componentes:
 * 
 * <div className={Z7_STYLES.colors.primary[600]}>
 *   Contenido con color primario
 * </div>
 * 
 * <div className={Z7_STYLES.colors.category.arte}>
 *   Contenido con color de categoría Arte
 * </div>
 */

/**
 * EJEMPLO 2: Usar tipografía
 * 
 * Niveles disponibles:
 * - h1, h2, h3, h4, h5, h6 (headings)
 * - body, bodyLarge, bodySmall
 * - label, caption
 * 
 * Uso en componentes:
 * 
 * <h1 className={Z7_STYLES.typography.h1}>
 *   Mi título principal
 * </h1>
 * 
 * <p className={Z7_STYLES.typography.body}>
 *   Texto de cuerpo
 * </p>
 * 
 * <label className={Z7_STYLES.typography.label}>
 *   Etiqueta del formulario
 * </label>
 */

/**
 * EJEMPLO 3: Usar patrones comunes
 * 
 * Patrones disponibles:
 * - heroGradient - Fondo de hero
 * - card - Tarjeta base
 * - buttonPrimary - Botón principal
 * - buttonSecondary - Botón secundario
 * - inputBase - Input base
 * - container - Contenedor
 * 
 * Uso en componentes:
 * 
 * <section className={Z7_STYLES.patterns.heroGradient}>
 *   Hero content
 * </section>
 * 
 * <div className={Z7_STYLES.patterns.card}>
 *   Card content
 * </div>
 * 
 * <a href="#" className={Z7_STYLES.patterns.buttonPrimary}>
 *   Click me
 * </a>
 */

/**
 * EJEMPLO 4: Usar espaciado
 * 
 * Espaciado disponible:
 * - section - Espaciado estándar de sección (py-12 md:py-16)
 * - sectionLarge - Espaciado grande (py-16 md:py-24)
 * - card - Espaciado de tarjeta (p-6)
 * 
 * Uso en componentes:
 * 
 * <section className={Z7_STYLES.spacing.section}>
 *   Contenido
 * </section>
 */

/**
 * EJEMPLO 5: Usar funciones utilitarias
 * 
 * Funciones disponibles:
 * - getColorClass(type, intensity)
 * - getTypographyClass(level)
 * - cx(...classes) - Combina clases
 * 
 * Uso:
 * 
 * const colorClass = getColorClass('primary', 600);
 * const typographyClass = getTypographyClass('h2');
 * const combined = cx('p-4', disabled && 'opacity-50', 'rounded-lg');
 */

/**
 * EJEMPLO 6: Usar CSS variables directamente
 * 
 * En archivos CSS puedes usar:
 * 
 * .my-element {
 *   color: var(--z7-primary-600);
 *   background: var(--z7-secondary-50);
 *   font-family: var(--z7-font-sans);
 *   box-shadow: var(--z7-shadow-lg);
 *   border-radius: var(--z7-radius-base);
 *   transition: color var(--z7-transition-base);
 * }
 */

/**
 * GUÍA RÁPIDA DE COLORES
 * 
 * PRIMARY (Azul):
 * - 50: Muy claro
 * - 100: Claro
 * - 600: Principal
 * - 700: Oscuro
 * - 900: Muy oscuro
 * 
 * SECONDARY (Gris):
 * - 50-300: Tonos claros
 * - 600-900: Tonos oscuros
 * 
 * ACCENT:
 * - success: Verde (éxito)
 * - error: Rojo (error)
 * - warning: Naranja (advertencia)
 */

/**
 * EJEMPLO DE COMPONENTE COMPLETO
 * 
 * import { Z7_STYLES } from '../config/styles.js';
 * 
 * export default function MyComponent() {
 *   return (
 *     <section className={`${Z7_STYLES.patterns.heroGradient} ${Z7_STYLES.spacing.section}`}>
 *       <div className={Z7_STYLES.patterns.container}>
 *         <h1 className={Z7_STYLES.typography.h1}>Mi Título</h1>
 *         <p className={Z7_STYLES.typography.body}>Descripción</p>
 *         <button className={Z7_STYLES.patterns.buttonPrimary}>Click</button>
 *       </div>
 *     </section>
 *   );
 * }
 */

export const STYLE_GUIDE = {
  title: 'BHQZ Bosa - Style Guide',
  version: '1.0.0',
  lastUpdated: '2026-04-16',
};
