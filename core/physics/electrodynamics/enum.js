export const COULOMBS_LAW = 1;
export const EL_FIELD_INTENSITY = 2;
export const POINT_CHARGE_EL_FIELD_INTENSITY = 3;
export const SURFACE_CHARGE_DENSITY = 4;
export const INFINITY_SURFACE_EL_FIELD_INTENSITY = 5;
export const DIELECTRIC_CONSTANT = 6;
export const INTERACTING_CHARGES_POTENTIAL_ENERGY = 7;
export const POTENTIAL = 8;
export const POINT_CHARGE_POTENTIAL = 9;
export const VOLTAGE = 10;
export const EL_FIELD_VOLTAGE = 11;
export const EL_CAPACITY = 12;
export const FLAT_CAPACITOR_EL_CAPACITY = 13;
export const CURRENT = 14;
export const CONDUCTOR_RESISTANCE = 15;
export const SECTION_CIRCUIT_OHMS_LAW = 16;
export const EL_CURRENT_POWER = 17;
export const JOULE_LENZ_LAW = 18;
export const FULL_CIRCUIT_OHMS_LAW = 19;
export const SHORT_CIRCUIT_CURRENT = 20;
export const MAGNETIC_INDUCTION_VECTOR = 21;
export const AMPERES_FORCE = 22;
export const LORENTZ_FORCE = 23;
export const MAGNETIC_FLUX = 24;
export const ELECTROMAGNETIC_INDUCTION_LAW = 25;
export const EMF_MOVING_CONDUCTOR = 26;
export const EMF_SELF_INDUCTION = 27;
export const COIL_MAGNETIC_FIELD_ENERGY = 28;
export const OSCILLATING_CIRCUIT_PERIOD = 29;
export const INDUCTIVE_RESISTANCE = 30;
export const CAPACITIVE_RESISTANCE = 31;
export const ACTUAL_CURRENT_VALUE = 32;
export const ACTUAL_VOLTAGE_VALUE = 33;
export const TOTAL_RESISTANCE = 34;

