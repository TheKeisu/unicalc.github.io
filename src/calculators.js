import * as chemistryCalcs from '../core/chemistry/general/calculations.js';
import * as mechanicsCalcs from '../core/physics/mechanics/calculations.js';
import * as thermodynamicsCalcs from '../core/physics/thermodynamics/calculations.js';
import * as electrodynamicsCalcs from '../core/physics/electrodynamics/calculations.js';
import * as opticsCalcs from '../core/physics/optics/calculations.js';

import { FORMULAS as CHEMISTRY_FORMULAS } from '../core/chemistry/general/enum.js';
import { FORMULAS as MECHANICS_FORMULAS } from '../core/physics/mechanics/enum.js';
import { FORMULAS as THERMODYNAMICS_FORMULAS } from '../core/physics/thermodynamics/enum.js';
import { FORMULAS as ELECTRODYNAMICS_FORMULAS } from '../core/physics/electrodynamics/enum.js';
import { FORMULAS as OPTICS_FORMULAS } from '../core/physics/optics/enum.js';

import { molarMassFromFormula, parseChemicalFormula, ATOMIC_MASSES } from '../core/chemistry/general/formula_utils.js';
import { RUSSIAN_NAMES_BY_SYMBOL, MAIN_TABLE_LAYOUT, periodByNumber, groupByNumber, blockByNumber, PERIODIC_BLOCKS } from '../core/chemistry/periodic_table_data.js';
import { MATH_GROUPS } from '../core/math/registry.js';

const GROUPS = [
  { key: 'chemistry', subject: 'chemistry', label: 'Химия', icon: '⚗', formulas: CHEMISTRY_FORMULAS, calculations: chemistryCalcs, topicLabel: 'Общие формулы' },
  { key: 'mechanics', subject: 'physics', label: 'Механика', icon: '↗', formulas: MECHANICS_FORMULAS, calculations: mechanicsCalcs, topicLabel: 'Механика' },
  { key: 'thermodynamics', subject: 'physics', label: 'Термодинамика', icon: '≈', formulas: THERMODYNAMICS_FORMULAS, calculations: thermodynamicsCalcs, topicLabel: 'Термодинамика' },
  { key: 'electrodynamics', subject: 'physics', label: 'Электродинамика', icon: 'ϟ', formulas: ELECTRODYNAMICS_FORMULAS, calculations: electrodynamicsCalcs, topicLabel: 'Электродинамика' },
  { key: 'optics', subject: 'physics', label: 'Оптика', icon: '◌', formulas: OPTICS_FORMULAS, calculations: opticsCalcs, topicLabel: 'Оптика' },
  ...MATH_GROUPS,
];

const SUBJECTS = [
  { key: 'all', label: 'Все предметы' },
  { key: 'chemistry', label: 'Химия' },
  { key: 'physics', label: 'Физика' },
  { key: 'math', label: 'Математика' },
];

const CHEMISTRY_TOPIC_SECTIONS = [
  { label: 'Основы химии', topics: [
    { key: 'chem_stoichiometry', label: 'Количество вещества и стехиометрия', group: 'chemistry', keys: ['substance_amount', 'molar_mass', 'particles_count', 'mass_conservation', 'reaction_yield', 'reaction_stoichiometry'], ids: ['chemistry.avogadro_number', 'chemistry.substance_amount_by_formula', 'chemistry.molar_mass_by_formula', 'chemistry.reaction_stoichiometry'], aliases: ['моль', 'число частиц', 'уравнение реакции', 'выход реакции'] },
    { key: 'chem_gases', label: 'Газы', group: 'chemistry', keys: ['ideal_gas_law', 'gas_volume_by_substance', 'gas_density'], ids: ['chemistry.molar_volume'], aliases: ['уравнение Менделеева-Клапейрона', 'объём газа', 'молярный объём', 'плотность газа'] },
  ] },
  { label: 'Растворы и реакции', topics: [
    { key: 'chem_solutions', label: 'Растворы и концентрация', group: 'chemistry', keys: ['mass_fraction', 'molar_concentration', 'solution_mass', 'freezing_point_depression', 'boiling_point_elevation'], aliases: ['массовая доля', 'концентрация', 'криоскопия', 'эбулиоскопия'] },
    { key: 'chem_acid_base', label: 'Кислоты и основания', group: 'chemistry', keys: ['ph', 'poh', 'ph_poh_relation'], aliases: ['водородный показатель', 'гидроксидный показатель', 'кислотность'] },
    { key: 'chem_kinetics', label: 'Скорость и равновесие реакций', group: 'chemistry', keys: ['equilibrium_constant', 'reaction_rate', 'rate_law'], aliases: ['химическая кинетика', 'закон действующих масс', 'константа равновесия'] },
  ] },
  { label: 'Энергия и физическая химия', topics: [
    { key: 'chem_thermochemistry', label: 'Тепловые эффекты', group: 'chemistry', keys: ['heat_amount', 'reaction_heat_effect'], aliases: ['теплота', 'энтальпия', 'термохимия'] },
    { key: 'chem_electrochemistry', label: 'Электрохимия и электролиз', group: 'chemistry', keys: ['faraday_law'], aliases: ['закон Фарадея', 'электролиз'] },
    { key: 'chem_photon', label: 'Фотоны и энергия', group: 'chemistry', keys: ['photon_energy'], aliases: ['энергия фотона', 'частота излучения', 'квантовая химия'] },
  ] },
];

