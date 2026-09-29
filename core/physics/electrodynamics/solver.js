import readline from 'readline';
import * as calcs from './calculations.js';
import * as enumTypes from './enum.js';

function promptInput(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => rl.question(query, answer => {
    rl.close();
    resolve(answer);
  }));
}

export async function formulaSelection(inputText, enumFormula) {
  const optionStr = await promptInput(inputText);
  const option = parseInt(optionStr, 10);

  switch (enumFormula) {
    case enumTypes.COULOMBS_LAW: {
      if (option === 1) {
        const q1 = parseFloat(await promptInput("Введите электрический заряд №1: "));
        const q2 = parseFloat(await promptInput("Введите электрический заряд №2: "));
        const r = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Сила = ${calcs.calc_coulombs_law(q1, q2, r)}`);
      } else if (option === 2) {
        const force = parseFloat(await promptInput("Введите силу: "));
        const q2 = parseFloat(await promptInput("Введите электрический заряд №2: "));
        const r = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Электрический заряд №1 = ${calcs.calc_electric_charge_1_coulombs_law(force, q2, r)}`);
      } else if (option === 3) {
        const force = parseFloat(await promptInput("Введите силу: "));
        const q1 = parseFloat(await promptInput("Введите электрический заряд №1: "));
        const r = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Электрический заряд №2 = ${calcs.calc_electric_charge_2_coulombs_law(force, q1, r)}`);
      } else if (option === 4) {
        const force = parseFloat(await promptInput("Введите силу: "));
        const q1 = parseFloat(await promptInput("Введите электрический заряд №1: "));
        const q2 = parseFloat(await promptInput("Введите электрический заряд №2: "));
        console.log(`Расстояние = ${calcs.calc_distance_coulombs_law(force, q1, q2)}`);
      }
      break;
    }

    case enumTypes.EL_FIELD_INTENSITY: {
      if (option === 1) {
        const force = parseFloat(await promptInput("Введите силу: "));
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        console.log(`Напряженность = ${calcs.calc_el_field_intensity(force, q)}`);
      } else if (option === 2) {
        const E = parseFloat(await promptInput("Введите напряженность: "));
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        console.log(`Сила = ${calcs.calc_force_el_field_intensity(E, q)}`);
      } else if (option === 3) {
        const force = parseFloat(await promptInput("Введите силу: "));
        const E = parseFloat(await promptInput("Введите напряженность: "));
        console.log(`Величина заряда = ${calcs.calc_electric_charge_el_field_intensity(force, E)}`);
      }
      break;
    }

    case enumTypes.POINT_CHARGE_EL_FIELD_INTENSITY: {
      if (option === 1) {
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        const r = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Напряженность = ${calcs.calc_point_charge_el_field_intensity(q, r)}`);
      } else if (option === 2) {
        const E = parseFloat(await promptInput("Введите напряженность: "));
        const r = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Величина заряда = ${calcs.calc_electric_charge_point_charge_el_field_intensity(E, r)}`);
      } else if (option === 3) {
        const E = parseFloat(await promptInput("Введите напряженность: "));
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        console.log(`Расстояние = ${calcs.calc_distance_charge_point_charge_el_field_intensity(E, q)}`);
      }
      break;
    }

    case enumTypes.SURFACE_CHARGE_DENSITY: {
      if (option === 1) {
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        const S = parseFloat(await promptInput("Введите площадь: "));
        console.log(`Поверхностная плотность зарядов = ${calcs.calc_surface_charge_density(q, S)}`);
      } else if (option === 2) {
        const density = parseFloat(await promptInput("Введите поверхностную плотность: "));
        const S = parseFloat(await promptInput("Введите площадь: "));
        console.log(`Электрический заряд = ${calcs.calc_electric_charge_surface_charge_density(density, S)}`);
      } else if (option === 3) {
        const density = parseFloat(await promptInput("Введите поверхностную плотность: "));
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        console.log(`Площадь = ${calcs.calc_area_surface_charge_density(density, q)}`);
      }
      break;
    }

    case enumTypes.INFINITY_SURFACE_EL_FIELD_INTENSITY: {
      if (option === 1) {
        const density = parseFloat(await promptInput("Введите поверхностную плотность: "));
        console.log(`Напряженность = ${calcs.calc_infinity_surface_el_field_intensity(density)}`);
      } else if (option === 2) {
        const E = parseFloat(await promptInput("Введите напряженность: "));
        console.log(`Поверхностная плотность зарядов = ${calcs.calc_density_infinity_surface_el_field_intensity(E)}`);
      }
      break;
    }

    case enumTypes.DIELECTRIC_CONSTANT: {
      if (option === 1) {
        const E1 = parseFloat(await promptInput("Введите напряженность в вакууме: "));
        const E2 = parseFloat(await promptInput("Введите напряженность в диэлектрике: "));
        console.log(`Диэлектрическая проницаемость = ${calcs.calc_dielectric_constant(E1, E2)}`);
      } else if (option === 2) {
        const eps = parseFloat(await promptInput("Введите диэлектрическую проницаемость: "));
        const E2 = parseFloat(await promptInput("Введите напряженность в диэлектрике: "));
        console.log(`Напряженность в вакууме = ${calcs.calc_intensity_1_dielectric_constant(eps, E2)}`);
      } else if (option === 3) {
        const eps = parseFloat(await promptInput("Введите диэлектрическую проницаемость: "));
        const E1 = parseFloat(await promptInput("Введите напряженность в вакууме: "));
        console.log(`Напряженность в диэлектрике = ${calcs.calc_intensity_2_dielectric_constant(eps, E1)}`);
      }
      break;
    }

    case enumTypes.INTERACTING_CHARGES_POTENTIAL_ENERGY: {
      if (option === 1) {
        const q1 = parseFloat(await promptInput("Введите электрический заряд №1: "));
        const q2 = parseFloat(await promptInput("Введите электрический заряд №2: "));
        const r = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Потенциальная энергия = ${calcs.calc_potential_energy(q1, q2, r)}`);
      } else if (option === 2) {
        const U = parseFloat(await promptInput("Введите потенциальную энергию: "));
        const q2 = parseFloat(await promptInput("Введите электрический заряд №2: "));
        const r = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Электрический заряд №1 = ${calcs.calc_electric_charge_1_potential_energy(U, q2, r)}`);
      } else if (option === 3) {
        const U = parseFloat(await promptInput("Введите потенциальную энергию: "));
        const q1 = parseFloat(await promptInput("Введите электрический заряд №1: "));
        const r = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Электрический заряд №2 = ${calcs.calc_electric_charge_2_potential_energy(U, q1, r)}`);
      } else if (option === 4) {
        const U = parseFloat(await promptInput("Введите потенциальную энергию: "));
        const q1 = parseFloat(await promptInput("Введите электрический заряд №1: "));
        const q2 = parseFloat(await promptInput("Введите электрический заряд №2: "));
        console.log(`Расстояние = ${calcs.calc_distance_potential_energy(U, q1, q2)}`);
      }
      break;
    }

    case enumTypes.POTENTIAL: {
      if (option === 1) {
        const U = parseFloat(await promptInput("Введите потенциальную энергию: "));
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        console.log(`Потенциал = ${calcs.calc_potential(U, q)}`);
      } else if (option === 2) {
        const V = parseFloat(await promptInput("Введите потенциал: "));
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        console.log(`Потенциальная энергия = ${calcs.calc_potential_energy_potential(V, q)}`);
      } else if (option === 3) {
        const V = parseFloat(await promptInput("Введите потенциал: "));
        const U = parseFloat(await promptInput("Введите потенциальную энергию: "));
        console.log(`Величина заряда = ${calcs.calc_electric_charge_potential(V, U)}`);
      }
      break;
    }

    case enumTypes.POINT_CHARGE_POTENTIAL: {
      if (option === 1) {
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        const r = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Потенциал = ${calcs.calc_point_charge_potential(q, r)}`);
      } else if (option === 2) {
        const V = parseFloat(await promptInput("Введите потенциал: "));
        const r = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Величина заряда = ${calcs.calc_electric_charge_point_charge_potential(V, r)}`);
      } else if (option === 3) {
        const V = parseFloat(await promptInput("Введите потенциал: "));
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        console.log(`Расстояние = ${calcs.calc_distance_point_charge_potential(V, q)}`);
      }
      break;
    }

    case enumTypes.VOLTAGE: {
      if (option === 1) {
        const W = parseFloat(await promptInput("Введите работу: "));
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        console.log(`Напряжение = ${calcs.calc_voltage(W, q)}`);
      } else if (option === 2) {
        const V = parseFloat(await promptInput("Введите напряжение: "));
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        console.log(`Работа = ${calcs.calc_work_voltage(V, q)}`);
      } else if (option === 3) {
        const V = parseFloat(await promptInput("Введите напряжение: "));
        const W = parseFloat(await promptInput("Введите работу: "));
        console.log(`Величина заряда = ${calcs.calc_electric_charge_voltage(V, W)}`);
      }
      break;
    }

    case enumTypes.EL_FIELD_VOLTAGE: {
      if (option === 1) {
        const E = parseFloat(await promptInput("Введите напряженность: "));
        const d = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Напряжение = ${calcs.calc_el_field_voltage(E, d)}`);
      } else if (option === 2) {
        const V = parseFloat(await promptInput("Введите напряжение: "));
        const d = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Напряженность = ${calcs.calc_intensity_el_field_voltage(V, d)}`);
      } else if (option === 3) {
        const V = parseFloat(await promptInput("Введите напряжение: "));
        const E = parseFloat(await promptInput("Введите напряженность: "));
        console.log(`Расстояние = ${calcs.calc_distance_el_field_voltage(V, E)}`);
      }
      break;
    }

    case enumTypes.EL_CAPACITY: {
      if (option === 1) {
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        const V = parseFloat(await promptInput("Введите напряжение: "));
        console.log(`Электроёмкость = ${calcs.calc_el_capacity(q, V)}`);
      } else if (option === 2) {
        const C = parseFloat(await promptInput("Введите электроёмкость: "));
        const V = parseFloat(await promptInput("Введите напряжение: "));
        console.log(`Величина заряда = ${calcs.calc_charge_el_capacity(C, V)}`);
      } else if (option === 3) {
        const C = parseFloat(await promptInput("Введите электроёмкость: "));
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        console.log(`Напряжение = ${calcs.calc_voltage_el_capacity(C, q)}`);
      }
      break;
    }

    case enumTypes.FLAT_CAPACITOR_EL_CAPACITY: {
      if (option === 1) {
        const S = parseFloat(await promptInput("Введите площадь пластин: "));
        const epsR = parseFloat(await promptInput("Введите относительную проницаемость: "));
        const d = parseFloat(await promptInput("Введите расстояние между пластинами: "));
        console.log(`Электроёмкость = ${calcs.calc_flat_capacitor_capacity(S, epsR, d)}`);
      } else if (option === 2) {
        const C = parseFloat(await promptInput("Введите электроёмкость: "));
        const epsR = parseFloat(await promptInput("Введите относительную проницаемость: "));
        const d = parseFloat(await promptInput("Введите расстояние между пластинами: "));
        console.log(`Площадь пластин = ${calcs.calc_area_flat_capacitor_capacity(C, epsR, d)}`);
      } else if (option === 3) {
        const C = parseFloat(await promptInput("Введите электроёмкость: "));
        const S = parseFloat(await promptInput("Введите площадь пластин: "));
        const d = parseFloat(await promptInput("Введите расстояние между пластинами: "));
        console.log(`Относительная проницаемость = ${calcs.calc_relative_perm_flat_capacitor_capacity(C, S, d)}`);
      } else if (option === 4) {
        const C = parseFloat(await promptInput("Введите электроёмкость: "));
        const S = parseFloat(await promptInput("Введите площадь пластин: "));
        const epsR = parseFloat(await promptInput("Введите относительную проницаемость: "));
        console.log(`Расстояние между пластинами = ${calcs.calc_distance_flat_capacitor_capacity(C, S, epsR)}`);
      }
      break;
    }

    case enumTypes.CURRENT: {
      if (option === 1) {
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        const t = parseFloat(await promptInput("Введите время: "));
        console.log(`Сила тока = ${calcs.calc_current(q, t)}`);
      } else if (option === 2) {
        const I = parseFloat(await promptInput("Введите силу тока: "));
        const t = parseFloat(await promptInput("Введите время: "));
        console.log(`Величина заряда = ${calcs.calc_charge_current(I, t)}`);
      } else if (option === 3) {
        const q = parseFloat(await promptInput("Введите величину заряда: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        console.log(`Время = ${calcs.calc_time_current(q, I)}`);
      }
      break;
    }

    case enumTypes.CONDUCTOR_RESISTANCE: {
      if (option === 1) {
        const rho = parseFloat(await promptInput("Введите удельное сопротивление: "));
        const l = parseFloat(await promptInput("Введите длину проводника: "));
        const A = parseFloat(await promptInput("Введите площадь: "));
        console.log(`Сопротивление = ${calcs.calc_conductor_resistance(rho, l, A)}`);
      } else if (option === 2) {
        const R = parseFloat(await promptInput("Введите сопротивление: "));
        const l = parseFloat(await promptInput("Введите длину проводника: "));
        const A = parseFloat(await promptInput("Введите площадь: "));
        console.log(`Удельное сопротивление = ${calcs.calc_resistivity_conductor(R, l, A)}`);
      } else if (option === 3) {
        const R = parseFloat(await promptInput("Введите сопротивление: "));
        const rho = parseFloat(await promptInput("Введите удельное сопротивление: "));
        const A = parseFloat(await promptInput("Введите площадь: "));
        console.log(`Длина проводника = ${calcs.calc_length_conductor(R, rho, A)}`);
      } else if (option === 4) {
        const rho = parseFloat(await promptInput("Введите удельное сопротивление: "));
        const l = parseFloat(await promptInput("Введите длину проводника: "));
        const R = parseFloat(await promptInput("Введите сопротивление: "));
        console.log(`Площадь = ${calcs.calc_area_conductor(rho, l, R)}`);
      }
      break;
    }

    case enumTypes.SECTION_CIRCUIT_OHMS_LAW: {
      if (option === 1) {
        const V = parseFloat(await promptInput("Введите напряжение: "));
        const R = parseFloat(await promptInput("Введите сопротивление: "));
        console.log(`Сила тока = ${calcs.calc_section_current(V, R)}`);
      } else if (option === 2) {
        const I = parseFloat(await promptInput("Введите силу тока: "));
        const R = parseFloat(await promptInput("Введите сопротивление: "));
        console.log(`Напряжение = ${calcs.calc_section_voltage(I, R)}`);
      } else if (option === 3) {
        const V = parseFloat(await promptInput("Введите напряжение: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        console.log(`Сопротивление = ${calcs.calc_section_resistance(V, I)}`);
      }
      break;
    }

    case enumTypes.EL_CURRENT_POWER: {
      if (option === 1) {
        const I = parseFloat(await promptInput("Введите силу тока: "));
        const V = parseFloat(await promptInput("Введите напряжение: "));
        console.log(`Мощность = ${calcs.calc_el_current_power(I, V)}`);
      } else if (option === 2) {
        const P = parseFloat(await promptInput("Введите мощность: "));
        const V = parseFloat(await promptInput("Введите напряжение: "));
        console.log(`Сила тока = ${calcs.calc_current_el_current_power(P, V)}`);
      } else if (option === 3) {
        const P = parseFloat(await promptInput("Введите мощность: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        console.log(`Напряжение = ${calcs.calc_voltage_el_current_power(P, I)}`);
      }
      break;
    }

    case enumTypes.JOULE_LENZ_LAW: {
      if (option === 1) {
        const I = parseFloat(await promptInput("Введите силу тока: "));
        const R = parseFloat(await promptInput("Введите сопротивление: "));
        const t = parseFloat(await promptInput("Введите время: "));
        console.log(`Кол-во теплоты = ${calcs.calc_joule_lenz_heat(I, R, t)}`);
      } else if (option === 2) {
        const Q = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const R = parseFloat(await promptInput("Введите сопротивление: "));
        const t = parseFloat(await promptInput("Введите время: "));
        console.log(`Сила тока = ${calcs.calc_current_joule_lenz(Q, R, t)}`);
      } else if (option === 3) {
        const Q = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        const t = parseFloat(await promptInput("Введите время: "));
        console.log(`Сопротивление = ${calcs.calc_resistance_joule_lenz(Q, I, t)}`);
      } else if (option === 4) {
        const Q = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        const R = parseFloat(await promptInput("Введите сопротивление: "));
        console.log(`Время = ${calcs.calc_time_joule_lenz(Q, I, R)}`);
      }
      break;
    }

    case enumTypes.FULL_CIRCUIT_OHMS_LAW: {
      if (option === 1) {
        const emf = parseFloat(await promptInput("Введите ЭДС: "));
        const R = parseFloat(await promptInput("Введите внешнее сопротивление: "));
        const r = parseFloat(await promptInput("Введите внутреннее сопротивление: "));
        console.log(`Сила тока = ${calcs.calc_full_circuit_current(emf, R, r)}`);
      } else if (option === 2) {
        const I = parseFloat(await promptInput("Введите силу тока: "));
        const R = parseFloat(await promptInput("Введите внешнее сопротивление: "));
        const r = parseFloat(await promptInput("Введите внутреннее сопротивление: "));
        console.log(`ЭДС источника = ${calcs.calc_emf_full_circuit(I, R, r)}`);
      } else if (option === 3) {
        const emf = parseFloat(await promptInput("Введите ЭДС: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        const r = parseFloat(await promptInput("Введите внутреннее сопротивление: "));
        console.log(`Внешнее сопротивление = ${calcs.calc_external_resistance_full_circuit(emf, I, r)}`);
      } else if (option === 4) {
        const emf = parseFloat(await promptInput("Введите ЭДС: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        const R = parseFloat(await promptInput("Введите внешнее сопротивление: "));
        console.log(`Внутреннее сопротивление = ${calcs.calc_internal_resistance_full_circuit(emf, I, R)}`);
      }
      break;
    }

    case enumTypes.SHORT_CIRCUIT_CURRENT: {
      if (option === 1) {
        const emf = parseFloat(await promptInput("Введите ЭДС: "));
        const r = parseFloat(await promptInput("Введите внутреннее сопротивление: "));
        console.log(`Короткозамкнутый ток = ${calcs.calc_short_circuit_current(emf, r)}`);
      } else if (option === 2) {
        const I = parseFloat(await promptInput("Введите силу тока КЗ: "));
        const r = parseFloat(await promptInput("Введите внутреннее сопротивление: "));
        console.log(`ЭДС источника = ${calcs.calc_emf_short_circuit(I, r)}`);
      } else if (option === 3) {
        const emf = parseFloat(await promptInput("Введите ЭДС: "));
        const I = parseFloat(await promptInput("Введите силу тока КЗ: "));
        console.log(`Внутреннее сопротивление = ${calcs.calc_internal_resistance_short_circuit(emf, I)}`);
      }
      break;
    }

    case enumTypes.MAGNETIC_INDUCTION_VECTOR: {
      if (option === 1) {
        const fMax = parseFloat(await promptInput("Введите макс. силу Ампера: "));
        const l = parseFloat(await promptInput("Введите длину проводника: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        console.log(`Вектор магнитной индукции = ${calcs.calc_magnetic_induction_vector(fMax, l, I)}`);
      } else if (option === 2) {
        const B = parseFloat(await promptInput("Введите вектор магнитной индукции: "));
        const l = parseFloat(await promptInput("Введите длину проводника: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        console.log(`Максимальная сила Ампера = ${calcs.calc_force_max_magnetic_induction(B, l, I)}`);
      } else if (option === 3) {
        const fMax = parseFloat(await promptInput("Введите макс. силу Ампера: "));
        const B = parseFloat(await promptInput("Введите вектор магнитной индукции: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        console.log(`Длина проводника = ${calcs.calc_length_magnetic_induction(fMax, B, I)}`);
      } else if (option === 4) {
        const fMax = parseFloat(await promptInput("Введите макс. силу Ампера: "));
        const B = parseFloat(await promptInput("Введите вектор магнитной индукции: "));
        const l = parseFloat(await promptInput("Введите длину проводника: "));
        console.log(`Сила тока = ${calcs.calc_current_magnetic_induction(fMax, B, l)}`);
      }
      break;
    }

    case enumTypes.AMPERES_FORCE: {
      if (option === 1) {
        const I = parseFloat(await promptInput("Введите силу тока: "));
        const l = parseFloat(await promptInput("Введите длину проводника: "));
        const B = parseFloat(await promptInput("Введите вектор индукции: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Сила Ампера = ${calcs.calc_amperes_force(I, l, B, alpha)}`);
      } else if (option === 2) {
        const F = parseFloat(await promptInput("Введите силу Ампера: "));
        const l = parseFloat(await promptInput("Введите длину проводника: "));
        const B = parseFloat(await promptInput("Введите вектор индукции: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Сила тока = ${calcs.calc_current_amperes_force(F, l, B, alpha)}`);
      } else if (option === 3) {
        const F = parseFloat(await promptInput("Введите силу Ампера: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        const l = parseFloat(await promptInput("Введите длину проводника: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Вектор магнитной индукции = ${calcs.calc_magnetic_induction_amperes_force(F, I, l, alpha)}`);
      } else if (option === 4) {
        const F = parseFloat(await promptInput("Введите силу Ампера: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        const B = parseFloat(await promptInput("Введите вектор индукции: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Длина проводника = ${calcs.calc_length_amperes_force(F, I, B, alpha)}`);
      }
      break;
    }

    case enumTypes.LORENTZ_FORCE: {
      if (option === 1) {
        const q = parseFloat(await promptInput("Введите заряд частицы: "));
        const v = parseFloat(await promptInput("Введите скорость: "));
        const B = parseFloat(await promptInput("Введите вектор индукции: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Сила Лоренца = ${calcs.calc_lorentz_force(q, v, B, alpha)}`);
      } else if (option === 2) {
        const F = parseFloat(await promptInput("Введите силу Лоренца: "));
        const v = parseFloat(await promptInput("Введите скорость: "));
        const B = parseFloat(await promptInput("Введите вектор индукции: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Заряд частицы = ${calcs.calc_charge_lorentz_force(F, v, B, alpha)}`);
      } else if (option === 3) {
        const F = parseFloat(await promptInput("Введите силу Лоренца: "));
        const q = parseFloat(await promptInput("Введите заряд частицы: "));
        const B = parseFloat(await promptInput("Введите вектор индукции: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Скорость = ${calcs.calc_velocity_lorentz_force(F, q, B, alpha)}`);
      } else if (option === 4) {
        const F = parseFloat(await promptInput("Введите силу Лоренца: "));
        const q = parseFloat(await promptInput("Введите заряд частицы: "));
        const v = parseFloat(await promptInput("Введите скорость: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Вектор магнитной индукции = ${calcs.calc_magnetic_induction_lorentz_force(F, q, v, alpha)}`);
      }
      break;
    }

    case enumTypes.MAGNETIC_FLUX: {
      if (option === 1) {
        const B = parseFloat(await promptInput("Введите вектор индукции: "));
        const S = parseFloat(await promptInput("Введите площадь: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Магнитный поток = ${calcs.calc_magnetic_flux(B, S, alpha)}`);
      } else if (option === 2) {
        const flux = parseFloat(await promptInput("Введите магнитный поток: "));
        const S = parseFloat(await promptInput("Введите площадь: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Вектор магнитной индукции = ${calcs.calc_magnetic_induction_flux(flux, S, alpha)}`);
      } else if (option === 3) {
        const flux = parseFloat(await promptInput("Введите магнитный поток: "));
        const B = parseFloat(await promptInput("Введите вектор индукции: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Площадь = ${calcs.calc_area_magnetic_flux(flux, B, alpha)}`);
      } else if (option === 4) {
        const flux = parseFloat(await promptInput("Введите магнитный поток: "));
        const B = parseFloat(await promptInput("Введите вектор индукции: "));
        const S = parseFloat(await promptInput("Введите площадь: "));
        console.log(`Синус угла = ${calcs.calc_sin_alpha_magnetic_flux(flux, B, S)}`);
      }
      break;
    }

    case enumTypes.ELECTROMAGNETIC_INDUCTION_LAW: {
      if (option === 1) {
        const deltaFlux = parseFloat(await promptInput("Введите изменение магнитного потока: "));
        const time = parseFloat(await promptInput("Введите промежуток времени: "));
        console.log(`ЭДС индукции = ${calcs.calc_emf_induction(deltaFlux, time)}`);
      } else if (option === 2) {
        const emf = parseFloat(await promptInput("Введите ЭДС индукции: "));
        const time = parseFloat(await promptInput("Введите промежуток времени: "));
        console.log(`Изменение магнитного потока = ${calcs.calc_delta_flux_emf(emf, time)}`);
      } else if (option === 3) {
        const deltaFlux = parseFloat(await promptInput("Введите изменение магнитного потока: "));
        const emf = parseFloat(await promptInput("Введите ЭДС индукции: "));
        console.log(`Промежуток времени = ${calcs.calc_time_emf(deltaFlux, emf)}`);
      }
      break;
    }

    case enumTypes.EMF_MOVING_CONDUCTOR: {
      if (option === 1) {
        const B = parseFloat(await promptInput("Введите вектор индукции: "));
        const l = parseFloat(await promptInput("Введите длину проводника: "));
        const v = parseFloat(await promptInput("Введите скорость: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`ЭДС = ${calcs.calc_emf_moving_conductor(B, l, v, alpha)}`);
      } else if (option === 2) {
        const emf = parseFloat(await promptInput("Введите ЭДС: "));
        const l = parseFloat(await promptInput("Введите длину проводника: "));
        const v = parseFloat(await promptInput("Введите скорость: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Вектор магнитной индукции = ${calcs.calc_magnetic_induction_moving_conductor(emf, l, v, alpha)}`);
      } else if (option === 3) {
        const emf = parseFloat(await promptInput("Введите ЭДС: "));
        const B = parseFloat(await promptInput("Введите вектор индукции: "));
        const v = parseFloat(await promptInput("Введите скорость: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Длина проводника = ${calcs.calc_length_moving_conductor(emf, B, v, alpha)}`);
      } else if (option === 4) {
        const emf = parseFloat(await promptInput("Введите ЭДС: "));
        const B = parseFloat(await promptInput("Введите вектор индукции: "));
        const l = parseFloat(await promptInput("Введите длину проводника: "));
        const alpha = parseFloat(await promptInput("Введите угол (в радианах): "));
        console.log(`Скорость = ${calcs.calc_velocity_moving_conductor(emf, B, l, alpha)}`);
      }
      break;
    }

    case enumTypes.EMF_SELF_INDUCTION: {
      if (option === 1) {
        const L = parseFloat(await promptInput("Введите коэффициент самоиндукции: "));
        const deltaI = parseFloat(await promptInput("Введите изменение силы тока: "));
        const time = parseFloat(await promptInput("Введите промежуток времени: "));
        console.log(`ЭДС самоиндукции = ${calcs.calc_emf_self_induction(L, deltaI, time)}`);
      } else if (option === 2) {
        const emf = parseFloat(await promptInput("Введите ЭДС самоиндукции: "));
        const deltaI = parseFloat(await promptInput("Введите изменение силы тока: "));
        const time = parseFloat(await promptInput("Введите промежуток времени: "));
        console.log(`Коэффициент самоиндукции = ${calcs.calc_inductance_self_induction(emf, deltaI, time)}`);
      } else if (option === 3) {
        const emf = parseFloat(await promptInput("Введите ЭДС самоиндукции: "));
        const L = parseFloat(await promptInput("Введите коэффициент самоиндукции: "));
        const time = parseFloat(await promptInput("Введите промежуток времени: "));
        console.log(`Изменение силы тока = ${calcs.calc_delta_current_self_induction(emf, L, time)}`);
      } else if (option === 4) {
        const emf = parseFloat(await promptInput("Введите ЭДС самоиндукции: "));
        const L = parseFloat(await promptInput("Введите коэффициент самоиндукции: "));
        const deltaI = parseFloat(await promptInput("Введите изменение силы тока: "));
        console.log(`Промежуток времени = ${calcs.calc_time_self_induction(emf, L, deltaI)}`);
      }
      break;
    }

    case enumTypes.COIL_MAGNETIC_FIELD_ENERGY: {
      if (option === 1) {
        const L = parseFloat(await promptInput("Введите индуктивность катушки: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        console.log(`Энергия = ${calcs.calc_coil_magnetic_field_energy(L, I)}`);
      } else if (option === 2) {
        const energy = parseFloat(await promptInput("Введите энергию: "));
        const I = parseFloat(await promptInput("Введите силу тока: "));
        console.log(`Индуктивность катушки = ${calcs.calc_inductance_coil_energy(energy, I)}`);
      } else if (option === 3) {
        const energy = parseFloat(await promptInput("Введите энергию: "));
        const L = parseFloat(await promptInput("Введите индуктивность катушки: "));
        console.log(`Сила тока = ${calcs.calc_current_coil_energy(energy, L)}`);
      }
      break;
    }

    case enumTypes.OSCILLATING_CIRCUIT_PERIOD: {
      if (option === 1) {
        const L = parseFloat(await promptInput("Введите индуктивность: "));
        const C = parseFloat(await promptInput("Введите электроёмкость: "));
        console.log(`Период = ${calcs.calc_oscillating_circuit_period(L, C)}`);
      } else if (option === 2) {
        const T = parseFloat(await promptInput("Введите период: "));
        const C = parseFloat(await promptInput("Введите электроёмкость: "));
        console.log(`Индуктивность = ${calcs.calc_inductance_oscillating_circuit(T, C)}`);
      } else if (option === 3) {
        const T = parseFloat(await promptInput("Введите период: "));
        const L = parseFloat(await promptInput("Введите индуктивность: "));
        console.log(`Электроёмкость = ${calcs.calc_capacitance_oscillating_circuit(T, L)}`);
      }
      break;
    }

    case enumTypes.INDUCTIVE_RESISTANCE: {
      if (option === 1) {
        const f = parseFloat(await promptInput("Введите частоту: "));
        const L = parseFloat(await promptInput("Введите индуктивность: "));
        console.log(`Индуктивное сопротивление = ${calcs.calc_inductive_resistance(f, L)}`);
      } else if (option === 2) {
        const R = parseFloat(await promptInput("Введите сопротивление: "));
        const L = parseFloat(await promptInput("Введите индуктивность: "));
        console.log(`Частота = ${calcs.calc_frequency_inductive_resistance(R, L)}`);
      } else if (option === 3) {
        const R = parseFloat(await promptInput("Введите сопротивление: "));
        const f = parseFloat(await promptInput("Введите частоту: "));
        console.log(`Индуктивность = ${calcs.calc_inductance_from_resistance(R, f)}`);
      }
      break;
    }

    case enumTypes.CAPACITIVE_RESISTANCE: {
      if (option === 1) {
        const C = parseFloat(await promptInput("Введите электроёмкость: "));
        const omega = parseFloat(await promptInput("Введите угловую частоту: "));
        console.log(`Емкостное сопротивление = ${calcs.calc_capacitive_resistance(C, omega)}`);
      } else if (option === 2) {
        const R = parseFloat(await promptInput("Введите сопротивление: "));
        const omega = parseFloat(await promptInput("Введите угловую частоту: "));
        console.log(`Электроёмкость = ${calcs.calc_capacitance_from_capacitive_resistance(R, omega)}`);
      } else if (option === 3) {
        const R = parseFloat(await promptInput("Введите сопротивление: "));
        const C = parseFloat(await promptInput("Введите электроёмкость: "));
        console.log(`Угловая частота = ${calcs.calc_angular_frequency_from_capacitive_resistance(R, C)}`);
      }
      break;
    }

    case enumTypes.ACTUAL_CURRENT_VALUE: {
      if (option === 1) {
        const Imax = parseFloat(await promptInput("Введите максимальную силу тока: "));
        console.log(`Эффективная сила тока = ${calcs.calc_actual_current_value(Imax)}`);
      } else if (option === 2) {
        const Iactual = parseFloat(await promptInput("Введите эффективную силу тока: "));
        console.log(`Максимальная сила тока = ${calcs.calc_max_current_from_actual(Iactual)}`);
      }
      break;
    }

    case enumTypes.ACTUAL_VOLTAGE_VALUE: {
      if (option === 1) {
        const Vmax = parseFloat(await promptInput("Введите максимальное напряжение: "));
        console.log(`Эффективное напряжение = ${calcs.calc_actual_voltage_value(Vmax)}`);
      } else if (option === 2) {
        const Vactual = parseFloat(await promptInput("Введите эффективное напряжение: "));
        console.log(`Максимальное напряжение = ${calcs.calc_max_voltage_from_actual(Vactual)}`);
      }
      break;
    }

    case enumTypes.TOTAL_RESISTANCE: {
      if (option === 1) {
        const R = parseFloat(await promptInput("Введите активное сопротивление: "));
        const XL = parseFloat(await promptInput("Введите индуктивное сопротивление: "));
        const XC = parseFloat(await promptInput("Введите емкостное сопротивление: "));
        console.log(`Полное сопротивление = ${calcs.calc_total_resistance(R, XL, XC)}`);
      } else if (option === 2) {
        const Z = parseFloat(await promptInput("Введите полное сопротивление: "));
        const R = parseFloat(await promptInput("Введите активное сопротивление: "));
        const XL = parseFloat(await promptInput("Введите индуктивное сопротивление: "));
        console.log(`Емкостное сопротивление = ${calcs.calc_capacitive_resistance_from_total(Z, R, XL)}`);
      } else if (option === 3) {
        const Z = parseFloat(await promptInput("Введите полное сопротивление: "));
        const R = parseFloat(await promptInput("Введите активное сопротивление: "));
        const XC = parseFloat(await promptInput("Введите емкостное сопротивление: "));
        console.log(`Индуктивное сопротивление = ${calcs.calc_inductive_resistance_from_total(Z, R, XC)}`);
      } else if (option === 4) {
        const Z = parseFloat(await promptInput("Введите полное сопротивление: "));
        const XL = parseFloat(await promptInput("Введите индуктивное сопротивление: "));
        const XC = parseFloat(await promptInput("Введите емкостное сопротивление: "));
        console.log(`Активное сопротивление = ${calcs.calc_active_resistance_from_total(Z, XL, XC)}`);
      }
      break;
    }
  }
}