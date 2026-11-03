function setupHomePage() {
  if (window.__unicalcHomeInteractionsReady) return;
  window.__unicalcHomeInteractionsReady = true;

  document.addEventListener('click', event => {
    const mapButton = event.target.closest('#mapBtn');
    const closeButton = event.target.closest('#closeMapBtn');
    const modal = document.getElementById('mapModal');
    if (!modal) return;

    if (mapButton) {
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('map-open');
      document.getElementById('closeMapBtn')?.focus({ preventScroll: true });
    } else if (closeButton || event.target === modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('map-open');
      document.getElementById('mapBtn')?.focus({ preventScroll: true });
    }
  });

  document.addEventListener('submit', event => {
    if (event.target.id !== 'homeSearchForm') return;
    const input = document.getElementById('homeSearchInput');
    input.value = input.value.trim();
    if (!input.value) {
      event.preventDefault();
      input.focus();
    }
  });

  document.addEventListener('keydown', event => {
    const modal = document.getElementById('mapModal');
    if (event.key === 'Escape' && modal?.getAttribute('aria-hidden') === 'false') {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('map-open');
      document.getElementById('mapBtn')?.focus({ preventScroll: true });
    }
  });
}

setupHomePage();
