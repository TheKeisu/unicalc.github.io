export function calc_ap_n(a1, d, n) {
  if (!Number.isFinite(a1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  return a1+(n-1)*d;
}

export function calc_ap_sum(a1, d, n) {
  if (!Number.isFinite(a1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  return n*(2*a1+(n-1)*d)/2;
}

export function calc_ap_d(a1, an, n) {
  if (!Number.isFinite(a1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(an)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if(n===1) throw new Error('n должно отличаться от 1.'); return (an-a1)/(n-1);
}

export function calc_gp_n(b1, q, n) {
  if (!Number.isFinite(b1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(q)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  return b1*q**(n-1);
}

export function calc_gp_sum(b1, q, n) {
  if (!Number.isFinite(b1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(q)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if(q===1) return b1*n; return b1*(q**n-1)/(q-1);
}

export function calc_gp_infinite(b1, q) {
  if (!Number.isFinite(b1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(q)) throw new Error('Введите корректные числовые значения.');
  if(Math.abs(q)>=1) throw new Error('Для бесконечной суммы требуется |q|<1.'); return b1/(1-q);
}

export function calc_gp_q(b1, bn, n) {
  if (!Number.isFinite(b1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(bn)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if(n<=1||b1===0) throw new Error('Требуется n>1 и b₁≠0.'); return Math.sign(bn/b1)*Math.abs(bn/b1)**(1/(n-1));
}

export function calc_compound_interest(P, r, n, t) {
  if (!Number.isFinite(P)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(t)) throw new Error('Введите корректные числовые значения.');
  return P*(1+r/n)**(n*t);
}

export function calc_continuous_interest(P, r, t) {
  if (!Number.isFinite(P)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(r)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(t)) throw new Error('Введите корректные числовые значения.');
  return P*Math.exp(r*t);
}

export function calc_harmonic_term(a1, d, n) {
  if (!Number.isFinite(a1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if(a1===0||1+(n-1)*d===0) throw new Error('Нулевой знаменатель.'); return 1/(1/a1+(n-1)*d);
}
