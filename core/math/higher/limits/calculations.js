export function calc_lim_sin_over_x(dummy) {
  if (!Number.isFinite(dummy)) throw new Error('Введите корректные числовые значения.');
  return 1;
}

export function calc_lim_one_minus_cos(dummy) {
  if (!Number.isFinite(dummy)) throw new Error('Введите корректные числовые значения.');
  return .5;
}

export function calc_lim_exp_minus1(dummy) {
  if (!Number.isFinite(dummy)) throw new Error('Введите корректные числовые значения.');
  return 1;
}

export function calc_lim_ln1px(dummy) {
  if (!Number.isFinite(dummy)) throw new Error('Введите корректные числовые значения.');
  return 1;
}

export function calc_lim_power_zero(n) {
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  return 0;
}

export function calc_lim_geometric(q) {
  if (!Number.isFinite(q)) throw new Error('Введите корректные числовые значения.');
  if(Math.abs(q)>=1) throw new Error('Для |q|<1 предел qⁿ равен 0.'); return 0;
}

export function calc_lim_rational_at(a, b, x0) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x0)) throw new Error('Введите корректные числовые значения.');
  return a*x0+b;
}
