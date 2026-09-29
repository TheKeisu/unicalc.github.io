export function calc_geom_sum(a, q) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(q)) throw new Error('Введите корректные числовые значения.');
  if(Math.abs(q)>=1)throw new Error('Требуется |q|<1.');return a/(1-q);
}

export function calc_geom_remainder(a, q, n) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(q)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if(Math.abs(q)>=1)throw new Error('Требуется |q|<1.');return Math.abs(a)*Math.abs(q)**n/(1-Math.abs(q));
}

export function calc_p_series_convergence(p) {
  if (!Number.isFinite(p)) throw new Error('Введите корректные числовые значения.');
  return p>1?'Сходится':'Расходится';
}

export function calc_ratio_test(L) {
  if (!Number.isFinite(L)) throw new Error('Введите корректные числовые значения.');
  if(L<1)return'Сходится абсолютно';if(L>1)return'Расходится';return'Признак не даёт ответа';
}

export function calc_taylor_term(deriv, dx, n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if(n>170)throw new Error('Слишком большой порядок.');let f=1;for(let i=2;i<=n;i++)f*=i;return deriv*dx**n/f;
}

export function calc_maclaurin_exp_term(x, n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if(n>170)throw new Error('Слишком большой n.');let f=1;for(let i=2;i<=n;i++)f*=i;return x**n/f;
}

export function calc_maclaurin_sin_term(x, n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if(n%2!==0)throw new Error('Вводимый n должен быть чётным индексом ряда в форме 2k+1? Используйте n=0,2,4... для модуля порядка.');let k=n/2;let f=1;for(let i=2;i<=2*k+1;i++)f*=i;return (-1)**k*x**(2*k+1)/f;
}

export function calc_maclaurin_cos_term(x, n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if(n%2!==0)throw new Error('Для косинуса используйте чётный n.');let k=n/2;let f=1;for(let i=2;i<=2*k;i++)f*=i;return (-1)**k*x**(2*k)/f;
}

export function calc_alternating_error(nextTerm) {
  if (!Number.isFinite(nextTerm)) throw new Error('Введите корректные числовые значения.');
  return Math.abs(nextTerm);
}

export function calc_fourier_an(L, integral) {
  if (L <= 0) throw new Error('Значение должно быть положительным.');
  return integral/L;
}

export function calc_fourier_bn(L, integral) {
  if (L <= 0) throw new Error('Значение должно быть положительным.');
  return integral/L;
}
