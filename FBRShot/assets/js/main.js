/* ========================================
   Main JavaScript - FBR Shot
   Site Vitrine Photobooth
   ======================================== */

// Import modules
import { initNavigation } from './modules/navigation.js';
import { initAnimations } from './modules/animations.js';
import { initGallery } from './modules/gallery.js';
import { initTestimonials } from './modules/testimonials.js';
import { initFAQ } from './modules/faq.js';
import { initPricing } from './modules/pricing.js';
import { initForms } from './modules/forms.js';
import { initBlog } from './modules/blog.js';

// DOM Ready
function domReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

// Initialize all modules
function init() {
  console.log('🚀 FBR Shot - Initializing...');

  try {
    // Core functionality
    initNavigation();
    initAnimations();

    // Features
    initGallery();
    initTestimonials();
    initFAQ();
    initPricing();
    initForms();
    initBlog();

    console.log('✅ FBR Shot - All modules initialized successfully');
  } catch (error) {
    console.error('❌ FBR Shot - Initialization error:', error);
  }
}

// Start the application
domReady(init);

// Google Analytics (replace with your tracking ID)
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'G-XXXXXXXXXX');
