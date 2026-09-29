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

export function solve_int_power(a, n, x) {
  const result=calc.calc_int_power(a, n, x);
  return standard("Первообразная xⁿ", "∫axⁿdx=axⁿ⁺¹/(n+1)+C", [["a","a"],["n","n"],["x","x"]], [a, n, x], result);
}

export function solve_int_inverse(a, x) {
  const result=calc.calc_int_inv(a, x);
  return standard("Первообразная 1/x", "∫a/x dx=a ln|x|+C", [["a","a"],["x","x"]], [a, x], result);
}

export function solve_int_exp(a, k, x) {
  const result=calc.calc_int_exp(a, k, x);
  return standard("Первообразная e^(kx)", "∫aeᵏˣdx=aeᵏˣ/k+C", [["a","a"],["k","k"],["x","x"]], [a, k, x], result);
}

export function solve_int_sin(a, k, x) {
  const result=calc.calc_int_sin(a, k, x);
  return standard("Первообразная sin(kx)", "∫a sin(kx)dx=−a cos(kx)/k+C", [["a","a"],["k","k"],["x","x"]], [a, k, x], result);
}

export function solve_int_cos(a, k, x) {
  const result=calc.calc_int_cos(a, k, x);
  return standard("Первообразная cos(kx)", "∫a cos(kx)dx=a sin(kx)/k+C", [["a","a"],["k","k"],["x","x"]], [a, k, x], result);
}

export function solve_def_int_power(a, n, left, right) {
  const result=calc.calc_int_def_power(a, n, left, right);
  return standard("Определённый интеграл xⁿ", "∫ₗʳ axⁿdx=a(rⁿ⁺¹−lⁿ⁺¹)/(n+1)", [["a","a"],["n","n"],["left","Нижний предел"],["right","Верхний предел"]], [a, n, left, right], result);
}

export function solve_def_int_linear(a, b, left, right) {
  const result=calc.calc_int_def_linear(a, b, left, right);
  return standard("Интеграл линейной функции", "∫ₗʳ(ax+b)dx=a(r²−l²)/2+b(r−l)", [["a","a"],["b","b"],["left","Нижний предел"],["right","Верхний предел"]], [a, b, left, right], result);
}

export function solve_average_value(integral, left, right) {
  const result=calc.calc_average_value(integral, left, right);
  return standard("Среднее значение функции", "f̄=(1/(b−a))∫ₐᵇf(x)dx", [["integral","Значение интеграла"],["left","a"],["right","b"]], [integral, left, right], result);
}

export function solve_area_under_curve(base, height) {
  const result=calc.calc_area_triangle_function(base, height);
  return standard("Площадь под кривой", "S≈bh/2", [["base","Основание"],["height","Высота"]], [base, height], result);
}

export function solve_disk_volume(R1, R2, h) {
  const result=calc.calc_disk_volume(R1, R2, h);
  return standard("Объём тела вращения — оценка", "V≈πh(R₁²+R₂²)/2", [["R1","R₁"],["R2","R₂"],["h","h"]], [R1, R2, h], result);
}

export function solve_integration_by_parts(u, v, int_v_du) {
  const result=calc.calc_integration_by_parts(u, v, int_v_du);
  return standard("Интегрирование по частям", "∫u dv=uv−∫v du", [["u","u"],["v","v"],["int_v_du","∫vdu"]], [u, v, int_v_du], result);
}

export function solve_trapezoid(h, f0, f1) {
  const result=calc.calc_trapezoid(h, f0, f1);
  return standard("Формула трапеций", "I≈h(f₀+f₁)/2", [["h","Шаг h"],["f0","f₀"],["f1","f₁"]], [h, f0, f1], result);
}

export function solve_simpson(h, f0, f1, f2) {
  const result=calc.calc_simpson(h, f0, f1, f2);
  return standard("Формула Симпсона", "I≈h(f₀+4f₁+f₂)/3", [["h","Шаг h"],["f0","f₀"],["f1","f₁"],["f2","f₂"]], [h, f0, f1, f2], result);
}

export function solve_arc_length_element(dx, dy) {
  const result=calc.calc_arc_length(dx, dy);
  return standard("Элемент длины", "ds=√(dx²+dy²)", [["dx","dx"],["dy","dy"]], [dx, dy], result);
}

export function solve_polyline_length(length1, length2, length3) {
  const result=calc.calc_arc_segment_polyline(length1, length2, length3);
  return standard("Длина ломаного фрагмента", "L=l₁+l₂+l₃", [["length1","l₁"],["length2","l₂"],["length3","l₃"]], [length1, length2, length3], result);
}
