import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { QuickLinks } from './components/QuickLinks';
import { VideoSection } from './components/VideoSection';
import { BenefitsCarousel } from './components/BenefitsCarousel';
import { BrandHighlight } from './components/BrandHighlight';
import { FeaturedProducts } from './components/FeaturedProducts';
import { CategoryGrid } from './components/CategoryGrid';
import { FooterFeatures } from './components/FooterFeatures';
import { ChatWidget } from './components/ChatWidget';
import { CartPage } from './components/pages/CartPage';
import { RegisterPage } from './components/pages/RegisterPage';
import { LoginPage } from './components/pages/LoginPage';
import { OffersPage } from './components/pages/OffersPage';
import { HelpPage } from './components/pages/HelpPage';
import { ViewState, Product, CartItem } from './types';
import { Heart } from 'lucide-react';
import { fetchWooProducts } from './services/woocommerceService';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Initial Data Fetch from WooCommerce
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchWooProducts();
      setProducts(data);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`${product.name} agregado al carrito`);
  };

  const updateQuantity = (id: string | number, change: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string | number) => {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'cart':
        return <CartPage 
                 cartItems={cartItems} 
                 onUpdateQuantity={updateQuantity} 
                 onRemoveItem={removeItem}
               />;
      case 'register':
        return <RegisterPage />;
      case 'login':
        return <LoginPage />;
      case 'offers':
        return <OffersPage products={products} onAddToCart={addToCart} />;
      case 'help':
        return <HelpPage />;
      case 'favorites':
        return (
          <div className="container mx-auto px-4 py-16 text-center">
             <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={48} className="text-gray-300" />
             </div>
             <h2 className="text-2xl font-bold text-gray-800">Tus Favoritos</h2>
             <p className="text-gray-500 mt-2">Aún no has guardado productos en tu lista de favoritos.</p>
             <button onClick={() => setCurrentView('offers')} className="mt-6 text-green-700 font-semibold hover:underline">
               Explorar ofertas
             </button>
          </div>
        );
      case 'home':
      default:
        return (
          <div className="space-y-4">
             <HeroSection />
             <QuickLinks />
             {/* ProBanner removed */}
             <VideoSection />
             <BenefitsCarousel />
             <BrandHighlight />
             <FeaturedProducts products={products} onAddToCart={addToCart} setView={setCurrentView} />
             <CategoryGrid />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#ededed]">
      <Header currentView={currentView} setView={setCurrentView} cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
      <main className="flex-grow pb-10">
        {renderContent()}
      </main>
      <FooterFeatures />
      <div className="bg-white py-4 text-center text-xs text-gray-400 border-t border-gray-200">
        Copyright © 1999-2024 Digipro S.R.L.
      </div>
      <ChatWidget />
    </div>
  );
}

export default App;