const PHYSICS_TOPIC_SECTIONS = [
  { label: 'Механика', topics: [
    { key: 'physics_fluids', label: 'Давление и жидкости', group: 'mechanics', keys: ['pressure', 'density', 'pressure_depth', 'archimedes_force'], aliases: ['гидростатика', 'давление на глубине', 'выталкивающая сила'] },
    { key: 'physics_kinematics', label: 'Кинематика', group: 'mechanics', keys: ['accelerated_motion', 'circle_speed', 'centripetal_acceleration'], aliases: ['движение', 'скорость', 'ускорение'] },
    { key: 'physics_dynamics', label: 'Силы и динамика', group: 'mechanics', keys: ['gravity', 'newtons_second_law', 'elastic_force', 'frictional_force'], aliases: ['законы Ньютона', 'сила тяжести', 'сила трения'] },
    { key: 'physics_momentum', label: 'Импульс', group: 'mechanics', keys: ['impulse_body', 'impulse_force'], aliases: ['импульс тела', 'импульс силы'] },
    { key: 'physics_statics', label: 'Статика и равновесие', group: 'mechanics', keys: ['moment_of_force'], aliases: ['момент силы', 'рычаг'] },
    { key: 'physics_energy', label: 'Работа, энергия и мощность', group: 'mechanics', keys: ['raised_potential_energy', 'deformed_potential_energy', 'kinetic_energy', 'work', 'power_wt', 'cop'], aliases: ['кинетическая энергия', 'потенциальная энергия', 'КПД'] },
    { key: 'physics_waves', label: 'Колебания и волны', group: 'mechanics', keys: ['period_sm', 'period_sp', 'harmonic_oscillation', 'wave_length'], aliases: ['маятник', 'гармонические колебания', 'длина волны'] },
  ] },
  { label: 'Термодинамика', topics: [
    { key: 'physics_molecular', label: 'Молекулярная физика', group: 'thermodynamics', keys: ['substance_amount', 'avg_kinetic_energy', 'relative_humidity', 'internal_energy_ideal_gas'], aliases: ['идеальный газ', 'молекулы', 'влажность'] },
    { key: 'physics_heat', label: 'Количество теплоты', group: 'thermodynamics', keys: ['heat_amount_heating', 'heat_amount_melting', 'heat_amount_vaporization', 'heat_amount_combustion'], aliases: ['нагревание', 'плавление', 'парообразование', 'сгорание'] },
    { key: 'physics_thermo_processes', label: 'Работа газа и тепловые машины', group: 'thermodynamics', keys: ['gas_work', 'first_thermodynamics_law', 'cop_thermal_engine', 'cop_ideal_engine'], aliases: ['первый закон термодинамики', 'цикл Карно', 'КПД двигателя'] },
  ] },
  { label: 'Электродинамика', topics: [
    { key: 'physics_electrostatics', label: 'Электрическое поле и потенциал', group: 'electrodynamics', keys: ['coulombs_law', 'el_field_intensity', 'point_charge_el_field_intensity', 'surface_charge_density', 'infinity_surface_el_field_intensity', 'dielectric_constant', 'interacting_charges_potential_energy', 'potential', 'point_charge_potential', 'voltage', 'el_field_voltage'], aliases: ['электростатика', 'закон Кулона', 'напряжённость', 'потенциал'] },
    { key: 'physics_capacitors', label: 'Конденсаторы', group: 'electrodynamics', keys: ['el_capacity', 'flat_capacitor_el_capacity'], aliases: ['электроёмкость', 'ёмкость конденсатора'] },
    { key: 'physics_dc', label: 'Постоянный ток и цепи', group: 'electrodynamics', keys: ['current', 'conductor_resistance', 'section_circuit_ohms_law', 'el_current_power', 'joule_lenz_law', 'full_circuit_ohms_law', 'short_circuit_current'], aliases: ['закон Ома', 'сопротивление', 'мощность тока', 'короткое замыкание'] },
    { key: 'physics_magnetism', label: 'Магнитное поле', group: 'electrodynamics', keys: ['magnetic_induction_vector', 'amperes_force', 'lorentz_force', 'magnetic_flux'], aliases: ['сила Ампера', 'сила Лоренца', 'магнитный поток'] },
    { key: 'physics_induction', label: 'Электромагнитная индукция', group: 'electrodynamics', keys: ['electromagnetic_induction_law', 'emf_moving_conductor', 'emf_self_induction', 'coil_magnetic_field_energy'], aliases: ['ЭДС', 'самоиндукция', 'закон Фарадея'] },
    { key: 'physics_ac', label: 'Переменный ток', group: 'electrodynamics', keys: ['oscillating_circuit_period', 'inductive_resistance', 'capacitive_resistance', 'actual_current_value', 'actual_voltage_value', 'total_resistance'], aliases: ['колебательный контур', 'действующее значение', 'реактивное сопротивление'] },
  ] },
  { label: 'Оптика', topics: [
    { key: 'physics_geometric_optics', label: 'Геометрическая оптика', group: 'optics', keys: ['reflection_law', 'refractive_index', 'thin_lens', 'optical_power'], ids: ['optics.refraction_velocity'], aliases: ['преломление', 'линза', 'показатель преломления'] },
    { key: 'physics_wave_optics', label: 'Волновая оптика', group: 'optics', keys: ['interference', 'diffraction_grating'], ids: ['optics.interference_min_wavelength'], aliases: ['интерференция', 'дифракция'] },
  ] },
];

const MATH_DOMAIN_BY_KEY = {
  math_arithmetic: 'Числа и алгебра',
  math_algebra: 'Числа и алгебра',
  math_equations_inequalities: 'Числа и алгебра',
  math_progressions: 'Последовательности и комбинаторика',
  math_combinatorics: 'Последовательности и комбинаторика',
  math_planimetry: 'Геометрия',
  math_stereometry: 'Геометрия',
  math_trigonometry: 'Геометрия',
  math_functions_graphs: 'Функции и графики',
  math_analytic_geometry_plane: 'Геометрия',
  math_analytic_geometry_space: 'Геометрия',
  math_remarkable_curves: 'Геометрия',
  math_limits: 'Математический анализ',
  math_differential_calculus: 'Математический анализ',
  math_integral_calculus: 'Математический анализ',
  math_series_fourier: 'Математический анализ',
  math_multivariable: 'Математический анализ',
  math_differential_equations: 'Математический анализ',
  math_complex_numbers: 'Комплексные числа',
};

const MATH_TOPIC_SECTIONS = [
  { label: 'Элементарная математика', branch: 'elementary', topics: MATH_GROUPS.filter(group => group.branch === 'elementary').map(group => ({ key: group.key, label: group.label, group: group.key, section: MATH_DOMAIN_BY_KEY[group.key], aliases: [group.label] })) },
  { label: 'Высшая математика', branch: 'higher', topics: MATH_GROUPS.filter(group => group.branch === 'higher').map(group => ({ key: group.key, label: group.label, group: group.key, section: MATH_DOMAIN_BY_KEY[group.key], aliases: [group.label] })) },
];

const TOPIC_SECTIONS_BY_SUBJECT = {
  chemistry: CHEMISTRY_TOPIC_SECTIONS,
  physics: PHYSICS_TOPIC_SECTIONS,
  math: MATH_TOPIC_SECTIONS,
};

function classifyFormula(formula) {
  if (formula.subjectKey === 'math') {
    const section = MATH_TOPIC_SECTIONS.find(item => item.branch === formula.branch);
    return { topicKey: formula.groupKey, topicLabel: formula.groupLabel, topicSection: section?.label || '', searchAliases: [section?.label || ''] };
  }

  const sections = TOPIC_SECTIONS_BY_SUBJECT[formula.subjectKey] || [];
  const matchesFormula = item =>
    (item.group === formula.groupKey && item.keys?.includes(formula.key)) || item.ids?.includes(formula.id);
  const section = sections.find(candidate => candidate.topics.some(matchesFormula));
  const topic = section?.topics.find(matchesFormula);
  return topic
    ? { topicKey: topic.key, topicLabel: topic.label, topicSection: section.label, searchAliases: topic.aliases || [] }
    : { topicKey: formula.groupKey, topicLabel: formula.groupLabel, topicSection: formula.groupLabel, searchAliases: [] };
}

const EXTRA_FORMULAS = [
  {
    groupKey: 'chemistry',
    id: 'chemistry.avogadro_number',
    title: 'Число Авогадро через частицы',
    description: 'Вычисление постоянной Авогадро по числу частиц и количеству вещества.',
    formula_view: 'Nₐ = N / n',
    cases: {
      1: { name: 'Найти число Авогадро', inputs: [['N', 'Число частиц'], ['n', 'Количество вещества']], output: 'Число Авогадро', function: 'calc_avogadro_number', SI: '1/моль' }
    }
  },
  {
    groupKey: 'chemistry',
    id: 'chemistry.substance_amount_by_formula',
    title: 'Количество вещества по формуле',
    description: 'Количество вещества по массе и химической формуле вещества.',
    formula_view: 'n = m / M(формула)',
    cases: {
      1: { name: 'Найти количество вещества', inputs: [['m', 'Масса'], ['formula', 'Химическая формула']], output: 'Количество вещества', function: 'calc_substance_amount_by_formula', SI: 'моль' }
    }
  },
  {
    groupKey: 'chemistry',
    id: 'chemistry.molar_mass_by_formula',
    title: 'Молярная масса по формуле',
    description: 'Расчёт молярной массы непосредственно по химической формуле.',
    formula_view: 'M = Σ(Ar · индекс)',
    cases: {
      1: { name: 'Найти молярную массу', inputs: [['formula', 'Химическая формула']], output: 'Молярная масса', function: 'calc_molar_mass_by_formula', SI: 'г/моль' }
    }
  },
  {
    groupKey: 'chemistry',
    id: 'chemistry.molar_volume',
    title: 'Молярный объём',
    description: 'Молярный объём вещества по объёму и количеству вещества.',
    formula_view: 'Vₘ = V / n',
    cases: {
      1: { name: 'Найти молярный объём', inputs: [['V', 'Объём'], ['n', 'Количество вещества']], output: 'Молярный объём', function: 'calc_molar_volume', SI: 'л/моль' }
    }
  },
  {
    groupKey: 'optics',
    id: 'optics.refraction_velocity',
    title: 'Показатель преломления через скорости',
    description: 'Связь относительного показателя преломления и скоростей света в двух средах.',
    formula_view: 'n₂₁ = v₁ / v₂',
    cases: {
      1: { name: 'Найти относительный показатель преломления', inputs: [['v1', 'Скорость света в первой среде'], ['v2', 'Скорость света во второй среде']], output: 'Относительный показатель преломления', function: 'calc_n21_from_v1_v2', SI: '' },
      2: { name: 'Найти скорость в первой среде', inputs: [['n21', 'Относительный показатель преломления'], ['v2', 'Скорость света во второй среде']], output: 'Скорость в первой среде', function: 'calc_v1_from_n21_v2', SI: 'м/с' },
      3: { name: 'Найти скорость во второй среде', inputs: [['v1', 'Скорость света в первой среде'], ['n21', 'Относительный показатель преломления']], output: 'Скорость во второй среде', function: 'calc_v2_from_v1_n21', SI: 'м/с' }
    }
  },
  {
    groupKey: 'optics',
    id: 'optics.interference_min_wavelength',
    title: 'Длина волны для минимума интерференции',
    description: 'Длина волны из условия минимума интерференции.',
    formula_view: 'λ = 2Δd / (2k + 1)',
    cases: {
      1: { name: 'Найти длину волны', inputs: [['delta', 'Разность хода Δd'], ['k', 'Порядок']], output: 'Длина волны', function: 'calc_lambda_from_delta_min_k', SI: 'м' }
    }
  }
];

