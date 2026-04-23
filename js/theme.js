/**
 * Light / dark theme (persists in localStorage).
 */
function initTheme() {
  const saved = localStorage.getItem('hgstar-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
  
  // Set initial logos - with a small delay to ensure DOM is ready
  setTimeout(() => {
    const logoSrc = theme === 'dark' ? 'img/logo/black.webp' : 'img/logo/white.webp';
    const headerLogo = document.getElementById('brand-logo-img');
    const footerLogos = document.querySelectorAll('.footer-brand-logo-theme');
    
    if (headerLogo) {
      headerLogo.src = logoSrc;
    }
    footerLogos.forEach(logo => logo.src = logoSrc);
  }, 0);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('hgstar-theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  
  // Switch logos based on theme
  const headerLogo = document.getElementById('brand-logo-img');
  const footerLogos = document.querySelectorAll('.footer-brand-logo-theme');
  const logoSrc = theme === 'dark' ? 'img/logo/black.webp' : 'img/logo/white.webp';
  
  if (headerLogo) headerLogo.src = logoSrc;
  footerLogos.forEach(logo => logo.src = logoSrc);
}

window.toggleTheme = toggleTheme;
