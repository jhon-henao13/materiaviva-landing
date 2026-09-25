import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  MessageCircle, 
  DollarSign, 
  Sun, 
  Scale, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Maximize2 
} from 'lucide-react';

// Preguntas y respuestas enriquecidas con íconos para jerarquía visual
const FAQS = [
  {
    id: 1,
    question: "¿Cuánto cuesta un proyecto a la medida?",
    answer: "Parten de un mínimo de $80,000–$100,000 MXN y el rango habitual va de $100,000 a $400,000 MXN (para espacios desde 15–20 m²), según materiales y domótica. Envíanos fotos y medidas por WhatsApp para darte un estimado rápido.",
    icon: DollarSign,
    badge: "Inversión & Presupuesto"
  },
  {
    id: 2,
    question: "¿La cubierta de cristal hará demasiado calor?",
    answer: "No. Usamos cristal templado con protección UV anti-calor y sistemas de sombra orientables o retráctiles. Mantienen el espacio fresco, iluminado y 100% hermético contra la lluvia.",
    icon: Sun,
    badge: "Confort Térmico"
  },
  {
    id: 3,
    question: "¿La estructura será muy pesada para mi espacio?",
    answer: "Evaluamos cada inmueble en sitio antes de fabricar. Nuestros ingenieros calculan la distribución de cargas para garantizar una instalación 100% segura.",
    icon: Scale,
    badge: "Seguridad E structural"
  },
  {
    id: 4,
    question: "¿Realizan visitas técnicas a domicilio?",
    answer: "Sí. Tras validar tu estimado en WhatsApp, visitamos tu domicilio en CDMX o Edomex para rectificar medidas, mostrar muestras físicas de acabados y crear tu render 3D.",
    icon: MapPin,
    badge: "Atención Presencial"
  },
  {
    id: 5,
    question: "¿Cuánto tiempo tarda la fabricación e instalación?",
    answer: "De 3 a 6 semanas a partir del diseño 3D aprobado. Instalamos en sitio de forma ágil, limpia y sin interrumpir tu rutina diaria.",
    icon: Clock,
    badge: "Tiempos de Entrega"
  },
  {
    id: 6,
    question: "¿Qué garantía y mantenimiento ofrecen?",
    answer: "Ofrecemos 2 años de garantía por escrito en estructura, sellados y mecanismos. Usamos maderas tratadas de bajo mantenimiento y contamos con pólizas preventivas opcionales.",
    icon: ShieldCheck,
    badge: "Garantía Materia Viva"
  },
  {
    id: 7,
    question: "¿Puedo abrir la pérgola para ver el cielo?",
    answer: "Sí. Con nuestros sistemas retráctiles o corredizos motorizados abres el techo al tocar un botón para disfrutar el exterior y lo cierras herméticamente si empieza a llover.",
    icon: Maximize2,
    badge: "Sistemas Inteligentes"
  }
];

export default function FaqSection() {
  // Permite abrir una sola pregunta o mantener el estado abierto
  const [openIndex, setOpenIndex] = useState(0); // Primera abierta por defecto para mejor UX

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#f8f5ee] py-20 px-4 md:px-8 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Encabezado Réplica Exacta de Titular */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-stone-900 tracking-tight !leading-tight">
            Respuestas claras para <br className="hidden sm:block" />
            decisiones inteligentes.
          </h2>
        </div>

        {/* Tarjeta Contenedora Principal (Blanca Flotante como en la imagen) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-2xl shadow-stone-200/60 transition-all duration-300">
          <div className="divide-y divide-stone-100 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              const IconComponent = faq.icon;

              return (
                <div 
                  key={faq.id} 
                  className={`pt-4 first:pt-0 rounded-2xl transition-all duration-300 ${
                    isOpen ? 'bg-stone-50/80 p-4 sm:p-5 border border-stone-200/60 shadow-sm' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex items-center justify-between gap-4 py-2 group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Badge con ícono temático */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isOpen 
                          ? 'bg-[#8CBE29] text-white shadow-md shadow-lime-600/30' 
                          : 'bg-stone-100 text-stone-600 group-hover:bg-stone-200 group-hover:text-stone-900'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 block">
                          {faq.badge}
                        </span>
                        <h3 className={`text-base sm:text-lg font-bold transition-colors duration-200 ${
                          isOpen ? 'text-stone-900' : 'text-stone-800 group-hover:text-[#8CBE29]'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Botón desplegable dinámico */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-stone-900 text-white rotate-180' : 'bg-stone-100 text-stone-500 group-hover:bg-stone-200'
                    }`}>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Respuesta colapsable animada */}
                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-stone-200/50' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <div className="overflow-hidden">
                      <p className="text-stone-600 text-sm sm:text-base leading-relaxed pl-13 sm:pl-14">
                        {faq.answer}
                      </p>
                      
                      {/* Botón directo si la respuesta menciona WhatsApp */}
                      {/* {faq.answer.includes("WhatsApp") && (
                        <div className="mt-4 pl-13 sm:pl-14">
                          <a
                            href="https://wa.me/5215500000000?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20a%20la%20medida"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Enviar medidas por WhatsApp
                          </a>
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Banner inferior de asistencia adicional */}
        {/* <div className="text-center pt-4">
          <p className="text-stone-500 text-sm">
            ¿Tienes alguna otra duda específica sobre tu espacio?{' '}
            <a 
              href="#contacto" 
              className="text-stone-900 font-bold underline hover:text-[#8CBE29] transition-colors"
            >
              Habla directamente con un ingeniero de proyecto
            </a>
          </p>
        </div> */}

      </div>
    </section>
  );
}