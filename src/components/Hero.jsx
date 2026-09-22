import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/background-hero.png';

export default function Hero() {
  return (
    <section className="relative min-h-[750px] lg:min-h-screen w-full flex items-end pt-28 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      {/* Background Hero Image con Overlay de Degradado Suave */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Arquitectura Exterior Materia Viva"
          className="w-full h-full object-cover lg:object-cover object-[center_25%]"
        />
        {/* Degradado blanco de izquierda a derecha para legibilidad óptima */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/70 to-transparent w-full md:w-3/4 lg:w-3/5" />
        
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          
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
            Pérgolas y decks de lujo para residencias y comercios exigentes.{' '}
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
              href="#cotizar"
              whileHover={{ scale: 1.03, x: 3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-5 py-3 bg-[#99c01c] hover:bg-[#7CB325] text-white font-bold text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
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