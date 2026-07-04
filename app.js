/* ==========================================================================
   TRUE VIEWPORT HEIGHT FIX (--vh custom property)
   Solves the 100vh bug on mobile where browser bars affect the value.
   ========================================================================== */
const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};
setVH();
window.addEventListener('resize', setVH);

const initApp = () => {
    /* ==========================================================================
       PRELOADER PROGRESS & FADE OUT LOGIC
       ========================================================================== */
    const preloader = document.getElementById('preloader');
    const preloaderBar = document.getElementById('preloaderBar');

    if (preloader && preloaderBar) {
        document.body.style.overflow = 'hidden';

        let progress = 0;
        let isPageLoaded = document.readyState === 'complete';

        const updateLoader = () => {
            if (progress >= 100) {
                clearInterval(loaderInterval);
                preloaderBar.style.width = '100%';
                setTimeout(() => {
                    preloader.classList.add('fade-out');
                    document.body.style.overflow = '';
                    setTimeout(() => {
                        preloader.remove();
                    }, 800);
                }, 250);
                return;
            }

            if (isPageLoaded) {
                progress += 5;
            } else {
                if (progress < 85) {
                    progress += 1.5;
                } else {
                    progress += 0.1;
                }
            }
            preloaderBar.style.width = `${Math.min(progress, 100).toFixed(1)}%`;
        };

        const loaderInterval = setInterval(updateLoader, 20);

        window.addEventListener('load', () => {
            isPageLoaded = true;
        });

        // Fail-safe: force hide loader after 3 seconds
        setTimeout(() => {
            isPageLoaded = true;
        }, 3000);
    }

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

    if (menuBtnOpen && menuBtnClose && menuPanel) {
        menuBtnOpen.addEventListener('click', openMenu);
        menuBtnClose.addEventListener('click', closeMenu);

        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

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

    if (pricingToggle) {
        pricingToggle.addEventListener('click', switchBilling);
    }

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
       METHODOLOGY TIMELINE STEP REVEAL (Staggered cascade)
       ========================================================================== */
    const methodGrid = document.querySelector('.method-timeline-grid');
    const methodSteps = document.querySelectorAll('.method-timeline-step');
    
    if (methodGrid && methodSteps.length > 0) {
        const stepObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    methodSteps.forEach((step, index) => {
                        setTimeout(() => {
                            step.classList.add('reveal-visible');
                        }, index * 300);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        stepObserver.observe(methodGrid);
    }

    /* ==========================================================================
       HERO SCROLL PARALLAX / STACKING FADE EFFECT
       ========================================================================== */
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        const heroContent = heroSection.querySelector('.hero-content-wrapper');
        const heroBg = heroSection.querySelector('.hero-bg-layer');

        function updateHeroParallax() {
            const scrollY = window.scrollY;
            const heroHeight = heroSection.offsetHeight || 600;
            
            if (scrollY <= heroHeight) {
                heroSection.style.visibility = 'visible';
                const progress = scrollY / heroHeight;
                
                // Fade out content and translate down slightly for depth
                if (heroContent) {
                    heroContent.style.opacity = Math.max(0, 1 - progress * 1.5).toFixed(2);
                    heroContent.style.transform = `translateY(${progress * 60}px)`;
                }
                
                // Parallax zoom out on background layer
                if (heroBg) {
                    heroBg.style.transform = `scale(${1.02 - progress * 0.02})`;
                }
            } else {
                heroSection.style.visibility = 'hidden';
            }
        }

        window.addEventListener('scroll', updateHeroParallax, { passive: true });
        
        // Initial run
        updateHeroParallax();
    }

    /* ==========================================================================
       ARENA AI ASSISTANT CHAT WIDGET DYNAMIC INJECTION
       ========================================================================== */
    const injectAssistant = () => {
        const prefix = window.location.pathname.includes('/cases/') || window.location.pathname.includes('/articles/') ? '../' : '';
        
        const chatWidgetHTML = `
            <div id="arena-chat-widget">
                <div class="arena-chat-badge" id="arenaChatBadge"></div>
                <button class="arena-chat-trigger" id="arenaChatTrigger" aria-label="Ouvrir l'assistant">
                    <svg class="icon-chat" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <svg class="icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                
                <div class="arena-chat-window" id="arenaChatWindow">
                    <div class="arena-chat-header">
                        <div class="arena-chat-header-profile">
                            <div class="arena-chat-avatar">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                <div class="arena-chat-avatar-status"></div>
                            </div>
                            <div class="arena-chat-meta">
                                <span class="arena-chat-name">Arena Assistant</span>
                                <span class="arena-chat-status">En ligne • Répond instantanément</span>
                            </div>
                        </div>
                        <button class="arena-chat-close" id="arenaChatClose" aria-label="Fermer l'assistant">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    
                    <div class="arena-chat-body" id="arenaChatBody">
                        <div class="arena-chat-message bot">
                            <div class="arena-chat-msg-wrapper">
                                <div class="arena-chat-msg-bubble">
                                    Bonjour ! Je suis l'assistant de <strong>Strategy Arena</strong>.<br><br>
                                    Je peux vous renseigner sur nos services, notre méthodologie ou nos études de cas. Que puis-je faire pour vous aujourd'hui ?
                                </div>
                                <span class="arena-chat-msg-time">À l'instant</span>
                            </div>
                        </div>
                        
                        <div class="arena-chat-suggestions" id="arenaChatSuggestions">
                            <button class="arena-chat-suggestion-chip" data-question="Quels sont vos services ?">🔍 Quels sont vos services ?</button>
                            <button class="arena-chat-suggestion-chip" data-question="Voir des études de cas">📁 Voir vos études de cas</button>
                            <button class="arena-chat-suggestion-chip" data-question="Comment se déroule un audit ?">💡 Comment se déroule un audit ?</button>
                            <button class="arena-chat-suggestion-chip" data-question="Prendre rendez-vous / Nous contacter">📞 Nous contacter</button>
                        </div>
                    </div>
                    
                    <div class="arena-chat-footer">
                        <form class="arena-chat-form" id="arenaChatForm">
                            <input type="text" class="arena-chat-input" id="arenaChatInput" placeholder="Posez votre question..." autocomplete="off">
                            <button type="submit" class="arena-chat-send" aria-label="Envoyer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatWidgetHTML);
        
        const trigger = document.getElementById('arenaChatTrigger');
        const chatWindow = document.getElementById('arenaChatWindow');
        const closeBtn = document.getElementById('arenaChatClose');
        const badge = document.getElementById('arenaChatBadge');
        const form = document.getElementById('arenaChatForm');
        const input = document.getElementById('arenaChatInput');
        const body = document.getElementById('arenaChatBody');
        
        if (!trigger || !chatWindow || !closeBtn || !form || !input || !body) return;

        // Toggle chat panel
        const toggleChat = () => {
            const isOpen = chatWindow.classList.toggle('open');
            trigger.classList.toggle('active');
            if (isOpen) {
                if (badge) badge.style.display = 'none';
                setTimeout(() => input.focus(), 300);
            }
        };

        trigger.addEventListener('click', toggleChat);
        closeBtn.addEventListener('click', toggleChat);

        // Header element in page might also target opening chat
        const headerChatCircle = document.querySelector('.navbar-chat-circle');
        if (headerChatCircle) {
            headerChatCircle.addEventListener('click', (e) => {
                e.preventDefault();
                if (!chatWindow.classList.contains('open')) {
                    toggleChat();
                }
            });
        }

        // Format time helper
        const getFormattedTime = () => {
            const now = new Date();
            const hrs = String(now.getHours()).padStart(2, '0');
            const mins = String(now.getMinutes()).padStart(2, '0');
            return `${hrs}:${mins}`;
        };

        // Scroll to bottom
        const scrollToBottom = () => {
            body.scrollTop = body.scrollHeight;
        };

        // Append message
        const appendMessage = (sender, text) => {
            const time = getFormattedTime();
            const msgHTML = `
                <div class="arena-chat-message ${sender}">
                    <div class="arena-chat-msg-wrapper">
                        <div class="arena-chat-msg-bubble">${text}</div>
                        <span class="arena-chat-msg-time">${time}</span>
                    </div>
                </div>
            `;
            // Insert before suggestions if they exist, else append
            const suggestions = document.getElementById('arenaChatSuggestions');
            if (suggestions) {
                suggestions.insertAdjacentHTML('beforebegin', msgHTML);
            } else {
                body.insertAdjacentHTML('beforeend', msgHTML);
            }
            scrollToBottom();
        };

        // Show typing indicator
        const showTypingIndicator = () => {
            const indicatorHTML = `
                <div class="arena-chat-message bot" id="arenaChatTypingIndicator">
                    <div class="arena-chat-msg-wrapper">
                        <div class="arena-chat-msg-bubble">
                            <div class="arena-chat-typing">
                                <span class="arena-chat-dot"></span>
                                <span class="arena-chat-dot"></span>
                                <span class="arena-chat-dot"></span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            const suggestions = document.getElementById('arenaChatSuggestions');
            if (suggestions) {
                suggestions.insertAdjacentHTML('beforebegin', indicatorHTML);
            } else {
                body.insertAdjacentHTML('beforeend', indicatorHTML);
            }
            scrollToBottom();
        };

        // Remove typing indicator
        const removeTypingIndicator = () => {
            const indicator = document.getElementById('arenaChatTypingIndicator');
            if (indicator) indicator.remove();
        };

        // Responses engine
        const getBotResponse = (userText) => {
            const txt = userText.toLowerCase();
            
            if (txt.includes('service') || txt.includes('offre') || txt.includes('propos') || txt.includes('niveau') || txt.includes('fait') || txt.includes('conseil') || txt.includes('stratég') || txt.includes('expertis') || txt.includes('compétenc')) {
                return `Notre expertise s'articule autour de 4 piliers de services concrets :<br><br>
                        • <strong>Planification stratégique</strong> : Définition de feuilles de route claires, alignement des objectifs commerciaux avec les capacités opérationnelles, et priorisation des chantiers de croissance.<br>
                        • <strong>Gestion d'organisation</strong> : Audit et optimisation des processus internes, restructuration des flux de travail, et élimination des tâches manuelles répétitives.<br>
                        • <strong>Gestion du changement</strong> : Accompagnement humain et formation de vos équipes pour garantir une adoption fluide et durable des nouveaux outils.<br>
                        • <strong>Architecture des systèmes</strong> : Choix, conception et intégration de vos outils digitaux (CRM, ERP, automatisations sur mesure) pour relier vos flux d'opérations.<br><br>
                        Quel pilier vous intéresse le plus pour votre entreprise ?`;
            }
            
            if (txt.includes('cas') || txt.includes('étude') || txt.includes('réalisation') || txt.includes('projet') || txt.includes('exemple') || txt.includes('client') || txt.includes('bénin') || txt.includes('sahel') || txt.includes('atlantique')) {
                return `Découvrez l'impact de nos interventions à travers nos études de cas récentes :<br><br>
                        • <a href="${prefix}cases/benin-distribution.html"><strong>Bénin Distribution</strong></a> : Élimination de la double saisie manuelle et gain de 15 heures de travail par semaine.<br>
                        • <a href="${prefix}cases/sahel-foods.html"><strong>Sahel Foods</strong></a> : Pilotage précis des marges et des coûts opérationnels.<br>
                        • <a href="${prefix}cases/atlantique-logistique.html"><strong>Atlantique Logistique</strong></a> : Amélioration des temps de transit et de la traçabilité.<br><br>
                        Cliquez sur les liens pour découvrir leurs histoires de réussite.`;
            }
            
            if (txt.includes('audit') || txt.includes('méthod') || txt.includes('étape') || txt.includes('comment') || txt.includes('déroule') || txt.includes('phase')) {
                return `Notre méthodologie, inspirée du Design Thinking, s'articule autour de 4 phases clés :<br><br>
                        1. <strong>Comprendre (Étape 01)</strong> : Diagnostic terrain et cartographie des frictions réelles.<br>
                        2. <strong>Concevoir (Étape 02)</strong> : Exploration de solutions sur mesure et feuille de route priorisée.<br>
                        3. <strong>Déployer (Étape 03)</strong> : Mise en œuvre progressive, formation et documentation.<br>
                        4. <strong>Piloter (Étape 04)</strong> : Suivi des indicateurs clés et ajustements réguliers.<br><br>
                        Nous refusons de prescrire une solution sans une immersion terrain préalable.`;
            }
            
            if (txt.includes('contact') || txt.includes('rendez') || txt.includes('rdv') || txt.includes('whatsapp') || txt.includes('téléphone') || txt.includes('email') || txt.includes('adresse') || txt.includes('écrire') || txt.includes('basé')) {
                return `Pour échanger sur vos problématiques ou planifier un diagnostic gratuit, voici comment nous contacter :<br><br>
                        • <strong>Email</strong> : <a href="mailto:strategyarenacontact@gmail.com">strategyarenacontact@gmail.com</a><br>
                        • <strong>Téléphone</strong> : <a href="tel:+2290140789921">+229 01 40 78 99 21</a><br>
                        • <strong>WhatsApp</strong> : <a href="https://wa.me/22940789921" target="_blank">Discuter directement</a><br><br>
                        Notre cabinet est basé à Cotonou, Bénin, et nous intervenons sur toute la région.`;
            }
            
            if (txt.includes('bonjour') || txt.includes('salut') || txt.includes('hello') || txt.includes('bonsoir') || txt.includes('hey')) {
                return `Bonjour ! C'est un plaisir de vous accueillir sur Strategy Arena. Comment puis-je vous aider dans votre réflexion opérationnelle aujourd'hui ?`;
            }

            if (txt.includes('merci') || txt.includes('parfait') || txt.includes('super') || txt.includes('cool')) {
                return `Avec plaisir ! Si vous avez d'autres interrogations ou souhaitez que nous passions aux choses concrètes, n'hésitez pas.`;
            }
            
            return `Je n'ai pas tous les détails pour cette demande, mais je peux vous guider vers :<br><br>
                    • Nos <strong>services</strong> (niveaux d'accompagnement)<br>
                    • Nos <strong>études de cas</strong> clients réels<br>
                    • Notre <strong>méthodologie d'audit</strong> terrain<br>
                    • Nos canaux de <strong>contact</strong> pour planifier un rendez-vous.<br><br>
                    Quelle option préférez-vous explorer ?`;
        };

        // Handle user query submission
        const handleQuery = (queryText) => {
            if (!queryText.trim()) return;
            
            // Append user message
            appendMessage('user', queryText);
            
            // Clear input
            input.value = '';
            
            // Show typing indicator
            showTypingIndicator();
            
            // Simulate agent response
            setTimeout(() => {
                removeTypingIndicator();
                const response = getBotResponse(queryText);
                appendMessage('bot', response);
            }, 1000 + Math.random() * 500);
        };

        // Suggestion chips listeners
        body.addEventListener('click', (e) => {
            const chip = e.target.closest('.arena-chat-suggestion-chip');
            if (chip) {
                const question = chip.getAttribute('data-question');
                handleQuery(question);
            }
        });

        // Submit form
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleQuery(input.value);
        });
    };

    injectAssistant();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
