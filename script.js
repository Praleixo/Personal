const images = [
  { src: 'images/antes1.jpeg', alt: 'Antes do serviço', label: 'Antes' },
  { src: 'images/depois1.jpeg', alt: 'Depois do serviço', label: 'Depois' },
  { src: 'images/antes2.jpeg', alt: 'Antes do serviço', label: 'Antes' },
  { src: 'images/depois2.jpeg', alt: 'Depois do serviço', label: 'Depois' }
];

const gallery = document.getElementById('gallery');

window.addEventListener('DOMContentLoaded', () => {
  // Galeria de imagens
  if (gallery) {
    images.forEach(({ src, alt, label }) => {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      const caption = document.createElement('figcaption');

      img.src = src;
      img.alt = alt;
      img.loading = 'lazy';

      caption.textContent = label;

      figure.appendChild(img);
      figure.appendChild(caption);
      gallery.appendChild(figure);
    });
  }

  // Menu hamburger
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !nav.classList.contains('active');
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fechar menu ao clicar em um link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll para links âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Animar elementos ao scroll (fade-in)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar cards, depoimentos e outras seções
  document.querySelectorAll('.card, .testimonial, .highlight').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
});

