import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

// Importación de imágenes
import img1 from '../assets/group-pergola/1.png';
import img2 from '../assets/group-pergola/2.png';
import img3 from '../assets/group-pergola/3.png';
import img4 from '../assets/group-pergola/4.png';
import img5 from '../assets/group-pergola/5.png';
import img6 from '../assets/group-pergola/6.png';
import img7 from '../assets/group-pergola/7.png';
import img8 from '../assets/group-pergola/8.png';

// Importación del video de la corrediza
import videoRetractil from '../assets/group-pergola/video1.mp4';
import videoRetractil2 from '../assets/group-pergola/video2.mp4';

export default function Pergolas() {
  const pergolasData = [
    {
      id: 1,
      title: 'Híbridas',
      description: 'Combinan la fuerza del acero, la calidez de la madera natural y la protección del cristal templado.',
      image: img1,
      video: null,
    },
    {
      id: 2,
      title: 'Sombra Viva',
      description: 'Diseños a medida que fusionan la calidez del bambú y la durabilidad del aluminio: confort con estética natural.',
      image: img2,
      video: videoRetractil2,
      badge: 'Sistema Corredizo',
    },
    {
      id: 3,
      title: 'Retráctil',
      description: 'Diseño biomecánico avanzado. Transición fluida entre sol, sombra y cielo abierto al toque de un botón.',
      image: img3,
      video: videoRetractil, // Muestra el video/gif de la corrediza
      badge: 'Sistema Corredizo',
    },
    {
      id: 4,
      title: 'Solar Dynamic',
      description: 'Estructura modular autónoma bioclimática con lamas orientables de instalación rápida.',
      image: img4,
      video: null,
    },
    {
      id: 5,
      title: 'De Acero',
      description: 'Estructuras indestructibles y sobrias. Diseños industriales o con acabado apariencia madera.',
      image: img5,
      video: null,
    },
    {
      id: 6,
      title: 'De Madera',
      description: 'Aportan calidez natural con maderas tratadas de alta densidad para jardines y terrazas.',
      image: img6,
      video: null,
    },
    {
      id: 7,
      title: 'De Aluminio',
      description: 'Ligeras, resistentes a la intemperie y de mantenimiento mínimo con estética contemporánea.',
      image: img7,
      video: null,
    },
    {
      id: 8,
      title: 'De Bambú',
      description: 'Lujo orgánico y sustentable con alta resistencia estructural para un entorno exclusivo.',
      image: img8,
      video: null,
    },
  ];

  return (
    <section id="pergolas" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Encabezado de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-brand-dark tracking-tight mb-4">
            Pérgolas
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            Soluciones en sombra, acero y cristal diseñadas milímetro a milímetro. Encuentra la combinación perfecta de control solar, hermeticidad y diseño para tu terraza.
          </p>
        </motion.div>

        {/* VISTA DESKTOP: Grid de 2 Columnas (4x2) */}
        <div className="hidden md:grid md:grid-cols-2 gap-4 lg:gap-6 mb-12">
          {pergolasData.map((item, index) => (
            <PergolaCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* VISTA MOBILE: Carrusel con 1 tarjeta + 1/4 visible */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-6 px-6 no-scrollbar mb-10">
          {pergolasData.map((item, index) => (
            <div
              key={item.id}
              className="w-[78vw] sm:w-[340px] flex-shrink-0 snap-start"
            >
              <PergolaCard item={item} index={index} isMobile />
            </div>
          ))}
        </div>

        {/* Botón Cotizar Ahora */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-6"
        >
          <motion.a
            href="#cotizar"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <span>Cotizar Ahora</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

// Componente para cada Tarjeta individual con soporte de Hover/Touch para Video
function PergolaCard({ item, index, isMobile = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-[4/3] sm:aspect-[16/10] rounded-sm overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-900 cursor-pointer"
    >
      {/* Imagen Estática de Fondo */}
      <img
        src={item.image}
        alt={item.title}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
      />

      {/* Video / GIF de Corrediza (Si aplica para la tarjeta, p.ej. Retráctil) */}
      {item.video && (
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered || isMobile ? 'opacity-100' : 'opacity-0 md:opacity-0'
          }`}
        >
          <video
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Badge indicador para la tarjeta con video si no está en hover */}
      {item.badge && !isHovered && (
        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
          <Play className="w-3 h-3 fill-brand-green text-brand-green" />
          <span>{item.badge}</span>
        </div>
      )}

      
      {/* Overlay con Gradiente de Sombra ubicado solo en la parte inferior */}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none transition-opacity duration-300" />

      {/* Contenido de Texto Inferior */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-10 text-white">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1.5 drop-shadow-sm">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-200 font-normal leading-relaxed max-w-md line-clamp-3 sm:line-clamp-none opacity-90">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}