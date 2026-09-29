export function calc_linear_ineq_bound(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if(a===0) throw new Error('a не может быть нулём.'); const x=-b/a; return {boundary:x,direction:a>0?'x > boundary при ax+b>0':'x < boundary при ax+b>0'};
}

export function calc_abs_distance(x, a) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  return Math.abs(x-a);
}

export function calc_abs_le_radius(a, r) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if(r<0) throw new Error('Радиус r должен быть неотрицательным.'); return {left:a-r,right:a+r};
}

export function calc_exp_equation(base, value) {
  if (!Number.isFinite(base)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(value)) throw new Error('Введите корректные числовые значения.');
  if(base<=0||base===1||value<=0) throw new Error('Требуется a>0, a≠1, b>0.'); return Math.log(value)/Math.log(base);
}

export function calc_log_equation(base, value) {
  if (!Number.isFinite(base)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(value)) throw new Error('Введите корректные числовые значения.');
  if(base<=0||base===1||value<=0) throw new Error('Основание должно быть положительным и не равно 1, аргумент >0.'); return base**value;
}

export function calc_sqrt_equation(a) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if(a<0) throw new Error('Правая часть должна быть неотрицательной.'); return a*a;
}

export function calc_reciprocal_equation(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if(b===0) throw new Error('b не может быть нулём.'); return -b/a;
}

export function calc_sin_eq(value) {
  if (!Number.isFinite(value)) throw new Error('Введите корректные числовые значения.');
  if(value<-1||value>1) throw new Error('Значение синуса должно лежать в [-1;1].'); return Math.asin(value)*180/Math.PI;
}

export function calc_cos_eq(value) {
  if (!Number.isFinite(value)) throw new Error('Введите корректные числовые значения.');
  if(value<-1||value>1) throw new Error('Значение косинуса должно лежать в [-1;1].'); return Math.acos(value)*180/Math.PI;
}

export function calc_tan_eq(value) {
  if (!Number.isFinite(value)) throw new Error('Введите корректные числовые значения.');
  return Math.atan(value)*180/Math.PI;
}