const ALL_FORMULAS = [];
for (const group of GROUPS) {
  for (const [key, metadata] of Object.entries(group.formulas)) {
    ALL_FORMULAS.push({ ...metadata, id: `${group.key}.${key}`, key, groupKey: group.key, subjectKey: group.subject, groupLabel: group.label, icon: group.icon, calculations: group.calculations, solver: group.solver || {}, branch: group.branch || '', topicLabel: group.topicLabel });
  }
}
for (const extra of EXTRA_FORMULAS) {
  const group = GROUPS.find(item => item.key === extra.groupKey);
  ALL_FORMULAS.push({ ...extra, subjectKey: extra.subjectKey || group.subject, groupLabel: group.label, icon: group.icon, calculations: group.calculations, topicLabel: group.topicLabel });
}
for (const formula of ALL_FORMULAS) Object.assign(formula, classifyFormula(formula));

const REACTION_EQUATION = {
  id: 'chemistry.reaction_stoichiometry',
  title: CHEMISTRY_FORMULAS.reaction_stoichiometry.title,
  description: CHEMISTRY_FORMULAS.reaction_stoichiometry.description,
  formula_view: 'реагенты → продукт',
  groupKey: 'chemistry',
  subjectKey: 'chemistry',
  groupLabel: 'Химия',
  icon: '⚗'
};
Object.assign(REACTION_EQUATION, classifyFormula(REACTION_EQUATION));


const PERIODIC_ELEMENTS = Object.entries(ATOMIC_MASSES).map(([symbol, mass], index) => ({
  number: index + 1,
  symbol,
  name: RUSSIAN_NAMES_BY_SYMBOL[symbol] || symbol,
  mass,
  period: periodByNumber(index + 1),
  group: groupByNumber(index + 1),
  block: blockByNumber(index + 1)
}));

const PERIODIC_POSITIONS = new Map();
for (const [period, row] of Object.entries(MAIN_TABLE_LAYOUT)) {
  row.forEach((number, index) => {
    if (number) PERIODIC_POSITIONS.set(number, { period: Number(period), group: index + 1 });
  });
}

function periodicElementSearchText(element) {
  return `${element.number} ${element.symbol} ${element.name} ${element.mass} ${element.period} ${element.group} ${PERIODIC_BLOCKS[element.block] || ''}`.toLowerCase();
}

function renderPeriodicTable() {
  const section = document.getElementById('periodicTableSection');
  const grid = document.getElementById('periodicTableGrid');
  const search = document.getElementById('periodicSearch');
  const detail = document.getElementById('periodicDetail');
  const count = document.getElementById('periodicResultCount');
  if (!section || !grid || !search || !detail || !count) return;

  const tableNumbers = new Set();
  Object.values(MAIN_TABLE_LAYOUT).forEach(row => row.forEach(n => n && tableNumbers.add(n)));

  const createCell = (element, extraClass = '') => {
    const pos = PERIODIC_POSITIONS.get(element.number) || {};
    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = `element-cell block-${element.block} ${extraClass}`;
    if (pos.group) cell.style.gridColumn = String(pos.group);
    if (pos.period) cell.style.gridRow = String(pos.period);
    cell.dataset.number = String(element.number);
    cell.dataset.search = periodicElementSearchText(element);
    cell.setAttribute('aria-label', `${element.number}. ${element.name} (${element.symbol})`);
    cell.innerHTML = `<span class="element-number">${element.number}</span><strong>${element.symbol}</strong><span class="element-name">${element.name}</span><small>${formatResult(element.mass)}</small>`;
    cell.addEventListener('click', () => showPeriodicElement(element));
    return cell;
  };

  grid.innerHTML = '';
  for (const period of Object.keys(MAIN_TABLE_LAYOUT).map(Number)) {
    MAIN_TABLE_LAYOUT[period].forEach(number => {
      if (!number) return;
      const element = PERIODIC_ELEMENTS[number - 1];
      if (element) grid.appendChild(createCell(element));
    });
  }

  const lanthanides = document.getElementById('lanthanidesGrid');
  const actinides = document.getElementById('actinidesGrid');
  lanthanides.innerHTML = '';
  actinides.innerHTML = '';
  for (let number = 58; number <= 71; number++) lanthanides.appendChild(createCell(PERIODIC_ELEMENTS[number - 1], 'series-cell'));
  for (let number = 90; number <= 103; number++) actinides.appendChild(createCell(PERIODIC_ELEMENTS[number - 1], 'series-cell'));

  const showPeriodicElement = element => {
    detail.innerHTML = `<div class="element-detail-symbol"><span>${element.number}</span><strong>${element.symbol}</strong></div><div class="element-detail-main"><div class="element-detail-name">${escapeHtml(element.name)}</div><div class="element-detail-grid"><div><span>Атомная масса</span><strong>${escapeHtml(formatResult(element.mass))}</strong></div><div><span>Период</span><strong>${element.period}</strong></div><div><span>Группа</span><strong>${element.group}</strong></div><div><span>Блок</span><strong>${escapeHtml(PERIODIC_BLOCKS[element.block] || element.block)}</strong></div></div></div>`;
    document.querySelectorAll('.element-cell.selected').forEach(item => item.classList.remove('selected'));
    document.querySelectorAll(`.element-cell[data-number="${element.number}"]`).forEach(item => item.classList.add('selected'));
  };

  window.__uniCalcShowPeriodicElement = showPeriodicElement;
  showPeriodicElement(PERIODIC_ELEMENTS[5]);

  const applySearch = () => {
    const query = search.value.trim().toLowerCase();
    let matches = 0;
    document.querySelectorAll('.element-cell').forEach(cell => {
      const show = !query || cell.dataset.search.includes(query);
      cell.hidden = !show;
      cell.classList.toggle('search-match', Boolean(query && show));
      if (show) matches += 1;
    });
    count.textContent = query ? `${matches} из 118 элементов` : '118 элементов';
  };
  search.oninput = applySearch;
  applySearch();

  section.__periodicReady = true;
}

const COMMON_OXIDATION_STATES = {
  H: 1, O: -2, F: -1, Cl: -1, Br: -1, I: -1, S: -2, N: -3, P: -3, C: 4,
  Na: 1, K: 1, Li: 1, Mg: 2, Ca: 2, Ba: 2, Al: 3, Zn: 2, Fe: 3, Cu: 2, Ag: 1, Pb: 2
};

