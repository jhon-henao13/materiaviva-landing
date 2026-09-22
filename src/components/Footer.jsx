import React from 'react';
import logoColor from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Columna 1: Logo & Info */}
          <div className="md:col-span-2 space-y-4">
            <img 
              src={logoColor} 
              alt="Materia Viva" 
              className="h-10 w-auto brightness-0 invert" 
            />
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Especialistas en la creación e instalación de pérgolas de lujo, decks y espacios exteriores de alto valor arquitectónico en México.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Navegación</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#pergolas" className="hover:text-brand-green transition-colors">Pérgolas</a></li>
              <li><a href="#decks" className="hover:text-brand-green transition-colors">Decks de Madera / WPC</a></li>
              <li><a href="#resenas" className="hover:text-brand-green transition-colors">Reseñas de Clientes</a></li>
              <li><a href="#faq" className="hover:text-brand-green transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Columna 3: Cobertura */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Cobertura</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Atención personalizada e instalación en <span className="text-white">CDMX</span> y <span className="text-white">Estado de México</span>.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Materia Viva. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Términos del Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}