import React from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { CartItem } from '../../types';
import { getCheckoutUrl } from '../../services/woocommerceService';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: string | number, change: number) => void;
  onRemoveItem: (id: string | number) => void;
}

export const CartPage: React.FC<CartPageProps> = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
      // In a real headless setup, you would create an Order via API.
      // For this integration, we redirect to the WordPress checkout page.
      const checkoutUrl = getCheckoutUrl(cartItems);
      
      // If we had a real URL configured, we would do:
      // window.location.href = checkoutUrl;
      
      alert("En una integración real, esto redirigiría a: " + checkoutUrl + " con los productos cargados.");
  };

  if (cartItems.length === 0) {
      return (
          <div className="container mx-auto px-4 py-16 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart size={48} className="text-gray-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Tu carrito está vacío</h2>
              <p className="text-gray-500 mt-2">¡Miles de productos te esperan!</p>
          </div>
      );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Tu Carrito de Compras</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="flex-1 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6 relative">
              <button 
                onClick={() => onRemoveItem(item.id)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition"
                title="Eliminar producto"
              >
                <X size={18} />
              </button>
              
              <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
              </div>
              
              <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4">
                <div>
                   <h3 className="font-semibold text-gray-800 text-sm md:text-base">{item.name}</h3>
                   {item.brand && <span className="text-xs text-gray-500 block mb-1">{item.brand}</span>}
                   <span className="text-xl font-bold text-gray-900">${item.price.toLocaleString('es-CL')}</span><span className="text-xs text-gray-500 ml-1">/un.</span>
                </div>
                
                <div className="flex items-center border border-gray-200 rounded-md">
                   <button 
                     onClick={() => onUpdateQuantity(item.id, -1)}
                     className="p-2 hover:bg-gray-100 text-gray-600 disabled:opacity-30"
                     disabled={item.quantity <= 1}
                    >
                        <Minus size={14}/>
                   </button>
                   <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                   <button 
                     onClick={() => onUpdateQuantity(item.id, 1)}
                     className="p-2 hover:bg-gray-100 text-green-600"
                    >
                        <Plus size={14}/>
                   </button>
                </div>
              </div>
            </div>
          ))}
          <a href="#" className="text-green-700 text-sm font-medium hover:underline inline-block mt-2">Seguir comprando</a>
        </div>

        {/* Summary Card */}
        <div className="w-full lg:w-80">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-lg font-bold mb-4 border-b border-gray-100 pb-2">Resumen de compra</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Subtotal</span>
                <span>${total.toLocaleString('es-CL')}</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Envío</span>
                <span className="text-green-600 font-medium">$0</span>
              </div>
              <div className="flex justify-between text-gray-900 font-bold text-lg pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>${total.toLocaleString('es-CL')}</span>
              </div>
            </div>

            <button 
              className="w-full bg-[#4d7c0f] hover:bg-[#365314] text-white font-bold py-3 rounded-md transition shadow-sm flex flex-col items-center justify-center"
              onClick={handleCheckout}
            >
              <span>Finalizar Compra en Web</span>
              <span className="text-[10px] font-normal opacity-80">Procesado por WooCommerce</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};