const UNIT_HINTS = {
  chemistry: {
    default: 'Введите значение',
    mass: 'г', molar: 'г/моль', amount: 'моль', pressure: 'Па', temperature: 'K', concentration: 'моль/л', volume: 'л', current: 'А', time: 'с', energy: 'Дж', heat: 'Дж', formula: ''
  },
  mechanics: {
    default: 'Введите значение', mass: 'кг', pressure: 'Па', density: 'кг/м³', force: 'Н', area: 'м²', volume: 'м³', height: 'м', speed: 'м/с', acceleration: 'м/с²', time: 'с', radius: 'м', period: 'с', energy: 'Дж', work: 'Дж', power: 'Вт'
  },
  thermodynamics: {
    default: 'Введите значение', mass: 'кг', pressure: 'Па', density: 'кг/м³', volume: 'м³', temperature: 'K', energy: 'Дж', heat: 'Дж', time: 'с', power: 'Вт', amount: 'моль'
  },
  electrodynamics: {
    default: 'Введите значение', charge: 'Кл', force: 'Н', distance: 'м', field: 'Н/Кл', voltage: 'В', current: 'А', resistance: 'Ом', power: 'Вт', energy: 'Дж', time: 'с', area: 'м²', length: 'м', inductance: 'Гн', capacitance: 'Ф', frequency: 'Гц', magnetic: 'Тл'
  },
  optics: {
    default: 'Введите значение', speed: 'м/с', distance: 'м', wavelength: 'м', angle: 'рад', power: 'дптр'
  }
};

function inferUnit(groupKey, formulaKey, variable, label) {
  const raw = `${variable} ${label}`.toLowerCase();
  if (variable === 'formula') return '';
  if (raw.includes('угол')) return 'рад';
  if (raw.includes('синус')) return '';
  if (raw.includes('скорость')) return 'м/с';
  if (raw.includes('частот')) return 'Гц';
  if (raw.includes('длина волны')) return 'м';
  if (raw.includes('радиус')) return 'м';
  if (raw.includes('плечо')) return 'м';
  if (raw.includes('площад')) return groupKey === 'mechanics' || groupKey === 'electrodynamics' ? 'м²' : '';
  if (raw.includes('объем') || raw.includes('объём')) {
    if (groupKey === 'chemistry') return formulaKey === 'gas_volume_by_substance' || formulaKey === 'molar_concentration' || formulaKey === 'molar_volume' ? 'л' : 'м³';
    return 'м³';
  }
  if (raw.includes('масса')) return groupKey === 'chemistry' ? 'г' : 'кг';
  if (raw.includes('молярная масса')) return 'г/моль';
  if (raw.includes('количество вещества')) return 'моль';
  if (raw.includes('температур')) return 'K';
  if (raw.includes('давлен')) return 'Па';
  if (raw.includes('плотност')) return groupKey === 'chemistry' ? 'г/л' : 'кг/м³';
  if (raw.includes('сила ампера') || raw.includes('сила лоренца') || raw.includes('сила тяжести') || raw === 'f сила') return 'Н';
  if (raw.includes('сила тока')) return 'А';
  if (raw.includes('сопротивлен')) return 'Ом';
  if (raw.includes('мощност')) return 'Вт';
  if (raw.includes('заряд')) return 'Кл';
  if (raw.includes('время')) return 'с';
  if (raw.includes('энерги') || raw.includes('работ')) return 'Дж';
  if (raw.includes('напряж')) return 'В';
  if (raw.includes('напряженность') || raw.includes('напряжённость')) return 'Н/Кл';
  if (raw.includes('индуктив')) return 'Гн';
  if (raw.includes('электроёмк') || raw.includes('электроемк')) return 'Ф';
  if (raw.includes('индукци')) return 'Тл';
  if (raw.includes('длина')) return 'м';
  if (raw.includes('молярный объем') || raw.includes('молярный объём')) return 'л/моль';
  return '';
}

