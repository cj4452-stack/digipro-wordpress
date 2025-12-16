import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Product, ViewState } from '../types';

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  setView: (view: ViewState) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, onAddToCart, setView }) => {
  const [favorites, setFavorites] = useState<Set<string | number>>(new Set());

  const toggleFavorite = (e: React.MouseEvent, id: string | number) => {
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

  // Get first product for spotlight or a specific one if available
  const featuredProduct = products.length > 0 ? products[0] : null;

  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Slot 1: Dynamic Product from WooCommerce */}
        {featuredProduct ? (
           <div 
             onClick={() => onAddToCart(featuredProduct)}
             className="bg-white rounded-lg p-8 flex justify-between items-center shadow-sm border border-gray-100 h-64 relative overflow-hidden group cursor-pointer hover:shadow-md transition"
           >
             <div className="absolute top-4 right-4 z-20">
               <button onClick={(e) => toggleFavorite(e, featuredProduct.id)} className="p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm transition">
                 <Heart size={20} className={favorites.has(featuredProduct.id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"} />
               </button>
             </div>

             <div className="flex flex-col z-10 w-1/2">
               <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{featuredProduct.brand || 'DESTACADO'}</span>
               <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight line-clamp-3">{featuredProduct.name}</h3>
               <button className="bg-[#65a30d] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#4d7c0f] w-fit">
                 Comprar
               </button>
             </div>
             <img 
               src={featuredProduct.image} 
               className="absolute right-0 bottom-0 h-4/5 w-1/2 object-contain object-center group-hover:scale-105 transition p-2"
               alt={featuredProduct.name}
             />
           </div>
        ) : (
           // Placeholder if loading
           <div className="bg-white rounded-lg h-64 animate-pulse"></div>
        )}

        {/* Slot 2: Static Category / Organization Banner */}
        <div 
          onClick={() => setView('offers')}
          className="bg-[#f5f5f7] rounded-lg overflow-hidden shadow-sm border border-gray-100 h-64 relative group cursor-pointer hover:shadow-md transition"
        >
           <img 
             src="https://images.unsplash.com/photo-1566231908472-35804df90209?q=80&w=800&auto=format&fit=crop"
             className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
             alt="Toolbox"
           />
           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition flex items-center justify-center">
             <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">Organización</span>
           </div>
        </div>

        {/* Slot 3: Offers Banner (Links to dynamic list) */}
        <div 
          onClick={() => setView('offers')}
          className="bg-white rounded-lg p-8 flex justify-between items-center shadow-sm border border-gray-100 h-64 relative overflow-hidden group cursor-pointer hover:shadow-md transition"
        >
          <div className="flex flex-col z-10">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">CATÁLOGO COMPLETO:</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 max-w-[180px]">ENCUENTRA TODO LO QUE BUSCAS</h3>
            <button className="bg-[#65a30d] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#4d7c0f] w-fit">
              Ver Catálogo
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#102a1b]">
             <img 
              src="https://images.unsplash.com/photo-1588619461337-f275e82f7394?q=80&w=400&auto=format&fit=crop" 
              className="w-full h-full object-contain p-4 group-hover:scale-110 transition"
              alt="Work Light"
            />
          </div>
        </div>

      </div>
    </div>
  );
};