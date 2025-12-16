import React from 'react';
import { HelpCircle, Phone, Mail, FileText } from 'lucide-react';

export const HelpPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Centro de Ayuda</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                    <Phone className="mx-auto text-green-600 mb-3" size={32} />
                    <h3 className="font-bold text-gray-800">Llámanos</h3>
                    <p className="text-sm text-gray-600 mt-2">600 320 5000</p>
                    <p className="text-xs text-gray-500">Lunes a Sábado 8:00 - 20:00</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                    <Mail className="mx-auto text-green-600 mb-3" size={32} />
                    <h3 className="font-bold text-gray-800">Escríbenos</h3>
                    <p className="text-sm text-gray-600 mt-2">contacto@ferreteria.cl</p>
                    <p className="text-xs text-gray-500">Respondemos en 24 hrs</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                    <FileText className="mx-auto text-green-600 mb-3" size={32} />
                    <h3 className="font-bold text-gray-800">Facturación</h3>
                    <p className="text-sm text-gray-600 mt-2">Portal de Clientes</p>
                    <p className="text-xs text-gray-500">Gestiona tus documentos</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-xl font-bold mb-4">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                    <details className="group border-b border-gray-100 pb-4">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-800 hover:text-green-700">
                            <span>¿Cómo rastreo mi pedido?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                            Puedes rastrear tu pedido ingresando a "Mis Compras" en la barra superior. Allí verás el estado actualizado de tu envío en tiempo real.
                        </p>
                    </details>
                    <details className="group border-b border-gray-100 pb-4">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-800 hover:text-green-700">
                            <span>¿Hacen facturas a empresas?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                            Sí, durante el proceso de compra (Checkout) puedes seleccionar "Factura" en la sección de datos de facturación e ingresar el RUT de tu empresa.
                        </p>
                    </details>
                     <details className="group border-b border-gray-100 pb-4">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-800 hover:text-green-700">
                            <span>¿Cuál es la política de devoluciones?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                            Tienes 30 días para devolver tu producto si no estás satisfecho, siempre que esté en su embalaje original y sin uso.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
};