function inputType(variable, label) {
  const text = `${variable} ${label}`.toLowerCase();
  return variable === 'formula' || text.includes('химическая формула') ? 'text' : 'number';
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function splitTopLevel(value, delimiters) {
  const parts = [];
  const operators = [];
  let depth = 0;
  let start = 0;
  for (let index = 0; index < value.length; index++) {
    const character = value[index];
    if (character === '(') depth++;
    else if (character === ')') depth = Math.max(0, depth - 1);
    else if (depth === 0 && delimiters.has(character)) {
      parts.push(value.slice(start, index));
      operators.push(character);
      start = index + 1;
    }
  }
  parts.push(value.slice(start));
  return { parts, operators };
}

function formatFormulaText(value) {
  return escapeHtml(value)
    .replace(/_(\p{L}+)/gu, '<sub>$1</sub>')
    .replace(/(\p{L})(\d+)/gu, '$1<sub>$2</sub>')
    .replace(/\bK([fb])\b/g, 'K<sub>$1</sub>')
    .replace(/\^([\p{L}\d]+)/gu, '<sup>$1</sup>');
}

function formatFormulaAtom(value) {
  let output = '';
  let textStart = 0;
  for (let index = 0; index < value.length; index++) {
    if (value[index] !== '(') continue;
    let depth = 1;
    let end = index + 1;
    while (end < value.length && depth > 0) {
      if (value[end] === '(') depth++;
      else if (value[end] === ')') depth--;
      end++;
    }
    if (depth !== 0) continue;

    let prefix = value.slice(textStart, index);
    const isExponent = prefix.endsWith('^');
    if (isExponent) prefix = prefix.slice(0, -1);
    output += formatFormulaText(prefix);
    const inner = formatFormulaExpression(value.slice(index + 1, end - 1));
    output += isExponent
      ? `<sup class="math-exponent">${inner}</sup>`
      : `<span class="math-group">(${inner})</span>`;
    index = end - 1;
    textStart = end;
  }
  output += formatFormulaText(value.slice(textStart));
  return output.replace(/\*/g, ' · ');
}

function formatFormulaProduct(value) {
  const { parts, operators } = splitTopLevel(value, new Set(['*', '·', '/']));
  let output = formatFormulaAtom(parts[0]);
  operators.forEach((operator, index) => {
    const next = formatFormulaAtom(parts[index + 1]);
    if (operator === '/') {
      output = `<span class="math-fraction"><span class="math-fraction-numerator">${output}</span><span class="math-fraction-denominator">${next}</span></span>`;
    } else {
      output += `<span class="math-operator"> · </span>${next}`;
    }
  });
  return output;
}

function formatFormulaExpression(value) {
  const { parts, operators } = splitTopLevel(value, new Set(['=', '+', '−', '-', ',', ':']));
  let output = formatFormulaProduct(parts[0]);
  operators.forEach((operator, index) => {
    output += `${operator === ',' || operator === ':' ? escapeHtml(operator) : ` <span class="math-operator">${escapeHtml(operator)}</span> `}${formatFormulaProduct(parts[index + 1])}`;
  });
  return output;
}

function formatFormulaMarkup(value) {
  return formatFormulaExpression(String(value ?? ''));
}

function formatResult(value) {
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(item => formatResult(item)).join(', ');
  if (value && typeof value === 'object') return Object.entries(value).map(([key, item]) => `${key}: ${formatResult(item)}`).join('; ');
  if (!Number.isFinite(value)) throw new Error('Для этих исходных данных результат не определён. Проверьте введённые значения.');
  if (Object.is(value, -0)) value = 0;
  const absolute = Math.abs(value);
  if (absolute !== 0 && (absolute >= 1e8 || absolute < 1e-5)) {
    return value.toExponential(6).replace(/\.0+e/, 'e').replace(/(\.\d*?[1-9])0+e/, '$1e');
  }
  return Number(value.toPrecision(10)).toString();
}

function resultHtml(output, unit, value, extra = '') {
  const unitPart = unit ? `<span class="result-unit">${escapeHtml(unit)}</span>` : '';
  return `<div class="result-label">${escapeHtml(output)}</div><div class="result-value">${escapeHtml(formatResult(value))} ${unitPart}</div>${extra}`;
}

function validateInputs(values, metas) {
  for (const [index, value] of values.entries()) {
    const meta = metas[index];
    if (meta.type === 'text') {
      if (!value.trim()) throw new Error(`Заполните поле «${meta.label}».`);
      continue;
    }
    if (!Number.isFinite(value)) throw new Error(`Введите корректное число в поле «${meta.label}».`);
  }
}

function createNumericInput(key, label, formula, groupKey) {
  const type = inputType(key, label);
  const unit = inferUnit(groupKey, formula.key, key, label);
  if (type === 'text') {
    return `<label class="calc-field"><span class="field-title">${escapeHtml(label)}</span><span class="field-wrap"><input class="calc-input" data-key="${escapeHtml(key)}" name="${escapeHtml(key)}" type="text" placeholder="Например, H2SO4" autocomplete="off"></span></label>`;
  }
  const isOrder = key === 'k' || label.toLowerCase().includes('порядок');
  return `<label class="calc-field"><span class="field-title">${escapeHtml(label)}${unit ? ` <small>${escapeHtml(unit)}</small>` : ''}</span><span class="field-wrap"><input class="calc-input" data-key="${escapeHtml(key)}" name="${escapeHtml(key)}" type="number" inputmode="decimal" ${isOrder ? 'step="1"' : 'step="any"'} placeholder="Введите значение"></span></label>`;
}

function createStandardCalculator(formula) {
  const cases = Object.entries(formula.cases || {});
  const options = cases.map(([id, meta], index) => `<button type="button" class="case-option${index === 0 ? ' active' : ''}" data-case-id="${escapeHtml(id)}" aria-pressed="${index === 0 ? 'true' : 'false'}">${escapeHtml(meta.name)}</button>`).join('');
  const isMath = formula.subjectKey === 'math';
  return `<div class="calculator-panel${isMath ? ' math-calculator-panel' : ''}" data-formula-id="${escapeHtml(formula.id)}">
    <div class="case-row"><span class="select-label">Что найти</span><div class="case-options" role="group" aria-label="Что найти">${options}</div></div>
    <div class="calc-mode-switch" role="group" aria-label="Режим решения"><span class="mode-caption">Режим решения</span><button type="button" class="mode-btn active" data-mode="simple" aria-pressed="true">Кратко</button><button type="button" class="mode-btn" data-mode="detailed" aria-pressed="false">Подробное решение</button></div>
    <div class="case-description"></div>
    <form class="calc-form" novalidate></form>
    <div class="calc-message" aria-live="polite"></div>
  </div>`;
}

function formatMathInputs(meta, values) {
  return meta.inputs.map(([key, label], index) => `${escapeHtml(label)}: <strong>${escapeHtml(typeof values[index] === 'number' ? formatResult(values[index]) : values[index])}</strong>`).join('<span class="solution-data-item"></span>');
}

function drawGraph(canvas, spec) {
  if (!canvas || !spec?.points?.length) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  const width = Math.max(320, Math.round(rect.width || 700));
  const height = 310;
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.height = `${height}px`;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const css = getComputedStyle(document.documentElement);
  const text = css.getPropertyValue('--text-muted').trim() || '#94a3b8';
  const main = css.getPropertyValue('--emerald-main').trim() || '#34d399';
  const border = css.getPropertyValue('--border-color').trim() || 'rgba(255,255,255,.08)';
  ctx.clearRect(0, 0, width, height);
  const points = spec.points.filter(p => Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1]) && Math.abs(p[0]) < 1e6 && Math.abs(p[1]) < 1e6);
  if (!points.length) return;
  let minX = Math.min(...points.map(p => p[0])); let maxX = Math.max(...points.map(p => p[0]));
  let minY = Math.min(...points.map(p => p[1])); let maxY = Math.max(...points.map(p => p[1]));
  if (minX === maxX) { minX -= 1; maxX += 1; }
  if (minY === maxY) { minY -= 1; maxY += 1; }
  const padX = (maxX - minX) * 0.08; const padY = (maxY - minY) * 0.12;
  minX -= padX; maxX += padX; minY -= padY; maxY += padY;
  const left = 48, right = 18, top = 22, bottom = 30;
  const plotW = width - left - right, plotH = height - top - bottom;
  const sx = x => left + (x - minX) / (maxX - minX) * plotW;
  const sy = y => top + (maxY - y) / (maxY - minY) * plotH;
  ctx.strokeStyle = border; ctx.lineWidth = 1;
  const gridCount = 8;
  ctx.font = '11px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
  ctx.fillStyle = text;
  for (let i = 0; i <= gridCount; i++) {
    const x = left + plotW * i / gridCount;
    const y = top + plotH * i / gridCount;
    ctx.beginPath(); ctx.moveTo(x, top); ctx.lineTo(x, top + plotH); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(left, y); ctx.lineTo(left + plotW, y); ctx.stroke();
    const vx = minX + (maxX - minX) * i / gridCount;
    const vy = maxY - (maxY - minY) * i / gridCount;
    ctx.fillText(Number(vx.toPrecision(3)).toString(), x - 10, height - 8);
    ctx.fillText(Number(vy.toPrecision(3)).toString(), 6, y + 4);
  }
  const axisX = minY <= 0 && maxY >= 0 ? sy(0) : null;
  const axisY = minX <= 0 && maxX >= 0 ? sx(0) : null;
  ctx.strokeStyle = 'rgba(226,232,240,.22)'; ctx.lineWidth = 1.2;
  if (axisX !== null) { ctx.beginPath(); ctx.moveTo(left, axisX); ctx.lineTo(left + plotW, axisX); ctx.stroke(); }
  if (axisY !== null) { ctx.beginPath(); ctx.moveTo(axisY, top); ctx.lineTo(axisY, top + plotH); ctx.stroke(); }
  ctx.strokeStyle = main; ctx.lineWidth = 2.2; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath();
  let drawing = false;
  let previous = null;
  const jumpLimit = (maxY - minY) * 0.7;
  for (const point of points) {
    const [x, y] = point;
    if (previous && Math.abs(y - previous[1]) > jumpLimit) drawing = false;
    const px = sx(x), py = sy(y);
    if (!drawing) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    drawing = true; previous = point;
  }
  ctx.stroke();
  ctx.fillStyle = text;
  ctx.font = '600 11px system-ui, -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('x', width - 13, (axisX ?? height - bottom) - 6);
  ctx.fillText('y', (axisY ?? left) + 6, top + 6);
}

function renderMathSolution(panel, formula, meta, values, result, detailed) {
  const message = panel.querySelector('.calc-message');
  let content = resultHtml(meta.output, meta.SI, result);
  if (detailed) {
    const solverFn = meta.solver && formula.solver?.[meta.solver];
    if (typeof solverFn !== 'function') throw new Error(`В ядре не найден подробный решатель ${meta.solver || 'solver'}.`);
    const solution = solverFn(...values);
    const steps = Array.isArray(solution?.steps) ? solution.steps : [];
    const stepHtml = steps.map((step, index) => `<div class="solution-step"><span class="solution-step-index">${index + 1}</span><div><strong>${escapeHtml(step.title || `Шаг ${index + 1}`)}</strong><p class="solution-formula">${formatFormulaMarkup(step.content || '')}</p></div></div>`).join('');
    content += `<div class="solution-steps"><div class="solution-heading">Подробное решение</div>${stepHtml}</div>`;
    content += `<div class="solution-data"><span>Исходные данные</span><div>${formatMathInputs(meta, values)}</div></div>`;
  }
  if (meta.graphFunction && formula.calculations?.[meta.graphFunction]) {
    const graphArgs = Array.isArray(meta.graphArgs) ? meta.graphArgs.map(index => values[index]) : values;
    try {
      const graph = formula.calculations[meta.graphFunction](...graphArgs);
      content += `<div class="graph-panel"><div class="graph-head"><div><span class="graph-eyebrow">Визуализация</span><strong>${escapeHtml(graph.title || 'График')}</strong></div><span>f(x)</span></div><canvas class="math-graph" aria-label="График функции"></canvas></div>`;
      message.innerHTML = content;
      message.classList.add('success');
      requestAnimationFrame(() => drawGraph(message.querySelector('.math-graph'), graph));
      return;
    } catch {
      // График не должен ломать сам расчёт.
    }
  }
  message.innerHTML = content;
  message.classList.add('success');
}

