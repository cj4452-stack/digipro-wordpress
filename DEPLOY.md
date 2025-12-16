# Guía de Deploy - Digipro en WordPress

## 🚀 Deploy Rápido en Vercel (RECOMENDADO)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Vercel detectará automáticamente el proyecto Vite
3. En Settings > Environment Variables, agrega:
   - `VITE_GEMINI_API_KEY` = Tu API key de Gemini
   - `VITE_WOOCOMMERCE_URL` = URL de tu tienda
   - `VITE_WOOCOMMERCE_KEY` = WooCommerce key
   - `VITE_WOOCOMMERCE_SECRET` = WooCommerce secret
4. Deploy automático en cada push a `main`

## 📦 Deploy en tu Servidor

```bash
# 1. Clone el repositorio
git clone https://github.com/cj4452-stack/digipro-wordpress.git
cd digipro-wordpress

# 2. Instala dependencias
npm install

# 3. Configura variables de entorno
cp .env.example .env.local
# Edita .env.local con tus valores

# 4. Compila
npm run build

# 5. Sube la carpeta /dist/ a tu servidor
# Ej: /public_html/digipro-app/
```

## 🔌 Integración en WordPress

En tu página de WordPress, agrega:

```html
<div style="width: 100%; height: 900px; border: none;">
  <iframe 
    src="https://tu-dominio.com/digipro-app/" 
    style="width: 100%; height: 100%; border: none;">
  </iframe>
</div>
```

## ✅ Verificación

- [ ] Carpeta /dist/ existe
- [ ] App carga en navegador
- [ ] Carrito de compras funciona
- [ ] Chat IA responde
- [ ] APIs están configuradas

## 🆘 Troubleshooting

**Error: VITE_GEMINI_API_KEY is undefined**
- Revisa que las variables de entorno están configuradas
- En Vercel: Settings > Environment Variables
- En servidor local: `.env.local` debe tener los valores

**El iFrame no carga en WordPress**
- Verifica que la URL sea HTTPS
- Configura CORS en tu servidor si es necesario
- Comprueba los headers del servidor

## 📞 Soporte

Para problemas:
1. Revisa el [README.md](README.md)
2. Abre un [GitHub Issue](../../issues)
3. Contacta al equipo de desarrollo
