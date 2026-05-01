/* ──────────────────────────────────────────────────────
   THEME MANAGEMENT WITH VIEW TRANSITIONS API
   Smooth circular reveal animation for theme switching
   ────────────────────────────────────────────────────── */

const html = document.documentElement;

/**
 * Initialize theme from localStorage or system preference
 * Applies theme without animation on first load
 */
function initTheme() {
  const saved = localStorage.getItem('hgstar-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved ? saved === 'dark' : prefersDark;
  
  if (isDark) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  
  updateThemeIcon(isDark ? 'dark' : 'light');
}

/**
 * Toggle theme with smooth View Transitions API animation
 * Falls back to simple toggle for unsupported browsers
 */
function toggleTheme() {
  const isDark = html.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  
  // Check if View Transitions API is supported
  if (!document.startViewTransition) {
    updateTheme(newTheme);
    return;
  }
  
  // Use View Transitions API for smooth animation
  document.startViewTransition(() => {
    updateTheme(newTheme);
  });
}

/**
 * Update theme state and persist preference
 * Dispatches custom event for other scripts to listen
 */
function updateTheme(theme) {
  if (theme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  
  localStorage.setItem('hgstar-theme', theme);
  updateThemeIcon(theme);
  
  // Dispatch custom event for theme change listeners
  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
}

/**
 * Update theme toggle button icon and label
 */
function updateThemeIcon(theme) {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

/**
 * Listen for system theme changes
 * Updates theme if user hasn't set a preference
 */
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('hgstar-theme')) {
    updateTheme(e.matches ? 'dark' : 'light');
  }
});

/**
 * Listen for theme changes from other tabs/windows
 * Syncs theme across browser windows
 */
window.addEventListener('storage', (e) => {
  if (e.key === 'hgstar-theme' && e.newValue) {
    const theme = e.newValue;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    updateThemeIcon(theme);
  }
});

// Initialize theme on page load
initTheme();

// Expose to global scope for onclick handlers
window.toggleTheme = toggleTheme;
