import React from 'react';
import { motion } from 'framer-motion';

// Importación de las 12 imágenes con sus extensiones exactas
import img1 from '../assets/group-carrusel/1.JPG';
import img2 from '../assets/group-carrusel/2.JPG';
import img3 from '../assets/group-carrusel/3.jpeg';
import img4 from '../assets/group-carrusel/4.jpeg';
import img5 from '../assets/group-carrusel/5.jpeg';
import img6 from '../assets/group-carrusel/6.jpeg';
import img7 from '../assets/group-carrusel/7.jpeg';
import img8 from '../assets/group-carrusel/8.jpeg';
import img9 from '../assets/group-carrusel/9.jpeg';
import img10 from '../assets/group-carrusel/10.jpeg';
import img11 from '../assets/group-carrusel/11.jpeg';
import img12 from '../assets/group-carrusel/12.jpeg';

export default function StatsCarousel() {
  const images = [
    { id: 1, src: img1, title: 'Pérgola Bioclimática', code: '01/' },
    { id: 2, src: img2, title: 'Deck Sintético Premium', code: '02/' },
    { id: 3, src: img3, title: 'Pérgola Residencial', code: '03/' },
    { id: 4, src: img4, title: 'Terraza Comercial', code: '04/' },
    { id: 5, src: img5, title: 'Deck Madera Cumarú', code: '05/' },
    { id: 6, src: img6, title: 'Pérgola Retráctil', code: '06/' },
    { id: 7, src: img7, title: 'Proyecto Exterior CDMX', code: '07/' },
    { id: 8, src: img8, title: 'Deck Flotante', code: '08/' },
    { id: 9, src: img9, title: 'Estructura Aluminio', code: '09/' },
    { id: 10, src: img10, title: 'Pérgola Minimalista', code: '10/' },
    { id: 11, src: img11, title: 'Deck & Pergola Integra', code: '11/' },
    { id: 12, src: img12, title: 'Pérgola con Iluminación LED', code: '12/' },
  ];

  // Duplicamos el array para lograr el bucle infinito perfecto e imperceptible
  const carouselList = [...images, ...images];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* SECCIÓN 1: Estadísticas (Métricas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 max-w-3xl mx-auto text-center mb-16 md:mb-20">
          
          {/* Métrica 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8C5E28] tracking-tight mb-2">
              7,000 m2
            </span>
            <span className="text-gray-500 font-medium text-base sm:text-lg tracking-wide">
              Pérgolas instaladas
            </span>
          </motion.div>

          {/* Métrica 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8C5E28] tracking-tight mb-2">
              10,000 m2
            </span>
            <span className="text-gray-500 font-medium text-base sm:text-lg tracking-wide">
              Decks instalados
            </span>
          </motion.div>

        </div>

        {/* SECCIÓN 2: Frase Disruptiva Prominente */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
        >
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-normal text-brand-dark !leading-tight !tracking-tight px-4">
            “Deja de depender del clima para disfrutar tu propia casa.”
          </blockquote>
        </motion.div>

      </div>

      {/* SECCIÓN 3: Carrusel Infinito de Imágenes (Hacia la Izquierda) */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Degradados laterales para suavizar los bordes del carrusel */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Contenedor de la animación Marquee */}
        <div className="animate-marquee flex items-center gap-4 md:gap-6">
          {carouselList.map((item, index) => {
            // Arreglo de diferentes proporciones para generar dinamismo y variedad visual
            const aspectStyles = [
              'aspect-[3/4]',    // Vertical original alta
              'aspect-[4/5]',    // Vertical ligeramente más cuadrada
              'aspect-square',   // Cuadrada completa
            ];
            // Selecciona una proporción rotativa basada en el ID del elemento
            const dynamicAspect = aspectStyles[(item.id - 1) % aspectStyles.length];

            return (
              <div
                key={`${item.id}-${index}`}
                className="flex-none w-[240px] sm:w-[290px] md:w-[330px] group cursor-pointer self-end"
              >
                {/* Tarjeta de Imagen con proporción dinámica */}
                <div className={`relative ${dynamicAspect} rounded-none overflow-hidden bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay sutil al pasar el cursor */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Pie de foto / Código descriptivo */}
                <div className="mt-3 flex items-center justify-between text-xs sm:text-sm text-gray-500 font-medium px-1">
                  <span className="text-gray-900 font-semibold">{item.code}</span>
                  <span className="truncate max-w-[200px] text-gray-600 group-hover:text-brand-green transition-colors">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}