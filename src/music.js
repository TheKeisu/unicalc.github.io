const tracks = [
  { id: 'lofi-hip-hop-01', title: 'Crimson Horizon', mood: 'Спокойный lo-fi · 84 BPM' },
  { id: 'lofi-hip-hop-02', title: 'Frozen Anthem', mood: 'Спокойный lo-fi · 84 BPM' },
  { id: 'lofi-hip-hop-03', title: 'Glass Bridge', mood: 'Для концентрации · 72 BPM' },
  { id: 'lofi-hip-hop-04', title: 'Glass Sketch', mood: 'Для концентрации · 72 BPM' },
  { id: 'lofi-hip-hop-05', title: 'Dusty Engine', mood: 'Ностальгичный lo-fi · 80 BPM' },
  { id: 'lofi-hip-hop-06', title: 'Slow Summit', mood: 'Ностальгичный lo-fi · 80 BPM' },
  { id: 'lofi-hip-hop-07', title: 'Paper Circuit', mood: 'Уютный lo-fi · 70 BPM' },
  { id: 'lofi-hip-hop-08', title: 'Rusted Voyage', mood: 'Уютный lo-fi · 70 BPM' },
  { id: 'lofi-hip-hop-09', title: 'Stormy Harbor', mood: 'Мечтательный lo-fi · 72 BPM' },
  { id: 'lofi-hip-hop-10', title: 'Tidal Station', mood: 'Мечтательный lo-fi · 72 BPM' },
  { id: 'ambient-01', title: 'Sleepy Spark', mood: 'Спокойный ambient · 55 BPM' },
  { id: 'ambient-02', title: 'Ivory Summit', mood: 'Спокойный ambient · 55 BPM' },
  { id: 'ambient-03', title: 'Northern Satellite', mood: 'Воздушный ambient · 61 BPM' },
  { id: 'ambient-04', title: 'Wandering Garden', mood: 'Воздушный ambient · 61 BPM' },
  { id: 'ambient-05', title: 'Sleepy Comet', mood: 'Тихий ambient · 63 BPM' },
  { id: 'ambient-06', title: 'Heavy Current', mood: 'Тихий ambient · 63 BPM' },
  { id: 'ambient-07', title: 'Phantom Mirage', mood: 'Мягкий ambient · 67 BPM' },
  { id: 'ambient-08', title: 'Northern Circuit', mood: 'Мягкий ambient · 67 BPM' },
  { id: 'ambient-09', title: 'Coastal Tower', mood: 'Медитативный ambient · 57 BPM' },
  { id: 'ambient-10', title: 'Shadow Current', mood: 'Медитативный ambient · 57 BPM' },
];

const icons = {
  music: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 12 7-12 7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5h3v14H8zM15 5h3v14h-3z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 5 11 7-11 7zM19 5v14"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
};

const readNumber = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    if (saved === null) return fallback;
    const value = Number(saved);
    return Number.isFinite(value) && value >= 0 && value <= 1 ? value : fallback;
  } catch { return fallback; }
};

