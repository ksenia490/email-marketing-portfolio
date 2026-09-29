// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Подсветка активного пункта навигации
const sections = document.querySelectorAll('#work, #about, #contacts');
const navLinks = document.querySelectorAll('.nav a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle(
          'is-active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    });
  },
  { threshold: 0.3 }
);

sections.forEach((section) => observer.observe(section));
// Lightbox: один обработчик на весь документ, работает для любых картинок,
// даже если скрипт раскладки переставил их по колонкам
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.addEventListener('click', (event) => {
  const img = event.target.closest('.letter img, .shot-grid img');
  if (!img) return;

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add('is-open');
  lightbox.scrollTop = 0;
});

lightbox.addEventListener('click', (event) => {
  // закрываем по клику на фон, но не по самой картинке
  if (event.target === lightbox) {
    lightbox.classList.remove('is-open');
  }
});
document.getElementById('lightbox-close').addEventListener('click', () => {
  lightbox.classList.remove('is-open');
});


/*const casesButton = document.querySelector('.nav__cases-button');
const casesMenu = document.querySelector('.nav__cases-menu');

casesButton.addEventListener('click', () => {
  const isOpen = casesMenu.classList.toggle('is-open');

  casesButton.setAttribute('aria-expanded', isOpen);
});

casesMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    casesMenu.classList.remove('is-open');
    casesButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.nav > a').forEach((link) => {
  link.addEventListener('click', () => {
    casesMenu.classList.remove('is-open');
    casesButton.setAttribute('aria-expanded', 'false');
  });
});*/

// динамическое меню
const casesButton = document.querySelector('.nav__cases-button');
const casesMenu = document.querySelector('.nav__cases-menu');

casesButton.addEventListener('click', () => {
  const isOpen = casesMenu.classList.toggle('is-open');
  casesButton.setAttribute('aria-expanded', isOpen);
});

casesMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    casesMenu.classList.remove('is-open');
    casesButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.mark, .nav > a').forEach((link) => {
  link.addEventListener('click', () => {
    casesMenu.classList.remove('is-open');
    casesButton.setAttribute('aria-expanded', 'false');
  });
});