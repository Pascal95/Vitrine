/* ========================================
   Pricing Module - FBR Shot
   ======================================== */

export function initPricing() {
  // Elegant inline icons (stroke-based, inherit currentColor)
  const icons = {
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2L8 5h8l1.5 2h2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z"></path><circle cx="12" cy="13" r="3.2"></circle></svg>',
    print: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9V4h10v5"></path><path d="M7 18H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"></path><rect x="7" y="15" width="10" height="5" rx="1"></rect></svg>',
    props: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z"></path><path d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z"></path></svg>',
    frame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="9" cy="9" r="1.6"></circle><path d="M21 16l-4.5-4.5L7 21"></path></svg>',
    gallery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v9"></path><path d="M8.5 8.5L12 12l3.5-3.5"></path><path d="M4 14v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"></path></svg>',
    usb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V8"></path><path d="M9 11l3-3 3 3"></path><rect x="9" y="3" width="6" height="5" rx="1"></rect><circle cx="12" cy="20" r="1.4"></circle></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h11v9H3z"></path><path d="M14 10h4l3 3v3h-7z"></path><circle cx="7" cy="18" r="1.6"></circle><circle cx="17.5" cy="18" r="1.6"></circle></svg>'
  };

  const offers = [
    {
      name: 'Essentiel',
      price: 300,
      tagline: 'Idéale pour les anniversaires, baptêmes et petits événements.',
      features: [
        { icon: 'clock', text: '2 heures de présence' },
        { icon: 'camera', text: 'Photos numériques illimitées' },
        { icon: 'print', text: 'Impressions illimitées' },
        { icon: 'props', text: 'Accessoires inclus' },
        { icon: 'frame', text: 'Cadre photo personnalisé' },
        { icon: 'gallery', text: 'Galerie en ligne pour télécharger toutes les photos' },
        { icon: 'truck', text: 'Installation et démontage inclus' }
      ],
      featured: false
    },
    {
      name: 'Classic',
      price: 390,
      tagline: 'Le meilleur équilibre entre durée et budget.',
      features: [
        { icon: 'clock', text: '3 heures de présence' },
        { icon: 'camera', text: 'Photos numériques illimitées' },
        { icon: 'print', text: 'Impressions illimitées' },
        { icon: 'props', text: 'Accessoires inclus' },
        { icon: 'frame', text: 'Cadre photo personnalisé' },
        { icon: 'gallery', text: 'Galerie en ligne pour télécharger toutes les photos' },
        { icon: 'truck', text: 'Installation et démontage inclus' }
      ],
      featured: true
    },
    {
      name: 'Premium',
      price: 490,
      tagline: 'Pour profiter du photobooth tout au long de votre événement.',
      features: [
        { icon: 'clock', text: '4 heures de présence' },
        { icon: 'camera', text: 'Photos numériques illimitées' },
        { icon: 'print', text: 'Impressions illimitées' },
        { icon: 'props', text: 'Accessoires inclus' },
        { icon: 'frame', text: 'Cadre photo personnalisé' },
        { icon: 'gallery', text: 'Galerie en ligne pour télécharger toutes les photos' },
        { icon: 'usb', text: 'Clé USB contenant l\'ensemble des photos' },
        { icon: 'truck', text: 'Installation et démontage inclus' }
      ],
      featured: false
    }
  ];

  const pricingGrid = document.getElementById('pricingGrid');
  if (!pricingGrid) return;

  function renderPricing() {
    pricingGrid.innerHTML = offers.map(plan => `
      <div class="card pricing-card ${plan.featured ? 'is-featured' : ''}">
        <h3 class="pricing-card-title">${plan.name}</h3>
        <div class="pricing-card-price">
          <span class="pricing-card-price-currency">€</span>${plan.price}
        </div>
        <p class="pricing-card-tagline">${plan.tagline}</p>
        <ul class="pricing-card-features">
          ${plan.features.map(f => `
            <li class="pricing-card-feature">
              <span class="pricing-card-feature-icon" aria-hidden="true">${icons[f.icon] || ''}</span>
              <span>${f.text}</span>
            </li>
          `).join('')}
        </ul>
        <a href="#contact" class="btn btn-primary pricing-card-cta">Réserver maintenant</a>
      </div>
    `).join('');

    requestAnimationFrame(() => {
      pricingGrid.querySelectorAll('.pricing-card').forEach((card, i) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 100);
      });
    });
  }

  renderPricing();
}
