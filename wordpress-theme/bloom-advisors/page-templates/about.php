<?php
/**
 * Template Name: About Page
 */
get_header();
?>

<div class="about-page-wrapper page-transition">
    <section class="about-hero">
        <div class="container">
            <div class="about-hero-content">
                <div class="about-breadcrumb hero-animate delay-1">
                    <span class="breadcrumb-muted">Home /</span> <span class="breadcrumb-active">About Us</span>
                </div>
                <h1 class="about-hero-title hero-animate delay-2">Dedicated to your growth.</h1>
                <p class="about-hero-desc hero-animate delay-3">
                    We're a team of hands-on consultants who have implemented, built, and delivered at the highest levels. We believe growing businesses deserve the exact same quality of ERP and reporting capabilities as large enterprises.
                </p>
            </div>
        </div>
    </section>

    <section class="about-experienced" data-reveal>
        <div class="container about-experienced-container">
            <div class="about-experienced-grid">
                <div class="about-experienced-left">
                    <span class="about-experienced-badge">OUR OPERATING MODEL</span>
                    <h2 class="about-experienced-title">Experienced<br><span class="text-highlight">Practitioners.</span><span class="text-sub">Not account managers.</span></h2>
                </div>
                <div class="about-experienced-right">
                    <p class="about-experienced-lead">You will work directly with consultants who have implemented, built, and delivered, not with an intermediary layer.</p>
                    <p class="about-experienced-desc">Bloom Advisors was founded on a straightforward premise: growing businesses deserve the same quality of ERP and reporting capability as large enterprises, delivered by people who have done it.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section - Dynamic from CPT -->
    <section class="team-section" data-reveal>
        <div class="container">
            <div class="team-grid">
                <?php
                $team = new WP_Query(array('post_type' => 'team_member', 'posts_per_page' => -1, 'orderby' => 'menu_order', 'order' => 'ASC'));
                while ($team->have_posts()) : $team->the_post();
                    $role = get_post_meta(get_the_ID(), '_team_role', true);
                ?>
                <div class="team-card">
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="team-card-img-wrapper">
                            <?php the_post_thumbnail('team-photo', array('class' => 'team-card-img')); ?>
                        </div>
                    <?php endif; ?>
                    <h3 class="team-card-name"><?php the_title(); ?></h3>
                    <?php if ($role) : ?><p class="team-card-role"><?php echo esc_html($role); ?></p><?php endif; ?>
                </div>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        </div>
    </section>

    <?php get_template_part('template-parts/cta-banner'); ?>
</div>

<?php get_footer(); ?>
