export function calc_add(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return a+b;
}

export function calc_subtract(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return a-b;
}

export function calc_multiply(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return a*b;
}

export function calc_divide(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if(b===0) throw new Error('Деление на ноль невозможно.'); return a/b;
}

export function calc_fraction_add(a, b, c, d) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  if(b===0||d===0) throw new Error('Знаменатель не может быть нулём.'); return (a*d+b*c)/(b*d);
}

export function calc_fraction_sub(a, b, c, d) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  if(b===0||d===0) throw new Error('Знаменатель не может быть нулём.'); return (a*d-b*c)/(b*d);
}

export function calc_fraction_mul(a, b, c, d) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  if(b===0||d===0) throw new Error('Знаменатель не может быть нулём.'); return a*c/(b*d);
}

export function calc_fraction_div(a, b, c, d) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(d)) throw new Error('Введите корректные числовые значения.');
  if(b===0||c===0||d===0) throw new Error('На нулевую дробь делить нельзя.'); return a*d/(b*c);
}

export function calc_percent_of(p, N) {
  if (!Number.isFinite(p)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(N)) throw new Error('Введите корректные числовые значения.');
  return p*N/100;
}

export function calc_percent_find_total(part, p) {
  if (!Number.isFinite(part)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(p)) throw new Error('Введите корректные числовые значения.');
  if(p===0) throw new Error('Процент не может быть нулевым.'); return part*100/p;
}

export function calc_percent_find_rate(part, total) {
  if (!Number.isFinite(part)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(total)) throw new Error('Введите корректные числовые значения.');
  if(total===0) throw new Error('Целое значение не может быть нулём.'); return part/total*100;
}

export function calc_percent_change(oldValue, newValue) {
  if (!Number.isFinite(oldValue)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(newValue)) throw new Error('Введите корректные числовые значения.');
  if(oldValue===0) throw new Error('Исходное значение не может быть нулём.'); return (newValue-oldValue)/oldValue*100;
}

export function calc_proportion(a, b, c) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(c)) throw new Error('Введите корректные числовые значения.');
  if(a===0) throw new Error('a не может быть нулём.'); return b*c/a;
}

export function calc_arithmetic_mean(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  return (a+b)/2;
}

export function calc_geometric_mean(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if(a<0||b<0) throw new Error('Для действительного среднего оба значения должны быть неотрицательными.'); return Math.sqrt(a*b);
}

export function calc_harmonic_mean(a, b) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(b)) throw new Error('Введите корректные числовые значения.');
  if(a===0||b===0||a+b===0) throw new Error('Значения не должны давать нулевой знаменатель.'); return 2*a*b/(a+b);
}

export function calc_weighted_mean(x1, w1, x2, w2) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(w1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(w2)) throw new Error('Введите корректные числовые значения.');
  if(w1+w2===0) throw new Error('Сумма весов не может быть нулём.'); return (x1*w1+x2*w2)/(w1+w2);
}

export function calc_abs_error(x, x0) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x0)) throw new Error('Введите корректные числовые значения.');
  return Math.abs(x-x0);
}

export function calc_rel_error(x, x0) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x0)) throw new Error('Введите корректные числовые значения.');
  if(x0===0) throw new Error('Точное значение не может быть нулём.'); return Math.abs(x-x0)/Math.abs(x0)*100;
}

export function calc_round(x, digits) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(digits)) throw new Error('Введите корректные числовые значения.');
  if(!Number.isInteger(digits)||digits<0||digits>15) throw new Error('Число знаков должно быть целым от 0 до 15.'); const p=10**digits; return Math.round((x+Number.EPSILON)*p)/p;
}

export function calc_gcd(a, b) {
  if (!Number.isInteger(a) || a < 0) throw new Error('Ожидается неотрицательное целое число.');
  if (!Number.isInteger(b) || b < 0) throw new Error('Ожидается неотрицательное целое число.');
  a=Math.abs(a); b=Math.abs(b); while(b!==0)[a,b]=[b,a%b]; return a;
}

export function calc_lcm(a, b) {
  if (!Number.isInteger(a) || a < 0) throw new Error('Ожидается неотрицательное целое число.');
  if (!Number.isInteger(b) || b < 0) throw new Error('Ожидается неотрицательное целое число.');
  if(a===0||b===0) return 0; let x=Math.abs(a),y=Math.abs(b); while(y!==0)[x,y]=[y,x%y]; return Math.abs(a*b)/x;
}

export function calc_power(a, n) {
  if (!Number.isFinite(a)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  return a**n;
}

export function calc_root(x, n) {
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(n)) throw new Error('Введите корректные числовые значения.');
  if(n===0) throw new Error('Степень корня не может быть нулевой.'); if(x<0 && Number.isInteger(n) && Math.abs(n)%2===0) throw new Error('Чётный корень из отрицательного числа не является действительным.'); if(x<0 && Number.isInteger(n)) return -(Math.abs(x)**(1/n)); if(x<0) throw new Error('Для нецелой степени отрицательное подкоренное выражение не поддерживается.'); return x**(1/n);
}

export function calc_factorial(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if(n>170) throw new Error('Слишком большое n для точного вычисления JavaScript.'); let r=1; for(let i=2;i<=n;i++) r*=i; return r;
}

export function calc_interp_linear(x1, y1, x2, y2, x) {
  if (!Number.isFinite(x1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y1)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(y2)) throw new Error('Введите корректные числовые значения.');
  if (!Number.isFinite(x)) throw new Error('Введите корректные числовые значения.');
  if(x2===x1) throw new Error('Узлы интерполяции должны различаться.'); return y1+(y2-y1)*(x-x1)/(x2-x1);
}
