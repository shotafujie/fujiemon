/* ===========================================
   ふじえもんのおへや v2
   Interactions & Animations
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initWaveform();
    initFlipCards();
    initSecretDoor();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();

    console.log('%c🚪 ヒント: 本棚に怪しい本があるかも...?', 'color: #a09bd8; font-size: 14px;');
});

/* ===== Waveform Visualizer ===== */
function initWaveform() {
    const container = document.getElementById('waveform');
    if (!container) return;

    const barCount = 40;
    const bars = [];

    // Create bars
    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement('div');
        bar.className = 'wave-bar';
        container.appendChild(bar);
        bars.push(bar);
    }

    // Animate
    function animate() {
        const time = Date.now() / 1000;

        bars.forEach((bar, i) => {
            const n = i / barCount;
            const base = Math.sin(n * Math.PI);
            const wave1 = Math.sin(time * 2.5 + n * Math.PI * 2.5) * 0.3;
            const wave2 = Math.sin(time * 4 + n * Math.PI * 4) * 0.15;

            const height = (base * 0.5 + 0.2 + wave1 + wave2) * 80;
            bar.style.height = `${Math.max(4, height)}px`;
            bar.style.opacity = 0.5 + (height / 80) * 0.5;
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* ===== Flip Cards ===== */
function initFlipCards() {
    const cards = document.querySelectorAll('.app-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const isFlipped = card.classList.contains('flipped');

            // Close other flipped cards
            cards.forEach(c => c.classList.remove('flipped'));

            // Toggle current card
            if (!isFlipped) {
                card.classList.add('flipped');
            }
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.app-card')) {
            cards.forEach(c => c.classList.remove('flipped'));
        }
    });
}

/* ===== Secret Door ===== */
function initSecretDoor() {
    const secretBook = document.querySelector('.secret-book');
    const secretRoom = document.getElementById('secretRoom');
    const secretClose = document.getElementById('secretClose');

    if (!secretBook || !secretRoom) return;

    // Click secret book to open
    secretBook.addEventListener('click', () => {
        openSecretRoom();
    });

    // Close button
    if (secretClose) {
        secretClose.addEventListener('click', () => {
            closeSecretRoom();
        });
    }

    // Close on background click
    secretRoom.addEventListener('click', (e) => {
        if (e.target === secretRoom) {
            closeSecretRoom();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && secretRoom.classList.contains('active')) {
            closeSecretRoom();
        }
    });

    function openSecretRoom() {
        // Shake effect on book
        secretBook.style.animation = 'none';
        secretBook.offsetHeight; // Trigger reflow
        secretBook.style.animation = 'bookShake 0.5s ease-out';

        // Open room after shake
        setTimeout(() => {
            secretRoom.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 300);
    }

    function closeSecretRoom() {
        secretRoom.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Add shake animation
    const style = document.createElement('style');
    style.textContent = `
    @keyframes bookShake {
      0%, 100% { transform: translateY(0) rotate(0); }
      20% { transform: translateY(-5px) rotate(-3deg); }
      40% { transform: translateY(-10px) rotate(3deg); }
      60% { transform: translateY(-5px) rotate(-2deg); }
      80% { transform: translateY(-15px) rotate(1deg); }
    }
  `;
    document.head.appendChild(style);
}

/* ===== Mobile Menu ===== */
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('mobileMenu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');

        const spans = toggle.querySelectorAll('span');
        if (menu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });

    // Close menu on link click
    menu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            const spans = toggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        });
    });
}

/* ===== Smooth Scroll ===== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ===== Scroll Animations ===== */
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    // Observe section headers
    document.querySelectorAll('.section-header').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });

    // Observe shelf containers
    document.querySelectorAll('.shelf').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transitionDelay = `${i * 0.1}s`;
        observer.observe(el);
    });

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
  `;
    document.head.appendChild(style);
}

/* ===== Interactive Items ===== */
// Bottles hover effect
document.querySelectorAll('.bottle').forEach(bottle => {
    bottle.addEventListener('mouseenter', () => {
        bottle.style.filter = 'brightness(1.2)';
    });
    bottle.addEventListener('mouseleave', () => {
        bottle.style.filter = '';
    });
});

// Records hover effect  
document.querySelectorAll('.record').forEach(record => {
    record.addEventListener('mouseenter', () => {
        const cover = record.querySelector('.record-cover');
        if (cover) {
            cover.style.boxShadow = '4px 8px 20px rgba(0,0,0,0.7), 0 0 30px rgba(33, 196, 220, 0.4)';
        }
    });
    record.addEventListener('mouseleave', () => {
        const cover = record.querySelector('.record-cover');
        if (cover) {
            cover.style.boxShadow = '';
        }
    });
});

/* ===== Easter Egg: Konami Code ===== */
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated!
            document.body.style.animation = 'rainbow 2s linear';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 2000);
            konamiIndex = 0;

            // Add rainbow animation
            if (!document.getElementById('rainbow-style')) {
                const style = document.createElement('style');
                style.id = 'rainbow-style';
                style.textContent = `
          @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
        `;
                document.head.appendChild(style);
            }
        }
    } else {
        konamiIndex = 0;
    }
});