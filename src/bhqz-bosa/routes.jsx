// BHQZ Bosa - Route definitions
// Configure all BHQZ Bosa routes with lazy loading for code splitting

import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

// Lazy load all pages for route-based code splitting
const Home = lazy(() => import('./pages/Home.jsx'));
const Nosotros = lazy(() => import('./pages/Nosotros.jsx'));
const Programas = lazy(() => import('./pages/Programas.jsx'));
const Galeria = lazy(() => import('./pages/Galeria.jsx'));
const Inscripciones = lazy(() => import('./pages/Inscripciones.jsx'));
const Contacto = lazy(() => import('./pages/Contacto.jsx'));

// Loading fallback component
const RouteLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Cargando...</p>
    </div>
  </div>
);

/**
 * BHQZ Bosa route configuration with lazy loading
 * Each route is code-split automatically by React Router
 */
export const z7SportRoutes = [
  <Route
    key="bhqz-bosa-home"
    path="/bhqz-bosa"
    element={
      <Suspense fallback={<RouteLoader />}>
        <Home />
      </Suspense>
    }
  />,
  <Route
    key="bhqz-bosa-nosotros"
    path="/bhqz-bosa/nosotros"
    element={
      <Suspense fallback={<RouteLoader />}>
        <Nosotros />
      </Suspense>
    }
  />,
  <Route
    key="bhqz-bosa-programas"
    path="/bhqz-bosa/programas"
    element={
      <Suspense fallback={<RouteLoader />}>
        <Programas />
      </Suspense>
    }
  />,
  <Route
    key="bhqz-bosa-galeria"
    path="/bhqz-bosa/galeria"
    element={
      <Suspense fallback={<RouteLoader />}>
        <Galeria />
      </Suspense>
    }
  />,
  <Route
    key="bhqz-bosa-inscripciones"
    path="/bhqz-bosa/inscripciones"
    element={
      <Suspense fallback={<RouteLoader />}>
        <Inscripciones />
      </Suspense>
    }
  />,
  <Route
    key="bhqz-bosa-contacto"
    path="/bhqz-bosa/contacto"
    element={
      <Suspense fallback={<RouteLoader />}>
        <Contacto />
      </Suspense>
    }
  />,
];
