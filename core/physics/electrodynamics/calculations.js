import { CONSTANTS } from './consts.js';

// Закон Кулона
export const calc_coulombs_law = (electric_charge_1, electric_charge_2, distance) =>
  CONSTANTS.coulombs * ((electric_charge_1 * electric_charge_2) / Math.pow(distance, 2));

export const calc_electric_charge_1_coulombs_law = (force, electric_charge_2, distance) =>
  (force * Math.pow(distance, 2)) / (CONSTANTS.coulombs * electric_charge_2);

export const calc_electric_charge_2_coulombs_law = (force, electric_charge_1, distance) =>
  (force * Math.pow(distance, 2)) / (CONSTANTS.coulombs * electric_charge_1);

export const calc_distance_coulombs_law = (force, electric_charge_1, electric_charge_2) =>
  Math.sqrt((CONSTANTS.coulombs * electric_charge_1 * electric_charge_2) / force);

// Напряженность эл. поля
export const calc_el_field_intensity = (force, electric_charge) => force / electric_charge;
export const calc_force_el_field_intensity = (density, electric_charge) => density * electric_charge;
export const calc_electric_charge_el_field_intensity = (force, density) => density * force;

// Напряженность эл. поля точечного заряда
export const calc_point_charge_el_field_intensity = (electric_charge, distance) =>
  (CONSTANTS.coulombs * electric_charge) / Math.pow(distance, 2);

export const calc_electric_charge_point_charge_el_field_intensity = (intensity, distance) =>
  (intensity * Math.pow(distance, 2)) / CONSTANTS.coulombs;

export const calc_distance_charge_point_charge_el_field_intensity = (intensity, electric_charge) =>
  Math.sqrt((CONSTANTS.coulombs * electric_charge) / intensity);

// Поверхностная плотность зарядов
export const calc_surface_charge_density = (electric_charge, area) => electric_charge / area;
export const calc_electric_charge_surface_charge_density = (density, area) => density * area;
export const calc_area_surface_charge_density = (density, electric_charge) => density * electric_charge;

// Напряженность эл. поля бесконечной плоскости
export const calc_infinity_surface_el_field_intensity = (density) => 2 * Math.PI * CONSTANTS.coulombs * density;
export const calc_density_infinity_surface_el_field_intensity = (intensity) => intensity / (2 * Math.PI * CONSTANTS.coulombs);

// Диэлектрическая проницаемость
export const calc_dielectric_constant = (intensity_1, intensity_2) => intensity_1 / intensity_2;
export const calc_intensity_1_dielectric_constant = (dielectric_constant, intensity_2) => dielectric_constant * intensity_2;
export const calc_intensity_2_dielectric_constant = (dielectric_constant, intensity_1) => dielectric_constant * intensity_1;

// Потенциальная энергия взаимодействия зарядов
export const calc_potential_energy = (electric_charge_1, electric_charge_2, distance) =>
  CONSTANTS.coulombs * ((electric_charge_1 * electric_charge_2) / distance);

export const calc_electric_charge_1_potential_energy = (force, electric_charge_2, distance) =>
  (force * distance) / (CONSTANTS.coulombs * electric_charge_2);

export const calc_electric_charge_2_potential_energy = (force, electric_charge_1, distance) =>
  (force * distance) / (CONSTANTS.coulombs * electric_charge_1);

export const calc_distance_potential_energy = (force, electric_charge_1, electric_charge_2) =>
  (CONSTANTS.coulombs * electric_charge_1 * electric_charge_2) / force;

// Потенциал
export const calc_potential = (potential_energy, electric_charge) => potential_energy / electric_charge;
export const calc_potential_energy_potential = (potential, electric_charge) => potential * electric_charge;
export const calc_electric_charge_potential = (potential, potential_energy) => potential_energy / potential;

// Потенциал точечного заряда
export const calc_point_charge_potential = (electric_charge, distance) => (CONSTANTS.coulombs * electric_charge) / distance;
export const calc_electric_charge_point_charge_potential = (potential, distance) => (potential * distance) / CONSTANTS.coulombs;
export const calc_distance_point_charge_potential = (potential, electric_charge) => (CONSTANTS.coulombs * electric_charge) / potential;

// Напряжение
export const calc_voltage = (work, electric_charge) => work / electric_charge;
export const calc_work_voltage = (voltage, electric_charge) => voltage * electric_charge;
export const calc_electric_charge_voltage = (voltage, work) => work / voltage;

// Электрическое поле и напряжение
export const calc_el_field_voltage = (intensity, distance) => intensity * distance;
export const calc_intensity_el_field_voltage = (voltage, distance) => voltage / distance;
export const calc_distance_el_field_voltage = (voltage, intensity) => voltage / intensity;

