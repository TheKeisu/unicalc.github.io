// Математический реестр: каждый раздел содержит calculations.js, enum.js и solver.js.
import * as s0Calc from './elementary/arithmetic/calculations.js';
import * as s0Solver from './elementary/arithmetic/solver.js';
import { FORMULAS as s0Formulas } from './elementary/arithmetic/enum.js';

import * as s1Calc from './elementary/algebra/calculations.js';
import * as s1Solver from './elementary/algebra/solver.js';
import { FORMULAS as s1Formulas } from './elementary/algebra/enum.js';

import * as s2Calc from './elementary/equations_inequalities/calculations.js';
import * as s2Solver from './elementary/equations_inequalities/solver.js';
import { FORMULAS as s2Formulas } from './elementary/equations_inequalities/enum.js';

import * as s3Calc from './elementary/progressions/calculations.js';
import * as s3Solver from './elementary/progressions/solver.js';
import { FORMULAS as s3Formulas } from './elementary/progressions/enum.js';

import * as s4Calc from './elementary/combinatorics/calculations.js';
import * as s4Solver from './elementary/combinatorics/solver.js';
import { FORMULAS as s4Formulas } from './elementary/combinatorics/enum.js';

import * as s5Calc from './elementary/planimetry/calculations.js';
import * as s5Solver from './elementary/planimetry/solver.js';
import { FORMULAS as s5Formulas } from './elementary/planimetry/enum.js';

import * as s6Calc from './elementary/stereometry/calculations.js';
import * as s6Solver from './elementary/stereometry/solver.js';
import { FORMULAS as s6Formulas } from './elementary/stereometry/enum.js';

import * as s7Calc from './elementary/trigonometry/calculations.js';
import * as s7Solver from './elementary/trigonometry/solver.js';
import { FORMULAS as s7Formulas } from './elementary/trigonometry/enum.js';

import * as s8Calc from './elementary/functions_graphs/calculations.js';
import * as s8Solver from './elementary/functions_graphs/solver.js';
import { FORMULAS as s8Formulas } from './elementary/functions_graphs/enum.js';

import * as s9Calc from './higher/analytic_geometry_plane/calculations.js';
import * as s9Solver from './higher/analytic_geometry_plane/solver.js';
import { FORMULAS as s9Formulas } from './higher/analytic_geometry_plane/enum.js';

import * as s10Calc from './higher/analytic_geometry_space/calculations.js';
import * as s10Solver from './higher/analytic_geometry_space/solver.js';
import { FORMULAS as s10Formulas } from './higher/analytic_geometry_space/enum.js';

import * as s11Calc from './higher/limits/calculations.js';
import * as s11Solver from './higher/limits/solver.js';
import { FORMULAS as s11Formulas } from './higher/limits/enum.js';

import * as s12Calc from './higher/differential_calculus/calculations.js';
import * as s12Solver from './higher/differential_calculus/solver.js';
import { FORMULAS as s12Formulas } from './higher/differential_calculus/enum.js';

import * as s13Calc from './higher/integral_calculus/calculations.js';
import * as s13Solver from './higher/integral_calculus/solver.js';
import { FORMULAS as s13Formulas } from './higher/integral_calculus/enum.js';

import * as s14Calc from './higher/series_fourier/calculations.js';
import * as s14Solver from './higher/series_fourier/solver.js';
import { FORMULAS as s14Formulas } from './higher/series_fourier/enum.js';

import * as s15Calc from './higher/multivariable/calculations.js';
import * as s15Solver from './higher/multivariable/solver.js';
import { FORMULAS as s15Formulas } from './higher/multivariable/enum.js';

import * as s16Calc from './higher/differential_equations/calculations.js';
import * as s16Solver from './higher/differential_equations/solver.js';
import { FORMULAS as s16Formulas } from './higher/differential_equations/enum.js';

import * as s17Calc from './higher/remarkable_curves/calculations.js';
import * as s17Solver from './higher/remarkable_curves/solver.js';
import { FORMULAS as s17Formulas } from './higher/remarkable_curves/enum.js';

import * as s18Calc from './higher/complex_numbers/calculations.js';
import * as s18Solver from './higher/complex_numbers/solver.js';
import { FORMULAS as s18Formulas } from './higher/complex_numbers/enum.js';

