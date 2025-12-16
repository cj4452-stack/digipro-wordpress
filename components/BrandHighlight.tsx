import React from 'react';
import { ChevronRight } from 'lucide-react';

export const BrandHighlight: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Toro Negro - Black */}
        <div 
          onClick={() => alert("Abriendo tienda oficial Toro Negro")}
          className="bg-gray-900 rounded-lg p-8 flex items-center justify-between overflow-hidden shadow-sm relative group cursor-pointer hover:shadow-md transition"
        >
          <div className="z-10 max-w-[60%]">
             <div className="bg-white text-black font-black text-xl px-2 py-0.5 inline-block mb-3">TORO NEGRO</div>
             <p className="font-medium text-gray-200 mb-1">¡EL REGALO PERFECTO!</p>
             <h3 className="text-2xl font-bold text-white mb-4 leading-tight">ENVÍO RÁPIDO A LA<br/>PUERTA DE TU TALLER</h3>
             <button className="flex items-center text-sm font-semibold text-white hover:underline">
               Compra aquí <ChevronRight size={16} />
             </button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1508872588825-70e24b423cb1?q=80&w=400&auto=format&fit=crop" 
            className="absolute right-0 top-0 h-full w-1/2 object-contain object-right-bottom opacity-90 group-hover:scale-105 transition duration-500"
            alt="Toro Negro Drill"
          />
        </div>

        {/* Stanford - Dark Blue & Gold */}
        <div 
          onClick={() => alert("Abriendo tienda oficial Stanford")}
          className="bg-[#1e293b] rounded-lg p-8 flex items-center justify-between overflow-hidden shadow-sm relative group cursor-pointer hover:shadow-md transition"
        >
          <div className="z-10 max-w-[60%]">
             {/* Logo mimic: Blue text on White/Gold bg */}
             <div className="bg-white text-[#1e3a8a] border-b-4 border-[#d4af37] font-black text-xl px-2 py-0.5 inline-block mb-3">STANFORD</div>
             <p className="font-medium text-[#fbbf24] mb-1">¡POTENCIA Y CALIDAD!</p>
             <h3 className="text-2xl font-bold text-white mb-4 leading-tight">SOLUCIONES ELÉCTRICAS<br/>PROFESIONALES</h3>
             <button className="flex items-center text-sm font-semibold text-white hover:underline">
               Compra aquí <ChevronRight size={16} />
             </button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1574681685800-8025244b059f?q=80&w=400&auto=format&fit=crop" 
            className="absolute right-0 top-0 h-full w-1/2 object-contain object-right-bottom group-hover:scale-105 transition duration-500"
            alt="Stanford Equipment"
          />
        </div>
      </div>
    </div>
  );
};