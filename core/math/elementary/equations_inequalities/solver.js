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

export function solve_linear_ineq_bound(a, b) {
  const result=calc.calc_linear_ineq_bound(a, b);
  return standard("Линейное неравенство", "ax+b>0", [["a","Коэффициент a"],["b","Свободный член b"]], [a, b], result);
}

export function solve_abs_distance(x, a) {
  const result=calc.calc_abs_distance(x, a);
  return standard("Модуль числа", "|x−a|", [["x","x"],["a","a"]], [x, a], result);
}

export function solve_abs_interval(a, r) {
  const result=calc.calc_abs_le_radius(a, r);
  return standard("Неравенство |x−a|≤r", "a−r ≤ x ≤ a+r", [["a","Центр a"],["r","Радиус r"]], [a, r], result);
}

export function solve_exp_equation(base, value) {
  const result=calc.calc_exp_equation(base, value);
  return standard("Показательное уравнение", "x=logₐb", [["base","Основание a"],["value","Правая часть b"]], [base, value], result);
}

export function solve_log_equation(base, value) {
  const result=calc.calc_log_equation(base, value);
  return standard("Логарифмическое уравнение", "x=aᵇ", [["base","Основание a"],["value","Правая часть b"]], [base, value], result);
}

export function solve_sqrt_equation(a) {
  const result=calc.calc_sqrt_equation(a);
  return standard("Иррациональное уравнение √x=a", "x=a², a≥0", [["a","Правая часть a"]], [a], result);
}

export function solve_linear_root(a, b) {
  const result=calc.calc_reciprocal_equation(a, b);
  return standard("Дробно-линейное уравнение", "ax+b=0", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_sin_eq(value) {
  const result=calc.calc_sin_eq(value);
  return standard("sin x = a", "x₀=arcsin a", [["value","a"]], [value], result);
}

export function solve_cos_eq(value) {
  const result=calc.calc_cos_eq(value);
  return standard("cos x = a", "x₀=arccos a", [["value","a"]], [value], result);
}

export function solve_tan_eq(value) {
  const result=calc.calc_tan_eq(value);
  return standard("tg x = a", "x₀=arctg a", [["value","a"]], [value], result);
}
