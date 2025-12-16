# Digipro - Ferretería Profesional
## Aplicación React integrada con WordPress

![Digipro](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

Digipro es una aplicación e-commerce moderna construida con React y Vite. Una plataforma completa para venta de herramientas y artículos de ferretería con soporte para autenticación, carrito de compras, y más.

## 🚀 Características Principales

- ✅ **Aplicación React Moderna** - Construida con Vite para máximo rendimiento
- ✅ **Carrito de Compras** - Sistema completo de compras con persistencia
- ✅ **Autenticación** - Login y registro de usuarios
- ✅ **Catálogo de Productos** - Navegación por categorías
- ✅ **Chat Widget** - Asistencia en tiempo real con Gemini AI
- ✅ **Integración WooCommerce** - Compatible con tiendas WordPress
- ✅ **Responsive Design** - Funciona en todos los dispositivos
- ✅ **Banners Dinámicos** - Promociones y ofertas destacadas

## 📋 Tabla de Contenidos

- [Instalación Local](#instalación-local)
- [Integración WordPress](#integración-wordpress)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración de APIs](#configuración-de-apis)
- [Deploy](#deploy)

---

## 🏃 Instalación Local

### Prerequisitos

- **Node.js** 16+ (descargar desde [nodejs.org](https://nodejs.org/))
- **npm** o **yarn**
- **Git**

### Pasos

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/cj4452-stack/digipro-wordpress.git
   cd digipro-wordpress
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   VITE_GEMINI_API_KEY=tu-api-key-aqui
   VITE_WOOCOMMERCE_URL=https://tu-tienda.com
   VITE_WOOCOMMERCE_KEY=tu-key
   VITE_WOOCOMMERCE_SECRET=tu-secret
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

   La app estará disponible en `http://localhost:5173`

5. **Construye para producción:**
   ```bash
   npm run build
   ```

---

## 🔗 Integración WordPress

### Opción 1: Integración vía iFrame (Recomendada - Rápida)

#### Paso 1: Compilar la aplicación

```bash
npm run build
```

Esto creará una carpeta `dist/` con los archivos compilados.

#### Paso 2: Alojar los archivos

Sube la carpeta `dist/` a tu servidor en una subcarpeta:
```
tu-dominio.com/digipro-app/
```

#### Paso 3: Crear página en WordPress

1. Ve a **Páginas > Agregar Nueva** en WordPress
2. Asigna un título (ej: "Tienda Digipro")
3. Abre el editor de código (esquina superior derecha)
4. Pega este código:

```html
<div style="width: 100%; height: 900px; border: none;">
  <iframe 
    src="https://tu-dominio.com/digipro-app/" 
    style="width: 100%; height: 100%; border: none;"
    title="Digipro Ferretería">
  </iframe>
</div>
```

5. Reemplaza `tu-dominio.com` con tu dominio real
6. Publica la página

#### Ventajas de esta opción:
- ✅ Rápida implementación
- ✅ Mantiene toda la funcionalidad
- ✅ Actualización independiente
- ✅ No requiere modificar WordPress

---

### Opción 2: Plugin WordPress Personalizado (Profesional)

Si deseas una integración más profunda en WordPress:

#### Paso 1: Crear el plugin

Crea una carpeta `digipro-plugin` en `/wp-content/plugins/`

#### Paso 2: Archivo principal del plugin

Crea `digipro-plugin/digipro.php`:

```php
<?php
/*
Plugin Name: Digipro Ferretería
Plugin URI: https://digipro.local
Description: Aplicación de tienda integrada con React
Version: 1.0.0
Author: Tu Nombre
Author URI: https://tu-sitio.com
Text Domain: digipro
*/

// Evitar acceso directo
if (!defined('ABSPATH')) {
    exit;
}

// Registrar shortcode
add_shortcode('digipro_store', 'digipro_store_shortcode');

function digipro_store_shortcode($atts) {
    $store_url = 'https://tu-dominio.com/digipro-app/';
    
    $html = '<div style="width: 100%; height: 900px; border: none;">';
    $html .= '<iframe ';
    $html .= 'src="' . esc_url($store_url) . '" ';
    $html .= 'style="width: 100%; height: 100%; border: none;" ';
    $html .= 'title="Digipro Ferretería">';
    $html .= '</iframe>';
    $html .= '</div>';
    
    return $html;
}

// Cargar estilos
add_action('wp_enqueue_scripts', 'digipro_enqueue_styles');
function digipro_enqueue_styles() {
    wp_enqueue_style('digipro-style', plugins_url('css/digipro.css', __FILE__));
}
?>
```

#### Paso 3: Usar el shortcode

En cualquier página o post, agrega:
```
[digipro_store]
```

#### Paso 4: Activar el plugin

Ve a Plugins en WordPress y activa "Digipro Ferretería"

---

## 🏗️ Estructura del Proyecto

```
digipro-wordpress/
├── components/              # Componentes React
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── CategoryGrid.tsx
│   ├── FeaturedProducts.tsx
│   ├── ChatWidget.tsx
│   └── ...
├── pages/                   # Páginas principales
│   ├── CartPage.tsx
│   ├── LoginPage.tsx
│   ├── OffersPage.tsx
│   └── ...
├── services/                # Servicios/APIs
│   ├── geminiService.ts
│   ├── woocommerceService.ts
│   └── ...
├── App.tsx                  # Componente raíz
├── index.tsx                # Entrada de la app
├── vite.config.ts           # Configuración Vite
├── tsconfig.json            # Configuración TypeScript
└── package.json             # Dependencias
```

---

## 🔐 Configuración de APIs

### Gemini API (Chat IA)

1. Ve a [Google AI Studio](https://ai.studio)
2. Obtén tu API Key
3. Agrega a `.env.local`:
   ```env
   VITE_GEMINI_API_KEY=tu-api-key
   ```

### WooCommerce Integration

1. En tu tienda WordPress con WooCommerce:
   - Ve a **WooCommerce > Ajustes > API REST**
   - Crea una nueva clave API con acceso de lectura/escritura

2. Agrega a `.env.local`:
   ```env
   VITE_WOOCOMMERCE_URL=https://tu-tienda.com
   VITE_WOOCOMMERCE_KEY=tu-consumer-key
   VITE_WOOCOMMERCE_SECRET=tu-consumer-secret
   ```

---

## 📦 Deploy

### Desplegar en Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Vercel detectará automáticamente que es un proyecto Vite
3. Agrega las variables de entorno en Vercel
4. Deploy automático en cada push a `main`

### Desplegar en Netlify

1. Conecta tu repositorio a [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Agrega variables de entorno

### Desplegar en tu Servidor

1. Compila localmente: `npm run build`
2. Sube la carpeta `dist/` a tu hosting
3. Configura el servidor para servir `index.html` en todas las rutas

---

## 🔗 Enlaces Útiles

- [Ver app en AI Studio](https://ai.studio/apps/drive/1E3akaxkvI2NKl5QWz3uViGSNd5Jp9Xt-)
- [Documentación Vite](https://vitejs.dev)
- [Documentación React](https://react.dev)
- [Documentación TypeScript](https://www.typescriptlang.org)
- [Gemini API](https://ai.google.dev)
- [WooCommerce REST API](https://woocommerce.com/document/woocommerce-rest-api/)

---

## 💡 Tips para Optimización

### SEO en WordPress
- Usa un plugin como Yoast SEO o Rank Math
- Agrega meta descriptions en la página de Digipro
- Optimiza la altura del iFrame según el contenido

### Performance
- Habilita caché en WordPress
- Comprime imágenes
- Usa CDN para archivos estáticos
- Activa GZIP en el servidor

### Seguridad
- Usa HTTPS en ambos dominios
- Valida datos en el servidor
- Protege tus API keys
- Actualiza dependencias regularmente

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 📞 Soporte

¿Preguntas o problemas? 

- 📧 Email: soporte@digipro.com
- 💬 Issues: [GitHub Issues](https://github.com/cj4452-stack/digipro-wordpress/issues)
- 🌐 Sitio: https://digipro.local

---

**Hecho con ❤️ para e-commerce en Chile y Latinoamérica**
