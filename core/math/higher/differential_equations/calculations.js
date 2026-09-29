export function calc_exp_ode(y0, k, x, x0) {
  if (!Number.isFinite(y0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x0)) throw new Error('Введите корректные числовые значения.');
  return y0*Math.exp(k*(x-x0));
}

export function calc_linear_ode(y0, a, b, x, x0) {
  if (!Number.isFinite(y0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x0)) throw new Error('Введите корректные числовые значения.');
  if(a===0)return y0+b*(x-x0);const eq=b/a;return eq+(y0-eq)*Math.exp(-a*(x-x0));
}

export function calc_logistic(K, y0, r, x, x0) {
  if (!Number.isFinite(K)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x0)) throw new Error('Введите корректные числовые значения.');
  if(K<=0||y0<=0||y0>=K)throw new Error('Требуется K>0 и 0<y₀<K.');const A=(K-y0)/y0;return K/(1+A*Math.exp(-r*(x-x0)));
}

export function calc_char_roots(a, b, c) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if(a===0)throw new Error('a≠0.');const D=b*b-4*a*c;if(D>=0){const s=Math.sqrt(D);return [(-b+s)/(2*a),(-b-s)/(2*a)];}return {real:-b/(2*a),imag:Math.sqrt(-D)/(2*a)};
}

export function calc_omega(a, c) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if(a===0||c/a<=0)throw new Error('Требуется c/a>0.');return Math.sqrt(c/a);
}

export function calc_linear_odepart(y1, y0, dt) {
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(dt)) throw new Error('Введите корректные числовые значения.');
  if(dt===0)throw new Error('Δx≠0.');return (y1-y0)/dt;
}

export function graph_exp_ode(y0, k, x0) {
  if (!Number.isFinite(y0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x0)) throw new Error('Введите корректные числовые значения.');
  const points=[];for(let x=x0-5;x<=x0+5;x+=.04)points.push([x,y0*Math.exp(k*(x-x0))]);return {title:`y=${y0}e^(${k}(x−${x0}))`,points};
}
