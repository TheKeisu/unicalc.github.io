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

export function solve_deg_to_rad(deg) {
  const result=calc.calc_deg_to_rad(deg);
  return standard("Градусы → радианы", "α(rad)=α°π/180", [["deg","Угол, °"]], [deg], result);
}

export function solve_rad_to_deg(rad) {
  const result=calc.calc_rad_to_deg(rad);
  return standard("Радианы → градусы", "α°=α(rad)·180/π", [["rad","Угол, рад"]], [rad], result);
}

export function solve_sin(deg) {
  const result=calc.calc_sin(deg);
  return standard("Синус", "sin α", [["deg","Угол α, °"]], [deg], result);
}

export function solve_cos(deg) {
  const result=calc.calc_cos(deg);
  return standard("Косинус", "cos α", [["deg","Угол α, °"]], [deg], result);
}

export function solve_tan(deg) {
  const result=calc.calc_tan(deg);
  return standard("Тангенс", "tg α=sinα/cosα", [["deg","Угол α, °"]], [deg], result);
}

export function solve_cot(deg) {
  const result=calc.calc_cot(deg);
  return standard("Котангенс", "ctg α=cosα/sinα", [["deg","Угол α, °"]], [deg], result);
}

export function solve_identity(x) {
  const result=calc.calc_identity_sin2_cos2(x);
  return standard("Основное тригонометрическое тождество", "sin²x+cos²x=1", [["x","Угол x, °"]], [x], result);
}

export function solve_double_sin(deg) {
  const result=calc.calc_double_sin(deg);
  return standard("Синус двойного угла", "sin 2α=2sinαcosα", [["deg","Угол α, °"]], [deg], result);
}

export function solve_double_cos(deg) {
  const result=calc.calc_double_cos(deg);
  return standard("Косинус двойного угла", "cos 2α=cos²α−sin²α", [["deg","Угол α, °"]], [deg], result);
}

export function solve_half_sin(deg) {
  const result=calc.calc_half_sin(deg);
  return standard("Синус половинного угла", "sin²(α/2)=(1−cosα)/2", [["deg","Угол α, °"]], [deg], result);
}

export function solve_law_sines(a, Adeg, Bdeg) {
  const result=calc.calc_law_sines_side(a, Adeg, Bdeg);
  return standard("Теорема синусов", "a/sin A=b/sin B", [["a","Сторона a"],["Adeg","Угол A, °"],["Bdeg","Угол B, °"]], [a, Adeg, Bdeg], result);
}

export function solve_law_cosines(a, b, gammaDeg) {
  const result=calc.calc_law_cosines_side(a, b, gammaDeg);
  return standard("Теорема косинусов — сторона", "c²=a²+b²−2ab cosγ", [["a","a"],["b","b"],["gammaDeg","Угол γ, °"]], [a, b, gammaDeg], result);
}

export function solve_triangle_area_sin(a, b, gammaDeg) {
  const result=calc.calc_triangle_area_sin(a, b, gammaDeg);
  return standard("Площадь через синус угла", "S=ab sinγ/2", [["a","a"],["b","b"],["gammaDeg","γ, °"]], [a, b, gammaDeg], result);
}

export function solve_arcsin(x) {
  const result=calc.calc_arcsin_deg(x);
  return standard("Арксинус", "x₀=arcsin a", [["x","a"]], [x], result);
}

export function solve_arccos(x) {
  const result=calc.calc_arccos_deg(x);
  return standard("Арккосинус", "x₀=arccos a", [["x","a"]], [x], result);
}

export function solve_arctan(x) {
  const result=calc.calc_arctan_deg(x);
  return standard("Арктангенс", "x₀=arctan a", [["x","a"]], [x], result);
}

export function solve_cot_from_sin_cos(sinA, cosA) {
  const result=calc.calc_cotangent_from_sin_cos(sinA, cosA);
  return standard("Котангенс по sin и cos", "ctgα=cosα/sinα", [["sinA","sin α"],["cosA","cos α"]], [sinA, cosA], result);
}
