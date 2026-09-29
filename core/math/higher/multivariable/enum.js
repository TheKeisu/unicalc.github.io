export const SUBJECT_KEY='math';
export const SECTION_KEY="higher/multivariable";
export const BRANCH="higher";
export const FORMULAS = {
  partial_x: {
    subject_key: 'математика',
    branch: "higher",
    title: "Частная производная по x",
    description: "Для f=a xᵐ yⁿ.",
    formula_view: "fₓ=amxᵐ⁻¹yⁿ",
    cases: {
      1: {name:"Найти fₓ", inputs:[["a","a"],["m","m"],["b","b"],["n","n"],["x","x₀"],["y","y₀"]], output:"fₓ", function:"calc_partial_x", solver:"solve_partial_x"}
    }
  },
  partial_y: {
    subject_key: 'математика',
    branch: "higher",
    title: "Частная производная по y",
    description: "Для f=b xᵐ yⁿ.",
    formula_view: "fᵧ=bnxᵐyⁿ⁻¹",
    cases: {
      1: {name:"Найти fᵧ", inputs:[["a","a"],["m","m"],["b","b"],["n","n"],["x","x₀"],["y","y₀"]], output:"fᵧ", function:"calc_partial_y", solver:"solve_partial_y"}
    }
  },
  gradient: {
    subject_key: 'математика',
    branch: "higher",
    title: "Модуль градиента",
    description: "Длина ∇f.",
    formula_view: "|∇f|=√(fₓ²+fᵧ²)",
    cases: {
      1: {name:"Найти |∇f|", inputs:[["fx","fₓ"],["fy","fᵧ"]], output:"|∇f|", function:"calc_gradient_mag", solver:"solve_gradient"}
    }
  },
  directional: {
    subject_key: 'математика',
    branch: "higher",
    title: "Производная по направлению",
    description: "Dᵤf=∇f·u для ненормированного u.",
    formula_view: "Dᵤf=(fₓuₓ+fᵧuᵧ)/|u|",
    cases: {
      1: {name:"Найти Dᵤf", inputs:[["fx","fₓ"],["fy","fᵧ"],["ux","uₓ"],["uy","uᵧ"]], output:"Dᵤf", function:"calc_directional", solver:"solve_directional"}
    }
  },
  tangent_plane: {
    subject_key: 'математика',
    branch: "higher",
    title: "Касательная плоскость",
    description: "Линеаризация поверхности z=f(x,y).",
    formula_view: "z=z₀+fₓ(x−x₀)+fᵧ(y−y₀)",
    cases: {
      1: {name:"Найти z", inputs:[["x0","x₀"],["y0","y₀"],["z0","z₀"],["fx","fₓ"],["fy","fᵧ"],["x","x"],["y","y"]], output:"z", function:"calc_tangent_plane", solver:"solve_tangent_plane"}
    }
  },
  total_differential: {
    subject_key: 'математика',
    branch: "higher",
    title: "Полный дифференциал",
    description: "Первый дифференциал функции двух переменных.",
    formula_view: "df=fₓdx+fᵧdy",
    cases: {
      1: {name:"Найти df", inputs:[["fx","fₓ"],["fy","fᵧ"],["dx","dx"],["dy","dy"]], output:"df", function:"calc_total_diff", solver:"solve_total_diff"}
    }
  },
  hessian_determinant: {
    subject_key: 'математика',
    branch: "higher",
    title: "Определитель Гессиана 2×2",
    description: "Критерий второго порядка.",
    formula_view: "D=fₓₓfᵧᵧ−fₓᵧ²",
    cases: {
      1: {name:"Найти D", inputs:[["fxx","fₓₓ"],["fxy","fₓᵧ"],["fyy","fᵧᵧ"]], output:"D", function:"calc_hessian_det", solver:"solve_hessian"}
    }
  },
  double_integral_monomial: {
    subject_key: 'математика',
    branch: "higher",
    title: "Двойной интеграл монома",
    description: "Точный интеграл на прямоугольнике.",
    formula_view: "∬ axᵐbyⁿ dxdy",
    cases: {
      1: {name:"Найти ∬", inputs:[["a","a"],["m","m"],["b","b"],["n","n"],["x1","x₁"],["x2","x₂"],["y1","y₁"],["y2","y₂"]], output:"Интеграл", function:"calc_double_monomial", solver:"solve_double_monomial"}
    }
  },
  triple_integral_monomial: {
    subject_key: 'математика',
    branch: "higher",
    title: "Тройной интеграл монома",
    description: "Точный интеграл по прямоугольному параллелепипеду.",
    formula_view: "∭ axᵐbyⁿczᵖ dV",
    cases: {
      1: {name:"Найти ∭", inputs:[["a","a"],["m","m"],["b","b"],["n","n"],["c","c"],["p","p"],["x1","x₁"],["x2","x₂"],["y1","y₁"],["y2","y₂"],["z1","z₁"],["z2","z₂"]], output:"Интеграл", function:"calc_triple_monomial", solver:"solve_triple_monomial"}
    }
  },
  polar_jacobian: {
    subject_key: 'математика',
    branch: "higher",
    title: "Якобиан полярных координат",
    description: "Переход dxdy=r drdφ.",
    formula_view: "|J|=r",
    cases: {
      1: {name:"Найти |J|", inputs:[["r","r"]], output:"|J|", function:"calc_polar_jacobian", solver:"solve_polar_jacobian"}
    }
  },
  spherical_jacobian: {
    subject_key: 'математика',
    branch: "higher",
    title: "Якобиан сферических координат",
    description: "Объёмный элемент через r и θ.",
    formula_view: "|J|=r² sinθ",
    cases: {
      1: {name:"Найти |J|", inputs:[["r","r"],["thetaDeg","θ, °"]], output:"|J|", function:"calc_spherical_jacobian", solver:"solve_spherical_jacobian"}
    }
  },
};