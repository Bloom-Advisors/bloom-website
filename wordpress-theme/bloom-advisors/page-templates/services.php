<?php
/**
 * Template Name: Services Page
 */
get_header();
?>

<div class="services-page-wrapper page-transition">
    <section class="sp-hero">
        <div class="container">
            <div class="sp-hero-content">
                <div class="about-breadcrumb hero-animate delay-1">
                    <span class="breadcrumb-muted">Home /</span> <span class="breadcrumb-active">Services</span>
                </div>
                <h1 class="sp-title hero-animate delay-2">Advisory for Complex<br><span class="sp-subtitle">Business Decisions</span></h1>
                <p class="sp-description hero-animate delay-3">We provide structured, objective consulting services designed to help leaders gain clarity, reduce risk, and make better decisions.</p>
            </div>
        </div>
    </section>

    <section class="sp-intro-section">
        <div class="container">
            <div class="sp-intro-content" data-reveal>
                <h2 class="sp-intro-title">End-to-end Business Central delivery.</h2>
                <p class="sp-intro-text">From initial configuration to live dashboards, we handle the full implementation and build the reporting layer that makes the investment worthwhile.</p>
            </div>
        </div>
    </section>

    <section class="sp-grid-section">
        <div class="container">
            <div class="sp-grid">
                <?php
                $services = new WP_Query(array('post_type' => 'service', 'posts_per_page' => -1, 'orderby' => 'menu_order', 'order' => 'ASC'));
                $i = 0;
                while ($services->have_posts()) : $services->the_post(); $i++;
                ?>
                <div class="sp-card" data-reveal data-reveal-delay="<?php echo $i; ?>">
                    <?php if (has_post_thumbnail()) : ?>
                    <div class="sp-card-img-wrapper">
                        <?php the_post_thumbnail('card-thumb', array('class' => 'sp-card-img', 'loading' => 'lazy')); ?>
                    </div>
                    <?php endif; ?>
                    <div class="sp-card-content">
                        <h3 class="card-title"><?php the_title(); ?></h3>
                        <p class="sp-card-desc"><?php echo esc_html(get_the_excerpt()); ?></p>
                    </div>
                </div>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        </div>
    </section>

    <?php get_template_part('template-parts/cta-banner'); ?>
</div>

<?php get_footer(); ?>
