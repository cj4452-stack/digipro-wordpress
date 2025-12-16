import React, { useState } from 'react';
import { Search, MapPin, ShoppingCart, Menu, ChevronDown, User, MonitorPlay, Heart } from 'lucide-react';
import { NavigationProps } from '../types';

export const Header: React.FC<NavigationProps> = ({ setView, cartCount = 0 }) => {
  const [locationInfo, setLocationInfo] = useState({ line1: "Ingresa tu", line2: "ubicación de obra" });
  const [searchTerm, setSearchTerm] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categoriesList = [
    "Herramientas Eléctricas", "Herramientas Manuales", "Fontanería", "Electricidad", 
    "Pinturas", "Ferretería General", "Materiales de Construcción", "Jardín y Exterior",
    "Seguridad Industrial", "Organización", "Climatización", "Automotriz"
  ];

  const handleLocationRequest = () => {
    if (!("geolocation" in navigator)) {
      alert("Tu navegador no soporta geolocalización.");
      return;
    }

    // Preguntar al usuario en español antes de invocar la función del sistema
    const confirmacion = window.confirm("Digipro necesita acceder a tu ubicación para calcular los costos de envío exactos. ¿Deseas permitir el acceso?");

    if (confirmacion) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationInfo({
            line1: "Enviando a",
            line2: "Santiago Centro"
          });
          alert("¡Ubicación detectada exitosamente! El costo de envío se calculará automáticamente al finalizar la compra.");
        },
        (error) => {
          console.error(error);
          if (error.code === error.PERMISSION_DENIED) {
             alert("Has bloqueado el acceso a la ubicación. Para usar esta función, por favor autoriza el acceso a la ubicación en la configuración de tu navegador.");
          } else {
             alert("No pudimos acceder a tu ubicación. Por favor intenta ingresarla manualmente en el registro.");
          }
        }
      );
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Buscando productos relacionados con: "${searchTerm}"`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#bed000] shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-6">
          {/* Logo Digipro */}
          <div className="flex flex-col leading-tight cursor-pointer" onClick={() => setView('home')}>
            <div className="flex items-center gap-1">
              <span className="font-sans text-3xl font-bold tracking-tighter text-gray-900">
                Digi<span className="text-green-800">pro</span>
              </span>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Busca productos, marcas y más..." 
                className="w-full py-2.5 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
              />
              <button type="submit" className="absolute right-0 top-0 h-full px-4 text-gray-400 border-l border-gray-200 hover:bg-gray-50 rounded-r-md">
                <Search size={18} />
              </button>
            </form>
          </div>
          
           {/* Mobile Menu Button */}
           <button className="md:hidden ml-auto text-gray-800" onClick={() => alert("Abriendo menú móvil...")}>
            <Menu size={24} />
           </button>
        </div>

        {/* Sub Header */}
        <div className="flex items-center justify-between mt-3 text-sm text-gray-800">
          <div 
            onClick={handleLocationRequest}
            className="hidden md:flex items-center gap-1 cursor-pointer hover:bg-black/5 px-2 py-1 rounded transition"
            title="Calcular envío automático"
          >
            <MapPin size={16} />
            <div className="flex flex-col leading-none">
              <span className="text-xs opacity-70">{locationInfo.line1}</span>
              <span className="font-medium">{locationInfo.line2}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 font-medium text-black/70 text-[13px] relative z-20">
            {/* Dropdown Categories */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsCategoryOpen(true)}
              onMouseLeave={() => setIsCategoryOpen(false)}
            >
              <button className="flex items-center gap-0.5 hover:text-black focus:outline-none py-2">
                Categorías <ChevronDown size={14}/>
              </button>
              
              {isCategoryOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-md border border-gray-200 py-2 flex flex-col gap-0.5 text-gray-700">
                   {categoriesList.map((cat, idx) => (
                     <a key={idx} href="#" onClick={(e) => { e.preventDefault(); setView('home'); alert(`Filtrando: ${cat}`); }} className="px-4 py-2 hover:bg-gray-100 hover:text-green-700 text-left">
                       {cat}
                     </a>
                   ))}
                </div>
              )}
            </div>

            <a href="#" onClick={(e) => { e.preventDefault(); setView('offers'); }} className="hover:text-black">Ofertas</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setView('favorites'); }} className="hover:text-black">Favoritos</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setView('help'); }} className="hover:text-black">Ayuda</a>
          </nav>

          <div className="hidden md:flex items-center gap-5 text-[13px] text-gray-900">
            <a href="#" onClick={(e) => { e.preventDefault(); setView('register'); }} className="font-medium hover:text-gray-600">Crea tu cuenta</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setView('login'); }} className="font-medium hover:text-gray-600">Ingresa</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Mis compras"); }} className="font-medium hover:text-gray-600">Mis compras</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setView('cart'); }} className="hover:text-gray-600 relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};