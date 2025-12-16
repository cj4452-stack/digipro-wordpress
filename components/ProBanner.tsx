import React from 'react';
import { Truck, Star, CircleDollarSign } from 'lucide-react';

export const ProBanner: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-sm border border-gray-200 p-1">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white/50 p-4 rounded-md">
           
           <div className="flex items-center gap-3 mb-4 md:mb-0">
             <div className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Club PRO</div>
             <span className="font-semibold text-gray-700">VIVE LA FERRETERÍA COMO UN EXPERTO</span>
           </div>

           <div className="flex flex-1 justify-around w-full md:w-auto gap-4 md:gap-12 px-4 md:px-12 my-4 md:my-0 border-t md:border-t-0 md:border-l border-gray-200 py-4 md:py-0">
              <div className="flex flex-col items-center text-center gap-1 cursor-help" title="Ver detalles de envío">
                <Truck className="text-green-600" size={24} />
                <span className="text-[10px] md:text-xs font-medium text-gray-500 max-w-[120px]">Envíos gratis en productos Express desde $ 19.990</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1 cursor-help" title="Ver marcas participantes">
                <div className="flex gap-1 text-yellow-500 font-bold text-xs bg-gray-800 px-1 rounded">
                  <span>TORO NEGRO</span>
                  <span>STANFORD</span>
                </div>
                <span className="text-[10px] md:text-xs font-medium text-gray-500 max-w-[120px]">Las mejores marcas de herramientas</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1 cursor-help" title="Ver términos de cashback">
                <CircleDollarSign className="text-green-600" size={24} />
                <span className="text-[10px] md:text-xs font-medium text-gray-500 max-w-[120px]">Hasta 5% de cashback en Ferretería del Hogar</span>
              </div>
           </div>

           <button 
             onClick={() => alert("Iniciando proceso de suscripción a Club PRO...")}
             className="bg-[#4a8a18] hover:bg-[#3d7213] text-white font-semibold text-sm py-2 px-6 rounded transition mt-4 md:mt-0 w-full md:w-auto active:bg-[#2f5e0f]"
           >
             Suscribirme desde $ 4.990
           </button>
        </div>
      </div>
    </div>
  );
};