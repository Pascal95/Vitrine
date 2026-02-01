/* ========================================
   Gallery Module - FBR Shot
   ======================================== */

export function initGallery() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const galleryItems = document.querySelectorAll('#portfolioGrid [data-category]');
  const loadMoreBtn = document.getElementById('loadMore');

  let currentFilter = 'all';

  // Filter gallery items
  function filterGallery(filter) {
    currentFilter = filter;

    galleryItems.forEach((item, index) => {
      const category = item.getAttribute('data-category');
      const shouldShow = filter === 'all' || category === filter;

      if (shouldShow) {
        item.style.display = 'block';
        // Add animation
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 50);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  }

  // Update active filter button
  function updateActiveButton(activeButton) {
    filterButtons.forEach(btn => {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-selected', 'false');
    });
    activeButton.classList.add('is-active');
    activeButton.setAttribute('aria-selected', 'true');
  }

  // Event listeners for filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      filterGallery(filter);
      updateActiveButton(button);
    });
  });

  // Load more functionality (placeholder)
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      // In a real implementation, this would load more images via AJAX
      alert('Fonctionnalité à venir : chargement de plus d\'images');
    });
  }

  // Lightbox functionality
  function initLightbox() {
    const galleryImages = document.querySelectorAll('#portfolioGrid img');

    galleryImages.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        openLightbox(img.src, img.alt);
      });
    });
  }

  function openLightbox(src, alt) {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 2rem;
      animation: fadeIn 0.3s ease-out;
    `;

    // Create image
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      animation: scaleIn 0.3s ease-out;
    `;

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.setAttribute('aria-label', 'Fermer');
    closeBtn.style.cssText = `
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 3rem;
      height: 3rem;
      border: none;
      background: white;
      color: black;
      font-size: 2rem;
      cursor: pointer;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
    `;

    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.transform = 'scale(1.1)';
    });

    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.transform = 'scale(1)';
    });

    // Close lightbox
    const closeLightbox = () => {
      lightbox.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(() => {
        document.body.removeChild(lightbox);
        document.body.style.overflow = '';
      }, 300);
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // ESC key to close
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Append elements
    lightbox.appendChild(img);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
  }

  // Initialize
  initLightbox();
}
