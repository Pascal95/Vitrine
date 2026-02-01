/* ========================================
   FAQ Module - FBR Shot
   ======================================== */

export function initFAQ() {
  const faqData = [
    {
      question: 'Comment fonctionne la location du photobooth ?',
      answer: 'La location est simple : vous choisissez votre formule, nous livrons et installons le photobooth à votre événement. Nous configurons tout et nous occupons de la récupération après l\'événement.'
    },
    {
      question: 'Quelle est la durée minimale de location ?',
      answer: 'Notre formule Classic propose une location de 6 heures minimum. Pour des durées plus longues ou des besoins spécifiques, consultez nos formules Premium et Corporate.'
    },
    {
      question: 'Le photobooth nécessite-t-il une connexion Internet ?',
      answer: 'Non, le photobooth fonctionne de manière autonome. Cependant, une connexion Internet est recommandée pour activer la galerie en ligne et le partage instantané sur les réseaux sociaux.'
    },
    {
      question: 'Combien d\'impressions sont incluses ?',
      answer: 'Nos formules incluent un nombre illimité d\'impressions pendant la durée de la location. Vous pouvez également commander des tirages supplémentaires ou désactiver l\'impression si vous préférez uniquement la galerie digitale.'
    },
    {
      question: 'Puis-je personnaliser les photos avec mon logo ?',
      answer: 'Absolument ! Toutes nos formules incluent la personnalisation : ajout de votre logo, texte personnalisé, choix des filtres et des cadres. L\'option Branding (+50€) offre une personnalisation avancée.'
    },
    {
      question: 'Quelle est la zone géographique couverte ?',
      answer: 'Nous intervenons partout en France. Les frais de déplacement peuvent s\'appliquer selon la distance. Contactez-nous pour un devis personnalisé.'
    },
    {
      question: 'Y a-t-il un opérateur sur place pendant l\'événement ?',
      answer: 'Le photobooth est conçu pour être totalement autonome avec une interface intuitive. Cependant, un opérateur peut être ajouté sur demande pour les événements de grande envergure (option disponible sur devis).'
    },
    {
      question: 'Comment mes invités accèdent-ils aux photos ?',
      answer: 'Les photos sont accessibles via un QR code unique. Vos invités scannent le code et accèdent instantanément à la galerie pour télécharger et partager leurs photos sur les réseaux sociaux.'
    },
    {
      question: 'Puis-je annuler ou modifier ma réservation ?',
      answer: 'Oui, les modifications sont possibles jusqu\'à 7 jours avant l\'événement. Les annulations sont acceptées avec un remboursement partiel selon nos CGV. Consultez nos Conditions Générales pour plus de détails.'
    },
    {
      question: 'Le photobooth fonctionne-t-il en extérieur ?',
      answer: 'Oui, notre photobooth peut fonctionner en extérieur sous réserve de conditions météorologiques favorables. Un abri (barnum, tente) est recommandé pour protéger le matériel et garantir la meilleure expérience.'
    },
    {
      question: 'Quels accessoires sont inclus ?',
      answer: 'Nous fournissons une sélection d\'accessoires amusants (chapeaux, lunettes, pancartes) selon votre thématique. Vous pouvez également apporter vos propres accessoires personnalisés.'
    },
    {
      question: 'Comment effectuer le paiement ?',
      answer: 'Un acompte de 30% est demandé à la réservation, le solde étant dû 7 jours avant l\'événement. Nous acceptons les virements bancaires, cartes bancaires et chèques.'
    }
  ];

  const accordion = document.getElementById('faqAccordion');
  if (!accordion) return;

  // Render FAQ items
  function renderFAQ() {
    accordion.innerHTML = faqData.map((item, index) => `
      <div class="faq-item" style="margin-bottom: var(--spacing-md);">
        <button
          class="faq-question"
          aria-expanded="false"
          aria-controls="faq-answer-${index}"
          style="width: 100%; text-align: left; padding: var(--spacing-lg); background: var(--color-white); border: 2px solid var(--color-gray-300); border-radius: var(--radius-md); font-weight: var(--font-weight-semibold); font-size: var(--font-size-lg); cursor: pointer; transition: all var(--transition-fast); display: flex; justify-content: space-between; align-items: center;"
        >
          <span>${item.question}</span>
          <span class="faq-icon" style="transition: transform var(--transition-normal); font-size: var(--font-size-2xl); color: var(--color-primary);">+</span>
        </button>
        <div
          class="faq-answer"
          id="faq-answer-${index}"
          style="max-height: 0; overflow: hidden; transition: max-height var(--transition-normal);"
        >
          <div style="padding: var(--spacing-lg); color: var(--color-text-secondary); line-height: var(--line-height-relaxed); border: 2px solid var(--color-gray-300); border-top: none; border-radius: 0 0 var(--radius-md) var(--radius-md);">
            ${item.answer}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Toggle FAQ item
  function toggleFAQ(button, answer, icon) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      // Close
      button.setAttribute('aria-expanded', 'false');
      button.style.borderRadius = 'var(--radius-md)';
      answer.style.maxHeight = '0';
      icon.textContent = '+';
      icon.style.transform = 'rotate(0deg)';
    } else {
      // Close all others first
      const allQuestions = accordion.querySelectorAll('.faq-question');
      const allAnswers = accordion.querySelectorAll('.faq-answer');
      const allIcons = accordion.querySelectorAll('.faq-icon');

      allQuestions.forEach((q, i) => {
        q.setAttribute('aria-expanded', 'false');
        q.style.borderRadius = 'var(--radius-md)';
        allAnswers[i].style.maxHeight = '0';
        allIcons[i].textContent = '+';
        allIcons[i].style.transform = 'rotate(0deg)';
      });

      // Open
      button.setAttribute('aria-expanded', 'true');
      button.style.borderRadius = 'var(--radius-md) var(--radius-md) 0 0';
      answer.style.maxHeight = answer.scrollHeight + 'px';
      icon.textContent = '−';
      icon.style.transform = 'rotate(180deg)';
    }
  }

  // Event delegation
  accordion.addEventListener('click', (e) => {
    const button = e.target.closest('.faq-question');
    if (!button) return;

    const answer = button.nextElementSibling;
    const icon = button.querySelector('.faq-icon');
    toggleFAQ(button, answer, icon);
  });

  // Keyboard navigation
  accordion.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const button = e.target.closest('.faq-question');
      if (button) {
        e.preventDefault();
        button.click();
      }
    }
  });

  // Initialize
  renderFAQ();

  // Update max-height on window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const expandedAnswers = accordion.querySelectorAll('.faq-answer');
      expandedAnswers.forEach(answer => {
        const button = answer.previousElementSibling;
        if (button.getAttribute('aria-expanded') === 'true') {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }, 250);
  });
}
