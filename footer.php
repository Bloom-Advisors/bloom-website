<footer class="footer-section visible">
    <div class="footer-container">
        <div class="footer-middle">
            <div class="footer-col brand-col">
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="<?php bloginfo('name'); ?>" style="height:200px;margin:-40px 0 -10px -15px;">
                </a>
                <p class="footer-brand-desc">
                    Independent Dynamics 365 and Solver specialists. We cut through complexity to deliver robust finance, supply chain, and reporting solutions.
                </p>
            </div>

            <div class="footer-col nav-col">
                <h4 class="footer-col-title">Navigation</h4>
                <ul class="footer-links">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>" class="footer-link">Home</a></li>
                    <li><a href="<?php echo esc_url(home_url('/services')); ?>" class="footer-link">Services</a></li>
                    <li><a href="<?php echo esc_url(home_url('/projects')); ?>" class="footer-link">Our Work</a></li>
                    <li><a href="<?php echo esc_url(home_url('/about')); ?>" class="footer-link">About Us</a></li>
                    <li><a href="<?php echo esc_url(home_url('/contact')); ?>" class="footer-link">Contact Us</a></li>
                </ul>
            </div>

            <div class="footer-col contact-col">
                <h4 class="footer-col-title">Contact</h4>
                <ul class="footer-contact-list">
                    <li class="contact-item">
                        <i data-lucide="map-pin" style="width:18px;height:18px;flex-shrink:0;margin-top:2px;"></i>
                        <span><?php echo esc_html(get_theme_mod('bloom_address', '6th Floor, 37 Lombard Street, London, EC3V 9BQ')); ?></span>
                    </li>
                    <li class="contact-item">
                        <i data-lucide="mail" style="width:18px;height:18px;flex-shrink:0;margin-top:2px;"></i>
                        <a href="mailto:<?php echo esc_attr(get_theme_mod('bloom_email', 'kwesi@bloomadvisors.uk')); ?>" class="footer-link">
                            <?php echo esc_html(get_theme_mod('bloom_email', 'kwesi@bloomadvisors.uk')); ?>
                        </a>
                    </li>
                    <li class="contact-item">
                        <i data-lucide="phone" style="width:18px;height:18px;flex-shrink:0;margin-top:2px;"></i>
                        <a href="tel:+447990774379" class="footer-link">
                            <?php echo esc_html(get_theme_mod('bloom_phone', '+44 (0) 7990 774379')); ?>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p class="copyright-text">&copy; <?php echo date('Y'); ?> Bloom Advisors. All rights reserved.</p>
            <div class="social-links">
                <?php if (get_theme_mod('bloom_linkedin')) : ?>
                    <a href="<?php echo esc_url(get_theme_mod('bloom_linkedin')); ?>" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener">
                        <i data-lucide="linkedin" style="width:20px;height:20px;"></i>
                    </a>
                <?php endif; ?>
                <?php if (get_theme_mod('bloom_twitter')) : ?>
                    <a href="<?php echo esc_url(get_theme_mod('bloom_twitter')); ?>" class="social-link" aria-label="Twitter" target="_blank" rel="noopener">
                        <i data-lucide="twitter" style="width:20px;height:20px;"></i>
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
