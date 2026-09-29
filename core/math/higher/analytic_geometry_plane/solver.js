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

export function solve_distance(x1, y1, x2, y2) {
  const result=calc.calc_distance(x1, y1, x2, y2);
  return standard("Расстояние между точками", "d=√((x₂−x₁)²+(y₂−y₁)²)", [["x1","x₁"],["y1","y₁"],["x2","x₂"],["y2","y₂"]], [x1, y1, x2, y2], result);
}

export function solve_mid_x(x1, x2) {
  const result=calc.calc_mid_x(x1, x2);
  return standard("Середина отрезка", "M((x₁+x₂)/2,(y₁+y₂)/2)", [["x1","x₁"],["x2","x₂"]], [x1, x2], result);
}

export function solve_mid_y(y1, y2) {
  const result=calc.calc_mid_y(y1, y2);
  return standard("Середина отрезка", "M((x₁+x₂)/2,(y₁+y₂)/2)", [["y1","y₁"],["y2","y₂"]], [y1, y2], result);
}

export function solve_section_x(x1, x2, m, n) {
  const result=calc.calc_section_x(x1, x2, m, n);
  return standard("Деление отрезка", "x=(nx₁+mx₂)/(m+n)", [["x1","x₁"],["x2","x₂"],["m","m"],["n","n"]], [x1, x2, m, n], result);
}

export function solve_section_y(y1, y2, m, n) {
  const result=calc.calc_section_y(y1, y2, m, n);
  return standard("Деление отрезка", "x=(nx₁+mx₂)/(m+n)", [["y1","y₁"],["y2","y₂"],["m","m"],["n","n"]], [y1, y2, m, n], result);
}

export function solve_slope(x1, y1, x2, y2) {
  const result=calc.calc_slope(x1, y1, x2, y2);
  return standard("Угловой коэффициент", "k=(y₂−y₁)/(x₂−x₁)", [["x1","x₁"],["y1","y₁"],["x2","x₂"],["y2","y₂"]], [x1, y1, x2, y2], result);
}

export function solve_line_b(x1, y1, k) {
  const result=calc.calc_line_b(x1, y1, k);
  return standard("Прямая y=kx+b", "b=y₁−kx₁", [["x1","x₁"],["y1","y₁"],["k","k"]], [x1, y1, k], result);
}

export function solve_point_line_distance(A, B, C, x, y) {
  const result=calc.calc_point_line_distance(A, B, C, x, y);
  return standard("Расстояние от точки до прямой", "d=|Ax₀+By₀+C|/√(A²+B²)", [["A","A"],["B","B"],["C","C"],["x","x₀"],["y","y₀"]], [A, B, C, x, y], result);
}

export function solve_lines_angle(k1, k2) {
  const result=calc.calc_lines_angle(k1, k2);
  return standard("Угол между прямыми", "tanφ=(k₂−k₁)/(1+k₁k₂)", [["k1","k₁"],["k2","k₂"]], [k1, k2], result);
}

export function solve_circle_radius(D, E, F) {
  const result=calc.calc_circle_radius(D, E, F);
  return standard("Окружность общего вида", "(x+D/2)²+(y+E/2)²=r²", [["D","D"],["E","E"],["F","F"]], [D, E, F], result);
}

export function solve_ellipse_focus(a, b) {
  const result=calc.calc_ellipse_focal(a, b);
  return standard("Эллипс — фокусное расстояние", "c=√(a²−b²)", [["a","Большая полуось a"],["b","Малая полуось b"]], [a, b], result);
}

export function solve_ellipse_eccentricity(a, b) {
  const result=calc.calc_ellipse_eccentricity(a, b);
  return standard("Эллипс — эксцентриситет", "e=c/a", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_parabola_focus(p) {
  const result=calc.calc_parabola_focus(p);
  return standard("Парабола — фокус", "yF=p/2", [["p","Параметр p"]], [p], result);
}

export function solve_parabola_directrix(p) {
  const result=calc.calc_parabola_directrix(p);
  return standard("Парабола — директриса", "y=−p/2", [["p","p"]], [p], result);
}

export function solve_hyperbola_focus(a, b) {
  const result=calc.calc_hyperbola_focal(a, b);
  return standard("Гипербола — фокусное расстояние", "c=√(a²+b²)", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_hyperbola_eccentricity(a, b) {
  const result=calc.calc_hyperbola_eccentricity(a, b);
  return standard("Гипербола — эксцентриситет", "e=c/a", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_polar_r(x, y) {
  const result=calc.calc_polar_r(x, y);
  return standard("Полярный радиус", "r=√(x²+y²)", [["x","x"],["y","y"]], [x, y], result);
}

export function solve_polar_phi(x, y) {
  const result=calc.calc_polar_phi(x, y);
  return standard("Полярный угол", "φ=atan2(y,x)", [["x","x"],["y","y"]], [x, y], result);
}

export function solve_cart_x(r, phiDeg) {
  const result=calc.calc_cart_x(r, phiDeg);
  return standard("Полярные → x", "x=r cosφ", [["r","r"],["phiDeg","φ, °"]], [r, phiDeg], result);
}

export function solve_cart_y(r, phiDeg) {
  const result=calc.calc_cart_y(r, phiDeg);
  return standard("Полярные → y", "y=r sinφ", [["r","r"],["phiDeg","φ, °"]], [r, phiDeg], result);
}
