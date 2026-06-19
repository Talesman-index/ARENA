document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    /* ==========================================================================
       STICKY NAVBAR SCROLL TRANSITION
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    /* ==========================================================================
       MENU OVERLAY PANEL TOGGLE
       ========================================================================== */
    const menuBtnOpen = document.getElementById('menuBtnOpen');
    const menuBtnClose = document.getElementById('menuBtnClose');
    const menuPanel = document.getElementById('menuPanel');
    const menuLinks = document.querySelectorAll('.menu-link-item');

    function openMenu() {
        menuPanel.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeMenu() {
        menuPanel.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuBtnOpen.addEventListener('click', openMenu);
    menuBtnClose.addEventListener('click', closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    /* ==========================================================================
       STATISTICS COUNTER ANIMATION (INTERSECTION OBSERVER)
       ========================================================================== */
    const counters = document.querySelectorAll('.metric-num');
    const heroCounter = document.getElementById('hero-projects-count');

    const animateCounter = (counterEl, duration = 1500) => {
        const target = parseInt(counterEl.getAttribute('data-target') || counterEl.innerText, 10);
        let start = 0;
        const stepTime = Math.max(Math.floor(duration / target), 15);
        
        const timer = setInterval(() => {
            start += Math.ceil(target / (duration / stepTime));
            if (start >= target) {
                counterEl.innerText = target;
                clearInterval(timer);
            } else {
                counterEl.innerText = start;
            }
        }, stepTime);
    };

    // Hero counter executes immediately
    if (heroCounter) {
        heroCounter.setAttribute('data-target', '321');
        setTimeout(() => animateCounter(heroCounter, 1200), 200);
    }

    // Metric counters execute when visible
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetEl = entry.target;
                animateCounter(targetEl, 1500);
                observer.unobserve(targetEl);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    /* ==========================================================================
       PRICING MONTHLY/ANNUAL TOGGLE
       ========================================================================== */
    const pricingToggle = document.getElementById('pricingToggle');
    const toggleMonthly = document.getElementById('toggleMonthly');
    const toggleAnnually = document.getElementById('toggleAnnually');
    
    const priceBasic = document.getElementById('price-basic');
    const pricePremium = document.getElementById('price-premium');
    const priceUltimate = document.getElementById('price-ultimate');

    function switchBilling() {
        const isAnnually = pricingToggle.classList.toggle('annually');
        
        if (isAnnually) {
            toggleMonthly.classList.remove('active');
            toggleAnnually.classList.add('active');
            
            updatePrice(priceBasic, priceBasic.getAttribute('data-annual'));
            updatePrice(pricePremium, pricePremium.getAttribute('data-annual'));
            updatePrice(priceUltimate, priceUltimate.getAttribute('data-annual'));
        } else {
            toggleAnnually.classList.remove('active');
            toggleMonthly.classList.add('active');
            
            updatePrice(priceBasic, priceBasic.getAttribute('data-monthly'));
            updatePrice(pricePremium, pricePremium.getAttribute('data-monthly'));
            updatePrice(priceUltimate, priceUltimate.getAttribute('data-monthly'));
        }
    }

    function updatePrice(element, newPrice) {
        if (!element) return;
        // Subtle opacity animation
        element.style.opacity = '0';
        element.style.transform = 'translateY(-5px)';
        setTimeout(() => {
            element.innerText = newPrice;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 150);
    }

    pricingToggle.addEventListener('click', switchBilling);

    /* ==========================================================================
       FAQ ACCORDION INTERACTIVITY
       ========================================================================== */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question-btn');
        const answer = item.querySelector('.faq-answer');

        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = '0';
            });

            // Toggle clicked item
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    /* ==========================================================================
       SCROLL-DRIVEN TEXT FILL (Text Mask Reveal)
       ========================================================================== */
    const fillTitles = document.querySelectorAll('.scroll-fill-title');

    // Set initial state — all titles start unfilled
    fillTitles.forEach(el => {
        el.style.setProperty('--fill-pct', '0%');
    });

    // Track which titles are "active" (entered viewport)
    const activeTitles = new Set();

    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeTitles.add(entry.target);
            } else {
                // If element leaves viewport going up, reset to 0
                const rect = entry.target.getBoundingClientRect();
                if (rect.top > 0) {
                    activeTitles.delete(entry.target);
                    entry.target.style.setProperty('--fill-pct', '0%');
                }
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });

    fillTitles.forEach(el => titleObserver.observe(el));

    // Throttled scroll handler with requestAnimationFrame
    let fillRAF = null;

    function updateFillTitles() {
        const vh = window.innerHeight;

        activeTitles.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Start fill when element top hits 80% of viewport height
            // Complete fill when element top hits 20% of viewport height
            const startY = vh * 0.82;
            const endY   = vh * 0.18;

            const rawProgress = (startY - rect.top) / (startY - endY);
            const progress = Math.max(0, Math.min(1, rawProgress));

            el.style.setProperty('--fill-pct', `${(progress * 100).toFixed(1)}%`);

            // Remove from active set once fully filled to save perf
            if (progress >= 1) activeTitles.delete(el);
        });

        fillRAF = null;
    }

    window.addEventListener('scroll', () => {
        if (!fillRAF) {
            fillRAF = requestAnimationFrame(() => {
                updateFillTitles();
            });
        }
    }, { passive: true });

    // Run once on load in case elements are already in view
    updateFillTitles();

    /* ==========================================================================
       REALISATIONS HORIZONTAL SCROLL ON VERTICAL SCROLL
       ========================================================================== */
    const realisationsSec = document.querySelector('.realisations-section');
    const track = document.querySelector('.realisations-track');
    const trackContainer = document.querySelector('.realisations-track-container');

    if (realisationsSec && track && trackContainer) {
        let scrollRAF = null;

        function updateHorizontalScroll() {
            if (window.innerWidth <= 768) {
                track.style.transform = '';
                return;
            }

            const rect = realisationsSec.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            
            // Distance the section scrolls through view:
            const totalScrollable = realisationsSec.offsetHeight - viewHeight;
            
            if (totalScrollable <= 0) return;

            const scrolledDistance = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolledDistance / totalScrollable));
            
            const maxTranslate = track.scrollWidth - trackContainer.clientWidth;
            
            if (maxTranslate > 0) {
                track.style.transform = `translateX(${-progress * maxTranslate}px)`;
            } else {
                track.style.transform = '';
            }
            
            scrollRAF = null;
        }

        window.addEventListener('scroll', () => {
            if (!scrollRAF) {
                scrollRAF = requestAnimationFrame(updateHorizontalScroll);
            }
        }, { passive: true });

        window.addEventListener('resize', () => {
            if (!scrollRAF) {
                scrollRAF = requestAnimationFrame(updateHorizontalScroll);
            }
        });

        // Run initially
        updateHorizontalScroll();
    }

    /* ==========================================================================
       METHODOLOGY TIMELINE STEP REVEAL
       ========================================================================== */
    const methodologySec = document.getElementById('methodology');
    const methodSteps = document.querySelectorAll('.method-timeline-step');
    
    if (methodologySec && methodSteps.length > 0) {
        const stepObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    methodSteps.forEach(step => {
                        step.classList.add('reveal-visible');
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        stepObserver.observe(methodologySec);
    }
});
