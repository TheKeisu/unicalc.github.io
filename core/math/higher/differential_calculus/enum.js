export const SUBJECT_KEY='math';
export const SECTION_KEY="higher/differential_calculus";
export const BRANCH="higher";
export const FORMULAS = {
  derivative_power: {
    subject_key: 'математика',
    branch: "higher",
    title: "Производная xⁿ",
    description: "Степенное правило.",
    formula_view: "(axⁿ)′=anxⁿ⁻¹",
    cases: {
      1: {name:"Найти f′", inputs:[["a","a"],["n","n"],["x","x₀"]], output:"f′(x₀)", function:"calc_derivative_power", solver:"solve_derivative_power"}
    }
  },
  derivative_exp: {
    subject_key: 'математика',
    branch: "higher",
    title: "Производная ae^(kx)",
    description: "Производная показательной функции.",
    formula_view: "(aeᵏˣ)′=akeᵏˣ",
    cases: {
      1: {name:"Найти f′", inputs:[["a","a"],["k","k"],["x","x₀"]], output:"f′(x₀)", function:"calc_derivative_exp", solver:"solve_derivative_exp"}
    }
  },
  derivative_ln: {
    subject_key: 'математика',
    branch: "higher",
    title: "Производная a ln x",
    description: "Производная ln x.",
    formula_view: "(a ln x)′=a/x",
    cases: {
      1: {name:"Найти f′", inputs:[["a","a"],["x","x₀"]], output:"f′(x₀)", function:"calc_derivative_ln", solver:"solve_derivative_ln"}
    }
  },
  derivative_sin: {
    subject_key: 'математика',
    branch: "higher",
    title: "Производная a sin(ωx)",
    description: "Правило для сложного аргумента ωx.",
    formula_view: "(a sinωx)′=aωcosωx",
    cases: {
      1: {name:"Найти f′", inputs:[["a","a"],["omega","ω"],["x","x₀"]], output:"f′(x₀)", function:"calc_derivative_sin", solver:"solve_derivative_sin"}
    }
  },
  derivative_cos: {
    subject_key: 'математика',
    branch: "higher",
    title: "Производная a cos(ωx)",
    description: "Производная косинуса.",
    formula_view: "(a cosωx)′=−aωsinωx",
    cases: {
      1: {name:"Найти f′", inputs:[["a","a"],["omega","ω"],["x","x₀"]], output:"f′(x₀)", function:"calc_derivative_cos", solver:"solve_derivative_cos"}
    }
  },
  derivative_tan: {
    subject_key: 'математика',
    branch: "higher",
    title: "Производная tan x",
    description: "Производная тангенса.",
    formula_view: "(a tg x)′=a/cos²x",
    cases: {
      1: {name:"Найти f′", inputs:[["a","a"],["x","x₀"]], output:"f′(x₀)", function:"calc_derivative_tan", solver:"solve_derivative_tan"}
    }
  },
  product_rule: {
    subject_key: 'математика',
    branch: "higher",
    title: "Правило произведения",
    description: "Производная uv.",
    formula_view: "(uv)′=u′v+uv′",
    cases: {
      1: {name:"Найти (uv)′", inputs:[["u","u"],["v","v"],["du","u′"],["dv","v′"]], output:"(uv)′", function:"calc_product_derivative", solver:"solve_product_rule"}
    }
  },
  quotient_rule: {
    subject_key: 'математика',
    branch: "higher",
    title: "Правило частного",
    description: "Производная u/v.",
    formula_view: "(u/v)′=(u′v−uv′)/v²",
    cases: {
      1: {name:"Найти (u/v)′", inputs:[["u","u"],["v","v"],["du","u′"],["dv","v′"]], output:"(u/v)′", function:"calc_quotient_derivative", solver:"solve_quotient_rule"}
    }
  },
  chain_rule_power: {
    subject_key: 'математика',
    branch: "higher",
    title: "Правило цепочки для xⁿ",
    description: "Производная a(g(x))ⁿ по значениям g и g′.",
    formula_view: "(agⁿ)′=an gⁿ⁻¹g′",
    cases: {
      1: {name:"Найти f′", inputs:[["a","a"],["n","n"],["g","g(x₀)"],["dg","g′(x₀)"]], output:"f′", function:"calc_chain_power", solver:"solve_chain_rule"}
    }
  },
  tangent: {
    subject_key: 'математика',
    branch: "higher",
    title: "Касательная",
    description: "Значение касательной в точке x.",
    formula_view: "y=f₀+f′₀(x−x₀)",
    cases: {
      1: {name:"Найти y", inputs:[["x0","x₀"],["f0","f(x₀)"],["df0","f′(x₀)"],["x","x"]], output:"y касательной", function:"calc_tangent", solver:"solve_tangent"}
    }
  },
  normal: {
    subject_key: 'математика',
    branch: "higher",
    title: "Нормаль",
    description: "Значение нормали при f′(x₀)≠0.",
    formula_view: "y=f₀−(x−x₀)/f′₀",
    cases: {
      1: {name:"Найти y", inputs:[["x0","x₀"],["f0","f(x₀)"],["df0","f′(x₀)"],["x","x"]], output:"y нормали", function:"calc_normal", solver:"solve_normal"}
    }
  },
  linear_approx: {
    subject_key: 'математика',
    branch: "higher",
    title: "Линейное приближение",
    description: "Приближение через дифференциал.",
    formula_view: "f(x₀+dx)≈f₀+f′₀dx",
    cases: {
      1: {name:"Найти приближение", inputs:[["f0","f₀"],["df0","f′₀"],["dx","Δx"]], output:"Приближение", function:"calc_linear_approx", solver:"solve_linear_approx"}
    }
  },
  newton_step: {
    subject_key: 'математика',
    branch: "higher",
    title: "Шаг Ньютона",
    description: "Одно уточнение корня.",
    formula_view: "x₁=x₀−f(x₀)/f′(x₀)",
    cases: {
      1: {name:"Найти x₁", inputs:[["x0","x₀"],["f0","f(x₀)"],["df0","f′(x₀)"]], output:"x₁", function:"calc_newton", solver:"solve_newton"}
    }
  },
  curvature: {
    subject_key: 'математика',
    branch: "higher",
    title: "Кривизна графика",
    description: "Кривизна y=f(x).",
    formula_view: "κ=|y″|/(1+(y′)²)^(3/2)",
    cases: {
      1: {name:"Найти κ", inputs:[["dy","y′"],["ddy","y″"]], output:"κ", function:"calc_curvature", solver:"solve_curvature"}
    }
  },
  radius_curvature: {
    subject_key: 'математика',
    branch: "higher",
    title: "Радиус кривизны",
    description: "Радиус кривизны R=1/κ.",
    formula_view: "R=(1+(y′)²)^(3/2)/|y″|",
    cases: {
      1: {name:"Найти R", inputs:[["dy","y′"],["ddy","y″"]], output:"R", function:"calc_radius_curvature", solver:"solve_radius_curvature"}
    }
  },
  differential: {
    subject_key: 'математика',
    branch: "higher",
    title: "Дифференциал",
    description: "df=f′dx.",
    formula_view: "df=f′dx",
    cases: {
      1: {name:"Найти df", inputs:[["df","Производная f′"],["dx","dx"]], output:"df", function:"calc_differential", solver:"solve_differential"}
    }
  },
  second_derivative_power: {
    subject_key: 'математика',
    branch: "higher",
    title: "Вторая производная xⁿ",
    description: "Вторая производная степенной функции.",
    formula_view: "(axⁿ)″=an(n−1)xⁿ⁻²",
    cases: {
      1: {name:"Найти f″", inputs:[["a","a"],["n","n"],["x","x₀"]], output:"f″", function:"calc_second_derivative_power", solver:"solve_second_derivative_power"}
    }
  },
};