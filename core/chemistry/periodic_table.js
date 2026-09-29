import readline from 'readline';
import { Elements } from '@chemistry/formula';

export const RUSSIAN_NAMES_BY_SYMBOL = {
  H: "Водород", He: "Гелий", Li: "Литий", Be: "Бериллий", B: "Бор", C: "Углерод", N: "Азот", O: "Кислород",
  F: "Фтор", Ne: "Неон", Na: "Натрий", Mg: "Магний", Al: "Алюминий", Si: "Кремний", P: "Фосфор", S: "Сера",
  Cl: "Хлор", Ar: "Аргон", K: "Калий", Ca: "Кальций", Sc: "Скандий", Ti: "Титан", V: "Ванадий", Cr: "Хром",
  Mn: "Марганец", Fe: "Железо", Co: "Кобальт", Ni: "Никель", Cu: "Медь", Zn: "Цинк", Ga: "Галлий", Ge: "Германий",
  As: "Мышьяк", Se: "Селен", Br: "Бром", Kr: "Криптон", Rb: "Рубидий", Sr: "Стронций", Y: "Иттрий", Zr: "Цирконий",
  Nb: "Ниобий", Mo: "Молибден", Tc: "Технеций", Ru: "Рутений", Rh: "Родий", Pd: "Палладий", Ag: "Серебро",
  Cd: "Кадмий", In: "Индий", Sn: "Олово", Sb: "Сурьма", Te: "Теллур", I: "Иод", Xe: "Ксенон", Cs: "Цезий",
  Ba: "Барий", La: "Лантан", Ce: "Церий", Pr: "Празеодим", Nd: "Неодим", Pm: "Прометий", Sm: "Самарий", Eu: "Европий",
  Gd: "Гадолиний", Tb: "Тербий", Dy: "Диспрозий", Ho: "Гольмий", Er: "Эрбий", Tm: "Тулий", Yb: "Иттербий", Lu: "Лютеций",
  Hf: "Гафний", Ta: "Тантал", W: "Вольфрам", Re: "Рений", Os: "Осмий", Ir: "Иридий", Pt: "Платина", Au: "Золото",
  Hg: "Ртуть", Tl: "Таллий", Pb: "Свинец", Bi: "Висмут", Po: "Полоний", At: "Астат", Rn: "Радон", Fr: "Франций",
  Ra: "Радий", Ac: "Актиний", Th: "Торий", Pa: "Протактиний", U: "Уран", Np: "Нептуний", Pu: "Плутоний", Am: "Америций",
  Cm: "Кюрий", Bk: "Берклий", Cf: "Калифорний", Es: "Эйнштейний", Fm: "Фермий", Md: "Менделевий", No: "Нобелий",
  Lr: "Лоуренсий", Rf: "Резерфордий", Db: "Дубний", Sg: "Сиборгий", Bh: "Борий", Hs: "Хассий", Mt: "Мейтнерий",
  Ds: "Дармштадтий", Rg: "Рентгений", Cn: "Коперниций", Nh: "Нихоний", Fl: "Флеровий", Mc: "Московий", Lv: "Ливерморий",
  Ts: "Теннессин", Og: "Оганесон"
};

const RUSSIAN_TO_SYMBOL = Object.fromEntries(
  Object.entries(RUSSIAN_NAMES_BY_SYMBOL).map(([symbol, name]) => [name.toLowerCase(), symbol])
);

export const MAIN_TABLE_LAYOUT = {
  1: [1, ...Array(16).fill(null), 2],
  2: [3, 4, ...Array(10).fill(null), 5, 6, 7, 8, 9, 10],
  3: [11, 12, ...Array(10).fill(null), 13, 14, 15, 16, 17, 18],
  4: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
  5: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  6: [55, 56, 57, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
  7: [87, 88, 89, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118]
};

function promptInput(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => rl.question(query, answer => {
    rl.close();
    resolve(answer.trim());
  }));
}

export function periodByNumber(number) {
  if (number <= 2) return 1;
  if (number <= 10) return 2;
  if (number <= 18) return 3;
  if (number <= 36) return 4;
  if (number <= 54) return 5;
  if (number <= 86) return 6;
  return 7;
}

export function groupByNumber(number) {
  for (const [period, row] of Object.entries(MAIN_TABLE_LAYOUT)) {
    if (!row.includes(number)) continue;
    return row.indexOf(number) + 1;
  }

  if (number >= 57 && number <= 71) return "Ln";
  if (number >= 89 && number <= 103) return "An";
  return "—";
}

