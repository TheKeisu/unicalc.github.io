export function calc_line_y(k, b, x) {
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return k*x+b;
}

export function calc_line_slope(x1, y1, x2, y2) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  if(x2===x1) throw new Error('Вертикальная прямая не имеет конечного k.'); return (y2-y1)/(x2-x1);
}

export function calc_line_intercept(k, x, y) {
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y)) throw new Error('Введите корректные числовые значения.');
  return y-k*x;
}

export function calc_quadratic_y(a, b, c, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return a*x*x+b*x+c;
}

export function calc_quadratic_vertex_x(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if(a===0) throw new Error('a ≠ 0.'); return -b/(2*a);
}

export function calc_quadratic_vertex_y(a, b, c) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if(a===0) throw new Error('a ≠ 0.'); return c-b*b/(4*a);
}

export function calc_power_function(a, n, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(x===0&&n<0) throw new Error('x=0 недопустим для отрицательной степени.'); return a*x**n;
}

export function calc_reciprocal(a, b, x) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(x===0) throw new Error('x не может быть нулём.'); return a/x+b;
}

export function calc_exp_function(a, k, x, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return a*Math.exp(k*x)+b;
}

export function calc_log_function(a, b, x, base) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(base)) throw new Error('Введите корректные числовые значения.');
  if(x<=0||base<=0||base===1) throw new Error('x>0, base>0, base≠1.'); return a*Math.log(x)/Math.log(base)+b;
}

export function calc_sine_function(A, omega, phiDeg, d, x) {
  if (!Number.isFinite(A)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(omega)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(phiDeg)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return A*Math.sin(omega*x+phiDeg*Math.PI/180)+d;
}

export function calc_cosine_function(A, omega, phiDeg, d, x) {
  if (!Number.isFinite(A)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(omega)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(phiDeg)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return A*Math.cos(omega*x+phiDeg*Math.PI/180)+d;
}

export function calc_linear_intersection_x(k1, b1, k2, b2) {
  if (!Number.isFinite(k1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(k2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b2)) throw new Error('Введите корректные числовые значения.');
  if(k1===k2) throw new Error('Параллельные или совпадающие прямые.'); return (b2-b1)/(k1-k2);
}


export function graph_line_two_points(x1, y1, x2, y2) {
  if (![x1, y1, x2, y2].every(Number.isFinite)) throw new Error('Введите корректные координаты двух точек.');
  if (x1 === x2) return { title:`x=${x1}`, points:[[x1,y1],[x1,y2]] };
  const k=(y2-y1)/(x2-x1); const b=y1-k*x1;
  const minX=Math.min(x1,x2)-4; const maxX=Math.max(x1,x2)+4; const points=[];
  for(let x=minX;x<=maxX;x+=Math.max((maxX-minX)/220,0.05)) points.push([x,k*x+b]);
  return {title:`y=${k}x+${b}`,points};
}

export function graph_line_k_point(k, x, y) {
  if (![k,x,y].every(Number.isFinite)) throw new Error('Введите корректные значения.');
  const b=y-k*x; return graph_line(k,b);
}

export function graph_reciprocal(a, b) {
  if (![a,b].every(Number.isFinite)) throw new Error('Введите корректные значения.');
  const points=[];
  for(let x=-10;x<=10;x+=0.05){ if(Math.abs(x)<0.08) continue; const y=a/x+b; if(Number.isFinite(y)&&Math.abs(y)<1000) points.push([x,y]); }
  return {title:`y=${a}/x+${b}`,points};
}

export function graph_line(k, b) {
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  const points=[]; for(let x=-10;x<=10;x+=0.08) points.push([x,k*x+b]); return {title:`y=${k}x+${b}`,points};
}

export function graph_quadratic(a, b, c) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if(a===0) return calc_graph_line(b,c); const points=[]; for(let x=-8;x<=8;x+=0.06) points.push([x,a*x*x+b*x+c]); return {title:`y=${a}x²+${b}x+${c}`,points};
}

export function calc_graph_line(k, b) {
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  const points=[]; for(let x=-10;x<=10;x+=0.08) points.push([x,k*x+b]); return {title:`y=${k}x+${b}`,points};
}

export function graph_power(a, n) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  const points=[]; for(let x=-5;x<=5;x+=0.05){ if(x===0&&n<0) continue; const y=a*x**n; if(Number.isFinite(y)&&Math.abs(y)<1000)points.push([x,y]); } return {title:`y=${a}x^${n}`,points};
}

export function graph_exp(a, k, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  const points=[]; for(let x=-6;x<=6;x+=0.05){const y=a*Math.exp(k*x)+b;if(Math.abs(y)<1000)points.push([x,y]);} return {title:`y=${a}e^(${k}x)+${b}`,points};
}

export function graph_log(a, b, base) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(base)) throw new Error('Введите корректные числовые значения.');
  if(base<=0||base===1)throw new Error('Недопустимое основание.'); const points=[]; for(let x=0.05;x<=15;x+=0.05){const y=a*Math.log(x)/Math.log(base)+b;if(Math.abs(y)<1000)points.push([x,y]);} return {title:`y=${a}log_${base}(x)+${b}`,points};
}

export function graph_sine(A, omega, phiDeg, d) {
  if (!Number.isFinite(A)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(omega)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(phiDeg)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  const points=[]; for(let x=-2*Math.PI;x<=2*Math.PI;x+=0.03){const y=A*Math.sin(omega*x+phiDeg*Math.PI/180)+d;points.push([x,y]);} return {title:`y=${A}sin(${omega}x+${phiDeg}°)+${d}`,points};
}

export function graph_cosine(A, omega, phiDeg, d) {
  if (!Number.isFinite(A)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(omega)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(phiDeg)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  const points=[]; for(let x=-2*Math.PI;x<=2*Math.PI;x+=0.03){const y=A*Math.cos(omega*x+phiDeg*Math.PI/180)+d;points.push([x,y]);} return {title:`y=${A}cos(${omega}x+${phiDeg}°)+${d}`,points};
}
