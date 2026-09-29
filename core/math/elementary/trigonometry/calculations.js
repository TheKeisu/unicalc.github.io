export function calc_deg_to_rad(deg) {
  if (!Number.isFinite(deg)) throw new Error('Введите корректные числовые значения.');
  return deg*Math.PI/180;
}

export function calc_rad_to_deg(rad) {
  if (!Number.isFinite(rad)) throw new Error('Введите корректные числовые значения.');
  return rad*180/Math.PI;
}

export function calc_sin(deg) {
  if (!Number.isFinite(deg)) throw new Error('Введите корректные числовые значения.');
  return Math.sin(deg*Math.PI/180);
}

export function calc_cos(deg) {
  if (!Number.isFinite(deg)) throw new Error('Введите корректные числовые значения.');
  return Math.cos(deg*Math.PI/180);
}

export function calc_tan(deg) {
  if (!Number.isFinite(deg)) throw new Error('Введите корректные числовые значения.');
  const c=Math.cos(deg*Math.PI/180); if(Math.abs(c)<1e-12) throw new Error('tg не определён для этого угла.'); return Math.tan(deg*Math.PI/180);
}

export function calc_cot(deg) {
  if (!Number.isFinite(deg)) throw new Error('Введите корректные числовые значения.');
  const s=Math.sin(deg*Math.PI/180); if(Math.abs(s)<1e-12) throw new Error('ctg не определён для этого угла.'); return 1/Math.tan(deg*Math.PI/180);
}

export function calc_identity_sin2_cos2(x) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return Math.sin(x*Math.PI/180)**2+Math.cos(x*Math.PI/180)**2;
}

export function calc_double_sin(deg) {
  if (!Number.isFinite(deg)) throw new Error('Введите корректные числовые значения.');
  const t=deg*Math.PI/180; return Math.sin(2*t);
}

export function calc_double_cos(deg) {
  if (!Number.isFinite(deg)) throw new Error('Введите корректные числовые значения.');
  const t=deg*Math.PI/180; return Math.cos(2*t);
}

export function calc_half_sin(deg) {
  if (!Number.isFinite(deg)) throw new Error('Введите корректные числовые значения.');
  const t=deg*Math.PI/360; return Math.sqrt(Math.max(0,Math.pow((1-Math.cos(deg*Math.PI/180))/2,1)));
}

export function calc_law_sines_side(a, Adeg, Bdeg) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if(Adeg===0||Bdeg===0) throw new Error('Углы должны быть ненулевыми.'); return a*Math.sin(Bdeg*Math.PI/180)/Math.sin(Adeg*Math.PI/180);
}

export function calc_law_cosines_side(a, b, gammaDeg) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  return Math.sqrt(a*a+b*b-2*a*b*Math.cos(gammaDeg*Math.PI/180));
}

export function calc_triangle_area_sin(a, b, gammaDeg) {
  if (a <= 0) throw new Error('Значение должно быть положительным.');
  if (b <= 0) throw new Error('Значение должно быть положительным.');
  return a*b*Math.sin(gammaDeg*Math.PI/180)/2;
}

export function calc_arcsin_deg(x) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(x<-1||x>1) throw new Error('x∈[-1;1].'); return Math.asin(x)*180/Math.PI;
}

export function calc_arccos_deg(x) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(x<-1||x>1) throw new Error('x∈[-1;1].'); return Math.acos(x)*180/Math.PI;
}

export function calc_arctan_deg(x) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return Math.atan(x)*180/Math.PI;
}

export function calc_cotangent_from_sin_cos(sinA, cosA) {
  if (!Number.isFinite(sinA)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(cosA)) throw new Error('Введите корректные числовые значения.');
  if(cosA===0||sinA===0) throw new Error('Нельзя получить конечный cot из этих значений.'); return cosA/sinA;
}
