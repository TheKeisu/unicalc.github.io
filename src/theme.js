const root = document.documentElement;
const storageKey = 'unicalc-theme';

const readTheme = () => {
  try {
    return localStorage.getItem(storageKey) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#dce0d9' : '#0f172a');
  const button = document.querySelector('[data-theme-toggle]');
  if (!button) return;

  const lightEnabled = theme === 'light';
  button.setAttribute('aria-label', lightEnabled ? 'Включить тёмную тему' : 'Включить светлую тему');
  button.setAttribute('title', lightEnabled ? 'Включить тёмную тему' : 'Включить светлую тему');
  button.setAttribute('aria-pressed', String(lightEnabled));
  button.querySelector('[data-theme-label]').textContent = lightEnabled ? 'Тёмная' : 'Светлая';
  button.querySelector('[data-theme-icon]').innerHTML = lightEnabled
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.3 15.2A8.5 8.5 0 0 1 8.8 3.7 8.6 8.6 0 1 0 20.3 15.2Z"/><path d="M16.5 3v4M14.5 5h4"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>';
};

applyTheme(readTheme());
document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
  try {
    localStorage.setItem(storageKey, nextTheme);
  } catch {
    // The theme still applies for the current page if storage is unavailable.
  }
  applyTheme(nextTheme);
});
