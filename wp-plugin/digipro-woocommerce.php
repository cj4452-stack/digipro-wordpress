<?php
/**
 * Plugin Name: Digipro WooCommerce Sync
 * Plugin URI: https://github.com/cj4452-stack/digipro-wordpress
 * Description: Sincroniza Digipro React App con WooCommerce
 * Version: 1.0.0
 * Author: Digipro Team
 * Author URI: https://digipro.local
 * Text Domain: digipro-sync
 * Domain Path: /languages
 * License: MIT
 */

if (!defined('ABSPATH')) exit;

// Definir constantes
define('DIGIPRO_VERSION', '1.0.0');
define('DIGIPRO_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('DIGIPRO_PLUGIN_URL', plugin_dir_url(__FILE__));

class Digipro_WooCommerce_Sync {
    
    private static $instance = null;
    
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    public function __construct() {
        // Hooks para sincronizar productos
        add_action('woocommerce_new_product', array($this, 'sync_product_to_digipro'));
        add_action('woocommerce_update_product', array($this, 'sync_product_to_digipro'));
        add_action('woocommerce_delete_product', array($this, 'delete_product_from_digipro'));
        
        // Hooks para sincronizar pedidos
        add_action('woocommerce_checkout_process', array($this, 'sync_order_from_digipro'));
        add_action('woocommerce_order_status_changed', array($this, 'sync_order_status'));
        
        // Registrar endpoints REST
        add_action('rest_api_init', array($this, 'register_rest_endpoints'));
        
        // Menú de administrador
        add_action('admin_menu', array($this, 'add_admin_menu'));
        
        // Cargar estilos y scripts
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_scripts'));
    }
    
    /**
     * Sincronizar producto a Digipro
     */
    public function sync_product_to_digipro($product_id) {
        if (wp_is_post_revision($product_id)) return;
        
        $product = wc_get_product($product_id);
        if (!$product) return;
        
        $digipro_url = get_option('digipro_app_url', 'https://digipro-app.vercel.app');
        
        $product_data = array(
            'id' => $product->get_id(),
            'name' => $product->get_name(),
            'description' => $product->get_description(),
            'price' => $product->get_price(),
            'stock' => $product->get_stock_quantity(),
            'image' => wp_get_attachment_url($product->get_image_id()),
            'categories' => wp_get_post_terms($product_id, 'product_cat', array('fields' => 'names')),
        );
        
        // Enviar datos a Digipro API
        wp_remote_post($digipro_url . '/api/products/sync', array(
            'method' => 'POST',
            'headers' => array('Content-Type' => 'application/json'),
            'body' => json_encode($product_data),
            'timeout' => 15,
        ));
    }
    
    /**
     * Eliminar producto de Digipro
     */
    public function delete_product_from_digipro($product_id) {
        $digipro_url = get_option('digipro_app_url', 'https://digipro-app.vercel.app');
        
        wp_remote_request($digipro_url . '/api/products/' . $product_id, array(
            'method' => 'DELETE',
            'timeout' => 15,
        ));
    }
    
    /**
     * Sincronizar pedidos desde Digipro
     */
    public function sync_order_from_digipro() {
        if (!isset($_POST['digipro_order'])) return;
        
        $order_data = json_decode(stripslashes($_POST['digipro_order']), true);
        
        $post = array(
            'post_type' => 'shop_order',
            'post_status' => 'wc-pending',
            'post_author' => get_current_user_id(),
        );
        
        $post_id = wp_insert_post($post);
        
        // Agregar items del pedido
        if (isset($order_data['items'])) {
            foreach ($order_data['items'] as $item) {
                $item_id = wc_add_order_item($post_id, array(
                    'order_item_name' => $item['name'],
                    'order_item_type' => 'line_item',
                ));
                
                wc_add_order_item_meta($item_id, '_product_id', $item['product_id']);
                wc_add_order_item_meta($item_id, '_qty', $item['quantity']);
                wc_add_order_item_meta($item_id, '_line_total', $item['price'] * $item['quantity']);
            }
        }
    }
    
    /**
     * Sincronizar estado de pedidos
     */
    public function sync_order_status($order_id, $old_status, $new_status) {
        $digipro_url = get_option('digipro_app_url', 'https://digipro-app.vercel.app');
        
        wp_remote_post($digipro_url . '/api/orders/status-update', array(
            'method' => 'POST',
            'headers' => array('Content-Type' => 'application/json'),
            'body' => json_encode(array(
                'order_id' => $order_id,
                'status' => $new_status,
            )),
            'timeout' => 15,
        ));
    }
    
    /**
     * Registrar endpoints REST
     */
    public function register_rest_endpoints() {
        register_rest_route('digipro/v1', '/sync-inventory', array(
            'methods' => 'POST',
            'callback' => array($this, 'rest_sync_inventory'),
            'permission_callback' => '__return_true',
        ));
        
        register_rest_route('digipro/v1', '/get-products', array(
            'methods' => 'GET',
            'callback' => array($this, 'rest_get_products'),
            'permission_callback' => '__return_true',
        ));
    }
    
    /**
     * Endpoint REST para sincronizar inventario
     */
    public function rest_sync_inventory($request) {
        $data = $request->get_json_params();
        
        if (isset($data['product_id']) && isset($data['stock'])) {
            $product = wc_get_product($data['product_id']);
            if ($product) {
                $product->set_stock_quantity($data['stock']);
                $product->save();
                return array('success' => true, 'message' => 'Stock actualizado');
            }
        }
        
        return array('success' => false, 'message' => 'Error al actualizar stock');
    }
    
    /**
     * Endpoint REST para obtener productos
     */
    public function rest_get_products() {
        $products = wc_get_products(array('limit' => -1));
        $data = array();
        
        foreach ($products as $product) {
            $data[] = array(
                'id' => $product->get_id(),
                'name' => $product->get_name(),
                'price' => $product->get_price(),
                'stock' => $product->get_stock_quantity(),
                'image' => wp_get_attachment_url($product->get_image_id()),
            );
        }
        
        return $data;
    }
    
    /**
     * Añadir menú de administrador
     */
    public function add_admin_menu() {
        add_menu_page(
            'Digipro Sync',
            'Digipro Sync',
            'manage_options',
            'digipro-sync',
            array($this, 'admin_page'),
            'dashicons-sync'
        );
    }
    
    /**
     * Página de administrador
     */
    public function admin_page() {
        ?>
        <div class="wrap">
            <h1>Digipro WooCommerce Sync</h1>
            <form method="post" action="options.php">
                <?php settings_fields('digipro_settings'); ?>
                <?php do_settings_sections('digipro_settings'); ?>
                <table class="form-table">
                    <tr>
                        <th>URL de Digipro App</th>
                        <td><input type="url" name="digipro_app_url" value="<?php echo get_option('digipro_app_url'); ?>" size="50" /></td>
                    </tr>
                    <tr>
                        <th>Sincronizar ahora</th>
                        <td><button type="button" class="button button-primary" id="sync-btn">Sincronizar Productos</button></td>
                    </tr>
                </table>
                <?php submit_button(); ?>
            </form>
        </div>
        <?php
    }
    
    /**
     * Cargar scripts de administrador
     */
    public function enqueue_admin_scripts() {
        wp_register_script('digipro-admin', DIGIPRO_PLUGIN_URL . 'js/admin.js');
        wp_enqueue_script('digipro-admin');
    }
}

// Inicializar el plugin
if (class_exists('WooCommerce')) {
    Digipro_WooCommerce_Sync::getInstance();
}

// Registrar configuración
register_setting('digipro_settings', 'digipro_app_url');
?>
