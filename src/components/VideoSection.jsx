import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import promoVideo from '../assets/materiaviva.mp4';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="bg-[#FAF8F5] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado minimalista */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-2 block">
            Experiencia Materia Viva
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-900 tracking-tight">
            Diseño, precisión e ingeniería en movimiento
          </h2>
        </motion.div>

        {/* Contenedor principal del Video con Marco y Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group rounded-xl sm:rounded-2xl overflow-hidden bg-brand-dark shadow-2xl border border-stone-200/60"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Efecto Ambient Glow / Resplandor sutil de fondo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-green/20 via-stone-400/10 to-brand-green/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

          {/* Reproductor de Video */}
          <div className="relative aspect-video w-full bg-black cursor-pointer overflow-hidden" onClick={togglePlay}>
            <video
              ref={videoRef}
              src={promoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Overlay Oscuro Sutil al hacer hover */}
            <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`} />

            {/* Botón Central Flotante de Play/Pausa */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-2xl transition-all duration-300 ${
                  !isPlaying || showControls ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
              >
                {isPlaying ? (
                  <Pause size={28} className="fill-current" />
                ) : (
                  <Play size={28} className="fill-current ml-1" />
                )}
              </motion.button>
            </div>

            {/* Botón de Audio en la esquina inferior derecha */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-stone-900/60 backdrop-blur-md border border-white/20 text-white hover:bg-stone-900/80 transition-colors shadow-lg"
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}