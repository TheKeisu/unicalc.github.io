export function calc_c_add_re(a, c) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  return a+c;
}

export function calc_c_add_im(b, d) {
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  return b+d;
}

export function calc_c_sub_re(a, c) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  return a-c;
}

export function calc_c_sub_im(b, d) {
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  return b-d;
}

export function calc_c_mul_re(a, b, c, d) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  return a*c-b*d;
}

export function calc_c_mul_im(a, b, c, d) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  return a*d+b*c;
}

export function calc_c_div_re(a, b, c, d) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  const q=c*c+d*d;if(q===0)throw new Error('Деление на нулевое комплексное число.');return (a*c+b*d)/q;
}

export function calc_c_div_im(a, b, c, d) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  const q=c*c+d*d;if(q===0)throw new Error('Деление на нулевое комплексное число.');return (b*c-a*d)/q;
}

export function calc_mod(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return Math.hypot(a,b);
}

export function calc_arg(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return Math.atan2(b,a)*180/Math.PI;
}

export function calc_from_polar_re(r, thetaDeg) {
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(thetaDeg)) throw new Error('Введите корректные числовые значения.');
  if(r<0)throw new Error('Модуль не может быть отрицательным.');return r*Math.cos(thetaDeg*Math.PI/180);
}

export function calc_from_polar_im(r, thetaDeg) {
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(thetaDeg)) throw new Error('Введите корректные числовые значения.');
  if(r<0)throw new Error('Модуль не может быть отрицательным.');return r*Math.sin(thetaDeg*Math.PI/180);
}

export function calc_demoivre_mod(r, n) {
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if(r<0)throw new Error('r≥0.');return r**n;
}

export function calc_demoivre_arg(thetaDeg, n) {
  if (!Number.isFinite(thetaDeg)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  return thetaDeg*n;
}

export function calc_root_complex_mod(r, n) {
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if(r<0||n===0)throw new Error('r≥0, n≠0.');return r**(1/n);
}

export function calc_euler_re(r, thetaDeg) {
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(thetaDeg)) throw new Error('Введите корректные числовые значения.');
  return r*Math.cos(thetaDeg*Math.PI/180);
}

export function calc_euler_im(r, thetaDeg) {
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(thetaDeg)) throw new Error('Введите корректные числовые значения.');
  return r*Math.sin(thetaDeg*Math.PI/180);
}
