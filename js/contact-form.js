/**
 * Quote form: client-side validation, honeypot, demo submit (connect action to your backend / CRM).
 */
(function () {
  const MSGS = {
    en: {
      firstName: 'Please enter your first name.',
      lastName: 'Please enter your last name.',
      company: 'Please enter your company name.',
      email: 'Please enter a valid business email.',
      productRange: 'Please select a product range.',
      requirements: 'Please describe your inquiry in at least 20 characters.',
      consent: 'Please confirm consent to process your data for this request.',
      thanks:
        'Thank you for your inquiry. Our sales engineering team will respond within 1–2 business days. Note: this form is not yet connected to a live backend — connect it to your CRM or mail API for production.'
    },
    de: {
      firstName: 'Bitte geben Sie Ihren Vornamen ein.',
      lastName: 'Bitte geben Sie Ihren Nachnamen ein.',
      company: 'Bitte geben Sie Ihren Firmennamen ein.',
      email: 'Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.',
      productRange: 'Bitte wählen Sie einen Produktbereich.',
      requirements: 'Bitte beschreiben Sie Ihre Anfrage in mindestens 20 Zeichen.',
      consent: 'Bitte bestätigen Sie die Einwilligung zur Datenverarbeitung für diese Anfrage.',
      thanks:
        'Vielen Dank für Ihre Anfrage. Unser Vertrieb/Technik-Team meldet sich in der Regel innerhalb von 1–2 Werktagen. Hinweis: Dieses Formular ist noch nicht an ein Live-Backend angebunden — für den Produktivbetrieb an CRM oder Mail-API anbinden.'
    }
  };

  function lang() {
    return document.documentElement.getAttribute('lang') === 'de' ? 'de' : 'en';
  }

  function t(key) {
    return MSGS[lang()][key] || MSGS.en[key];
  }

  function showFieldError(input, message) {
    input.setAttribute('aria-invalid', 'true');
    const wrap = input.closest('.form-group') || input.closest('.form-consent');
    if (!wrap) return;
    let err = wrap.querySelector('.field-error');
    if (!err) {
      err = document.createElement('p');
      err.className = 'field-error';
      err.setAttribute('role', 'alert');
      wrap.appendChild(err);
    }
    err.textContent = message;
  }

  function clearFieldError(input) {
    input.removeAttribute('aria-invalid');
    const wrap = input.closest('.form-group') || input.closest('.form-consent');
    if (!wrap) return;
    const err = wrap.querySelector('.field-error');
    if (err) err.remove();
  }

  function validateEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quoteForm');
    if (!form) return;

    const params = new URLSearchParams(window.location.search);
    const model = params.get('model');
    const topic = params.get('topic');
    const req = document.getElementById('requirements');
    if (model && req && !req.value.trim()) {
      req.value =
        (lang() === 'de'
          ? 'Ich interessiere mich für ein Angebot zur Maschine: '
          : 'I am interested in a quotation for model: ') +
        model +
        (lang() === 'de'
          ? '. Bitte Konfigurationsoptionen, Lieferzeit und Versandbedingungen mitteilen.'
          : '. Please provide configuration options, lead time and shipping terms.');
    }
    if (topic === 'documentation' && req && !req.value.trim()) {
      req.value =
        lang() === 'de'
          ? 'Bitte senden Sie die aktuellen Produktbroschüren und technischen Datenblätter zur Auswertung.'
          : 'Please send the latest product brochures and technical datasheets for our evaluation.';
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      ['firstName', 'lastName', 'company', 'email', 'productRange', 'requirements', 'consent'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) clearFieldError(el);
      });

      const hp = form.querySelector('[name="website_hp"]');
      if (hp && hp.value.trim() !== '') {
        return;
      }

      const firstName = document.getElementById('firstName');
      const lastName = document.getElementById('lastName');
      const company = document.getElementById('company');
      const email = document.getElementById('email');
      const productRange = document.getElementById('productRange');
      const requirements = document.getElementById('requirements');
      const consent = document.getElementById('consent');

      let ok = true;
      if (!firstName.value.trim()) {
        showFieldError(firstName, t('firstName'));
        ok = false;
      }
      if (!lastName.value.trim()) {
        showFieldError(lastName, t('lastName'));
        ok = false;
      }
      if (!company.value.trim()) {
        showFieldError(company, t('company'));
        ok = false;
      }
      if (!email.value.trim() || !validateEmail(email.value.trim())) {
        showFieldError(email, t('email'));
        ok = false;
      }
      if (!productRange.value) {
        showFieldError(productRange, t('productRange'));
        ok = false;
      }
      if (!requirements.value.trim() || requirements.value.trim().length < 20) {
        showFieldError(requirements, t('requirements'));
        ok = false;
      }
      if (consent && !consent.checked) {
        showFieldError(consent, t('consent'));
        ok = false;
      }

      if (!ok) return;

      const status = document.getElementById('formStatus');
      if (status) {
        status.textContent = t('thanks');
        status.hidden = false;
        status.focus();
      } else {
        window.alert(t('thanks'));
      }
      form.reset();
    });
  });
})();
