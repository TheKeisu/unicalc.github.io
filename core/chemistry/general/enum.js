export const SUBSTANCE_AMOUNT = 1;
export const MOLAR_MASS = 2;
export const PARTICLES_COUNT = 3;
export const IDEAL_GAS_LAW = 4;
export const GAS_VOLUME_BY_SUBSTANCE = 5;
export const GAS_DENSITY = 6;
export const MASS_FRACTION = 7;
export const MOLAR_CONCENTRATION = 8;
export const SOLUTION_MASS = 9;
export const MASS_CONSERVATION = 10;
export const REACTION_YIELD = 11;
export const HEAT_AMOUNT = 12;
export const REACTION_HEAT_EFFECT = 13;
export const FARADAY_LAW = 14;
export const EQUILIBRIUM_CONSTANT = 15;
export const REACTION_RATE = 16;
export const RATE_LAW = 17;
export const PH = 18;
export const POH = 19;
export const PH_POH_RELATION = 20;
export const FREEZING_POINT_DEPRESSION = 21;
export const BOILING_POINT_ELEVATION = 22;
export const PHOTON_ENERGY = 23;
export const REACTION_STOICHIOMETRY = 24;

export const FORMULAS = {
  substance_amount: {
    subject_key: "общая химия",
    title: "Количество вещества",
    description: "Формула количества вещества: n = m / M",
    formula_view: "n = m / M",
    cases: {
      1: { name: "Найти количество вещества", inputs: [["m", "Масса"], ["M", "Молярная масса"]], output: "Количество вещества", function: "calc_substance_amount", SI: "моль" },
      2: { name: "Найти массу", inputs: [["n", "Количество вещества"], ["M", "Молярная масса"]], output: "Масса", function: "calc_mass_substance_amount", SI: "г" }
    }
  },
  molar_mass: {
    subject_key: "общая химия",
    title: "Молярная масса",
    description: "Молярная масса: M = m / n",
    formula_view: "M = m / n",
    cases: {
      1: { name: "Найти молярную массу", inputs: [["m", "Масса"], ["n", "Количество вещества"]], output: "Молярная масса", function: "calc_molar_mass", SI: "г/моль" }
    }
  },
  particles_count: {
    subject_key: "общая химия",
    title: "Число частиц",
    description: "Связь числа частиц и количества вещества: N = n * Nₐ",
    formula_view: "N = n * Nₐ",
    cases: {
      1: { name: "Найти число частиц", inputs: [["n", "Количество вещества"]], output: "Число частиц", function: "calc_particles_count" },
      2: { name: "Найти количество вещества", inputs: [["N", "Число частиц"]], output: "Количество вещества", function: "calc_substance_amount_particles_count", SI: "моль" }
    }
  },
  ideal_gas_law: {
    subject_key: "общая химия",
    title: "Уравнение Менделеева-Клапейрона",
    description: "Состояние идеального газа: pV = nRT",
    formula_view: "pV = nRT",
    cases: {
      1: { name: "Найти давление", inputs: [["n", "Количество вещества"], ["T", "Температура"], ["V", "Объем"]], output: "Давление", function: "calc_ideal_gas_pressure", SI: "Па" },
      2: { name: "Найти объем", inputs: [["n", "Количество вещества"], ["T", "Температура"], ["p", "Давление"]], output: "Объем", function: "calc_ideal_gas_volume", SI: "м³" },
      3: { name: "Найти количество вещества", inputs: [["p", "Давление"], ["V", "Объем"], ["T", "Температура"]], output: "Количество вещества", function: "calc_ideal_gas_substance_amount", SI: "моль" },
      4: { name: "Найти температуру", inputs: [["p", "Давление"], ["V", "Объем"], ["n", "Количество вещества"]], output: "Температура", function: "calc_ideal_gas_temperature", SI: "K" }
    }
  },
  gas_volume_by_substance: {
    subject_key: "общая химия",
    title: "Объем через количество вещества",
    description: "Для н.у.: V = n * Vₘ, где Vₘ = 22.4 л/моль",
    formula_view: "V = n * Vₘ",
    cases: {
      1: { name: "Найти объем газа", inputs: [["n", "Количество вещества"]], output: "Объем газа", function: "calc_gas_volume_by_substance", SI: "л" },
      2: { name: "Найти количество вещества", inputs: [["V", "Объем газа"]], output: "Количество вещества", function: "calc_substance_amount_gas_volume", SI: "моль" }
    }
  },
  gas_density: {
    subject_key: "общая химия",
    title: "Плотность газа",
    description: "Плотность газа через молярные величины: ρ = M / Vₘ",
    formula_view: "ρ = M / Vₘ",
    cases: {
      1: { name: "Найти плотность", inputs: [["M", "Молярная масса"], ["Vₘ", "Молярный объем"]], output: "Плотность", function: "calc_gas_density", SI: "г/л" },
      2: { name: "Найти молярную массу", inputs: [["ρ", "Плотность"], ["Vₘ", "Молярный объем"]], output: "Молярная масса", function: "calc_molar_mass_gas_density", SI: "г/моль" }
    }
  },
  mass_fraction: {
    subject_key: "общая химия",
    title: "Массовая доля",
    description: "Массовая доля вещества в растворе: ω = mвещества / mраствора",
    formula_view: "ω = mвещества / mраствора",
    cases: {
      1: { name: "Найти массовую долю", inputs: [["mₛ", "Масса вещества"], ["mᵣ", "Масса раствора"]], output: "Массовая доля", function: "calc_mass_fraction", SI: "" },
      2: { name: "Найти массу вещества", inputs: [["ω", "Массовая доля"], ["mᵣ", "Масса раствора"]], output: "Масса вещества", function: "calc_substance_mass_mass_fraction", SI: "г" },
      3: { name: "Найти массу раствора", inputs: [["mₛ", "Масса вещества"], ["ω", "Массовая доля"]], output: "Масса раствора", function: "calc_solution_mass_mass_fraction", SI: "г" }
    }
  },
  molar_concentration: {
    subject_key: "общая химия",
    title: "Молярная концентрация",
    description: "Концентрация растворенного вещества: C = n / V",
    formula_view: "C = n / V",
    cases: {
      1: { name: "Найти концентрацию", inputs: [["n", "Количество вещества"], ["V", "Объем раствора"]], output: "Концентрация", function: "calc_molar_concentration", SI: "моль/л" },
      2: { name: "Найти количество вещества", inputs: [["C", "Концентрация"], ["V", "Объем раствора"]], output: "Количество вещества", function: "calc_substance_amount_molar_concentration", SI: "моль" },
      3: { name: "Найти объем", inputs: [["n", "Количество вещества"], ["C", "Концентрация"]], output: "Объем", function: "calc_volume_molar_concentration", SI: "л" }
    }
  },
  solution_mass: {
    subject_key: "общая химия",
    title: "Масса раствора",
    description: "Масса раствора: mраствора = mвещества + mрастворителя",
    formula_view: "mраствора = mвещества + mрастворителя",
    cases: {
      1: { name: "Найти массу раствора", inputs: [["mₛ", "Масса вещества"], ["mₗ", "Масса растворителя"]], output: "Масса раствора", function: "calc_solution_mass", SI: "г" },
      2: { name: "Найти массу вещества", inputs: [["mᵣ", "Масса раствора"], ["mₗ", "Масса растворителя"]], output: "Масса вещества", function: "calc_substance_mass_solution_mass", SI: "г" },
      3: { name: "Найти массу растворителя", inputs: [["mᵣ", "Масса раствора"], ["mₛ", "Масса вещества"]], output: "Масса растворителя", function: "calc_solvent_mass_solution_mass", SI: "г" }
    }
  },
  mass_conservation: {
    subject_key: "общая химия",
    title: "Закон сохранения массы",
    description: "Суммарная масса реагентов равна суммарной массе продуктов",
    formula_view: "mреагентов = mпродуктов",
    cases: {
      1: { name: "Найти массу продуктов", inputs: [["mᵣ", "Масса реагентов"]], output: "Масса продуктов", function: "calc_mass_conservation", SI: "г" },
      2: { name: "Найти массу реагентов", inputs: [["mₚ", "Масса продуктов"]], output: "Масса реагентов", function: "calc_reactants_mass_conservation", SI: "г" }
    }
  },
  reaction_yield: {
    subject_key: "общая химия",
    title: "Выход реакции",
    description: "Процент выхода: η = (mпракт / mтеор) * 100%",
    formula_view: "η = (mпракт / mтеор) * 100%",
    cases: {
      1: { name: "Найти выход реакции", inputs: [["mₚ", "Практическая масса"], ["mₜ", "Теоретическая масса"]], output: "Выход реакции", function: "calc_reaction_yield", SI: "%" },
      2: { name: "Найти практическую массу", inputs: [["η", "Выход реакции, %"], ["mₜ", "Теоретическая масса"]], output: "Практическая масса", function: "calc_practical_mass_reaction_yield", SI: "г" },
      3: { name: "Найти теоретическую массу", inputs: [["mₚ", "Практическая масса"], ["η", "Выход реакции, %"]], output: "Теоретическая масса", function: "calc_theoretical_mass_reaction_yield", SI: "г" }
    }
  },
  heat_amount: {
    subject_key: "общая химия",
    title: "Количество теплоты",
    description: "Количество теплоты: Q = c * m * ΔT",
    formula_view: "Q = c * m * ΔT",
    cases: {
      1: { name: "Найти количество теплоты", inputs: [["c", "Удельная теплоемкость"], ["m", "Масса"], ["ΔT", "Изменение температуры"]], output: "Количество теплоты", function: "calc_heat_amount", SI: "Дж" },
      2: { name: "Найти удельную теплоемкость", inputs: [["Q", "Количество теплоты"], ["m", "Масса"], ["ΔT", "Изменение температуры"]], output: "Удельная теплоемкость", function: "calc_heat_capacity_heat_amount", SI: "Дж/(кг·К)" }
    }
  },
  reaction_heat_effect: {
    subject_key: "общая химия",
    title: "Тепловой эффект реакции",
    description: "Тепловой эффект: Q = n * ΔH",
    formula_view: "Q = n * ΔH",
    cases: {
      1: { name: "Найти тепловой эффект", inputs: [["n", "Количество вещества"], ["ΔH", "Изменение энтальпии"]], output: "Тепловой эффект", function: "calc_reaction_heat_effect", SI: "кДж" },
      2: { name: "Найти количество вещества", inputs: [["Q", "Тепловой эффект"], ["ΔH", "Изменение энтальпии"]], output: "Количество вещества", function: "calc_substance_amount_reaction_heat_effect", SI: "моль" }
    }
  },
  faraday_law: {
    subject_key: "общая химия",
    title: "Закон Фарадея",
    description: "Масса вещества при электролизе: m = (MIt) / (nF)",
    formula_view: "m = (M * I * t) / (n * F)",
    cases: {
      1: { name: "Найти массу вещества", inputs: [["M", "Молярная масса"], ["I", "Сила тока"], ["t", "Время"], ["n", "Число электронов"]], output: "Масса вещества", function: "calc_faraday_law", SI: "г" },
      2: { name: "Найти силу тока", inputs: [["m", "Масса вещества"], ["M", "Молярная масса"], ["t", "Время"], ["n", "Число электронов"]], output: "Сила тока", function: "calc_current_faraday_law", SI: "А" },
      3: { name: "Найти время", inputs: [["m", "Масса вещества"], ["M", "Молярная масса"], ["I", "Сила тока"], ["n", "Число электронов"]], output: "Время", function: "calc_time_faraday_law", SI: "с" }
    }
  },
  equilibrium_constant: {
    subject_key: "общая химия",
    title: "Константа равновесия",
    description: "Константа равновесия для реакции: K = [продукты]/[реагенты]",
    formula_view: "K = [продукты] / [реагенты]",
    cases: {
      1: { name: "Найти K (без коэффициентов)", inputs: [["Cp", "Концентрация продуктов"], ["Cr", "Концентрация реагентов"]], output: "Константа равновесия", function: "calc_equilibrium_constant" },
      2: { name: "Найти K (с коэффициентами)", inputs: [["Cp", "Концентрация продуктов"], ["a", "Степень у продуктов"], ["Cr", "Концентрация реагентов"], ["b", "Степень у реагентов"]], output: "Константа равновесия", function: "calc_equilibrium_constant_with_coefficients" }
    }
  },
  reaction_rate: {
    subject_key: "общая химия",
    title: "Скорость реакции",
    description: "Средняя скорость реакции: v = ΔC / Δt",
    formula_view: "v = ΔC / Δt",
    cases: {
      1: { name: "Найти скорость реакции", inputs: [["ΔC", "Изменение концентрации"], ["Δt", "Промежуток времени"]], output: "Скорость реакции", function: "calc_reaction_rate" },
      2: { name: "Найти изменение концентрации", inputs: [["v", "Скорость реакции"], ["Δt", "Промежуток времени"]], output: "Изменение концентрации", function: "calc_delta_concentration_reaction_rate" }
    }
  },
  rate_law: {
    subject_key: "общая химия",
    title: "Закон действующих масс",
    description: "Кинетическое уравнение: v = k * [A]^m * [B]^n",
    formula_view: "v = k * [A]^m * [B]^n",
    cases: {
      1: { name: "Найти скорость", inputs: [["k", "Константа скорости"], ["A", "[A]"], ["m", "Порядок по A"], ["B", "[B]"], ["n", "Порядок по B"]], output: "Скорость реакции", function: "calc_reaction_rate_law" },
      2: { name: "Найти константу скорости", inputs: [["v", "Скорость реакции"], ["A", "[A]"], ["m", "Порядок по A"], ["B", "[B]"], ["n", "Порядок по B"]], output: "Константа скорости", function: "calc_rate_constant_reaction_rate" }
    }
  },
  ph: {
    subject_key: "общая химия",
    title: "pH",
    description: "Водородный показатель: pH = -log[H⁺]",
    formula_view: "pH = -log[H⁺]",
    cases: {
      1: { name: "Найти pH", inputs: [["H", "Концентрация H⁺"]], output: "pH", function: "calc_ph" },
      2: { name: "Найти [H⁺]", inputs: [["pH", "Водородный показатель"]], output: "Концентрация H⁺", function: "calc_hydrogen_ion_concentration" }
    }
  },
  poh: {
    subject_key: "общая химия",
    title: "pOH",
    description: "Гидроксидный показатель: pOH = -log[OH⁻]",
    formula_view: "pOH = -log[OH⁻]",
    cases: {
      1: { name: "Найти pOH", inputs: [["OH", "Концентрация OH⁻"]], output: "pOH", function: "calc_poh" },
      2: { name: "Найти [OH⁻]", inputs: [["pOH", "Гидроксидный показатель"]], output: "Концентрация OH⁻", function: "calc_hydroxide_ion_concentration" }
    }
  },
  ph_poh_relation: {
    subject_key: "общая химия",
    title: "Связь pH и pOH",
    description: "Для водных растворов при 25°C: pH + pOH = 14",
    formula_view: "pH + pOH = 14",
    cases: {
      1: { name: "Найти pOH по pH", inputs: [["pH", "Водородный показатель"]], output: "pOH", function: "calc_poh_from_ph" },
      2: { name: "Найти pH по pOH", inputs: [["pOH", "Гидроксидный показатель"]], output: "pH", function: "calc_ph_from_poh" }
    }
  },
  freezing_point_depression: {
    subject_key: "общая химия",
    title: "Понижение температуры замерзания",
    description: "Криоскопический закон: ΔT = Kf * m",
    formula_view: "ΔT = Kf * m",
    cases: {
      1: { name: "Найти ΔT", inputs: [["Kf", "Криоскопическая константа"], ["m", "Моляльность"]], output: "Понижение температуры", function: "calc_freezing_point_depression", SI: "°C" },
      2: { name: "Найти Kf", inputs: [["ΔT", "Понижение температуры"], ["m", "Моляльность"]], output: "Криоскопическая константа", function: "calc_cryoscopic_constant" }
    }
  },
  boiling_point_elevation: {
    subject_key: "общая химия",
    title: "Повышение температуры кипения",
    description: "Эбулиоскопический закон: ΔT = Kb * m",
    formula_view: "ΔT = Kb * m",
    cases: {
      1: { name: "Найти ΔT", inputs: [["Kb", "Эбулиоскопическая константа"], ["m", "Моляльность"]], output: "Повышение температуры", function: "calc_boiling_point_elevation", SI: "°C" },
      2: { name: "Найти Kb", inputs: [["ΔT", "Повышение температуры"], ["m", "Моляльность"]], output: "Эбулиоскопическая константа", function: "calc_ebullioscopic_constant" }
    }
  },
  photon_energy: {
    subject_key: "общая химия",
    title: "Энергия фотона",
    description: "Энергия фотона: E = hν",
    formula_view: "E = hν",
    cases: {
      1: { name: "Найти энергию", inputs: [["ν", "Частота"]], output: "Энергия", function: "calc_photon_energy", SI: "Дж" },
      2: { name: "Найти частоту", inputs: [["E", "Энергия"]], output: "Частота", function: "calc_frequency_photon_energy", SI: "Гц" }
    }
  },
  reaction_stoichiometry: {
    subject_key: "общая химия",
    title: "Уравнение реакции",
    description: "Стехиометрический расчёт с автоматическим получением продукта и коэффициентов",
    formula_view: "aA + bB → cC + dD",
    cases: {
      1: { name: "Ввести реагенты (продукт вычисляется автоматически)", inputs: [], output: "Стехиометрический расчёт", function: "run_console_reaction_equation" }
    }
  }
};

