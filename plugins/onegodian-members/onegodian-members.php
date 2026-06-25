<?php
/**
 * Plugin Name: OneGodian Members
 * Plugin URI: https://onegodian.com
 * Description: OneGodian membership system with WooCommerce product mapping, member dashboards, referral capture, affiliate shortcodes, and production-ready membership pages.
 * Version: 1.7.1
 * Author: ONEGODIAN, LLC
 * Author URI: https://onegodian.com
 * Text Domain: onegodian-members
 * Requires at least: 6.0
 * Requires PHP: 7.4
 */

if (!defined('ABSPATH')) {
    exit;
}

define('OGM_VERSION', '1.7.1');
define('OGM_PLUGIN_FILE', __FILE__);
define('OGM_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('OGM_PLUGIN_URL', plugin_dir_url(__FILE__));

final class OneGodian_Members {
    private static $instance = null;

    public static function instance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        add_action('init', array($this, 'register_shortcodes'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
        add_action('admin_menu', array($this, 'admin_menu'));
        add_action('admin_init', array($this, 'register_settings'));
        add_action('template_redirect', array($this, 'capture_referral_code'));
        add_action('woocommerce_checkout_create_order', array($this, 'attach_referral_to_order'), 10, 2);
        add_action('woocommerce_order_status_completed', array($this, 'record_completed_referral'));
    }

    public static function activate() {
        update_option('ogm_version', OGM_VERSION);
        if (!get_option('ogm_product_mapping')) {
            update_option('ogm_product_mapping', self::default_product_mapping());
        }
        self::create_default_pages();
    }

    public static function default_product_mapping() {
        return array(
            'spiritual' => array('label' => 'Spiritual Membership', 'product_id' => 0, 'slug' => 'spiritual-membership', 'description' => 'Learn through OneGodian identity, belief, and educational resources.'),
            'tribal' => array('label' => 'Tribal Membership', 'product_id' => 0, 'slug' => 'tribal-membership', 'description' => 'Access community participation pathways, records, and member resources.'),
            'business' => array('label' => 'Business Membership', 'product_id' => 0, 'slug' => 'business-membership', 'description' => 'Use OneGodian business resources, digital tools, and commercial support pathways.'),
            'family' => array('label' => 'Family Membership', 'product_id' => 0, 'slug' => 'family-membership', 'description' => 'Provide household access to OneGodian learning and membership benefits.'),
            'founder_circle' => array('label' => 'Founder Circle', 'product_id' => 0, 'slug' => 'founder-circle', 'description' => 'Premium supporter pathway for founding-level participation and recognition resources.')
        );
    }

    public static function create_default_pages() {
        $pages = array(
            'membership' => array('title' => 'Membership', 'content' => '[onegodian_membership_products]'),
            'member-dashboard' => array('title' => 'Member Dashboard', 'content' => '[onegodian_member_dashboard]'),
            'affiliate-dashboard' => array('title' => 'Affiliate Dashboard', 'content' => '[onegodian_affiliate_dashboard]'),
            'certificates' => array('title' => 'Certificates', 'content' => '[onegodian_member_certificates]')
        );
        foreach ($pages as $slug => $page) {
            if (!get_page_by_path($slug)) {
                wp_insert_post(array('post_title' => $page['title'], 'post_name' => $slug, 'post_content' => $page['content'], 'post_status' => 'publish', 'post_type' => 'page'));
            }
        }
    }

    public function register_shortcodes() {
        add_shortcode('onegodian_membership_products', array($this, 'shortcode_membership_products'));
        add_shortcode('onegodian_membership_checkout', array($this, 'shortcode_membership_checkout'));
        add_shortcode('onegodian_member_dashboard', array($this, 'shortcode_member_dashboard'));
        add_shortcode('onegodian_member_certificates', array($this, 'shortcode_member_certificates'));
        add_shortcode('onegodian_affiliate_link', array($this, 'shortcode_affiliate_link'));
        add_shortcode('onegodian_affiliate_dashboard', array($this, 'shortcode_affiliate_dashboard'));
        add_shortcode('onegodian_referral_capture', array($this, 'shortcode_referral_capture'));
    }

    public function enqueue_assets() {
        wp_register_style('ogm-members', false, array(), OGM_VERSION);
        wp_enqueue_style('ogm-members');
        wp_add_inline_style('ogm-members', '.ogm-wrap,.ogm-wrap *{box-sizing:border-box}.ogm-wrap{font-family:Inter,Arial,sans-serif;color:#f5f1e8}.ogm-panel{background:linear-gradient(180deg,#070607 0%,#17121f 52%,#070607 100%);border:1px solid rgba(216,179,90,.24);border-radius:24px;padding:28px;margin:18px 0}.ogm-badge{display:inline-block;padding:9px 15px;border:1px solid rgba(216,179,90,.34);border-radius:999px;background:rgba(216,179,90,.10);color:#f0d98a;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.ogm-title{color:#f5f1e8;font-size:36px;line-height:1.15;font-weight:900;margin:14px 0 10px}.ogm-subtitle{color:rgba(245,241,232,.86);font-size:17px;line-height:1.7}.ogm-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:22px}.ogm-card{background:rgba(255,255,255,.045);border:1px solid rgba(216,179,90,.22);border-radius:20px;padding:22px}.ogm-card h3{color:#f5f1e8;margin:0 0 8px;font-size:20px}.ogm-card p{color:rgba(245,241,232,.82);font-size:14px;line-height:1.7}.ogm-btn{display:inline-flex;border-radius:999px;padding:11px 16px;text-decoration:none;font-weight:850;border:1px solid rgba(216,179,90,.34);background:rgba(216,179,90,.16);color:#f0d98a}.ogm-muted{color:rgba(245,241,232,.72);font-size:13px}.ogm-table{width:100%;border-collapse:collapse;margin-top:16px}.ogm-table th,.ogm-table td{padding:12px;border-bottom:1px solid rgba(216,179,90,.16);text-align:left;color:#f5f1e8}.ogm-copy{font-family:monospace;background:rgba(0,0,0,.28);border:1px solid rgba(216,179,90,.22);border-radius:12px;padding:10px;color:#f0d98a;word-break:break-all}@media(max-width:900px){.ogm-grid{grid-template-columns:1fr}.ogm-title{font-size:28px}.ogm-panel{padding:20px;border-radius:18px}}');
    }

    public function admin_menu() {
        add_menu_page('OneGodian Members', 'OneGodian Members', 'manage_options', 'onegodian-members', array($this, 'admin_dashboard'), 'dashicons-groups', 57);
        add_submenu_page('onegodian-members', 'WooCommerce Mapping', 'WooCommerce Mapping', 'manage_options', 'onegodian-members-woocommerce', array($this, 'admin_woocommerce_mapping'));
        add_submenu_page('onegodian-members', 'Affiliate Settings', 'Affiliate Settings', 'manage_options', 'onegodian-members-affiliates', array($this, 'admin_affiliates'));
    }

    public function register_settings() {
        register_setting('ogm_settings', 'ogm_product_mapping', array($this, 'sanitize_product_mapping'));
        register_setting('ogm_settings', 'ogm_affiliate_base_url', 'esc_url_raw');
        register_setting('ogm_settings', 'ogm_referral_cookie_days', 'absint');
    }

    public function sanitize_product_mapping($value) {
        $defaults = self::default_product_mapping();
        $clean = array();
        foreach ($defaults as $key => $row) {
            $clean[$key] = array('label' => sanitize_text_field($value[$key]['label'] ?? $row['label']), 'product_id' => absint($value[$key]['product_id'] ?? 0), 'slug' => sanitize_title($value[$key]['slug'] ?? $row['slug']), 'description' => sanitize_textarea_field($value[$key]['description'] ?? $row['description']));
        }
        return $clean;
    }

    public function admin_dashboard() {
        echo '<div class="wrap"><h1>OneGodian Members</h1><p><strong>Version:</strong> ' . esc_html(OGM_VERSION) . '</p><p>Production membership layer with WooCommerce product mapping, member dashboard shortcodes, referral capture, and affiliate tools.</p><h2>Shortcodes</h2><ul style="line-height:1.9">';
        foreach ($this->shortcode_list() as $sc) { echo '<li><code>' . esc_html($sc) . '</code></li>'; }
        echo '</ul></div>';
    }

    public function admin_woocommerce_mapping() {
        $mapping = get_option('ogm_product_mapping', self::default_product_mapping());
        echo '<div class="wrap"><h1>WooCommerce Product Mapping</h1><form method="post" action="options.php">';
        settings_fields('ogm_settings');
        echo '<table class="widefat striped"><thead><tr><th>Key</th><th>Label</th><th>WooCommerce Product ID</th><th>Slug</th><th>Description</th></tr></thead><tbody>';
        foreach ($mapping as $key => $row) {
            echo '<tr><td><code>' . esc_html($key) . '</code></td><td><input type="text" name="ogm_product_mapping[' . esc_attr($key) . '][label]" value="' . esc_attr($row['label']) . '" class="regular-text"></td><td><input type="number" name="ogm_product_mapping[' . esc_attr($key) . '][product_id]" value="' . esc_attr($row['product_id']) . '" min="0"></td><td><input type="text" name="ogm_product_mapping[' . esc_attr($key) . '][slug]" value="' . esc_attr($row['slug']) . '"></td><td><textarea name="ogm_product_mapping[' . esc_attr($key) . '][description]" rows="2" class="large-text">' . esc_textarea($row['description']) . '</textarea></td></tr>';
        }
        echo '</tbody></table>';
        submit_button('Save Mapping');
        echo '</form></div>';
    }

    public function admin_affiliates() {
        echo '<div class="wrap"><h1>Affiliate Settings</h1><form method="post" action="options.php">';
        settings_fields('ogm_settings');
        echo '<table class="form-table"><tr><th scope="row">Affiliate Base URL</th><td><input type="url" name="ogm_affiliate_base_url" value="' . esc_attr(get_option('ogm_affiliate_base_url', home_url('/membership/'))) . '" class="regular-text"></td></tr><tr><th scope="row">Referral Cookie Days</th><td><input type="number" name="ogm_referral_cookie_days" value="' . esc_attr(get_option('ogm_referral_cookie_days', 30)) . '" min="1" max="365"></td></tr></table>';
        submit_button('Save Affiliate Settings');
        echo '</form></div>';
    }

    private function shortcode_list() {
        return array('[onegodian_membership_products]', '[onegodian_membership_checkout key="spiritual"]', '[onegodian_member_dashboard]', '[onegodian_member_certificates]', '[onegodian_affiliate_link]', '[onegodian_affiliate_dashboard]', '[onegodian_referral_capture]');
    }

    public function capture_referral_code() {
        if (is_admin()) { return; }
        $ref = isset($_GET['ogm_ref']) ? sanitize_text_field(wp_unslash($_GET['ogm_ref'])) : (isset($_GET['ref']) ? sanitize_text_field(wp_unslash($_GET['ref'])) : '');
        if ($ref !== '') {
            $days = absint(get_option('ogm_referral_cookie_days', 30));
            if ($days < 1) { $days = 30; }
            setcookie('ogm_ref', $ref, time() + ($days * DAY_IN_SECONDS), COOKIEPATH ? COOKIEPATH : '/', COOKIE_DOMAIN, is_ssl(), true);
            $_COOKIE['ogm_ref'] = $ref;
        }
    }

    public function attach_referral_to_order($order, $data) {
        if (!is_object($order)) { return; }
        $ref = isset($_COOKIE['ogm_ref']) ? sanitize_text_field(wp_unslash($_COOKIE['ogm_ref'])) : '';
        if ($ref !== '') { $order->update_meta_data('_ogm_referral_code', $ref); }
    }

    public function record_completed_referral($order_id) {
        $order = function_exists('wc_get_order') ? wc_get_order($order_id) : null;
        if (!$order) { return; }
        $ref = $order->get_meta('_ogm_referral_code');
        if (!$ref) { return; }
        $records = get_option('ogm_referral_records', array());
        $records[] = array('order_id' => absint($order_id), 'ref' => sanitize_text_field($ref), 'total' => method_exists($order, 'get_total') ? $order->get_total() : '', 'date' => current_time('mysql'));
        update_option('ogm_referral_records', array_slice($records, -500));
    }

    public function shortcode_membership_products($atts = array()) {
        $mapping = get_option('ogm_product_mapping', self::default_product_mapping());
        ob_start();
        echo '<div class="ogm-wrap ogm-panel"><span class="ogm-badge">OneGodian Membership - WooCommerce Sync</span><h2 class="ogm-title">Choose Your OneGodian Membership</h2><p class="ogm-subtitle">Select the membership pathway that matches your participation level. Product buttons connect to WooCommerce when product IDs are mapped in the admin panel.</p><div class="ogm-grid">';
        foreach ($mapping as $key => $row) {
            echo '<div class="ogm-card"><h3>' . esc_html($row['label']) . '</h3><p>' . esc_html($row['description']) . '</p><a class="ogm-btn" href="' . esc_url($this->product_checkout_url($row)) . '">Select Membership</a><p class="ogm-muted">Key: ' . esc_html($key) . '</p></div>';
        }
        echo '</div></div>';
        return ob_get_clean();
    }

    public function shortcode_membership_checkout($atts = array()) {
        $atts = shortcode_atts(array('key' => 'spiritual'), $atts, 'onegodian_membership_checkout');
        $mapping = get_option('ogm_product_mapping', self::default_product_mapping());
        $key = sanitize_key($atts['key']);
        if (!isset($mapping[$key])) { return '<div class="ogm-wrap ogm-panel"><p>Membership option not found.</p></div>'; }
        return '<div class="ogm-wrap ogm-panel"><a class="ogm-btn" href="' . esc_url($this->product_checkout_url($mapping[$key])) . '">Continue to ' . esc_html($mapping[$key]['label']) . '</a></div>';
    }

    private function product_checkout_url($row) {
        $product_id = absint($row['product_id'] ?? 0);
        if ($product_id > 0 && function_exists('wc_get_cart_url')) { return add_query_arg('add-to-cart', $product_id, wc_get_cart_url()); }
        return home_url('/product/' . sanitize_title($row['slug'] ?? 'membership') . '/');
    }

    public function shortcode_member_dashboard() {
        $user = wp_get_current_user();
        ob_start();
        echo '<div class="ogm-wrap ogm-panel"><span class="ogm-badge">Member Dashboard</span><h2 class="ogm-title">OneGodian Member Dashboard</h2>';
        if (is_user_logged_in()) { echo '<p class="ogm-subtitle">Welcome, ' . esc_html($user->display_name) . '. Use this dashboard to access membership resources, certificates, account tools, and participation records.</p>'; }
        else { echo '<p class="ogm-subtitle">Please sign in to access your membership dashboard, resources, and records.</p><a class="ogm-btn" href="' . esc_url(wp_login_url(get_permalink())) . '">Sign In</a>'; }
        echo '<div class="ogm-grid"><div class="ogm-card"><h3>Membership</h3><p>Review membership status and available resources.</p></div><div class="ogm-card"><h3>Certificates</h3><p>Access certificate references and verification tools when enabled.</p></div><div class="ogm-card"><h3>Account</h3><p>Manage account details through the site account area.</p></div></div></div>';
        return ob_get_clean();
    }

    public function shortcode_member_certificates() {
        return '<div class="ogm-wrap ogm-panel"><span class="ogm-badge">Certificates</span><h2 class="ogm-title">OneGodian Certificates</h2><p class="ogm-subtitle">Certificate records, credential references, and verification resources can be displayed here as the registry expands.</p></div>';
    }

    public function shortcode_affiliate_link($atts = array()) {
        $atts = shortcode_atts(array('code' => ''), $atts, 'onegodian_affiliate_link');
        $code = sanitize_title($atts['code']);
        if ($code === '' && is_user_logged_in()) { $code = sanitize_title(wp_get_current_user()->user_login); }
        if ($code === '') { $code = 'member'; }
        $url = add_query_arg('ogm_ref', $code, get_option('ogm_affiliate_base_url', home_url('/membership/')));
        return '<div class="ogm-wrap ogm-panel"><span class="ogm-badge">Affiliate Link</span><h2 class="ogm-title">Your OneGodian Referral Link</h2><div class="ogm-copy">' . esc_html($url) . '</div></div>';
    }

    public function shortcode_affiliate_dashboard() {
        $records = get_option('ogm_referral_records', array());
        $current_code = is_user_logged_in() ? sanitize_title(wp_get_current_user()->user_login) : '';
        ob_start();
        echo '<div class="ogm-wrap ogm-panel"><span class="ogm-badge">Affiliate Dashboard</span><h2 class="ogm-title">OneGodian Affiliate Dashboard</h2>';
        echo do_shortcode('[onegodian_affiliate_link]');
        echo '<table class="ogm-table"><thead><tr><th>Date</th><th>Order</th><th>Referral</th><th>Total</th></tr></thead><tbody>';
        $shown = 0;
        foreach (array_reverse($records) as $row) {
            if ($current_code && isset($row['ref']) && $row['ref'] !== $current_code) { continue; }
            echo '<tr><td>' . esc_html($row['date'] ?? '') . '</td><td>#' . esc_html($row['order_id'] ?? '') . '</td><td>' . esc_html($row['ref'] ?? '') . '</td><td>' . esc_html($row['total'] ?? '') . '</td></tr>';
            $shown++;
            if ($shown >= 25) { break; }
        }
        if ($shown === 0) { echo '<tr><td colspan="4">No referral records found yet.</td></tr>'; }
        echo '</tbody></table></div>';
        return ob_get_clean();
    }

    public function shortcode_referral_capture() {
        $ref = isset($_COOKIE['ogm_ref']) ? sanitize_text_field(wp_unslash($_COOKIE['ogm_ref'])) : '';
        if ($ref === '') { return '<div class="ogm-wrap ogm-panel"><p class="ogm-muted">No referral code is currently active.</p></div>'; }
        return '<div class="ogm-wrap ogm-panel"><span class="ogm-badge">Referral Active</span><p class="ogm-subtitle">Referral code: <strong>' . esc_html($ref) . '</strong></p></div>';
    }
}

register_activation_hook(__FILE__, array('OneGodian_Members', 'activate'));
OneGodian_Members::instance();
