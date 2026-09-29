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

export function solve_dist3(x1, y1, z1, x2, y2, z2) {
  const result=calc.calc_dist3(x1, y1, z1, x2, y2, z2);
  return standard("Расстояние в пространстве", "d=√(Δx²+Δy²+Δz²)", [["x1","x₁"],["y1","y₁"],["z1","z₁"],["x2","x₂"],["y2","y₂"],["z2","z₂"]], [x1, y1, z1, x2, y2, z2], result);
}

export function solve_vector_length(x, y, z) {
  const result=calc.calc_vector_length(x, y, z);
  return standard("Длина вектора", "|a|=√(x²+y²+z²)", [["x","x"],["y","y"],["z","z"]], [x, y, z], result);
}

export function solve_dot3(x1, y1, z1, x2, y2, z2) {
  const result=calc.calc_dot3(x1, y1, z1, x2, y2, z2);
  return standard("Скалярное произведение", "a·b=x₁x₂+y₁y₂+z₁z₂", [["x1","x₁"],["y1","y₁"],["z1","z₁"],["x2","x₂"],["y2","y₂"],["z2","z₂"]], [x1, y1, z1, x2, y2, z2], result);
}

export function solve_cross_mag(x1, y1, z1, x2, y2, z2) {
  const result=calc.calc_cross_mag(x1, y1, z1, x2, y2, z2);
  return standard("Модуль векторного произведения", "|a×b|", [["x1","x₁"],["y1","y₁"],["z1","z₁"],["x2","x₂"],["y2","y₂"],["z2","z₂"]], [x1, y1, z1, x2, y2, z2], result);
}

export function solve_vector_angle(x1, y1, z1, x2, y2, z2) {
  const result=calc.calc_vector_angle(x1, y1, z1, x2, y2, z2);
  return standard("Угол между векторами", "cosφ=(a·b)/(|a||b|)", [["x1","x₁"],["y1","y₁"],["z1","z₁"],["x2","x₂"],["y2","y₂"],["z2","z₂"]], [x1, y1, z1, x2, y2, z2], result);
}

export function solve_triple(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
  const result=calc.calc_triple(x1, y1, z1, x2, y2, z2, x3, y3, z3);
  return standard("Смешанное произведение", "[a,b,c]=a·(b×c)", [["x1","x₁"],["y1","y₁"],["z1","z₁"],["x2","x₂"],["y2","y₂"],["z2","z₂"],["x3","x₃"],["y3","y₃"],["z3","z₃"]], [x1, y1, z1, x2, y2, z2, x3, y3, z3], result);
}

export function solve_plane_d(A, B, C, x0, y0, z0) {
  const result=calc.calc_plane_d(A, B, C, x0, y0, z0);
  return standard("Плоскость через точку", "D=−(Ax₀+By₀+Cz₀)", [["A","A"],["B","B"],["C","C"],["x0","x₀"],["y0","y₀"],["z0","z₀"]], [A, B, C, x0, y0, z0], result);
}

export function solve_point_plane_distance(A, B, C, D, x, y, z) {
  const result=calc.calc_point_plane_distance(A, B, C, D, x, y, z);
  return standard("Расстояние до плоскости", "d=|Ax+By+Cz+D|/√(A²+B²+C²)", [["A","A"],["B","B"],["C","C"],["D","D"],["x","x"],["y","y"],["z","z"]], [A, B, C, D, x, y, z], result);
}

export function solve_planes_angle(A1, B1, C1, A2, B2, C2) {
  const result=calc.calc_planes_angle(A1, B1, C1, A2, B2, C2);
  return standard("Угол между плоскостями", "cosφ=|n₁·n₂|/(|n₁||n₂|)", [["A1","A₁"],["B1","B₁"],["C1","C₁"],["A2","A₂"],["B2","B₂"],["C2","C₂"]], [A1, B1, C1, A2, B2, C2], result);
}

export function solve_line_plane_angle(lx, ly, lz, A, B, C) {
  const result=calc.calc_line_plane_angle(lx, ly, lz, A, B, C);
  return standard("Угол прямой и плоскости", "sinφ=|n·v|/(|n||v|)", [["lx","lₓ"],["ly","lᵧ"],["lz","l_z"],["A","A"],["B","B"],["C","C"]], [lx, ly, lz, A, B, C], result);
}

export function solve_sphere_radius3(D, E, F, G) {
  const result=calc.calc_sphere_radius3(D, E, F, G);
  return standard("Сфера общего вида", "r²=(D²+E²+F²)/4−G", [["D","D"],["E","E"],["F","F"],["G","G"]], [D, E, F, G], result);
}
