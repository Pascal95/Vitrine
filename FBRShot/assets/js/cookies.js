/**
 * Cookies Consent Banner
 * RGPD/GDPR Compliant Cookie Management
 */

const CookieManager = {
  // Cookie names
  CONSENT_COOKIE: 'fbr_cookie_consent',
  CONSENT_DATE_COOKIE: 'fbr_cookie_consent_date',

  // Consent duration in days
  CONSENT_DURATION: 395, // 13 months (13 * 30.42 days)

  // Google Analytics ID - REPLACE WITH YOUR ACTUAL GA4 ID
  GA_ID: 'G-XXXXXXXXXX',

  /**
   * Initialize cookie manager
   */
  init() {
    // Check if consent has expired
    if (this.hasConsentExpired()) {
      this.clearConsent();
    }

    // Check if user has already made a choice
    const consent = this.getConsent();

    if (consent === null) {
      // Show banner if no consent found
      this.showBanner();
    } else if (consent.analytics) {
      // Load analytics if consent was given
      this.loadAnalytics();
    }

    // Expose function to reopen banner
    window.showCookieBanner = () => this.showBanner();
  },

  /**
   * Get current consent status
   * @returns {Object|null} Consent object or null if not set
   */
  getConsent() {
    const consentStr = this.getCookie(this.CONSENT_COOKIE);
    if (!consentStr) return null;

    try {
      return JSON.parse(consentStr);
    } catch (e) {
      return null;
    }
  },

  /**
   * Save consent preferences
   * @param {Object} preferences - User preferences
   */
  saveConsent(preferences) {
    const consent = {
      necessary: true, // Always true
      analytics: preferences.analytics || false,
      timestamp: Date.now()
    };

    this.setCookie(this.CONSENT_COOKIE, JSON.stringify(consent), this.CONSENT_DURATION);
    this.setCookie(this.CONSENT_DATE_COOKIE, new Date().toISOString(), this.CONSENT_DURATION);

    // Load or block analytics based on consent
    if (consent.analytics) {
      this.loadAnalytics();
    } else {
      this.blockAnalytics();
    }
  },

  /**
   * Check if consent has expired (13 months)
   */
  hasConsentExpired() {
    const consentDate = this.getCookie(this.CONSENT_DATE_COOKIE);
    if (!consentDate) return false;

    const consentTimestamp = new Date(consentDate).getTime();
    const now = Date.now();
    const thirteenMonths = this.CONSENT_DURATION * 24 * 60 * 60 * 1000;

    return (now - consentTimestamp) > thirteenMonths;
  },

  /**
   * Clear all consent cookies
   */
  clearConsent() {
    this.deleteCookie(this.CONSENT_COOKIE);
    this.deleteCookie(this.CONSENT_DATE_COOKIE);
  },

  /**
   * Show cookie consent banner
   */
  showBanner() {
    // Remove existing banner if any
    const existingBanner = document.getElementById('cookieBanner');
    if (existingBanner) {
      existingBanner.remove();
    }

    // Create banner HTML
    const banner = document.createElement('div');
    banner.id = 'cookieBanner';
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-banner-content">
        <div class="cookie-banner-text">
          <h3 class="cookie-banner-title">🍪 Gestion des cookies</h3>
          <p class="cookie-banner-description">
            Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.
            Les cookies nécessaires sont toujours activés. Vous pouvez choisir d'accepter ou refuser les cookies analytiques.
            <a href="politique-cookies.html" class="cookie-banner-link" target="_blank">En savoir plus</a>
          </p>
        </div>

        <div class="cookie-banner-actions">
          <button id="cookieAcceptAll" class="btn btn-primary">
            Tout accepter
          </button>
          <button id="cookieRejectAll" class="btn btn-ghost">
            Tout refuser
          </button>
          <button id="cookieCustomize" class="btn btn-outline">
            Personnaliser
          </button>
        </div>
      </div>

      <div id="cookieCustomPanel" class="cookie-custom-panel" style="display: none;">
        <div class="cookie-custom-content">
          <h4 class="cookie-custom-title">Personnaliser mes préférences</h4>

          <div class="cookie-category">
            <div class="cookie-category-header">
              <label class="cookie-switch">
                <input type="checkbox" checked disabled>
                <span class="cookie-slider"></span>
              </label>
              <div>
                <h5 class="cookie-category-name">Cookies nécessaires</h5>
                <p class="cookie-category-desc">
                  Requis pour le fonctionnement du site. Ne peuvent pas être désactivés.
                </p>
              </div>
            </div>
          </div>

          <div class="cookie-category">
            <div class="cookie-category-header">
              <label class="cookie-switch">
                <input type="checkbox" id="analyticsToggle">
                <span class="cookie-slider"></span>
              </label>
              <div>
                <h5 class="cookie-category-name">Cookies analytiques</h5>
                <p class="cookie-category-desc">
                  Nous aident à comprendre comment vous utilisez notre site et à l'améliorer (Google Analytics).
                </p>
              </div>
            </div>
          </div>

          <div class="cookie-custom-actions">
            <button id="cookieSavePreferences" class="btn btn-primary">
              Enregistrer mes choix
            </button>
            <button id="cookieBackToMain" class="btn btn-ghost">
              Retour
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    // Add event listeners
    this.attachBannerListeners();

    // Show banner with animation
    setTimeout(() => banner.classList.add('cookie-banner-visible'), 100);
  },

  /**
   * Hide cookie banner
   */
  hideBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      banner.classList.remove('cookie-banner-visible');
      setTimeout(() => banner.remove(), 300);
    }
  },

  /**
   * Attach event listeners to banner buttons
   */
  attachBannerListeners() {
    // Accept all
    document.getElementById('cookieAcceptAll')?.addEventListener('click', () => {
      this.saveConsent({ analytics: true });
      this.hideBanner();
    });

    // Reject all
    document.getElementById('cookieRejectAll')?.addEventListener('click', () => {
      this.saveConsent({ analytics: false });
      this.hideBanner();
    });

    // Show customization panel
    document.getElementById('cookieCustomize')?.addEventListener('click', () => {
      document.getElementById('cookieCustomPanel').style.display = 'block';
    });

    // Back to main panel
    document.getElementById('cookieBackToMain')?.addEventListener('click', () => {
      document.getElementById('cookieCustomPanel').style.display = 'none';
    });

    // Save custom preferences
    document.getElementById('cookieSavePreferences')?.addEventListener('click', () => {
      const analyticsEnabled = document.getElementById('analyticsToggle').checked;
      this.saveConsent({ analytics: analyticsEnabled });
      this.hideBanner();
    });
  },

  /**
   * Load Google Analytics
   */
  loadAnalytics() {
    // Check if already loaded
    if (window.gtag || document.getElementById('ga-script')) {
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.GA_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', this.GA_ID, {
      'anonymize_ip': true,
      'cookie_flags': 'SameSite=None;Secure'
    });

    console.log('Google Analytics loaded');
  },

  /**
   * Block/Remove Google Analytics
   */
  blockAnalytics() {
    // Remove GA script if exists
    const gaScript = document.getElementById('ga-script');
    if (gaScript) {
      gaScript.remove();
    }

    // Disable Google Analytics
    window[`ga-disable-${this.GA_ID}`] = true;

    // Clear GA cookies
    this.deleteCookie('_ga');
    this.deleteCookie('_gat');
    this.deleteCookie('_gid');

    console.log('Google Analytics blocked');
  },

  /**
   * Set a cookie
   * @param {string} name - Cookie name
   * @param {string} value - Cookie value
   * @param {number} days - Expiration in days
   */
  setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax;Secure`;
  },

  /**
   * Get a cookie value
   * @param {string} name - Cookie name
   * @returns {string|null} Cookie value or null
   */
  getCookie(name) {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length);
      }
    }
    return null;
  },

  /**
   * Delete a cookie
   * @param {string} name - Cookie name
   */
  deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => CookieManager.init());
} else {
  CookieManager.init();
}

// Export for module usage
export default CookieManager;
