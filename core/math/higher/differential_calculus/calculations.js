export function calc_derivative_power(a, n, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return a*n*x**(n-1);
}

export function calc_derivative_exp(a, k, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return a*k*Math.exp(k*x);
}

export function calc_derivative_ln(a, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(x===0)throw new Error('x≠0.'); return a/x;
}

export function calc_derivative_sin(a, omega, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(omega)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return a*omega*Math.cos(omega*x);
}

export function calc_derivative_cos(a, omega, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(omega)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return -a*omega*Math.sin(omega*x);
}

export function calc_derivative_tan(a, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(Math.abs(Math.cos(x))<1e-12)throw new Error('tg x не определён.'); return a/(Math.cos(x)**2);
}

export function calc_product_derivative(u, v, du, dv) {
  if (!Number.isFinite(u)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(v)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(du)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(dv)) throw new Error('Введите корректные числовые значения.');
  return du*v+u*dv;
}

export function calc_quotient_derivative(u, v, du, dv) {
  if (!Number.isFinite(u)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(v)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(du)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(dv)) throw new Error('Введите корректные числовые значения.');
  if(v===0)throw new Error('v≠0.'); return (du*v-u*dv)/(v*v);
}

export function calc_chain_power(a, n, g, dg) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(g)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(dg)) throw new Error('Введите корректные числовые значения.');
  return a*n*g**(n-1)*dg;
}

export function calc_tangent(x0, f0, df0, x) {
  if (!Number.isFinite(x0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(f0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(df0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return f0+df0*(x-x0);
}

export function calc_normal(x0, f0, df0, x) {
  if (!Number.isFinite(x0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(f0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(df0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(df0===0)throw new Error('При f′(x₀)=0 нормаль вертикальна.'); return f0-(x-x0)/df0;
}

export function calc_linear_approx(f0, df0, dx) {
  if (!Number.isFinite(f0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(df0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(dx)) throw new Error('Введите корректные числовые значения.');
  return f0+df0*dx;
}

export function calc_newton(x0, f0, df0) {
  if (!Number.isFinite(x0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(f0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(df0)) throw new Error('Введите корректные числовые значения.');
  if(df0===0)throw new Error('f′(x₀)≠0.'); return x0-f0/df0;
}

export function calc_curvature(dy, ddy) {
  if (!Number.isFinite(dy)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(ddy)) throw new Error('Введите корректные числовые значения.');
  return Math.abs(ddy)/(1+dy*dy)**1.5;
}

export function calc_radius_curvature(dy, ddy) {
  if (!Number.isFinite(dy)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(ddy)) throw new Error('Введите корректные числовые значения.');
  const k=Math.abs(ddy)/(1+dy*dy)**1.5;if(k===0)return Infinity;return 1/k;
}

export function calc_differential(df, dx) {
  if (!Number.isFinite(df)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(dx)) throw new Error('Введите корректные числовые значения.');
  return df*dx;
}

export function calc_second_derivative_power(a, n, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return a*n*(n-1)*x**(n-2);
}
