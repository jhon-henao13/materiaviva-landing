import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Image as ImageIcon, 
  MessageCircle, 
  ExternalLink,
  X,
  Maximize2,
  Sparkles
} from 'lucide-react';

import reviewImg from '../assets/review.png';

// Datos de las reseñas reales de Materia Viva con sus imágenes adjuntas
const REVIEWS_DATA = [
  {
    id: 1,
    author: "Robert James",
    avatarBg: "bg-amber-600",
    stats: "4 opiniones · 2 fotos",
    isLocalGuide: false,
    rating: 5,
    time: "Hace 2 años",
    text: "Un trabajo moderno y campestres con clase, profesionales, puntuales y creativos, bastante recomendables, estoy muy satisfecho con sus resultados!! Felicidades 👏",
    photos: [
      "https://lh3.googleusercontent.com/grass-cs/ACvplmNr17exVr9yDMpmNnVwkH3Iwiej1Uu3mXg0ROBPa7Xtyj-6Y4YKBmPs6X2bA0fQpKYhaTPMP5Ch3s64FcBdwbXdxtwognUf1KKJvfXbh1L6Poj2lOdSXYFlFaIhI23dQnMNKePj=w600-h800-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ACvplmMeJS0YkEtJBJ3IxtutRiYbbLhH72G9_p_wm1QVnXfOR6nnr6ePolqXywUbzieXRCJn4IxoJuPTZXjci7-L9KIHP6h2vCMELiY2a2WpB9ZYaAIPqeKLFN0GPqAMgmwpo8U8nuE=w600-h800-p-k-no"
    ],
    ownerReply: {
      time: "Hace 2 años",
      text: "¡Muchas gracias por tus 5 estrellas! Nos alegra saber que estás satisfecho/a con nuestro servicio. Si tienes algún comentario adicional o necesitas cualquier cosa, no dudes en ponerte en contacto con nosotros. ¡Estamos aquí para ayudarte!"
    }
  },
  {
    id: 2,
    author: "Astral",
    avatarBg: "bg-emerald-600",
    stats: "18 opiniones · 10 fotos",
    isLocalGuide: true,
    rating: 5,
    time: "Hace 2 años",
    text: "Excelente atención y servicio por parte de todo el equipo, además de un trabajo fino y de excelente calidad. Los recomiendo al 100.",
    photos: [
      "https://lh3.googleusercontent.com/grass-cs/ACvplmPXQ9P2uGwFnHZuL2HZ49oHeO11ZjhUI3SvEvXkmQkDkMjuFxy0f3CWjd6T0ioVv_f9S5bbyQI9ijNHqMc0YoGBUgzP_jSceriIkpeW78AbZF1A2hpyLSXqNZ1XdQUOc01LhVcDJQ=w800-h600-p-k-no"
    ],
    ownerReply: {
      time: "Hace 2 años",
      text: "¡Muchas gracias por tus amables palabras! Nos alegra mucho saber que quedaste satisfecha con nuestro servicio y la calidad de nuestro trabajo. ¡Esperamos poder servirte nuevamente en el futuro!"
    }
  },
  {
    id: 3,
    author: "Fabiola Lanz",
    avatarBg: "bg-purple-600",
    stats: "3 opiniones · 1 foto",
    isLocalGuide: false,
    rating: 5,
    time: "Hace 10 meses",
    text: "Excelente servicio por parte de materia viva, ejecutivos e instaladores!!! En específico excelente atención por parte de la señorita Lorena 🤩👌🏻",
    photos: [
      "https://lh3.googleusercontent.com/grass-cs/ACvplmPiVMGYMfXl3k-GoV8XC4VPsxEA6GlnW7Bjxk2q7NOOUiQvZAp6MhB7_eknVqW9_ufzf2FeG72Xu5qyOUmfSEBNQ1Q1CAjr8aQBzqDzVdg1BkjOidjvAazWOJb0RalmSNsJrAbdeQ=w800-h600-p-k-no"
    ],
    ownerReply: {
      time: "Hace 10 meses",
      text: "¡Muchas gracias por tu reseña, Fabiola! Nos alegra enormemente saber que tu experiencia con nosotros fue excelente. Valoramos mucho tus palabras hacia nuestro equipo, tanto ejecutivos como instaladores."
    }
  },
  {
    id: 4,
    author: "misael browarnik",
    avatarBg: "bg-blue-600",
    stats: "9 opiniones · 5 fotos",
    isLocalGuide: false,
    rating: 5,
    time: "Hace 9 meses",
    text: "Quería felicitarlos por el tremendo trabajo que hicieron, quería poner una pérgola fija y me hicieron una propuesta para poner una pérgola retráctil que la verdad valió muchísimo la pena, los felicito por el impecable trabajo.",
    photos: [],
    ownerReply: null
  },
  {
    id: 5,
    author: "Carlos Avina",
    avatarBg: "bg-teal-600",
    stats: "3 opiniones · 1 foto",
    isLocalGuide: false,
    rating: 5,
    time: "Hace 1 año",
    text: "Muy buen servicio, muy profesionales.",
    photos: [
      "https://lh3.googleusercontent.com/grass-cs/ACvplmMAq470VQOWXs1japggMMQkmo5MIZUi0Be62lU2j22g7Ak7qe8nxZcV5mj_22T1-eEO5_-SkDsF6Uum1uTBO0cdnYWVHHugstnucw670YcNKdk32T2nSD2oo6pn6C_nJJubkT8u=w800-h600-p-k-no"
    ],
    ownerReply: {
      time: "Hace 1 año",
      text: "¡Muchas gracias por tu comentario, Carlos! Nos alegra saber que percibiste nuestro trabajo como profesional y que quedaste satisfecho con el servicio."
    }
  },
  {
    id: 6,
    author: "Karla Dávalos",
    avatarBg: "bg-rose-600",
    stats: "1 opinión · 1 foto",
    isLocalGuide: false,
    rating: 5,
    time: "Hace 2 años",
    text: "Muy buen servicio y atención por parte de la Srita. Lorena",
    photos: [
      "https://lh3.googleusercontent.com/grass-cs/ACvplmOJnkqenVbiOpaapeNGilXT2gKgdyMCl8tHr0RYLbwDd95MzPpUE7pyLGX9cH8KjOAYTcwsDuAhk0ds00PLviQpeHqAClbv3eM5hRJpLp9fsYKVeA5CHRvdzNiWNPrZbwAJ-bRz=w800-h600-p-k-no"
    ],
    ownerReply: {
      time: "Hace 2 años",
      text: "¡Gracias por compartir tu experiencia! Nos alegra saber que Lorena te brindó una atención adecuada y resolvió todas tus dudas."
    }
  },
  {
    id: 7,
    author: "Nay",
    avatarBg: "bg-indigo-600",
    stats: "17 opiniones · 22 fotos",
    isLocalGuide: true,
    rating: 5,
    time: "Hace 10 meses",
    text: "Sinceramente, me ha encantado el trabajo realizado, quizá demoramos un poquito más de lo acordado, pero la espera valió la pena en absoluto. De lo más importante es que están pendientes de los detalles.",
    photos: [],
    ownerReply: null
  },
  {
    id: 8,
    author: "Andrea Perez",
    avatarBg: "bg-orange-600",
    stats: "2 opiniones · 1 foto",
    isLocalGuide: false,
    rating: 5,
    time: "Hace 9 meses",
    text: "El equipo fue ¡Muy eficiente y comprometido! Encantada con mi deck. Al principio tenía mis dudas ya que los contacté por medio de una red social, pero superaron mis expectativas.",
    photos: [],
    ownerReply: null
  }
];

