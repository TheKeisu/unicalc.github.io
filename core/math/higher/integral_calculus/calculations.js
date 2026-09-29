export function calc_int_power(a, n, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(n===-1) throw new Error('Для n=−1 используется ln|x|.'); return a*x**(n+1)/(n+1);
}

export function calc_int_inv(a, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(x===0)throw new Error('x≠0.'); return a*Math.log(Math.abs(x));
}

export function calc_int_exp(a, k, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(k===0) return a*x; return a*Math.exp(k*x)/k;
}

export function calc_int_sin(a, k, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(k===0)return 0;return -a*Math.cos(k*x)/k;
}

export function calc_int_cos(a, k, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(k===0)return a*x;return a*Math.sin(k*x)/k;
}

export function calc_int_def_power(a, n, left, right) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(left)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(right)) throw new Error('Введите корректные числовые значения.');
  if(n===-1)throw new Error('Для n=−1 нужен логарифмический случай.'); return a/(n+1)*(right**(n+1)-left**(n+1));
}

export function calc_int_def_linear(a, b, left, right) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(left)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(right)) throw new Error('Введите корректные числовые значения.');
  return a*(right*right-left*left)/2+b*(right-left);
}

export function calc_average_value(integral, left, right) {
  if (!Number.isFinite(integral)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(left)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(right)) throw new Error('Введите корректные числовые значения.');
  if(right===left)throw new Error('Пределы должны различаться.');return integral/(right-left);
}

export function calc_area_triangle_function(base, height) {
  if (base <= 0) throw new Error('Значение должно быть положительным.');
  if (height <= 0) throw new Error('Значение должно быть положительным.');
  return base*height/2;
}

export function calc_disk_volume(R1, R2, h) {
  if (R1 <= 0) throw new Error('Значение должно быть положительным.');
  if (R2 <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return Math.PI*h*(R1*R1+R2*R2)/2;
}

export function calc_trapezoid(h, f0, f1) {
  if (!Number.isFinite(h)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(f0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(f1)) throw new Error('Введите корректные числовые значения.');
  return h*(f0+f1)/2;
}

export function calc_simpson(h, f0, f1, f2) {
  if (!Number.isFinite(h)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(f0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(f1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(f2)) throw new Error('Введите корректные числовые значения.');
  return h*(f0+4*f1+f2)/3;
}

export function calc_arc_length(dx, dy) {
  if (!Number.isFinite(dx)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(dy)) throw new Error('Введите корректные числовые значения.');
  return Math.hypot(dx,dy);
}

export function calc_arc_segment_polyline(length1, length2, length3) {
  if (length1 <= 0) throw new Error('Значение должно быть положительным.');
  if (length2 <= 0) throw new Error('Значение должно быть положительным.');
  if (length3 <= 0) throw new Error('Значение должно быть положительным.');
  return length1+length2+length3;
}

export function calc_integration_by_parts(u, v, int_v_du) {
  if (!Number.isFinite(u)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(v)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(int_v_du)) throw new Error('Введите корректные числовые значения.');
  return u*v-int_v_du;
}
