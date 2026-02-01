/* ========================================
   Pricing Module - FBR Shot
   ======================================== */

export function initPricing() {
  const pricingData = {
    particulier: [
      {
        name: 'Classic',
        price: 400,
        duration: '6 heures',
        features: [
          'Photobooth HD complet',
          'Interface tactile intuitive',
          'Impressions illimitées',
          'Galerie digitale avec QR code',
          'Livraison et installation',
          'Support technique 24/7'
        ],
        featured: false
      },
      {
        name: 'Premium',
        price: 700,
        duration: '12 heures',
        features: [
          'Tous les avantages Classic',
          'Durée étendue (12h)',
          'Accessoires thématiques premium',
          'Personnalisation avancée',
          'Album photo digital offert',
          'Récupération flexible'
        ],
        featured: true
      }
    ],
    entreprise: [
      {
        name: 'Corporate 1 jour',
        price: 1440,
        duration: '1 journée complète',
        features: [
          'Matériel professionnel HD',
          'Branding personnalisé inclus',
          'Galerie privée sécurisée',
          'Impressions illimitées',
          'Opérateur dédié sur place',
          'Rapport d\'analytics post-événement'
        ],
        featured: false
      },
      {
        name: 'Corporate 2 jours',
        price: 2160,
        duration: '2 journées',
        features: [
          'Tous les avantages Corporate',
          'Durée étendue (2 jours)',
          'Personnalisation multi-formats',
          'Export haute résolution',
          'Support prioritaire',
          'Solutions sur mesure'
        ],
        featured: true
      },
      {
        name: 'Business',
        price: 700,
        duration: 'Par mois',
        features: [
          'Accès mensuel au photobooth',
          'Idéal pour agences & event planners',
          'Maintenance incluse',
          'Formation utilisateur',
          'Support technique dédié',
          'Tarifs dégressifs pluriannuels'
        ],
        featured: false
      }
    ]
  };

  const pricingGrid = document.getElementById('pricingGrid');
  const toggleParticulier = document.getElementById('toggleParticulier');
  const toggleEntreprise = document.getElementById('toggleEntreprise');
  const calculator = document.getElementById('pricingCalculator');

  // Check if elements exist
  if (!pricingGrid) {
    console.error('❌ Pricing: pricingGrid element not found');
    return;
  }

  let currentCategory = 'particulier';

  // Render pricing cards
  function renderPricing(category) {
    const plans = pricingData[category];

    pricingGrid.innerHTML = plans.map(plan => `
      <div class="card pricing-card ${plan.featured ? 'is-featured' : ''}">
        <h3 class="pricing-card-title">${plan.name}</h3>
        <div class="pricing-card-price">
          <span class="pricing-card-price-currency">€</span>${plan.price}
        </div>
        <p class="pricing-card-duration">${plan.duration}</p>
        <ul class="pricing-card-features">
          ${plan.features.map(feature => `
            <li class="pricing-card-feature">${feature}</li>
          `).join('')}
        </ul>
        <a href="#contact" class="btn ${plan.featured ? 'btn-primary' : 'btn-outline'}" style="width: 100%;">
          Demander un devis
        </a>
      </div>
    `).join('');

    // Trigger animation manually for dynamically generated cards
    requestAnimationFrame(() => {
      const cards = pricingGrid.querySelectorAll('.pricing-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);
      });
    });
  }

  // Toggle between categories
  function toggleCategory(category) {
    currentCategory = category;
    renderPricing(category);

    // Update toggle buttons
    if (category === 'particulier') {
      toggleParticulier.classList.add('is-active', 'btn-primary');
      toggleParticulier.classList.remove('btn-ghost');
      toggleEntreprise.classList.remove('is-active', 'btn-primary');
      toggleEntreprise.classList.add('btn-ghost');
    } else {
      toggleEntreprise.classList.add('is-active', 'btn-primary');
      toggleEntreprise.classList.remove('btn-ghost');
      toggleParticulier.classList.remove('is-active', 'btn-primary');
      toggleParticulier.classList.add('btn-ghost');
    }
  }

  // Pricing calculator
  function initCalculator() {
    if (!calculator) return;

    const baseFormula = document.getElementById('baseFormula');
    const optionCheckboxes = calculator.querySelectorAll('input[type="checkbox"]');
    const totalPriceElement = document.getElementById('totalPrice');

    function calculateTotal() {
      let total = parseInt(baseFormula.value);

      optionCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
          total += parseInt(checkbox.value);
        }
      });

      // Animate the price change
      animatePrice(totalPriceElement, total);
    }

    function animatePrice(element, newPrice) {
      const currentPrice = parseInt(element.textContent.replace('€', '')) || 0;
      const increment = (newPrice - currentPrice) / 20;
      let current = currentPrice;
      let counter = 0;

      const animate = () => {
        current += increment;
        counter++;

        if (counter < 20) {
          element.textContent = Math.round(current) + '€';
          requestAnimationFrame(animate);
        } else {
          element.textContent = newPrice + '€';
        }
      };

      animate();
    }

    // Event listeners
    baseFormula.addEventListener('change', calculateTotal);
    optionCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', calculateTotal);
    });

    // Initialize with default value
    calculateTotal();
  }

  // Event listeners
  if (toggleParticulier) {
    toggleParticulier.addEventListener('click', () => toggleCategory('particulier'));
  }

  if (toggleEntreprise) {
    toggleEntreprise.addEventListener('click', () => toggleCategory('entreprise'));
  }

  // Initialize
  renderPricing(currentCategory);
  initCalculator();
}