// Logo vectorial SVG de Google oficial
const GoogleGLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

export default function GoogleReviewsSection() {

  const whatsappUrl = "https://wa.me/5215545703154?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20personalizada%20para%20mi%20proyecto%20de%20p%C3%A9rgola%20%2F%20deck.";

  const [filter, setFilter] = useState('all'); // 'all', 'with_photos'
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState({});

  const filteredReviews = REVIEWS_DATA.filter(rev => {
    if (filter === 'with_photos') return rev.photos && rev.photos.length > 0;
    return true;
  });

  const toggleExpand = (id) => {
    setExpandedReviews(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="resenas" className="bg-[#FAF8F5] text-stone-900 py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#84CC16]/30">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TITULAR PRINCIPAL DE LA SECCIÓN */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight !leading-tight">
            La prueba de nuestros <span className="text-stone-800 underline decoration-[#84CC16] decoration-4 underline-offset-8">25+ años</span> de ingeniería exterior
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto">
            Descubre las experiencias reales de nuestros clientes y observa los proyectos instalados directamente en sus terrazas y jardines.
          </p>
        </div>

        {/* CONTENEDOR PRINCIPAL: RESUMEN + CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* TARJETA DE RESUMEN GOOGLE (IZQUIERDA) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-stone-200/50 border border-stone-200/80 space-y-6 static lg:sticky lg:top-20">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-stone-900 text-white flex items-center justify-center font-bold text-xl shadow-md border-2 border-[#84CC16]">
                  MV
                </div>
                <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md border border-stone-100">
                  <GoogleGLogo />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-lg leading-snug">
                  Materia Viva
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  Ingeniería & Arquitectura Exterior
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-50" />
                  <span className="text-xs font-semibold text-stone-700">Perfil Verificado</span>
                </div>
              </div>
            </div>

            {/* RATING Y ESTRELLAS */}
            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100 space-y-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-4xl font-extrabold text-stone-900">5.0</span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">Basado en reseñas reales de Google</p>
                </div>
              </div>
            </div>

            {/* BOTÓN CTA PARA ESCRIBIR RESEÑA */}
            <div className="space-y-3 pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-stone-900 text-white font-semibold text-sm hover:bg-stone-800 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <GoogleGLogo />
                <span>Escribe una reseña</span>
                <ExternalLink className="w-4 h-4 text-stone-400" />
              </a>

              {/* CONTADOR / BADGE */}
              <div className="flex items-center justify-between text-xs text-stone-500 px-2 pt-1">
                <span>⭐ 100% Calificaciones 5/5</span>
                <span>Google Reviews</span>
              </div>
            </div>
          </div>

          {/* GRID DE RESEÑAS CON FILTROS (DERECHA) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* FILTROS INTERACTIVOS */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2 sm:p-3 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    filter === 'all'
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  Todas las reseñas ({REVIEWS_DATA.length})
                </button>
                <button
                  onClick={() => setFilter('with_photos')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    filter === 'with_photos'
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <ImageIcon className="w-4 h-4 text-[#84CC16]" />
                  <span>Con Fotos de Proyectos</span>
                </button>
              </div>

              <span className="text-xs text-stone-400 hidden sm:block pr-2 font-medium">
                Reseñas públicas de Google Maps
              </span>
            </div>

            {/* LISTA DE RESEÑAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredReviews.map((rev) => {
                const isExpanded = expandedReviews[rev.id];
                const textTruncated = rev.text.length > 130;

                return (
                  <div
                    key={rev.id}
                    className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 hover:-translate-y-1"
                  >
                    <div className="space-y-3">
                      
                      {/* HEADER DE LA RESEÑA */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-base shadow-inner`}>
                            {rev.author.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="font-bold text-stone-900 text-sm">{rev.author}</h4>
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                            </div>
                            <div className="flex items-center gap-1 text-[11px] text-stone-500 font-medium">
                              <span>{rev.stats}</span>
                              {rev.isLocalGuide && (
                                <>
                                  <span>•</span>
                                  <span className="text-amber-700 font-semibold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60">
                                    Local Guide
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <GoogleGLogo />
                      </div>

                      {/* RATING & TIEMPO */}
                      <div className="flex items-center justify-between">
                        <div className="flex text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs text-stone-400 font-medium">{rev.time}</span>
                      </div>

                      {/* TEXTO DE LA RESEÑA */}
                      <div className="text-stone-700 text-sm leading-relaxed">
                        <p>
                          {textTruncated && !isExpanded
                            ? `${rev.text.substring(0, 130)}...`
                            : rev.text}
                        </p>
                        {textTruncated && (
                          <button
                            onClick={() => toggleExpand(rev.id)}
                            className="text-xs font-bold text-stone-900 hover:text-[#84CC16] mt-1 inline-block transition-colors"
                          >
                            {isExpanded ? 'Ver menos' : 'Leer más'}
                          </button>
                        )}
                      </div>

                      {/* FOTOS ADJUNTAS DEL TRABAJO REALIZADO */}
                      {rev.photos && rev.photos.length > 0 && (
                        <div className="pt-2">
                          <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                            <ImageIcon className="w-3 h-3 text-[#84CC16]" /> Foto del proyecto real:
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {rev.photos.map((imgUrl, imgIdx) => (
                              <div
                                key={imgIdx}
                                onClick={() => setSelectedImage(imgUrl)}
                                className="group relative rounded-md overflow-hidden aspect-video sm:aspect-square bg-stone-100 cursor-pointer border border-stone-200/80 shadow-sm"
                              >
                                <img
                                  src={imgUrl}
                                  alt={`Proyecto Materia Viva - ${rev.author}`}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                  <Maximize2 className="w-5 h-5 drop-shadow-md" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>

                    {/* RESPUESTA DEL PROPIETARIO (SI EXISTE) */}
                    {rev.ownerReply && (
                      <div className="mt-4 pt-4 border-t border-stone-100 bg-stone-50/80 rounded-xl p-3.5 space-y-1.5 border-l-4 border-l-[#84CC16]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-stone-900 flex items-center gap-1">
                            <MessageCircle className="w-3.5 h-3.5 text-[#84CC16]" />
                            Respuesta de Materia Viva
                          </span>
                          <span className="text-[10px] text-stone-400">{rev.ownerReply.time}</span>
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed italic">
                          "{rev.ownerReply.text}"
                        </p>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* BANNER INFERIOR DE LLAMADO A LA ACCIÓN (TAL COMO EN TU LANDING) */}
        <div className="relative mt-16 w-full overflow-hidden">
          {/* Fondo crema desvanecido de la sección */}
          <div className="absolute inset-y-8 inset-x-0 bg-[#F9F5EE] -z-10" />
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end px-4 py-4">
            
            {/* LADO IZQUIERDO: Imagen de la Pérgola */}
            <div className="flex justify-center md:justify-end pr-0 md:pr-8">
              <img 
                src={reviewImg} 
                alt="Pérgola Materia Viva" 
                className="w-full max-w-[360px] h-auto object-contain"
              />
            </div>

            {/* LADO DERECHO: Contenido y Botón */}
            <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-center">
              <h3 className="text-3xl sm:text-4xl font-normal text-stone-900 !tracking-tight !leading-tight max-w-lg">
                La terraza que siempre quisiste
              </h3>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#96C122] hover:bg-[#85AB1E] text-white font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <span>Cotizar Ahora</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* LIGHTBOX MODAL PARA VER FOTOS EN ALTA RESOLUCIÓN */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-stone-800/80 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Proyecto Materia Viva Ampliado"
              className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-stone-800 shadow-2xl"
            />
            <p className="text-stone-400 text-xs mt-3">Proyecto realizado por Materia Viva</p>
          </div>
        </div>
      )}

    </section>
  );
}