// Электроёмкость (общая)
export const calc_el_capacity = (electric_charge, voltage) => electric_charge / voltage;
export const calc_charge_el_capacity = (capacity, voltage) => capacity * voltage;
export const calc_voltage_el_capacity = (capacity, electric_charge) => electric_charge / capacity;

// Ёмкость плоского конденсатора
export const calc_flat_capacitor_capacity = (area, relative_perm, distance) =>
  (CONSTANTS.epsilon_0 * relative_perm * area) / distance;

export const calc_area_flat_capacitor_capacity = (capacity, relative_perm, distance) =>
  (capacity * distance) / (CONSTANTS.epsilon_0 * relative_perm);

export const calc_relative_perm_flat_capacitor_capacity = (capacity, area, distance) =>
  (capacity * distance) / (CONSTANTS.epsilon_0 * area);

export const calc_distance_flat_capacitor_capacity = (capacity, area, relative_perm) =>
  (CONSTANTS.epsilon_0 * relative_perm * area) / capacity;

// Ток
export const calc_current = (charge, time) => charge / time;
export const calc_charge_current = (current, time) => current * time;
export const calc_time_current = (charge, current) => charge / current;

// Сопротивление проводника
export const calc_conductor_resistance = (resistivity, length, area) => (resistivity * length) / area;
export const calc_resistivity_conductor = (resistance, length, area) => (resistance * area) / length;
export const calc_length_conductor = (resistance, resistivity, area) => (resistance * area) / resistivity;
export const calc_area_conductor = (resistivity, length, resistance) => (resistivity * length) / resistance;

// Закон Ома для участка цепи
export const calc_section_current = (voltage, resistance) => voltage / resistance;
export const calc_section_voltage = (current, resistance) => current * resistance;
export const calc_section_resistance = (voltage, current) => voltage / current;

// Мощность электрического тока
export const calc_el_current_power = (current, voltage) => current * voltage;
export const calc_current_el_current_power = (power, voltage) => power / voltage;
export const calc_voltage_el_current_power = (power, current) => power / current;

// Закон Джоуля-Ленца
export const calc_joule_lenz_heat = (current, resistance, time) => Math.pow(current, 2) * resistance * time;
export const calc_current_joule_lenz = (heat, resistance, time) => Math.sqrt(heat / (resistance * time));
export const calc_resistance_joule_lenz = (heat, current, time) => heat / (Math.pow(current, 2) * time);
export const calc_time_joule_lenz = (heat, current, resistance) => heat / (Math.pow(current, 2) * resistance);

// Закон Ома для полной цепи
export const calc_full_circuit_current = (emf, external_resistance, internal_resistance) => emf / (external_resistance + internal_resistance);
export const calc_emf_full_circuit = (current, external_resistance, internal_resistance) => current * (external_resistance + internal_resistance);
export const calc_external_resistance_full_circuit = (emf, current, internal_resistance) => (emf / current) - internal_resistance;
export const calc_internal_resistance_full_circuit = (emf, current, external_resistance) => (emf / current) - external_resistance;

// Короткозамкнутый ток
export const calc_short_circuit_current = (emf, internal_resistance) => emf / internal_resistance;
export const calc_emf_short_circuit = (current, internal_resistance) => current * internal_resistance;
export const calc_internal_resistance_short_circuit = (emf, current) => emf / current;

// Вектор магнитной индукции
export const calc_magnetic_induction_vector = (force_max, length, current) => force_max / (current * length);
export const calc_force_max_magnetic_induction = (B, length, current) => B * current * length;
export const calc_length_magnetic_induction = (force_max, B, current) => force_max / (B * current);
export const calc_current_magnetic_induction = (force_max, B, length) => force_max / (B * length);

// Сила Ампера
export const calc_amperes_force = (current, length, magnetic_induction, angle) => current * length * magnetic_induction * Math.sin(angle);
export const calc_current_amperes_force = (force, length, magnetic_induction, angle) => force / (length * magnetic_induction * Math.sin(angle));
export const calc_length_amperes_force = (force, current, magnetic_induction, angle) => force / (current * magnetic_induction * Math.sin(angle));
export const calc_magnetic_induction_amperes_force = (force, current, length, angle) => force / (current * length * Math.sin(angle));

// Сила Лоренца
export const calc_lorentz_force = (charge, velocity, magnetic_induction, angle) => charge * velocity * magnetic_induction * Math.sin(angle);
export const calc_charge_lorentz_force = (force, velocity, magnetic_induction, angle) => force / (velocity * magnetic_induction * Math.sin(angle));
export const calc_velocity_lorentz_force = (force, charge, magnetic_induction, angle) => force / (charge * magnetic_induction * Math.sin(angle));
export const calc_magnetic_induction_lorentz_force = (force, charge, velocity, angle) => force / (charge * velocity * Math.sin(angle));

