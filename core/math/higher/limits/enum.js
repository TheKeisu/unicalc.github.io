export const SUBJECT_KEY='math';
export const SECTION_KEY="higher/limits";
export const BRANCH="higher";
export const FORMULAS = {
  sin_over_x: {
    subject_key: 'математика',
    branch: "higher",
    title: "Первый замечательный предел",
    description: "При x→0.",
    formula_view: "lim sinx/x=1",
    cases: {
      1: {name:"Найти предел", inputs:[["dummy","Ненулевой параметр"]], output:"Предел", function:"calc_lim_sin_over_x", solver:"solve_lim_sin_over_x"}
    }
  },
  one_minus_cos_over_x2: {
    subject_key: 'математика',
    branch: "higher",
    title: "Второй замечательный предел",
    description: "При x→0.",
    formula_view: "lim(1−cosx)/x²=1/2",
    cases: {
      1: {name:"Найти предел", inputs:[["dummy","Параметр"]], output:"Предел", function:"calc_lim_one_minus_cos", solver:"solve_lim_one_minus_cos"}
    }
  },
  exp_minus_one: {
    subject_key: 'математика',
    branch: "higher",
    title: "Экспоненциальный предел",
    description: "При x→0.",
    formula_view: "lim(eˣ−1)/x=1",
    cases: {
      1: {name:"Найти предел", inputs:[["dummy","Параметр"]], output:"Предел", function:"calc_lim_exp_minus1", solver:"solve_lim_exp_minus1"}
    }
  },
  ln_one_plus_x: {
    subject_key: 'математика',
    branch: "higher",
    title: "Логарифмический предел",
    description: "При x→0.",
    formula_view: "lim ln(1+x)/x=1",
    cases: {
      1: {name:"Найти предел", inputs:[["dummy","Параметр"]], output:"Предел", function:"calc_lim_ln1px", solver:"solve_lim_ln1px"}
    }
  },
  x_power_zero: {
    subject_key: 'математика',
    branch: "higher",
    title: "Степенной предел",
    description: "Для n>0 при x→0.",
    formula_view: "lim xⁿ=0",
    cases: {
      1: {name:"Найти предел", inputs:[["n","n>0"]], output:"Предел", function:"calc_lim_power_zero", solver:"solve_lim_power_zero"}
    }
  },
  geometric_limit: {
    subject_key: 'математика',
    branch: "higher",
    title: "Предел qⁿ",
    description: "При n→∞ и |q|<1.",
    formula_view: "lim qⁿ=0",
    cases: {
      1: {name:"Найти предел", inputs:[["q","q"]], output:"Предел", function:"calc_lim_geometric", solver:"solve_lim_geometric"}
    }
  },
  continuous_function_limit: {
    subject_key: 'математика',
    branch: "higher",
    title: "Предел непрерывной линейной функции",
    description: "Подстановка для линейной функции.",
    formula_view: "lim(ax+b)=ax₀+b",
    cases: {
      1: {name:"Найти предел", inputs:[["a","a"],["b","b"],["x0","x₀"]], output:"Предел", function:"calc_lim_rational_at", solver:"solve_lim_rational_at"}
    }
  },
};