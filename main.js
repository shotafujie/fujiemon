/* Homepage interactions. */
document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initWaveform();
    initMobileMenu();
    initAnchorNavigation();
});

/* Keep the original waveform, with a still version for reduced motion. */
function initWaveform() {
    const container = document.getElementById('waveform');
    if (!container) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const bars = Array.from({ length: 40 }, () => {
        const bar = document.createElement('div');
        bar.className = 'wave-bar';
        container.appendChild(bar);
        return bar;
    });
    let frame;
    function render(time) {
        bars.forEach((bar, i) => {
            const n = i / bars.length;
            const base = Math.sin(n * Math.PI);
            const wave1 = Math.sin(time * 2.5 + n * Math.PI * 2.5) * 0.3;
            const wave2 = Math.sin(time * 4 + n * Math.PI * 4) * 0.15;
            const height = (base * 0.5 + 0.2 + wave1 + wave2) * 80;
            bar.style.height = `${Math.max(4, height)}px`;
            bar.style.opacity = 0.5 + (height / 80) * 0.5;
        });
    }
    function animate() {
        render(Date.now() / 1000);
        frame = requestAnimationFrame(animate);
    }
    function update() {
        cancelAnimationFrame(frame);
        if (reducedMotion.matches || document.hidden) render(0);
        else animate();
    }
    reducedMotion.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    update();
}

function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;
    const spans = toggle.querySelectorAll('span');
    function setOpen(open) {
        menu.classList.toggle('active', open);
        menu.inert = !open;
        toggle.setAttribute('aria-expanded', String(open));
        spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
        spans[1].style.opacity = open ? '0' : '';
        spans[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
    }
    setOpen(false);
    toggle.addEventListener('click', () => setOpen(!menu.classList.contains('active')));
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setOpen(false));
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menu.classList.contains('active')) {
            setOpen(false);
            toggle.focus();
        }
    });
    window.matchMedia('(min-width: 641px)').addEventListener('change', event => {
        if (event.matches) setOpen(false);
    });
}

function initAnchorNavigation() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', event => {
            const hash = anchor.getAttribute('href');
            const target = document.getElementById(hash === '#' ? 'hero' : hash.slice(1));
            if (!target) return;
            event.preventDefault();
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
            target.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
            history.replaceState(null, '', hash === '#' ? '#hero' : hash);
        });
    });
}

/* ===== Internationalization (i18n) ===== */
function initI18n() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    // Get current language from localStorage (default: 'ja')
    let currentLang = 'ja';
    try {
        currentLang = localStorage.getItem('fujiemon_lang') === 'en' ? 'en' : 'ja';
    } catch (_) { /* Use Japanese if storage is unavailable. */ }

    // Update page content on load
    updatePageContent(currentLang);

    // Set up language toggle button
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ja' ? 'en' : 'ja';
        switchLanguage(currentLang);
    });
}

function switchLanguage(lang) {
    // Save to localStorage
    try {
        localStorage.setItem('fujiemon_lang', lang);
    } catch (e) {
        console.warn('localStorage not available:', e);
    }

    // Update page content
    updatePageContent(lang);
}

function updatePageContent(lang) {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    // Update language toggle button text
    langToggle.textContent = lang === 'ja' ? 'EN' : 'JP';

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Get translations
    const t = translations[lang] || translations['ja'];

    // Update meta tags
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]').setAttribute('content', t.meta.description);
    document.querySelector('meta[name="keywords"]').setAttribute('content', t.meta.keywords);
    document.querySelector('meta[property="og:title"]').setAttribute('content', t.meta.ogTitle);
    document.querySelector('meta[property="og:description"]').setAttribute('content', t.meta.ogDescription);
    document.querySelector('meta[property="og:site_name"]').setAttribute('content', t.meta.ogSiteName);
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', t.meta.twitterTitle);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', t.meta.twitterDescription);
    document.querySelector('meta[property="og:locale"]').setAttribute('content', lang === 'ja' ? 'ja_JP' : 'en_US');

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = getNestedValue(t, key);
        if (value) {
            element.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const value = getNestedValue(t, element.getAttribute('data-i18n-alt'));
        if (value) element.setAttribute('alt', value);
    });

    // Update all elements with data-i18n-title attribute
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        const value = getNestedValue(t, key);
        if (value) {
            element.setAttribute('title', value);
        }
    });

    // Update all elements with data-i18n-aria attribute
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        const value = getNestedValue(t, key);
        if (value) {
            element.setAttribute('aria-label', value);
        }
    });

    // Update all elements with data-i18n-list attribute (for tech tags)
    document.querySelectorAll('[data-i18n-list]').forEach(element => {
        const key = element.getAttribute('data-i18n-list');
        const values = getNestedValue(t, key);
        if (Array.isArray(values)) {
            // Clear existing content
            element.innerHTML = '';
            // Add new spans for each tech tag
            values.forEach(value => {
                const span = document.createElement('span');
                span.textContent = value;
                element.appendChild(span);
            });
        }
    });
}

// Helper function to get nested object value by dot notation path
function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}