// Магнитный поток
export const calc_magnetic_flux = (magnetic_induction, area, angle) => magnetic_induction * area * Math.sin(angle);
export const calc_magnetic_induction_flux = (flux, area, angle) => flux / (area * Math.sin(angle));
export const calc_area_magnetic_flux = (flux, magnetic_induction, angle) => flux / (magnetic_induction * Math.sin(angle));
export const calc_sin_alpha_magnetic_flux = (flux, magnetic_induction, area) => flux / (magnetic_induction * area);

// Электромагнитная индукция
export const calc_emf_induction = (delta_flux, time) => -delta_flux / time;
export const calc_delta_flux_emf = (emf, time) => -emf * time;
export const calc_time_emf = (delta_flux, emf) => -delta_flux / emf;

// ЭДС в движущемся проводнике
export const calc_emf_moving_conductor = (magnetic_induction, length, velocity, angle) => magnetic_induction * length * velocity * Math.sin(angle);
export const calc_magnetic_induction_moving_conductor = (emf, length, velocity, angle) => emf / (length * velocity * Math.sin(angle));
export const calc_length_moving_conductor = (emf, magnetic_induction, velocity, angle) => emf / (magnetic_induction * velocity * Math.sin(angle));
export const calc_velocity_moving_conductor = (emf, magnetic_induction, length, angle) => emf / (magnetic_induction * length * Math.sin(angle));

// Самоиндукция
export const calc_emf_self_induction = (inductance, delta_current, time) => -inductance * (delta_current / time);
export const calc_inductance_self_induction = (emf, delta_current, time) => (-emf * time) / delta_current;
export const calc_delta_current_self_induction = (emf, inductance, time) => (-emf * time) / inductance;
export const calc_time_self_induction = (emf, inductance, delta_current) => (-emf * delta_current) / inductance;

// Энергия магнитного поля катушки
export const calc_coil_magnetic_field_energy = (inductance, current) => 0.5 * inductance * Math.pow(current, 2);
export const calc_inductance_coil_energy = (energy, current) => (2 * energy) / Math.pow(current, 2);
export const calc_current_coil_energy = (energy, inductance) => Math.sqrt((2 * energy) / inductance);

// Период колебательного контура
export const calc_oscillating_circuit_period = (inductance, capacitance) => 2 * Math.PI * Math.sqrt(inductance * capacitance);
export const calc_inductance_oscillating_circuit = (period, capacitance) => Math.pow(period / (2 * Math.PI), 2) / capacitance;
export const calc_capacitance_oscillating_circuit = (period, inductance) => Math.pow(period / (2 * Math.PI), 2) / inductance;

// Индуктивное сопротивление
export const calc_inductive_resistance = (frequency, inductance) => 2 * Math.PI * frequency * inductance;
export const calc_frequency_inductive_resistance = (resistance, inductance) => resistance / (2 * Math.PI * inductance);
export const calc_inductance_from_resistance = (resistance, frequency) => resistance / (2 * Math.PI * frequency);

// Ёмкостное сопротивление
export const calc_capacitive_resistance = (capacitance, angular_frequency) => 1 / (angular_frequency * capacitance);
export const calc_capacitance_from_capacitive_resistance = (resistance, angular_frequency) => 1 / (angular_frequency * resistance);
export const calc_angular_frequency_from_capacitive_resistance = (resistance, capacitance) => 1 / (resistance * capacitance);

// Действующие значения тока и напряжения
export const calc_actual_current_value = (max_current) => max_current / Math.SQRT2;
export const calc_max_current_from_actual = (actual_current) => actual_current * Math.SQRT2;
export const calc_actual_voltage_value = (max_voltage) => max_voltage / Math.SQRT2;
export const calc_max_voltage_from_actual = (actual_voltage) => actual_voltage * Math.SQRT2;

// Полное сопротивление
export const calc_total_resistance = (active_resistance, inductive_resistance, capacitive_resistance) =>
  Math.sqrt(Math.pow(active_resistance, 2) + Math.pow(inductive_resistance - capacitive_resistance, 2));

export const calc_capacitive_resistance_from_total = (total_resistance, active_resistance, inductive_resistance) => {
  const diff = Math.sqrt(Math.max(Math.pow(total_resistance, 2) - Math.pow(active_resistance, 2), 0));
  return inductive_resistance - diff;
};

export const calc_inductive_resistance_from_total = (total_resistance, active_resistance, capacitive_resistance) => {
  const diff = Math.sqrt(Math.max(Math.pow(total_resistance, 2) - Math.pow(active_resistance, 2), 0));
  return capacitive_resistance + diff;
};

export const calc_active_resistance_from_total = (total_resistance, inductive_resistance, capacitive_resistance) =>
  Math.sqrt(Math.max(Math.pow(total_resistance, 2) - Math.pow(inductive_resistance - capacitive_resistance, 2), 0));