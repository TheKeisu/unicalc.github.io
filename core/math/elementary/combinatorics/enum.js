export const SUBJECT_KEY='math';
export const SECTION_KEY="elementary/combinatorics";
export const BRANCH="elementary";
export const FORMULAS = {
  permutations: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Перестановки",
    description: "Число перестановок n различных элементов.",
    formula_view: "Pₙ=n!",
    cases: {
      1: {name:"Найти Pₙ", inputs:[["n","n"]], output:"Pₙ", function:"calc_perm", solver:"solve_perm"}
    }
  },
  arrangements: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Размещения",
    description: "Число размещений из n по k без повторений.",
    formula_view: "Aₙᵏ=n!/(n−k)!",
    cases: {
      1: {name:"Найти Aₙᵏ", inputs:[["n","n"],["k","k"]], output:"Aₙᵏ", function:"calc_arrangement", solver:"solve_arrangement"}
    }
  },
  combinations: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Сочетания",
    description: "Число сочетаний из n по k.",
    formula_view: "Cₙᵏ=n!/(k!(n−k)!)",
    cases: {
      1: {name:"Найти Cₙᵏ", inputs:[["n","n"],["k","k"]], output:"Cₙᵏ", function:"calc_combination", solver:"solve_combination"}
    }
  },
  arrangements_rep: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Размещения с повторениями",
    description: "Размещения длины k из n типов.",
    formula_view: "Āₙᵏ=nᵏ",
    cases: {
      1: {name:"Найти число", inputs:[["n","n"],["k","k"]], output:"Результат", function:"calc_arrangement_rep", solver:"solve_arrangement_rep"}
    }
  },
  combinations_rep: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Сочетания с повторениями",
    description: "Сочетания с повторениями.",
    formula_view: "C̄ₙᵏ=C(n+k−1,k)",
    cases: {
      1: {name:"Найти число", inputs:[["n","n"],["k","k"]], output:"Результат", function:"calc_combination_rep", solver:"solve_combination_rep"}
    }
  },
  binomial_coefficient: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Биномиальный коэффициент",
    description: "Коэффициент Cₙᵏ в биноме Ньютона.",
    formula_view: "Cₙᵏ=n!/(k!(n−k)!)",
    cases: {
      1: {name:"Найти Cₙᵏ", inputs:[["n","n"],["k","k"]], output:"Cₙᵏ", function:"calc_binomial_coefficient", solver:"solve_binomial_coefficient"}
    }
  },
};