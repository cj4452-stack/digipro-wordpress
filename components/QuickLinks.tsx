import React from 'react';
import { Truck, UserCheck, Map, CreditCard, DollarSign, Package } from 'lucide-react';

const links = [
  { icon: <Truck size={28} />, label: "Envío gratis en herramientas", action: "Filtrando por Envío Gratis..." },
  { icon: <UserCheck size={28} />, label: "Ingresa a tu cuenta Pro", action: "Accediendo a Portal Pro..." },
  { icon: <Map size={28} />, label: "Ingresa tu ubicación de obra", action: "Abriendo mapa de obras..." },
  { icon: <CreditCard size={28} />, label: "Medios de pago para profesionales", action: "Viendo opciones de financiamiento..." },
  { icon: <DollarSign size={28} />, label: "Menos de $50.000", action: "Filtrando productos bajo $50.000..." },
  { icon: <Package size={28} />, label: "Más vendidos en construcción", action: "Mostrando Best Sellers..." },
];

export const QuickLinks: React.FC = () => {
  return (
    <div className="bg-white py-8 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-4">
          {links.map((link, index) => (
            <div 
              key={index} 
              onClick={() => alert(link.action)}
              className="flex flex-col items-center text-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center text-green-600 shadow-sm group-hover:shadow-md group-hover:border-green-400 transition-all duration-300 transform group-active:scale-95">
                {link.icon}
              </div>
              <span className="text-xs font-medium text-gray-600 group-hover:text-green-700 leading-tight max-w-[120px]">
                {link.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};