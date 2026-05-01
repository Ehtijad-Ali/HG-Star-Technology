/**
 * Navigation: mobile menu, mobile accordions, desktop dropdowns.
 */

function setMobileMenuOpen(open) {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  console.log('[nav] setMobileMenuOpen', { open });

  mobileMenu.classList.toggle('is-open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';

  // Inline-style fallback: ensures visibility even if CSS is overridden.
  // (Some mobile browsers / cached CSS can keep display:none despite class changes.)
  if (open) {
    mobileMenu.style.display = 'block';
    mobileMenu.style.visibility = 'visible';
    mobileMenu.style.opacity = '1';
  } else {
    mobileMenu.style.opacity = '';
    mobileMenu.style.visibility = '';
    mobileMenu.style.display = '';
  }

  if (open) {
    const first = mobileMenu.querySelector('a, button');
    if (first) first.focus();
  } else {
    hamburger.focus();
  }
}

function closeAllDropdowns() {
  document.querySelectorAll('.nav-item.has-dropdown.is-open').forEach((item) => {
    const trigger = item.querySelector('.nav-trigger');
    item.classList.remove('is-open');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  });
}

function initDesktopDropdowns() {
  const items = document.querySelectorAll('.nav-item.has-dropdown');
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector('.nav-trigger');
    const menu = item.querySelector('.nav-dropdown');
    if (!trigger || !menu) return;
    let closeTimer;

    const open = () => {
      clearTimeout(closeTimer);
      closeAllDropdowns();
      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    };

    const close = () => {
      item.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    };

    const scheduleClose = () => {
      closeTimer = setTimeout(close, 120);
    };

    // Hover: open immediately, close with short delay so cursor can move to menu
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', scheduleClose);

    // Keep click/keyboard working for accessibility
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      item.classList.contains('is-open') ? close() : open();
    });

    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { close(); trigger.focus(); }
      if (e.key === 'ArrowDown') {
        open();
        const first = menu.querySelector('a');
        if (first) first.focus();
      }
    });

    menu.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { close(); trigger.focus(); }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item.has-dropdown')) closeAllDropdowns();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllDropdowns();
  });
}

function initMobileAccordions() {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!mobileMenu) return;

  const accordions = mobileMenu.querySelectorAll('.mnav-accordion');
  accordions.forEach((btn) => {
    const panelId = btn.getAttribute('aria-controls');
    const panel = panelId ? mobileMenu.querySelector(`#${panelId}`) : null;
    if (!panel) return;

    btn.addEventListener('click', () => {
      const willOpen = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(willOpen));
      panel.classList.toggle('is-open', willOpen);
    });
  });
}

function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) {
    console.warn('Hamburger or mobile menu not found');
    return;
  }

  console.log('[nav] initMobileNav ok', { hamburger, mobileMenu });

  // Ensure a known closed baseline
  mobileMenu.setAttribute('aria-hidden', 'true');
  mobileMenu.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');

  hamburger.addEventListener('click', (e) => {
    console.log('[nav] hamburger click');
    e.stopPropagation();
    const willOpen = !mobileMenu.classList.contains('is-open');
    setMobileMenuOpen(willOpen);
  });

  // Close when tapping outside the menu (mobile UX).
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('is-open')) return;
    const insideMenu = e.target.closest('.mobile-menu');
    const insideHamburger = e.target.closest('.hamburger');
    if (!insideMenu && !insideHamburger) setMobileMenuOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      setMobileMenuOpen(false);
    }
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMobileMenuOpen(false));
  });

  initMobileAccordions();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initDesktopDropdowns();
  });
} else {
  // DOM is already loaded
  initMobileNav();
  initDesktopDropdowns();
}
