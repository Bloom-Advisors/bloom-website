<?php
/**
 * Homepage Template
 */
get_header();
?>

<div class="page-transition">
    <?php get_template_part('template-parts/hero'); ?>
    <?php get_template_part('template-parts/about'); ?>
    <?php get_template_part('template-parts/services'); ?>
    <?php get_template_part('template-parts/faq'); ?>
    <?php get_template_part('template-parts/cta-banner'); ?>
</div>

<?php get_footer(); ?>
