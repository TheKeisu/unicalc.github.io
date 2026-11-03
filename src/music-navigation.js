const pageStyles = {
  'index.html': ['src/index.css'],
  'calculators.html': ['src/calculators.css'],
  'tutorials.html': ['src/index.css', 'src/tutorials.css'],
  'about-us.html': ['src/index.css', 'src/about.css'],
};
const pageModules = {
  'index.html': ['src/index.js', 'src/parallax.js'],
  'calculators.html': ['src/calculators.js', 'src/parallax.js'],
  'tutorials.html': ['src/tutorials.js', 'src/parallax.js'],
  'about-us.html': ['src/parallax.js'],
};

const routeFromUrl = url => {
  const path = new URL(url, location.href).pathname;
  const last = path.split('/').filter(Boolean).at(-1) || 'index.html';
  return last.endsWith('.html') ? last : `${last}/index.html`;
};

let navigationToken = 0;
let navigationPending = false;
history.scrollRestoration = 'manual';

async function loadPage(url, { push = true, scrollY = 0 } = {}) {
  const destination = new URL(url, location.href);
  const route = routeFromUrl(destination);
  if (!pageModules[route]) {
    location.href = destination.href;
    return;
  }

  const token = ++navigationToken;
  navigationPending = true;
  try {
    const response = await fetch(destination.href);
    if (!response.ok) throw new Error(`Page request failed: ${response.status}`);
    const html = await response.text();
    if (token !== navigationToken) return;

    const nextDocument = new DOMParser().parseFromString(html, 'text/html');
    const nextPageStyles = [...nextDocument.querySelectorAll('link[rel="stylesheet"]')]
      .filter(link => pageStyles[route].some(path => new URL(link.getAttribute('href'), destination).pathname.endsWith(`/${path}`)));
    if (nextPageStyles.length !== pageStyles[route].length) throw new Error('Page stylesheet not found');

    const currentPageStyles = [...document.querySelectorAll('link[rel="stylesheet"]')]
      .filter(link => pageStyles.some(path => new URL(link.href, location.href).pathname.endsWith(`/${path}`)));
    const wantedStyleUrls = nextPageStyles.map(link => new URL(link.getAttribute('href'), destination).href);
    const addedStyles = [];
    for (const wantedStyleUrl of wantedStyleUrls) {
      if (currentPageStyles.some(link => link.href === wantedStyleUrl)) continue;
      const newStyle = document.createElement('link');
      newStyle.rel = 'stylesheet';
      newStyle.href = wantedStyleUrl;
      const themeStylesheet = [...document.querySelectorAll('link[rel="stylesheet"]')]
        .find(link => new URL(link.href).pathname.endsWith('/src/theme.css'));
      document.head.insertBefore(newStyle, themeStylesheet || null);
      addedStyles.push(newStyle);
      await new Promise((resolve, reject) => {
        newStyle.addEventListener('load', resolve, { once: true });
        newStyle.addEventListener('error', reject, { once: true });
      });
    }
    if (token !== navigationToken) {
      addedStyles.forEach(style => style.remove());
      return;
    }

    window.__unicalcTutorialCleanup?.();
    const persistentPlayer = document.getElementById('unicalcMusic');
    const nextBodyNodes = [...nextDocument.body.childNodes]
      .filter(node => !(node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SCRIPT'))
      .map(node => document.importNode(node, true));
    const previousBodyNodes = [...document.body.childNodes].filter(node => node !== persistentPlayer);
    nextBodyNodes.forEach(node => document.body.insertBefore(node, persistentPlayer));
    previousBodyNodes.forEach(node => node.remove());
    document.body.className = nextDocument.body.className;
    if (persistentPlayer?.querySelector('#musicModal:not([hidden])')) document.body.classList.add('music-modal-open');
    document.title = nextDocument.title;
    document.documentElement.lang = nextDocument.documentElement.lang || 'ru';
    window.__unicalcApplyTheme?.();

    const nextThemeColor = nextDocument.querySelector('meta[name="theme-color"]')?.content;
    if (nextThemeColor) {
      let themeMeta = document.querySelector('meta[name="theme-color"]');
      if (!themeMeta) {
        themeMeta = document.createElement('meta');
        themeMeta.name = 'theme-color';
        document.head.append(themeMeta);
      }
      themeMeta.content = document.documentElement.dataset.theme === 'light' ? '#dce0d9' : '#0f172a';
    }

    currentPageStyles.filter(link => !wantedStyleUrls.includes(link.href)).forEach(link => link.remove());
    if (push) {
      history.replaceState({ ...(history.state || {}), scrollY: window.scrollY }, '', location.href);
      history.pushState({ scrollY: 0 }, '', destination.href);
    }

    const currentPath = route;
    document.querySelectorAll('.nav-link').forEach(link => {
      const selected = routeFromUrl(new URL(link.href, destination)) === currentPath;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });

    for (const modulePath of pageModules[route]) {
      await import(`./${modulePath.replace(/^src\//, '')}?navigation=${token}`);
    }

    if (push) window.scrollTo({ top: 0, behavior: 'auto' });
    else window.scrollTo({ top: Math.max(0, scrollY), behavior: 'auto' });
    const hashTarget = destination.hash && document.getElementById(decodeURIComponent(destination.hash.slice(1)));
    if (hashTarget && push) hashTarget.scrollIntoView({ block: 'start' });
    navigationPending = false;
  } catch (error) {
    if (token !== navigationToken) return;
    console.error('UniCalc page transition failed; using regular navigation.', error);
    if (push) location.href = destination.href;
    else window.scrollTo({ top: Math.max(0, scrollY), behavior: 'auto' });
    navigationPending = false;
  }
}

document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest('a[href]');
  if (!link || link.target || link.hasAttribute('download') || link.origin !== location.origin) return;
  const destination = new URL(link.href);
  if (!pageModules[routeFromUrl(destination)]) return;
  if (destination.pathname === location.pathname && destination.search === location.search && destination.hash) return;
  event.preventDefault();
  loadPage(destination.href);
});

document.addEventListener('submit', event => {
  if (event.defaultPrevented) return;
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  const action = new URL(form.action, location.href);
  if (!pageModules[routeFromUrl(action)]) return;
  event.preventDefault();
  const data = new FormData(form);
  for (const [key, value] of data.entries()) action.searchParams.set(key, String(value));
  loadPage(action.href);
});

window.addEventListener('popstate', event => {
  if (navigationPending) navigationToken++;
  loadPage(location.href, { push: false, scrollY: event.state?.scrollY || 0 });
});
