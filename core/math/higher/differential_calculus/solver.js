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

export function solve_derivative_power(a, n, x) {
  const result=calc.calc_derivative_power(a, n, x);
  return standard("Производная xⁿ", "(axⁿ)′=anxⁿ⁻¹", [["a","a"],["n","n"],["x","x₀"]], [a, n, x], result);
}

export function solve_derivative_exp(a, k, x) {
  const result=calc.calc_derivative_exp(a, k, x);
  return standard("Производная ae^(kx)", "(aeᵏˣ)′=akeᵏˣ", [["a","a"],["k","k"],["x","x₀"]], [a, k, x], result);
}

export function solve_derivative_ln(a, x) {
  const result=calc.calc_derivative_ln(a, x);
  return standard("Производная a ln x", "(a ln x)′=a/x", [["a","a"],["x","x₀"]], [a, x], result);
}

export function solve_derivative_sin(a, omega, x) {
  const result=calc.calc_derivative_sin(a, omega, x);
  return standard("Производная a sin(ωx)", "(a sinωx)′=aωcosωx", [["a","a"],["omega","ω"],["x","x₀"]], [a, omega, x], result);
}

export function solve_derivative_cos(a, omega, x) {
  const result=calc.calc_derivative_cos(a, omega, x);
  return standard("Производная a cos(ωx)", "(a cosωx)′=−aωsinωx", [["a","a"],["omega","ω"],["x","x₀"]], [a, omega, x], result);
}

export function solve_derivative_tan(a, x) {
  const result=calc.calc_derivative_tan(a, x);
  return standard("Производная tan x", "(a tg x)′=a/cos²x", [["a","a"],["x","x₀"]], [a, x], result);
}

export function solve_product_rule(u, v, du, dv) {
  const result=calc.calc_product_derivative(u, v, du, dv);
  return standard("Правило произведения", "(uv)′=u′v+uv′", [["u","u"],["v","v"],["du","u′"],["dv","v′"]], [u, v, du, dv], result);
}

export function solve_quotient_rule(u, v, du, dv) {
  const result=calc.calc_quotient_derivative(u, v, du, dv);
  return standard("Правило частного", "(u/v)′=(u′v−uv′)/v²", [["u","u"],["v","v"],["du","u′"],["dv","v′"]], [u, v, du, dv], result);
}

export function solve_chain_rule(a, n, g, dg) {
  const result=calc.calc_chain_power(a, n, g, dg);
  return standard("Правило цепочки для xⁿ", "(agⁿ)′=an gⁿ⁻¹g′", [["a","a"],["n","n"],["g","g(x₀)"],["dg","g′(x₀)"]], [a, n, g, dg], result);
}

export function solve_tangent(x0, f0, df0, x) {
  const result=calc.calc_tangent(x0, f0, df0, x);
  return standard("Касательная", "y=f₀+f′₀(x−x₀)", [["x0","x₀"],["f0","f(x₀)"],["df0","f′(x₀)"],["x","x"]], [x0, f0, df0, x], result);
}

export function solve_normal(x0, f0, df0, x) {
  const result=calc.calc_normal(x0, f0, df0, x);
  return standard("Нормаль", "y=f₀−(x−x₀)/f′₀", [["x0","x₀"],["f0","f(x₀)"],["df0","f′(x₀)"],["x","x"]], [x0, f0, df0, x], result);
}

export function solve_linear_approx(f0, df0, dx) {
  const result=calc.calc_linear_approx(f0, df0, dx);
  return standard("Линейное приближение", "f(x₀+dx)≈f₀+f′₀dx", [["f0","f₀"],["df0","f′₀"],["dx","Δx"]], [f0, df0, dx], result);
}

export function solve_newton(x0, f0, df0) {
  const result=calc.calc_newton(x0, f0, df0);
  return standard("Шаг Ньютона", "x₁=x₀−f(x₀)/f′(x₀)", [["x0","x₀"],["f0","f(x₀)"],["df0","f′(x₀)"]], [x0, f0, df0], result);
}

export function solve_curvature(dy, ddy) {
  const result=calc.calc_curvature(dy, ddy);
  return standard("Кривизна графика", "κ=|y″|/(1+(y′)²)^(3/2)", [["dy","y′"],["ddy","y″"]], [dy, ddy], result);
}

export function solve_radius_curvature(dy, ddy) {
  const result=calc.calc_radius_curvature(dy, ddy);
  return standard("Радиус кривизны", "R=(1+(y′)²)^(3/2)/|y″|", [["dy","y′"],["ddy","y″"]], [dy, ddy], result);
}

export function solve_differential(df, dx) {
  const result=calc.calc_differential(df, dx);
  return standard("Дифференциал", "df=f′dx", [["df","Производная f′"],["dx","dx"]], [df, dx], result);
}

export function solve_second_derivative_power(a, n, x) {
  const result=calc.calc_second_derivative_power(a, n, x);
  return standard("Вторая производная xⁿ", "(axⁿ)″=an(n−1)xⁿ⁻²", [["a","a"],["n","n"],["x","x₀"]], [a, n, x], result);
}
