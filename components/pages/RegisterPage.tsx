import React from 'react';
import { ChevronDown, Mail, Phone, User, MapPin } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-2xl font-bold text-brand-DEFAULT mb-8 pb-2 border-b border-gray-200">Registro de Usuario</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
        
        {/* Step 1: Contact Info */}
        <div className="mb-8">
           <h2 className="text-lg font-bold text-gray-800 mb-4">1. Información de Contacto</h2>
           <div className="space-y-4">
              <div className="w-full">
                 <label className="block text-sm font-semibold text-gray-700 mb-1">Correo Electrónico</label>
                 <div className="relative">
                   <input type="email" placeholder="Correo Electrónico" className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                 </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Teléfono</label>
                    <input type="tel" placeholder="Teléfono" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">RUT Personal</label>
                    <input type="text" placeholder="RUT" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                 </div>
              </div>
           </div>
        </div>

        {/* Step 2: Shipping Address */}
        <div className="mb-8">
           <h2 className="text-lg font-bold text-gray-800 mb-4">2. Dirección de Envío</h2>
           <p className="text-xs text-gray-500 mb-4">Ingresa la dirección donde deseas recibir tus productos y materiales.</p>
           
           <div className="space-y-4">
              <div>
                 <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre Completo</label>
                 <input type="text" placeholder="Nombre Completo" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>
              <div>
                 <label className="block text-sm font-semibold text-gray-700 mb-1">Calle y Número</label>
                 <input type="text" placeholder="Calle y Número" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                   <label className="block text-sm font-semibold text-gray-700 mb-1">Ciudad</label>
                   <div className="relative">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 appearance-none bg-white">
                        <option>Selecciona una ciudad</option>
                        <option>Santiago</option>
                        <option>Valparaíso</option>
                        <option>Concepción</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                   </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">País</label>
                   <div className="relative">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 appearance-none bg-gray-100" disabled>
                        <option>Chile</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                   </div>
                </div>
              </div>
           </div>
        </div>

        {/* Step 3: Billing Info */}
        <div className="mb-8">
           <h2 className="text-lg font-bold text-gray-800 mb-4">Dirección y RUT de Facturación</h2>
           <div className="flex items-center gap-2 mb-4">
             <input type="checkbox" id="sameAddress" className="text-green-600 focus:ring-green-500 rounded" />
             <label htmlFor="sameAddress" className="text-sm text-gray-700">¿Es la misma dirección y RUT para la facturación?</label>
           </div>
           
           <div className="space-y-4">
              <div>
                 <label className="block text-sm font-semibold text-gray-700 mb-1">RUT de Facturación</label>
                 <input type="text" placeholder="RUT de Facturación" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>
              <div>
                 <label className="block text-sm font-semibold text-gray-700 mb-1">Dirección de Facturación</label>
                 <input type="text" placeholder="Calle y Número" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 appearance-none bg-white">
                        <option>Ciudad</option>
                      </select>
                       <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                   </div>
                   <div className="relative">
                      <input type="text" value="Chile" disabled className="w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md text-gray-600" />
                   </div>
              </div>
           </div>
        </div>

        {/* Newsletter & Submit */}
        <div className="mt-8 pt-6 border-t border-gray-100">
           <div className="flex items-center gap-2 mb-6">
             <input type="checkbox" id="newsletter" className="text-green-600 focus:ring-green-500 rounded" />
             <label htmlFor="newsletter" className="text-sm text-gray-700">Suscribirme al boletín de noticias para recibir ofertas exclusivas</label>
           </div>
           
           <button 
             onClick={() => alert("Registrando usuario...")}
             className="w-full bg-[#4d7c0f] hover:bg-[#365314] text-white font-bold py-3 rounded-md transition shadow-md"
           >
             Registrarse
           </button>
           
           <div className="text-center mt-4 text-sm">
             <span className="text-gray-600">¿Ya tienes cuenta? </span>
             <a href="#" className="text-green-700 font-bold hover:underline">Inicia sesión</a>
           </div>
        </div>

      </div>
    </div>
  );
};