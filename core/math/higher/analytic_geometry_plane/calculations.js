export function calc_distance(x1, y1, x2, y2) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  return Math.hypot(x2-x1,y2-y1);
}

export function calc_mid_x(x1, x2) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  return (x1+x2)/2;
}

export function calc_mid_y(y1, y2) {
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  return (y1+y2)/2;
}

export function calc_section_x(x1, x2, m, n) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(m)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if(m+n===0)throw new Error('m+n≠0.'); return (n*x1+m*x2)/(m+n);
}

export function calc_section_y(y1, y2, m, n) {
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(m)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if(m+n===0)throw new Error('m+n≠0.'); return (n*y1+m*y2)/(m+n);
}

export function calc_slope(x1, y1, x2, y2) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  if(x2===x1)throw new Error('Вертикальная прямая: k не определён.'); return (y2-y1)/(x2-x1);
}

export function calc_line_b(x1, y1, k) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(k)) throw new Error('Введите корректные числовые значения.');
  return y1-k*x1;
}

export function calc_point_line_distance(A, B, C, x, y) {
  if (!Number.isFinite(A)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(B)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(C)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y)) throw new Error('Введите корректные числовые значения.');
  const d=Math.hypot(A,B); if(d===0)throw new Error('A и B не могут быть одновременно нулём.'); return Math.abs(A*x+B*y+C)/d;
}

export function calc_lines_angle(k1, k2) {
  if (!Number.isFinite(k1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(k2)) throw new Error('Введите корректные числовые значения.');
  if(1+k1*k2===0)return 90; return Math.abs(Math.atan((k2-k1)/(1+k1*k2))*180/Math.PI);
}

export function calc_circle_center_x(D) {
  if (!Number.isFinite(D)) throw new Error('Введите корректные числовые значения.');
  return -D/2;
}

export function calc_circle_center_y(E) {
  if (!Number.isFinite(E)) throw new Error('Введите корректные числовые значения.');
  return -E/2;
}

export function calc_circle_radius(D, E, F) {
  if (!Number.isFinite(D)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(E)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(F)) throw new Error('Введите корректные числовые значения.');
  const r2=(D*D+E*E)/4-F; if(r2<0)throw new Error('Действительной окружности не существует.'); return Math.sqrt(r2);
}

export function calc_ellipse_focal(a, b) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if(b>a)throw new Error('Для этой формы предполагается a≥b.'); return Math.sqrt(a*a-b*b);
}

export function calc_ellipse_eccentricity(a, b) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if(b>a)throw new Error('Для a≥b.'); return Math.sqrt(a*a-b*b)/a;
}

export function calc_parabola_focus(p) {
  if (!Number.isFinite(p)) throw new Error('Введите корректные числовые значения.');
  return p/2;
}

export function calc_parabola_directrix(p) {
  if (!Number.isFinite(p)) throw new Error('Введите корректные числовые значения.');
  return -p/2;
}

export function calc_hyperbola_focal(a, b) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  return Math.sqrt(a*a+b*b);
}

export function calc_hyperbola_eccentricity(a, b) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  return Math.sqrt(a*a+b*b)/a;
}

export function calc_polar_r(x, y) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y)) throw new Error('Введите корректные числовые значения.');
  return Math.hypot(x,y);
}

export function calc_polar_phi(x, y) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y)) throw new Error('Введите корректные числовые значения.');
  return Math.atan2(y,x)*180/Math.PI;
}

export function calc_cart_x(r, phiDeg) {
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(phiDeg)) throw new Error('Введите корректные числовые значения.');
  return r*Math.cos(phiDeg*Math.PI/180);
}

export function calc_cart_y(r, phiDeg) {
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(phiDeg)) throw new Error('Введите корректные числовые значения.');
  return r*Math.sin(phiDeg*Math.PI/180);
}

export function graph_circle_general(D, E, F) {
  if (!Number.isFinite(D)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(E)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(F)) throw new Error('Введите корректные числовые значения.');
  const h=-D/2,k=-E/2,r2=(D*D+E*E)/4-F;if(r2<0)throw new Error('Нет действительной окружности.');const r=Math.sqrt(r2),points=[];for(let t=0;t<=2*Math.PI+.001;t+=Math.PI/90)points.push([h+r*Math.cos(t),k+r*Math.sin(t)]);return {title:`(x−${h})²+(y−${k})²=${r*r}`,points,closed:true};
}

export function graph_ellipse(a, b) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if(b>a)throw new Error('Для этой формы требуется a≥b.');const points=[];for(let t=0;t<=2*Math.PI+.001;t+=Math.PI/120)points.push([a*Math.cos(t),b*Math.sin(t)]);return {title:`x²/${a*a}+y²/${b*b}=1`,points,closed:true};
}

export function graph_parabola(p) {
  if (!Number.isFinite(p)) throw new Error('Введите корректные числовые значения.');
  const points=[];for(let x=-8;x<=8;x+=.05)points.push([x,x*x/(2*p)]);return {title:`x²=2${p}y`,points};
}

export function graph_hyperbola(a, b) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  const points=[];for(let x=-10;x<=10;x+=.05){if(Math.abs(x)<=a+.01)continue;const y=b*Math.sqrt(x*x/(a*a)-1);if(Number.isFinite(y)){points.push([x,y]);points.push([x,-y]);}}return {title:`x²/${a*a}−y²/${b*b}=1`,points};
}
