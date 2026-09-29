export function calc_tri_bh(b, h) {
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return b*h/2;
}

export function calc_heron(a, b, c) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if (c <= 0) throw new Error('Значение должно быть положительным.');
  if(a+b<=c||a+c<=b||b+c<=a) throw new Error('Такие стороны не образуют треугольник.'); const p=(a+b+c)/2; return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}

export function calc_equilateral_area(a) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  return Math.sqrt(3)*a*a/4;
}

export function calc_pythag_h(a, b) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  return Math.hypot(a,b);
}

export function calc_pythag_leg(c, a) {
  if (c <= 0) throw new Error('Значение должно быть положительным.');
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if(c<=a) throw new Error('Гипотенуза должна быть больше катета.'); return Math.sqrt(c*c-a*a);
}

export function calc_cos_angle(a, b, c) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if (c <= 0) throw new Error('Значение должно быть положительным.');
  const q=(a*a+b*b-c*c)/(2*a*b); if(q<-1||q>1) throw new Error('Стороны не образуют треугольник для этого угла.'); return Math.acos(q)*180/Math.PI;
}

export function calc_tri_inradius(a, b, c) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if (c <= 0) throw new Error('Значение должно быть положительным.');
  const p=(a+b+c)/2; if(a+b<=c||a+c<=b||b+c<=a) throw new Error('Невозможный треугольник.'); const S=Math.sqrt(p*(p-a)*(p-b)*(p-c)); return S/p;
}

export function calc_tri_circumradius(a, b, c) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if (c <= 0) throw new Error('Значение должно быть положительным.');
  const p=(a+b+c)/2; if(a+b<=c||a+c<=b||b+c<=a) throw new Error('Невозможный треугольник.'); const S=Math.sqrt(p*(p-a)*(p-b)*(p-c)); return a*b*c/(4*S);
}

export function calc_median(a, b, c) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if (c <= 0) throw new Error('Значение должно быть положительным.');
  return 0.5*Math.sqrt(2*b*b+2*c*c-a*a);
}

export function calc_angle_bisector(a, b, c) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if (c <= 0) throw new Error('Значение должно быть положительным.');
  return Math.sqrt(b*c*(1-a*a/((b+c)*(b+c))));
}

export function calc_parallelogram_area(a, b, angleDeg) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  return a*b*Math.sin(angleDeg*Math.PI/180);
}

export function calc_rhombus_area_diag(d1, d2) {
  if (d1 <= 0) throw new Error('Значение должно быть положительным.');
  if (d2 <= 0) throw new Error('Значение должно быть положительным.');
  return d1*d2/2;
}

export function calc_trapezoid_area(a, b, h) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return (a+b)*h/2;
}

export function calc_trapezoid_midline(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return (a+b)/2;
}

export function calc_regular_polygon_perimeter(n, a) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if(n<3||a<=0) throw new Error('n≥3 и a>0.'); return n*a;
}

export function calc_regular_polygon_area(n, a) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if(n<3||a<=0) throw new Error('n≥3 и a>0.'); return n*a*a/(4*Math.tan(Math.PI/n));
}

export function graph_circle(r) {
  if (!Number.isFinite(r) || r <= 0) throw new Error('Радиус должен быть положительным числом.');
  const points=[];
  for(let i=0;i<=240;i++){ const t=2*Math.PI*i/240; points.push([r*Math.cos(t), r*Math.sin(t)]); }
  return {title:`x²+y²=${r}²`,points};
}

export function calc_circle_area(r) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  return Math.PI*r*r;
}

export function calc_circle_circumference(r) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  return 2*Math.PI*r;
}

export function calc_arc_length(r, angleDeg) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  return 2*Math.PI*r*angleDeg/360;
}

export function calc_sector_area(r, angleDeg) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  return Math.PI*r*r*angleDeg/360;
}

export function calc_chord(r, angleDeg) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  return 2*r*Math.sin(angleDeg*Math.PI/360);
}

export function calc_segment_area(r, angleDeg) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  const t=angleDeg*Math.PI/180; return r*r*(t-Math.sin(t))/2;
}

export function calc_tangent_length(R, d) {
  if (R <= 0) throw new Error('Значение должно быть положительным.');
  if (d <= 0) throw new Error('Значение должно быть положительным.');
  if(d<R) throw new Error('Точка должна находиться не ближе центра, чем R.'); return Math.sqrt(d*d-R*R);
}

export function calc_power_point(tangent, x1, x2) {
  if (tangent <= 0) throw new Error('Значение должно быть положительным.');
  return tangent*tangent;
}

export function calc_brahmagupta(a, b, c, d) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if (c <= 0) throw new Error('Значение должно быть положительным.');
  if (d <= 0) throw new Error('Значение должно быть положительным.');
  const p=(a+b+c+d)/2; return Math.sqrt((p-a)*(p-b)*(p-c)*(p-d));
}

export function calc_dist_points(x1, y1, x2, y2) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  return Math.hypot(x2-x1,y2-y1);
}
