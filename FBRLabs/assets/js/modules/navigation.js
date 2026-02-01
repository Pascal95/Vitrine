/* ========================================
   Navigation Module - FBR Shot
   ======================================== */

export function initNavigation() {
  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav-link');

  let lastScrollPosition = 0;
  let ticking = false;

  // Toggle mobile menu
  function toggleMenu() {
    const isOpen = nav.classList.contains('is-open');

    if (isOpen) {
      nav.classList.remove('is-open');
      navOverlay.classList.remove('is-visible');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      nav.classList.add('is-open');
      navOverlay.classList.add('is-visible');
      navToggle.classList.add('is-active');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  // Close mobile menu
  function closeMenu() {
    nav.classList.remove('is-open');
    navOverlay.classList.remove('is-visible');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Handle scroll behavior
  function handleScroll() {
    const currentScrollPosition = window.pageYOffset;

    // Add/remove visible class based on scroll
    if (currentScrollPosition > 100) {
      header.classList.add('is-visible');
    } else {
      header.classList.remove('is-visible');
    }

    // Hide/show header based on scroll direction
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 300) {
      header.classList.add('is-hidden');
    } else {
      header.classList.remove('is-hidden');
    }

    lastScrollPosition = currentScrollPosition;
  }

  // Throttle scroll handler
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Update active link based on scroll position
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('is-active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('is-active');
          }
        });
      }
    });
  }

  // Smooth scroll to section
  function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
      const headerHeight = header.offsetHeight;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  // Event listeners
  navToggle.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', closeMenu);

  // Close menu when clicking on a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        smoothScrollTo(href);
        closeMenu();
      }
    });
  });

  // Handle scroll events
  window.addEventListener('scroll', onScroll);
  window.addEventListener('scroll', updateActiveLink);

  // Initialize
  handleScroll();
  updateActiveLink();
}
