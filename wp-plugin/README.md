# Digipro WooCommerce Sync Plugin

Plugin de WordPress que sincroniza automáticamente tu aplicación Digipro React con WooCommerce.

## ✨ Características

- ✅ Sincronización automática de productos
- ✅ Sincronización bidireccional de pedidos
- ✅ Actualización de inventario en tiempo real
- ✅ Webhooks para eventos de WooCommerce
- ✅ Endpoints REST para integración
- ✅ Panel de control en WordPress

## 📦 Instalación

1. Descarga la carpeta `wp-plugin/` completa
2. Sube a: `/wp-content/plugins/digipro-woocommerce-sync/`
3. Activa el plugin en WordPress
4. Ve a: Panel > Digipro Sync
5. Configura la URL de tu Digipro App

## ⚙️ Configuración

### Paso 1: Agregar URL de Digipro

En el panel de WordPress:
1. Ve a **Digipro Sync**
2. Ingresa la URL de tu app Digipro
3. Haz clic en Guardar cambios

Ejemplo:
```
https://digipro-app.vercel.app
```

### Paso 2: Configurar WooCommerce API

1. Ve a **WooCommerce > Configuración > Avanzado > API REST**
2. Crea una nueva clave API
3. Asigna permisos de lectura/escritura
4. Copia las credenciales

## 🔄 Cómo Funciona

### Sincronización de Productos

Cuando creas o actualizas un producto en WooCommerce:
1. El plugin detecta el cambio
2. Envía los datos a Digipro App
3. Digipro actualiza su catálogo automáticamente

### Sincronización de Pedidos

Cuando compran desde Digipro:
1. El pedido se envía a WooCommerce
2. Se crea como pedido pendiente
3. El cliente recibe confirmación

### Actualización de Inventario

Cuando el stock cambia:
1. Se sincroniza a Digipro
2. Los precios se actualizan
3. La disponibilidad se refleja

## 🔌 Endpoints REST

### GET /digipro/v1/get-products
Obtiene todos los productos

```bash
curl https://tu-sitio.com/wp-json/digipro/v1/get-products
```

Respuesta:
```json
[
  {
    "id": 1,
    "name": "Taladro Pro",
    "price": "99.99",
    "stock": 50,
    "image": "url-imagen"
  }
]
```

### POST /digipro/v1/sync-inventory
Actualiza el inventario

```bash
curl -X POST https://tu-sitio.com/wp-json/digipro/v1/sync-inventory \
  -H "Content-Type: application/json" \
  -d '{"product_id": 1, "stock": 45}'
```

## 🛠️ Troubleshooting

### Los productos no se sincronizan

1. Verifica que la URL de Digipro sea correcta
2. Asegúrate de que Digipro esté en HTTPS
3. Revisa los logs de WordPress

### Error de API

1. Verifica que WooCommerce REST API esté habilitada
2. Comprueba los permisos de la clave API
3. Revisa que los datos se envíen en JSON

## 📝 Registro de cambios

### v1.0.0
- Sincronización de productos
- Sincronización de pedidos
- Endpoints REST
- Panel de administrador

## 📞 Soporte

Para problemas o preguntas:
- 🐛 Abre un Issue en GitHub
- 📧 Contacta al equipo de desarrollo
- 💬 Revisa la documentación principal

## 📄 Licencia

MIT - Siéntete libre de usar y modificar

---

**¡Listo para producción!** ✨
