export const SUBJECT_KEY='math';
export const SECTION_KEY="higher/remarkable_curves";
export const BRANCH="higher";
export const FORMULAS = {
  cycloid_x: {
    subject_key: 'математика',
    branch: "higher",
    title: "Циклоида — x",
    description: "Параметрическая координата циклоида.",
    formula_view: "x=a(t−sin t)",
    cases: {
      1: {name:"Найти x", inputs:[["a","a"],["t","t, рад"]], output:"x", function:"calc_cycloid_x", solver:"solve_cycloid_x", graphFunction:"graph_cycloid"}
    }
  },
  cycloid_y: {
    subject_key: 'математика',
    branch: "higher",
    title: "Циклоида — y",
    description: "Параметрическая координата.",
    formula_view: "y=a(1−cos t)",
    cases: {
      1: {name:"Найти y", inputs:[["a","a"],["t","t, рад"]], output:"y", function:"calc_cycloid_y", solver:"solve_cycloid_y", graphFunction:"graph_cycloid"}
    }
  },
  catenary: {
    subject_key: 'математика',
    branch: "higher",
    title: "Цепная линия",
    description: "График cosh.",
    formula_view: "y=a cosh(x/a)",
    cases: {
      1: {name:"Найти y", inputs:[["a","a"],["x","x"]], output:"y", function:"calc_catenary_y", solver:"solve_catenary", graphFunction:"graph_catenary"}
    }
  },
  cardioid: {
    subject_key: 'математика',
    branch: "higher",
    title: "Кардиоида",
    description: "Полярное уравнение кардиоиды.",
    formula_view: "r=a(1+cosθ)",
    cases: {
      1: {name:"Найти r", inputs:[["a","a"],["thetaDeg","θ, °"]], output:"r", function:"calc_cardioid_r", solver:"solve_cardioid", graphFunction:"graph_cardioid"}
    }
  },
  log_spiral: {
    subject_key: 'математика',
    branch: "higher",
    title: "Логарифмическая спираль",
    description: "Радиус спирали.",
    formula_view: "r=aeᵇᶿ",
    cases: {
      1: {name:"Найти r", inputs:[["a","a"],["b","b"],["theta","θ, рад"]], output:"r", function:"calc_log_spiral_r", solver:"solve_log_spiral", graphFunction:"graph_log_spiral"}
    }
  },
  helix_x: {
    subject_key: 'математика',
    branch: "higher",
    title: "Винтовая линия — x",
    description: "Параметр x.",
    formula_view: "x=a cos t",
    cases: {
      1: {name:"Найти x", inputs:[["a","a"],["t","t, рад"]], output:"x", function:"calc_helix_x", solver:"solve_helix_x"}
    }
  },
  helix_y: {
    subject_key: 'математика',
    branch: "higher",
    title: "Винтовая линия — y",
    description: "Параметр y.",
    formula_view: "y=a sin t",
    cases: {
      1: {name:"Найти y", inputs:[["a","a"],["t","t, рад"]], output:"y", function:"calc_helix_y", solver:"solve_helix_y"}
    }
  },
  helix_z: {
    subject_key: 'математика',
    branch: "higher",
    title: "Винтовая линия — z",
    description: "Параметр z.",
    formula_view: "z=bt",
    cases: {
      1: {name:"Найти z", inputs:[["b","b"],["t","t"]], output:"z", function:"calc_helix_z", solver:"solve_helix_z"}
    }
  },
};