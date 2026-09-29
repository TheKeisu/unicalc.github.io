import { CONSTANTS } from './consts.js';

// Кол-во вещества
export const calc_substance_amount = (mass, molar_mass) => mass / molar_mass;
export const calc_mass_substance_amount = (substance_amount, molar_mass) => substance_amount * molar_mass;
export const calc_molar_mass_substance_amount = (substance_amount, mass) => mass / substance_amount;

// Ср. кин. энергия молекул одноатомного газа
export const calc_avg_kinetic_energy = (abs_temperature) => 1.5 * CONSTANTS.boltzmann * abs_temperature;
export const calc_abs_temperature_avg_kinetic_energy = (avg_kinetic_energy) => (2 * avg_kinetic_energy) / (3 * CONSTANTS.boltzmann);

// Относительная влажность
export const calc_relative_humidity = (partial_vapor_pressure, saturated_vapor_pressure) => (partial_vapor_pressure / saturated_vapor_pressure) * 100;
export const calc_partial_vapor_pressure = (relative_humidity, saturated_vapor_pressure) => (relative_humidity / 100) * saturated_vapor_pressure;
export const calc_saturated_vapor_pressure = (relative_humidity, partial_vapor_pressure) => (partial_vapor_pressure * 100) / relative_humidity;

// Внутр. энергия идеал. одноатомного газа
export const calc_internal_energy_ideal_gas = (substance_amount, abs_temperature) => 1.5 * substance_amount * abs_temperature * CONSTANTS.R;
export const calc_substance_amount_ideal_gas = (internal_energy_ideal_gas, abs_temperature) => (2 * internal_energy_ideal_gas) / (3 * CONSTANTS.R * abs_temperature);
export const calc_abs_temperature_ideal_gas = (internal_energy_ideal_gas, substance_amount) => (2 * internal_energy_ideal_gas) / (3 * CONSTANTS.R * substance_amount);

// Работа газа
export const calc_gas_work = (pressure, volume_change) => pressure * volume_change;
export const calc_pressure_gas_work = (gas_work, volume_change) => gas_work / volume_change;
export const calc_volume_change_gas_work = (gas_work, pressure) => gas_work / pressure;

// Кол-во теплоты при нагревании
export const calc_heat_amount_heating = (heat_capacity, mass, temperature_change) => heat_capacity * mass * temperature_change;
export const calc_heat_capacity = (heat_amount, mass, temperature_change) => heat_amount / (mass * temperature_change);
export const calc_mass_heat_amount_heating = (heat_amount, heat_capacity, temperature_change) => heat_amount / (heat_capacity * temperature_change);
export const calc_temperature_change = (heat_amount, mass, heat_capacity) => heat_amount / (mass * heat_capacity);

// Кол-во теплоты при плавлении
export const calc_heat_amount_melting = (melting_point, mass) => melting_point * mass;
export const calc_melting_point = (heat_amount, mass) => heat_amount / mass;
export const calc_mass_heat_amount_melting = (heat_amount, melting_point) => heat_amount / melting_point;

// Кол-во теплоты при парообразовании
export const calc_heat_amount_vaporization = (vaporization_heat, mass) => vaporization_heat * mass;
export const calc_vaporization_heat = (heat_amount, mass) => heat_amount / mass;
export const calc_mass_heat_amount_vaporization = (heat_amount, vaporization_heat) => heat_amount / vaporization_heat;

// Кол-во теплоты при сгорании топлива
export const calc_heat_amount_combustion = (combustion_heat, mass) => combustion_heat * mass;
export const calc_combustion_heat = (heat_amount, mass) => heat_amount / mass;
export const calc_mass_heat_amount_combustion = (heat_amount, combustion_heat) => heat_amount / combustion_heat;

// КПД теплового двигателя
export const calc_cop_thermal_engine = (heat_1, heat_2) => ((heat_1 - heat_2) / heat_1) * 100;
export const calc_heat_1 = (cop, heat_2) => heat_2 / (1 - (cop / 100));
export const calc_heat_2 = (cop, heat_1) => heat_1 * (1 - (cop / 100));

// КПД идеального двигателя
export const calc_cop_ideal_engine = (temperature_1, temperature_2) => ((temperature_1 - temperature_2) / temperature_1) * 100;
export const calc_temperature_1 = (cop, temperature_2) => temperature_2 / (1 - (cop / 100));
export const calc_temperature_2 = (cop, temperature_1) => temperature_1 * (1 - (cop / 100));

// Первый закон термодинамики
export const calc_first_thermodynamics_law = (heat_amount, work) => heat_amount - work;
export const calc_heat_amount_first_thermodynamics_law = (internal_energy_change, work) => internal_energy_change + work;
export const calc_work_first_thermodynamics_law = (internal_energy_change, heat_amount) => heat_amount - internal_energy_change;