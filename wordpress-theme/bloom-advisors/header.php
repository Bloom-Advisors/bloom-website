<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="navbar" id="main-navbar">
    <div class="navbar-logo">
        <?php if (has_custom_logo()) : ?>
            <?php the_custom_logo(); ?>
        <?php else : ?>
            <a href="<?php echo esc_url(home_url('/')); ?>">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="<?php bloginfo('name'); ?>" class="logo-img">
            </a>
        <?php endif; ?>
    </div>

    <div class="navbar-links-desktop">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container'      => false,
            'items_wrap'     => '%3$s',
            'walker'         => new Bloom_Nav_Walker(),
            'fallback_cb'    => false,
        ));
        ?>
    </div>

    <div class="navbar-actions">
        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn-consult">BOOK CONSULTATION</a>
    </div>

    <button class="btn-mobile-toggle" aria-label="Toggle menu">
        <i data-lucide="menu" style="width:24px;height:24px;"></i>
    </button>
</nav>

<!-- Mobile Menu -->
<div class="mobile-menu-overlay" id="mobile-menu">
    <div class="mobile-menu-links">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container'      => false,
            'items_wrap'     => '%3$s',
            'fallback_cb'    => false,
        ));
        ?>
        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="mobile-btn-consult">Book Consultation</a>
    </div>
</div>