export const FORMULAS = {
  coulombs_law: {
    subjects_key: "электродинамика",
    title: "Закон Кулона",
    formula_view: "F = k * (q1 * q2) / r^2",
    description: "Закон, описывающий силу взаимодействия между двумя точечными зарядами",
    cases: {
      1: { name: "Найти силу", inputs: [["q1", "Введите заряд №1"], ["q2", "Введите заряд №2"], ["r", "Введите расстояние между зарядами"]], output: "Сила", function: "calc_coulombs_law", SI: "Н" },
      2: { name: "Найти заряд №1", inputs: [["F", "Введите силу"], ["q2", "Введите заряд №2"], ["r", "Введите расстояние между зарядами"]], output: "Заряд №1", function: "calc_electric_charge_1_coulombs_law", SI: "Кл" },
      3: { name: "Найти заряд №2", inputs: [["F", "Введите силу"], ["q1", "Введите заряд №1"], ["r", "Введите расстояние между зарядами"]], output: "Заряд №2", function: "calc_electric_charge_2_coulombs_law", SI: "Кл" },
      4: { name: "Найти расстояние", inputs: [["F", "Введите силу"], ["q1", "Введите заряд №1"], ["q2", "Введите заряд №2"]], output: "Расстояние", function: "calc_distance_coulombs_law", SI: "м" }
    }
  },
  el_field_intensity: {
    subjects_key: "электродинамика",
    title: "Напряженность электрического поля",
    description: "Величина, характеризующая электрическое поле",
    formula_view: "E = F / q",
    cases: {
      1: { name: "Найти напряженность", inputs: [["F", "Введите силу, действующую на заряд"], ["q", "Введите величину заряда"]], output: "Напряженность", function: "calc_el_field_intensity", SI: "В/м" },
      2: { name: "Найти силу", inputs: [["E", "Введите напряженность электрического поля"], ["q", "Введите величину заряда"]], output: "Сила", function: "calc_force_el_field_intensity", SI: "Н" },
      3: { name: "Найти величину заряда", inputs: [["E", "Введите напряженность электрического поля"], ["F", "Введите силу, действующую на заряд"]], output: "Величина заряда", function: "calc_electric_charge_el_field_intensity", SI: "Кл" }
    }
  },
  point_charge_el_field_intensity: {
    subjects_key: "электродинамика",
    title: "Напряженность электрического поля точечного заряда",
    description: "Напряженность электрического поля, создаваемого точечным зарядом",
    formula_view: "E = k * q / r^2",
    cases: {
      1: { name: "Найти напряженность", inputs: [["q", "Введите величину заряда"], ["r", "Введите расстояние"]], output: "Напряженность", function: "calc_point_charge_el_field_intensity", SI: "В/м" },
      2: { name: "Найти величину заряда", inputs: [["E", "Введите напряженность"], ["r", "Введите расстояние"]], output: "Величина заряда", function: "calc_electric_charge_point_charge_el_field_intensity", SI: "Кл" },
      3: { name: "Найти расстояние", inputs: [["E", "Введите напряженность"], ["q", "Введите величину заряда"]], output: "Расстояние", function: "calc_distance_charge_point_charge_el_field_intensity", SI: "м" }
    }
  },
  surface_charge_density: {
    subjects_key: "электродинамика",
    title: "Поверхностная плотность зарядов",
    description: "Величина, характеризующая распределение зарядов на поверхности",
    formula_view: "σ = q / S",
    cases: {
      1: { name: "Найти поверхностную плотность зарядов", inputs: [["q", "Введите величину заряда"], ["S", "Введите площадь"]], output: "Поверхностная плотность зарядов", function: "calc_surface_charge_density", SI: "Кл/м^2" },
      2: { name: "Найти величину заряда", inputs: [["σ", "Введите поверхностную плотность"], ["S", "Введите площадь"]], output: "Величина заряда", function: "calc_electric_charge_surface_charge_density", SI: "Кл" },
      3: { name: "Найти площадь поверхности", inputs: [["σ", "Введите поверхностную плотность"], ["q", "Введите величину заряда"]], output: "Площадь поверхности", function: "calc_area_surface_charge_density", SI: "м^2" }
    }
  },
  infinity_surface_el_field_intensity: {
    subjects_key: "электродинамика",
    title: "Напряженность электрического поля бесконечной поверхности",
    description: "Напряженность электрического поля, создаваемого бесконечной поверхностью с зарядом",
    formula_view: "E = σ / (2 * ε0)",
    cases: {
      1: { name: "Найти напряженность", inputs: [["σ", "Введите поверхностную плотность зарядов"]], output: "Напряженность", function: "calc_infinity_surface_el_field_intensity", SI: "В/м" },
      2: { name: "Найти поверхностную плотность зарядов", inputs: [["E", "Введите напряженность"]], output: "Поверхностная плотность зарядов", function: "calc_density_infinity_surface_el_field_intensity", SI: "Кл/м^2" }
    }
  },
  dielectric_constant: {
    subjects_key: "электродинамика",
    title: "Диэлектрическая проницаемость",
    description: "Величина, характеризующая способность материала пропускать электрическое поле",
    formula_view: "ε = E0 / E",
    cases: {
      1: { name: "Найти диэлектрическую проницаемость", inputs: [["E0", "Введите напряженность в вакууме"], ["E", "Введите напряженность в диэлектрике"]], output: "Диэлектрическая проницаемость", function: "calc_dielectric_constant", SI: "" },
      2: { name: "Найти напряженность в вакууме", inputs: [["ε", "Введите диэлектрическую проницаемость"], ["E", "Введите напряженность в диэлектрике"]], output: "Напряженность в вакууме", function: "calc_intensity_1_dielectric_constant", SI: "В/м" },
      3: { name: "Найти напряженность в диэлектрике", inputs: [["ε", "Введите диэлектрическую проницаемость"], ["E0", "Введите напряженность в вакууме"]], output: "Напряженность в диэлектрике", function: "calc_intensity_2_dielectric_constant", SI: "В/м" }
    }
  },
  interacting_charges_potential_energy: {
    subjects_key: "электродинамика",
    title: "Потенциальная энергия взаимодействия зарядов",
    description: "Энергия, которая возникает при взаимодействии двух зарядов",
    formula_view: "U = k * (q1 * q2) / r",
    cases: {
      1: { name: "Найти потенциальную энергию", inputs: [["q1", "Введите заряд №1"], ["q2", "Введите заряд №2"], ["r", "Введите расстояние"]], output: "Потенциальная энергия", function: "calc_potential_energy", SI: "Дж" },
      2: { name: "Электрический заряд №1", inputs: [["U", "Введите потенциальную энергию"], ["q2", "Введите заряд №2"], ["r", "Введите расстояние"]], output: "Электрический заряд №1", function: "calc_electric_charge_1_potential_energy", SI: "Кл" },
      3: { name: "Электрический заряд №2", inputs: [["U", "Введите потенциальную энергию"], ["q1", "Введите заряд №1"], ["r", "Введите расстояние"]], output: "Электрический заряд №2", function: "calc_electric_charge_2_potential_energy", SI: "Кл" },
      4: { name: "Расстояние между зарядами", inputs: [["U", "Введите потенциальную энергию"], ["q1", "Введите заряд №1"], ["q2", "Введите заряд №2"]], output: "Расстояние между зарядами", function: "calc_distance_potential_energy", SI: "м" }
    }
  },
  potential: {
    subjects_key: "электродинамика",
    title: "Потенциал",
    description: "Величина, характеризующая электрическое поле в данной точке",
    formula_view: "V = U / q",
    cases: {
      1: { name: "Найти потенциал", inputs: [["U", "Введите потенциальную энергию"], ["q", "Введите величину заряда"]], output: "Потенциал", function: "calc_potential", SI: "В" },
      2: { name: "Найти потенциальную энергию", inputs: [["V", "Введите потенциал"], ["q", "Введите величину заряда"]], output: "Потенциальная энергия", function: "calc_potential_energy_potential", SI: "Дж" },
      3: { name: "Найти величину заряда", inputs: [["U", "Введите потенциальную энергию"], ["V", "Введите потенциал"]], output: "Величина заряда", function: "calc_electric_charge_potential", SI: "Кл" }
    }
  },
  point_charge_potential: {
    subjects_key: "электродинамика",
    title: "Потенциал точечного заряда",
    description: "Потенциал, создаваемый точечным зарядом",
    formula_view: "V = k * q / r",
    cases: {
      1: { name: "Найти потенциал", inputs: [["q", "Введите величину заряда"], ["r", "Введите расстояние"]], output: "Потенциал", function: "calc_point_charge_potential", SI: "В" },
      2: { name: "Найти величину заряда", inputs: [["V", "Введите потенциал"], ["r", "Введите расстояние"]], output: "Величина заряда", function: "calc_electric_charge_point_charge_potential", SI: "Кл" },
      3: { name: "Найти расстояние", inputs: [["V", "Введите потенциал"], ["q", "Введите величину заряда"]], output: "Расстояние", function: "calc_distance_point_charge_potential", SI: "м" }
    }
  },
  voltage: {
    subjects_key: "электродинамика",
    title: "Напряжение",
    description: "Разность потенциалов между двумя точками",
    formula_view: "V = W / q",
    cases: {
      1: { name: "Найти напряжение", inputs: [["W", "Введите работу"], ["q", "Введите величину заряда"]], output: "Напряжение", function: "calc_voltage", SI: "В" },
      2: { name: "Найти работу", inputs: [["V", "Введите напряжение"], ["q", "Введите величину заряда"]], output: "Работа", function: "calc_work_voltage", SI: "Дж" },
      3: { name: "Найти величину заряда", inputs: [["V", "Введите напряжение"], ["W", "Введите работу"]], output: "Величина заряда", function: "calc_electric_charge_voltage", SI: "Кл" }
    }
  },
  el_field_voltage: {
    subjects_key: "электродинамика",
    title: "Напряжение в электрическом поле",
    description: "Напряжение, создаваемое электрическим полем на определенном расстоянии",
    formula_view: "V = E * d",
    cases: {
      1: { name: "Найти напряжение", inputs: [["E", "Введите напряженность"], ["d", "Введите расстояние"]], output: "Напряжение", function: "calc_el_field_voltage", SI: "В" },
      2: { name: "Найти напряженность", inputs: [["V", "Введите напряжение"], ["d", "Введите расстояние"]], output: "Напряженность", function: "calc_intensity_el_field_voltage", SI: "В/м" },
      3: { name: "Найти расстояние", inputs: [["V", "Введите напряжение"], ["E", "Введите напряженность"]], output: "Расстояние", function: "calc_distance_el_field_voltage", SI: "м" }
    }
  },
  el_capacity: {
    subjects_key: "электродинамика",
    title: "Электроёмкость",
    description: "Способность тела накапливать электрический заряд",
    formula_view: "C = q / V",
    cases: {
      1: { name: "Найти электроёмкость", inputs: [["q", "Введите величину заряда"], ["V", "Введите напряжение"]], output: "Электроёмкость", function: "calc_el_capacity", SI: "Ф" },
      2: { name: "Найти величину заряда", inputs: [["C", "Введите электроёмкость"], ["V", "Введите напряжение"]], output: "Величина заряда", function: "calc_charge_el_capacity", SI: "Кл" },
      3: { name: "Найти напряжение", inputs: [["C", "Введите электроёмкость"], ["q", "Введите величину заряда"]], output: "Напряжение", function: "calc_voltage_el_capacity", SI: "В" }
    }
  },
  flat_capacitor_el_capacity: {
    subjects_key: "электродинамика",
    title: "Электроёмкость плоского конденсатора",
    description: "Электроёмкость плоского конденсатора, состоящего из двух параллельных пластин",
    formula_view: "C = ε0 * εr * S / d",
    cases: {
      1: { name: "Найти электроёмкость", inputs: [["S", "Введите площадь пластин"], ["εr", "Введите проницаемость"], ["d", "Введите расстояние"]], output: "Электроёмкость", function: "calc_flat_capacitor_capacity", SI: "Ф" },
      2: { name: "Найти площадь пластин", inputs: [["C", "Введите электроёмкость"], ["εr", "Введите проницаемость"], ["d", "Введите расстояние"]], output: "Площадь пластин", function: "calc_area_flat_capacitor_capacity", SI: "м^2" },
      3: { name: "Найти проницаемость", inputs: [["C", "Введите электроёмкость"], ["S", "Введите площадь"], ["d", "Введите расстояние"]], output: "Проницаемость", function: "calc_relative_perm_flat_capacitor_capacity", SI: "" },
      4: { name: "Найти расстояние между пластинами", inputs: [["C", "Введите электроёмкость"], ["S", "Введите площадь"], ["εr", "Введите проницаемость"]], output: "Расстояние", function: "calc_distance_flat_capacitor_capacity", SI: "м" }
    }
  },
  current: {
    subjects_key: "электродинамика",
    title: "Сила тока",
    description: "Количество электрического заряда, проходящего через сечение в единицу времени",
    formula_view: "I = q / t",
    cases: {
      1: { name: "Найти силу тока", inputs: [["q", "Введите величину заряда"], ["t", "Введите время"]], output: "Сила тока", function: "calc_current", SI: "А" },
      2: { name: "Найти величину заряда", inputs: [["I", "Введите силу тока"], ["t", "Введите время"]], output: "Величина заряда", function: "calc_charge_current", SI: "Кл" },
      3: { name: "Найти время", inputs: [["I", "Введите силу тока"], ["q", "Введите величину заряда"]], output: "Время", function: "calc_time_current", SI: "с" }
    }
  },
  conductor_resistance: {
    subjects_key: "электродинамика",
    title: "Сопротивление проводника",
    description: "Величина, характеризующая сопротивление проводника прохождению тока",
    formula_view: "R = ρ * (l / A)",
    cases: {
      1: { name: "Найти сопротивление", inputs: [["ρ", "Введите удельное сопротивление"], ["l", "Введите длину"], ["A", "Введите площадь"]], output: "Сопротивление", function: "calc_conductor_resistance", SI: "Ом" },
      2: { name: "Найти удельное сопротивление", inputs: [["R", "Введите сопротивление"], ["l", "Введите длину"], ["A", "Введите площадь"]], output: "Удельное сопротивление", function: "calc_resistivity_conductor", SI: "Ом*м" },
      3: { name: "Найти длину проводника", inputs: [["R", "Введите сопротивление"], ["ρ", "Введите удельное сопротивление"], ["A", "Введите площадь"]], output: "Длина проводника", function: "calc_length_conductor", SI: "м" },
      4: { name: "Найти площадь", inputs: [["ρ", "Введите удельное сопротивление"], ["l", "Введите длину"], ["R", "Введите сопротивление"]], output: "Площадь", function: "calc_area_conductor", SI: "м^2" }
    }
  },
  section_circuit_ohms_law: {
    subjects_key: "электродинамика",
    title: "Закон Ома для участка цепи",
    description: "Зависимость силы тока от напряжения и сопротивления",
    formula_view: "I = V / R",
    cases: {
      1: { name: "Найти силу тока", inputs: [["V", "Введите напряжение"], ["R", "Введите сопротивление"]], output: "Сила тока", function: "calc_section_current", SI: "А" },
      2: { name: "Найти напряжение", inputs: [["I", "Введите силу тока"], ["R", "Введите сопротивление"]], output: "Напряжение", function: "calc_section_voltage", SI: "В" },
      3: { name: "Найти сопротивление", inputs: [["V", "Введите напряжение"], ["I", "Введите силу тока"]], output: "Сопротивление", function: "calc_section_resistance", SI: "Ом" }
    }
  },
  el_current_power: {
    subjects_key: "электродинамика",
    title: "Мощность электрического тока",
    description: "Количество энергии, передаваемой электрическим током в единицу времени",
    formula_view: "P = I * V",
    cases: {
      1: { name: "Найти мощность", inputs: [["I", "Введите силу тока"], ["V", "Введите напряжение"]], output: "Мощность", function: "calc_el_current_power", SI: "Вт" },
      2: { name: "Найти силу тока", inputs: [["P", "Введите мощность"], ["V", "Введите напряжение"]], output: "Сила тока", function: "calc_current_el_current_power", SI: "А" },
      3: { name: "Найти напряжение", inputs: [["P", "Введите мощность"], ["I", "Введите силу тока"]], output: "Напряжение", function: "calc_voltage_el_current_power", SI: "В" }
    }
  },
  joule_lenz_law: {
    subjects_key: "электродинамика",
    title: "Закон Джоуля-Ленца",
    description: "Количество теплоты, выделяемое проводником при прохождении тока",
    formula_view: "Q = I^2 * R * t",
    cases: {
      1: { name: "Найти количество теплоты", inputs: [["I", "Введите силу тока"], ["R", "Введите сопротивление"], ["t", "Введите время"]], output: "Количество теплоты", function: "calc_joule_lenz_heat", SI: "Дж" },
      2: { name: "Найти силу тока", inputs: [["Q", "Введите кол-во теплоты"], ["R", "Введите сопротивление"], ["t", "Введите время"]], output: "Сила тока", function: "calc_current_joule_lenz", SI: "А" },
      3: { name: "Найти сопротивление", inputs: [["Q", "Введите кол-во теплоты"], ["I", "Введите силу тока"], ["t", "Введите время"]], output: "Сопротивление", function: "calc_resistance_joule_lenz", SI: "Ом" },
      4: { name: "Найти время", inputs: [["Q", "Введите кол-во теплоты"], ["I", "Введите силу тока"], ["R", "Введите сопротивление"]], output: "Время", function: "calc_time_joule_lenz", SI: "с" }
    }
  },
  full_circuit_ohms_law: {
    subjects_key: "электродинамика",
    title: "Закон Ома для полной цепи",
    description: "Зависимость силы тока от ЭДС и сопротивлений в полной цепи",
    formula_view: "I = ε / (R + r)",
    cases: {
      1: { name: "Найти силу тока", inputs: [["ε", "Введите ЭДС"], ["R", "Введите внешнее сопротивление"], ["r", "Введите внутреннее сопротивление"]], output: "Сила тока", function: "calc_full_circuit_current", SI: "А" },
      2: { name: "Найти ЭДС", inputs: [["I", "Введите силу тока"], ["R", "Введите внешнее сопротивление"], ["r", "Введите внутреннее сопротивление"]], output: "ЭДС", function: "calc_emf_full_circuit", SI: "В" },
      3: { name: "Найти внешнее сопротивление", inputs: [["I", "Введите силу тока"], ["ε", "Введите ЭДС"], ["r", "Введите внутреннее сопротивление"]], output: "Внешнее сопротивление", function: "calc_external_resistance_full_circuit", SI: "Ом" },
      4: { name: "Найти внутреннее сопротивление", inputs: [["I", "Введите силу тока"], ["ε", "Введите ЭДС"], ["R", "Введите внешнее сопротивление"]], output: "Внутреннее сопротивление", function: "calc_internal_resistance_full_circuit", SI: "Ом" }
    }
  },
  short_circuit_current: {
    subjects_key: "электродинамика",
    title: "Сила тока короткого замыкания",
    description: "Сила тока, возникающая при коротком замыкании",
    formula_view: "I = ε / r",
    cases: {
      1: { name: "Найти короткозамкнутый ток", inputs: [["ε", "Введите ЭДС"], ["r", "Введите внутреннее сопротивление"]], output: "Сила тока", function: "calc_short_circuit_current", SI: "А" },
      2: { name: "Найти ЭДС", inputs: [["I", "Введите ток КЗ"], ["r", "Введите внутреннее сопротивление"]], output: "ЭДС", function: "calc_emf_short_circuit", SI: "В" },
      3: { name: "Найти внутреннее сопротивление", inputs: [["I", "Введите ток КЗ"], ["ε", "Введите ЭДС"]], output: "Внутреннее сопротивление", function: "calc_internal_resistance_short_circuit", SI: "Ом" }
    }
  },
  magnetic_induction_vector: {
    subjects_key: "электродинамика",
    title: "Вектор магнитной индукции",
    description: "Величина, характеризующая магнитное поле",
    formula_view: "B = F / (I * l)",
    cases: {
      1: { name: "Найти вектор магнитной индукции", inputs: [["F", "Введите макс. силу Ампера"], ["l", "Введите длину проводника"], ["I", "Введите силу тока"]], output: "Вектор магнитной индукции", function: "calc_magnetic_induction_vector", SI: "Тл" },
      2: { name: "Найти максимальную силу Ампера", inputs: [["B", "Введите вектор индукции"], ["l", "Введите длину проводника"], ["I", "Введите силу тока"]], output: "Сила Ампера", function: "calc_force_max_magnetic_induction", SI: "Н" },
      3: { name: "Найти длину проводника", inputs: [["F", "Введите макс. силу Ампера"], ["B", "Введите вектор индукции"], ["I", "Введите силу тока"]], output: "Длина проводника", function: "calc_length_magnetic_induction", SI: "м" },
      4: { name: "Найти силу тока", inputs: [["F", "Введите макс. силу Ампера"], ["B", "Введите вектор индукции"], ["l", "Введите длину проводника"]], output: "Сила тока", function: "calc_current_magnetic_induction", SI: "А" }
    }
  },
  amperes_force: {
    subjects_key: "электродинамика",
    title: "Сила Ампера",
    description: "Сила, действующая на проводник с током в магнитном поле",
    formula_view: "F = I * l * B * sin(α)",
    cases: {
      1: { name: "Найти силу Ампера", inputs: [["I", "Введите силу тока"], ["l", "Введите длину"], ["B", "Введите вектор индукции"], ["α", "Введите угол (рад)"]], output: "Сила Ампера", function: "calc_amperes_force", SI: "Н" },
      2: { name: "Найти силу тока", inputs: [["F", "Введите силу Ампера"], ["l", "Введите длину"], ["B", "Введите вектор индукции"], ["α", "Введите угол (рад)"]], output: "Сила тока", function: "calc_current_amperes_force", SI: "А" },
      3: { name: "Найти вектор индукции", inputs: [["F", "Введите силу Ампера"], ["I", "Введите силу тока"], ["l", "Введите длину"], ["α", "Введите угол (рад)"]], output: "Вектор индукции", function: "calc_magnetic_induction_amperes_force", SI: "Тл" },
      4: { name: "Найти длину проводника", inputs: [["F", "Введите силу Ампера"], ["I", "Введите силу тока"], ["B", "Введите вектор индукции"], ["α", "Введите угол (рад)"]], output: "Длина проводника", function: "calc_length_amperes_force", SI: "м" }
    }
  },
  lorentz_force: {
    subjects_key: "электродинамика",
    title: "Сила Лоренца",
    description: "Сила, действующая на заряженную частицу в электромагнитном поле",
    formula_view: "F = q * v * B * sin(α)",
    cases: {
      1: { name: "Найти силу Лоренца", inputs: [["q", "Введите зарядчастицы"], ["v", "Введите скорость"], ["B", "Введите вектор индукции"], ["α", "Введите угол (рад)"]], output: "Сила Лоренца", function: "calc_lorentz_force", SI: "Н" },
      2: { name: "Найти заряд частицы", inputs: [["F", "Введите силу Лоренца"], ["v", "Введите скорость"], ["B", "Введите вектор индукции"], ["α", "Введите угол (рад)"]], output: "Заряд частицы", function: "calc_charge_lorentz_force", SI: "Кл" },
      3: { name: "Найти скорость частицы", inputs: [["F", "Введите силу Лоренца"], ["q", "Введите зарядчастицы"], ["B", "Введите вектор индукции"], ["α", "Введите угол (рад)"]], output: "Скорость частицы", function: "calc_velocity_lorentz_force", SI: "м/с" },
      4: { name: "Найти вектор индукции", inputs: [["F", "Введите силу Лоренца"], ["q", "Введите зарядчастицы"], ["v", "Введите скорость"], ["α", "Введите угол (рад)"]], output: "Вектор индукции", function: "calc_magnetic_induction_lorentz_force", SI: "Тл" }
    }
  },
  magnetic_flux: {
    subjects_key: "электродинамика",
    title: "Магнитный поток",
    description: "Величина, характеризующая количество магнитного поля через поверхность",
    formula_view: "Φ = B * S * sin(α)",
    cases: {
      1: { name: "Найти магнитный поток", inputs: [["B", "Введите вектор индукции"], ["S", "Введите площадь"], ["α", "Введите угол (рад)"]], output: "Магнитный поток", function: "calc_magnetic_flux", SI: "Вб" },
      2: { name: "Найти вектор индукции", inputs: [["Φ", "Введите магнитный поток"], ["S", "Введите площадь"], ["α", "Введите угол (рад)"]], output: "Вектор индукции", function: "calc_magnetic_induction_flux", SI: "Тл" },
      3: { name: "Найти площадь поверхности", inputs: [["Φ", "Введите магнитный поток"], ["B", "Введите вектор индукции"], ["α", "Введите угол (рад)"]], output: "Площадь поверхности", function: "calc_area_magnetic_flux", SI: "м²" },
      4: { name: "Найти синус угла", inputs: [["Φ", "Введите магнитный поток"], ["B", "Введите вектор индукции"], ["S", "Введите площадь"]], output: "Синус угла", function: "calc_sin_alpha_magnetic_flux", SI: "" }
    }
  },
  electromagnetic_induction_law: {
    subjects_key: "электродинамика",
    title: "Закон электромагнитной индукции",
    description: "Зависимость ЭДС индукции от изменения магнитного потока",
    formula_view: "ε = -ΔΦ / Δt",
    cases: {
      1: { name: "Найти ЭДС индукции", inputs: [["ΔΦ", "Введите изменение потока"], ["Δt", "Введите время"]], output: "ЭДС индукции", function: "calc_emf_induction", SI: "В" },
      2: { name: "Найти изменение потока", inputs: [["ε", "Введите ЭДС индукции"], ["Δt", "Введите время"]], output: "Изменение потока", function: "calc_delta_flux_emf", SI: "Вб" },
      3: { name: "Найти время изменения потока", inputs: [["ΔΦ", "Введите изменение потока"], ["ε", "Введите ЭДС индукции"]], output: "Время", function: "calc_time_emf", SI: "с" }
    }
  },
  emf_moving_conductor: {
    subjects_key: "электродинамика",
    title: "ЭДС индукции в движущемся проводнике",
    description: "ЭДС, возникающая в проводнике, движущемся в магнитном поле",
    formula_view: "ε = B * l * v * sin(α)",
    cases: {
      1: { name: "Найти ЭДС", inputs: [["B", "Введите магнитную индукцию"], ["l", "Введите длину"], ["v", "Введите скорость"], ["α", "Введите угол (рад)"]], output: "ЭДС", function: "calc_emf_moving_conductor", SI: "В" },
      2: { name: "Найти магнитную индукцию", inputs: [["ε", "Введите ЭДС"], ["l", "Введите длину"], ["v", "Введите скорость"], ["α", "Введите угол (рад)"]], output: "Магнитная индукция", function: "calc_magnetic_induction_moving_conductor", SI: "Тл" },
      3: { name: "Найти длину проводника", inputs: [["ε", "Введите ЭДС"], ["B", "Введите индукцию"], ["v", "Введите скорость"], ["α", "Введите угол (рад)"]], output: "Длина проводника", function: "calc_length_moving_conductor", SI: "м" },
      4: { name: "Найти скорость движения", inputs: [["ε", "Введите ЭДС"], ["B", "Введите индукцию"], ["l", "Введите длину"], ["α", "Введите угол (рад)"]], output: "Скорость", function: "calc_velocity_moving_conductor", SI: "м/с" }
    }
  },
  emf_self_induction: {
    subjects_key: "электродинамика",
    title: "ЭДС самоиндукции",
    description: "ЭДС, возникающая в катушке при изменении силы тока",
    formula_view: "ε = -L * (ΔI / Δt)",
    cases: {
      1: { name: "Найти ЭДС самоиндукции", inputs: [["L", "Введите коэффициент самоиндукции"], ["ΔI", "Введите изменение тока"], ["Δt", "Введите время"]], output: "ЭДС самоиндукции", function: "calc_emf_self_induction", SI: "В" },
      2: { name: "Найти коэффициент самоиндукции", inputs: [["ε", "Введите ЭДС самоиндукции"], ["ΔI", "Введите изменение тока"], ["Δt", "Введите время"]], output: "Коэффициент самоиндукции", function: "calc_inductance_self_induction", SI: "Гн" },
      3: { name: "Найти изменение силы тока", inputs: [["ε", "Введите ЭДС самоиндукции"], ["L", "Введите индуктивность"], ["Δt", "Введите время"]], output: "Изменение тока", function: "calc_delta_current_self_induction", SI: "А" },
      4: { name: "Найти время изменения тока", inputs: [["ε", "Введите ЭДС самоиндукции"], ["L", "Введите индуктивность"], ["ΔI", "Введите изменение тока"]], output: "Время", function: "calc_time_self_induction", SI: "с" }
    }
  },
  coil_magnetic_field_energy: {
    subjects_key: "электродинамика",
    title: "Энергия магнитного поля катушки",
    description: "Энергия, запасаемая в магнитном поле катушки с током",
    formula_view: "W = (1/2) * L * I^2",
    cases: {
      1: { name: "Найти энергию магнитного поля", inputs: [["L", "Введите индуктивность"], ["I", "Введите силу тока"]], output: "Энергия", function: "calc_coil_magnetic_field_energy", SI: "Дж" },
      2: { name: "Найти индуктивность катушки", inputs: [["W", "Введите энергию"], ["I", "Введите силу тока"]], output: "Индуктивность", function: "calc_inductance_coil_energy", SI: "Гн" },
      3: { name: "Найти силу тока в катушке", inputs: [["W", "Введите энергию"], ["L", "Введите индуктивность"]], output: "Сила тока", function: "calc_current_coil_energy", SI: "А" }
    }
  },
  oscillating_circuit_period: {
    subjects_key: "электродинамика",
    title: "Период колебаний в колебательном контуре",
    description: "Период колебаний Томсона в L-C контуре",
    formula_view: "T = 2 * π * √(L * C)",
    cases: {
      1: { name: "Найти период колебаний", inputs: [["L", "Введите индуктивность"], ["C", "Введите емкость"]], output: "Период колебаний", function: "calc_oscillating_circuit_period", SI: "с" },
      2: { name: "Найти индуктивность", inputs: [["T", "Введите период"], ["C", "Введите емкость"]], output: "Индуктивность", function: "calc_inductance_oscillating_circuit", SI: "Гн" },
      3: { name: "Найти электроемкость", inputs: [["T", "Введите период"], ["L", "Введите индуктивность"]], output: "Электроемкость", function: "calc_capacitance_oscillating_circuit", SI: "Ф" }
    }
  },
  inductive_resistance: {
    subjects_key: "электродинамика",
    title: "Индуктивное сопротивление",
    description: "Сопротивление, создаваемое катушкой индуктивности в цепи переменного тока",
    formula_view: "X_L = 2 * π * f * L",
    cases: {
      1: { name: "Найти индуктивное сопротивление", inputs: [["f", "Введите частоту"], ["L", "Введите индуктивность"]], output: "Индуктивное сопротивление", function: "calc_inductive_resistance", SI: "Ом" },
      2: { name: "Найти частоту", inputs: [["X_L", "Введите сопротивление"], ["L", "Введите индуктивность"]], output: "Частота", function: "calc_frequency_inductive_resistance", SI: "Гц" },
      3: { name: "Найти индуктивность", inputs: [["X_L", "Введите сопротивление"], ["f", "Введите частоту"]], output: "Индуктивность", function: "calc_inductance_from_resistance", SI: "Гн" }
    }
  },
  capacitive_resistance: {
    subjects_key: "электродинамика",
    title: "Емкостное сопротивление",
    description: "Сопротивление, создаваемое конденсатором в цепи переменного тока",
    formula_view: "X_C = 1 / (ω * C)",
    cases: {
      1: { name: "Найти емкостное сопротивление", inputs: [["C", "Введите электроёмкость"], ["ω", "Введите угловую частоту"]], output: "Емкостное сопротивление", function: "calc_capacitive_resistance", SI: "Ом" },
      2: { name: "Найти электроёмкость", inputs: [["X_C", "Введите сопротивление"], ["ω", "Введите угловую частоту"]], output: "Электроёмкость", function: "calc_capacitance_from_capacitive_resistance", SI: "Ф" },
      3: { name: "Найти угловую частоту", inputs: [["X_C", "Введите сопротивление"], ["C", "Введите электроёмкость"]], output: "Угловая частота", function: "calc_angular_frequency_from_capacitive_resistance", SI: "Гц" }
    }
  },
  actual_current_value: {
    subjects_key: "электродинамика",
    title: "Действующее значение силы тока",
    description: "Действующее (эффективное) значение тока переменной цепи",
    formula_view: "I = I_max / √2",
    cases: {
      1: { name: "Найти эффективное значение тока", inputs: [["I_max", "Введите макс. силу тока"]], output: "Эффективная сила тока", function: "calc_actual_current_value", SI: "А" },
      2: { name: "Найти максимальную силу тока", inputs: [["I_rms", "Введите эффективный ток"]], output: "Максимальная сила тока", function: "calc_max_current_from_actual", SI: "А" }
    }
  },
  actual_voltage_value: {
    subjects_key: "электродинамика",
    title: "Действующее значение напряжения",
    description: "Действующее (эффективное) значение напряжения в цепи переменного тока",
    formula_view: "V = V_max / √2",
    cases: {
      1: { name: "Найти эффективное напряжение", inputs: [["V_max", "Введите макс. напряжение"]], output: "Эффективное напряжение", function: "calc_actual_voltage_value", SI: "В" },
      2: { name: "Найти максимальное напряжение", inputs: [["V_rms", "Введите эффективное напряжение"]], output: "Максимальное напряжение", function: "calc_max_voltage_from_actual", SI: "В" }
    }
  },
  total_resistance: {
    subjects_key: "электродинамика",
    title: "Полное сопротивление",
    description: "Полное импедансное сопротивление цепи переменного тока",
    formula_view: "Z = √(R^2 + (X_L - X_C)^2)",
    cases: {
      1: { name: "Найти полное сопротивление", inputs: [["R", "Введите активное сопротивление"], ["X_L", "Введите индуктивное сопротивление"], ["X_C", "Введите емкостное сопротивление"]], output: "Полное сопротивление", function: "calc_total_resistance", SI: "Ом" },
      2: { name: "Найти емкостное сопротивление", inputs: [["Z", "Введите полное сопротивление"], ["R", "Введите активное сопротивление"], ["X_L", "Введите индуктивное сопротивление"]], output: "Емкостное сопротивление", function: "calc_capacitive_resistance_from_total", SI: "Ом" },
      3: { name: "Найти индуктивное сопротивление", inputs: [["Z", "Введите полное сопротивление"], ["R", "Введите активное сопротивление"], ["X_C", "Введите емкостное сопротивление"]], output: "Индуктивное сопротивление", function: "calc_inductive_resistance_from_total", SI: "Ом" },
      4: { name: "Найти активное сопротивление", inputs: [["Z", "Введите полное сопротивление"], ["X_L", "Введите индуктивное сопротивление"], ["X_C", "Введите емкостное сопротивление"]], output: "Активное сопротивление", function: "calc_active_resistance_from_total", SI: "Ом" }
    }
  }
};

