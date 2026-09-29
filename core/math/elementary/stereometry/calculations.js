export function calc_cuboid_volume(a, b, c) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if (c <= 0) throw new Error('Значение должно быть положительным.');
  return a*b*c;
}

export function calc_cuboid_area(a, b, c) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if (c <= 0) throw new Error('Значение должно быть положительным.');
  return 2*(a*b+b*c+a*c);
}

export function calc_cuboid_diag(a, b, c) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  if (c <= 0) throw new Error('Значение должно быть положительным.');
  return Math.hypot(a,b,c);
}

export function calc_prism_volume(S, h) {
  if (S <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return S*h;
}

export function calc_prism_area(Sbase, Sside) {
  if (Sbase <= 0) throw new Error('Значение должно быть положительным.');
  if (Sside <= 0) throw new Error('Значение должно быть положительным.');
  return 2*Sbase+Sside;
}

export function calc_cyl_volume(r, h) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return Math.PI*r*r*h;
}

export function calc_cyl_area(r, h) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return 2*Math.PI*r*(r+h);
}

export function calc_cyl_lateral(r, h) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return 2*Math.PI*r*h;
}

export function calc_cone_slant(r, h) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return Math.hypot(r,h);
}

export function calc_cone_volume(r, h) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return Math.PI*r*r*h/3;
}

export function calc_cone_area(r, h) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  const l=Math.hypot(r,h); return Math.PI*r*(r+l);
}

export function calc_frustum_cone_volume(R, r, h) {
  if (R <= 0) throw new Error('Значение должно быть положительным.');
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return Math.PI*h*(R*R+R*r+r*r)/3;
}

export function calc_frustum_cone_area(R, r, h) {
  if (R <= 0) throw new Error('Значение должно быть положительным.');
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  const l=Math.hypot(R-r,h); return Math.PI*(R*R+r*r+(R+r)*l);
}

export function calc_sphere_volume(r) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  return 4*Math.PI*r**3/3;
}

export function calc_sphere_area(r) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  return 4*Math.PI*r*r;
}

export function calc_spherical_cap_volume(r, h) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  if(h>2*r) throw new Error('Высота сегмента не может превышать диаметр.'); return Math.PI*h*h*(r-h/3);
}

export function calc_spherical_cap_area(r, h) {
  if (r <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return 2*Math.PI*r*h;
}

export function calc_pyramid_volume(S, h) {
  if (S <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return S*h/3;
}

export function calc_frustum_pyramid_volume(S1, S2, h) {
  if (S1 <= 0) throw new Error('Значение должно быть положительным.');
  if (S2 <= 0) throw new Error('Значение должно быть положительным.');
  if (h <= 0) throw new Error('Значение должно быть положительным.');
  return h*(S1+Math.sqrt(S1*S2)+S2)/3;
}

export function calc_regular_tetra_volume(a) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  return a**3/(6*Math.sqrt(2));
}

export function calc_regular_tetra_area(a) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  return Math.sqrt(3)*a*a;
}

export function calc_cube_volume(a) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  return a**3;
}

export function calc_cube_area(a) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  return 6*a*a;
}
