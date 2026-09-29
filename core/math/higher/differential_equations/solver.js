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

export function solve_exp_ode(y0, k, x, x0) {
  const result=calc.calc_exp_ode(y0, k, x, x0);
  return standard("y′=ky", "y=y₀eᵏ⁽ˣ⁻ˣ⁰⁾", [["y0","y₀"],["k","k"],["x","x"],["x0","x₀"]], [y0, k, x, x0], result);
}

export function solve_linear_ode(y0, a, b, x, x0) {
  const result=calc.calc_linear_ode(y0, a, b, x, x0);
  return standard("y′+ay=b", "y=b/a+(y₀−b/a)e⁻ᵃ⁽ˣ⁻ˣ⁰⁾", [["y0","y₀"],["a","a"],["b","b"],["x","x"],["x0","x₀"]], [y0, a, b, x, x0], result);
}

export function solve_logistic(K, y0, r, x, x0) {
  const result=calc.calc_logistic(K, y0, r, x, x0);
  return standard("Логистическое уравнение", "y=K/(1+Ae⁻ʳ⁽ˣ⁻ˣ⁰⁾)", [["K","K"],["y0","y₀"],["r","r"],["x","x"],["x0","x₀"]], [K, y0, r, x, x0], result);
}

export function solve_char_roots(a, b, c) {
  const result=calc.calc_char_roots(a, b, c);
  return standard("Характеристические корни", "λ₁,₂=(−b±√D)/(2a)", [["a","a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_omega(a, c) {
  const result=calc.calc_omega(a, c);
  return standard("Собственная частота", "ω=√(c/a)", [["a","a"],["c","c"]], [a, c], result);
}

export function solve_average_slope(y1, y0, dt) {
  const result=calc.calc_linear_odepart(y1, y0, dt);
  return standard("Средняя скорость изменения", "k≈(y₂−y₁)/Δx", [["y1","y₁"],["y0","y₀"],["dt","Δx"]], [y1, y0, dt], result);
}
