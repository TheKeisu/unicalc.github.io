import { CONSTANTS } from './consts.js';

// Давление
export const calc_pressure = (force, area) => force / area;
export const calc_force_pressure = (pressure, area) => pressure * area;
export const calc_area_pressure = (pressure, force) => force / pressure;

// Плотность
export const calc_density = (mass, volume) => mass / volume;
export const calc_volume_density = (mass, density) => mass / density;
export const calc_mass_density = (volume, density) => volume * density;

// Давление на глубине
export const calc_pressure_depth = (density, height) => density * height * CONSTANTS.gn;
export const calc_density_depth = (pressure, height) => pressure / (height * CONSTANTS.gn);
export const calc_height_depth = (density, pressure) => pressure / (density * CONSTANTS.gn);

// Сила тяжести
export const calc_gravity = (mass) => mass * CONSTANTS.gn;
export const calc_mass_gravity = (gravity) => gravity / CONSTANTS.gn;

// Сила Архимеда
export const calc_archimedes_force = (density, volume) => density * volume * CONSTANTS.gn;
export const calc_density_archimedes_force = (archimedes_force, volume) => archimedes_force / (volume * CONSTANTS.gn);
export const calc_volume_archimedes_force = (density, archimedes_force) => archimedes_force / (density * CONSTANTS.gn);

// Скорость при равноускоренном движении
export const calc_accelerated_motion = (initial_speed, acceleration, time) => initial_speed + acceleration * time;
export const calc_initial_speed = (accelerated_motion, acceleration, time) => accelerated_motion - acceleration * time;
export const calc_acceleration_accelerated_motion = (initial_speed, accelerated_motion, time) => (accelerated_motion - initial_speed) / time;
export const calc_time_accelerated_motion = (accelerated_motion, acceleration, initial_speed) => (accelerated_motion - initial_speed) / acceleration;

// Скорость при движении по окружности
export const calc_circle_speed = (radius, period) => (2 * Math.PI * radius) / period;
export const calc_radius_circle_speed = (circle_speed, period) => (circle_speed * period) / (2 * Math.PI);
export const calc_period_circle_speed = (circle_speed, radius) => (2 * Math.PI * radius) / circle_speed;

// Центростремительное ускорение
export const calc_centripetal_acceleration = (speed, radius) => Math.pow(speed, 2) / radius;
export const calc_speed_centripetal_acceleration = (centripetal_acceleration, radius) => Math.sqrt(centripetal_acceleration * radius);
export const calc_radius_centripetal_acceleration = (speed, centripetal_acceleration) => Math.pow(speed, 2) / centripetal_acceleration;

// Второй закон Ньютона
export const calc_force_newtons_second_law = (mass, acceleration) => mass * acceleration;
export const calc_mass_newtons_second_law = (force_newtons_second_law, acceleration) => force_newtons_second_law / acceleration;
export const calc_acceleration_newtons_second_law = (force_newtons_second_law, mass) => force_newtons_second_law / mass;

// Сила упругости
export const calc_elastic_force = (spring_constant, displacement) => -(spring_constant * displacement);
export const calc_spring_constant = (elastic_force, displacement) => elastic_force / -displacement;
export const calc_displacement_elastic_force = (elastic_force, spring_constant) => -elastic_force / spring_constant;

// Импульс тела
export const calc_impulse_body = (mass, speed) => mass * speed;
export const calc_mass_impulse_body = (impulse_body, speed) => impulse_body / speed;
export const calc_speed_impulse_body = (impulse_body, mass) => impulse_body / mass;

// Импульс силы
export const calc_impulse_force = (force, time) => force * time;
export const calc_force_impulse_force = (impulse_force, time) => impulse_force / time;
export const calc_time_impulse_force = (impulse_force, force) => impulse_force / force;

// Момент силы
export const calc_moment_of_force = (force, lever_arm) => force * lever_arm;
export const calc_force_moment_of_force = (moment_of_force, lever_arm) => moment_of_force / lever_arm;
export const calc_lever_arm_moment_of_force = (force, moment_of_force) => moment_of_force / force;

