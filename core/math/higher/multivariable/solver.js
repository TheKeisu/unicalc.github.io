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

export function solve_partial_x(a, m, b, n, x, y) {
  const result=calc.calc_partial_x(a, m, b, n, x, y);
  return standard("Частная производная по x", "fₓ=amxᵐ⁻¹yⁿ", [["a","a"],["m","m"],["b","b"],["n","n"],["x","x₀"],["y","y₀"]], [a, m, b, n, x, y], result);
}

export function solve_partial_y(a, m, b, n, x, y) {
  const result=calc.calc_partial_y(a, m, b, n, x, y);
  return standard("Частная производная по y", "fᵧ=bnxᵐyⁿ⁻¹", [["a","a"],["m","m"],["b","b"],["n","n"],["x","x₀"],["y","y₀"]], [a, m, b, n, x, y], result);
}

export function solve_gradient(fx, fy) {
  const result=calc.calc_gradient_mag(fx, fy);
  return standard("Модуль градиента", "|∇f|=√(fₓ²+fᵧ²)", [["fx","fₓ"],["fy","fᵧ"]], [fx, fy], result);
}

export function solve_directional(fx, fy, ux, uy) {
  const result=calc.calc_directional(fx, fy, ux, uy);
  return standard("Производная по направлению", "Dᵤf=(fₓuₓ+fᵧuᵧ)/|u|", [["fx","fₓ"],["fy","fᵧ"],["ux","uₓ"],["uy","uᵧ"]], [fx, fy, ux, uy], result);
}

export function solve_tangent_plane(x0, y0, z0, fx, fy, x, y) {
  const result=calc.calc_tangent_plane(x0, y0, z0, fx, fy, x, y);
  return standard("Касательная плоскость", "z=z₀+fₓ(x−x₀)+fᵧ(y−y₀)", [["x0","x₀"],["y0","y₀"],["z0","z₀"],["fx","fₓ"],["fy","fᵧ"],["x","x"],["y","y"]], [x0, y0, z0, fx, fy, x, y], result);
}

export function solve_total_diff(fx, fy, dx, dy) {
  const result=calc.calc_total_diff(fx, fy, dx, dy);
  return standard("Полный дифференциал", "df=fₓdx+fᵧdy", [["fx","fₓ"],["fy","fᵧ"],["dx","dx"],["dy","dy"]], [fx, fy, dx, dy], result);
}

export function solve_hessian(fxx, fxy, fyy) {
  const result=calc.calc_hessian_det(fxx, fxy, fyy);
  return standard("Определитель Гессиана 2×2", "D=fₓₓfᵧᵧ−fₓᵧ²", [["fxx","fₓₓ"],["fxy","fₓᵧ"],["fyy","fᵧᵧ"]], [fxx, fxy, fyy], result);
}

export function solve_double_monomial(a, m, b, n, x1, x2, y1, y2) {
  const result=calc.calc_double_monomial(a, m, b, n, x1, x2, y1, y2);
  return standard("Двойной интеграл монома", "∬ axᵐbyⁿ dxdy", [["a","a"],["m","m"],["b","b"],["n","n"],["x1","x₁"],["x2","x₂"],["y1","y₁"],["y2","y₂"]], [a, m, b, n, x1, x2, y1, y2], result);
}

export function solve_triple_monomial(a, m, b, n, c, p, x1, x2, y1, y2, z1, z2) {
  const result=calc.calc_triple_monomial(a, m, b, n, c, p, x1, x2, y1, y2, z1, z2);
  return standard("Тройной интеграл монома", "∭ axᵐbyⁿczᵖ dV", [["a","a"],["m","m"],["b","b"],["n","n"],["c","c"],["p","p"],["x1","x₁"],["x2","x₂"],["y1","y₁"],["y2","y₂"],["z1","z₁"],["z2","z₂"]], [a, m, b, n, c, p, x1, x2, y1, y2, z1, z2], result);
}

export function solve_polar_jacobian(r) {
  const result=calc.calc_polar_jacobian(r);
  return standard("Якобиан полярных координат", "|J|=r", [["r","r"]], [r], result);
}

export function solve_spherical_jacobian(r, thetaDeg) {
  const result=calc.calc_spherical_jacobian(r, thetaDeg);
  return standard("Якобиан сферических координат", "|J|=r² sinθ", [["r","r"],["thetaDeg","θ, °"]], [r, thetaDeg], result);
}
