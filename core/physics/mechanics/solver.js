    import readline from 'readline';
import * as calcs from './calculations.js';
import * as enumTypes from './enum.js';

// Вспомогательная функция для ввода данных через CLI
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
    case enumTypes.PRESSURE: {
      if (option === 1) {
        const force = parseFloat(await promptInput("Введите силу: "));
        const area = parseFloat(await promptInput("Введите площадь: "));
        console.log(`Давление = ${calcs.calc_pressure(force, area)}`);
      } else if (option === 2) {
        const pressure = parseFloat(await promptInput("Введите давление: "));
        const area = parseFloat(await promptInput("Введите площадь: "));
        console.log(`Сила = ${calcs.calc_force_pressure(pressure, area)}`);
      } else if (option === 3) {
        const pressure = parseFloat(await promptInput("Введите давление: "));
        const force = parseFloat(await promptInput("Введите силу: "));
        console.log(`Площадь = ${calcs.calc_area_pressure(pressure, force)}`);
      }
      break;
    }

    case enumTypes.DENSITY: {
      if (option === 1) {
        const mass = parseFloat(await promptInput("Введите массу: "));
        const volume = parseFloat(await promptInput("Введите объем: "));
        console.log(`Плотность = ${calcs.calc_density(mass, volume)}`);
      } else if (option === 2) {
        const volume = parseFloat(await promptInput("Введите объем: "));
        const density = parseFloat(await promptInput("Введите плотность: "));
        console.log(`Масса = ${calcs.calc_mass_density(volume, density)}`);
      } else if (option === 3) {
        const mass = parseFloat(await promptInput("Введите массу: "));
        const density = parseFloat(await promptInput("Введите плотность: "));
        console.log(`Объем = ${calcs.calc_volume_density(mass, density)}`);
      }
      break;
    }

    case enumTypes.PRESSURE_DEPTH: {
      if (option === 1) {
        const density = parseFloat(await promptInput("Введите плотность: "));
        const height = parseFloat(await promptInput("Введите высоту: "));
        console.log(`Давление = ${calcs.calc_pressure_depth(density, height)}`);
      } else if (option === 2) {
        const pressure = parseFloat(await promptInput("Введите давление: "));
        const height = parseFloat(await promptInput("Введите высоту: "));
        console.log(`Плотность = ${calcs.calc_density_depth(pressure, height)}`);
      } else if (option === 3) {
        const density = parseFloat(await promptInput("Введите плотность: "));
        const pressure = parseFloat(await promptInput("Введите давление: "));
        console.log(`Высота = ${calcs.calc_height_depth(density, pressure)}`);
      }
      break;
    }

    case enumTypes.GRAVITY: {
      if (option === 1) {
        const mass = parseFloat(await promptInput("Введите массу: "));
        console.log(`Сила тяжести = ${calcs.calc_gravity(mass)}`);
      } else if (option === 2) {
        const gravity = parseFloat(await promptInput("Введите силу тяжести: "));
        console.log(`Масса = ${calcs.calc_mass_gravity(gravity)}`);
      }
      break;
    }

    case enumTypes.ARCHIMEDES_FORCE: {
      if (option === 1) {
        const density = parseFloat(await promptInput("Введите плотность: "));
        const volume = parseFloat(await promptInput("Введите объем: "));
        console.log(`Сила Архимеда = ${calcs.calc_archimedes_force(density, volume)}`);
      } else if (option === 2) {
        const density = parseFloat(await promptInput("Введите плотность: "));
        const archimedes_force = parseFloat(await promptInput("Введите силу Архимеда: "));
        console.log(`Объем = ${calcs.calc_volume_archimedes_force(density, archimedes_force)}`);
      } else if (option === 3) {
        const archimedes_force = parseFloat(await promptInput("Введите силу Архимеда: "));
        const volume = parseFloat(await promptInput("Введите объем: "));
        console.log(`Плотность = ${calcs.calc_density_archimedes_force(archimedes_force, volume)}`);
      }
      break;
    }

    case enumTypes.ACCELERATED_MOTION: {
      if (option === 1) {
        const initial_speed = parseFloat(await promptInput("Введите начальную скорость: "));
        const acceleration = parseFloat(await promptInput("Введите ускорение: "));
        const time = parseFloat(await promptInput("Введите время: "));
        console.log(`Скорость = ${calcs.calc_accelerated_motion(initial_speed, acceleration, time)}`);
      } else if (option === 2) {
        const accelerated_motion = parseFloat(await promptInput("Введите скорость: "));
        const acceleration = parseFloat(await promptInput("Введите ускорение: "));
        const time = parseFloat(await promptInput("Введите время: "));
        console.log(`Начальная скорость = ${calcs.calc_initial_speed(accelerated_motion, acceleration, time)}`);
      } else if (option === 3) {
        const initial_speed = parseFloat(await promptInput("Введите начальную скорость: "));
        const accelerated_motion = parseFloat(await promptInput("Введите скорость: "));
        const time = parseFloat(await promptInput("Введите время: "));
        console.log(`Ускорение = ${calcs.calc_acceleration_accelerated_motion(initial_speed, accelerated_motion, time)}`);
      } else if (option === 4) {
        const accelerated_motion = parseFloat(await promptInput("Введите скорость: "));
        const initial_speed = parseFloat(await promptInput("Введите начальную скорость: "));
        const acceleration = parseFloat(await promptInput("Введите ускорение: "));
        console.log(`Время = ${calcs.calc_time_accelerated_motion(accelerated_motion, acceleration, initial_speed)}`);
      }
      break;
    }

    case enumTypes.CIRCLE_SPEED: {
      if (option === 1) {
        const radius = parseFloat(await promptInput("Введите радиус: "));
        const period = parseFloat(await promptInput("Введите период: "));
        console.log(`Скорость = ${calcs.calc_circle_speed(radius, period)}`);
      } else if (option === 2) {
        const circle_speed = parseFloat(await promptInput("Введите скорость: "));
        const period = parseFloat(await promptInput("Введите период: "));
        console.log(`Радиус = ${calcs.calc_radius_circle_speed(circle_speed, period)}`);
      } else if (option === 3) {
        const circle_speed = parseFloat(await promptInput("Введите скорость: "));
        const radius = parseFloat(await promptInput("Введите радиус: "));
        console.log(`Период = ${calcs.calc_period_circle_speed(circle_speed, radius)}`);
      }
      break;
    }

    case enumTypes.CENTRIPETAL_ACCELERATION: {
      if (option === 1) {
        const speed = parseFloat(await promptInput("Введите скорость: "));
        const radius = parseFloat(await promptInput("Введите радиус: "));
        console.log(`Ускорение = ${calcs.calc_centripetal_acceleration(speed, radius)}`);
      } else if (option === 2) {
        const centripetal_acceleration = parseFloat(await promptInput("Введите ускорение: "));
        const radius = parseFloat(await promptInput("Введите радиус: "));
        console.log(`Скорость = ${calcs.calc_speed_centripetal_acceleration(centripetal_acceleration, radius)}`);
      } else if (option === 3) {
        const speed = parseFloat(await promptInput("Введите скорость: "));
        const centripetal_acceleration = parseFloat(await promptInput("Введите ускорение: "));
        console.log(`Радиус = ${calcs.calc_radius_centripetal_acceleration(speed, centripetal_acceleration)}`);
      }
      break;
    }

    case enumTypes.NEWTONS_SECOND_LAW: {
      if (option === 1) {
        const mass = parseFloat(await promptInput("Введите массу: "));
        const acceleration = parseFloat(await promptInput("Введите ускорение: "));
        console.log(`Сила = ${calcs.calc_force_newtons_second_law(mass, acceleration)}`);
      } else if (option === 2) {
        const force_newtons_second_law = parseFloat(await promptInput("Введите силу: "));
        const acceleration = parseFloat(await promptInput("Введите ускорение: "));
        console.log(`Масса = ${calcs.calc_mass_newtons_second_law(force_newtons_second_law, acceleration)}`);
      } else if (option === 3) {
        const force_newtons_second_law = parseFloat(await promptInput("Введите силу: "));
        const mass = parseFloat(await promptInput("Введите массу: "));
        console.log(`Ускорение = ${calcs.calc_acceleration_newtons_second_law(force_newtons_second_law, mass)}`);
      }
      break;
    }

    case enumTypes.ELASTIC_FORCE: {
      if (option === 1) {
        const spring_constant = parseFloat(await promptInput("Введите коэффициент жесткости материала: "));
        const displacement = parseFloat(await promptInput("Введите величину деформации: "));
        console.log(`Сила упругости = ${calcs.calc_elastic_force(spring_constant, displacement)}`);
      } else if (option === 2) {
        const elastic_force = parseFloat(await promptInput("Введите силу упругости: "));
        const displacement = parseFloat(await promptInput("Введите величину деформации: "));
        console.log(`Коэффициент жесткости материала = ${calcs.calc_spring_constant(elastic_force, displacement)}`);
      } else if (option === 3) {
        const elastic_force = parseFloat(await promptInput("Введите силу упругости: "));
        const spring_constant = parseFloat(await promptInput("Введите коэффициент жесткости материала: "));
        console.log(`Величина деформации = ${calcs.calc_displacement_elastic_force(elastic_force, spring_constant)}`);
      }
      break;
    }

    case enumTypes.IMPULSE_BODY: {
      if (option === 1) {
        const mass = parseFloat(await promptInput("Введите массу: "));
        const speed = parseFloat(await promptInput("Введите скорость: "));
        console.log(`Импульс тела = ${calcs.calc_impulse_body(mass, speed)}`);
      } else if (option === 2) {
        const impulse = parseFloat(await promptInput("Введите импульс тела: "));
        const speed = parseFloat(await promptInput("Введите скорость: "));
        console.log(`Масса = ${calcs.calc_mass_impulse_body(impulse, speed)}`);
      } else if (option === 3) {
        const impulse = parseFloat(await promptInput("Введите импульс тела: "));
        const mass = parseFloat(await promptInput("Введите массу: "));
        console.log(`Скорость = ${calcs.calc_speed_impulse_body(impulse, mass)}`);
      }
      break;
    }

    case enumTypes.IMPULSE_FORCE: {
      if (option === 1) {
        const force = parseFloat(await promptInput("Введите силу: "));
        const time = parseFloat(await promptInput("Введите время: "));
        console.log(`Импульс силы = ${calcs.calc_impulse_force(force, time)}`);
      } else if (option === 2) {
        const impulse_force = parseFloat(await promptInput("Введите импульс силы: "));
        const time = parseFloat(await promptInput("Введите время: "));
        console.log(`Сила = ${calcs.calc_force_impulse_force(impulse_force, time)}`);
      } else if (option === 3) {
        const impulse_force = parseFloat(await promptInput("Введите импульс силы: "));
        const force = parseFloat(await promptInput("Введите силу: "));
        console.log(`Время = ${calcs.calc_time_impulse_force(impulse_force, force)}`);
      }
      break;
    }

    case enumTypes.MOMENT_OF_FORCE: {
      if (option === 1) {
        const force = parseFloat(await promptInput("Введите силу: "));
        const lever_arm = parseFloat(await promptInput("Введите плечо силы: "));
        console.log(`Момент силы = ${calcs.calc_moment_of_force(force, lever_arm)}`);
      } else if (option === 2) {
        const moment_of_force = parseFloat(await promptInput("Введите момент силы: "));
        const force = parseFloat(await promptInput("Введите силу: "));
        console.log(`Плечо силы = ${calcs.calc_lever_arm_moment_of_force(force, moment_of_force)}`);
      } else if (option === 3) {
        const moment_of_force = parseFloat(await promptInput("Введите момент силы: "));
        const lever_arm = parseFloat(await promptInput("Введите плечо силы: "));
        console.log(`Сила = ${calcs.calc_force_moment_of_force(moment_of_force, lever_arm)}`);
      }
      break;
    }

    case enumTypes.RAISED_POTENTIAL_ENERGY: {
      if (option === 1) {
        const mass = parseFloat(await promptInput("Введите массу: "));
        const height = parseFloat(await promptInput("Введите высоту: "));
        console.log(`Потенциальная энергия = ${calcs.calc_raised_potential_energy(mass, height)}`);
      } else if (option === 2) {
        const raised_potential_energy = parseFloat(await promptInput("Введите потенциальную энергию: "));
        const height = parseFloat(await promptInput("Введите высоту: "));
        console.log(`Масса = ${calcs.calc_mass_raised_potential_energy(raised_potential_energy, height)}`);
      } else if (option === 3) {
        const raised_potential_energy = parseFloat(await promptInput("Введите потенциальную энергию: "));
        const mass = parseFloat(await promptInput("Введите массу: "));
        console.log(`Высота = ${calcs.calc_height_raised_potential_energy(raised_potential_energy, mass)}`);
      }
      break;
    }

    case enumTypes.DEFORMED_POTENTIAL_ENERGY: {
      if (option === 1) {
        const spring_constant = parseFloat(await promptInput("Введите коэффициент жесткости материала: "));
        const displacement = parseFloat(await promptInput("Введите величину деформации: "));
        console.log(`Потенциальная энергия = ${calcs.calc_deformed_potential_energy(spring_constant, displacement)}`);
      } else if (option === 2) {
        const deformed_potential_energy = parseFloat(await promptInput("Введите потенциальную энергию: "));
        const displacement = parseFloat(await promptInput("Введите величину деформации: "));
        console.log(`Коэффициент жесткости пружины = ${calcs.calc_spring_constant_deformed_potential_energy(deformed_potential_energy, displacement)}`);
      } else if (option === 3) {
        const deformed_potential_energy = parseFloat(await promptInput("Введите потенциальную энергию: "));
        const spring_constant = parseFloat(await promptInput("Введите коэффициент жесткости материала: "));
        console.log(`Величина деформации = ${calcs.calc_displacement_deformed_potential_energy(deformed_potential_energy, spring_constant)}`);
      }
      break;
    }

    case enumTypes.KINETIC_ENERGY: {
      if (option === 1) {
        const mass = parseFloat(await promptInput("Введите массу: "));
        const speed = parseFloat(await promptInput("Введите скорость: "));
        console.log(`Кинетическая энергия = ${calcs.calc_kinetic_energy(mass, speed)}`);
      } else if (option === 2) {
        const kinetic_energy = parseFloat(await promptInput("Введите кинетическую энергию: "));
        const speed = parseFloat(await promptInput("Введите скорость: "));
        console.log(`Масса = ${calcs.calc_mass_kinetic_energy(kinetic_energy, speed)}`);
      } else if (option === 3) {
        const kinetic_energy = parseFloat(await promptInput("Введите кинетическую энергию: "));
        const mass = parseFloat(await promptInput("Введите массу: "));
        console.log(`Скорость = ${calcs.calc_speed_kinetic_energy(kinetic_energy, mass)}`);
      }
      break;
    }

    case enumTypes.WORK: {
      if (option === 1) {
        const force = parseFloat(await promptInput("Введите силу: "));
        const distance = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Работа = ${calcs.calc_work(force, distance)}`);
      } else if (option === 2) {
        const work = parseFloat(await promptInput("Введите работу: "));
        const distance = parseFloat(await promptInput("Введите расстояние: "));
        console.log(`Сила = ${calcs.calc_force_work(work, distance)}`);
      } else if (option === 3) {
        const work = parseFloat(await promptInput("Введите работу: "));
        const force = parseFloat(await promptInput("Введите силу: "));
        console.log(`Расстояние = ${calcs.calc_distance_work(work, force)}`);
      }
      break;
    }

    case enumTypes.POWER_WT: {
      if (option === 1) {
        const work = parseFloat(await promptInput("Введите работу: "));
        const time = parseFloat(await promptInput("Введите время: "));
        console.log(`Мощность = ${calcs.calc_power_wt(work, time)}`);
      } else if (option === 2) {
        const power = parseFloat(await promptInput("Введите мощность: "));
        const time = parseFloat(await promptInput("Введите время: "));
        console.log(`Работа = ${calcs.calc_work_power_wt(power, time)}`);
      } else if (option === 3) {
        const power = parseFloat(await promptInput("Введите мощность: "));
        const work = parseFloat(await promptInput("Введите работу: "));
        console.log(`Время = ${calcs.calc_time_power_wt(power, work)}`);
      }
      break;
    }

    case enumTypes.COP: {
      if (option === 1) {
        const work_useful = parseFloat(await promptInput("Введите полезную работу: "));
        const work_total = parseFloat(await promptInput("Введите затраченную работу: "));
        console.log(`КПД = ${calcs.calc_cop(work_useful, work_total)}%`);
      } else if (option === 2) {
        const cop = parseFloat(await promptInput("Введите КПД: "));
        const work_total = parseFloat(await promptInput("Введите затраченную работу: "));
        console.log(`Полезная работа = ${calcs.calc_work_useful_cop(cop, work_total)}`);
      } else if (option === 3) {
        const cop = parseFloat(await promptInput("Введите КПД: "));
        const work_useful = parseFloat(await promptInput("Введите полезную работу: "));
        console.log(`Затраченная работа = ${calcs.calc_work_total_cop(cop, work_useful)}`);
      }
      break;
    }

    case enumTypes.PERIOD_SM: {
      if (option === 1) {
        const length = parseFloat(await promptInput("Введите длину маятника: "));
        console.log(`Период колебаний математического маятника = ${calcs.calc_period_sm(length)}`);
      } else if (option === 2) {
        const period_sm = parseFloat(await promptInput("Введите период: "));
        console.log(`Длина маятника = ${calcs.calc_length_period_sm(period_sm)}`);
      }
      break;
    }

    case enumTypes.PERIOD_SP: {
      if (option === 1) {
        const mass = parseFloat(await promptInput("Введите массу: "));
        const spring_constant = parseFloat(await promptInput("Введите коэффициент жесткости: "));
        console.log(`Период колебаний пружинного маятника = ${calcs.calc_period_sp(mass, spring_constant)}`);
      } else if (option === 2) {
        const period_sp = parseFloat(await promptInput("Введите период: "));
        const spring_constant = parseFloat(await promptInput("Введите коэффициент жесткости: "));
        console.log(`Масса = ${calcs.calc_mass_period_sp(period_sp, spring_constant)}`);
      } else if (option === 3) {
        const period_sp = parseFloat(await promptInput("Введите период: "));
        const mass = parseFloat(await promptInput("Введите массу: "));
        console.log(`Коэффициент жесткости = ${calcs.calc_spring_constant_period_sp(period_sp, mass)}`);
      }
      break;
    }

    case enumTypes.HARMONIC_OSCILLATION: {
      if (option === 1) {
        const amplitude = parseFloat(await promptInput("Введите амплитуду колебаний: "));
        const frequency = parseFloat(await promptInput("Введите частоту колебаний: "));
        const time = parseFloat(await promptInput("Введите время: "));
        console.log(`Положение тела = ${calcs.calc_harmonic_oscillation(amplitude, frequency, time)}`);
      } else if (option === 2) {
        const harmonic_oscillation = parseFloat(await promptInput("Введите положение тела: "));
        const frequency = parseFloat(await promptInput("Введите частоту колебаний: "));
        const time = parseFloat(await promptInput("Введите время: "));
        console.log(`Амплитуда колебаний = ${calcs.calc_amplitude_harmonic_oscillation(harmonic_oscillation, frequency, time)}`);
      } else if (option === 3) {
        const harmonic_oscillation = parseFloat(await promptInput("Введите положение тела: "));
        const amplitude = parseFloat(await promptInput("Введите амплитуду колебаний: "));
        console.log(`Косинус = ${calcs.calc_cos_harmonic_oscillation(harmonic_oscillation, amplitude)}`);
      }
      break;
    }

    case enumTypes.WAVE_LENGTH: {
      if (option === 1) {
        const speed = parseFloat(await promptInput("Введите скорость: "));
        const period = parseFloat(await promptInput("Введите период: "));
        console.log(`Длина волны = ${calcs.calc_wave_length(speed, period)}`);
      } else if (option === 2) {
        const wave_length = parseFloat(await promptInput("Введите длину волны: "));
        const period = parseFloat(await promptInput("Введите период: "));
        console.log(`Скорость = ${calcs.calc_speed_wave_length(wave_length, period)}`);
      } else if (option === 3) {
        const wave_length = parseFloat(await promptInput("Введите длину волны: "));
        const speed = parseFloat(await promptInput("Введите скорость: "));
        console.log(`Период = ${calcs.calc_period_wave_length(wave_length, speed)}`);
      }
      break;
    }

    case enumTypes.FRICTIONAL_FORCE: {
      if (option === 1) {
        const normal_force = parseFloat(await promptInput("Введите силу реакции опоры: "));
        const friction_coefficient = parseFloat(await promptInput("Введите коэффициент трения: "));
        console.log(`Сила трения = ${calcs.calc_frictional_force(normal_force, friction_coefficient)}`);
      } else if (option === 2) {
        const frictional_force = parseFloat(await promptInput("Введите силу трения: "));
        const normal_force = parseFloat(await promptInput("Введите силу реакции опоры: "));
        console.log(`Коэффициент трения = ${calcs.calc_friction_coefficient_frictional_force(frictional_force, normal_force)}`);
      } else if (option === 3) {
        const frictional_force = parseFloat(await promptInput("Введите силу трения: "));
        const friction_coefficient = parseFloat(await promptInput("Введите коэффициент трения: "));
        console.log(`Сила реакции опоры = ${calcs.calc_normal_force_frictional_force(frictional_force, friction_coefficient)}`);
      }
      break;
    }
  }
}