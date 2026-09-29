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
    case enumTypes.REFRACTION_LAW: {
      if (option === 1) {
        const n2 = parseFloat(await promptInput("Введите n2: "));
        const n1 = parseFloat(await promptInput("Введите n1: "));
        console.log(`n21 = ${calcs.calc_n21_from_n2_n1(n2, n1)}`);
      } else if (option === 2) {
        const n21 = parseFloat(await promptInput("Введите n21: "));
        const n1 = parseFloat(await promptInput("Введите n1: "));
        console.log(`n2 = ${calcs.calc_n2_from_n21_n1(n21, n1)}`);
      } else if (option === 3) {
        const n2 = parseFloat(await promptInput("Введите n2: "));
        const n21 = parseFloat(await promptInput("Введите n21: "));
        console.log(`n1 = ${calcs.calc_n1_from_n2_n21(n2, n21)}`);
      } else if (option === 4) {
        const v1 = parseFloat(await promptInput("Введите v1: "));
        const v2 = parseFloat(await promptInput("Введите v2: "));
        console.log(`n21 = ${calcs.calc_n21_from_v1_v2(v1, v2)}`);
      } else if (option === 5) {
        const n21 = parseFloat(await promptInput("Введите n21: "));
        const v2 = parseFloat(await promptInput("Введите v2: "));
        console.log(`v1 = ${calcs.calc_v1_from_n21_v2(n21, v2)}`);
      } else {
        console.log("Неверный вариант.");
      }
      break;
    }

    case enumTypes.REFRACTIVE_INDEX: {
      if (option === 1) {
        const sinAlpha = parseFloat(await promptInput("Введите sin(alpha): "));
        const sinGamma = parseFloat(await promptInput("Введите sin(gamma): "));
        console.log(`n21 = ${calcs.calc_n21_from_sin_alpha_sin_gamma(sinAlpha, sinGamma)}`);
      } else if (option === 2) {
        const n21 = parseFloat(await promptInput("Введите n21: "));
        const sinGamma = parseFloat(await promptInput("Введите sin(gamma): "));
        console.log(`sin(alpha) = ${calcs.calc_sin_alpha_from_n21_sin_gamma(n21, sinGamma)}`);
      } else if (option === 3) {
        const sinAlpha = parseFloat(await promptInput("Введите sin(alpha): "));
        const n21 = parseFloat(await promptInput("Введите n21: "));
        console.log(`sin(gamma) = ${calcs.calc_sin_gamma_from_sin_alpha_n21(sinAlpha, n21)}`);
      } else {
        console.log("Неверный вариант.");
      }
      break;
    }

    case enumTypes.THIN_LENS: {
      if (option === 1) {
        const d = parseFloat(await promptInput("Введите d (предметное расстояние): "));
        const f = parseFloat(await promptInput("Введите f (изображение): "));
        console.log(`F = ${calcs.calc_F_from_d_f(d, f)}`);
      } else if (option === 2) {
        const F = parseFloat(await promptInput("Введите F (фокусное расстояние): "));
        const f = parseFloat(await promptInput("Введите f (изображение): "));
        console.log(`d = ${calcs.calc_d_from_F_f(F, f)}`);
      } else if (option === 3) {
        const F = parseFloat(await promptInput("Введите F (фокусное расстояние): "));
        const d = parseFloat(await promptInput("Введите d (предметное расстояние): "));
        console.log(`f = ${calcs.calc_f_from_F_d(F, d)}`);
      } else {
        console.log("Неверный вариант.");
      }
      break;
    }

    case enumTypes.OPTICAL_POWER: {
      if (option === 1) {
        const F = parseFloat(await promptInput("Введите F (фокусное расстояние): "));
        console.log(`D = ${calcs.calc_D_from_F(F)}`);
      } else if (option === 2) {
        const D = parseFloat(await promptInput("Введите D (оптическая сила): "));
        console.log(`F = ${calcs.calc_F_from_D(D)}`);
      } else {
        console.log("Неверный вариант.");
      }
      break;
    }

    case enumTypes.INTERFERENCE: {
      if (option === 1) {
        const k = parseFloat(await promptInput("Введите k (порядок): "));
        const lam = parseFloat(await promptInput("Введите λ (длина волны): "));
        console.log(`Δd = ${calcs.calc_delta_from_k_lambda(k, lam)}`);
      } else if (option === 2) {
        const k = parseFloat(await promptInput("Введите k (порядок): "));
        const lam = parseFloat(await promptInput("Введите λ (длина волны): "));
        console.log(`Δd (min) = ${calcs.calc_delta_min_from_k_lambda(k, lam)}`);
      } else if (option === 3) {
        const delta = parseFloat(await promptInput("Введите Δd: "));
        const lam = parseFloat(await promptInput("Введите λ (длина волны): "));
        console.log(`k = ${calcs.calc_k_from_delta_lambda(delta, lam)}`);
      } else if (option === 4) {
        const delta = parseFloat(await promptInput("Введите Δd (min или max в зависимости от формулы): "));
        const lam = parseFloat(await promptInput("Введите λ (длина волны): "));
        console.log(`k (min formula, float) = ${calcs.calc_k_from_delta_min_lambda(delta, lam)}`);
      } else if (option === 5) {
        const delta = parseFloat(await promptInput("Введите Δd: "));
        const k = parseFloat(await promptInput("Введите k (порядок): "));
        console.log(`λ (max) = ${calcs.calc_lambda_from_delta_k(delta, k)}`);
      } else {
        console.log("Неверный вариант.");
      }
      break;
    }

    case enumTypes.DIFFRACTION_GRATING: {
      if (option === 1) {
        const k = parseFloat(await promptInput("Введите k (порядок): "));
        const lam = parseFloat(await promptInput("Введите λ (длина волны): "));
        const phi = parseFloat(await promptInput("Введите φ (в радианах): "));
        console.log(`d = ${calcs.calc_d_from_k_lambda_phi(k, lam, phi)}`);
      } else if (option === 2) {
        const k = parseFloat(await promptInput("Введите k (порядок): "));
        const lam = parseFloat(await promptInput("Введите λ (длина волны): "));
        const d = parseFloat(await promptInput("Введите d (шаг решетки): "));
        console.log(`φ (в радианах) = ${calcs.calc_phi_from_k_lambda_d(k, lam, d)}`);
      } else if (option === 3) {
        const d = parseFloat(await promptInput("Введите d (шаг решетки): "));
        const lam = parseFloat(await promptInput("Введите λ (длина волны): "));
        const phi = parseFloat(await promptInput("Введите φ (в радианах): "));
        console.log(`k = ${calcs.calc_k_from_d_lambda_phi(d, lam, phi)}`);
      } else if (option === 4) {
        const d = parseFloat(await promptInput("Введите d (шаг решетки): "));
        const phi = parseFloat(await promptInput("Введите φ (в радианах): "));
        const k = parseFloat(await promptInput("Введите k (порядок): "));
        console.log(`λ = ${calcs.calc_lambda_from_d_phi_k(d, phi, k)}`);
      } else {
        console.log("Неверный вариант.");
      }
      break;
    }

    default:
      console.log("Неверная формула.");
  }
}