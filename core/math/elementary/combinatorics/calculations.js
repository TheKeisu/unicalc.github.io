export function calc_perm(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if(n>170) throw new Error('Слишком большое n.'); let r=1; for(let i=2;i<=n;i++)r*=i; return r;
}

export function calc_arrangement(n, k) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if (!Number.isInteger(k) || k < 0) throw new Error('Ожидается неотрицательное целое число.');
  if(k>n) throw new Error('k≤n.'); let r=1; for(let i=0;i<k;i++)r*=n-i; return r;
}

export function calc_combination(n, k) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if (!Number.isInteger(k) || k < 0) throw new Error('Ожидается неотрицательное целое число.');
  if(k>n) throw new Error('k≤n.'); k=Math.min(k,n-k); let r=1; for(let i=1;i<=k;i++)r*= (n-k+i)/i; return r;
}

export function calc_arrangement_rep(n, k) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if (!Number.isInteger(k) || k < 0) throw new Error('Ожидается неотрицательное целое число.');
  return n**k;
}

export function calc_combination_rep(n, k) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if (!Number.isInteger(k) || k < 0) throw new Error('Ожидается неотрицательное целое число.');
  return calc_combination(n+k-1,k);
}

export function calc_binomial_coefficient(n, k) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Ожидается неотрицательное целое число.');
  if (!Number.isInteger(k) || k < 0) throw new Error('Ожидается неотрицательное целое число.');
  return calc_combination(n,k);
}
