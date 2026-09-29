import * as calc from './calculations.js';

function pretty(value) {
  if (Array.isArray(value)) return value.map(pretty).join(', ');
  if (value && typeof value === 'object') return Object.entries(value).map(([k,v]) => `${k}=${pretty(v)}`).join('; ');
  if (typeof value === 'number') { if (!Number.isFinite(value)) return value === Infinity ? '∞' : String(value); return Number(value.toPrecision(10)).toString(); }
  return String(value);
}

function standard(title, formula, labels, values, result) {
  const substituted = labels.map(([key,label], i) => `${label}=${pretty(values[i])}`).join('; ');
  return { summary: title, steps: [
    {title:'1. Выбираем формулу',content:formula},
    {title:'2. Подставляем данные',content:substituted},
    {title:'3. Выполняем вычисление',content:`Получаем ${pretty(result)}.`},
    {title:'4. Записываем ответ',content:`Ответ: ${pretty(result)}.`}
  ]};
}

export function solve_c_add_re(a, c) {
  const result=calc.calc_c_add_re(a, c);
  return standard("Сложение — Re", "Re(z₁+z₂)=a+c", [["a","a"],["c","c"]], [a, c], result);
}

export function solve_c_add_im(b, d) {
  const result=calc.calc_c_add_im(b, d);
  return standard("Сложение — Im", "Im(z₁+z₂)=b+d", [["b","b"],["d","d"]], [b, d], result);
}

export function solve_c_sub_re(a, c) {
  const result=calc.calc_c_sub_re(a, c);
  return standard("Вычитание — Re", "Re(z₁−z₂)=a−c", [["a","a"],["c","c"]], [a, c], result);
}

export function solve_c_sub_im(b, d) {
  const result=calc.calc_c_sub_im(b, d);
  return standard("Вычитание — Im", "Im(z₁−z₂)=b−d", [["b","b"],["d","d"]], [b, d], result);
}

export function solve_c_mul_re(a, b, c, d) {
  const result=calc.calc_c_mul_re(a, b, c, d);
  return standard("Умножение — Re", "Re(z₁z₂)=ac−bd", [["a","a"],["b","b"],["c","c"],["d","d"]], [a, b, c, d], result);
}

export function solve_c_mul_im(a, b, c, d) {
  const result=calc.calc_c_mul_im(a, b, c, d);
  return standard("Умножение — Im", "Im(z₁z₂)=ad+bc", [["a","a"],["b","b"],["c","c"],["d","d"]], [a, b, c, d], result);
}

export function solve_c_div_re(a, b, c, d) {
  const result=calc.calc_c_div_re(a, b, c, d);
  return standard("Деление — Re", "Re(z₁/z₂)=(ac+bd)/(c²+d²)", [["a","a"],["b","b"],["c","c"],["d","d"]], [a, b, c, d], result);
}

export function solve_c_div_im(a, b, c, d) {
  const result=calc.calc_c_div_im(a, b, c, d);
  return standard("Деление — Im", "Im(z₁/z₂)=(bc−ad)/(c²+d²)", [["a","a"],["b","b"],["c","c"],["d","d"]], [a, b, c, d], result);
}

export function solve_c_mod(a, b) {
  const result=calc.calc_mod(a, b);
  return standard("Модуль комплексного числа", "|z|=√(a²+b²)", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_c_arg(a, b) {
  const result=calc.calc_arg(a, b);
  return standard("Аргумент комплексного числа", "arg z=atan2(b,a)", [["a","a"],["b","b"]], [a, b], result);
}

export function solve_polar_re(r, thetaDeg) {
  const result=calc.calc_from_polar_re(r, thetaDeg);
  return standard("Полярная форма — Re", "a=r cosφ", [["r","r"],["thetaDeg","φ, °"]], [r, thetaDeg], result);
}

export function solve_polar_im(r, thetaDeg) {
  const result=calc.calc_from_polar_im(r, thetaDeg);
  return standard("Полярная форма — Im", "b=r sinφ", [["r","r"],["thetaDeg","φ, °"]], [r, thetaDeg], result);
}

export function solve_demoivre_mod(r, n) {
  const result=calc.calc_demoivre_mod(r, n);
  return standard("Формула Муавра — модуль", "|zⁿ|=|z|ⁿ", [["r","r"],["n","n"]], [r, n], result);
}

export function solve_demoivre_arg(thetaDeg, n) {
  const result=calc.calc_demoivre_arg(thetaDeg, n);
  return standard("Формула Муавра — аргумент", "arg(zⁿ)=n arg z", [["thetaDeg","arg z, °"],["n","n"]], [thetaDeg, n], result);
}

export function solve_complex_root(r, n) {
  const result=calc.calc_root_complex_mod(r, n);
  return standard("Корень комплексного числа — модуль", "|z|^(1/n)", [["r","|z|"],["n","n"]], [r, n], result);
}

export function solve_euler_re(r, thetaDeg) {
  const result=calc.calc_euler_re(r, thetaDeg);
  return standard("Формула Эйлера — Re", "Re z=r cosφ", [["r","r"],["thetaDeg","φ, °"]], [r, thetaDeg], result);
}

export function solve_euler_im(r, thetaDeg) {
  const result=calc.calc_euler_im(r, thetaDeg);
  return standard("Формула Эйлера — Im", "Im z=r sinφ", [["r","r"],["thetaDeg","φ, °"]], [r, thetaDeg], result);
}
