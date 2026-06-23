<?php
/**
 * Plugin Name: OneGodian Global Navigation
 * Description: Persistent OneGodian global header, ONEGODIAN.COM commercial mega menu, ecosystem switcher, commercial district registry, and 4-column footer shortcodes.
 * Version: 1.0.0
 * Author: ONEGODIAN, LLC
 * Text Domain: onegodian-global-navigation
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!defined('OGN_VERSION')) {
    define('OGN_VERSION', '1.0.0');
}

final class OneGodian_Global_Navigation {
    private static $instance = null;

    public static function instance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        add_action('wp_enqueue_scripts', array($this, 'assets'));
        add_action('admin_menu', array($this, 'admin_menu'));
        add_shortcode('onegodian_global_header', array($this, 'shortcode_global_header'));
        add_shortcode('onegodian_commercial_mega_menu', array($this, 'shortcode_commercial_mega_menu'));
        add_shortcode('onegodian_footer_menu', array($this, 'shortcode_footer_menu'));
        add_shortcode('onegodian_commercial_districts', array($this, 'shortcode_commercial_districts'));
        add_shortcode('onegodian_ecosystem_switcher', array($this, 'shortcode_ecosystem_switcher'));
    }

    public function admin_menu() {
        add_menu_page(
            'OneGodian Navigation',
            'OneGodian Nav',
            'manage_options',
            'onegodian-global-navigation',
            array($this, 'admin_page'),
            'dashicons-menu-alt3',
            58
        );
    }

    public function admin_page() {
        $districts = $this->districts();
        echo '<div class="wrap"><h1>OneGodian Global Navigation</h1>';
        echo '<p><strong>Version:</strong> ' . esc_html(OGN_VERSION) . '</p>';
        echo '<p>This plugin provides the persistent global header, ecosystem switcher, ONEGODIAN.COM 7 × 6 commercial mega menu, commercial district registry, and 4-column footer.</p>';
        echo '<h2>Shortcodes</h2><ul style="line-height:1.9">';
        foreach (array('[onegodian_global_header]', '[onegodian_commercial_mega_menu]', '[onegodian_ecosystem_switcher]', '[onegodian_commercial_districts]', '[onegodian_footer_menu]') as $sc) {
            echo '<li><code>' . esc_html($sc) . '</code></li>';
        }
        echo '</ul><h2>Commercial Districts</h2><table class="widefat striped"><thead><tr><th>ODIN</th><th>District</th><th>Columns</th><th>Links</th></tr></thead><tbody>';
        foreach ($districts as $district) {
            $count = 0;
            foreach ($district['columns'] as $column) { $count += count($column['links']); }
            echo '<tr><td>' . esc_html($district['odin']) . '</td><td>' . esc_html($district['title']) . '</td><td>' . esc_html(count($district['columns'])) . '</td><td>' . esc_html($count) . '</td></tr>';
        }
        echo '</tbody></table></div>';
    }

    public function assets() {
        wp_register_style('onegodian-global-navigation', false, array(), OGN_VERSION);
        wp_enqueue_style('onegodian-global-navigation');
        wp_add_inline_style('onegodian-global-navigation', $this->css());

        wp_register_script('onegodian-global-navigation', false, array(), OGN_VERSION, true);
        wp_enqueue_script('onegodian-global-navigation');
        wp_add_inline_script('onegodian-global-navigation', $this->js());
    }

    private function css() {
        return '.ogn-wrap,.ogn-wrap *{box-sizing:border-box}.ogn-wrap{font-family:Inter,Arial,sans-serif;color:#f5f1e8}.ogn-header{position:sticky;top:0;z-index:9999;background:linear-gradient(180deg,#070607 0%,#15111f 100%);border-bottom:1px solid rgba(216,179,90,.22);box-shadow:0 18px 44px rgba(0,0,0,.28)}.ogn-top{display:flex;align-items:center;justify-content:space-between;gap:18px;max-width:1320px;margin:0 auto;padding:8px 18px;border-bottom:1px solid rgba(255,255,255,.07);font-size:12px;letter-spacing:.04em;text-transform:uppercase}.ogn-brand{font-weight:900;color:#f0d98a}.ogn-utility{display:flex;flex-wrap:wrap;gap:12px;align-items:center}.ogn-utility a,.ogn-link{color:rgba(245,241,232,.86);text-decoration:none}.ogn-utility a:hover,.ogn-link:hover{color:#f0d98a}.ogn-main{max-width:1320px;margin:0 auto;padding:12px 18px;display:flex;align-items:center;justify-content:space-between;gap:18px}.ogn-logo{font-size:20px;font-weight:950;letter-spacing:.08em;color:#f5f1e8;text-decoration:none}.ogn-menu{display:flex;align-items:center;gap:4px}.ogn-item{position:relative}.ogn-trigger{appearance:none;border:0;background:transparent;color:#f5f1e8;font-weight:800;font-size:13px;letter-spacing:.05em;text-transform:uppercase;padding:12px 10px;border-radius:999px;cursor:pointer}.ogn-trigger:hover,.ogn-item:focus-within .ogn-trigger{background:rgba(216,179,90,.10);color:#f0d98a}.ogn-mega{display:none;position:absolute;left:50%;transform:translateX(-50%);top:100%;width:min(1180px,calc(100vw - 28px));padding:22px;background:rgba(15,12,22,.98);border:1px solid rgba(216,179,90,.26);border-radius:22px;box-shadow:0 24px 70px rgba(0,0,0,.45)}.ogn-item:hover .ogn-mega,.ogn-item:focus-within .ogn-mega{display:block}.ogn-mega-head{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:18px}.ogn-odin{color:#f0d98a;font-size:12px;font-weight:900;letter-spacing:.08em}.ogn-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:14px}.ogn-col{padding:14px;border:1px solid rgba(216,179,90,.16);border-radius:16px;background:rgba(255,255,255,.04)}.ogn-col-title{font-size:13px;font-weight:900;color:#f0d98a;margin-bottom:10px;text-transform:uppercase;letter-spacing:.05em}.ogn-col a{display:block;color:rgba(245,241,232,.84);text-decoration:none;font-size:13px;line-height:1.4;padding:5px 0}.ogn-col a:hover{color:#f0d98a}.ogn-actions{display:flex;gap:10px;align-items:center}.ogn-btn{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;padding:10px 14px;font-size:13px;font-weight:850;text-decoration:none;border:1px solid rgba(216,179,90,.34);white-space:nowrap}.ogn-btn-primary{background:rgba(216,179,90,.18);color:#f0d98a}.ogn-btn-secondary{background:rgba(111,60,255,.14);color:#c7b6ff;border-color:rgba(111,60,255,.36)}.ogn-mobile-toggle{display:none;background:rgba(216,179,90,.12);border:1px solid rgba(216,179,90,.3);color:#f0d98a;border-radius:999px;padding:10px 14px;font-weight:900}.ogn-mobile{display:none;max-width:1320px;margin:0 auto;padding:0 18px 18px}.ogn-mobile.is-open{display:block}.ogn-mobile details{border:1px solid rgba(216,179,90,.18);border-radius:14px;margin:8px 0;background:rgba(255,255,255,.045);overflow:hidden}.ogn-mobile summary{cursor:pointer;padding:14px;font-weight:900;color:#f5f1e8}.ogn-mobile .ogn-mobile-group{padding:0 14px 14px}.ogn-mobile .ogn-col{margin:10px 0}.ogn-section{background:radial-gradient(circle at top left,rgba(111,60,255,.18),transparent 32%),radial-gradient(circle at bottom right,rgba(216,179,90,.14),transparent 34%),linear-gradient(180deg,#070607 0%,#17121f 100%);border:1px solid rgba(216,179,90,.22);border-radius:24px;padding:24px;margin:18px 0}.ogn-section h2{margin:0 0 12px;color:#f5f1e8;font-size:30px}.ogn-districts{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:12px}.ogn-district-card{padding:16px;border-radius:16px;background:rgba(255,255,255,.045);border:1px solid rgba(216,179,90,.2)}.ogn-district-card strong{display:block;color:#f0d98a;font-size:12px;margin-bottom:6px}.ogn-footer{background:#070607;border-top:1px solid rgba(216,179,90,.22);padding:34px 18px}.ogn-footer-grid{max-width:1320px;margin:0 auto;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.ogn-footer h3{color:#f0d98a;font-size:14px;text-transform:uppercase;letter-spacing:.06em}.ogn-footer a{display:block;color:rgba(245,241,232,.78);text-decoration:none;padding:5px 0;font-size:14px}.ogn-footer a:hover{color:#f0d98a}.ogn-switcher{position:relative;display:inline-block}.ogn-switcher-panel{display:none;position:absolute;right:0;top:calc(100% + 8px);min-width:260px;padding:12px;background:rgba(15,12,22,.98);border:1px solid rgba(216,179,90,.24);border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.42)}.ogn-switcher:hover .ogn-switcher-panel,.ogn-switcher:focus-within .ogn-switcher-panel{display:block}.ogn-switcher-panel a{display:block;padding:9px 10px;border-radius:12px;color:#f5f1e8;text-decoration:none}.ogn-switcher-panel a:hover{background:rgba(216,179,90,.1);color:#f0d98a}@media(max-width:1100px){.ogn-menu,.ogn-actions{display:none}.ogn-mobile-toggle{display:inline-flex}.ogn-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ogn-districts{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:640px){.ogn-top{align-items:flex-start;flex-direction:column}.ogn-main{padding:12px}.ogn-grid,.ogn-footer-grid,.ogn-districts{grid-template-columns:1fr}.ogn-logo{font-size:16px}.ogn-section{border-radius:18px;padding:18px}.ogn-section h2{font-size:24px}}';
    }

    private function js() {
        return "document.addEventListener('click',function(e){var btn=e.target.closest('[data-ogn-mobile-toggle]');if(!btn)return;var target=document.querySelector(btn.getAttribute('data-ogn-mobile-toggle'));if(target){target.classList.toggle('is-open');btn.setAttribute('aria-expanded',target.classList.contains('is-open')?'true':'false');}});";
    }

    private function link($label, $url = '#') {
        return array('label' => $label, 'url' => $url);
    }

    private function columns($pairs) {
        $out = array();
        foreach ($pairs as $title => $links) {
            $out[] = array('title' => $title, 'links' => array_map(function($label){ return $this->link($label, '#'); }, $links));
        }
        return $out;
    }

    public function districts() {
        return array(
            array('title'=>'SHOP','odin'=>'ODIN-C1000','url'=>'/shop','columns'=>$this->columns(array(
                'Main Store'=>array('Shop','All Products','Featured Products','Best Sellers','New Arrivals','Limited Releases'),
                'Apparel'=>array('Apparel','Men','Women','Youth','Accessories','Collections'),
                'Digital Products'=>array('Digital Downloads','Templates','Business Kits','Marketing Kits','Checklists','Bundles'),
                'Scrolls'=>array('Scroll Store','Wealth Scrolls','Legacy Scrolls','Business Scrolls','Spiritual Scrolls','Complete Collection'),
                'Certifications'=>array('Certifications','Credential Registry','Verification Center','Professional Programs','Leadership Certifications','Community Certifications'),
                'Buyer Support'=>array('Contact Sales','FAQ','Returns','Order Tracking','Gift Cards','Support')))),
            array('title'=>'MEMBERSHIP','odin'=>'ODIN-C2000','url'=>'/membership','columns'=>$this->columns(array(
                'Membership Hub'=>array('Membership','Join Now','Pricing','Benefits','Member Dashboard','Member Resources'),
                'Individual Plans'=>array('Basic','Premium','Lifetime','Founder Circle','Community Member','Supporter'),
                'Family Plans'=>array('Family Membership','Household Access','Youth Access','Family Benefits','Family Resources','Family Dashboard'),
                'Business Plans'=>array('Business Membership','Organization Membership','Team Access','Business Benefits','Business Resources','Business Dashboard'),
                'Identity'=>array('Digital ID','Member Certificate','Credential Verification','Identity Products','Registry Records','Benefits Portal'),
                'Support'=>array('Contact','FAQ','Renew Membership','Upgrade Membership','Billing','Support')))),
            array('title'=>'LEARN','odin'=>'ODIN-C3000','url'=>'/learn','columns'=>$this->columns(array(
                'University'=>array('University Home','Course Catalog','Certifications','Learning Paths','Student Dashboard','Instructor Center'),
                'OMOS™'=>array('OMOS Foundations','Alignment Score','Purpose Finder','Relationship Alignment','Identity Mapping','Advanced OMOS'),
                'OHI™'=>array('OHI Foundations','Hyper-Conscious Intelligence','Systems Thinking','Platform Strategy','Consciousness Frameworks','Advanced Studies'),
                'Workforce'=>array('Workforce Development','Leadership','Technology','Community Development','Economic Development','Entrepreneurship'),
                'Certifications'=>array('Companion Certification','Leadership Certification','Technology Certification','Translation Certification','Community Certification','Professional Certification'),
                'Student Services'=>array('Enroll','Support','Student Portal','Resources','Downloads','Contact')))),
            array('title'=>'BOOK STORE','odin'=>'ODIN-C4000','url'=>'/book-store','columns'=>$this->columns(array(
                'Book Store'=>array('Book Store','New Releases','Best Sellers','Featured Books','Bundles','Authors'),
                'Founder Collection'=>array('Founder Books','OneGodianology','OHI Publications','OMOS Publications','OneGodian Sciences','Collected Works'),
                'Categories'=>array('Business','Technology','Philosophy','Personal Development','Community Development','Economic Development'),
                'Formats'=>array('Paperback','Hardcover','eBooks','Audiobooks','Digital Collections','Special Editions'),
                'Series'=>array('Scroll Series','Educational Series','Leadership Series','Development Series','Galaxy Series','Research Series'),
                'Reader Services'=>array('Book Bundles','Reading Lists','Downloads','Support','FAQ','Contact')))),
            array('title'=>'MUSIC STORE','odin'=>'ODIN-C5000','url'=>'/music-store','columns'=>$this->columns(array(
                'Music Store'=>array('Music Home','New Releases','Featured Music','Top Albums','Top Singles','Playlists'),
                'AMG Artists'=>array('Mr. OneGodian','Niwakhe','DJ OneGodian','Greg Walker','Virgo Supreme','Artist Directory'),
                'Catalog'=>array('Albums','Singles','Instrumentals','Spoken Word','Podcasts','Audio Products'),
                'Genres'=>array('Afrobeats','Amapiano','Hip-Hop','R&B','Pop','Gospel'),
                'Licensing'=>array('Music Licensing','Commercial Use','Sync Licensing','Media Packages','Sound Libraries','Audio Rights'),
                'Artist Services'=>array('Submit Music','Artist Development','Promotion','Partnerships','Contact','Support')))),
            array('title'=>'SERVICES','odin'=>'ODIN-C6000','url'=>'/services','columns'=>$this->columns(array(
                'Development'=>array('Website Development','WordPress Development','WooCommerce Development','Membership Sites','LMS Development','Platform Development'),
                'Marketing'=>array('SEO','Content Development','Digital Marketing','Advertising','Brand Promotion','Campaign Management'),
                'Consulting'=>array('Business Consulting','Technology Consulting','Strategy Sessions','Brand Strategy','Digital Strategy','Executive Planning'),
                'Community'=>array('Community Development','Economic Development','Workforce Development','Housing Strategy','Municipal Partnerships','Project Management'),
                'Packages'=>array('Website Audit','Startup Package','Business Growth Package','Digital Strategy Package','Launch Package','Enterprise Package'),
                'Contact'=>array('Request Proposal','Schedule Consultation','Contact Sales','FAQ','Testimonials','Support')))),
            array('title'=>'BRANDS','odin'=>'ODIN-C7000','url'=>'/brands','columns'=>$this->columns(array(
                'Brand Portfolio'=>array('Brands','Featured Brands','Brand Directory','Storefront Network','Licensing','Partnerships'),
                'Flagship Brands'=>array('One Wear Ibis™','DaKahree™','BlackFlare™','Varéluna™','Virgo Supreme™','GFY Clothing™'),
                'Lifestyle Brands'=>array('Hayibo™','Quinnetukut™','Lion Life™','Godbody Supply™','True North Man™','End Of The Day™'),
                'Premium Brands'=>array('TAZIRE™','Talishén™','ONEsthetics™','Koi-Men™','Phoenixa Blackwood™','Girls Girls Girls™'),
                'Stores For Sale'=>array('Available Stores','Store Portfolio','Buyer Information','Takeover Process','Store Packages','Schedule Consultation'),
                'Brand Services'=>array('Licensing','Brand Development','Partnerships','Contact Sales','Brand Consulting','Support'))))
        );
    }

    private function ecosystem_links() {
        return array(
            'OneGodian.org' => 'https://onegodian.org',
            'OneGodian.com' => 'https://onegodian.com',
            'App.OneGodian.com' => 'https://app.onegodian.com',
            'OMOS.OneGodian.com' => 'https://omos.onegodian.com',
            'Capital.OneGodian.com' => 'https://capital.onegodian.com',
            'U.OneGodian.com' => 'https://u.onegodian.com',
            'Galaxy.OneGodian.com' => 'https://galaxy.onegodian.com',
            'QuantumOHI.com' => 'https://quantumohi.com'
        );
    }

    private function footer_columns() {
        return array(
            'Shop'=>array('Shop','Digital Products','Book Store','Music Store','Membership','Gift Cards'),
            'Learn'=>array('University','Courses','Certifications','OMOS','OHI','Student Portal'),
            'Services'=>array('Website Development','Marketing','Consulting','Community Development','Request Proposal','Contact'),
            'Company'=>array('About ONEGODIAN, LLC','Brands','Support','Privacy Policy','Terms','Contact')
        );
    }

    public function shortcode_global_header() {
        ob_start();
        echo '<div class="ogn-wrap ogn-header"><div class="ogn-top"><div class="ogn-brand">ONEGODIAN™</div><div class="ogn-utility">';
        echo '<a href="https://onegodian.org">OneGodian.org</a><a href="https://onegodian.com">OneGodian.com</a><a href="https://app.onegodian.com">App</a><a href="https://omos.onegodian.com">OMOS</a><a href="https://capital.onegodian.com">Capital</a><a href="https://u.onegodian.com">U OneGodian</a><a href="/my-account">Login</a><a href="/cart">Cart</a>';
        echo $this->shortcode_ecosystem_switcher();
        echo '</div></div><div class="ogn-main"><a class="ogn-logo" href="/">ONEGODIAN.COM</a>';
        echo $this->render_desktop_menu();
        echo '<div class="ogn-actions"><a class="ogn-btn ogn-btn-primary" href="/membership">Become A Member</a><a class="ogn-btn ogn-btn-secondary" href="/my-account">Dashboard</a></div><button class="ogn-mobile-toggle" type="button" aria-expanded="false" data-ogn-mobile-toggle="#ogn-mobile-menu">☰ Menu</button></div>';
        echo '<div id="ogn-mobile-menu" class="ogn-mobile">' . $this->render_mobile_menu() . '</div></div>';
        return ob_get_clean();
    }

    public function shortcode_commercial_mega_menu() {
        return '<div class="ogn-wrap">' . $this->render_desktop_menu() . '<div class="ogn-mobile is-open">' . $this->render_mobile_menu() . '</div></div>';
    }

    private function render_desktop_menu() {
        $out = '<nav class="ogn-menu" aria-label="OneGodian commercial mega menu">';
        foreach ($this->districts() as $district) {
            $out .= '<div class="ogn-item"><button class="ogn-trigger" type="button">' . esc_html($district['title']) . '</button><div class="ogn-mega"><div class="ogn-mega-head"><strong>' . esc_html($district['title']) . '</strong><span class="ogn-odin">' . esc_html($district['odin']) . '</span></div><div class="ogn-grid">';
            foreach ($district['columns'] as $col) {
                $out .= $this->render_column($col);
            }
            $out .= '</div></div></div>';
        }
        $out .= '</nav>';
        return $out;
    }

    private function render_mobile_menu() {
        $out = '';
        foreach ($this->districts() as $district) {
            $out .= '<details><summary>' . esc_html($district['title']) . ' <span class="ogn-odin">' . esc_html($district['odin']) . '</span></summary><div class="ogn-mobile-group">';
            foreach ($district['columns'] as $col) {
                $out .= $this->render_column($col);
            }
            $out .= '</div></details>';
        }
        return $out;
    }

    private function render_column($col) {
        $out = '<div class="ogn-col"><div class="ogn-col-title">' . esc_html($col['title']) . '</div>';
        foreach ($col['links'] as $link) {
            $out .= '<a href="' . esc_url($link['url']) . '">' . esc_html($link['label']) . '</a>';
        }
        $out .= '</div>';
        return $out;
    }

    public function shortcode_ecosystem_switcher() {
        $out = '<span class="ogn-switcher"><button class="ogn-btn ogn-btn-primary" type="button">🌐 Ecosystem</button><span class="ogn-switcher-panel">';
        foreach ($this->ecosystem_links() as $label => $url) {
            $out .= '<a href="' . esc_url($url) . '">' . esc_html($label) . '</a>';
        }
        $out .= '</span></span>';
        return $out;
    }

    public function shortcode_commercial_districts() {
        $out = '<div class="ogn-wrap ogn-section"><h2>ONEGODIAN.COM Commercial District Registry</h2><div class="ogn-districts">';
        foreach ($this->districts() as $district) {
            $out .= '<div class="ogn-district-card"><strong>' . esc_html($district['odin']) . '</strong><span>' . esc_html($district['title']) . '</span></div>';
        }
        $out .= '</div></div>';
        return $out;
    }

    public function shortcode_footer_menu() {
        $out = '<footer class="ogn-wrap ogn-footer"><div class="ogn-footer-grid">';
        foreach ($this->footer_columns() as $title => $links) {
            $out .= '<div><h3>' . esc_html($title) . '</h3>';
            foreach ($links as $label) {
                $out .= '<a href="#">' . esc_html($label) . '</a>';
            }
            $out .= '</div>';
        }
        $out .= '</div></footer>';
        return $out;
    }
}

OneGodian_Global_Navigation::instance();