export const GENERAL_CHEMISTRY_KEYS = {
  [SUBSTANCE_AMOUNT]: "substance_amount",
  [MOLAR_MASS]: "molar_mass",
  [PARTICLES_COUNT]: "particles_count",
  [IDEAL_GAS_LAW]: "ideal_gas_law",
  [GAS_VOLUME_BY_SUBSTANCE]: "gas_volume_by_substance",
  [GAS_DENSITY]: "gas_density",
  [MASS_FRACTION]: "mass_fraction",
  [MOLAR_CONCENTRATION]: "molar_concentration",
  [SOLUTION_MASS]: "solution_mass",
  [MASS_CONSERVATION]: "mass_conservation",
  [REACTION_YIELD]: "reaction_yield",
  [HEAT_AMOUNT]: "heat_amount",
  [REACTION_HEAT_EFFECT]: "reaction_heat_effect",
  [FARADAY_LAW]: "faraday_law",
  [EQUILIBRIUM_CONSTANT]: "equilibrium_constant",
  [REACTION_RATE]: "reaction_rate",
  [RATE_LAW]: "rate_law",
  [PH]: "ph",
  [POH]: "poh",
  [PH_POH_RELATION]: "ph_poh_relation",
  [FREEZING_POINT_DEPRESSION]: "freezing_point_depression",
  [BOILING_POINT_ELEVATION]: "boiling_point_elevation",
  [PHOTON_ENERGY]: "photon_energy",
  [REACTION_STOICHIOMETRY]: "reaction_stoichiometry"
};

export function get_formula_key(enum_formula) {
  return GENERAL_CHEMISTRY_KEYS[enum_formula] || null;
}

export function get_formula_cases(enum_formula) {
  const key = get_formula_key(enum_formula);
  if (!key) return {};
  return FORMULAS[key]?.cases || {};
}