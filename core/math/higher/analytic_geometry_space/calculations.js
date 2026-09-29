export function calc_dist3(x1, y1, z1, x2, y2, z2) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z2)) throw new Error('Введите корректные числовые значения.');
  return Math.hypot(x2-x1,y2-y1,z2-z1);
}

export function calc_dot3(x1, y1, z1, x2, y2, z2) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z2)) throw new Error('Введите корректные числовые значения.');
  return x1*x2+y1*y2+z1*z2;
}

export function calc_cross_mag(x1, y1, z1, x2, y2, z2) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z2)) throw new Error('Введите корректные числовые значения.');
  return Math.hypot(y1*z2-z1*y2,z1*x2-x1*z2,x1*y2-y1*x2);
}

export function calc_vector_length(x, y, z) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z)) throw new Error('Введите корректные числовые значения.');
  return Math.hypot(x,y,z);
}

export function calc_vector_angle(x1, y1, z1, x2, y2, z2) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z2)) throw new Error('Введите корректные числовые значения.');
  const d=x1*x2+y1*y2+z1*z2,n=Math.hypot(x1,y1,z1)*Math.hypot(x2,y2,z2);if(n===0)throw new Error('Нулевой вектор не имеет направления.');return Math.acos(Math.max(-1,Math.min(1,d/n)))*180/Math.PI;
}

export function calc_triple(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x3)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y3)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z3)) throw new Error('Введите корректные числовые значения.');
  return x1*(y2*z3-z2*y3)-y1*(x2*z3-z2*x3)+z1*(x2*y3-y2*x3);
}

export function calc_plane_d(A, B, C, x0, y0, z0) {
  if (!Number.isFinite(A)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(B)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(C)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y0)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z0)) throw new Error('Введите корректные числовые значения.');
  return -(A*x0+B*y0+C*z0);
}

export function calc_point_plane_distance(A, B, C, D, x, y, z) {
  if (!Number.isFinite(A)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(B)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(C)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(D)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(z)) throw new Error('Введите корректные числовые значения.');
  const n=Math.hypot(A,B,C);if(n===0)throw new Error('Нормаль плоскости не может быть нулевой.');return Math.abs(A*x+B*y+C*z+D)/n;
}

export function calc_planes_angle(A1, B1, C1, A2, B2, C2) {
  if (!Number.isFinite(A1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(B1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(C1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(A2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(B2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(C2)) throw new Error('Введите корректные числовые значения.');
  const d=A1*A2+B1*B2+C1*C2,n=Math.hypot(A1,B1,C1)*Math.hypot(A2,B2,C2);if(n===0)throw new Error('Неверный нормальный вектор.');return Math.acos(Math.max(-1,Math.min(1,Math.abs(d/n))))*180/Math.PI;
}

export function calc_line_plane_angle(lx, ly, lz, A, B, C) {
  if (!Number.isFinite(lx)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(ly)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(lz)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(A)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(B)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(C)) throw new Error('Введите корректные числовые значения.');
  const dot=A*lx+B*ly+C*lz,den=Math.hypot(A,B,C)*Math.hypot(lx,ly,lz);if(den===0)throw new Error('Направляющий/нормальный вектор не должен быть нулём.');return Math.asin(Math.min(1,Math.abs(dot/den)))*180/Math.PI;
}

export function calc_sphere_radius3(D, E, F, G) {
  if (!Number.isFinite(D)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(E)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(F)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(G)) throw new Error('Введите корректные числовые значения.');
  const r2=(D*D+E*E+F*F)/4-G;if(r2<0)throw new Error('Сфера не существует в действительных координатах.');return Math.sqrt(r2);
}
