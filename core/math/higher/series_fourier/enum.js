export const SUBJECT_KEY='math';
export const SECTION_KEY="higher/series_fourier";
export const BRANCH="higher";
export const FORMULAS = {
  geometric_series: {
    subject_key: 'математика',
    branch: "higher",
    title: "Геометрический ряд",
    description: "Сумма бесконечного геометрического ряда.",
    formula_view: "S=a/(1−q)",
    cases: {
      1: {name:"Найти S", inputs:[["a","a₁"],["q","q"]], output:"S", function:"calc_geom_sum", solver:"solve_geom_sum"}
    }
  },
  geometric_remainder: {
    subject_key: 'математика',
    branch: "higher",
    title: "Остаток геометрического ряда",
    description: "Оценка остатка после n членов.",
    formula_view: "|Rₙ|≤|a||q|ⁿ/(1−|q|)",
    cases: {
      1: {name:"Оценить Rₙ", inputs:[["a","a₁"],["q","q"],["n","n"]], output:"|Rₙ|", function:"calc_geom_remainder", solver:"solve_geom_remainder"}
    }
  },
  p_series: {
    subject_key: 'математика',
    branch: "higher",
    title: "p-ряд",
    description: "Проверка классического критерия сходимости.",
    formula_view: "Σ1/nᵖ",
    cases: {
      1: {name:"Определить сходимость", inputs:[["p","p"]], output:"Вывод", function:"calc_p_series_convergence", solver:"solve_p_series"}
    }
  },
  ratio_test: {
    subject_key: 'математика',
    branch: "higher",
    title: "Признак Даламбера",
    description: "Проверка по L=lim|aₙ₊₁/aₙ|.",
    formula_view: "L<1 — сходится, L>1 — расходится",
    cases: {
      1: {name:"Определить сходимость", inputs:[["L","L"]], output:"Вывод", function:"calc_ratio_test", solver:"solve_ratio_test"}
    }
  },
  taylor_term: {
    subject_key: 'математика',
    branch: "higher",
    title: "Член ряда Тейлора",
    description: "n-й член по значению n-й производной.",
    formula_view: "Tₙ=f⁽ⁿ⁾(x₀)hⁿ/n!",
    cases: {
      1: {name:"Найти Tₙ", inputs:[["deriv","f⁽ⁿ⁾(x₀)"],["dx","h"],["n","n"]], output:"Tₙ", function:"calc_taylor_term", solver:"solve_taylor_term"}
    }
  },
  maclaurin_exp: {
    subject_key: 'математика',
    branch: "higher",
    title: "Член ряда eˣ",
    description: "n-й член ряда Маклорена eˣ.",
    formula_view: "Tₙ=xⁿ/n!",
    cases: {
      1: {name:"Найти Tₙ", inputs:[["x","x"],["n","n"]], output:"Tₙ", function:"calc_maclaurin_exp_term", solver:"solve_maclaurin_exp"}
    }
  },
  maclaurin_sin: {
    subject_key: 'математика',
    branch: "higher",
    title: "Член ряда sin x",
    description: "Член ряда sin x для соответствующего порядка.",
    formula_view: "Tₖ=(−1)ᵏx²ᵏ⁺¹/(2k+1)!",
    cases: {
      1: {name:"Найти T", inputs:[["x","x"],["n","Чётный индекс n=2k"]], output:"T", function:"calc_maclaurin_sin_term", solver:"solve_maclaurin_sin"}
    }
  },
  maclaurin_cos: {
    subject_key: 'математика',
    branch: "higher",
    title: "Член ряда cos x",
    description: "Член ряда cos x.",
    formula_view: "Tₖ=(−1)ᵏx²ᵏ/(2k)!",
    cases: {
      1: {name:"Найти T", inputs:[["x","x"],["n","Чётный индекс n=2k"]], output:"T", function:"calc_maclaurin_cos_term", solver:"solve_maclaurin_cos"}
    }
  },
  alternating_error: {
    subject_key: 'математика',
    branch: "higher",
    title: "Оценка по Лейбницу",
    description: "Ошибка знакопеременного ряда не больше следующего члена.",
    formula_view: "|Rₙ|≤|aₙ₊₁|",
    cases: {
      1: {name:"Оценить ошибку", inputs:[["nextTerm","Следующий член"]], output:"Ошибка", function:"calc_alternating_error", solver:"solve_alternating_error"}
    }
  },
  fourier_an: {
    subject_key: 'математика',
    branch: "higher",
    title: "Коэффициент Фурье aₙ",
    description: "Серийный коэффициент через уже вычисленный интеграл.",
    formula_view: "aₙ=(1/L)∫f(x)cos(nx)dx",
    cases: {
      1: {name:"Найти aₙ", inputs:[["L","Полупериод L"],["integral","Значение интеграла"]], output:"aₙ", function:"calc_fourier_an", solver:"solve_fourier_an"}
    }
  },
  fourier_bn: {
    subject_key: 'математика',
    branch: "higher",
    title: "Коэффициент Фурье bₙ",
    description: "Серийный коэффициент через интеграл.",
    formula_view: "bₙ=(1/L)∫f(x)sin(nx)dx",
    cases: {
      1: {name:"Найти bₙ", inputs:[["L","Полупериод L"],["integral","Значение интеграла"]], output:"bₙ", function:"calc_fourier_bn", solver:"solve_fourier_bn"}
    }
  },
};