/**
 * Scroll Reveal Animation System
 */
(function() {
    'use strict';

    function initScrollReveal() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.08,
                rootMargin: '0px 0px -60px 0px',
            }
        );

        const elements = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
        elements.forEach((el) => observer.observe(el));
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollReveal);
    } else {
        initScrollReveal();
    }
})();