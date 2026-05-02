function initPageLoader() {
  const loader      = document.getElementById('pageLoader');
  const pageContent = document.getElementById('page-content');
  const progressBar = document.getElementById('loaderProgressBar');
  const statusEl    = document.getElementById('loaderStatus');

  if (!loader || !pageContent) return;

  const statusMessages = [
    'INITIALIZING SYSTEMS',
    'LOADING ASSETS',
    'CALIBRATING LASER',
    'SYSTEMS ONLINE',
  ];
  let statusIdx   = 0;
  let pageLoaded  = false;
  let minElapsed  = false;

  function setProgress(pct) {
    if (progressBar) progressBar.style.width = pct + '%';
  }

  // Stagger progress to feel responsive
  const steps = [
    [180,  20],
    [500,  42],
    [900,  65],
    [1400, 82],
    [1800, 92],
  ];
  steps.forEach(([delay, pct]) => setTimeout(() => setProgress(pct), delay));

  const statusInterval = setInterval(() => {
    statusIdx = (statusIdx + 1) % (statusMessages.length - 1);
    if (statusEl) statusEl.textContent = statusMessages[statusIdx];
  }, 850);

  function hideLoader() {
    clearInterval(statusInterval);
    if (statusEl) statusEl.textContent = 'READY';
    setProgress(100);
    setTimeout(() => {
      loader.classList.add('hide');
      pageContent.style.opacity = '1';
    }, 380);
  }

  function tryHide() {
    if (pageLoaded && minElapsed) hideLoader();
  }

  // Minimum 2s display so brand/progress are visible
  setTimeout(() => { minElapsed = true; tryHide(); }, 2000);

  if (document.readyState === 'complete') {
    pageLoaded = true;
    tryHide();
  } else {
    window.addEventListener('load', () => { pageLoaded = true; tryHide(); }, { once: true });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPageLoader);
} else {
  initPageLoader();
}
