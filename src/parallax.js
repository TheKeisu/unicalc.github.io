const layers = [
  { element: document.querySelector('.parallax-glow--one'), x: -90, y: 150 },
  { element: document.querySelector('.parallax-glow--two'), x: 135, y: 280 },
  { element: document.querySelector('.parallax-glow--three'), x: -170, y: 390 },
].filter(({ element }) => element);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (layers.length && !reduceMotion.matches) {
  let frameRequested = false;

  const updateParallax = () => {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

    for (const { element, x, y } of layers) {
      element.style.transform = `translate3d(${x * progress}px, ${-y * progress}px, 0)`;
    }

    frameRequested = false;
  };

  window.addEventListener('scroll', () => {
    if (frameRequested) return;

    frameRequested = true;
    window.requestAnimationFrame(updateParallax);
  }, { passive: true });
  window.addEventListener('resize', () => {
    if (!frameRequested) {
      frameRequested = true;
      window.requestAnimationFrame(updateParallax);
    }
  }, { passive: true });

  updateParallax();
}
