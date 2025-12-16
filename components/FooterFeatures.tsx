import React from 'react';
import { CreditCard, PackageCheck, ShieldCheck } from 'lucide-react';

export const FooterFeatures: React.FC = () => {
  const handleLink = (e: React.MouseEvent, msg: string) => {
    e.preventDefault();
    alert(msg);
  }

  return (
    <div className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start flex-1 gap-2 border-r-0 md:border-r border-gray-100 last:border-0 px-4">
             <div className="text-green-600 mb-2">
               <CreditCard size={40} strokeWidth={1.5} />
             </div>
             <h4 className="font-medium text-gray-900 text-lg">Pago Seguro</h4>
             <p className="text-gray-500 text-xs leading-relaxed max-w-xs text-center md:text-left">
               Paga con tarjetas de crédito, débito y transferencias bancarias con total seguridad.
             </p>
             <a href="#" onClick={(e) => handleLink(e, "Información sobre Medios de Pago")} className="text-xs text-green-600 mt-1 hover:underline">Ver medios de pago</a>
          </div>

          <div className="flex flex-col items-center md:items-start flex-1 gap-2 border-r-0 md:border-r border-gray-100 last:border-0 px-4">
             <div className="text-green-600 mb-2">
               <PackageCheck size={40} strokeWidth={1.5} />
             </div>
             <h4 className="font-medium text-gray-900 text-lg">Envío gratis en Región Metropolitana</h4>
             <p className="text-gray-500 text-xs leading-relaxed max-w-xs text-center md:text-left">
               Por compras superiores a $20.000 pesos en toda la Región Metropolitana.
             </p>
          </div>

          <div className="flex flex-col items-center md:items-start flex-1 gap-2 border-r-0 md:border-r border-gray-100 last:border-0 px-4">
             <div className="text-green-600 mb-2">
               <ShieldCheck size={40} strokeWidth={1.5} />
             </div>
             <h4 className="font-medium text-gray-900 text-lg">Compra Protegida</h4>
             <p className="text-gray-500 text-xs leading-relaxed max-w-xs text-center md:text-left">
               Garantizamos la seguridad de tu compra. Si no recibes lo que esperabas, te devolvemos el dinero.
             </p>
             <a href="#" onClick={(e) => handleLink(e, "Información sobre Garantías")} className="text-xs text-green-600 mt-1 hover:underline">Cómo te protegemos</a>
          </div>

        </div>
      </div>
    </div>
  );
};