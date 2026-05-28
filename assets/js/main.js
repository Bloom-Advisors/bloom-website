/**
 * Bloom Advisors - Main JavaScript
 */
(function() {
    'use strict';

    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.btn-mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
            });
        });
    }

    // FAQ Accordion
    const faqButtons = document.querySelectorAll('.faq-question-btn');
    faqButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const item = this.closest('.faq-item');
            const isOpen = item.classList.contains('open');

            // Close all
            document.querySelectorAll('.faq-item').forEach(function(el) {
                el.classList.remove('open');
                el.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
            });

            // Open clicked (if wasn't open)
            if (!isOpen) {
                item.classList.add('open');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Services Carousel
    const servicesData = [{
            num: '01',
            tag: 'FINANCIAL EFFICIENCY',
            image: 'finance.png',
            title: 'Automated Financial Consolidation',
            desc: 'Reconciling data across siloed systems extends your month-end close to weeks. We integrate your accounting pipelines to deliver automated, instant financial consolidation.',
            impact: 'Reduces close time by up to 80% while ensuring auditable data integrity.'
        },
        {
            num: '02',
            tag: 'DYNAMIC FORECASTING',
            image: 'budgeting.png',
            title: 'Continuous Planning & Budgeting',
            desc: 'Static annual budgets become obsolete by Q2. We connect live actuals directly to your forecasts, giving leaders real-time visibility into variance.',
            impact: 'Enables rolling forecasts and continuous variance analysis on demand.'
        },
        {
            num: '03',
            tag: 'REAL-TIME INSIGHTS',
            image: 'reporting.png',
            title: 'Always-On Executive Reporting',
            desc: 'Making strategic decisions on 30-day-old reports means missing critical market opportunities. We build automated executive dashboards that serve live KPIs.',
            impact: 'Brings report latency down from weeks to minutes.'
        },
        {
            num: '04',
            tag: 'SCALABLE ARCHITECTURE',
            image: 'growth.png',
            title: 'Multi-Entity Expansion & Scaling',
            desc: 'Scaling operations across new entities exposes the limitations of legacy tools. We configure robust architectures built for global multi-company expansion.',
            impact: 'Supports multi-currency, multi-region setups without core system strain.'
        }
    ];

    let currentSlide = 0;
    const serviceImg = document.getElementById('service-img');
    const serviceNum = document.getElementById('service-num');
    const serviceTag = document.getElementById('service-tag');
    const serviceTitle = document.getElementById('service-title');
    const serviceDesc = document.getElementById('service-desc');
    const serviceImpact = document.getElementById('service-impact');
    const serviceDots = document.getElementById('service-dots');
    const prevBtn = document.getElementById('service-prev');
    const nextBtn = document.getElementById('service-next');

    function updateCarousel() {
        if (!serviceImg) return;
        const data = servicesData[currentSlide];
        const themeUrl = serviceImg.src.substring(0, serviceImg.src.lastIndexOf('/') + 1);
        serviceImg.src = themeUrl + data.image;
        serviceNum.textContent = data.num;
        serviceTag.textContent = data.tag;
        serviceTitle.textContent = data.title;
        serviceDesc.textContent = data.desc;
        serviceImpact.textContent = data.impact;

        // Update dots
        if (serviceDots) {
            serviceDots.querySelectorAll('.dot-indicator').forEach(function(dot, i) {
                dot.classList.toggle('active', i === currentSlide);
            });
        }
    }

    // Create dots
    if (serviceDots) {
        servicesData.forEach(function(_, i) {
            const dot = document.createElement('button');
            dot.className = 'dot-indicator' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Slide ' + (i + 1));
            dot.addEventListener('click', function() {
                currentSlide = i;
                updateCarousel();
            });
            serviceDots.appendChild(dot);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentSlide = currentSlide === 0 ? servicesData.length - 1 : currentSlide - 1;
            updateCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentSlide = currentSlide === servicesData.length - 1 ? 0 : currentSlide + 1;
            updateCarousel();
        });
    }

})();