export const MATH_GROUPS = [
  { key:'math_arithmetic', subject:'math', label:"Арифметика", icon:"÷", branch:"elementary", formulas:s0Formulas, calculations:s0Calc, solver:s0Solver, topicLabel:"Арифметика" },
  { key:'math_algebra', subject:'math', label:"Алгебра", icon:"x²", branch:"elementary", formulas:s1Formulas, calculations:s1Calc, solver:s1Solver, topicLabel:"Алгебра" },
  { key:'math_equations_inequalities', subject:'math', label:"Уравнения и неравенства", icon:"=", branch:"elementary", formulas:s2Formulas, calculations:s2Calc, solver:s2Solver, topicLabel:"Уравнения и неравенства" },
  { key:'math_progressions', subject:'math', label:"Последовательности и прогрессии", icon:"Σ", branch:"elementary", formulas:s3Formulas, calculations:s3Calc, solver:s3Solver, topicLabel:"Последовательности и прогрессии" },
  { key:'math_combinatorics', subject:'math', label:"Соединения и комбинаторика", icon:"C", branch:"elementary", formulas:s4Formulas, calculations:s4Calc, solver:s4Solver, topicLabel:"Соединения и комбинаторика" },
  { key:'math_planimetry', subject:'math', label:"Планиметрия", icon:"△", branch:"elementary", formulas:s5Formulas, calculations:s5Calc, solver:s5Solver, topicLabel:"Планиметрия" },
  { key:'math_stereometry', subject:'math', label:"Стереометрия", icon:"◇", branch:"elementary", formulas:s6Formulas, calculations:s6Calc, solver:s6Solver, topicLabel:"Стереометрия" },
  { key:'math_trigonometry', subject:'math', label:"Тригонометрия", icon:"sin", branch:"elementary", formulas:s7Formulas, calculations:s7Calc, solver:s7Solver, topicLabel:"Тригонометрия" },
  { key:'math_functions_graphs', subject:'math', label:"Функции и графики", icon:"f(x)", branch:"elementary", formulas:s8Formulas, calculations:s8Calc, solver:s8Solver, topicLabel:"Функции и графики" },
  { key:'math_analytic_geometry_plane', subject:'math', label:"Аналитическая геометрия на плоскости", icon:"xy", branch:"higher", formulas:s9Formulas, calculations:s9Calc, solver:s9Solver, topicLabel:"Аналитическая геометрия на плоскости" },
  { key:'math_analytic_geometry_space', subject:'math', label:"Аналитическая геометрия в пространстве", icon:"xyz", branch:"higher", formulas:s10Formulas, calculations:s10Calc, solver:s10Solver, topicLabel:"Аналитическая геометрия в пространстве" },
  { key:'math_limits', subject:'math', label:"Основы математического анализа — пределы", icon:"lim", branch:"higher", formulas:s11Formulas, calculations:s11Calc, solver:s11Solver, topicLabel:"Основы математического анализа — пределы" },
  { key:'math_differential_calculus', subject:'math', label:"Дифференциальное исчисление", icon:"f′", branch:"higher", formulas:s12Formulas, calculations:s12Calc, solver:s12Solver, topicLabel:"Дифференциальное исчисление" },
  { key:'math_integral_calculus', subject:'math', label:"Интегральное исчисление", icon:"∫", branch:"higher", formulas:s13Formulas, calculations:s13Calc, solver:s13Solver, topicLabel:"Интегральное исчисление" },
  { key:'math_series_fourier', subject:'math', label:"Ряды, степенные и ряды Фурье", icon:"Σ", branch:"higher", formulas:s14Formulas, calculations:s14Calc, solver:s14Solver, topicLabel:"Ряды, степенные и ряды Фурье" },
  { key:'math_multivariable', subject:'math', label:"Функции нескольких переменных", icon:"∂", branch:"higher", formulas:s15Formulas, calculations:s15Calc, solver:s15Solver, topicLabel:"Функции нескольких переменных" },
  { key:'math_differential_equations', subject:'math', label:"Дифференциальные уравнения", icon:"y′", branch:"higher", formulas:s16Formulas, calculations:s16Calc, solver:s16Solver, topicLabel:"Дифференциальные уравнения" },
  { key:'math_remarkable_curves', subject:'math', label:"Некоторые замечательные кривые", icon:"⌁", branch:"higher", formulas:s17Formulas, calculations:s17Calc, solver:s17Solver, topicLabel:"Некоторые замечательные кривые" },
  { key:'math_complex_numbers', subject:'math', label:"Комплексные числа", icon:"i", branch:"higher", formulas:s18Formulas, calculations:s18Calc, solver:s18Solver, topicLabel:"Комплексные числа" },
];