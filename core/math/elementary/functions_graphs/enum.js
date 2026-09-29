export const SUBJECT_KEY='math';
export const SECTION_KEY="elementary/functions_graphs";
export const BRANCH="elementary";
export const FORMULAS = {
  line_value: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Линейная функция",
    description: "Значение y=kx+b в точке x.",
    formula_view: "y=kx+b",
    cases: {
      1: {name:"Найти y", inputs:[["k","k"],["b","b"],["x","x"]], output:"y", function:"calc_line_y", solver:"solve_line_y", graphFunction:"graph_line"}
    }
  },
  line_slope: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Угловой коэффициент",
    description: "Наклон прямой по двум точкам.",
    formula_view: "k=(y₂−y₁)/(x₂−x₁)",
    cases: {
      1: {name:"Найти k", inputs:[["x1","x₁"],["y1","y₁"],["x2","x₂"],["y2","y₂"]], output:"k", function:"calc_line_slope", solver:"solve_line_slope", graphFunction:"graph_line_two_points", graphArgs:[0,1,2,3]}
    }
  },
  line_intercept: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Свободный член прямой",
    description: "b по точке и k.",
    formula_view: "b=y−kx",
    cases: {
      1: {name:"Найти b", inputs:[["k","k"],["x","x"],["y","y"]], output:"b", function:"calc_line_intercept", solver:"solve_line_intercept", graphFunction:"graph_line_k_point", graphArgs:[0,1,2]}
    }
  },
  quadratic_value: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Квадратичная функция",
    description: "Значение ax²+bx+c.",
    formula_view: "y=ax²+bx+c",
    cases: {
      1: {name:"Найти y", inputs:[["a","a"],["b","b"],["c","c"],["x","x"]], output:"y", function:"calc_quadratic_y", solver:"solve_quadratic_y", graphFunction:"graph_quadratic", graphArgs:[0,1,2]}
    }
  },
  quadratic_vertex_x: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Абсцисса вершины параболы",
    description: "x-координата вершины.",
    formula_view: "xv=−b/(2a)",
    cases: {
      1: {name:"Найти xᵥ", inputs:[["a","a"],["b","b"]], output:"xᵥ", function:"calc_quadratic_vertex_x", solver:"solve_quadratic_vertex_x"}
    }
  },
  quadratic_vertex_y: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Ордината вершины параболы",
    description: "y-координата вершины.",
    formula_view: "yv=c−b²/(4a)",
    cases: {
      1: {name:"Найти yᵥ", inputs:[["a","a"],["b","b"],["c","c"]], output:"yᵥ", function:"calc_quadratic_vertex_y", solver:"solve_quadratic_vertex_y", graphFunction:"graph_quadratic", graphArgs:[0,1,2]}
    }
  },
  power_function: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Степенная функция",
    description: "Значение axⁿ.",
    formula_view: "y=axⁿ",
    cases: {
      1: {name:"Найти y", inputs:[["a","a"],["n","n"],["x","x"]], output:"y", function:"calc_power_function", solver:"solve_power_function", graphFunction:"graph_power", graphArgs:[0,1]}
    }
  },
  reciprocal_function: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Обратная пропорциональность",
    description: "Гипербола y=a/x+b.",
    formula_view: "y=a/x+b",
    cases: {
      1: {name:"Найти y", inputs:[["a","a"],["b","b"],["x","x"]], output:"y", function:"calc_reciprocal", solver:"solve_reciprocal", graphFunction:"graph_reciprocal", graphArgs:[0,1]}
    }
  },
  exponential_function: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Показательная функция",
    description: "Значение ae^(kx)+b.",
    formula_view: "y=ae^(kx)+b",
    cases: {
      1: {name:"Найти y", inputs:[["a","a"],["k","k"],["x","x"],["b","b"]], output:"y", function:"calc_exp_function", solver:"solve_exp_function", graphFunction:"graph_exp", graphArgs:[0,1,3]}
    }
  },
  log_function: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Логарифмическая функция",
    description: "Значение a·log_base(x)+b.",
    formula_view: "y=a log_b(x)+b₀",
    cases: {
      1: {name:"Найти y", inputs:[["a","a"],["b","b₀"],["x","x"],["base","Основание"]], output:"y", function:"calc_log_function", solver:"solve_log_function", graphFunction:"graph_log", graphArgs:[0,1,3]}
    }
  },
  sine_function: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Синусоида",
    description: "Значение гармонической функции.",
    formula_view: "y=A sin(ωx+φ)+d",
    cases: {
      1: {name:"Найти y", inputs:[["A","Амплитуда A"],["omega","Частота масштаба ω"],["phiDeg","Фаза φ, °"],["d","Сдвиг d"],["x","x"]], output:"y", function:"calc_sine_function", solver:"solve_sine_function", graphFunction:"graph_sine", graphArgs:[0,1,2,3]}
    }
  },
  cosine_function: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Косинусоида",
    description: "Значение косинусоиды.",
    formula_view: "y=A cos(ωx+φ)+d",
    cases: {
      1: {name:"Найти y", inputs:[["A","A"],["omega","ω"],["phiDeg","φ, °"],["d","d"],["x","x"]], output:"y", function:"calc_cosine_function", solver:"solve_cosine_function", graphFunction:"graph_cosine", graphArgs:[0,1,2,3]}
    }
  },
  line_intersection: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Пересечение двух прямых",
    description: "x точки пересечения двух невертикальных прямых.",
    formula_view: "x=(b₂−b₁)/(k₁−k₂)",
    cases: {
      1: {name:"Найти x", inputs:[["k1","k₁"],["b1","b₁"],["k2","k₂"],["b2","b₂"]], output:"x", function:"calc_linear_intersection_x", solver:"solve_line_intersection"}
    }
  },
};