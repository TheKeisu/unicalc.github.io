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

export function solve_ap_n(a1, d, n) {
  const result=calc.calc_ap_n(a1, d, n);
  return standard("Арифметическая прогрессия — n-й член", "aₙ=a₁+(n−1)d", [["a1","a₁"],["d","d"],["n","n"]], [a1, d, n], result);
}

export function solve_ap_sum(a1, d, n) {
  const result=calc.calc_ap_sum(a1, d, n);
  return standard("Арифметическая прогрессия — сумма", "Sₙ=n(2a₁+(n−1)d)/2", [["a1","a₁"],["d","d"],["n","n"]], [a1, d, n], result);
}

export function solve_ap_d(a1, an, n) {
  const result=calc.calc_ap_d(a1, an, n);
  return standard("Разность арифметической прогрессии", "d=(aₙ−a₁)/(n−1)", [["a1","aₙ? Первый член a₁"],["an","n-й член aₙ"],["n","Номер n"]], [a1, an, n], result);
}

export function solve_gp_n(b1, q, n) {
  const result=calc.calc_gp_n(b1, q, n);
  return standard("Геометрическая прогрессия — n-й член", "bₙ=b₁qⁿ⁻¹", [["b1","b₁"],["q","q"],["n","n"]], [b1, q, n], result);
}

export function solve_gp_sum(b1, q, n) {
  const result=calc.calc_gp_sum(b1, q, n);
  return standard("Геометрическая прогрессия — сумма", "Sₙ=b₁(qⁿ−1)/(q−1)", [["b1","b₁"],["q","q"],["n","n"]], [b1, q, n], result);
}

export function solve_gp_infinite(b1, q) {
  const result=calc.calc_gp_infinite(b1, q);
  return standard("Бесконечная геометрическая прогрессия", "S=b₁/(1−q)", [["b1","b₁"],["q","q"]], [b1, q], result);
}

export function solve_gp_q(b1, bn, n) {
  const result=calc.calc_gp_q(b1, bn, n);
  return standard("Знаменатель прогрессии", "q=(bₙ/b₁)^(1/(n−1))", [["b1","b₁"],["bn","bₙ"],["n","n"]], [b1, bn, n], result);
}

export function solve_compound_interest(P, r, n, t) {
  const result=calc.calc_compound_interest(P, r, n, t);
  return standard("Сложные проценты", "A=P(1+r/n)^(nt)", [["P","Начальная сумма P"],["r","Ставка r (доля)"],["n","Начислений в год n"],["t","Время t"]], [P, r, n, t], result);
}

export function solve_continuous_interest(P, r, t) {
  const result=calc.calc_continuous_interest(P, r, t);
  return standard("Непрерывное начисление", "A=Pe^(rt)", [["P","P"],["r","r"],["t","t"]], [P, r, t], result);
}

export function solve_harmonic_term(a1, d, n) {
  const result=calc.calc_harmonic_term(a1, d, n);
  return standard("Гармоническая последовательность", "aₙ=1/(1/a₁+(n−1)d)", [["a1","a₁"],["d","d"],["n","n"]], [a1, d, n], result);
}
