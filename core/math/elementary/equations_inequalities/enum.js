export const SUBJECT_KEY='math';
export const SECTION_KEY="elementary/equations_inequalities";
export const BRANCH="elementary";
export const FORMULAS = {
  linear_inequality: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Линейное неравенство",
    description: "Ориентир и направление решения ax+b>0.",
    formula_view: "ax+b>0",
    cases: {
      1: {name:"Найти границу", inputs:[["a","Коэффициент a"],["b","Свободный член b"]], output:"Граница и направление", function:"calc_linear_ineq_bound", solver:"solve_linear_ineq_bound"}
    }
  },
  absolute_value: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Модуль числа",
    description: "Расстояние числа x от точки a на числовой оси.",
    formula_view: "|x−a|",
    cases: {
      1: {name:"Найти модуль", inputs:[["x","x"],["a","a"]], output:"|x−a|", function:"calc_abs_distance", solver:"solve_abs_distance"}
    }
  },
  abs_interval: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Неравенство |x−a|≤r",
    description: "Границы решения простого неравенства с модулем.",
    formula_view: "a−r ≤ x ≤ a+r",
    cases: {
      1: {name:"Найти интервал", inputs:[["a","Центр a"],["r","Радиус r"]], output:"Интервал", function:"calc_abs_le_radius", solver:"solve_abs_interval"}
    }
  },
  exponential_equation: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Показательное уравнение",
    description: "Решение aˣ=b.",
    formula_view: "x=logₐb",
    cases: {
      1: {name:"Найти x", inputs:[["base","Основание a"],["value","Правая часть b"]], output:"x", function:"calc_exp_equation", solver:"solve_exp_equation"}
    }
  },
  logarithmic_equation: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Логарифмическое уравнение",
    description: "Решение logₐx=b.",
    formula_view: "x=aᵇ",
    cases: {
      1: {name:"Найти x", inputs:[["base","Основание a"],["value","Правая часть b"]], output:"x", function:"calc_log_equation", solver:"solve_log_equation"}
    }
  },
  square_root_equation: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Иррациональное уравнение √x=a",
    description: "Решение простейшего иррационального уравнения.",
    formula_view: "x=a², a≥0",
    cases: {
      1: {name:"Найти x", inputs:[["a","Правая часть a"]], output:"x", function:"calc_sqrt_equation", solver:"solve_sqrt_equation"}
    }
  },
  reciprocal_equation: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Дробно-линейное уравнение",
    description: "Решение ax+b=0 в простейшей форме.",
    formula_view: "ax+b=0",
    cases: {
      1: {name:"Найти x", inputs:[["a","a"],["b","b"]], output:"x", function:"calc_reciprocal_equation", solver:"solve_linear_root"}
    }
  },
  sin_equation: {
    subject_key: 'математика',
    branch: "elementary",
    title: "sin x = a",
    description: "Главное значение arcsin для решения простейшего уравнения.",
    formula_view: "x₀=arcsin a",
    cases: {
      1: {name:"Найти x₀", inputs:[["value","a"]], output:"x₀, °", function:"calc_sin_eq", solver:"solve_sin_eq", SI:"°"}
    }
  },
  cos_equation: {
    subject_key: 'математика',
    branch: "elementary",
    title: "cos x = a",
    description: "Главное значение arccos.",
    formula_view: "x₀=arccos a",
    cases: {
      1: {name:"Найти x₀", inputs:[["value","a"]], output:"x₀, °", function:"calc_cos_eq", solver:"solve_cos_eq", SI:"°"}
    }
  },
  tan_equation: {
    subject_key: 'математика',
    branch: "elementary",
    title: "tg x = a",
    description: "Главное значение arctg.",
    formula_view: "x₀=arctg a",
    cases: {
      1: {name:"Найти x₀", inputs:[["value","a"]], output:"x₀, °", function:"calc_tan_eq", solver:"solve_tan_eq", SI:"°"}
    }
  },
};