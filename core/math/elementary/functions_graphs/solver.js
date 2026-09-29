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

export function solve_line_y(k, b, x) {
  const result=calc.calc_line_y(k, b, x);
  return standard("Линейная функция", "y=kx+b", [["k","k"],["b","b"],["x","x"]], [k, b, x], result);
}

export function solve_line_slope(x1, y1, x2, y2) {
  const result=calc.calc_line_slope(x1, y1, x2, y2);
  return standard("Угловой коэффициент", "k=(y₂−y₁)/(x₂−x₁)", [["x1","x₁"],["y1","y₁"],["x2","x₂"],["y2","y₂"]], [x1, y1, x2, y2], result);
}

export function solve_line_intercept(k, x, y) {
  const result=calc.calc_line_intercept(k, x, y);
  return standard("Свободный член прямой", "b=y−kx", [["k","k"],["x","x"],["y","y"]], [k, x, y], result);
}

export function solve_quadratic_y(a, b, c, x) {
  const result=calc.calc_quadratic_y(a, b, c, x);
  return standard("Квадратичная функция", "y=ax²+bx+c", [["a","a"],["b","b"],["c","c"],["x","x"]], [a, b, c, x], result);
}

export function solve_quadratic_vertex_x(a, b) {
  const result=calc.calc_quadratic_vertex_x(a, b);
  return standard("Абсцисса вершины параболы", "xv=−b/(2a)", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_quadratic_vertex_y(a, b, c) {
  const result=calc.calc_quadratic_vertex_y(a, b, c);
  return standard("Ордината вершины параболы", "yv=c−b²/(4a)", [["a","a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_power_function(a, n, x) {
  const result=calc.calc_power_function(a, n, x);
  return standard("Степенная функция", "y=axⁿ", [["a","a"],["n","n"],["x","x"]], [a, n, x], result);
}

export function solve_reciprocal(a, b, x) {
  const result=calc.calc_reciprocal(a, b, x);
  return standard("Обратная пропорциональность", "y=a/x+b", [["a","a"],["b","b"],["x","x"]], [a, b, x], result);
}

export function solve_exp_function(a, k, x, b) {
  const result=calc.calc_exp_function(a, k, x, b);
  return standard("Показательная функция", "y=ae^(kx)+b", [["a","a"],["k","k"],["x","x"],["b","b"]], [a, k, x, b], result);
}

export function solve_log_function(a, b, x, base) {
  const result=calc.calc_log_function(a, b, x, base);
  return standard("Логарифмическая функция", "y=a log_b(x)+b₀", [["a","a"],["b","b₀"],["x","x"],["base","Основание"]], [a, b, x, base], result);
}

export function solve_sine_function(A, omega, phiDeg, d, x) {
  const result=calc.calc_sine_function(A, omega, phiDeg, d, x);
  return standard("Синусоида", "y=A sin(ωx+φ)+d", [["A","Амплитуда A"],["omega","Частота масштаба ω"],["phiDeg","Фаза φ, °"],["d","Сдвиг d"],["x","x"]], [A, omega, phiDeg, d, x], result);
}

export function solve_cosine_function(A, omega, phiDeg, d, x) {
  const result=calc.calc_cosine_function(A, omega, phiDeg, d, x);
  return standard("Косинусоида", "y=A cos(ωx+φ)+d", [["A","A"],["omega","ω"],["phiDeg","φ, °"],["d","d"],["x","x"]], [A, omega, phiDeg, d, x], result);
}

export function solve_line_intersection(k1, b1, k2, b2) {
  const result=calc.calc_linear_intersection_x(k1, b1, k2, b2);
  return standard("Пересечение двух прямых", "x=(b₂−b₁)/(k₁−k₂)", [["k1","k₁"],["b1","b₁"],["k2","k₂"],["b2","b₂"]], [k1, b1, k2, b2], result);
}
