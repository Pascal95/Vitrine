/* ========================================
   Testimonials Module - FBR Shot
   ======================================== */

export function initTestimonials() {
  const testimonialsData = [
    {
      id: 1,
      name: 'Sophie & Thomas',
      role: 'Mariage - Juin 2025',
      avatar: 'assets/images/testimonials/avatar-1.jpg',
      rating: 5,
      quote: 'Le photobooth FBR Shot a été un véritable succès à notre mariage ! Les invités ont adoré et nous avons de magnifiques souvenirs. Service professionnel et matériel de qualité.'
    },
    {
      id: 2,
      name: 'Marie Dubois',
      role: 'Anniversaire 40 ans',
      avatar: 'assets/images/testimonials/avatar-2.jpg',
      rating: 5,
      quote: 'Excellent service ! L\'équipe a été très réactive et le matériel impeccable. Mes invités ont passé un moment inoubliable. Je recommande vivement !'
    },
    {
      id: 3,
      name: 'Jean Martin - TechCorp',
      role: 'Séminaire d\'entreprise',
      avatar: 'assets/images/testimonials/avatar-3.jpg',
      rating: 5,
      quote: 'Parfait pour notre événement corporate. Installation rapide, interface intuitive et résultat professionnel. Nos collaborateurs ont adoré !'
    },
    {
      id: 4,
      name: 'Laura Petit',
      role: 'Festival Summer Sound',
      avatar: 'assets/images/testimonials/avatar-4.jpg',
      rating: 5,
      quote: 'Le photobooth a été l\'attraction phare de notre festival. Qualité HD exceptionnelle et galerie en ligne très pratique. Top !'
    },
    {
      id: 5,
      name: 'Pierre & Camille',
      role: 'Mariage - Septembre 2025',
      avatar: 'assets/images/testimonials/avatar-5.jpg',
      rating: 5,
      quote: 'Service au top du début à la fin. Le rendu des photos est magnifique et la personnalisation parfaite. Merci FBR Shot !'
    }
  ];

  const slider = document.getElementById('testimonialsSlider');
  if (!slider) return;

  const track = slider.querySelector('.testimonial-track');
  const dotsContainer = document.getElementById('testimonialDots');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');

  let currentIndex = 0;
  let autoplayInterval;

  // Render testimonials
  function renderTestimonials() {
    track.innerHTML = testimonialsData.map(testimonial => `
      <div class="card testimonial-card">
        <div class="testimonial-card-rating">
          ${'★'.repeat(testimonial.rating)}
        </div>
        <p class="testimonial-card-quote">${testimonial.quote}</p>
        <div class="testimonial-card-author">
          <div>
            <div class="testimonial-card-name">${testimonial.name}</div>
            <div class="testimonial-card-role">${testimonial.role}</div>
          </div>
        </div>
      </div>
    `).join('');

    // Add styles
    track.style.cssText = `
      display: flex;
      transition: transform 0.5s ease-in-out;
      gap: 1rem;
    `;

    const cards = track.querySelectorAll('.testimonial-card');
    cards.forEach(card => {
      card.style.minWidth = '100%';
      card.style.scrollSnapAlign = 'start';
    });
  }

  // Render dots
  function renderDots() {
    dotsContainer.innerHTML = testimonialsData.map((_, index) => `
      <button
        class="testimonial-dot ${index === 0 ? 'is-active' : ''}"
        data-index="${index}"
        aria-label="Aller au témoignage ${index + 1}"
        style="width: 0.75rem; height: 0.75rem; border-radius: 50%; border: 2px solid var(--color-primary); background: ${index === 0 ? 'var(--color-primary)' : 'transparent'}; cursor: pointer; transition: all 0.3s;"
      ></button>
    `).join('');
  }

  // Update slider position
  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    const dots = dotsContainer.querySelectorAll('.testimonial-dot');
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('is-active');
        dot.style.background = 'var(--color-primary)';
      } else {
        dot.classList.remove('is-active');
        dot.style.background = 'transparent';
      }
    });
  }

  // Go to specific slide
  function goToSlide(index) {
    currentIndex = index;
    if (currentIndex < 0) currentIndex = testimonialsData.length - 1;
    if (currentIndex >= testimonialsData.length) currentIndex = 0;
    updateSlider();
    resetAutoplay();
  }

  // Next slide
  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  // Previous slide
  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Event listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }

  // Dots click
  dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('testimonial-dot')) {
      const index = parseInt(e.target.getAttribute('data-index'));
      goToSlide(index);
    }
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
      nextSlide();
    } else if (touchEndX - touchStartX > swipeThreshold) {
      prevSlide();
    } else {
      startAutoplay();
    }
  }

  // Pause on hover
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Initialize
  renderTestimonials();
  renderDots();
  updateSlider();
  startAutoplay();
}
