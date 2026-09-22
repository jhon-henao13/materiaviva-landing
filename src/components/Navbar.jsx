import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoColor from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pérgolas', href: '#pergolas' },
    { name: 'Decks', href: '#decks' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm py-3"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={logoColor}
            alt="Materia Viva"
            className="h-4 md:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback por si la imagen aún no está cargada correctamente
              e.target.style.display = 'none';
            }}
          />
          {/* Logo Fallback Texto elegante */}
          
        </a>

        {/* Links de Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-500 hover:text-gray-900 font-medium text-sm lg:text-base tracking-wide transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botón Cotizar Ahora Desktop */}
        <div className="hidden md:block">
          <motion.a
            href="#cotizar"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#99c01c] hover:bg-[#7CB325] text-white font-semibold text-sm lg:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            Cotizar Ahora
          </motion.a>
        </div>

        {/* Botón Menú Móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none p-2"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#8DC63F] font-medium text-lg py-1 border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cotizar"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-3 bg-[#99c01c] text-white font-semibold rounded-lg shadow"
              >
                Cotizar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}