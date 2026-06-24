/* ========================================
   Pricing Module - FBR Shot
   ======================================== */

export function initPricing() {
  const pricingData = {
    particulier: [
      {
        name: 'Essentiel',
        price: 300,
        duration: '3 heures',
        features: [
          'Photobooth HD complet',
          'Interface tactile intuitive',
          'Impressions illimitées',
          'Galerie digitale QR code',
          'Livraison & installation',
          'Support technique inclus'
        ],
        featured: false
      },
      {
        name: 'Classic',
        price: 500,
        duration: '6 heures',
        features: [
          'Tout le pack Essentiel',
          'Durée étendue (6h)',
          'Accessoires thématiques',
          'Personnalisation cadre',
          'Album digital offert',
          'Récupération flexible'
        ],
        featured: false
      },
      {
        name: 'Premium',
        price: 800,
        duration: '12 heures',
        features: [
          'Tout le pack Classic',
          'Couverture journée complète',
          'Branding personnalisé inclus',
          'Galerie privée sécurisée',
          'Export haute résolution',
          'Support prioritaire 24/7'
        ],
        featured: true
      }
    ],
    entreprise: [
      {
        name: 'Corporate 1 jour',
        price: 1200,
        duration: '1 journée',
        features: [
          'Matériel professionnel HD',
          'Branding & logo personnalisé',
          'Galerie privée sécurisée',
          'Impressions illimitées',
          'Opérateur dédié sur place',
          'Rapport analytics post-event'
        ],
        featured: false
      },
      {
        name: 'Corporate 2 jours',
        price: 1900,
        duration: '2 journées',
        features: [
          'Tous les avantages Corporate',
          'Multi-formats personnalisés',
          'Export haute résolution',
          'Support technique prioritaire',
          'Debrief & rapport complet',
          'Solutions sur mesure'
        ],
        featured: true
      }
    ]
  };

  const pricingGrid = document.getElementById('pricingGrid');
  const toggleParticulier = document.getElementById('toggleParticulier');
  const toggleEntreprise = document.getElementById('toggleEntreprise');
  const calculator = document.getElementById('pricingCalculator');

  if (!pricingGrid) return;

  let currentCategory = 'particulier';

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
          ${plan.features.map(f => `<li class="pricing-card-feature">${f}</li>`).join('')}
        </ul>
        <a href="#contact" class="btn ${plan.featured ? 'btn-primary' : 'btn-outline'}" style="width: 100%;">
          Demander un devis
        </a>
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

  function toggleCategory(category) {
    currentCategory = category;
    renderPricing(category);

    if (category === 'particulier') {
      toggleParticulier.classList.add('is-active');
      toggleParticulier.classList.remove('btn-ghost');
      toggleEntreprise.classList.remove('is-active');
      toggleEntreprise.classList.add('btn-ghost');
    } else {
      toggleEntreprise.classList.add('is-active');
      toggleEntreprise.classList.remove('btn-ghost');
      toggleParticulier.classList.remove('is-active');
      toggleParticulier.classList.add('btn-ghost');
    }
  }

  function initCalculator() {
    if (!calculator) return;

    const baseFormula = document.getElementById('baseFormula');
    const optionCheckboxes = calculator.querySelectorAll('input[type="checkbox"]');
    const totalPriceElement = document.getElementById('totalPrice');

    function calculateTotal() {
      let total = parseInt(baseFormula.value);
      optionCheckboxes.forEach(cb => {
        if (cb.checked) total += parseInt(cb.value);
      });
      animatePrice(totalPriceElement, total);
    }

    function animatePrice(el, newPrice) {
      const current = parseInt(el.textContent.replace('€', '')) || 0;
      const increment = (newPrice - current) / 20;
      let val = current;
      let n = 0;
      const go = () => {
        val += increment;
        n++;
        if (n < 20) { el.textContent = Math.round(val) + '€'; requestAnimationFrame(go); }
        else el.textContent = newPrice + '€';
      };
      go();
    }

    baseFormula.addEventListener('change', calculateTotal);
    optionCheckboxes.forEach(cb => cb.addEventListener('change', calculateTotal));
    calculateTotal();
  }

  if (toggleParticulier) toggleParticulier.addEventListener('click', () => toggleCategory('particulier'));
  if (toggleEntreprise) toggleEntreprise.addEventListener('click', () => toggleCategory('entreprise'));

  renderPricing(currentCategory);
  initCalculator();
}
