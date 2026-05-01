/**
 * Page Loader Manager
 * Handles showing/hiding of the unique loader animation
 */

function initPageLoader() {
  const loader = document.getElementById('pageLoader');
  const pageContent = document.getElementById('page-content');
  
  if (!loader || !pageContent) return;

  // Show page content
  function showContent() {
    pageContent.style.opacity = '1';
  }

  // Hide loader when page fully loads
  function hideLoader() {
    if (loader.classList.contains('hide')) return;
    
    setTimeout(() => {
      loader.classList.add('hide');
      showContent();
    }, 3000);
  }

  // Start the loading sequence
  hideLoader();
}

// Initialize loader when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPageLoader);
} else {
  initPageLoader();
}
