export function calc_cycloid_x(a, t) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(t)) throw new Error('Введите корректные числовые значения.');
  return a*(t-Math.sin(t));
}

export function calc_cycloid_y(a, t) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(t)) throw new Error('Введите корректные числовые значения.');
  return a*(1-Math.cos(t));
}

export function calc_catenary_y(a, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(a===0)throw new Error('a≠0.');return a*Math.cosh(x/a);
}

export function calc_cardioid_r(a, thetaDeg) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(thetaDeg)) throw new Error('Введите корректные числовые значения.');
  return a*(1+Math.cos(thetaDeg*Math.PI/180));
}

export function calc_log_spiral_r(a, b, theta) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(theta)) throw new Error('Введите корректные числовые значения.');
  return a*Math.exp(b*theta);
}

export function calc_helix_x(a, t) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(t)) throw new Error('Введите корректные числовые значения.');
  return a*Math.cos(t);
}

export function calc_helix_y(a, t) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(t)) throw new Error('Введите корректные числовые значения.');
  return a*Math.sin(t);
}

export function calc_helix_z(b, t) {
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(t)) throw new Error('Введите корректные числовые значения.');
  return b*t;
}

export function graph_cycloid(a) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  const points=[];for(let t=-2*Math.PI;t<=2*Math.PI;t+=.03)points.push([a*(t-Math.sin(t)),a*(1-Math.cos(t))]);return {title:`Циклоида a=${a}`,points};
}

export function graph_catenary(a) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  const points=[];for(let x=-8;x<=8;x+=.05){const y=a*Math.cosh(x/a);if(Math.abs(y)<1000)points.push([x,y]);}return {title:`y=${a}ch(x/${a})`,points};
}

export function graph_cardioid(a) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  const points=[];for(let t=0;t<=2*Math.PI+.001;t+=.025){const r=a*(1+Math.cos(t));points.push([r*Math.cos(t),r*Math.sin(t)]);}return {title:`r=${a}(1+cosθ)`,points,closed:true};
}

export function graph_log_spiral(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  const points=[];for(let t=-5;t<=5;t+=.02){const r=a*Math.exp(b*t);const x=r*Math.cos(t),y=r*Math.sin(t);if(Math.hypot(x,y)<1000)points.push([x,y]);}return {title:`r=${a}e^(${b}θ)`,points};
}
