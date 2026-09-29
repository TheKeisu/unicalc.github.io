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
    case enumTypes.SUBSTANCE_AMOUNT: {
      if (option === 1) {
        const mass = parseFloat(await promptInput("Введите массу вещества: "));
        const molarMass = parseFloat(await promptInput("Введите молярную массу: "));
        console.log(`Кол-во вещества = ${calcs.calc_substance_amount(mass, molarMass)}`);
      } else if (option === 2) {
        const substanceAmount = parseFloat(await promptInput("Введите кол-во вещества: "));
        const molarMass = parseFloat(await promptInput("Введите молярную массу: "));
        console.log(`Масса = ${calcs.calc_mass_substance_amount(substanceAmount, molarMass)}`);
      } else if (option === 3) {
        const substanceAmount = parseFloat(await promptInput("Введите кол-во вещества: "));
        const mass = parseFloat(await promptInput("Введите массу вещества: "));
        console.log(`Молярная масса = ${calcs.calc_molar_mass_substance_amount(substanceAmount, mass)}`);
      }
      break;
    }

    case enumTypes.AVG_KINETIC_ENERGY: {
      if (option === 1) {
        const absTemperature = parseFloat(await promptInput("Введите абсолютную температуру: "));
        console.log(`Ср. кинетическая энергия = ${calcs.calc_avg_kinetic_energy(absTemperature)}`);
      } else if (option === 2) {
        const avgKineticEnergy = parseFloat(await promptInput("Введите ср. кинетическую энергию: "));
        console.log(`Абсолютная температура = ${calcs.calc_abs_temperature_avg_kinetic_energy(avgKineticEnergy)}`);
      }
      break;
    }

    case enumTypes.RELATIVE_HUMIDITY: {
      if (option === 1) {
        const partialVaporPressure = parseFloat(await promptInput("Введите парциальное давление водяного пара: "));
        const saturatedVaporPressure = parseFloat(await promptInput("Введите давление насыщенного пара: "));
        console.log(`Относительная влажность = ${calcs.calc_relative_humidity(partialVaporPressure, saturatedVaporPressure)}%`);
      } else if (option === 2) {
        const relativeHumidity = parseFloat(await promptInput("Введите относительную влажность: "));
        const saturatedVaporPressure = parseFloat(await promptInput("Введите давление насыщенного пара: "));
        console.log(`Парциальное давление водяного пара = ${calcs.calc_partial_vapor_pressure(relativeHumidity, saturatedVaporPressure)}`);
      } else if (option === 3) {
        const relativeHumidity = parseFloat(await promptInput("Введите относительную влажность: "));
        const partialVaporPressure = parseFloat(await promptInput("Введите парциальное давление водяного пара: "));
        console.log(`Давление насыщенного пара = ${calcs.calc_saturated_vapor_pressure(relativeHumidity, partialVaporPressure)}`);
      }
      break;
    }

    case enumTypes.INTERNAL_ENERGY_IDEAL_GAS: {
      if (option === 1) {
        const substanceAmount = parseFloat(await promptInput("Введите кол-во вещества: "));
        const absTemperature = parseFloat(await promptInput("Введите абсолютную температуру: "));
        console.log(`Внутренняя энергия идеального одноатомного газа = ${calcs.calc_internal_energy_ideal_gas(substanceAmount, absTemperature)}`);
      } else if (option === 2) {
        const internalEnergy = parseFloat(await promptInput("Введите внутреннюю энергию идеального одноатомного газа: "));
        const absTemperature = parseFloat(await promptInput("Введите абсолютную температуру: "));
        console.log(`Кол-во вещества = ${calcs.calc_substance_amount_ideal_gas(internalEnergy, absTemperature)}`);
      } else if (option === 3) {
        const internalEnergy = parseFloat(await promptInput("Введите внутреннюю энергию идеального одноатомного газа: "));
        const substanceAmount = parseFloat(await promptInput("Введите кол-во вещества: "));
        console.log(`Абсолютная температура = ${calcs.calc_abs_temperature_ideal_gas(internalEnergy, substanceAmount)}`);
      }
      break;
    }

    case enumTypes.GAS_WORK: {
      if (option === 1) {
        const pressure = parseFloat(await promptInput("Введите давление: "));
        const volumeChange = parseFloat(await promptInput("Введите изменение объёма: "));
        console.log(`Работа газа = ${calcs.calc_gas_work(pressure, volumeChange)}`);
      } else if (option === 2) {
        const gasWork = parseFloat(await promptInput("Введите работу газа: "));
        const volumeChange = parseFloat(await promptInput("Введите изменение объёма: "));
        console.log(`Давление = ${calcs.calc_pressure_gas_work(gasWork, volumeChange)}`);
      } else if (option === 3) {
        const gasWork = parseFloat(await promptInput("Введите работу газа: "));
        const pressure = parseFloat(await promptInput("Введите давление: "));
        console.log(`Изменение объёма = ${calcs.calc_volume_change_gas_work(gasWork, pressure)}`);
      }
      break;
    }

    case enumTypes.HEAT_AMOUNT_HEATING: {
      if (option === 1) {
        const heatCapacity = parseFloat(await promptInput("Введите удельную теплоемкость: "));
        const mass = parseFloat(await promptInput("Введите массу вещества: "));
        const tempChange = parseFloat(await promptInput("Введите изменение температуры: "));
        console.log(`Кол-во теплоты при нагревании = ${calcs.calc_heat_amount_heating(heatCapacity, mass, tempChange)}`);
      } else if (option === 2) {
        const heatAmount = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const mass = parseFloat(await promptInput("Введите массу вещества: "));
        const tempChange = parseFloat(await promptInput("Введите изменение температуры: "));
        console.log(`Удельная теплоемкость = ${calcs.calc_heat_capacity(heatAmount, mass, tempChange)}`);
      } else if (option === 3) {
        const heatAmount = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const heatCapacity = parseFloat(await promptInput("Введите удельную теплоемкость: "));
        const tempChange = parseFloat(await promptInput("Введите изменение температуры: "));
        console.log(`Масса = ${calcs.calc_mass_heat_amount_heating(heatAmount, heatCapacity, tempChange)}`);
      } else if (option === 4) {
        const heatAmount = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const mass = parseFloat(await promptInput("Введите массу вещества: "));
        const heatCapacity = parseFloat(await promptInput("Введите удельную теплоемкость: "));
        console.log(`Изменение температуры = ${calcs.calc_temperature_change(heatAmount, mass, heatCapacity)}`);
      }
      break;
    }

    case enumTypes.HEAT_AMOUNT_MELTING: {
      if (option === 1) {
        const meltingPoint = parseFloat(await promptInput("Введите удельную теплоту плавления: "));
        const mass = parseFloat(await promptInput("Введите массу вещества: "));
        console.log(`Кол-во теплоты при плавлении = ${calcs.calc_heat_amount_melting(meltingPoint, mass)}`);
      } else if (option === 2) {
        const heatAmount = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const mass = parseFloat(await promptInput("Введите массу вещества: "));
        console.log(`Удельная теплота плавления = ${calcs.calc_melting_point(heatAmount, mass)}`);
      } else if (option === 3) {
        const heatAmount = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const meltingPoint = parseFloat(await promptInput("Введите удельную теплоту плавления: "));
        console.log(`Масса = ${calcs.calc_mass_heat_amount_melting(heatAmount, meltingPoint)}`);
      }
      break;
    }

    case enumTypes.HEAT_AMOUNT_VAPORIZATION: {
      if (option === 1) {
        const vaporizationHeat = parseFloat(await promptInput("Введите удельную теплоту парообразования: "));
        const mass = parseFloat(await promptInput("Введите массу вещества: "));
        console.log(`Кол-во теплоты при парообразовании = ${calcs.calc_heat_amount_vaporization(vaporizationHeat, mass)}`);
      } else if (option === 2) {
        const heatAmount = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const mass = parseFloat(await promptInput("Введите массу вещества: "));
        console.log(`Удельная теплота парообразования = ${calcs.calc_vaporization_heat(heatAmount, mass)}`);
      } else if (option === 3) {
        const heatAmount = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const vaporizationHeat = parseFloat(await promptInput("Введите удельную теплоту парообразования: "));
        console.log(`Масса = ${calcs.calc_mass_heat_amount_vaporization(heatAmount, vaporizationHeat)}`);
      }
      break;
    }

    case enumTypes.HEAT_AMOUNT_COMBUSTION: {
      if (option === 1) {
        const combustionHeat = parseFloat(await promptInput("Введите удельную теплоту сгорания топлива: "));
        const mass = parseFloat(await promptInput("Введите массу вещества: "));
        console.log(`Кол-во теплоты при сгорании топлива = ${calcs.calc_heat_amount_combustion(combustionHeat, mass)}`);
      } else if (option === 2) {
        const heatAmount = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const mass = parseFloat(await promptInput("Введите массу вещества: "));
        console.log(`Удельная теплота сгорания топлива = ${calcs.calc_combustion_heat(heatAmount, mass)}`);
      } else if (option === 3) {
        const heatAmount = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const combustionHeat = parseFloat(await promptInput("Введите удельную теплоту сгорания топлива: "));
        console.log(`Масса = ${calcs.calc_mass_heat_amount_combustion(heatAmount, combustionHeat)}`);
      }
      break;
    }

    case enumTypes.COP_THERMAL_ENGINE: {
      if (option === 1) {
        const heat1 = parseFloat(await promptInput("Введите теплоту №1: "));
        const heat2 = parseFloat(await promptInput("Введите теплоту №2: "));
        console.log(`КПД теплового двигателя = ${calcs.calc_cop_thermal_engine(heat1, heat2)}%`);
      } else if (option === 2) {
        const cop = parseFloat(await promptInput("Введите КПД: "));
        const heat2 = parseFloat(await promptInput("Введите теплоту №2: "));
        console.log(`Теплота №1 = ${calcs.calc_heat_1(cop, heat2)}`);
      } else if (option === 3) {
        const cop = parseFloat(await promptInput("Введите КПД: "));
        const heat1 = parseFloat(await promptInput("Введите теплоту №1: "));
        console.log(`Теплота №2 = ${calcs.calc_heat_2(cop, heat1)}`);
      }
      break;
    }

    case enumTypes.COP_IDEAL_ENGINE: {
      if (option === 1) {
        const temp1 = parseFloat(await promptInput("Введите температуру №1: "));
        const temp2 = parseFloat(await promptInput("Введите температуру №2: "));
        console.log(`КПД идеального двигателя = ${calcs.calc_cop_ideal_engine(temp1, temp2)}%`);
      } else if (option === 2) {
        const cop = parseFloat(await promptInput("Введите КПД: "));
        const temp2 = parseFloat(await promptInput("Введите температуру №2: "));
        console.log(`Температура №1 = ${calcs.calc_temperature_1(cop, temp2)}`);
      } else if (option === 3) {
        const cop = parseFloat(await promptInput("Введите КПД: "));
        const temp1 = parseFloat(await promptInput("Введите температуру №1: "));
        console.log(`Температура №2 = ${calcs.calc_temperature_2(cop, temp1)}`);
      }
      break;
    }

    case enumTypes.FIRST_THERMODYNAMICS_LAW: {
      if (option === 1) {
        const heatAmount = parseFloat(await promptInput("Введите кол-во теплоты: "));
        const work = parseFloat(await promptInput("Введите работу: "));
        console.log(`Изменение внутренней энергии = ${calcs.calc_first_thermodynamics_law(heatAmount, work)}`);
      } else if (option === 2) {
        const internalEnergyChange = parseFloat(await promptInput("Введите изменение внутренней энергии: "));
        const work = parseFloat(await promptInput("Введите работу: "));
        console.log(`Кол-во теплоты = ${calcs.calc_heat_amount_first_thermodynamics_law(internalEnergyChange, work)}`);
      } else if (option === 3) {
        const internalEnergyChange = parseFloat(await promptInput("Введите изменение внутренней энергии: "));
        const heatAmount = parseFloat(await promptInput("Введите кол-во теплоты: "));
        console.log(`Работа = ${calcs.calc_work_first_thermodynamics_law(internalEnergyChange, heatAmount)}`);
      } else {
        console.log("Неверный вариант.");
      }
      break;
    }

    default:
      console.log("Неверный параметр формулы.");
  }
}