// Потенциальная энергия тела, поднятого над землей
export const calc_raised_potential_energy = (mass, height) => mass * height * CONSTANTS.gn;
export const calc_mass_raised_potential_energy = (raised_potential_energy, height) => raised_potential_energy / (height * CONSTANTS.gn);
export const calc_height_raised_potential_energy = (raised_potential_energy, mass) => raised_potential_energy / (mass * CONSTANTS.gn);

// Потенциальная энергия упруго-деформированного тела
export const calc_deformed_potential_energy = (spring_constant, displacement) => (spring_constant * Math.pow(displacement, 2)) / 2;
export const calc_spring_constant_deformed_potential_energy = (deformed_potential_energy, displacement) => (2 * deformed_potential_energy) / Math.pow(displacement, 2);
export const calc_displacement_deformed_potential_energy = (deformed_potential_energy, spring_constant) => Math.sqrt((2 * deformed_potential_energy) / spring_constant);

// Кинетическая энергия
export const calc_kinetic_energy = (mass, speed) => (mass * Math.pow(speed, 2)) / 2;
export const calc_mass_kinetic_energy = (kinetic_energy, speed) => (2 * kinetic_energy) / Math.pow(speed, 2);
export const calc_speed_kinetic_energy = (kinetic_energy, mass) => Math.sqrt((2 * kinetic_energy) / mass);

// Работа
export const calc_work = (force, distance) => force * distance;
export const calc_force_work = (work, distance) => work / distance;
export const calc_distance_work = (work, force) => work / force;

// Мощность
export const calc_power_wt = (work, time) => work / time;
export const calc_work_power_wt = (power, time) => power * time;
export const calc_time_power_wt = (power, work) => work / power;

// КПД
export const calc_cop = (work_useful, work_total) => (work_useful / work_total) * 100;
export const calc_work_useful_cop = (cop, work_total) => (cop / 100) * work_total;
export const calc_work_total_cop = (cop, work_useful) => work_useful / (cop / 100);

// Период колебаний математического маятника
export const calc_period_sm = (length) => 2 * Math.PI * Math.sqrt(length / CONSTANTS.gn);
export const calc_length_period_sm = (period_sm) => (CONSTANTS.gn * Math.pow(period_sm, 2)) / (4 * Math.pow(Math.PI, 2));

// Период колебаний пружинного маятника
export const calc_period_sp = (mass, spring_constant) => 2 * Math.PI * Math.sqrt(mass / spring_constant);
export const calc_mass_period_sp = (period_sp, spring_constant) => (spring_constant * Math.pow(period_sp, 2)) / (4 * Math.pow(Math.PI, 2));
export const calc_spring_constant_period_sp = (period_sp, mass) => (4 * Math.pow(Math.PI, 2) * mass) / Math.pow(period_sp, 2);

// Уравнение гармонических колебаний
export const calc_harmonic_oscillation = (amplitude, frequency, time) => amplitude * Math.cos(frequency * time);
export const calc_amplitude_harmonic_oscillation = (harmonic_oscillation, frequency, time) => harmonic_oscillation / Math.cos(frequency * time);
export const calc_cos_harmonic_oscillation = (harmonic_oscillation, amplitude) => harmonic_oscillation / amplitude;

// Длина волны
export const calc_wave_length = (speed, period) => speed * period;
export const calc_speed_wave_length = (wave_length, period) => wave_length / period;
export const calc_period_wave_length = (wave_length, speed) => wave_length / speed;

// Сила трения
export const calc_frictional_force = (normal_force, friction_coefficient) => normal_force * friction_coefficient;
export const calc_normal_force_frictional_force = (frictional_force, friction_coefficient) => frictional_force / friction_coefficient;
export const calc_friction_coefficient_frictional_force = (frictional_force, normal_force) => frictional_force / normal_force;