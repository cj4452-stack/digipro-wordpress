// Configuración para tu sitio de WordPress
// En un entorno de producción real, estas claves deberían estar en archivos .env
// e idealmente las solicitudes deberían pasar por un proxy para evitar exponer claves o problemas de CORS.
const WC_CONFIG = {
  url: 'https://tu-sitio-wordpress.com', // CAMBIA ESTO por tu URL real
  consumerKey: 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // CAMBIA ESTO
  consumerSecret: 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // CAMBIA ESTO
};

// Ayudante para mapear el producto de WooCommerce al tipo de producto de nuestra App
const mapWooProduct = (wcProduct: any): any => {
  const price = parseInt(wcProduct.price || '0');
  const regularPrice = parseInt(wcProduct.regular_price || '0');
  
  return {
    id: wcProduct.id,
    name: wcProduct.name,
    price: price,
    oldPrice: regularPrice > price ? regularPrice : undefined,
    image: wcProduct.images && wcProduct.images.length > 0 ? wcProduct.images[0].src : 'https://via.placeholder.com/300',
    description: wcProduct.short_description || wcProduct.description,
    brand: wcProduct.categories && wcProduct.categories.length > 0 ? wcProduct.categories[0].name : 'General',
    permalink: wcProduct.permalink,
    stock_status: wcProduct.stock_status
  };
};

export const fetchWooProducts = async (): Promise<any[]> => {
  try {
    // Nota: Llamar a la API de WC directamente desde el navegador a menudo es bloqueado por CORS.
    // Si esto falla, es posible que necesites un proxy del lado del servidor o un plugin en WP para permitir CORS.
    // Para esta demostración, manejamos la recuperación de datos.
    
    // Construir encabezado de autenticación (Basic Auth)
    const auth = btoa(`${WC_CONFIG.consumerKey}:${WC_CONFIG.consumerSecret}`);
    
    const response = await fetch(`${WC_CONFIG.url}/wp-json/wc/v3/products?per_page=20&status=publish`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Error conectando con WooCommerce');
    }

    const data = await response.json();
    return data.map(mapWooProduct);

  } catch (error) {
    console.warn("La conexión a la API de WooCommerce falló (probablemente claves inválidas o CORS). Usando datos de respaldo.", error);
    
    // DATOS DE RESPALDO (Simulando lo que devolvería WC)
    return [
      {
        id: 101,
        name: "Sierra Circular 7 1/4 Pro",
        price: 89990,
        oldPrice: 129990,
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=400&auto=format&fit=crop",
        brand: "Toro Negro",
        stock_status: "instock"
      },
      {
        id: 102,
        name: "Taladro Inalámbrico 12V",
        price: 45990,
        oldPrice: 65990,
        image: "https://images.unsplash.com/photo-1622039775369-043e03d42054?q=80&w=400&auto=format&fit=crop",
        brand: "Toro Negro",
        stock_status: "instock"
      },
      {
        id: 103,
        name: "Juego Brocas 100pz",
        price: 19990,
        oldPrice: 29990,
        image: "https://images.unsplash.com/photo-1540652613917-768eb2a66e4b?q=80&w=400&auto=format&fit=crop",
        brand: "Stanford",
        stock_status: "instock"
      },
      {
        id: 104,
        name: "Lijadora Orbital 300W",
        price: 34990,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?q=80&w=400&auto=format&fit=crop",
        brand: "Genérico",
        stock_status: "instock"
      },
      {
        id: 105,
        name: "Set Herramientas Manuales",
        price: 59990,
        oldPrice: 79990,
        image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=400&auto=format&fit=crop",
        brand: "Stanford",
        stock_status: "instock"
      }
    ];
  }
};

export const getCheckoutUrl = (cartItems: any[]) => {
  // Genera un enlace para llenar el carrito de WooCommerce e ir al pago
  // Patrón: https://sitio.com/checkout/?add-to-cart=ID&quantity=QTY
  
  if (cartItems.length === 0) return '#';
  
  // Para múltiples artículos, WooCommerce generalmente requiere un plugin o múltiples llamadas de recuperación a 'add-to-cart'
  // Un método simple para un solo artículo o estructura de enlace permanente estándar:
  // https://tu-sitio.com/cart/?add-to-cart=12345&quantity=1
  
  // Idealmente, usa la API de Tienda de WC para crear una sesión.
  // Para esta integración simple, redirigimos al primer artículo o al pago principal
  return `${WC_CONFIG.url}/checkout`;
};