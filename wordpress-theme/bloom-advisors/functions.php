<?php
/**
 * Bloom Advisors Theme Functions
 */

// Theme Setup
function bloom_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 200,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));

    // Register Navigation Menus
    register_nav_menus(array(
        'primary'   => __('Primary Menu', 'bloom-advisors'),
        'footer'    => __('Footer Menu', 'bloom-advisors'),
    ));
}
add_action('after_setup_theme', 'bloom_theme_setup');

// Enqueue Styles and Scripts
function bloom_enqueue_assets() {
    // Google Fonts - Manrope
    wp_enqueue_style('bloom-google-fonts', 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap', array(), null);

    // Main Stylesheet
    wp_enqueue_style('bloom-main', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0');

    // Theme stylesheet (required by WP)
    wp_enqueue_style('bloom-style', get_stylesheet_uri(), array('bloom-main'), '1.0.0');

    // Lucide Icons (CDN)
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest', array(), null, true);

    // Scroll Reveal JS
    wp_enqueue_script('bloom-scroll-reveal', get_template_directory_uri() . '/assets/js/scroll-reveal.js', array(), '1.0.0', true);

    // Main JS
    wp_enqueue_script('bloom-main-js', get_template_directory_uri() . '/assets/js/main.js', array('lucide-icons', 'bloom-scroll-reveal'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'bloom_enqueue_assets');

// Custom Nav Walker for clean markup
class Bloom_Nav_Walker extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = implode(' ', $item->classes);
        $is_active = in_array('current-menu-item', $item->classes) ? ' active' : '';
        $output .= '<li class="' . esc_attr($classes) . '">';
        $output .= '<a href="' . esc_url($item->url) . '" class="nav-link' . $is_active . '">';
        $output .= esc_html($item->title);
        $output .= '</a>';
    }
}

// Disable Gutenberg for pages (optional - use classic editor)
function bloom_disable_gutenberg($use_block_editor, $post_type) {
    if ($post_type === 'page') return false;
    return $use_block_editor;
}
add_filter('use_block_editor_for_post_type', 'bloom_disable_gutenberg', 10, 2);

// Custom Image Sizes
add_image_size('hero-bg', 1920, 1080, true);
add_image_size('card-thumb', 600, 400, true);
add_image_size('team-photo', 400, 400, true);

// Include custom post types and meta boxes
require_once get_template_directory() . '/inc/custom-post-types.php';
require_once get_template_directory() . '/inc/customizer.php';
