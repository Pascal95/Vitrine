/* ========================================
   Forms Module - FBR Shot
   ======================================== */

export function initForms() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const formFields = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    eventType: document.getElementById('eventType'),
    eventDate: document.getElementById('eventDate'),
    message: document.getElementById('message'),
    rgpd: document.getElementById('rgpd')
  };

  const formFeedback = document.getElementById('formFeedback');

  // Validation rules
  const validationRules = {
    name: {
      required: true,
      minLength: 2,
      message: 'Veuillez entrer un nom valide (minimum 2 caractères)'
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Veuillez entrer une adresse email valide'
    },
    phone: {
      required: false,
      pattern: /^[0-9+\s()-]{10,}$/,
      message: 'Veuillez entrer un numéro de téléphone valide'
    },
    eventType: {
      required: true,
      message: 'Veuillez sélectionner un type d\'événement'
    },
    message: {
      required: true,
      minLength: 10,
      message: 'Veuillez entrer un message (minimum 10 caractères)'
    },
    rgpd: {
      required: true,
      message: 'Vous devez accepter la politique de confidentialité'
    }
  };

  // Validate single field
  function validateField(fieldName) {
    const field = formFields[fieldName];
    const rules = validationRules[fieldName];

    if (!field || !rules) return true;

    const value = field.type === 'checkbox' ? field.checked : field.value.trim();
    const errorElement = field.parentElement.querySelector('.form-message-error');

    // Required check
    if (rules.required && !value) {
      showError(field, errorElement, rules.message);
      return false;
    }

    // Skip other validations if field is optional and empty
    if (!rules.required && !value) {
      clearError(field, errorElement);
      return true;
    }

    // Pattern check
    if (rules.pattern && !rules.pattern.test(value)) {
      showError(field, errorElement, rules.message);
      return false;
    }

    // Min length check
    if (rules.minLength && value.length < rules.minLength) {
      showError(field, errorElement, rules.message);
      return false;
    }

    // Checkbox check
    if (field.type === 'checkbox' && rules.required && !value) {
      showError(field, errorElement, rules.message);
      return false;
    }

    // Validation passed
    clearError(field, errorElement);
    return true;
  }

  // Show error
  function showError(field, errorElement, message) {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');

    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'flex';
    }
  }

  // Clear error
  function clearError(field, errorElement) {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');

    if (errorElement) {
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
  }

  // Validate all fields
  function validateForm() {
    let isValid = true;

    Object.keys(validationRules).forEach(fieldName => {
      if (!validateField(fieldName)) {
        isValid = false;
      }
    });

    return isValid;
  }

  // Show form feedback
  function showFeedback(type, message) {
    formFeedback.className = `form-message form-message-${type}`;
    formFeedback.innerHTML = `
      <span style="font-size: var(--font-size-xl); margin-right: var(--spacing-sm);">
        ${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
      </span>
      <span>${message}</span>
    `;
    formFeedback.style.display = 'flex';
    formFeedback.style.padding = 'var(--spacing-md)';
    formFeedback.style.borderRadius = 'var(--radius-md)';
    formFeedback.style.backgroundColor = type === 'success' ? '#d1fae5' : type === 'error' ? '#fee2e2' : '#e0e7ff';
  }

  // Submit form
  function handleSubmit(e) {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      showFeedback('error', 'Veuillez corriger les erreurs dans le formulaire.');
      return;
    }

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.classList.add('is-loading');
    submitButton.textContent = 'Envoi en cours...';

    // Submit the form to Formspree
    // The form will redirect to the thank you page (_next parameter in the form)
    contactForm.submit();
  }

  // Real-time validation on blur
  Object.keys(formFields).forEach(fieldName => {
    const field = formFields[fieldName];
    if (field) {
      field.addEventListener('blur', () => validateField(fieldName));
      field.addEventListener('input', () => {
        // Clear error on input if field was invalid
        if (field.classList.contains('is-invalid')) {
          validateField(fieldName);
        }
      });
    }
  });

  // Form submission
  contactForm.addEventListener('submit', handleSubmit);
}
