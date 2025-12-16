import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2574&auto=format&fit=crop",
    title: "OFERTAS EN",
    highlight: "HERRAMIENTAS:",
    highlightColor: "text-[#ccff00]",
    subtitle: "HASTA 40% OFF",
    button: "Ver ofertas",
    overlay: "from-green-900/90"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2574&auto=format&fit=crop",
    title: "POTENCIA PURA",
    highlight: "TORO NEGRO:",
    highlightColor: "text-white",
    subtitle: "NUEVA LÍNEA 20V",
    button: "Ver Toro Negro",
    overlay: "from-gray-900/95"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2574&auto=format&fit=crop",
    title: "ESPECIALISTAS",
    highlight: "STANFORD:",
    highlightColor: "text-[#fbbf24]", // Amber/Gold
    subtitle: "ELECTRICIDAD PRO",
    button: "Ver Stanford",
    overlay: "from-blue-900/90"
  }
];

export const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[380px] md:h-[420px] bg-gray-900 overflow-hidden group">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
            {/* Background Image */}
            <img 
                src={slide.image}
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay} to-transparent`}></div>

            <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
                <div className="max-w-xl text-white">
                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight drop-shadow-lg">
                      {slide.title} <br/>
                      <span className={slide.highlightColor}>{slide.highlight}</span> <br/>
                      {slide.subtitle}
                  </h1>
                  <button 
                      onClick={() => alert(`Navegando a: ${slide.button}`)}
                      className="bg-white text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition shadow-lg mt-4 active:scale-95 transform hover:scale-105"
                  >
                      {slide.button}
                  </button>
                </div>
            </div>
        </div>
      ))}
      
      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${
              idx === current ? 'bg-white scale-110 w-8' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};