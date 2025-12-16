import React from 'react';
import { Mail, Lock } from 'lucide-react';

export const LoginPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">¡Hola! Ingresa tu e-mail, teléfono o usuario</h1>
        
        <div className="space-y-6">
           <div className="relative">
             <label className="block text-sm font-semibold text-gray-700 mb-1">E-mail o Usuario</label>
             <div className="relative">
                <input 
                    type="text" 
                    placeholder="ejemplo@correo.com" 
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition" 
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
             </div>
           </div>

           <div className="relative">
             <label className="block text-sm font-semibold text-gray-700 mb-1">Contraseña</label>
             <div className="relative">
                <input 
                    type="password" 
                    placeholder="********" 
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition" 
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
             </div>
             <div className="text-right mt-1">
                 <a href="#" className="text-xs text-green-700 font-medium hover:underline">¿Olvidaste tu contraseña?</a>
             </div>
           </div>

           <button 
             onClick={() => alert("Simulando inicio de sesión...")}
             className="w-full bg-[#4d7c0f] hover:bg-[#365314] text-white font-bold py-3 rounded-md transition shadow-md"
           >
             Ingresar
           </button>
        </div>

        <div className="mt-8 text-center pt-6 border-t border-gray-100">
           <p className="text-sm text-gray-600 mb-2">¿No tienes cuenta?</p>
           <button 
             onClick={() => alert("Redirigiendo a registro...")}
             className="text-green-700 font-bold hover:underline"
           >
             Crear cuenta
           </button>
        </div>
      </div>
    </div>
  );
};