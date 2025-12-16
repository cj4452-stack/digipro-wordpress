import React from 'react';
import { Drill, Wrench, Droplets, Zap, PaintBucket, Hammer, ShieldAlert, Boxes, Fan, Car, ChevronRight } from 'lucide-react';

const categories = [
  { icon: <Drill />, name: "Herramientas Eléctricas" },
  { icon: <Wrench />, name: "Herramientas Manuales" },
  { icon: <Droplets />, name: "Fontanería" },
  { icon: <Zap />, name: "Electricidad" },
  { icon: <PaintBucket />, name: "Pinturas" },
  { icon: <Hammer />, name: "Ferretería General" },
  { icon: <Boxes />, name: "Materiales de Construcción" },
  { icon: <Fan />, name: "Jardín y Exterior" },
  { icon: <ShieldAlert />, name: "Seguridad Industrial" },
  { icon: <Boxes />, name: "Organización y Almacenaje" },
  { icon: <Fan />, name: "Climatización y Ventilación" },
  { icon: <Car />, name: "Automotriz y Taller" },
];

export const CategoryGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mb-16 relative">
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-xl font-bold text-gray-900">Categorías</h3>
        <a href="#" onClick={(e) => { e.preventDefault(); alert("Mostrando listado completo de categorías"); }} className="text-sm text-green-700 font-medium hover:underline">Mostrar todas las categorías</a>
        
        <div className="ml-auto flex gap-1 cursor-pointer">
           <div className="w-2 h-2 rounded-full bg-green-600"></div>
           <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-green-400 transition"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            onClick={() => alert(`Navegando a: ${cat.name}`)}
            className="bg-white rounded border border-gray-200 p-4 flex items-center gap-4 hover:shadow-md transition cursor-pointer group active:scale-95 duration-100"
          >
             <div className="text-green-600 group-hover:scale-110 transition-transform duration-300">
               {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
             </div>
             <span className="font-semibold text-gray-700 text-sm">{cat.name}</span>
          </div>
        ))}
      </div>
       
       <button 
         onClick={() => alert("Desplazando categorías...")}
         className="absolute -right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full p-3 hidden xl:block hover:bg-gray-50 border border-gray-100 z-20 hover:scale-110 transition"
       >
          <ChevronRight size={24} className="text-green-600"/>
        </button>
    </div>
  );
};