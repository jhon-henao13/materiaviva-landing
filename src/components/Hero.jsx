import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/background-hero.png';
import heroBgMobile from '../assets/background-hero.movil2.jpg';

export default function Hero() {

  const whatsappUrl = "https://wa.me/5215545703154?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20personalizada%20para%20mi%20proyecto%20de%20p%C3%A9rgola%20%2F%20deck.";

  return (
    <section className="relative min-h-[750px] lg:min-h-screen w-full flex items-end pt-28 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      {/* Background Hero Images con Overlay de Degradado Suave */}
      <div className="absolute inset-0 z-0">
        {/* Imagen para Móvil (vertical) */}
        <img
          src={heroBgMobile}
          alt="Arquitectura Exterior Materia Viva"
          className="w-full h-full object-cover block md:hidden object-[center_25%]"
        />

        {/* Imagen para Desktop (horizontal) */}
        <img
          src={heroBg}
          alt="Arquitectura Exterior Materia Viva"
          className="w-full h-full object-cover hidden md:block object-[center_25%]"
        />

        {/* Degradado responsivo móvil: Concentrado abajo-izquierda con efecto blur */}
        <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-white/90 via-white/85 to-transparent block md:hidden" />
        
        {/* Degradado Desktop (sin cambios) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/70 to-transparent hidden md:block w-3/4 lg:w-3/5 h-full" />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-[310px] sm:max-w-md lg:max-w-2xl">
          
          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black tracking-tight !leading-[1.2] mb-2"
          >
            Arquitectura exterior <br className="hidden sm:inline" />
            a la medida
          </motion.h1>

          {/* Subtítulo / Párrafo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg text-[#555555] !leading-[1.45] mb-6 max-w-lg"
          >
            Pérgolas, terrazas, decks y más... de lujo a medida para residencias y comercios exigentes.{' '}
            <strong className="font-medium text-gray-800">
              Diseñamos, fabricamos e instalamos en CDMX y Estado de México.
            </strong>
          </motion.p>

          {/* Botón CTA Cotizar Ahora */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, x: 3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-[#99c01c] hover:bg-[#7CB325] text-white font-bold text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Cotizar Ahora</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}