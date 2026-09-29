import readline from 'readline';
import { Formula } from '@chemistry/formula';
import * as calcs from './calculations.js';
import * as enumTypes from './enum.js';

const COMMON_OXIDATION_STATES = {
  H: 1, O: -2, F: -1, Cl: -1, Br: -1, I: -1, S: -2, N: -3, P: -3, C: 4,
  Na: 1, K: 1, Li: 1, Mg: 2, Ca: 2, Ba: 2, Al: 3, Zn: 2, Fe: 3, Cu: 2, Ag: 1, Pb: 2
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

function gcd(a, b) {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

function formatNumber(val) {
  return Number.isInteger(val) ? val.toString() : val.toFixed(6).replace(/\.?0+$/, '');
}

function buildCasePrompt(inputText, enumFormula) {
  const cases = enumTypes.get_formula_cases(enumFormula);
  if (!cases || Object.keys(cases).length === 0) return inputText;

  const formulaKey = enumTypes.get_formula_key(enumFormula);
  const formulaTitle = enumTypes.FORMULAS[formulaKey]?.title || "Формула";
  
  let lines = [`${inputText}\n${formulaTitle}:`];
  for (const [number, c] of Object.entries(cases)) {
    lines.push(`${number}. ${c.name}`);
  }
  lines.push("Номер варианта: ");
  return lines.join("\n");
}

function formulaFromIons(cationSymbol, cationCharge, anionSymbol, anionCharge) {
  let cationIndex = Math.abs(anionCharge);
  let anionIndex = Math.abs(cationCharge);

  const divisor = gcd(cationIndex, anionIndex);
  cationIndex /= divisor;
  anionIndex /= divisor;

  const cationPart = cationIndex === 1 ? cationSymbol : `${cationSymbol}${cationIndex}`;
  const anionPart = anionIndex === 1 ? anionSymbol : `${anionSymbol}${anionIndex}`;
  return `${cationPart}${anionPart}`;
}

function inferProductsFromReactants(reactants) {
  if (reactants.length !== 2) {
    throw new Error("Авто-расчёт продукта сейчас поддерживает ровно 2 реагента");
  }

  const keys0 = Object.keys(reactants[0].composition);
  const keys1 = Object.keys(reactants[1].composition);

  if (keys0.length !== 1 || keys1.length !== 1) {
    throw new Error("Авто-расчёт продукта поддерживает реагенты-элементы (например Fe и O2)");
  }

  const symbolA = keys0[0];
  const symbolB = keys1[0];

  if (symbolA === symbolB) {
    throw new Error("Реагенты должны быть разными элементами");
  }

  const chargeA = COMMON_OXIDATION_STATES[symbolA];
  const chargeB = COMMON_OXIDATION_STATES[symbolB];

  if (chargeA === undefined || chargeB === undefined) {
    throw new Error("Для одного из элементов нет правила степени окисления в текущем справочнике");
  }

  if (chargeA * chargeB >= 0) {
    throw new Error("Элементы должны иметь противоположные степени окисления для бинарного соединения");
  }

  const productFormula = chargeA > 0 
    ? formulaFromIons(symbolA, chargeA, symbolB, chargeB)
    : formulaFromIons(symbolB, chargeB, symbolA, chargeA);

  const formulaObj = new Formula(productFormula);
  return [{
    formula: productFormula,
    display_name: productFormula,
    composition: formulaObj.getElements(),
    molar_mass: formulaObj.getMass()
  }];
}

export async function runConsoleReactionEquation() {
  const countStr = await promptInput("Количество реагентов: ");
  const reactantsCount = parseInt(countStr, 10);
  if (isNaN(reactantsCount) || reactantsCount <= 0) {
    console.log("Количество веществ должно быть положительным числом");
    return;
  }

  const reactants = [];
  for (let i = 1; i <= reactantsCount; i++) {
    const raw = await promptInput(`Введите реагент ${i} (символ элемента или формулу): `);
    try {
      const fObj = new Formula(raw);
      reactants.push({
        formula: raw,
        display_name: raw,
        composition: fObj.getElements(),
        molar_mass: fObj.getMass(),
        coefficient: 1
      });
    } catch (err) {
      console.log(`Ошибка во вводе формулы: ${err.message}`);
      return;
    }
  }

  let products;
  try {
    products = inferProductsFromReactants(reactants);
  } catch (exc) {
    console.log(exc.message);
    return;
  }

  console.log("\nСобранное уравнение:");
  console.log(`${reactants.map(r => r.formula).join(" + ")} -> ${products.map(p => p.formula).join(" + ")}`);

  console.log("\nВещества и характеристики:");
  [...reactants, ...products].forEach((item, idx) => {
    console.log(`${idx + 1}. ${item.formula}, M = ${formatNumber(item.molar_mass)} г/моль`);
  });

  console.log("\nВведите количество каждого реагента, чтобы вычислить продукты.");
  const reactantAmounts = [];
  for (const item of reactants) {
    const unit = await promptInput(`Единица для ${item.formula} (1 - моль, 2 - г): `);
    const val = parseFloat(await promptInput(`Введите количество для ${item.formula}: `));
    reactantAmounts.push(unit === "1" ? val : val / item.molar_mass);
  }

  const limitingIndex = 0; // Для бинарных реакций базового уровня берется 1-й компонент или определяющий по молям
  const reactionExtent = reactantAmounts[limitingIndex] / reactants[limitingIndex].coefficient;

  console.log(`\nРезультаты реакции (по реагенту ${reactants[limitingIndex].formula}):`);
  products.forEach(p => {
    const amount = p.coefficient * reactionExtent;
    const mass = amount * p.molar_mass;
    console.log(`- ${p.formula} (продукт): n = ${formatNumber(amount)} моль, m = ${formatNumber(mass)} г`);
  });
}

export async function formulaSelection(inputText, enumFormula) {
  const promptText = buildCasePrompt(inputText, enumFormula);
  const option = parseInt(await promptInput(promptText), 10);

  switch (enumFormula) {
    case enumTypes.SUBSTANCE_AMOUNT: {
      if (option === 1) {
        const mass = parseFloat(await promptInput("Введите массу: "));
        const molarMass = parseFloat(await promptInput("Введите молярную массу: "));
        console.log(`Количество вещества = ${calcs.calc_substance_amount(mass, molarMass)} моль`);
      } else if (option === 2) {
        const amount = parseFloat(await promptInput("Введите количество вещества: "));
        const molarMass = parseFloat(await promptInput("Введите молярную массу: "));
        console.log(`Масса = ${calcs.calc_mass_substance_amount(amount, molarMass)} г`);
      }
      break;
    }

    case enumTypes.MOLAR_MASS: {
      const mass = parseFloat(await promptInput("Введите массу: "));
      const amount = parseFloat(await promptInput("Введите количество вещества: "));
      console.log(`Молярная масса = ${calcs.calc_molar_mass(mass, amount)} г/моль`);
      break;
    }

    case enumTypes.PARTICLES_COUNT: {
      if (option === 1) {
        const amount = parseFloat(await promptInput("Введите количество вещества: "));
        console.log(`Число частиц = ${calcs.calc_particles_count(amount)}`);
      } else if (option === 2) {
        const count = parseFloat(await promptInput("Введите число частиц: "));
        console.log(`Количество вещества = ${calcs.calc_substance_amount_particles_count(count)} моль`);
      }
      break;
    }

    case enumTypes.IDEAL_GAS_LAW: {
      if (option === 1) {
        const n = parseFloat(await promptInput("Введите количество вещества: "));
        const T = parseFloat(await promptInput("Введите температуру (K): "));
        const V = parseFloat(await promptInput("Введите объем (м³): "));
        console.log(`Давление = ${calcs.calc_ideal_gas_pressure(n, T, V)} Па`);
      } else if (option === 2) {
        const n = parseFloat(await promptInput("Введите количество вещества: "));
        const T = parseFloat(await promptInput("Введите температуру (K): "));
        const p = parseFloat(await promptInput("Введите давление (Па): "));
        console.log(`Объем = ${calcs.calc_ideal_gas_volume(n, T, p)} м³`);
      } else if (option === 3) {
        const p = parseFloat(await promptInput("Введите давление (Па): "));
        const V = parseFloat(await promptInput("Введите объем (м³): "));
        const T = parseFloat(await promptInput("Введите температуру (K): "));
        console.log(`Количество вещества = ${calcs.calc_ideal_gas_substance_amount(p, V, T)} моль`);
      } else if (option === 4) {
        const p = parseFloat(await promptInput("Введите давление (Па): "));
        const V = parseFloat(await promptInput("Введите объем (м³): "));
        const n = parseFloat(await promptInput("Введите количество вещества: "));
        console.log(`Температура = ${calcs.calc_ideal_gas_temperature(p, V, n)} K`);
      }
      break;
    }

    case enumTypes.REACTION_STOICHIOMETRY: {
      if (option === 1) {
        await runConsoleReactionEquation();
      }
      break;
    }

    default:
      console.log("Выбранная формула обработана стандартным путем.");
  }
}