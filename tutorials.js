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

const quizBank = [
  {
    videoId: 'oyYQLg6CyFk',
    question: 'Найди корни уравнения x² − 5x + 6 = 0.',
    options: ['x = 2 и x = 3', 'x = −2 и x = −3', 'x = 1 и x = 6', 'x = 5 и x = 6'],
    answer: 0,
    explanation: 'D = 25 − 24 = 1, значит x = (5 ± 1) / 2, то есть 2 и 3. Проверка по теореме Виета: сумма корней равна 5, произведение — 6.',
  },
  {
    videoId: 'oyYQLg6CyFk',
    question: 'Сколько действительных корней у квадратного уравнения, если дискриминант отрицательный?',
    options: ['Ни одного', 'Один', 'Два', 'Бесконечно много'],
    answer: 0,
    explanation: 'Из отрицательного числа нельзя извлечь корень среди действительных чисел, поэтому формула корней не работает. При D > 0 корней два, при D = 0 — один.',
  },
  {
    videoId: 'HrzXjO87ezM',
    question: 'Сколько составляют 20 % от числа 150?',
    options: ['3', '20', '30', '75'],
    answer: 2,
    explanation: '20 % — это 0,2. Умножаем: 150 · 0,2 = 30.',
  },
  {
    videoId: 'HrzXjO87ezM',
    question: 'Ученик решил 40 задач из 50. Сколько это процентов?',
    options: ['40 %', '80 %', '90 %', '125 %'],
    answer: 1,
    explanation: 'Делим часть на целое: 40 / 50 = 0,8. Умножаем на 100 — получаем 80 %.',
  },
  {
    videoId: 'ISIkqsVFX2A',
    question: 'Что показывает коэффициент k в уравнении прямой y = kx + b?',
    options: ['Наклон прямой', 'Точку пересечения с осью Oy', 'Точку пересечения с осью Ox', 'Длину отрезка прямой'],
    answer: 0,
    explanation: 'k — угловой коэффициент. При k > 0 функция возрастает, при k < 0 убывает, а чем больше |k|, тем круче прямая. Число b задаёт точку на оси Oy.',
  },
  {
    videoId: 'ISIkqsVFX2A',
    question: 'В какой точке прямая y = 2x − 3 пересекает ось Oy?',
    options: ['(0; −3)', '(−3; 0)', '(0; 2)', '(1,5; 0)'],
    answer: 0,
    explanation: 'На оси Oy значение x равно 0, поэтому y = 2 · 0 − 3 = −3. Это свободный член b. Точка (1,5; 0) — пересечение с осью Ox.',
  },
  {
    videoId: '6VXvLh3AnUs',
    question: 'Тело начинает движение из состояния покоя с ускорением 2 м/с². Какую скорость оно наберёт через 5 с?',
    options: ['2,5 м/с', '7 м/с', '10 м/с', '25 м/с'],
    answer: 2,
    explanation: 'v = v₀ + at = 0 + 2 · 5 = 10 м/с.',
  },
  {
    videoId: '6VXvLh3AnUs',
    question: 'Что показывает ускорение при равноускоренном движении?',
    options: ['Как быстро изменяется скорость', 'Какой путь прошло тело', 'Какова скорость в данный момент', 'Сколько времени длится движение'],
    answer: 0,
    explanation: 'Ускорение — это изменение скорости за единицу времени. Ускорение 2 м/с² означает, что каждую секунду скорость растёт на 2 м/с.',
  },
  {
    videoId: 'he38pKmD5GE',
    question: 'Напряжение на участке цепи 12 В, сопротивление 4 Ом. Чему равна сила тока?',
    options: ['0,33 А', '3 А', '8 А', '48 А'],
    answer: 1,
    explanation: 'I = U / R = 12 / 4 = 3 А.',
  },
  {
    videoId: 'he38pKmD5GE',
    question: 'Как изменится сила тока на участке цепи, если напряжение увеличить вдвое, а сопротивление оставить прежним?',
    options: ['Увеличится вдвое', 'Уменьшится вдвое', 'Не изменится', 'Увеличится в четыре раза'],
    answer: 0,
    explanation: 'Сила тока прямо пропорциональна напряжению: I = U / R. Вдвое больше U — вдвое больше I.',
  },
  {
    videoId: 'UmO_sWGaOhY',
    question: 'ЭДС источника 12 В, внешнее сопротивление 5 Ом, внутреннее сопротивление 1 Ом. Какова сила тока в цепи?',
    options: ['2 А', '2,4 А', '2,5 А', '12 А'],
    answer: 0,
    explanation: 'I = ℰ / (R + r) = 12 / (5 + 1) = 2 А. Если забыть про внутреннее сопротивление, получится неверные 2,4 А.',
  },
  {
    videoId: 'UmO_sWGaOhY',
    question: 'Что произойдёт с силой тока, если ЭДС и внешнее сопротивление не меняются, а внутреннее сопротивление источника растёт?',
    options: ['Уменьшится', 'Увеличится', 'Не изменится', 'Станет равной нулю'],
    answer: 0,
    explanation: 'Внутреннее сопротивление стоит в знаменателе формулы I = ℰ / (R + r). Чем больше r, тем меньше сила тока.',
  },
  {
    videoId: '7fbIJjSb1mI',
    question: 'Что показывает номер периода в таблице Менделеева?',
    options: ['Число электронных слоёв в атоме', 'Число протонов в ядре', 'Число электронов на внешнем слое', 'Атомную массу элемента'],
    answer: 0,
    explanation: 'Натрий стоит в третьем периоде — у его атома три электронных слоя. Число протонов равно порядковому номеру элемента.',
  },
  {
    videoId: '7fbIJjSb1mI',
    question: 'Что общего у элементов одной главной подгруппы?',
    options: ['Одинаковое число электронов на внешнем слое', 'Одинаковое число электронных слоёв', 'Одинаковая атомная масса', 'Одинаковое число протонов'],
    answer: 0,
    explanation: 'Из-за одинакового числа внешних электронов элементы одной группы похожи по свойствам — например, натрий и калий.',
  },
  {
    videoId: 'ozqZonjuvg0',
    question: 'За счёт чего образуется ковалентная связь?',
    options: ['Общих электронных пар', 'Передачи электронов от одного атома другому', 'Притяжения ионов с зарядами + и −', 'Свободного движения электронов в металле'],
    answer: 0,
    explanation: 'Атомы делят электроны и достраивают внешний слой. В молекуле H₂ два атома водорода образуют одну общую пару: H — H.',
  },
  {
    videoId: 'ozqZonjuvg0',
    question: 'В какой молекуле связь ковалентная полярная?',
    options: ['H₂', 'Cl₂', 'HCl', 'O₂'],
    answer: 2,
    explanation: 'В HCl общая электронная пара смещена к хлору — он электроотрицательнее водорода. В H₂, Cl₂ и O₂ атомы одинаковые, пара расположена симметрично, связь неполярная.',
  },
  {
    videoId: 'Ge36OKxfDJk',
    question: 'В реакцию вступили 10 г вещества A и 6 г вещества B, они прореагировали полностью. Какова общая масса продуктов?',
    options: ['4 г', '10 г', '16 г', '60 г'],
    answer: 2,
    explanation: 'Масса веществ до реакции равна массе продуктов: 10 + 6 = 16 г.',
  },
  {
    videoId: 'Ge36OKxfDJk',
    question: 'Почему масса веществ при химической реакции сохраняется?',
    options: ['Атомы не исчезают и не появляются, а перегруппировываются', 'Новые вещества всегда легче исходных', 'Часть вещества превращается в энергию', 'Масса зависит только от температуры'],
    answer: 0,
    explanation: 'При реакции одни связи рвутся, а другие образуются, но число атомов каждого элемента остаётся прежним. Значит, и масса не меняется.',
  },
];

