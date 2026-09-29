export const SUBJECT_KEY='math';
export const SECTION_KEY="elementary/progressions";
export const BRANCH="elementary";
export const FORMULAS = {
  ap_n: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Арифметическая прогрессия — n-й член",
    description: "n-й член арифметической прогрессии.",
    formula_view: "aₙ=a₁+(n−1)d",
    cases: {
      1: {name:"Найти aₙ", inputs:[["a1","a₁"],["d","d"],["n","n"]], output:"aₙ", function:"calc_ap_n", solver:"solve_ap_n"}
    }
  },
  ap_sum: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Арифметическая прогрессия — сумма",
    description: "Сумма первых n членов.",
    formula_view: "Sₙ=n(2a₁+(n−1)d)/2",
    cases: {
      1: {name:"Найти Sₙ", inputs:[["a1","a₁"],["d","d"],["n","n"]], output:"Sₙ", function:"calc_ap_sum", solver:"solve_ap_sum"}
    }
  },
  ap_difference: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Разность арифметической прогрессии",
    description: "Разность по двум членам.",
    formula_view: "d=(aₙ−a₁)/(n−1)",
    cases: {
      1: {name:"Найти d", inputs:[["a1","aₙ? Первый член a₁"],["an","n-й член aₙ"],["n","Номер n"]], output:"d", function:"calc_ap_d", solver:"solve_ap_d"}
    }
  },
  gp_n: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Геометрическая прогрессия — n-й член",
    description: "n-й член геометрической прогрессии.",
    formula_view: "bₙ=b₁qⁿ⁻¹",
    cases: {
      1: {name:"Найти bₙ", inputs:[["b1","b₁"],["q","q"],["n","n"]], output:"bₙ", function:"calc_gp_n", solver:"solve_gp_n"}
    }
  },
  gp_sum: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Геометрическая прогрессия — сумма",
    description: "Сумма первых n членов.",
    formula_view: "Sₙ=b₁(qⁿ−1)/(q−1)",
    cases: {
      1: {name:"Найти Sₙ", inputs:[["b1","b₁"],["q","q"],["n","n"]], output:"Sₙ", function:"calc_gp_sum", solver:"solve_gp_sum"}
    }
  },
  gp_infinite: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Бесконечная геометрическая прогрессия",
    description: "Сумма при |q|<1.",
    formula_view: "S=b₁/(1−q)",
    cases: {
      1: {name:"Найти S", inputs:[["b1","b₁"],["q","q"]], output:"S", function:"calc_gp_infinite", solver:"solve_gp_infinite"}
    }
  },
  gp_ratio: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Знаменатель прогрессии",
    description: "Один из возможных действительных вариантов q по b₁,bₙ,n.",
    formula_view: "q=(bₙ/b₁)^(1/(n−1))",
    cases: {
      1: {name:"Найти q", inputs:[["b1","b₁"],["bn","bₙ"],["n","n"]], output:"q", function:"calc_gp_q", solver:"solve_gp_q"}
    }
  },
  compound_interest: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Сложные проценты",
    description: "Рост суммы при n начислениях в год.",
    formula_view: "A=P(1+r/n)^(nt)",
    cases: {
      1: {name:"Найти A", inputs:[["P","Начальная сумма P"],["r","Ставка r (доля)"],["n","Начислений в год n"],["t","Время t"]], output:"A", function:"calc_compound_interest", solver:"solve_compound_interest"}
    }
  },
  continuous_interest: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Непрерывное начисление",
    description: "Непрерывный экспоненциальный рост.",
    formula_view: "A=Pe^(rt)",
    cases: {
      1: {name:"Найти A", inputs:[["P","P"],["r","r"],["t","t"]], output:"A", function:"calc_continuous_interest", solver:"solve_continuous_interest"}
    }
  },
  harmonic_sequence: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Гармоническая последовательность",
    description: "Модель 1/(a₁⁻¹+(n−1)d).",
    formula_view: "aₙ=1/(1/a₁+(n−1)d)",
    cases: {
      1: {name:"Найти aₙ", inputs:[["a1","a₁"],["d","d"],["n","n"]], output:"aₙ", function:"calc_harmonic_term", solver:"solve_harmonic_term"}
    }
  },
};