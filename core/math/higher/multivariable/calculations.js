export function calc_partial_x(a, m, b, n, x, y) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(m)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y)) throw new Error('Введите корректные числовые значения.');
  return a*m*x**(m-1)*y**n;
}

export function calc_partial_y(a, m, b, n, x, y) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(m)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y)) throw new Error('Введите корректные числовые значения.');
  return b*n*x**m*y**(n-1);
}

export function calc_gradient_mag(fx, fy) {
  if (!Number.isFinite(fx)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(fy)) throw new Error('Введите корректные числовые значения.');
  return Math.hypot(fx,fy);
}

export function calc_directional(fx, fy, ux, uy) {
  if (!Number.isFinite(fx)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(fy)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(ux)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(uy)) throw new Error('Введите корректные числовые значения.');
  const n=Math.hypot(ux,uy);if(n===0)throw new Error('Направление не может быть нулевым.');return (fx*ux+fy*uy)/n;
}

export function calc_tangent_plane(x0, y0, z0, fx, fy, x, y) {
  if (!Number.isFinite(x0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(fx)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(fy)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y)) throw new Error('Введите корректные числовые значения.');
  return z0+fx*(x-x0)+fy*(y-y0);
}

export function calc_total_diff(fx, fy, dx, dy) {
  if (!Number.isFinite(fx)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(fy)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(dx)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(dy)) throw new Error('Введите корректные числовые значения.');
  return fx*dx+fy*dy;
}

export function calc_hessian_det(fxx, fxy, fyy) {
  if (!Number.isFinite(fxx)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(fxy)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(fyy)) throw new Error('Введите корректные числовые значения.');
  return fxx*fyy-fxy*fxy;
}

export function calc_double_monomial(a, m, b, n, x1, x2, y1, y2) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(m)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  if(m===-1||n===-1)throw new Error('Показатели −1 требуют логарифмической формы.');return a/(m+1)*b/(n+1)*(x2**(m+1)-x1**(m+1))*(y2**(n+1)-y1**(n+1));
}

export function calc_triple_monomial(a, m, b, n, c, p, x1, x2, y1, y2, z1, z2) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(m)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(p)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z2)) throw new Error('Введите корректные числовые значения.');
  if(m===-1||n===-1||p===-1)throw new Error('Показатель −1 требует отдельной формы.');return a*b*c/(m+1)/(n+1)/(p+1)*(x2**(m+1)-x1**(m+1))*(y2**(n+1)-y1**(n+1))*(z2**(p+1)-z1**(p+1));
}

export function calc_polar_jacobian(r) {
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  return Math.abs(r);
}

export function calc_spherical_jacobian(r, thetaDeg) {
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(thetaDeg)) throw new Error('Введите корректные числовые значения.');
  return Math.abs(r*r*Math.sin(thetaDeg*Math.PI/180));
}