function createMusicPlayer() {
  if (document.getElementById('unicalcMusic')) return;

  const root = document.createElement('div');
  root.id = 'unicalcMusic';
  root.innerHTML = `
    <button class="music-open" type="button" aria-haspopup="dialog" aria-controls="musicModal" aria-expanded="false">
      <span class="music-open-icon">${icons.music}</span><span class="music-open-label">Музыка</span>
      <span class="music-live-indicator" aria-hidden="true"></span>
    </button>
    <div class="music-modal" id="musicModal" aria-hidden="true" hidden>
      <button class="music-backdrop" type="button" data-music-close aria-label="Закрыть музыкальный плеер"></button>
      <section class="music-dialog" role="dialog" aria-modal="true" aria-labelledby="musicTitle" tabindex="-1">
        <header class="music-dialog-header">
          <div><span class="music-kicker">UNICALC · ФОНОВАЯ МУЗЫКА</span><h2 id="musicTitle">Тихий фон для учёбы</h2><p>Выбери трек — музыка продолжится при переходе по сайту.</p></div>
          <button class="music-icon-button" type="button" data-music-close aria-label="Закрыть">${icons.close}</button>
        </header>
        <div class="music-now-playing" aria-live="polite">
          <div class="music-record" aria-hidden="true"><span></span></div>
          <div class="music-track-copy"><span>СЕЙЧАС ИГРАЕТ</span><strong data-music-current>Выбери трек</strong><small data-music-mood>Lo-fi и спокойный ambient</small></div>
          <button class="music-icon-button music-next" type="button" data-music-next aria-label="Следующий трек">${icons.next}</button>
        </div>
        <div class="music-controls">
          <button class="music-play-button" type="button" data-music-play aria-label="Воспроизвести">${icons.play}<span>Включить</span></button>
          <label class="music-volume"><span>Громкость</span><input type="range" min="0" max="1" step="0.01" value="0.14" data-music-volume aria-label="Громкость музыки"><output data-music-volume-value>14%</output></label>
        </div>
        <div class="music-list-heading"><strong>Плейлист</strong><span>20 треков · без слов</span></div>
        <div class="music-track-list" role="listbox" aria-label="Выбрать музыкальный трек"></div>
        <p class="music-credit">Треки предоставлены <a href="https://kaino.dev/library/music" target="_blank" rel="noopener noreferrer">Kaino Free Asset Library</a> под лицензией CC0.</p>
        <p class="music-status" data-music-status role="status" aria-live="polite"></p>
      </section>
    </div>
    <audio data-music-audio preload="none"></audio>`;
  document.body.append(root);

  const audio = root.querySelector('[data-music-audio]');
  const openButton = root.querySelector('.music-open');
  const modal = root.querySelector('.music-modal');
  const dialog = root.querySelector('.music-dialog');
  const playButton = root.querySelector('[data-music-play]');
  const volume = root.querySelector('[data-music-volume]');
  const volumeValue = root.querySelector('[data-music-volume-value]');
  const currentTitle = root.querySelector('[data-music-current]');
  const currentMood = root.querySelector('[data-music-mood]');
  const status = root.querySelector('[data-music-status]');
  const list = root.querySelector('.music-track-list');
  let currentIndex = -1;
  let lastTrigger = null;

  volume.value = String(readNumber('unicalc-music-volume', 0.14));
  audio.volume = Number(volume.value);
  volumeValue.value = `${Math.round(audio.volume * 100)}%`;

  list.innerHTML = tracks.map((track, index) => `
    <button class="music-track-option" type="button" role="option" aria-selected="false" data-track-index="${index}">
      <span class="music-track-number">${String(index + 1).padStart(2, '0')}</span>
      <span class="music-track-info"><strong>${track.title}</strong><small>${track.mood}</small></span>
      <span class="music-track-play" aria-hidden="true">${icons.play}</span>
    </button>`).join('');

  const syncPlayback = () => {
    const playing = !audio.paused;
    playButton.innerHTML = `${playing ? icons.pause : icons.play}<span>${playing ? 'Пауза' : 'Включить'}</span>`;
    playButton.setAttribute('aria-label', playing ? 'Поставить на паузу' : 'Воспроизвести');
    root.classList.toggle('is-playing', playing);
  };

  const selectTrack = async (index, shouldPlay = true) => {
    currentIndex = (index + tracks.length) % tracks.length;
    const track = tracks[currentIndex];
    currentTitle.textContent = track.title;
    currentMood.textContent = track.mood;
    list.querySelectorAll('[data-track-index]').forEach((button, buttonIndex) => {
      const selected = buttonIndex === currentIndex;
      button.setAttribute('aria-selected', String(selected));
      button.classList.toggle('is-current', selected);
    });
    audio.src = `https://kaino.dev/api/library/music/${track.id}/download?format=mp3`;
    status.textContent = '';
    try { localStorage.setItem('unicalc-music-track', track.id); } catch { /* optional preference */ }
    if (shouldPlay) {
      try {
        await audio.play();
        syncPlayback();
      } catch {
        syncPlayback();
        status.textContent = 'Не удалось запустить трек. Проверь подключение и попробуй ещё раз.';
      }
    }
  };

  const openModal = trigger => {
    lastTrigger = trigger;
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    openButton.setAttribute('aria-expanded', 'true');
    document.body.classList.add('music-modal-open');
    const selected = list.querySelector('[aria-selected="true"]');
    (selected || list.querySelector('.music-track-option'))?.focus({ preventScroll: true });
  };

  const closeModal = () => {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    openButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('music-modal-open');
    if (lastTrigger?.isConnected) lastTrigger.focus({ preventScroll: true });
  };

  openButton.addEventListener('click', () => openModal(openButton));
  modal.addEventListener('click', event => {
    if (event.target.closest('[data-music-close]')) closeModal();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll('button:not([disabled]), input:not([disabled]), a[href]')]
      .filter(element => !element.closest('[hidden]'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  list.addEventListener('click', event => {
    const option = event.target.closest('[data-track-index]');
    if (option) selectTrack(Number(option.dataset.trackIndex));
  });
  playButton.addEventListener('click', async () => {
    if (audio.paused) {
      if (!audio.src) {
        const savedId = (() => { try { return localStorage.getItem('unicalc-music-track'); } catch { return null; } })();
        const savedIndex = tracks.findIndex(track => track.id === savedId);
        await selectTrack(savedIndex >= 0 ? savedIndex : 0);
      } else {
        try { await audio.play(); } catch { status.textContent = 'Не удалось включить воспроизведение. Попробуй ещё раз.'; }
      }
    } else audio.pause();
    syncPlayback();
  });
  root.querySelector('[data-music-next]').addEventListener('click', () => selectTrack(currentIndex + 1));
  volume.addEventListener('input', () => {
    audio.volume = Number(volume.value);
    volumeValue.value = `${Math.round(audio.volume * 100)}%`;
    try { localStorage.setItem('unicalc-music-volume', volume.value); } catch { /* optional preference */ }
  });
  audio.addEventListener('play', syncPlayback);
  audio.addEventListener('pause', syncPlayback);
  audio.addEventListener('ended', () => selectTrack(currentIndex + 1));
  audio.addEventListener('error', () => {
    status.textContent = 'Этот трек сейчас недоступен. Выбери другой или попробуй позже.';
    syncPlayback();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });

  const savedTrackId = (() => { try { return localStorage.getItem('unicalc-music-track'); } catch { return null; } })();
  const savedTrackIndex = tracks.findIndex(track => track.id === savedTrackId);
  if (savedTrackIndex >= 0) selectTrack(savedTrackIndex, false);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', createMusicPlayer, { once: true });
else createMusicPlayer();
