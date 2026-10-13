const videoLessons = [
  {
    subject: 'math',
    subjectLabel: 'Математика',
    topic: 'Алгебра · 8 класс',
    title: 'Квадратные уравнения',
    description: 'Разбираем коэффициенты, неполные уравнения и формулу корней.',
    visual: 'x² − 5x + 6 = 0',
    videoId: 'oyYQLg6CyFk',
    source: 'Домашняя школа Фоксфорда',
  },
  {
    subject: 'math',
    subjectLabel: 'Математика',
    topic: 'Проценты · 5 класс',
    title: 'Как решать задачи на проценты',
    description: 'Что такое процент и как решать типовые задачи на его нахождение.',
    visual: '25% = ¼',
    videoId: 'HrzXjO87ezM',
    source: 'OnliSkill',
  },
  {
    subject: 'math',
    subjectLabel: 'Математика',
    topic: 'Функции · 7 класс',
    title: 'Линейная функция и её график',
    description: 'Угловой коэффициент, свободный член и построение прямой.',
    visual: 'y = kx + b',
    videoId: 'ISIkqsVFX2A',
    source: 'GDZ Video',
  },
  {
    subject: 'physics',
    subjectLabel: 'Физика',
    topic: 'Механика · 9 класс',
    title: 'Равноускоренное движение',
    description: 'Скорость, ускорение и уравнение движения на понятных примерах.',
    visual: 'v = v₀ + at',
    videoId: '6VXvLh3AnUs',
    source: 'Видеоурок по физике',
  },
  {
    subject: 'physics',
    subjectLabel: 'Физика',
    topic: 'Электричество · 10 класс',
    title: 'Закон Ома для участка цепи',
    description: 'Как связаны сила тока, напряжение и сопротивление.',
    visual: 'I = U / R',
    videoId: 'he38pKmD5GE',
    source: 'Знайка ТВ',
  },
  {
    subject: 'physics',
    subjectLabel: 'Физика',
    topic: 'Электричество',
    title: 'Закон Ома для полной цепи',
    description: 'Разбираем ЭДС, внешнее и внутреннее сопротивление.',
    visual: 'I = ℰ / (R + r)',
    videoId: 'UmO_sWGaOhY',
    source: 'Ришельевский лицей',
  },
  {
    subject: 'chemistry',
    subjectLabel: 'Химия',
    topic: 'Элементы · 8 класс',
    title: 'Как читать таблицу Менделеева',
    description: 'Периоды, группы и основные сведения, которые даёт таблица.',
    visual: 'Na · Cl · H₂O',
    videoId: '7fbIJjSb1mI',
    source: 'Химия — просто',
  },
  {
    subject: 'chemistry',
    subjectLabel: 'Химия',
    topic: 'Химическая связь · 8 класс',
    title: 'Ковалентная химическая связь',
    description: 'Как атомы образуют общие электронные пары.',
    visual: 'H — H',
    videoId: 'ozqZonjuvg0',
    source: 'Фоксфорд',
  },
  {
    subject: 'chemistry',
    subjectLabel: 'Химия',
    topic: 'Реакции · 7 класс',
    title: 'Закон сохранения массы',
    description: 'Почему масса веществ до реакции равна массе продуктов.',
    visual: 'mреагентов = mпродуктов',
    videoId: 'Ge36OKxfDJk',
    source: 'Химия, 7 класс',
  },
];

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
}[character]));

function createVideoCard(video) {
  const card = document.createElement('article');
  card.className = `video-card video-card--${video.subject}`;
  card.dataset.subject = video.subject;
  card.dataset.search = [video.subjectLabel, video.topic, video.title, video.description, video.source].join(' ').toLocaleLowerCase('ru-RU');
  card.setAttribute('role', 'listitem');
  card.innerHTML = `<div class="video-card-art" aria-hidden="true"><span class="video-card-art-grid"></span><span class="video-card-art-mark">${escapeHtml(video.visual)}</span><span class="video-card-subject">${escapeHtml(video.subjectLabel)}</span><span class="video-card-play">▶</span></div>
    <div class="video-card-copy"><div class="video-card-topic">${escapeHtml(video.topic)}</div><h4>${escapeHtml(video.title)}</h4><p>${escapeHtml(video.description)}</p><div class="video-card-bottom"><span class="video-card-source">${escapeHtml(video.source)}</span><button type="button" class="video-card-open" data-video-id="${escapeHtml(video.videoId)}" aria-label="Смотреть: ${escapeHtml(video.title)}">Смотреть <span aria-hidden="true">↗</span></button></div></div>`;
  return card;
}

