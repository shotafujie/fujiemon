/* ===========================================
   Blog — スライド表示切替
   h2 見出しを区切りとしてスライド風に表示
   =========================================== */

(function () {
  const toggle = document.getElementById('slideToggle');
  const content = document.getElementById('blogContent');
  if (!toggle || !content) return;

  let slideMode = false;
  let slides = [];
  let currentSlide = 0;
  let originalHTML = '';

  // h2 で区切ってスライドに分割
  function buildSlides() {
    const children = Array.from(content.children);
    const sections = [];
    let current = [];

    children.forEach(el => {
      if (el.tagName === 'H2') {
        if (current.length > 0) {
          sections.push(current);
        }
        current = [el];
      } else {
        current.push(el);
      }
    });
    if (current.length > 0) {
      sections.push(current);
    }

    return sections;
  }

  function enterSlideMode() {
    slideMode = true;
    originalHTML = content.innerHTML;
    slides = buildSlides();

    if (slides.length === 0) return;

    // コンテンツをスライドに再構成
    content.innerHTML = '';
    slides.forEach((section, i) => {
      const slide = document.createElement('div');
      slide.className = 'slide' + (i === 0 ? ' active' : '');
      slide.dataset.index = i;

      const inner = document.createElement('div');
      inner.className = 'slide-inner';
      section.forEach(el => inner.appendChild(el.cloneNode(true)));
      slide.appendChild(inner);

      content.appendChild(slide);
    });

    // ツールバーにナビゲーション追加
    const toolbar = document.querySelector('.blog-toolbar');
    const nav = document.createElement('div');
    nav.className = 'slide-nav';
    nav.id = 'slideNav';
    nav.innerHTML = `
      <button class="slide-nav-btn" id="slidePrev" disabled>&larr;</button>
      <span class="slide-counter" id="slideCounter">1 / ${slides.length}</span>
      <button class="slide-nav-btn" id="slideNext">&rarr;</button>
    `;
    toolbar.appendChild(nav);

    document.body.classList.add('slide-mode');
    toggle.classList.add('active');
    toggle.querySelector('.slide-toggle-label').textContent = '通常表示';
    currentSlide = 0;

    // イベント
    document.getElementById('slidePrev').addEventListener('click', prevSlide);
    document.getElementById('slideNext').addEventListener('click', nextSlide);
    document.addEventListener('keydown', handleKey);

    // タッチスワイプ
    let touchStartX = 0;
    content.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    content.addEventListener('touchend', e => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) prevSlide();
        else nextSlide();
      }
    }, { passive: true });
  }

  function exitSlideMode() {
    slideMode = false;
    content.innerHTML = originalHTML;
    document.body.classList.remove('slide-mode');
    toggle.classList.remove('active');
    toggle.querySelector('.slide-toggle-label').textContent = 'スライド表示';

    const nav = document.getElementById('slideNav');
    if (nav) nav.remove();

    document.removeEventListener('keydown', handleKey);
  }

  function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    currentSlide = index;

    content.querySelectorAll('.slide').forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });

    document.getElementById('slideCounter').textContent = `${index + 1} / ${slides.length}`;
    document.getElementById('slidePrev').disabled = index === 0;
    document.getElementById('slideNext').disabled = index === slides.length - 1;
  }

  function nextSlide() { goToSlide(currentSlide + 1); }
  function prevSlide() { goToSlide(currentSlide - 1); }

  function handleKey(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Escape') {
      exitSlideMode();
    }
  }

  toggle.addEventListener('click', () => {
    if (slideMode) exitSlideMode();
    else enterSlideMode();
  });
})();
