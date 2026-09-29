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

export function solve_cuboid_volume(a, b, c) {
  const result=calc.calc_cuboid_volume(a, b, c);
  return standard("Объём прямоугольного параллелепипеда", "V=abc", [["a","a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_cuboid_area(a, b, c) {
  const result=calc.calc_cuboid_area(a, b, c);
  return standard("Полная поверхность параллелепипеда", "S=2(ab+bc+ac)", [["a","a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_cuboid_diag(a, b, c) {
  const result=calc.calc_cuboid_diag(a, b, c);
  return standard("Диагональ параллелепипеда", "d=√(a²+b²+c²)", [["a","a"],["b","b"],["c","c"]], [a, b, c], result);
}

export function solve_prism_volume(S, h) {
  const result=calc.calc_prism_volume(S, h);
  return standard("Объём призмы", "V=Sоснh", [["S","Площадь основания"],["h","Высота"]], [S, h], result);
}

export function solve_prism_area(Sbase, Sside) {
  const result=calc.calc_prism_area(Sbase, Sside);
  return standard("Площадь поверхности призмы", "S=2Sосн+Sбок", [["Sbase","Площадь основания"],["Sside","Боковая поверхность"]], [Sbase, Sside], result);
}

export function solve_cyl_volume(r, h) {
  const result=calc.calc_cyl_volume(r, h);
  return standard("Объём цилиндра", "V=πr²h", [["r","r"],["h","h"]], [r, h], result);
}

export function solve_cyl_area(r, h) {
  const result=calc.calc_cyl_area(r, h);
  return standard("Площадь цилиндра", "S=2πr(r+h)", [["r","r"],["h","h"]], [r, h], result);
}

export function solve_cyl_lateral(r, h) {
  const result=calc.calc_cyl_lateral(r, h);
  return standard("Боковая поверхность цилиндра", "Sбок=2πrh", [["r","r"],["h","h"]], [r, h], result);
}

export function solve_cone_slant(r, h) {
  const result=calc.calc_cone_slant(r, h);
  return standard("Образующая конуса", "l=√(r²+h²)", [["r","r"],["h","h"]], [r, h], result);
}

export function solve_cone_volume(r, h) {
  const result=calc.calc_cone_volume(r, h);
  return standard("Объём конуса", "V=πr²h/3", [["r","r"],["h","h"]], [r, h], result);
}

export function solve_cone_area(r, h) {
  const result=calc.calc_cone_area(r, h);
  return standard("Площадь поверхности конуса", "S=πr(r+l)", [["r","r"],["h","h"]], [r, h], result);
}

export function solve_frustum_cone_volume(R, r, h) {
  const result=calc.calc_frustum_cone_volume(R, r, h);
  return standard("Объём усечённого конуса", "V=πh(R²+Rr+r²)/3", [["R","Больший радиус R"],["r","Меньший радиус r"],["h","h"]], [R, r, h], result);
}

export function solve_frustum_cone_area(R, r, h) {
  const result=calc.calc_frustum_cone_area(R, r, h);
  return standard("Поверхность усечённого конуса", "S=π(R²+r²+(R+r)l)", [["R","R"],["r","r"],["h","h"]], [R, r, h], result);
}

export function solve_sphere_volume(r) {
  const result=calc.calc_sphere_volume(r);
  return standard("Объём шара", "V=4πr³/3", [["r","r"]], [r], result);
}

export function solve_sphere_area(r) {
  const result=calc.calc_sphere_area(r);
  return standard("Площадь сферы", "S=4πr²", [["r","r"]], [r], result);
}

export function solve_spherical_cap_volume(r, h) {
  const result=calc.calc_spherical_cap_volume(r, h);
  return standard("Объём шарового сегмента", "V=πh²(r−h/3)", [["r","Радиус шара r"],["h","Высота сегмента h"]], [r, h], result);
}

export function solve_spherical_cap_area(r, h) {
  const result=calc.calc_spherical_cap_area(r, h);
  return standard("Площадь шарового сегмента", "S=2πrh", [["r","r"],["h","h"]], [r, h], result);
}

export function solve_pyramid_volume(S, h) {
  const result=calc.calc_pyramid_volume(S, h);
  return standard("Объём пирамиды", "V=Sоснh/3", [["S","Sосн"],["h","h"]], [S, h], result);
}

export function solve_frustum_pyramid_volume(S1, S2, h) {
  const result=calc.calc_frustum_pyramid_volume(S1, S2, h);
  return standard("Объём усечённой пирамиды", "V=h(S₁+√(S₁S₂)+S₂)/3", [["S1","S₁"],["S2","S₂"],["h","h"]], [S1, S2, h], result);
}

export function solve_regular_tetra_volume(a) {
  const result=calc.calc_regular_tetra_volume(a);
  return standard("Объём правильного тетраэдра", "V=a³/(6√2)", [["a","Ребро a"]], [a], result);
}

export function solve_regular_tetra_area(a) {
  const result=calc.calc_regular_tetra_area(a);
  return standard("Поверхность правильного тетраэдра", "S=√3a²", [["a","Ребро a"]], [a], result);
}

export function solve_cube_volume(a) {
  const result=calc.calc_cube_volume(a);
  return standard("Объём куба", "V=a³", [["a","Ребро a"]], [a], result);
}

export function solve_cube_area(a) {
  const result=calc.calc_cube_area(a);
  return standard("Поверхность куба", "S=6a²", [["a","Ребро a"]], [a], result);
}
