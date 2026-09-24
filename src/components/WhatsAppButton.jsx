import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Número de WhatsApp formateado para API (52 1 55 4570 3154)
  const phoneNumber = '5215545703154';
  const defaultMessage = encodeURIComponent(
    'Hola, me gustaría solicitar una cotización personalizada para mi proyecto de pérgola / deck.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  useEffect(() => {
    // Mostrar tooltip emergente a los 3 segundos de entrar
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Detectar scroll para activar sutiles animaciones
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* 1. Modal / Card de Chat Flotante (Popup interactivo) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto mb-4 w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100 font-sans"
          >
            {/* Header de la card con gradiente de marca */}
            <div className="bg-gradient-to-r from-brand-dark via-stone-900 to-brand-dark p-4 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-stone-400 hover:text-white p-1 rounded-full transition-colors"
                aria-label="Cerrar chat"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                    <MessageCircle size={24} className="fill-current" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-stone-900 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white flex items-center gap-1.5">
                    Materia Viva <Sparkles size={14} className="text-brand-green" />
                  </h4>
                  <p className="text-xs text-stone-300">Asesoría & Cotizaciones</p>
                </div>
              </div>
            </div>

            {/* Cuerpo del mensaje */}
            <div className="p-4 bg-stone-50 space-y-3">
              <div className="bg-white p-3.5 rounded-xl shadow-sm border border-stone-100 text-xs text-stone-700 leading-relaxed relative">
                <p className="font-medium text-stone-900 mb-1">¡Hola! 👋</p>
                <p>¿Tienes un proyecto en mente? Escríbenos para enviarte un catálogo o realizar una cotización sin compromiso.</p>
                <span className="text-[10px] text-stone-400 block text-right mt-1.5">Respuesta inmediata</span>
              </div>

              {/* Botón CTA dentro de la Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs rounded-xl shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95"
              >
                <MessageCircle size={18} className="fill-current" />
                <span>Iniciar chat en WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Tooltip / Mensaje Flotante Sugerente (Cuando el chat está cerrado) */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto mb-3 mr-1 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-stone-100/80 flex items-center gap-3 cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <p className="text-xs font-semibold text-stone-800 group-hover:text-brand-green transition-colors">
              ¿En qué podemos ayudarte hoy?
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-stone-400 hover:text-stone-600 transition-colors ml-1"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Botón Flotante Principal de WhatsApp */}
      <div className="relative pointer-events-auto">
        {/* Efecto de Pulso Resplandeciente */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 blur-md animate-pulse"></span>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl transition-colors duration-300 group"
          aria-label="Abrir WhatsApp"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {/* SVG Oficial de WhatsApp para máxima definición */}
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform duration-300 group-hover:rotate-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}