const quizLetters = ['А', 'Б', 'В', 'Г'];

const shuffle = list => {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const pluralize = (number, [one, few, many]) => {
  const mod10 = number % 10;
  const mod100 = number % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
};

function buildQuizSession(subject) {
  const lessonById = new Map(videoLessons.map(lesson => [lesson.videoId, lesson]));
  let pool = quizBank.filter(item => lessonById.has(item.videoId) && (subject === 'all' || lessonById.get(item.videoId).subject === subject));

  if (subject === 'all') {
    const grouped = {};
    pool.forEach(item => (grouped[item.videoId] ||= []).push(item));
    pool = Object.values(grouped).map(items => items[Math.floor(Math.random() * items.length)]);
  }

  return shuffle(pool).map(item => ({
    ...item,
    lesson: lessonById.get(item.videoId),
    options: shuffle(item.options.map((text, index) => ({ text, correct: index === item.answer }))),
  }));
}

function initQuiz(cleanup) {
  const root = document.getElementById('quiz');
  const card = document.getElementById('quizCard');
  const count = document.getElementById('quizCount');
  const announcer = document.getElementById('quizAnnouncer');
  if (!root || !card || !count) return;

  const filters = [...root.querySelectorAll('.quiz-filter')];
  const state = { subject: 'all', questions: [], answers: [], index: 0 };

  const focusHeading = () => card.querySelector('.quiz-question')?.focus({ preventScroll: true });

  const renderProgress = () => state.questions.map((_, i) => {
    const done = state.answers[i];
    const status = done ? (done.correct ? 'is-correct' : 'is-wrong') : (i === state.index ? 'is-current' : '');
    return `<li class="${status}"></li>`;
  }).join('');

  const renderQuestion = () => {
    const total = state.questions.length;
    const question = state.questions[state.index];
    const answer = state.answers[state.index];
    const { lesson } = question;
    const isLast = state.index === total - 1;

    const options = question.options.map((option, i) => {
      let status = 'is-muted';
      let mark = '';
      let note = '';
      if (!answer) status = '';
      else if (option.correct) { status = 'is-correct'; mark = '✓'; note = ' — верный ответ'; }
      else if (i === answer.chosen) { status = 'is-wrong'; mark = '×'; note = ' — твой ответ, он неверный'; }
      return `<button type="button" class="quiz-option ${status}" data-option="${i}"${answer ? ' aria-disabled="true"' : ''}><span class="quiz-option-letter" aria-hidden="true">${quizLetters[i]}</span><span class="quiz-option-text">${escapeHtml(option.text)}</span>${mark ? `<span class="quiz-option-mark" aria-hidden="true">${mark}</span>` : ''}${note ? `<span class="visually-hidden">${note}</span>` : ''}</button>`;
    }).join('');

    const correctText = question.options.find(option => option.correct).text;
    const feedback = answer ? `<div class="quiz-feedback quiz-feedback--${answer.correct ? 'ok' : 'bad'}">
        <strong class="quiz-feedback-title">${answer.correct ? 'Верно.' : `Не совсем. Правильный ответ: ${escapeHtml(correctText)}.`}</strong>
        <p>${escapeHtml(question.explanation)}</p>
        <div class="quiz-actions">
          <button type="button" class="video-card-open" data-video-id="${escapeHtml(lesson.videoId)}" aria-label="Смотреть урок: ${escapeHtml(lesson.title)}">Смотреть урок <span aria-hidden="true">↗</span></button>
          <button type="button" class="quiz-primary" data-quiz-next>${isLast ? 'Показать итог' : 'Следующий вопрос'} <span aria-hidden="true">→</span></button>
        </div>
      </div>` : '';

    card.className = `quiz-card quiz-card--${lesson.subject}`;
    card.innerHTML = `<div class="quiz-art" aria-hidden="true"><span class="video-card-art-grid"></span><span class="quiz-art-subject">${escapeHtml(lesson.subjectLabel)}</span><span class="quiz-art-mark">${escapeHtml(lesson.visual)}</span><span class="quiz-art-caption">${escapeHtml(lesson.topic)}</span></div>
      <div class="quiz-body">
        <div class="quiz-meta"><span class="quiz-topic">По уроку: ${escapeHtml(lesson.title)}</span><span class="quiz-counter">Вопрос ${state.index + 1} из ${total}</span></div>
        <ol class="quiz-progress" aria-hidden="true">${renderProgress()}</ol>
        <h3 class="quiz-question" tabindex="-1">${escapeHtml(question.question)}</h3>
        <div class="quiz-options" role="group" aria-label="Варианты ответа">${options}</div>
        ${feedback}
      </div>`;
  };

  const renderResult = () => {
    const total = state.questions.length;
    const score = state.answers.filter(answer => answer.correct).length;
    const ratio = score / total;
    const headline = ratio === 1 ? 'Все ответы верны' : ratio >= 0.7 ? 'Хороший результат' : ratio >= 0.4 ? 'Есть что подтянуть' : 'Стоит пересмотреть уроки';

    const missed = [];
    state.questions.forEach((question, i) => {
      if (!state.answers[i].correct && !missed.some(lesson => lesson.videoId === question.lesson.videoId)) missed.push(question.lesson);
    });

    const review = missed.length
      ? `<p class="quiz-result-text">Ошибки были в этих темах. Посмотри уроки ещё раз и пройди опросник заново.</p>
        <ul class="quiz-review">${missed.map(lesson => `<li class="quiz-review-item quiz-review-item--${lesson.subject}"><div><span class="quiz-review-topic">${escapeHtml(lesson.subjectLabel)} · ${escapeHtml(lesson.topic)}</span><strong>${escapeHtml(lesson.title)}</strong></div><button type="button" class="video-card-open" data-video-id="${escapeHtml(lesson.videoId)}" aria-label="Смотреть урок: ${escapeHtml(lesson.title)}">Смотреть урок <span aria-hidden="true">↗</span></button></li>`).join('')}</ul>`
      : '<p class="quiz-result-text">Ошибок нет. Чтобы закрепить результат, подставь свои числа в формулы на калькуляторах.</p>';

    card.className = 'quiz-card';
    card.innerHTML = `<div class="quiz-art" aria-hidden="true"><span class="video-card-art-grid"></span><span class="quiz-art-subject">Итог</span><span class="quiz-art-mark">${score} / ${total}</span><span class="quiz-art-caption">верных ответов</span></div>
      <div class="quiz-body">
        <div class="quiz-meta"><span class="quiz-topic">Опросник пройден</span><span class="quiz-counter">Верно: ${score} из ${total}</span></div>
        <ol class="quiz-progress" aria-hidden="true">${renderProgress()}</ol>
        <h3 class="quiz-question" tabindex="-1">${headline}</h3>
        ${review}
        <div class="quiz-actions quiz-actions--end">
          <button type="button" class="quiz-primary" data-quiz-restart>Пройти ещё раз</button>
          <a class="quiz-secondary" href="calculators.html">К калькуляторам</a>
        </div>
      </div>`;
    announcer.textContent = `Опросник пройден. Верно ${score} из ${total}. ${headline}.`;
  };

  const start = (subject, shouldFocus = false) => {
    state.subject = subject;
    state.questions = buildQuizSession(subject);
    state.answers = [];
    state.index = 0;
    filters.forEach(button => {
      const selected = button.dataset.quizSubject === subject;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    const total = state.questions.length;
    const label = `${total} ${pluralize(total, ['вопрос', 'вопроса', 'вопросов'])}`;
    count.textContent = subject === 'all' ? `${label}, по одному на каждый урок` : `${label} по теме «${root.querySelector(`[data-quiz-subject="${subject}"]`).textContent}»`;
    renderQuestion();
    if (shouldFocus) focusHeading();
  };

  const choose = optionIndex => {
    if (state.answers[state.index]) return;
    const question = state.questions[state.index];
    const correct = question.options[optionIndex].correct;
    state.answers[state.index] = { chosen: optionIndex, correct };
    renderQuestion();
    card.querySelector('[data-quiz-next]')?.focus({ preventScroll: true });
    announcer.textContent = correct
      ? 'Верно. ' + question.explanation
      : `Не совсем. Правильный ответ: ${question.options.find(option => option.correct).text}. ${question.explanation}`;
  };

  const next = () => {
    if (!state.answers[state.index]) return;
    if (state.index < state.questions.length - 1) {
      state.index++;
      renderQuestion();
    } else {
      renderResult();
    }
    focusHeading();
  };

  const onCardClick = event => {
    const option = event.target.closest('[data-option]');
    if (option) return choose(Number(option.dataset.option));
    if (event.target.closest('[data-quiz-next]')) return next();
    if (event.target.closest('[data-quiz-restart]')) start(state.subject, true);
  };

  const onFilterClick = event => {
    const button = event.target.closest('[data-quiz-subject]');
    if (button && button.dataset.quizSubject !== state.subject) start(button.dataset.quizSubject);
  };

  card.addEventListener('click', onCardClick);
  root.querySelector('.tutorial-subject-filters').addEventListener('click', onFilterClick);
  cleanup.push(() => {
    card.removeEventListener('click', onCardClick);
    root.querySelector('.tutorial-subject-filters')?.removeEventListener('click', onFilterClick);
  });

  start('all');
}

function initTutorials() {
  if (!document.querySelector('.tutorials-page')) return;
  window.__unicalcTutorialCleanup?.();
  const cleanup = [];
  window.__unicalcTutorialCleanup = () => cleanup.splice(0).forEach(dispose => dispose());

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
    const updateOnResize = () => updateCarouselControls(section);
    window.addEventListener('resize', updateOnResize, { passive: true });
    cleanup.push(() => window.removeEventListener('resize', updateOnResize));
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

  document.querySelector('.tutorials-page')?.addEventListener('click', event => {
    const trigger = event.target.closest('.video-card-open');
    if (trigger) openVideo(trigger);
  });
  closeButton.addEventListener('click', closeVideo);
  modal.addEventListener('click', event => {
    if (event.target === modal || event.target.closest('[data-video-dismiss]')) closeVideo();
  });
  dialog.addEventListener('keydown', event => {
    if (!modal.hidden && event.key === 'Escape') {
      event.preventDefault();
      closeVideo();
    }
  });

  applyFilters();
  initQuiz(cleanup);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initTutorials, { once: true });
else initTutorials(); 