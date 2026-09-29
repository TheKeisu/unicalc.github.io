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

export function solve_square_sum(a, b) {
  const result=calc.calc_square_sum(a, b);
  return standard("Квадрат суммы", "(a+b)² = a²+2ab+b²", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_square_diff(a, b) {
  const result=calc.calc_square_diff(a, b);
  return standard("Квадрат разности", "(a−b)² = a²−2ab+b²", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_difference_squares(a, b) {
  const result=calc.calc_diff_squares(a, b);
  return standard("Разность квадратов", "a²−b²=(a−b)(a+b)", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_cube_sum(a, b) {
  const result=calc.calc_cube_sum(a, b);
  return standard("Куб суммы", "(a+b)³=a³+3a²b+3ab²+b³", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_cube_diff(a, b) {
  const result=calc.calc_cube_diff(a, b);
  return standard("Куб разности", "(a−b)³=a³−3a²b+3ab²−b³", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_sum_cubes(a, b) {
  const result=calc.calc_sum_cubes(a, b);
  return standard("Сумма кубов", "a³+b³=(a+b)(a²−ab+b²)", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_difference_cubes(a, b) {
  const result=calc.calc_diff_cubes(a, b);
  return standard("Разность кубов", "a³−b³=(a−b)(a²+ab+b²)", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_linear_root(a, b) {
  const result=calc.calc_linear_root(a, b);
  return standard("Линейное уравнение", "x=−b/a", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_discriminant(a, b, c) {
  const result=calc.calc_discriminant(a, b, c);
  return standard("Дискриминант", "D=b²−4ac", [["a","a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_quadratic_roots(a, b, c) {
  const result=calc.calc_quadratic_roots(a, b, c);
  return standard("Квадратное уравнение", "x₁,₂=(−b±√D)/(2a)", [["a","a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_vieta_sum(a, b) {
  const result=calc.calc_vieta_sum(a, b);
  return standard("Теорема Виета — сумма", "x₁+x₂=−b/a", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_vieta_product(a, c) {
  const result=calc.calc_vieta_product(a, c);
  return standard("Теорема Виета — произведение", "x₁x₂=c/a", [["a","a"],["c","c"]], [a, c], result);
}

export function solve_cramer_x(a1, b1, c1, a2, b2, c2) {
  const result=calc.calc_cramer_x(a1, b1, c1, a2, b2, c2);
  return standard("Система 2×2 — метод Крамера", "D=a₁b₂−a₂b₁", [["a1","a₁"],["b1","b₁"],["c1","c₁"],["a2","a₂"],["b2","b₂"],["c2","c₂"]], [a1, b1, c1, a2, b2, c2], result);
}

export function solve_cramer_y(a1, b1, c1, a2, b2, c2) {
  const result=calc.calc_cramer_y(a1, b1, c1, a2, b2, c2);
  return standard("Система 2×2 — метод Крамера", "D=a₁b₂−a₂b₁", [["a1","a₁"],["b1","b₁"],["c1","c₁"],["a2","a₂"],["b2","b₂"],["c2","c₂"]], [a1, b1, c1, a2, b2, c2], result);
}

export function solve_power_product(a, m, n) {
  const result=calc.calc_power_product(a, m, n);
  return standard("Произведение степеней", "aᵐaⁿ=aᵐ⁺ⁿ", [["a","a"],["m","m"],["n","n"]], [a, m, n], result);
}

export function solve_power_quotient(a, m, n) {
  const result=calc.calc_power_quotient(a, m, n);
  return standard("Частное степеней", "aᵐ/aⁿ=aᵐ⁻ⁿ", [["a","a"],["m","m"],["n","n"]], [a, m, n], result);
}

export function solve_power_of_power(a, m, n) {
  const result=calc.calc_power_of_power(a, m, n);
  return standard("Степень степени", "(aᵐ)ⁿ=aᵐⁿ", [["a","a"],["m","m"],["n","n"]], [a, m, n], result);
}

export function solve_root_product(a, b) {
  const result=calc.calc_root_product(a, b);
  return standard("Произведение корней", "√a√b=√(ab)", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_root_quotient(a, b) {
  const result=calc.calc_root_quotient(a, b);
  return standard("Частное корней", "√a/√b=√(a/b)", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_log(base, x) {
  const result=calc.calc_log(base, x);
  return standard("Логарифм", "logₐx=ln x/ln a", [["base","Основание a"],["x","Аргумент x"]], [base, x], result);
}

export function solve_ln(x) {
  const result=calc.calc_ln(x);
  return standard("Натуральный логарифм", "ln x", [["x","Аргумент x"]], [x], result);
}

export function solve_exp(x) {
  const result=calc.calc_exp(x);
  return standard("Показательная функция", "eˣ", [["x","x"]], [x], result);
}

export function solve_log_base_change(x, newBase) {
  const result=calc.calc_log_base_change(x, newBase);
  return standard("Переход к основанию", "log_b x=ln x/ln b", [["x","Аргумент x"],["newBase","Новое основание b"]], [x, newBase], result);
}

export function solve_binomial_term(n, k, a, b) {
  const result=calc.calc_binomial_term(n, k, a, b);
  return standard("Член бинома Ньютона", "Tₖ=C(n,k)aⁿ⁻ᵏbᵏ", [["n","n"],["k","k"],["a","a"],["b","b"]], [n, k, a, b], result);
}
