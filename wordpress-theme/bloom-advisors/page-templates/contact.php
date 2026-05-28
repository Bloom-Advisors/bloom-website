<?php
/**
 * Template Name: Contact Page
 */
get_header();
?>

<div class="contact-page-wrapper page-transition">
    <section class="contact-hero">
        <div class="contact-hero-bg"></div>
        <div class="contact-hero-overlay"></div>
        <div class="contact-hero-container">
            <div class="contact-hero-content">
                <span class="contact-hero-badge hero-animate delay-1">CONTACT US</span>
                <h1 class="contact-hero-heading hero-animate delay-2">
                    Let's build something <span class="highlight">that works.</span>
                </h1>
                <p class="contact-hero-text hero-animate delay-3">
                    Whether you're ready to start or just exploring options, we're here to help you make the right decision.
                </p>
                <div class="contact-hero-pills hero-animate delay-4">
                    <div class="hero-pill">
                        <i data-lucide="clock" style="width:14px;height:14px;"></i>
                        <span>Response within 24hrs</span>
                    </div>
                    <div class="hero-pill">
                        <i data-lucide="message-circle" style="width:14px;height:14px;"></i>
                        <span>Free consultation</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="contact-main" data-reveal>
        <div class="contact-main-container">
            <div class="contact-form-card">
                <div class="contact-form-header">
                    <h2>Send us a message</h2>
                    <p>Tell us what's not working. We'll respond within one business day.</p>
                </div>
                <?php echo do_shortcode('[contact-form-7 id="FORM_ID" title="Contact Form"]'); ?>
            </div>

            <div class="contact-sidebar">
                <div class="sidebar-card">
                    <h3>Direct Contact</h3>
                    <div class="sidebar-links">
                        <a href="mailto:<?php echo esc_attr(get_theme_mod('bloom_email', 'kwesi@bloomadvisors.uk')); ?>" class="sidebar-link-item">
                            <div class="sidebar-link-icon"><i data-lucide="mail" style="width:16px;height:16px;"></i></div>
                            <div class="sidebar-link-text">
                                <span class="sidebar-link-label">Email</span>
                                <span class="sidebar-link-value"><?php echo esc_html(get_theme_mod('bloom_email', 'kwesi@bloomadvisors.uk')); ?></span>
                            </div>
                        </a>
                        <a href="tel:+447990774379" class="sidebar-link-item">
                            <div class="sidebar-link-icon"><i data-lucide="phone" style="width:16px;height:16px;"></i></div>
                            <div class="sidebar-link-text">
                                <span class="sidebar-link-label">Phone</span>
                                <span class="sidebar-link-value"><?php echo esc_html(get_theme_mod('bloom_phone', '+44 (0) 7990 774379')); ?></span>
                            </div>
                        </a>
                        <div class="sidebar-link-item">
                            <div class="sidebar-link-icon"><i data-lucide="map-pin" style="width:16px;height:16px;"></i></div>
                            <div class="sidebar-link-text">
                                <span class="sidebar-link-label">Address</span>
                                <span class="sidebar-link-value"><?php echo esc_html(get_theme_mod('bloom_address', '6th Floor, 37 Lombard Street, London, EC3V 9BQ')); ?></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sidebar-card sidebar-card-dark">
                    <h3>What to expect</h3>
                    <div class="expect-list">
                        <div class="expect-item"><span class="expect-number">01</span><p>We ask about your current systems and pain points</p></div>
                        <div class="expect-item"><span class="expect-number">02</span><p>We assess whether Business Central is the right fit</p></div>
                        <div class="expect-item"><span class="expect-number">03</span><p>We outline the implementation approach and timeline</p></div>
                        <div class="expect-item"><span class="expect-number">04</span><p>If it's not the right fit, we'll tell you honestly</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php get_template_part('template-parts/faq'); ?>
</div>

<?php get_footer(); ?>
