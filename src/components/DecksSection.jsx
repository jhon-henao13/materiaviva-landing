import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Importación de las 4 imágenes de la sección
import img1 from '../assets/group-decks/1.jpg';
import img2 from '../assets/group-decks/2.jpg';
import img3 from '../assets/group-decks/3.jpg';
import img4 from '../assets/group-decks/4.jpg';

export default function DecksSection() {
  return (
    <section id="decks" className="py-20 md:py-28 bg-[#fbf8f1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Imagen Destacada Principal (Vertical) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 h-full"
          >
            <div className="relative h-[480px] sm:h-[580px] lg:h-full min-h-[500px] rounded-xs overflow-hidden shadow-lg group cursor-pointer bg-gray-200">
              <img
                src={img1}
                alt="Deck principal de madera sobre bastidores"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Títulos, Párrafo, Sub-Grid de Imágenes y Botón CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Encabezado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-dark tracking-tight leading-[1.15] mb-4">
                Decks y recubrimientos <br className="hidden sm:inline" />
                exteriores
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Maderas nobles y compuestos de ingeniería sobre bastidores nivelados, diseñados para resistir el clima sin perder elegancia.
              </p>
            </motion.div>

            {/* Grid Secundario de 3 Imágenes + Contenedor de Botón */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              
              {/* Imagen 2 (Deck superior) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="aspect-[4/3] rounded-sm overflow-hidden shadow-sm group cursor-pointer bg-gray-200"
              >
                <img
                  src={img2}
                  alt="Deck de madera con árbol integrado"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>

              {/* Imagen 3 (Deck nocturno iluminación) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="aspect-[4/3] rounded-sm overflow-hidden shadow-sm group cursor-pointer bg-gray-200"
              >
                <img
                  src={img3}
                  alt="Deck iluminado en residencia de noche"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>

              {/* Imagen 4 (Deck de piscina/alberca) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="aspect-[4/3] rounded-sm overflow-hidden shadow-sm group cursor-pointer bg-gray-200"
              >
                <img
                  src={img4}
                  alt="Deck sintético alrededor de alberca"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>

              {/* Bloque CTA alineado horizontalmente con la tercera imagen */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                className="flex items-center justify-start sm:justify-center p-2"
              >
                <motion.a
                  href="#cotizar"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-3 bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <span>Cotizar Ahora</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}