export const ELECTRODYNAMICS_PROMPTS = {
  [COULOMBS_LAW]: "Введите величину, которую нужно найти (Сила - 1, Заряд №1 - 2, Заряд №2 - 3, Расстояние - 4): ",
  [EL_FIELD_INTENSITY]: "Введите величину, которую нужно найти (Напряженность - 1, Сила - 2, Величина заряда - 3): ",
  [POINT_CHARGE_EL_FIELD_INTENSITY]: "Введите величину, которую нужно найти (Напряженность - 1, Величина заряда - 2, Расстояние - 3): ",
  [SURFACE_CHARGE_DENSITY]: "Введите величину, которую нужно найти (Поверхностная плотность - 1, Заряд - 2, Площадь - 3): ",
  [INFINITY_SURFACE_EL_FIELD_INTENSITY]: "Введите величину, которую нужно найти (Напряженность - 1, Поверхностная плотность - 2): ",
  [DIELECTRIC_CONSTANT]: "Введите величину, которую нужно найти (Проницаемость - 1, Напряженность в вакууме - 2, Напряженность в диэлектрике - 3): ",
  [INTERACTING_CHARGES_POTENTIAL_ENERGY]: "Введите величину, которую нужно найти (Потенциальная энергия - 1, Заряд №1 - 2, Заряд №2 - 3, Расстояние - 4): ",
  [POTENTIAL]: "Введите величину, которую нужно найти (Потенциал - 1, Потенциальная энергия - 2, Величина заряда - 3): ",
  [POINT_CHARGE_POTENTIAL]: "Введите величину, которую нужно найти (Потенциал - 1, Величина заряда - 2, Расстояние - 3): ",
  [VOLTAGE]: "Введите величину, которую нужно найти (Напряжение - 1, Работа - 2, Величина заряда - 3): ",
  [EL_FIELD_VOLTAGE]: "Введите величину, которую нужно найти (Напряжение - 1, Напряженность - 2, Расстояние - 3): ",
  [EL_CAPACITY]: "Введите величину, которую нужно найти (Электроёмкость - 1, Величина заряда - 2, Напряжение - 3): ",
  [FLAT_CAPACITOR_EL_CAPACITY]: "Введите величину, которую нужно найти (Электроёмкость - 1, Площадь пластин - 2, Проницаемость - 3, Расстояние - 4): ",
  [CURRENT]: "Введите величину, которую нужно найти (Сила тока - 1, Величина заряда - 2, Время - 3): ",
  [CONDUCTOR_RESISTANCE]: "Введите величину, которую нужно найти (Сопротивление - 1, Удельное сопротивление - 2, Длина - 3, Площадь - 4): ",
  [SECTION_CIRCUIT_OHMS_LAW]: "Введите величину, которую нужно найти (Сила тока - 1, Напряжение - 2, Сопротивление - 3): ",
  [EL_CURRENT_POWER]: "Введите величину, которую нужно найти (Мощность - 1, Сила тока - 2, Напряжение - 3): ",
  [JOULE_LENZ_LAW]: "Введите величину, которую нужно найти (Кол-во теплоты - 1, Сила тока - 2, Сопротивление - 3, Время - 4): ",
  [FULL_CIRCUIT_OHMS_LAW]: "Введите величину, которую нужно найти (Сила тока - 1, ЭДС - 2, Внешнее сопротивление - 3, Внутреннее сопротивление - 4): ",
  [SHORT_CIRCUIT_CURRENT]: "Введите величину, которую нужно найти (Сила тока КЗ - 1, ЭДС - 2, Внутреннее сопротивление - 3): ",
  [MAGNETIC_INDUCTION_VECTOR]: "Введите величину, которую нужно найти (Вектор индукции - 1, Макс. сила Ампера - 2, Длина - 3, Сила тока - 4): ",
  [AMPERES_FORCE]: "Введите величину, которую нужно найти (Сила Ампера - 1, Сила тока - 2, Вектор индукции - 3, Длина - 4): ",
  [LORENTZ_FORCE]: "Введите величину, которую нужно найти (Сила Лоренца - 1, Заряд - 2, Скорость - 3, Вектор индукции - 4): ",
  [MAGNETIC_FLUX]: "Введите величину, которую нужно найти (Магнитный поток - 1, Вектор индукции - 2, Площадь - 3, Синус угла - 4): ",
  [ELECTROMAGNETIC_INDUCTION_LAW]: "Введите величину, которую нужно найти (ЭДС индукции - 1, Изменение потока - 2, Промежуток времени - 3): ",
  [EMF_MOVING_CONDUCTOR]: "Введите величину, которую нужно найти (ЭДС - 1, Вектор индукции - 2, Длина - 3, Скорость - 4): ",
  [EMF_SELF_INDUCTION]: "Введите величину, которую нужно найти (ЭДС самоиндукции - 1, Коэффициент самоиндукции - 2, Изменение тока - 3, Время - 4): ",
  [COIL_MAGNETIC_FIELD_ENERGY]: "Введите величину, которую нужно найти (Энергия - 1, Индуктивность - 2, Сила тока - 3): ",
  [OSCILLATING_CIRCUIT_PERIOD]: "Введите величину, которую нужно найти (Период - 1, Индуктивность - 2, Электроёмкость - 3): ",
  [INDUCTIVE_RESISTANCE]: "Введите величину, которую нужно найти (Сопротивление - 1, Частота - 2, Индуктивность - 3): ",
  [CAPACITIVE_RESISTANCE]: "Введите величину, которую нужно найти (Сопротивление - 1, Электроёмкость - 2, Угловая частота - 3): ",
  [ACTUAL_CURRENT_VALUE]: "Введите величину, которую нужно найти (Сила тока - 1, Максимальная сила тока - 2): ",
  [ACTUAL_VOLTAGE_VALUE]: "Введите величину, которую нужно найти (Напряжение - 1, Максимальное напряжение - 2): ",
  [TOTAL_RESISTANCE]: "Введите величину, которую нужно найти (Полное сопротивление - 1, Емкостное сопротивление - 2, Индуктивное сопротивление - 3, Активное сопротивление - 4): "
};