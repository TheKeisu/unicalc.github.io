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

export function solve_geom_sum(a, q) {
  const result=calc.calc_geom_sum(a, q);
  return standard("Геометрический ряд", "S=a/(1−q)", [["a","a₁"],["q","q"]], [a, q], result);
}

export function solve_geom_remainder(a, q, n) {
  const result=calc.calc_geom_remainder(a, q, n);
  return standard("Остаток геометрического ряда", "|Rₙ|≤|a||q|ⁿ/(1−|q|)", [["a","a₁"],["q","q"],["n","n"]], [a, q, n], result);
}

export function solve_p_series(p) {
  const result=calc.calc_p_series_convergence(p);
  return standard("p-ряд", "Σ1/nᵖ", [["p","p"]], [p], result);
}

export function solve_ratio_test(L) {
  const result=calc.calc_ratio_test(L);
  return standard("Признак Даламбера", "L<1 — сходится, L>1 — расходится", [["L","L"]], [L], result);
}

export function solve_taylor_term(deriv, dx, n) {
  const result=calc.calc_taylor_term(deriv, dx, n);
  return standard("Член ряда Тейлора", "Tₙ=f⁽ⁿ⁾(x₀)hⁿ/n!", [["deriv","f⁽ⁿ⁾(x₀)"],["dx","h"],["n","n"]], [deriv, dx, n], result);
}

export function solve_maclaurin_exp(x, n) {
  const result=calc.calc_maclaurin_exp_term(x, n);
  return standard("Член ряда eˣ", "Tₙ=xⁿ/n!", [["x","x"],["n","n"]], [x, n], result);
}

export function solve_maclaurin_sin(x, n) {
  const result=calc.calc_maclaurin_sin_term(x, n);
  return standard("Член ряда sin x", "Tₖ=(−1)ᵏx²ᵏ⁺¹/(2k+1)!", [["x","x"],["n","Чётный индекс n=2k"]], [x, n], result);
}

export function solve_maclaurin_cos(x, n) {
  const result=calc.calc_maclaurin_cos_term(x, n);
  return standard("Член ряда cos x", "Tₖ=(−1)ᵏx²ᵏ/(2k)!", [["x","x"],["n","Чётный индекс n=2k"]], [x, n], result);
}

export function solve_alternating_error(nextTerm) {
  const result=calc.calc_alternating_error(nextTerm);
  return standard("Оценка по Лейбницу", "|Rₙ|≤|aₙ₊₁|", [["nextTerm","Следующий член"]], [nextTerm], result);
}

export function solve_fourier_an(L, integral) {
  const result=calc.calc_fourier_an(L, integral);
  return standard("Коэффициент Фурье aₙ", "aₙ=(1/L)∫f(x)cos(nx)dx", [["L","Полупериод L"],["integral","Значение интеграла"]], [L, integral], result);
}

export function solve_fourier_bn(L, integral) {
  const result=calc.calc_fourier_bn(L, integral);
  return standard("Коэффициент Фурье bₙ", "bₙ=(1/L)∫f(x)sin(nx)dx", [["L","Полупериод L"],["integral","Значение интеграла"]], [L, integral], result);
}
