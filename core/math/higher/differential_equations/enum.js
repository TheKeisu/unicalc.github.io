export const SUBJECT_KEY='math';
export const SECTION_KEY="higher/differential_equations";
export const BRANCH="higher";
export const FORMULAS = {
  exp_ode: {
    subject_key: 'математика',
    branch: "higher",
    title: "y′=ky",
    description: "Начальная задача y′=ky, y(x₀)=y₀.",
    formula_view: "y=y₀eᵏ⁽ˣ⁻ˣ⁰⁾",
    cases: {
      1: {name:"Найти y", inputs:[["y0","y₀"],["k","k"],["x","x"],["x0","x₀"]], output:"y(x)", function:"calc_exp_ode", solver:"solve_exp_ode", graphFunction:"graph_exp_ode", graphArgs:[0,1,3]}
    }
  },
  linear_ode: {
    subject_key: 'математика',
    branch: "higher",
    title: "y′+ay=b",
    description: "Линейное ОДУ с постоянными коэффициентами.",
    formula_view: "y=b/a+(y₀−b/a)e⁻ᵃ⁽ˣ⁻ˣ⁰⁾",
    cases: {
      1: {name:"Найти y", inputs:[["y0","y₀"],["a","a"],["b","b"],["x","x"],["x0","x₀"]], output:"y(x)", function:"calc_linear_ode", solver:"solve_linear_ode"}
    }
  },
  logistic: {
    subject_key: 'математика',
    branch: "higher",
    title: "Логистическое уравнение",
    description: "Решение y′=ry(1−y/K).",
    formula_view: "y=K/(1+Ae⁻ʳ⁽ˣ⁻ˣ⁰⁾)",
    cases: {
      1: {name:"Найти y", inputs:[["K","K"],["y0","y₀"],["r","r"],["x","x"],["x0","x₀"]], output:"y(x)", function:"calc_logistic", solver:"solve_logistic"}
    }
  },
  characteristic_roots: {
    subject_key: 'математика',
    branch: "higher",
    title: "Характеристические корни",
    description: "Корни aλ²+bλ+c=0.",
    formula_view: "λ₁,₂=(−b±√D)/(2a)",
    cases: {
      1: {name:"Найти λ", inputs:[["a","a"],["b","b"],["c","c"]], output:"λ", function:"calc_char_roots", solver:"solve_char_roots"}
    }
  },
  oscillator_frequency: {
    subject_key: 'математика',
    branch: "higher",
    title: "Собственная частота",
    description: "ω для a y″+c y=0 при c/a>0.",
    formula_view: "ω=√(c/a)",
    cases: {
      1: {name:"Найти ω", inputs:[["a","a"],["c","c"]], output:"ω", function:"calc_omega", solver:"solve_omega"}
    }
  },
  average_slope: {
    subject_key: 'математика',
    branch: "higher",
    title: "Средняя скорость изменения",
    description: "Среднее отношение приращения y к приращению x.",
    formula_view: "k≈(y₂−y₁)/Δx",
    cases: {
      1: {name:"Найти k", inputs:[["y1","y₁"],["y0","y₀"],["dt","Δx"]], output:"k", function:"calc_linear_odepart", solver:"solve_average_slope"}
    }
  },
};