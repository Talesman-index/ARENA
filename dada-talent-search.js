/* ==========================================================================
   STRATEGY ARENA x DADA MANAGEMENT — DADA TALENT SEARCH
   Public Notion Form Link Integration & Fail-Safe Handlers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Exact Public Notion Form URL for DADA Talent Search
    const EXACT_NOTION_FORM_URL = "https://laser-scooter-df8.notion.site/c4cdd4aa17694d7f925518a5e13e35c7?pvs=105";

    let notionFormUrl = EXACT_NOTION_FORM_URL;
    try {
        if (typeof import.meta !== 'undefined' && import.meta && import.meta.env && import.meta.env.VITE_NOTION_DADA_FORM_URL) {
            notionFormUrl = import.meta.env.VITE_NOTION_DADA_FORM_URL;
        }
    } catch (_) {}

    const notionExternalBtn = document.getElementById('notionFormExternalBtn');
    if (notionExternalBtn) {
        notionExternalBtn.href = notionFormUrl;
    }

    // FAQ Accordion Handler
    const faqItems = document.querySelectorAll('.dada-faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.dada-faq-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // Smooth Scroll to Form Section with Header Offset
    document.querySelectorAll('.js-scroll-to-form').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const formTarget = document.getElementById('application-form');
            if (formTarget) {
                const header = document.getElementById('navbar');
                const headerHeight = header ? header.offsetHeight : 80;
                const elementPosition = formTarget.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Safe Lucide icons initializer
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        try {
            lucide.createIcons();
        } catch (e) {
            console.warn('Lucide icon init warning:', e);
        }
    }
});
