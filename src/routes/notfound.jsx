import { useLocation } from "react-router-dom";

export function meta() {
  return [{ title: "Not Found - Don Pruebal" }];
}

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-400 text-xl mb-8">
          La página "{location.pathname}" no fue encontrada.
        </p>
        <a href="/" className="inline-block px-6 py-3 bg-red-900 text-white rounded hover:bg-red-800 transition">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
