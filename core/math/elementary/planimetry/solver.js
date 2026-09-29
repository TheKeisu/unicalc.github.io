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

export function solve_tri_bh(b, h) {
  const result=calc.calc_tri_bh(b, h);
  return standard("Площадь треугольника", "S=bh/2", [["b","Основание b"],["h","Высота h"]], [b, h], result);
}

export function solve_heron(a, b, c) {
  const result=calc.calc_heron(a, b, c);
  return standard("Формула Герона", "S=√(p(p−a)(p−b)(p−c))", [["a","a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_equilateral_area(a) {
  const result=calc.calc_equilateral_area(a);
  return standard("Равносторонний треугольник", "S=√3·a²/4", [["a","Сторона a"]], [a], result);
}

export function solve_pythag_h(a, b) {
  const result=calc.calc_pythag_h(a, b);
  return standard("Теорема Пифагора", "c=√(a²+b²)", [["a","Катет a"],["b","Катет b"]], [a, b], result);
}

export function solve_pythag_leg(c, a) {
  const result=calc.calc_pythag_leg(c, a);
  return standard("Катет по гипотенузе", "b=√(c²−a²)", [["c","Гипотенуза c"],["a","Катет a"]], [c, a], result);
}

export function solve_cos_angle(a, b, c) {
  const result=calc.calc_cos_angle(a, b, c);
  return standard("Теорема косинусов — угол", "cos C=(a²+b²−c²)/(2ab)", [["a","a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_inradius(a, b, c) {
  const result=calc.calc_tri_inradius(a, b, c);
  return standard("Радиус вписанной окружности", "r=S/p", [["a","a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_circumradius(a, b, c) {
  const result=calc.calc_tri_circumradius(a, b, c);
  return standard("Радиус описанной окружности", "R=abc/(4S)", [["a","a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_median(a, b, c) {
  const result=calc.calc_median(a, b, c);
  return standard("Медиана треугольника", "mₐ=1/2√(2b²+2c²−a²)", [["a","Сторона a"],["b","Сторона b"],["c","Сторона c"]], [a, b, c], result);
}

export function solve_angle_bisector(a, b, c) {
  const result=calc.calc_angle_bisector(a, b, c);
  return standard("Биссектриса треугольника", "lₐ=√(bc(1−a²/(b+c)²))", [["a","Противолежащая a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_parallelogram_area(a, b, angleDeg) {
  const result=calc.calc_parallelogram_area(a, b, angleDeg);
  return standard("Площадь параллелограмма", "S=ab sin γ", [["a","a"],["b","b"],["angleDeg","Угол γ, °"]], [a, b, angleDeg], result);
}

export function solve_rhombus_area(d1, d2) {
  const result=calc.calc_rhombus_area_diag(d1, d2);
  return standard("Площадь ромба", "S=d₁d₂/2", [["d1","Диагональ d₁"],["d2","Диагональ d₂"]], [d1, d2], result);
}

export function solve_trapezoid_area(a, b, h) {
  const result=calc.calc_trapezoid_area(a, b, h);
  return standard("Площадь трапеции", "S=(a+b)h/2", [["a","Основание a"],["b","Основание b"],["h","Высота h"]], [a, b, h], result);
}

export function solve_trapezoid_midline(a, b) {
  const result=calc.calc_trapezoid_midline(a, b);
  return standard("Средняя линия трапеции", "m=(a+b)/2", [["a","Основание a"],["b","Основание b"]], [a, b], result);
}

export function solve_regular_polygon_perimeter(n, a) {
  const result=calc.calc_regular_polygon_perimeter(n, a);
  return standard("Периметр правильного n-угольника", "P=na", [["n","Число сторон n"],["a","Сторона a"]], [n, a], result);
}

export function solve_regular_polygon_area(n, a) {
  const result=calc.calc_regular_polygon_area(n, a);
  return standard("Площадь правильного n-угольника", "S=na²/(4tg(π/n))", [["n","Число сторон n"],["a","Сторона a"]], [n, a], result);
}

export function solve_circle_area(r) {
  const result=calc.calc_circle_area(r);
  return standard("Площадь круга", "S=πr²", [["r","Радиус r"]], [r], result);
}

export function solve_circumference(r) {
  const result=calc.calc_circle_circumference(r);
  return standard("Длина окружности", "L=2πr", [["r","Радиус r"]], [r], result);
}

export function solve_arc_length(r, angleDeg) {
  const result=calc.calc_arc_length(r, angleDeg);
  return standard("Длина дуги", "l=πrα/180", [["r","Радиус r"],["angleDeg","Угол α, °"]], [r, angleDeg], result);
}

export function solve_sector_area(r, angleDeg) {
  const result=calc.calc_sector_area(r, angleDeg);
  return standard("Площадь сектора", "S=πr²α/360°", [["r","Радиус r"],["angleDeg","Угол α, °"]], [r, angleDeg], result);
}

export function solve_chord(r, angleDeg) {
  const result=calc.calc_chord(r, angleDeg);
  return standard("Хорда окружности", "c=2r sin(α/2)", [["r","Радиус r"],["angleDeg","Угол α, °"]], [r, angleDeg], result);
}

export function solve_segment_area(r, angleDeg) {
  const result=calc.calc_segment_area(r, angleDeg);
  return standard("Площадь кругового сегмента", "Sseg=r²(φ−sinφ)/2", [["r","Радиус r"],["angleDeg","Угол φ, °"]], [r, angleDeg], result);
}

export function solve_tangent_length(R, d) {
  const result=calc.calc_tangent_length(R, d);
  return standard("Длина касательной", "t=√(d²−R²)", [["R","Радиус R"],["d","Расстояние d"]], [R, d], result);
}

export function solve_power_point(tangent, x1, x2) {
  const result=calc.calc_power_point(tangent, x1, x2);
  return standard("Степень точки", "PT²=PA·PB", [["tangent","Длина касательной PT"],["x1","Не используется — PA"],["x2","Не используется — PB"]], [tangent, x1, x2], result);
}

export function solve_brahmagupta(a, b, c, d) {
  const result=calc.calc_brahmagupta(a, b, c, d);
  return standard("Формула Брахмагупты", "S=√((p−a)(p−b)(p−c)(p−d))", [["a","a"],["b","b"],["c","c"],["d","d"]], [a, b, c, d], result);
}

export function solve_point_distance(x1, y1, x2, y2) {
  const result=calc.calc_dist_points(x1, y1, x2, y2);
  return standard("Расстояние между точками", "d=√((x₂−x₁)²+(y₂−y₁)²)", [["x1","x₁"],["y1","y₁"],["x2","x₂"],["y2","y₂"]], [x1, y1, x2, y2], result);
}