export function blockByNumber(number) {
  if ((number >= 57 && number <= 71) || (number >= 89 && number <= 103)) return "f";
  if ([1, 2, 3, 4, 11, 12, 19, 20, 37, 38, 55, 56, 87, 88].includes(number)) return "s";
  if (
    (number >= 21 && number <= 30) ||
    (number >= 39 && number <= 48) ||
    (number >= 72 && number <= 80) ||
    (number >= 104 && number <= 112)
  ) {
    return "d";
  }
  return "p";
}

export function formatMass(value) {
  if (value === null || value === undefined) return "—";
  const mass = parseFloat(value);
  if (isNaN(mass)) return "—";
  return mass.toFixed(3).replace(/\.?0+$/, '');
}

export function normalizeSymbol(query) {
  const q = query.trim();
  if (!q) return q;
  if (q.length === 1) return q.toUpperCase();
  return q[0].toUpperCase() + q.slice(1).toLowerCase();
}

export function findElement(query) {
  const text = query.trim();
  if (!text) return null;

  let el = null;

  // 1. Поиск по атомному номеру
  if (/^\d+$/.test(text)) {
    const num = parseInt(text, 10);
    try {
      el = Elements.get(num);
    } catch (_) {}
    if (el) return el;
  }

  // 2. Поиск по символу
  const normalized = normalizeSymbol(text);
  try {
    el = Elements.get(normalized);
  } catch (_) {}
  if (el) return el;

  // 3. Поиск по русскому названию
  const symbolFromRu = RUSSIAN_TO_SYMBOL[text.toLowerCase()];
  if (symbolFromRu) {
    try {
      return Elements.get(symbolFromRu);
    } catch (_) {}
  }

  // 4. Поиск по английскому названию (перебор через Elements)
  for (let i = 1; i <= 118; i++) {
    try {
      const e = Elements.get(i);
      if (e && e.name && e.name.toLowerCase() === text.toLowerCase()) {
        return e;
      }
    } catch (_) {}
  }

  return null;
}

export function buildCard(element) {
  const russianName = RUSSIAN_NAMES_BY_SYMBOL[element.symbol] || element.name;
  const mass = formatMass(element.mass);
  return `${String(element.number).padStart(3)} ${element.symbol.padEnd(2)} ${russianName.padEnd(13)} ${mass.padStart(8)}`;
}

export function printPeriodicTable() {
  console.log("Таблица Менделеева на русском языке");
  console.log("=".repeat(40));
  console.log("Основная таблица");

  for (let period = 1; period <= 7; period++) {
    const rowNumbers = MAIN_TABLE_LAYOUT[period];
    const cards = [];
    for (const number of rowNumbers) {
      if (number === null) {
        cards.push(" ".repeat(28));
        continue;
      }
      cards.push(buildCard(Elements.get(number)));
    }
    console.log(`Период ${period}: ` + cards.join(" | "));
  }

  console.log("\nЛантаноиды:");
  const lanthanides = [];
  for (let n = 57; n <= 71; n++) lanthanides.push(buildCard(Elements.get(n)));
  console.log(lanthanides.join(" | "));

  console.log("\nАктиноиды:");
  const actinides = [];
  for (let n = 89; n <= 103; n++) actinides.push(buildCard(Elements.get(n)));
  console.log(actinides.join(" | "));
}

export function printElementInfo(query) {
  const element = findElement(query);
  if (!element) {
    console.log("Элемент не найден");
    return;
  }

  const russianName = RUSSIAN_NAMES_BY_SYMBOL[element.symbol] || element.name;
  console.log("Подробная карточка элемента");
  console.log("-".repeat(30));
  console.log(`Атомный номер: ${element.number}`);
  console.log(`Символ: ${element.symbol}`);
  console.log(`Название: ${russianName}`);
  console.log(`Английское название: ${element.name}`);
  console.log(`Период: ${periodByNumber(element.number)}`);
  console.log(`Группа: ${groupByNumber(element.number)}`);
  console.log(`Блок: ${blockByNumber(element.number)}`);
  console.log(`Относительная атомная масса: ${formatMass(element.mass)}`);
}

export async function runConsoleChemistry() {
  const action = await promptInput("Химия: (Показать таблицу - 1; Найти элемент - 2;)");

  if (action === "1") {
    printPeriodicTable();
    return;
  }

  if (action === "2") {
    const query = await promptInput("Введите номер, символ или название элемента: ");
    printElementInfo(query);
    return;
  }

  console.log("Неизвестное действие");
}