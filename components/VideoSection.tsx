import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div 
        onClick={() => alert("Navegando a sección de Tutoriales y Guías...")}
        className="relative rounded-lg overflow-hidden bg-gray-900 text-white h-64 md:h-80 shadow-lg group cursor-pointer"
      >
        <img 
          src="https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?q=80&w=2670&auto=format&fit=crop" 
          alt="DIY Workshop" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/40 to-transparent"></div>
        
        <div className="relative h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
           <div className="flex items-center gap-2 mb-3">
             <div className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Academia Online</div>
           </div>
           <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
             Aprende y construye <br/>
             <span className="text-brand-light">tus propios proyectos</span>
           </h2>
           <p className="text-gray-200 mb-6 text-sm md:text-base max-w-lg">
             Descubre cientos de guías paso a paso, consejos de expertos y las mejores técnicas para renovar tu hogar.
           </p>
           <button className="bg-white text-gray-900 font-bold px-6 py-3 rounded-md w-fit flex items-center gap-2 transition hover:bg-gray-100 group-hover:shadow-lg">
             Ver tutoriales paso a paso <ArrowRight size={18} className="text-green-600" />
           </button>
        </div>
      </div>
    </div>
  );
};