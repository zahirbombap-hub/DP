import { Link } from "react-router-dom";

export function Breadcrumbs() {
  return (
    <nav className="flex py-4 px-6 text-sm text-gray-500 bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto w-full">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
              <span className="material-symbols-outlined text-lg mr-1">home</span>
              Inicio
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              <span className="ml-1 text-gray-900 font-medium md:ml-2">Zapatos en Bogotá</span>
            </div>
          </li>
        </ol>
      </div>
    </nav>
  );
}