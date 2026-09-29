export function calc_square_sum(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return a*a+2*a*b+b*b;
}

export function calc_square_diff(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return a*a-2*a*b+b*b;
}

export function calc_diff_squares(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return a*a-b*b;
}

export function calc_cube_sum(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return a*a*a+3*a*a*b+3*a*b*b+b*b*b;
}

export function calc_cube_diff(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return a*a*a-3*a*a*b+3*a*b*b-b*b*b;
}

export function calc_sum_cubes(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return a*a*a+b*b*b;
}

export function calc_diff_cubes(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return a*a*a-b*b*b;
}

export function calc_linear_root(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if(a===0) throw new Error('Коэффициент a не может быть нулём.'); return -b/a;
}

export function calc_discriminant(a, b, c) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if(a===0) throw new Error('Для квадратного уравнения a ≠ 0.'); return b*b-4*a*c;
}

export function calc_quadratic_roots(a, b, c) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if(a===0) return calc_linear_root(b,c); const D=b*b-4*a*c; if(D<0) return {type:'complex',real:-b/(2*a),imag:Math.sqrt(-D)/(2*a)}; if(D===0) return [-b/(2*a)]; const s=Math.sqrt(D); return [(-b-s)/(2*a),(-b+s)/(2*a)];
}

export function calc_vieta_sum(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if(a===0) throw new Error('a ≠ 0.'); return -b/a;
}

export function calc_vieta_product(a, c) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if(a===0) throw new Error('a ≠ 0.'); return c/a;
}

export function calc_cramer_x(a1, b1, c1, a2, b2, c2) {
  if (!Number.isFinite(a1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(a2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c2)) throw new Error('Введите корректные числовые значения.');
  const D=a1*b2-a2*b1; if(D===0) throw new Error('Определитель системы равен нулю: однозначного решения нет.'); return (c1*b2-c2*b1)/D;
}

export function calc_cramer_y(a1, b1, c1, a2, b2, c2) {
  if (!Number.isFinite(a1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(a2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c2)) throw new Error('Введите корректные числовые значения.');
  const D=a1*b2-a2*b1; if(D===0) throw new Error('Определитель системы равен нулю: однозначного решения нет.'); return (a1*c2-a2*c1)/D;
}

export function calc_power_product(a, m, n) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(m)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  return a**(m+n);
}

export function calc_power_quotient(a, m, n) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(m)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if(a===0 && n<0) throw new Error('Нулевая база не допускает отрицательного показателя.'); return a**(m-n);
}

export function calc_power_of_power(a, m, n) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(m)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  return a**(m*n);
}

export function calc_root_product(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if(a<0||b<0) throw new Error('Для действительного результата подкоренные выражения должны быть неотрицательными.'); return Math.sqrt(a*b);
}

export function calc_root_quotient(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if(a<0||b<=0) throw new Error('Требуется a≥0 и b>0.'); return Math.sqrt(a/b);
}

export function calc_log(base, x) {
  if (!Number.isFinite(base)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(base<=0||base===1||x<=0) throw new Error('Требуется a>0, a≠1, x>0.'); return Math.log(x)/Math.log(base);
}

export function calc_ln(x) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(x<=0) throw new Error('Аргумент ln должен быть положительным.'); return Math.log(x);
}

export function calc_exp(x) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  return Math.exp(x);
}

export function calc_log_base_change(x, newBase) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(newBase)) throw new Error('Введите корректные числовые значения.');
  if(x<=0||newBase<=0||newBase===1) throw new Error('Требуется x>0, b>0, b≠1.'); return Math.log(x)/Math.log(newBase);
}

export function calc_binomial_term(n, k, a, b) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if (!Number.isInteger(k) || k < 0) throw new Error('Ожидается неотрицательное целое число.');
  if(k>n) throw new Error('k не может быть больше n.'); let c=1; k=Math.min(k,n-k); for(let i=1;i<=k;i++)c*= (n-k+i)/i; return c*a**(n-k)*b**k;
}
