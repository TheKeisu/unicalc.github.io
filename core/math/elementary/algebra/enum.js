export const SUBJECT_KEY='math';
export const SECTION_KEY="elementary/algebra";
export const BRANCH="elementary";
export const FORMULAS = {
  square_sum: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Квадрат суммы",
    description: "Первая формула сокращённого умножения.",
    formula_view: "(a+b)² = a²+2ab+b²",
    cases: {
      1: {name:"Найти значение", inputs:[["a","a"],["b","b"]], output:"Значение", function:"calc_square_sum", solver:"solve_square_sum"}
    }
  },
  square_diff: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Квадрат разности",
    description: "Формула квадрата разности.",
    formula_view: "(a−b)² = a²−2ab+b²",
    cases: {
      1: {name:"Найти значение", inputs:[["a","a"],["b","b"]], output:"Значение", function:"calc_square_diff", solver:"solve_square_diff"}
    }
  },
  difference_squares: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Разность квадратов",
    description: "Разложение разности квадратов.",
    formula_view: "a²−b²=(a−b)(a+b)",
    cases: {
      1: {name:"Найти значение", inputs:[["a","a"],["b","b"]], output:"Значение", function:"calc_diff_squares", solver:"solve_difference_squares"}
    }
  },
  cube_sum: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Куб суммы",
    description: "Разложение куба суммы.",
    formula_view: "(a+b)³=a³+3a²b+3ab²+b³",
    cases: {
      1: {name:"Найти значение", inputs:[["a","a"],["b","b"]], output:"Значение", function:"calc_cube_sum", solver:"solve_cube_sum"}
    }
  },
  cube_diff: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Куб разности",
    description: "Разложение куба разности.",
    formula_view: "(a−b)³=a³−3a²b+3ab²−b³",
    cases: {
      1: {name:"Найти значение", inputs:[["a","a"],["b","b"]], output:"Значение", function:"calc_cube_diff", solver:"solve_cube_diff"}
    }
  },
  sum_cubes: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Сумма кубов",
    description: "Сумма кубов.",
    formula_view: "a³+b³=(a+b)(a²−ab+b²)",
    cases: {
      1: {name:"Найти значение", inputs:[["a","a"],["b","b"]], output:"Значение", function:"calc_sum_cubes", solver:"solve_sum_cubes"}
    }
  },
  difference_cubes: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Разность кубов",
    description: "Разность кубов.",
    formula_view: "a³−b³=(a−b)(a²+ab+b²)",
    cases: {
      1: {name:"Найти значение", inputs:[["a","a"],["b","b"]], output:"Значение", function:"calc_diff_cubes", solver:"solve_difference_cubes"}
    }
  },
  linear_equation: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Линейное уравнение",
    description: "Решение ax+b=0.",
    formula_view: "x=−b/a",
    cases: {
      1: {name:"Найти x", inputs:[["a","a"],["b","b"]], output:"x", function:"calc_linear_root", solver:"solve_linear_root"}
    }
  },
  discriminant: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Дискриминант",
    description: "Дискриминант квадратного уравнения.",
    formula_view: "D=b²−4ac",
    cases: {
      1: {name:"Найти D", inputs:[["a","a"],["b","b"],["c","c"]], output:"D", function:"calc_discriminant", solver:"solve_discriminant"}
    }
  },
  quadratic_equation: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Квадратное уравнение",
    description: "Корни ax²+bx+c=0.",
    formula_view: "x₁,₂=(−b±√D)/(2a)",
    cases: {
      1: {name:"Найти корни", inputs:[["a","a"],["b","b"],["c","c"]], output:"Корни", function:"calc_quadratic_roots", solver:"solve_quadratic_roots"}
    }
  },
  vieta_sum: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Теорема Виета — сумма",
    description: "Сумма корней приведённого/общего квадратного уравнения.",
    formula_view: "x₁+x₂=−b/a",
    cases: {
      1: {name:"Найти сумму", inputs:[["a","a"],["b","b"]], output:"Сумма", function:"calc_vieta_sum", solver:"solve_vieta_sum"}
    }
  },
  vieta_product: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Теорема Виета — произведение",
    description: "Произведение корней.",
    formula_view: "x₁x₂=c/a",
    cases: {
      1: {name:"Найти произведение", inputs:[["a","a"],["c","c"]], output:"Произведение", function:"calc_vieta_product", solver:"solve_vieta_product"}
    }
  },
  cramer_system: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Система 2×2 — метод Крамера",
    description: "Решение системы a₁x+b₁y=c₁, a₂x+b₂y=c₂.",
    formula_view: "D=a₁b₂−a₂b₁",
    cases: {
      1: {name:"Найти x", inputs:[["a1","a₁"],["b1","b₁"],["c1","c₁"],["a2","a₂"],["b2","b₂"],["c2","c₂"]], output:"x", function:"calc_cramer_x", solver:"solve_cramer_x"},
      2: {name:"Найти y", inputs:[["a1","a₁"],["b1","b₁"],["c1","c₁"],["a2","a₂"],["b2","b₂"],["c2","c₂"]], output:"y", function:"calc_cramer_y", solver:"solve_cramer_y"}
    }
  },
  power_product: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Произведение степеней",
    description: "Правило произведения степеней с одинаковым основанием.",
    formula_view: "aᵐaⁿ=aᵐ⁺ⁿ",
    cases: {
      1: {name:"Найти результат", inputs:[["a","a"],["m","m"],["n","n"]], output:"Результат", function:"calc_power_product", solver:"solve_power_product"}
    }
  },
  power_quotient: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Частное степеней",
    description: "Правило деления степеней.",
    formula_view: "aᵐ/aⁿ=aᵐ⁻ⁿ",
    cases: {
      1: {name:"Найти результат", inputs:[["a","a"],["m","m"],["n","n"]], output:"Результат", function:"calc_power_quotient", solver:"solve_power_quotient"}
    }
  },
  power_of_power: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Степень степени",
    description: "Правило степени степени.",
    formula_view: "(aᵐ)ⁿ=aᵐⁿ",
    cases: {
      1: {name:"Найти результат", inputs:[["a","a"],["m","m"],["n","n"]], output:"Результат", function:"calc_power_of_power", solver:"solve_power_of_power"}
    }
  },
  root_product: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Произведение корней",
    description: "Правило произведения квадратных корней.",
    formula_view: "√a√b=√(ab)",
    cases: {
      1: {name:"Найти результат", inputs:[["a","a"],["b","b"]], output:"Результат", function:"calc_root_product", solver:"solve_root_product"}
    }
  },
  root_quotient: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Частное корней",
    description: "Правило частного квадратных корней.",
    formula_view: "√a/√b=√(a/b)",
    cases: {
      1: {name:"Найти результат", inputs:[["a","a"],["b","b"]], output:"Результат", function:"calc_root_quotient", solver:"solve_root_quotient"}
    }
  },
  logarithm: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Логарифм",
    description: "Логарифм по произвольному основанию.",
    formula_view: "logₐx=ln x/ln a",
    cases: {
      1: {name:"Найти logₐx", inputs:[["base","Основание a"],["x","Аргумент x"]], output:"Логарифм", function:"calc_log", solver:"solve_log"}
    }
  },
  natural_log: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Натуральный логарифм",
    description: "Натуральный логарифм.",
    formula_view: "ln x",
    cases: {
      1: {name:"Найти ln x", inputs:[["x","Аргумент x"]], output:"ln x", function:"calc_ln", solver:"solve_ln"}
    }
  },
  exponential: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Показательная функция",
    description: "Вычисление eˣ.",
    formula_view: "eˣ",
    cases: {
      1: {name:"Найти eˣ", inputs:[["x","x"]], output:"eˣ", function:"calc_exp", solver:"solve_exp"}
    }
  },
  log_base_change: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Переход к основанию",
    description: "Формула перехода к новому основанию.",
    formula_view: "log_b x=ln x/ln b",
    cases: {
      1: {name:"Найти log_bx", inputs:[["x","Аргумент x"],["newBase","Новое основание b"]], output:"Логарифм", function:"calc_log_base_change", solver:"solve_log_base_change"}
    }
  },
  binomial_term: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Член бинома Ньютона",
    description: "k-й член разложения (a+b)ⁿ.",
    formula_view: "Tₖ=C(n,k)aⁿ⁻ᵏbᵏ",
    cases: {
      1: {name:"Найти Tₖ", inputs:[["n","n"],["k","k"],["a","a"],["b","b"]], output:"Член бинома", function:"calc_binomial_term", solver:"solve_binomial_term"}
    }
  },
};