function renderDetailedCalculation(panel, formula, meta, values, result) {
  const solverFn = meta.solver && formula.solver?.[meta.solver];
  if (formula.subjectKey === 'math' && typeof solverFn === 'function') {
    renderMathSolution(panel, formula, meta, values, result, true);
    return;
  }

  const message = panel.querySelector('.calc-message');
  const knownValues = meta.inputs.map(([, label], index) => {
    const value = typeof values[index] === 'number' ? formatResult(values[index]) : values[index];
    return `<div class="solution-known-value"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
  }).join('');
  message.innerHTML = `${resultHtml(meta.output, meta.SI, result)}<div class="solution-steps"><div class="solution-heading">Подробный расчёт</div><div class="solution-step"><span class="solution-step-index">1</span><div><strong>Исходная формула</strong><p class="solution-formula">${formatFormulaMarkup(formula.formula_view)}</p></div></div><div class="solution-step"><span class="solution-step-index">2</span><div><strong>Исходные данные</strong><div class="solution-data-list">${knownValues}</div></div></div><div class="solution-step"><span class="solution-step-index">3</span><div><strong>Результат</strong><p>${escapeHtml(meta.output)} = ${escapeHtml(formatResult(result))}${meta.SI ? ` ${escapeHtml(meta.SI)}` : ''}</p></div></div></div>`;
  message.classList.add('success');
}

function renderCase(panel, formula, calculations, caseId) {
  const meta = formula.cases[caseId];
  const description = panel.querySelector('.case-description');
  const form = panel.querySelector('.calc-form');
  const isMath = formula.subjectKey === 'math';
  description.innerHTML = `<span class="mini-formula">${formatFormulaMarkup(formula.formula_view)}</span><span class="target-text">${escapeHtml(meta.name)}</span>`;
  form.innerHTML = `${meta.inputs.map(([key, label]) => createNumericInput(key, label, formula, formula.groupKey)).join('')}
    <div class="output-preview"><span>Результат:</span><strong>${escapeHtml(meta.output)}</strong>${meta.SI ? `<em>${escapeHtml(meta.SI)}</em>` : ''}</div>
    <div class="calc-actions"><button class="calculate-btn" type="submit">Рассчитать</button><button class="reset-btn" type="button">Очистить</button></div>`;
  panel.dataset.caseId = caseId;
  panel.dataset.functionName = meta.function || '';
  panel.dataset.mode = 'simple';
  panel.querySelectorAll('.case-option').forEach(button => {
    const active = button.dataset.caseId === String(caseId);
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  panel.querySelectorAll('.mode-btn').forEach(btn => {
    const active = btn.dataset.mode === 'simple';
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  panel.__calculationState = null;
  panel.querySelector('.calc-message').className = 'calc-message';
  panel.querySelector('.calc-message').textContent = '';

  form.onsubmit = (event) => {
    event.preventDefault();
    const message = panel.querySelector('.calc-message');
    message.className = 'calc-message';
    message.textContent = '';
    try {
      const fields = [...form.querySelectorAll('.calc-input')];
      const metas = meta.inputs.map(([key, label]) => ({ key, label, type: inputType(key, label) }));
      const values = fields.map(field => field.type === 'text' ? field.value : field.value.trim() === '' ? NaN : Number(field.value));
      validateInputs(values, metas);
      const fn = calculations[meta.function];
      if (typeof fn !== 'function') throw new Error(`В ядре не найдена функция ${meta.function}.`);
      const result = fn(...values);
      panel.__calculationState = { values, result };
      if (panel.dataset.mode === 'detailed') {
        renderDetailedCalculation(panel, formula, meta, values, result);
      } else if (isMath) {
        renderMathSolution(panel, formula, meta, values, result, false);
      } else {
        let extra = '';
        if (formula.key === 'mass_fraction' && caseId === '1' && Number.isFinite(result)) extra = `<div class="result-extra">В процентах: <strong>${escapeHtml(formatResult(result * 100))}%</strong></div>`;
        message.innerHTML = resultHtml(meta.output, meta.SI, result, extra);
        message.classList.add('success');
      }
    } catch (error) {
      message.textContent = error?.message || 'Не удалось выполнить расчёт.';
      message.classList.add('error');
    }
  };

  panel.querySelectorAll('.mode-btn').forEach(button => {
    button.onclick = () => {
      panel.dataset.mode = button.dataset.mode;
      panel.querySelectorAll('.mode-btn').forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      const state = panel.__calculationState;
      if (state) {
        const message = panel.querySelector('.calc-message');
        message.className = 'calc-message';
        try {
          if (button.dataset.mode === 'detailed') renderDetailedCalculation(panel, formula, meta, state.values, state.result);
          else if (isMath) renderMathSolution(panel, formula, meta, state.values, state.result, false);
          else {
            message.innerHTML = resultHtml(meta.output, meta.SI, state.result);
            message.classList.add('success');
          }
        }
        catch (error) { message.textContent = error?.message || 'Не удалось построить решение.'; message.classList.add('error'); }
      }
    };
  });

  panel.querySelector('.reset-btn').onclick = () => {
    form.reset();
    panel.__calculationState = null;
    panel.dataset.mode = 'simple';
    panel.querySelectorAll('.mode-btn').forEach(item => {
      const active = item.dataset.mode === 'simple';
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    const message = panel.querySelector('.calc-message');
    message.className = 'calc-message';
    message.textContent = '';
  };

  form.querySelector('.calc-input')?.focus({ preventScroll: true });
}

function createReactionCalculator() {
  return `<div class="calculator-panel reaction-panel" data-special="reaction">
    <div class="reaction-grid">
      <label class="calc-field"><span class="field-title">Реагент 1 — формула</span><span class="field-wrap"><input id="reactant-1" class="calc-input" data-reactant="1" type="text" placeholder="Например, Fe" autocomplete="off"></span></label>
      <label class="calc-field"><span class="field-title">Реагент 2 — формула</span><span class="field-wrap"><input id="reactant-2" class="calc-input" data-reactant="2" type="text" placeholder="Например, O2" autocomplete="off"></span></label>
      <div class="reaction-preview" id="reactionPreview"><span>Уравнение появится здесь</span></div>
      <div class="reaction-amounts" id="reactionAmounts"></div>
    </div>
    <div class="calc-actions"><button class="calculate-btn" id="reactionCalculate" type="button">Рассчитать продукты</button><button class="reset-btn" id="reactionReset" type="button">Очистить</button></div>
    <div class="calc-message" id="reactionMessage" aria-live="polite"></div>
  </div>`;
}

function gcd(a, b) {
  let x = Math.abs(a); let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}

function buildBinaryProduct(formulaA, formulaB) {
  const compA = parseChemicalFormula(formulaA);
  const compB = parseChemicalFormula(formulaB);
  const keysA = Object.keys(compA);
  const keysB = Object.keys(compB);
  if (keysA.length !== 1 || keysB.length !== 1) throw new Error('Авто-расчёт продукта поддерживает реагенты-элементы, например Fe и O2.');
  const symbolA = keysA[0]; const symbolB = keysB[0];
  if (symbolA === symbolB) throw new Error('Введите два разных элемента.');
  const chargeA = COMMON_OXIDATION_STATES[symbolA]; const chargeB = COMMON_OXIDATION_STATES[symbolB];
  if (chargeA === undefined || chargeB === undefined) throw new Error('Для одного из элементов нет степени окисления в текущем справочнике.');
  if (chargeA * chargeB >= 0) throw new Error('Элементы должны иметь противоположные степени окисления.');
  let cationSymbol, cationCharge, anionSymbol, anionCharge;
  if (chargeA > 0) { cationSymbol = symbolA; cationCharge = chargeA; anionSymbol = symbolB; anionCharge = chargeB; }
  else { cationSymbol = symbolB; cationCharge = chargeB; anionSymbol = symbolA; anionCharge = chargeA; }
  let cationIndex = Math.abs(anionCharge); let anionIndex = Math.abs(cationCharge);
  const divisor = gcd(cationIndex, anionIndex);
  cationIndex /= divisor; anionIndex /= divisor;
  return `${cationSymbol}${cationIndex === 1 ? '' : cationIndex}${anionSymbol}${anionIndex === 1 ? '' : anionIndex}`;
}

function renderReactionPanel(card) {
  const panel = card.querySelector('.reaction-panel');
  const f1 = panel.querySelector('#reactant-1'); const f2 = panel.querySelector('#reactant-2');
  const preview = panel.querySelector('#reactionPreview'); const amounts = panel.querySelector('#reactionAmounts'); const message = panel.querySelector('#reactionMessage');
  const updatePreview = () => {
    const a = f1.value.trim(); const b = f2.value.trim();
    if (!a || !b) { preview.innerHTML = '<span>Уравнение появится здесь</span>'; amounts.innerHTML = ''; return; }
    try {
      const product = buildBinaryProduct(a, b);
      const items = [a, b, product].map(x => `${escapeHtml(x)} — M = ${escapeHtml(formatResult(molarMassFromFormula(x)))} г/моль`);
      preview.innerHTML = `<strong>${escapeHtml(a)} + ${escapeHtml(b)} → ${escapeHtml(product)}</strong><div class="reaction-masses">${items.join('<span>•</span>')}</div>`;
      amounts.innerHTML = [a, b].map((formula, index) => `<label class="reaction-amount"><span>${escapeHtml(formula)}</span><select data-unit="${index + 1}"><option value="mol">моль</option><option value="g">г</option></select><input type="number" step="any" data-amount="${index + 1}" placeholder="Количество"></label>`).join('');
    } catch (error) {
      preview.innerHTML = `<span class="preview-error">${escapeHtml(error.message)}</span>`; amounts.innerHTML = '';
    }
  };
  [f1, f2].forEach(input => input.addEventListener('input', updatePreview));
  panel.querySelector('#reactionReset').onclick = () => { f1.value = ''; f2.value = ''; updatePreview(); message.className = 'calc-message'; message.textContent = ''; };
  panel.querySelector('#reactionCalculate').onclick = () => {
    message.className = 'calc-message'; message.textContent = '';
    try {
      const a = f1.value.trim(), b = f2.value.trim();
      const product = buildBinaryProduct(a, b);
      if (!amounts.children.length) updatePreview();
      const inputs = [...amounts.querySelectorAll('input[data-amount]')];
      const units = [...amounts.querySelectorAll('select[data-unit]')];
      if (inputs.length !== 2 || inputs.some(i => i.value.trim() === '' || !Number.isFinite(Number(i.value)))) throw new Error('Введите количество для обоих реагентов.');
      const reactants = [a, b].map(formula => ({ formula, molarMass: molarMassFromFormula(formula) }));
      const moles = inputs.map((input, i) => units[i].value === 'g' ? Number(input.value) / reactants[i].molarMass : Number(input.value));
      const extent = moles[0];
      const productMass = extent * molarMassFromFormula(product);
      const productAmount = extent;
      message.innerHTML = `<div class="result-label">Продукт реакции</div><div class="result-value">${escapeHtml(product)}</div><div class="reaction-result-grid"><div><span>Количество вещества</span><strong>${escapeHtml(formatResult(productAmount))} <small>моль</small></strong></div><div><span>Масса</span><strong>${escapeHtml(formatResult(productMass))} <small>г</small></strong></div></div>`;
      message.classList.add('success');
    } catch (error) { message.textContent = error?.message || 'Не удалось выполнить расчёт.'; message.classList.add('error'); }
  };
}

function setupCalculatorModal() {
  const modal = document.getElementById('calculatorModal');
  const dialog = modal?.querySelector('.calculator-modal-dialog');
  const modalTitle = document.getElementById('calculatorModalTitle');
  const modalBody = document.getElementById('calculatorModalBody');
  const closeButton = document.getElementById('calculatorModalClose');
  if (!modal || !dialog || !modalTitle || !modalBody || !closeButton) return null;

  let returnFocusTo = null;
  const close = () => {
    if (modal.hidden) return;
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('calculator-modal-open');
    modalBody.innerHTML = '';
    const trigger = returnFocusTo;
    returnFocusTo = null;
    if (trigger?.isConnected && !trigger.closest('[hidden]')) trigger.focus({ preventScroll: true });
  };

  closeButton.addEventListener('click', close);
  modal.addEventListener('click', event => {
    if (event.target === modal || event.target.closest('[data-modal-dismiss]')) close();
  });
  document.addEventListener('keydown', event => {
    if (modal.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== 'Tab') return;

    const focusable = [...dialog.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')]
      .filter(element => !element.closest('[hidden]'));
    if (!focusable.length) {
      event.preventDefault();
      dialog.focus();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
      event.preventDefault();
      first.focus();
    }
  });

  return {
    open(formula, trigger) {
      returnFocusTo = trigger;
      modalTitle.textContent = formula.title;
      modalBody.innerHTML = formula.id === REACTION_EQUATION.id
        ? createReactionCalculator()
        : createStandardCalculator(formula);
      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('calculator-modal-open');

      if (formula.id === REACTION_EQUATION.id) {
        renderReactionPanel(modalBody);
      } else {
        const panel = modalBody.querySelector('.calculator-panel');
        panel.querySelectorAll('.case-option').forEach(button => {
          button.addEventListener('click', () => renderCase(panel, formula, formula.calculations, button.dataset.caseId));
        });
        const firstCaseId = Object.keys(formula.cases || {})[0];
        renderCase(panel, formula, formula.calculations, firstCaseId);
      }

      requestAnimationFrame(() => {
        const firstInput = modalBody.querySelector('.calc-input');
        if (firstInput) firstInput.focus({ preventScroll: true });
        else closeButton.focus();
      });
    },
  };
}

function createFormulaCard(formula, calculatorModal) {
  const isReaction = formula.id === REACTION_EQUATION.id;
  const caseCount = isReaction ? 1 : Object.keys(formula.cases || {}).length;
  const card = document.createElement('article');
  card.className = `formula-card${formula.subjectKey === 'math' ? ' math-formula-card' : ''}`;
  card.dataset.id = formula.id;
  card.dataset.group = formula.groupKey;
  const caseNames = isReaction ? ['Авторасчёт уравнения'] : Object.values(formula.cases || {}).map(item => item.name);
  card.innerHTML = `<div class="formula-head"><div class="formula-icon">${escapeHtml(formula.icon)}</div><div class="formula-title-wrap"><div class="formula-meta"><span>${escapeHtml(formula.topicLabel || formula.groupLabel)}</span>${formula.subjectKey === 'math' && formula.branch ? `<span>${formula.branch === 'higher' ? 'Высшая математика' : 'Элементарная математика'}</span>` : ''}<span>${caseCount} ${caseCount === 1 ? 'вариант' : caseCount < 5 ? 'варианта' : 'вариантов'}</span>${formula.subjectKey === 'math' && Object.values(formula.cases || {}).some(item => item.graphFunction) ? '<span>График</span>' : ''}</div><h3>${escapeHtml(formula.title)}</h3></div></div>
    <p class="formula-desc">${escapeHtml(formula.description)}</p>
    <div class="formula-view">${formatFormulaMarkup(formula.formula_view)}</div>
    <div class="formula-targets">${caseNames.slice(0, 4).map(name => `<span>${escapeHtml(name)}</span>`).join('')}${caseNames.length > 4 ? `<span>+ ещё ${caseNames.length - 4}</span>` : ''}</div>
    <button type="button" class="open-calculator">Рассчитать <span>→</span></button>`;

  card.querySelector('.open-calculator').onclick = event => calculatorModal?.open(formula, event.currentTarget);
  return card;
}

function setup() {
  const cardsGrid = document.getElementById('formulaGrid');
  const subjectEmpty = document.getElementById('subjectEmpty');
  const resultCount = document.getElementById('resultCount');
  const loadMoreButton = document.getElementById('loadMoreFormulas');
  const loadMoreWrap = document.getElementById('formulaLoadMoreWrap');
  const searchInput = document.getElementById('searchInput');
  const subjectButtons = [...document.querySelectorAll('.subject-btn')];
  const topicFilters = document.getElementById('topicFilters');
  const clearSearch = document.getElementById('clearSearch');
  const periodicTableSection = document.getElementById('periodicTableSection');

  const formulas = [...ALL_FORMULAS.filter(formula => formula.id !== REACTION_EQUATION.id), REACTION_EQUATION];
  cardsGrid.innerHTML = '';
  const calculatorModal = setupCalculatorModal();
  formulas.forEach(formula => cardsGrid.appendChild(createFormulaCard(formula, calculatorModal)));

  const subjectCounts = { all: formulas.length, chemistry: 0, physics: 0, math: 0 };
  formulas.forEach(formula => {
    if (formula.subjectKey === 'chemistry') subjectCounts.chemistry += 1;
    if (formula.subjectKey === 'physics') subjectCounts.physics += 1;
    if (formula.subjectKey === 'math') subjectCounts.math += 1;
  });
  document.querySelectorAll('.subject-count').forEach(node => {
    node.textContent = subjectCounts[node.dataset.countFor] ?? 0;
  });

  const normalizeSearchText = value => String(value).toLocaleLowerCase('ru-RU').replace(/ё/g, 'е').normalize('NFKC');
  const searchableText = formula => normalizeSearchText([formula.title, formula.description, formula.formula_view, formula.groupLabel, formula.topicLabel, formula.topicSection, formula.subjectKey === 'math' ? (formula.branch === 'higher' ? 'высшая математика' : 'школьная математика') : '', formula.subjectKey === 'physics' ? 'физика' : formula.subjectKey === 'chemistry' ? 'химия' : '', ...(formula.searchAliases || []), ...Object.values(formula.cases || {}).flatMap(c => [c.name, c.output, ...c.inputs.map(x => x[1])])].join(' '));

  let activeSubject = 'all';
  let activeTopic = 'all';
  const collapsedFormulaCount = 6;
  let showAllFormulas = false;

  const renderTopicFilters = () => {
    const sections = TOPIC_SECTIONS_BY_SUBJECT[activeSubject] || [];
    const allLabel = activeSubject === 'all' ? 'Все разделы' : 'Все формулы';
    const topicOptions = sections.map(section => {
      const topics = [...(section.branch ? [{ key: `branch:${section.branch}`, label: 'Все разделы' }] : []), ...section.topics];
      const groupedTopics = new Map();
      topics.forEach(topic => {
        const groupLabel = topic.section ? `${section.label} · ${topic.section}` : section.label;
        if (!groupedTopics.has(groupLabel)) groupedTopics.set(groupLabel, []);
        groupedTopics.get(groupLabel).push(topic);
      });
      return [...groupedTopics].map(([groupLabel, items]) => `<optgroup label="${escapeHtml(groupLabel)}">${items.map(topic => `<option value="${escapeHtml(topic.key)}">${escapeHtml(topic.label)}</option>`).join('')}</optgroup>`).join('');
    }).join('');
    topicFilters.innerHTML = `<select class="topic-select" id="topicSelect" aria-label="Фильтр по разделу"><option value="all">${allLabel}</option>${topicOptions}</select>`;
    const select = topicFilters.querySelector('#topicSelect');
    select.value = activeTopic;
    select.addEventListener('change', () => {
      activeTopic = select.value;
      showAllFormulas = false;
      applyFilters();
    });
  };

  const applyFilters = () => {
    const query = normalizeSearchText(searchInput.value.trim());
    let matches = 0;
    let shown = 0;
    [...cardsGrid.children].forEach((card, index) => {
      const formula = formulas[index];
      const matchesQuery = !query || searchableText(formula).includes(query);
      const matchesSubject = activeSubject === 'all' || formula.subjectKey === activeSubject;
      const matchesTopic = activeTopic === 'all' || activeTopic === `branch:${formula.branch}` || formula.topicKey === activeTopic;
      const matchesFilters = matchesQuery && matchesSubject && matchesTopic;
      if (matchesFilters) matches += 1;
      const show = matchesFilters && (Boolean(query) || showAllFormulas || shown < collapsedFormulaCount);
      card.classList.toggle('formula-revealed', Boolean(show && !query && showAllFormulas && shown >= collapsedFormulaCount));
      card.hidden = !show;
      if (show) shown += 1;
      card.classList.toggle('search-hit', Boolean(query && matchesQuery && show));
    });

    const mathGuide = document.getElementById('mathGuide');
    if (mathGuide) mathGuide.hidden = activeSubject !== 'math';
    cardsGrid.hidden = false;
    subjectEmpty.hidden = matches !== 0;
    resultCount.textContent = `${matches} ${matches === 1 ? 'формула' : matches < 5 ? 'формулы' : 'формул'}`;
    if (loadMoreButton) {
      const hasMore = !query && matches > collapsedFormulaCount;
      loadMoreButton.hidden = !hasMore;
      loadMoreWrap.hidden = !hasMore;
      loadMoreButton.textContent = showAllFormulas ? 'Свернуть список' : 'Показать все формулы';
      loadMoreButton.setAttribute('aria-expanded', showAllFormulas ? 'true' : 'false');
    }
  };

  loadMoreButton?.addEventListener('click', () => {
    showAllFormulas = !showAllFormulas;
    applyFilters();
  });

  const selectSubject = (subject) => {
    activeSubject = subject;
    activeTopic = 'all';
    showAllFormulas = false;
    subjectButtons.forEach(button => {
      const selected = button.dataset.subject === subject;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-selected', selected ? 'true' : 'false');
    });
    renderTopicFilters();
    applyFilters();
    if (periodicTableSection) {
      const showPeriodic = subject === 'chemistry';
      periodicTableSection.hidden = !showPeriodic;
      if (showPeriodic && !periodicTableSection.__periodicReady) renderPeriodicTable();
    }
  };

  subjectButtons.forEach(button => button.addEventListener('click', () => selectSubject(button.dataset.subject)));
  searchInput.addEventListener('input', () => {
    showAllFormulas = false;
    applyFilters();
  });
  clearSearch.addEventListener('click', () => { searchInput.value = ''; searchInput.focus(); showAllFormulas = false; applyFilters(); });

  const params = new URLSearchParams(location.search);
  const queryFromUrl = params.get('q') || params.get('search');
  const hashSubject = location.hash.replace('#', '');
  if (queryFromUrl) searchInput.value = queryFromUrl;
  if (SUBJECTS.some(subject => subject.key === hashSubject)) activeSubject = hashSubject;
  selectSubject(activeSubject);
};

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setup);
}

export { ALL_FORMULAS, EXTRA_FORMULAS, REACTION_EQUATION, UNIT_HINTS, inferUnit };
