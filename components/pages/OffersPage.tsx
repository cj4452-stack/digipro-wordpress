import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../../types';

interface OffersPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ products, onAddToCart }) => {
    const [favorites, setFavorites] = useState<Set<number | string>>(new Set());
    
    const toggleFavorite = (e: React.MouseEvent, id: number | string) => {
        e.stopPropagation();
        setFavorites(prev => {
          const newFavs = new Set(prev);
          if (newFavs.has(id)) {
            newFavs.delete(id);
          } else {
            newFavs.add(id);
          }
          return newFavs;
        });
      };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-yellow-400 p-6 rounded-lg mb-8 shadow-sm">
                <h1 className="text-3xl font-bold text-gray-900">Catálogo Web ⚡</h1>
                <p className="text-gray-800">Explora todos nuestros productos disponibles.</p>
            </div>

            {products.length === 0 ? (
                 <div className="text-center py-10">
                    <p className="text-gray-500">Cargando productos desde WooCommerce...</p>
                 </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map(offer => (
                        <div key={offer.id} className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden group relative flex flex-col">
                            {offer.oldPrice && offer.oldPrice > offer.price && (
                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                                    -{Math.round(((offer.oldPrice - offer.price) / offer.oldPrice) * 100)}%
                                </div>
                            )}
                            <div className="absolute top-2 right-2 z-10">
                                <button onClick={(e) => toggleFavorite(e, offer.id)} className="p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm transition">
                                    <Heart size={18} className={favorites.has(offer.id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"} />
                                </button>
                            </div>
                            <div className="h-48 overflow-hidden bg-gray-50 p-4">
                                <img src={offer.image} className="w-full h-full object-contain group-hover:scale-105 transition duration-300" alt={offer.name} />
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 text-sm h-10">{offer.name}</h3>
                                <div className="mt-auto">
                                    <div className="flex items-end gap-2">
                                        <span className="text-xl font-bold text-gray-900">${offer.price.toLocaleString('es-CL')}</span>
                                        {offer.oldPrice && offer.oldPrice > offer.price && (
                                            <span className="text-sm text-gray-400 line-through mb-1">${offer.oldPrice.toLocaleString('es-CL')}</span>
                                        )}
                                    </div>
                                    <button 
                                        onClick={() => onAddToCart(offer)}
                                        className="w-full mt-3 bg-white border border-green-600 text-green-700 font-medium py-1.5 rounded hover:bg-green-50 transition active:scale-95"
                                    >
                                        Agregar al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};