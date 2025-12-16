import React from 'react';
import { ChevronRight } from 'lucide-react';

const cards = [
  {
    bg: "bg-gradient-to-r from-gray-900 to-black",
    brand: "TORO NEGRO",
    logoColor: "text-white",
    title: "Ofertas Especiales",
    subtitle: "Descuentos en Toro Negro",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=500&auto=format&fit=crop",
    link: "Ver catálogo Toro Negro"
  },
  {
    bg: "bg-gradient-to-r from-blue-900 to-[#1e3a8a]", // Dark blue gradient for Stanford
    brand: "STANFORD",
    logoColor: "text-[#d4af37]", // Gold color for text
    title: "15% OFF",
    subtitle: "en Stanford Electric",
    image: "https://images.unsplash.com/photo-1540652613917-768eb2a66e4b?q=80&w=500&auto=format&fit=crop",
    link: "Ver catálogo Stanford"
  },
  {
    bg: "bg-gradient-to-r from-amber-700 to-amber-800",
    brand: "CURSO",
    logoColor: "text-white",
    title: "7 DÍAS GRATIS",
    subtitle: "Curso de Carpintería",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=500&auto=format&fit=crop",
    link: "Inscribirse en Curso"
  }
];

export const BenefitsCarousel: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mb-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Beneficios para Profesionales</h3>
        <div className="flex gap-1 cursor-pointer" onClick={() => alert("Cambiando slide...")}>
             <div className="w-2 h-2 rounded-full bg-green-600"></div>
             <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-green-400 transition"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            onClick={() => alert(`Navegando: ${card.link}`)}
            className={`relative overflow-hidden rounded-lg h-48 shadow-md flex ${card.bg} cursor-pointer hover:shadow-xl transition-shadow`}
          >
            <div className="w-1/2 p-6 flex flex-col justify-center z-10">
              <span className={`text-2xl font-black italic mb-2 ${card.logoColor}`}>{card.brand}</span>
              <h4 className={`text-lg font-bold leading-tight ${card.logoColor === 'text-black' ? 'text-gray-900' : 'text-white'}`}>{card.title}</h4>
              <p className={`text-sm ${card.logoColor === 'text-black' ? 'text-gray-800' : 'text-gray-200'}`}>{card.subtitle}</p>
            </div>
            <div className="w-1/2 relative">
               {/* Slanted overlay */}
               <div className="absolute inset-0 bg-white/10 skew-x-12 -ml-8"></div>
               <img src={card.image} alt={card.brand} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
        
        <button 
          onClick={() => alert("Cargando más beneficios...")}
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hidden lg:block hover:bg-gray-50 z-20 hover:scale-110 transition"
        >
          <ChevronRight size={24} className="text-green-600"/>
        </button>
      </div>
    </div>
  );
};