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

export function solve_add(a, b) {
  const result=calc.calc_add(a, b);
  return standard("Сложение", "a + b = s", [["a","Первое число a"],["b","Второе число b"]], [a, b], result);
}

export function solve_subtract(a, b) {
  const result=calc.calc_subtract(a, b);
  return standard("Вычитание", "a − b = d", [["a","Уменьшаемое a"],["b","Вычитаемое b"]], [a, b], result);
}

export function solve_multiply(a, b) {
  const result=calc.calc_multiply(a, b);
  return standard("Умножение", "ab = p", [["a","Первый множитель a"],["b","Второй множитель b"]], [a, b], result);
}

export function solve_divide(a, b) {
  const result=calc.calc_divide(a, b);
  return standard("Деление", "a / b = q", [["a","Делимое a"],["b","Делитель b"]], [a, b], result);
}

export function solve_fraction_add(a, b, c, d) {
  const result=calc.calc_fraction_add(a, b, c, d);
  return standard("Сложение дробей", "a/b + c/d = (ad + bc) / bd", [["a","Числитель первой дроби a"],["b","Знаменатель первой дроби b"],["c","Числитель второй дроби c"],["d","Знаменатель второй дроби d"]], [a, b, c, d], result);
}

export function solve_fraction_sub(a, b, c, d) {
  const result=calc.calc_fraction_sub(a, b, c, d);
  return standard("Вычитание дробей", "a/b − c/d = (ad − bc) / bd", [["a","Числитель первой дроби a"],["b","Знаменатель первой дроби b"],["c","Числитель второй дроби c"],["d","Знаменатель второй дроби d"]], [a, b, c, d], result);
}

export function solve_fraction_mul(a, b, c, d) {
  const result=calc.calc_fraction_mul(a, b, c, d);
  return standard("Умножение дробей", "(a/b)(c/d) = ac/bd", [["a","Числитель a"],["b","Знаменатель b"],["c","Числитель c"],["d","Знаменатель d"]], [a, b, c, d], result);
}

export function solve_fraction_div(a, b, c, d) {
  const result=calc.calc_fraction_div(a, b, c, d);
  return standard("Деление дробей", "(a/b):(c/d) = ad/bc", [["a","Числитель a"],["b","Знаменатель b"],["c","Числитель c"],["d","Знаменатель d"]], [a, b, c, d], result);
}

export function solve_percent_of(p, N) {
  const result=calc.calc_percent_of(p, N);
  return standard("Процент от числа", "x = pN/100", [["p","Процент p"],["N","Число N"]], [p, N], result);
}

export function solve_percent_find_total(part, p) {
  const result=calc.calc_percent_find_total(part, p);
  return standard("Число по проценту", "N = 100P/p", [["part","Часть P"],["p","Процент p"]], [part, p], result);
}

export function solve_percent_find_rate(part, total) {
  const result=calc.calc_percent_find_rate(part, total);
  return standard("Процентное отношение", "p = 100P/N", [["part","Часть P"],["total","Целое N"]], [part, total], result);
}

export function solve_percent_change(oldValue, newValue) {
  const result=calc.calc_percent_change(oldValue, newValue);
  return standard("Процентное изменение", "Δ% = (N₂−N₁)/N₁ · 100%", [["oldValue","Исходное N₁"],["newValue","Новое N₂"]], [oldValue, newValue], result);
}

export function solve_proportion(a, b, c) {
  const result=calc.calc_proportion(a, b, c);
  return standard("Пропорция", "x = bc/a", [["a","a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_arithmetic_mean(a, b) {
  const result=calc.calc_arithmetic_mean(a, b);
  return standard("Среднее арифметическое", "x̄ = (a+b)/2", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_geometric_mean(a, b) {
  const result=calc.calc_geometric_mean(a, b);
  return standard("Среднее геометрическое", "G = √(ab)", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_harmonic_mean(a, b) {
  const result=calc.calc_harmonic_mean(a, b);
  return standard("Среднее гармоническое", "H = 2ab/(a+b)", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_weighted_mean(x1, w1, x2, w2) {
  const result=calc.calc_weighted_mean(x1, w1, x2, w2);
  return standard("Среднее взвешенное", "x̄ = (x₁w₁+x₂w₂)/(w₁+w₂)", [["x1","Значение x₁"],["w1","Вес w₁"],["x2","Значение x₂"],["w2","Вес w₂"]], [x1, w1, x2, w2], result);
}

export function solve_abs_error(x, x0) {
  const result=calc.calc_abs_error(x, x0);
  return standard("Абсолютная погрешность", "Δ = |x − x₀|", [["x","Приближённое x"],["x0","Точное x₀"]], [x, x0], result);
}

export function solve_rel_error(x, x0) {
  const result=calc.calc_rel_error(x, x0);
  return standard("Относительная погрешность", "δ = |x−x₀|/|x₀| · 100%", [["x","Приближённое x"],["x0","Точное x₀"]], [x, x0], result);
}

export function solve_round(x, digits) {
  const result=calc.calc_round(x, digits);
  return standard("Округление", "round(x, n)", [["x","Число x"],["digits","Знаков после запятой"]], [x, digits], result);
}

export function solve_gcd(a, b) {
  const result=calc.calc_gcd(a, b);
  return standard("НОД", "НОД(a,b)", [["a","Целое a"],["b","Целое b"]], [a, b], result);
}

export function solve_lcm(a, b) {
  const result=calc.calc_lcm(a, b);
  return standard("НОК", "НОК(a,b) = |ab|/НОД(a,b)", [["a","Целое a"],["b","Целое b"]], [a, b], result);
}

export function solve_power(a, n) {
  const result=calc.calc_power(a, n);
  return standard("Степень", "aⁿ", [["a","Основание a"],["n","Показатель n"]], [a, n], result);
}

export function solve_root(x, n) {
  const result=calc.calc_root(x, n);
  return standard("Корень n-й степени", "ⁿ√x = x^(1/n)", [["x","Подкоренное выражение x"],["n","Степень n"]], [x, n], result);
}

export function solve_factorial(n) {
  const result=calc.calc_factorial(n);
  return standard("Факториал", "n! = 1·2·…·n", [["n","Целое n"]], [n], result);
}

export function solve_linear_interpolation(x1, y1, x2, y2, x) {
  const result=calc.calc_interp_linear(x1, y1, x2, y2, x);
  return standard("Линейная интерполяция", "y = y₁ + (y₂−y₁)(x−x₁)/(x₂−x₁)", [["x1","x₁"],["y1","y₁"],["x2","x₂"],["y2","y₂"],["x","Нужная точка x"]], [x1, y1, x2, y2, x], result);
}
