/**
 * EN/DE copy, meta titles, and static UI translation via data-i18n.
 * Emits window event "hgstar-lang" after language toggle so catalog UI can refresh.
 */
var currentLanguage = 'en';
var translations = {};

async function loadTranslations() {
  try {
    const response = await fetch('./js/translations.json');
    translations = await response.json();
  } catch (error) {
    console.error('Failed to load translations:', error);
  }
}

function getTranslation(key, defaultValue) {
  if (defaultValue === undefined) defaultValue = '';
  if (!translations || !translations[currentLanguage]) return defaultValue;

  const keys = key.split('.');
  let value = translations[currentLanguage];
  for (const k of keys) {
    value = value[k];
    if (!value) return defaultValue;
  }
  return value || defaultValue;
}

function updateMetaTags() {
  const pageMeta = {
    index: {
      en: 'HG Star Technology | Industrial Fiber Laser Cutting, Welding & Cleaning Machines',
      de: 'HG Star Technologie | Industrielle Faserlaser zum Schneiden, Schweißen & Reinigen'
    },
    about: {
      en: 'About HG Star Technology | Laser Equipment Manufacturer',
      de: 'Über HG Star Technology | Lasertechnik Hersteller'
    },
    products: {
      en: 'Industrial Laser Machines | Product Catalog',
      de: 'Industrie-Lasersysteme | Produktkatalog'
    },
    contact: {
      en: 'Contact HG Star Technology | Request a Quote',
      de: 'Kontakt HG Star Technology | Angebot anfordern'
    },
    privacy: {
      en: 'Privacy Policy | HG Star Technology',
      de: 'Datenschutzerklärung | HG Star Technology'
    },
    legal: {
      en: 'Legal Notice | HG Star Technology',
      de: 'Impressum & AGB | HG Star Technology'
    },
    'plate-cutting': {
      en: 'Plate Cutting Catalog | Fiber Lasers | HG Star Technology',
      de: 'Blechschneiden Katalog | Faserlaser | HG Star Technology'
    },
    'tube-cutting': {
      en: 'Tube Cutting Catalog | CNC Lasers | HG Star Technology',
      de: 'Rohrschneiden Katalog | CNC-Laser | HG Star Technology'
    },
    'combined-machines': {
      en: 'Combination Machines Catalog | HG Star Technology',
      de: 'Kombimaschinen Katalog | HG Star Technology'
    },
    'laser-welding': {
      en: 'Laser Welding Systems Catalog | HG Star Technology',
      de: 'Laserschweißen Katalog | HG Star Technology'
    },
    'laser-cleaning': {
      en: 'Laser Cleaning Systems Catalog | HG Star Technology',
      de: 'Lasereinigung Katalog | HG Star Technology'
    },
    'laser-marking': {
      en: 'Laser Marking Machines Catalog | HG Star Technology',
      de: 'Lasermarkierung Katalog | HG Star Technology'
    }
  };

  const currentPage = window.location.pathname.split('/').pop().split('.')[0] || 'index';
  const pageTitle = pageMeta[currentPage]?.[currentLanguage] || pageMeta.index[currentLanguage];

  document.title = pageTitle;
  const titleEl = document.querySelector('title');
  if (titleEl) titleEl.textContent = pageTitle;

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', pageTitle);

  const metaDesc = document.querySelector('meta[name="description"]');
  const descText = metaDesc ? metaDesc.getAttribute('content') : '';
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && descText) ogDesc.setAttribute('content', descText);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc && descText) twDesc.setAttribute('content', descText);
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', pageTitle);
}

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.dataset.i18n;
    const keys = key.split('.');
    let text = translations[currentLanguage];

    for (const k of keys) {
      if (text && typeof text === 'object') {
        text = text[k];
      } else {
        text = null;
        break;
      }
    }

    if (text && el.dataset.i18nAttr) {
      el.setAttribute(el.dataset.i18nAttr, text);
    } else if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    }
  });

  const headerLogo = document.querySelector('.header-logo');
  if (headerLogo) {
    headerLogo.setAttribute(
      'aria-label',
      translations[currentLanguage]?.aria?.logoHome || 'HG Star Technology Home'
    );
  }

  const mainNav = document.querySelector('.main-nav');
  if (mainNav) {
    mainNav.setAttribute('aria-label', translations[currentLanguage]?.aria?.mainNav || 'Main navigation');
  }

  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu) {
    mobileMenu.setAttribute(
      'aria-label',
      translations[currentLanguage]?.aria?.mobileNav || 'Mobile navigation'
    );
  }

  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.setAttribute('aria-label', translations[currentLanguage]?.aria?.hamburger || 'Open menu');
  }

  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.setAttribute(
      'aria-label',
      translations[currentLanguage]?.aria?.themeToggle || 'Toggle dark mode'
    );
  }

  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.setAttribute('aria-label', translations[currentLanguage]?.aria?.closeModal || 'Close modal');
  }
}

function updateLanguageButton() {
  const btn = document.querySelector('.language-toggle');
  if (btn) {
    btn.textContent = currentLanguage === 'en' ? 'DE' : 'EN';
    const ariaLabel =
      currentLanguage === 'en'
        ? translations.en?.aria?.languageToggle
        : translations.de?.aria?.languageToggleDE;
    if (ariaLabel) {
      btn.setAttribute('aria-label', ariaLabel);
    }
  }
}

function initLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');

  if (urlLang && ['en', 'de'].includes(urlLang)) {
    currentLanguage = urlLang;
    localStorage.setItem('hgstar-language', currentLanguage);
  } else {
    const saved = localStorage.getItem('hgstar-language');
    if (saved) {
      currentLanguage = saved;
    } else {
      const browserLang = navigator.language.split('-')[0];
      currentLanguage = ['de', 'en'].includes(browserLang) ? browserLang : 'en';
      localStorage.setItem('hgstar-language', currentLanguage);
    }
  }

  document.documentElement.setAttribute('lang', currentLanguage);
  document.documentElement.setAttribute('data-lang', currentLanguage);
  updateMetaTags();
  applyTranslations();
  updateLanguageButton();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
  document.documentElement.setAttribute('lang', currentLanguage);
  document.documentElement.setAttribute('data-lang', currentLanguage);
  localStorage.setItem('hgstar-language', currentLanguage);
  updateMetaTags();
  applyTranslations();
  updateLanguageButton();
  document.dispatchEvent(new CustomEvent('hgstar-lang'));
}

window.toggleLanguage = toggleLanguage;
window.getTranslation = getTranslation;