function initTutorials() {
  const tracks = [...document.querySelectorAll('[data-video-track]')];
  const sections = [...document.querySelectorAll('[data-subject-section]')];
  const filters = [...document.querySelectorAll('.tutorial-filter')];
  const search = document.getElementById('tutorialSearch');
  const clearSearch = document.getElementById('tutorialSearchClear');
  const resultCount = document.getElementById('tutorialResultCount');
  const empty = document.getElementById('tutorialEmpty');
  const modal = document.getElementById('videoModal');
  const dialog = modal.querySelector('.video-modal-dialog');
  const modalTitle = document.getElementById('videoModalTitle');
  const modalPlayer = document.getElementById('videoModalPlayer');
  const modalSource = document.getElementById('videoModalSource');
  const modalExternal = document.getElementById('videoModalExternal');
  const closeButton = document.getElementById('videoModalClose');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeSubject = 'all';
  let returnFocusTo = null;

  tracks.forEach(track => {
    videoLessons.filter(video => video.subject === track.dataset.videoTrack)
      .forEach(video => track.appendChild(createVideoCard(video)));
  });

  const updateCarouselControls = section => {
    const track = section.querySelector('.video-track');
    const previous = section.querySelector('[data-direction="prev"]');
    const next = section.querySelector('[data-direction="next"]');
    if (!track || !previous || !next) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = maxScroll <= 2 || track.scrollLeft >= maxScroll - 2;
  };

  sections.forEach(section => {
    const track = section.querySelector('.video-track');
    section.querySelectorAll('.carousel-arrow').forEach(button => {
      button.addEventListener('click', () => {
        const direction = button.dataset.direction === 'next' ? 1 : -1;
        track.scrollBy({ left: direction * Math.max(track.clientWidth * 0.8, 260), behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      });
    });
    track.addEventListener('scroll', () => updateCarouselControls(section), { passive: true });
    window.addEventListener('resize', () => updateCarouselControls(section), { passive: true });
  });

  const applyFilters = () => {
    const query = search.value.trim().toLocaleLowerCase('ru-RU').replace(/ё/g, 'е');
    let visibleCount = 0;
    document.querySelectorAll('.video-card').forEach(card => {
      const matchesSubject = activeSubject === 'all' || card.dataset.subject === activeSubject;
      const matchesQuery = !query || card.dataset.search.replace(/ё/g, 'е').includes(query);
      card.hidden = !(matchesSubject && matchesQuery);
      if (!card.hidden) visibleCount++;
    });

    sections.forEach(section => {
      const hasVisibleCards = [...section.querySelectorAll('.video-card')].some(card => !card.hidden);
      section.hidden = !hasVisibleCards;
      updateCarouselControls(section);
    });
    empty.hidden = visibleCount > 0;
    resultCount.textContent = query || activeSubject !== 'all'
      ? `Найдено уроков: ${visibleCount}`
      : `В подборке ${visibleCount} видеоуроков`;
    clearSearch.hidden = search.value.length === 0;
  };

  filters.forEach(button => button.addEventListener('click', () => {
    activeSubject = button.dataset.subject;
    filters.forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    applyFilters();
  }));

  search.addEventListener('input', applyFilters);
  clearSearch.addEventListener('click', () => {
    search.value = '';
    search.focus();
    applyFilters();
  });

  const closeVideo = () => {
    if (modal.hidden) return;
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('video-modal-open');
    modalPlayer.replaceChildren();
    const trigger = returnFocusTo;
    returnFocusTo = null;
    if (trigger?.isConnected) trigger.focus({ preventScroll: true });
  };

  const openVideo = trigger => {
    const video = videoLessons.find(item => item.videoId === trigger.dataset.videoId);
    if (!video) return;
    returnFocusTo = trigger;
    modalTitle.textContent = video.title;
    modalSource.textContent = `${video.subjectLabel} · ${video.source}`;
    modalExternal.href = `https://www.youtube.com/watch?v=${encodeURIComponent(video.videoId)}`;
    const iframe = document.createElement('iframe');
    iframe.title = video.title;
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.videoId)}?autoplay=1&rel=0`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    modalPlayer.replaceChildren(iframe);
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('video-modal-open');
    closeButton.focus({ preventScroll: true });
  };

  document.addEventListener('click', event => {
    const trigger = event.target.closest('.video-card-open');
    if (trigger) openVideo(trigger);
  });
  closeButton.addEventListener('click', closeVideo);
  modal.addEventListener('click', event => {
    if (event.target === modal || event.target.closest('[data-video-dismiss]')) closeVideo();
  });
  document.addEventListener('keydown', event => {
    if (!modal.hidden && event.key === 'Escape') {
      event.preventDefault();
      closeVideo();
    }
  });

  applyFilters();
}

document.addEventListener('DOMContentLoaded', initTutorials);
