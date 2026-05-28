import {
    useEffect,
    useRef
} from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Attach the returned ref to any element to animate it on scroll.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - IntersectionObserver root margin
 */
export const useScrollReveal = (options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('revealed');
                    observer.unobserve(element);
                }
            }, {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
            }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [options.threshold, options.rootMargin]);

    return ref;
};

/**
 * Initialize scroll reveal for all elements with [data-reveal] attribute.
 * Call this once in App or a layout component.
 */
export const initScrollReveal = () => {
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

    return observer;
};