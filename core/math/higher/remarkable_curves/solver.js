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

export function solve_cycloid_x(a, t) {
  const result=calc.calc_cycloid_x(a, t);
  return standard("Циклоида — x", "x=a(t−sin t)", [["a","a"],["t","t, рад"]], [a, t], result);
}

export function solve_cycloid_y(a, t) {
  const result=calc.calc_cycloid_y(a, t);
  return standard("Циклоида — y", "y=a(1−cos t)", [["a","a"],["t","t, рад"]], [a, t], result);
}

export function solve_catenary(a, x) {
  const result=calc.calc_catenary_y(a, x);
  return standard("Цепная линия", "y=a cosh(x/a)", [["a","a"],["x","x"]], [a, x], result);
}

export function solve_cardioid(a, thetaDeg) {
  const result=calc.calc_cardioid_r(a, thetaDeg);
  return standard("Кардиоида", "r=a(1+cosθ)", [["a","a"],["thetaDeg","θ, °"]], [a, thetaDeg], result);
}

export function solve_log_spiral(a, b, theta) {
  const result=calc.calc_log_spiral_r(a, b, theta);
  return standard("Логарифмическая спираль", "r=aeᵇᶿ", [["a","a"],["b","b"],["theta","θ, рад"]], [a, b, theta], result);
}

export function solve_helix_x(a, t) {
  const result=calc.calc_helix_x(a, t);
  return standard("Винтовая линия — x", "x=a cos t", [["a","a"],["t","t, рад"]], [a, t], result);
}

export function solve_helix_y(a, t) {
  const result=calc.calc_helix_y(a, t);
  return standard("Винтовая линия — y", "y=a sin t", [["a","a"],["t","t, рад"]], [a, t], result);
}

export function solve_helix_z(b, t) {
  const result=calc.calc_helix_z(b, t);
  return standard("Винтовая линия — z", "z=bt", [["b","b"],["t","t"]], [b, t], result);
}
