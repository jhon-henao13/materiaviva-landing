import React from 'react';
import logoColor from '../assets/logo.png';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800 font-sans relative overflow-hidden">

      {/* Sombra suave / Resplandor de fondo marca */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8CBE29]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECCIÓN PRINCIPAL GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Columna 1: Logo, Descripción y Redes Sociales (4 columnas) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logoColor} 
                alt="Materia Viva" 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
            </div>
            
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Especialistas en la creación e instalación de pérgolas de lujo, decks, toldos y arquitectura exterior de alto valor estético en México. Más de 25 años transformando espacios.
            </p>

            {/* Redes Sociales */}
            {/* Redes Sociales */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                Síguenos en redes
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-[#8CBE29] text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-[#8CBE29] text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-[#8CBE29] text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            
          </div>

          {/* Columna 2: Catálogo de Especialidades (3 columnas) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <a href="#pergolas" className="hover:text-[#8CBE29] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-[#8CBE29] transition-colors" />
                  Pérgolas Híbridas & Retráctiles
                </a>
              </li>
              <li>
                <a href="#pergolas-aluminio" className="hover:text-[#8CBE29] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-[#8CBE29] transition-colors" />
                  Sombra Viva (Lamas Orientables)
                </a>
              </li>
              <li>
                <a href="#decks" className="hover:text-[#8CBE29] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-[#8CBE29] transition-colors" />
                  Deck Natural, WPC y Bambú
                </a>
              </li>
              <li>
                <a href="#toldos" className="hover:text-[#8CBE29] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-[#8CBE29] transition-colors" />
                  Toldos Retráctiles & Velarias
                </a>
              </li>
              <li>
                <a href="#recubrimientos" className="hover:text-[#8CBE29] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-[#8CBE29] transition-colors" />
                  Pisos de Ingeniería & Muros Verdes
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información de Contacto Real (5 columnas) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">
              Oficinas & Atención
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-sm text-stone-400">
              
              {/* Dirección */}
              <div className="flex items-start gap-3 bg-stone-800/50 p-3.5 rounded-2xl border border-stone-800">
                <MapPin className="w-5 h-5 text-[#8CBE29] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-stone-200 font-semibold text-xs block">Ubicación</span>
                  <p className="text-stone-400 text-xs leading-snug">
                    Calle 8 No.10, Col. Reforma Social, Miguel Hidalgo, CDMX, C.P. 11650.
                  </p>
                </div>
              </div>

              {/* Teléfonos */}
              <div className="flex items-start gap-3 bg-stone-800/50 p-3.5 rounded-2xl border border-stone-800">
                <Phone className="w-5 h-5 text-[#8CBE29] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-stone-200 font-semibold text-xs block">Teléfonos Directos</span>
                  <a 
                    href="tel:5529789916" 
                    className="text-stone-300 hover:text-[#8CBE29] text-xs transition-colors block"
                  >
                    +52 (55) 2978-9916 / 17
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 bg-stone-800/50 p-3.5 rounded-2xl border border-stone-800">
                <Mail className="w-5 h-5 text-[#8CBE29] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-stone-200 font-semibold text-xs block">E-mail Corporativo</span>
                  <a 
                    href="mailto:contacto@materiaviva.com.mx" 
                    className="text-stone-300 hover:text-[#8CBE29] text-xs transition-colors block"
                  >
                    contacto@materiaviva.com.mx
                  </a>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-3 bg-stone-800/50 p-3.5 rounded-2xl border border-stone-800">
                <Clock className="w-5 h-5 text-[#8CBE29] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-stone-200 font-semibold text-xs block">Horarios de Atención</span>
                  <p className="text-stone-400 text-xs">
                    Lun - Jue: 09:00 – 18:00 hrs <br />
                    Vie: 09:00 – 17:00 hrs
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ================= BARRA INFERIOR / DERECHOS ================= */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              Derechos Reservados Materia Viva S.A. de C.V. – {currentYear}
            </p>
            <span className="hidden sm:inline text-stone-700">•</span>
            <span className="inline-flex items-center gap-1 text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8CBE29]" /> Instalación segura en CDMX y Edomex
            </span>
          </div>

          <div className="flex gap-6 items-center">
            <a 
              href="https://materiaviva.com.mx/aviso-de-privacidad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors inline-flex items-center gap-1"
            >
              Aviso de Privacidad
              <ArrowUpRight className="w-3 h-3 text-stone-600" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}