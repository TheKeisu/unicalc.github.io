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

export function solve_lim_sin_over_x(dummy) {
  const result=calc.calc_lim_sin_over_x(dummy);
  return standard("Первый замечательный предел", "lim sinx/x=1", [["dummy","Ненулевой параметр"]], [dummy], result);
}

export function solve_lim_one_minus_cos(dummy) {
  const result=calc.calc_lim_one_minus_cos(dummy);
  return standard("Второй замечательный предел", "lim(1−cosx)/x²=1/2", [["dummy","Параметр"]], [dummy], result);
}

export function solve_lim_exp_minus1(dummy) {
  const result=calc.calc_lim_exp_minus1(dummy);
  return standard("Экспоненциальный предел", "lim(eˣ−1)/x=1", [["dummy","Параметр"]], [dummy], result);
}

export function solve_lim_ln1px(dummy) {
  const result=calc.calc_lim_ln1px(dummy);
  return standard("Логарифмический предел", "lim ln(1+x)/x=1", [["dummy","Параметр"]], [dummy], result);
}

export function solve_lim_power_zero(n) {
  const result=calc.calc_lim_power_zero(n);
  return standard("Степенной предел", "lim xⁿ=0", [["n","n>0"]], [n], result);
}

export function solve_lim_geometric(q) {
  const result=calc.calc_lim_geometric(q);
  return standard("Предел qⁿ", "lim qⁿ=0", [["q","q"]], [q], result);
}

export function solve_lim_rational_at(a, b, x0) {
  const result=calc.calc_lim_rational_at(a, b, x0);
  return standard("Предел непрерывной линейной функции", "lim(ax+b)=ax₀+b", [["a","a"],["b","b"],["x0","x₀"]], [a, b, x0], result);
}
