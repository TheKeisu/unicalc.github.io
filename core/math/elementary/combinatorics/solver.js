import * as calc from './calculations.js';

function pretty(value) {
  if (Array.isArray(value)) return value.map(pretty).join(', ');
  if (value && typeof value === 'object') return Object.entries(value).map(([k,v]) => `${k}=${pretty(v)}`).join('; ');
  if (typeof value === 'number') { if (!Number.isFinite(value)) return value === Infinity ? '∞' : String(value); return Number(value.toPrecision(10)).toString(); }
  return String(value);
}

function standard(title, formula, labels, values, result) {
  const substituted = labels.map(([key,label], i) => `${label}=${pretty(values[i])}`).join('; ');
  return { summary: title, steps: [
    {title:'1. Выбираем формулу',content:formula},
    {title:'2. Подставляем данные',content:substituted},
    {title:'3. Выполняем вычисление',content:`Получаем ${pretty(result)}.`},
    {title:'4. Записываем ответ',content:`Ответ: ${pretty(result)}.`}
  ]};
}

export function solve_perm(n) {
  const result=calc.calc_perm(n);
  return standard("Перестановки", "Pₙ=n!", [["n","n"]], [n], result);
}

export function solve_arrangement(n, k) {
  const result=calc.calc_arrangement(n, k);
  return standard("Размещения", "Aₙᵏ=n!/(n−k)!", [["n","n"],["k","k"]], [n, k], result);
}

export function solve_combination(n, k) {
  const result=calc.calc_combination(n, k);
  return standard("Сочетания", "Cₙᵏ=n!/(k!(n−k)!)", [["n","n"],["k","k"]], [n, k], result);
}

export function solve_arrangement_rep(n, k) {
  const result=calc.calc_arrangement_rep(n, k);
  return standard("Размещения с повторениями", "Āₙᵏ=nᵏ", [["n","n"],["k","k"]], [n, k], result);
}

export function solve_combination_rep(n, k) {
  const result=calc.calc_combination_rep(n, k);
  return standard("Сочетания с повторениями", "C̄ₙᵏ=C(n+k−1,k)", [["n","n"],["k","k"]], [n, k], result);
}

export function solve_binomial_coefficient(n, k) {
  const result=calc.calc_binomial_coefficient(n, k);
  return standard("Биномиальный коэффициент", "Cₙᵏ=n!/(k!(n−k)!)", [["n","n"],["k","k"]], [n, k], result);
}
