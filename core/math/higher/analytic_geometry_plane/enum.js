export const SUBJECT_KEY='math';
export const SECTION_KEY="higher/analytic_geometry_plane";
export const BRANCH="higher";
export const FORMULAS = {
  point_distance: {
    subject_key: 'математика',
    branch: "higher",
    title: "Расстояние между точками",
    description: "Расстояние между двумя точками.",
    formula_view: "d=√((x₂−x₁)²+(y₂−y₁)²)",
    cases: {
      1: {name:"Найти d", inputs:[["x1","x₁"],["y1","y₁"],["x2","x₂"],["y2","y₂"]], output:"d", function:"calc_distance", solver:"solve_distance"}
    }
  },
  midpoint: {
    subject_key: 'математика',
    branch: "higher",
    title: "Середина отрезка",
    description: "Координаты середины отрезка.",
    formula_view: "M((x₁+x₂)/2,(y₁+y₂)/2)",
    cases: {
      1: {name:"Найти xₘ", inputs:[["x1","x₁"],["x2","x₂"]], output:"xₘ", function:"calc_mid_x", solver:"solve_mid_x"},
      2: {name:"Найти yₘ", inputs:[["y1","y₁"],["y2","y₂"]], output:"yₘ", function:"calc_mid_y", solver:"solve_mid_y"}
    }
  },
  section_point: {
    subject_key: 'математика',
    branch: "higher",
    title: "Деление отрезка",
    description: "Координата точки, делящей AB в отношении m:n.",
    formula_view: "x=(nx₁+mx₂)/(m+n)",
    cases: {
      1: {name:"Найти x", inputs:[["x1","x₁"],["x2","x₂"],["m","m"],["n","n"]], output:"x", function:"calc_section_x", solver:"solve_section_x"},
      2: {name:"Найти y", inputs:[["y1","y₁"],["y2","y₂"],["m","m"],["n","n"]], output:"y", function:"calc_section_y", solver:"solve_section_y"}
    }
  },
  slope: {
    subject_key: 'математика',
    branch: "higher",
    title: "Угловой коэффициент",
    description: "Угловой коэффициент прямой через две точки.",
    formula_view: "k=(y₂−y₁)/(x₂−x₁)",
    cases: {
      1: {name:"Найти k", inputs:[["x1","x₁"],["y1","y₁"],["x2","x₂"],["y2","y₂"]], output:"k", function:"calc_slope", solver:"solve_slope"}
    }
  },
  line_intercept: {
    subject_key: 'математика',
    branch: "higher",
    title: "Прямая y=kx+b",
    description: "Свободный член прямой через точку.",
    formula_view: "b=y₁−kx₁",
    cases: {
      1: {name:"Найти b", inputs:[["x1","x₁"],["y1","y₁"],["k","k"]], output:"b", function:"calc_line_b", solver:"solve_line_b"}
    }
  },
  point_line_distance: {
    subject_key: 'математика',
    branch: "higher",
    title: "Расстояние от точки до прямой",
    description: "Расстояние от точки до Ax+By+C=0.",
    formula_view: "d=|Ax₀+By₀+C|/√(A²+B²)",
    cases: {
      1: {name:"Найти d", inputs:[["A","A"],["B","B"],["C","C"],["x","x₀"],["y","y₀"]], output:"d", function:"calc_point_line_distance", solver:"solve_point_line_distance"}
    }
  },
  line_angle: {
    subject_key: 'математика',
    branch: "higher",
    title: "Угол между прямыми",
    description: "Угол между y=k₁x+b₁ и y=k₂x+b₂.",
    formula_view: "tanφ=(k₂−k₁)/(1+k₁k₂)",
    cases: {
      1: {name:"Найти φ", inputs:[["k1","k₁"],["k2","k₂"]], output:"φ, °", function:"calc_lines_angle", solver:"solve_lines_angle", SI:"°"}
    }
  },
  circle_general: {
    subject_key: 'математика',
    branch: "higher",
    title: "Окружность общего вида",
    description: "Центр и радиус x²+y²+Dx+Ey+F=0.",
    formula_view: "(x+D/2)²+(y+E/2)²=r²",
    cases: {
      1: {name:"Найти r", inputs:[["D","D"],["E","E"],["F","F"]], output:"r", function:"calc_circle_radius", solver:"solve_circle_radius", graphFunction:"graph_circle_general"}
    }
  },
  ellipse_focus: {
    subject_key: 'математика',
    branch: "higher",
    title: "Эллипс — фокусное расстояние",
    description: "Фокусное расстояние c при a≥b.",
    formula_view: "c=√(a²−b²)",
    cases: {
      1: {name:"Найти c", inputs:[["a","Большая полуось a"],["b","Малая полуось b"]], output:"c", function:"calc_ellipse_focal", solver:"solve_ellipse_focus", graphFunction:"graph_ellipse"}
    }
  },
  ellipse_eccentricity: {
    subject_key: 'математика',
    branch: "higher",
    title: "Эллипс — эксцентриситет",
    description: "Эксцентриситет эллипса.",
    formula_view: "e=c/a",
    cases: {
      1: {name:"Найти e", inputs:[["a","a"],["b","b"]], output:"e", function:"calc_ellipse_eccentricity", solver:"solve_ellipse_eccentricity", graphFunction:"graph_ellipse"}
    }
  },
  parabola_focus: {
    subject_key: 'математика',
    branch: "higher",
    title: "Парабола — фокус",
    description: "Фокус параметрической параболы x²=2py.",
    formula_view: "yF=p/2",
    cases: {
      1: {name:"Найти yF", inputs:[["p","Параметр p"]], output:"yF", function:"calc_parabola_focus", solver:"solve_parabola_focus", graphFunction:"graph_parabola"}
    }
  },
  parabola_directrix: {
    subject_key: 'математика',
    branch: "higher",
    title: "Парабола — директриса",
    description: "Директриса x²=2py.",
    formula_view: "y=−p/2",
    cases: {
      1: {name:"Найти y₍дир₎", inputs:[["p","p"]], output:"y₍дир₎", function:"calc_parabola_directrix", solver:"solve_parabola_directrix", graphFunction:"graph_parabola"}
    }
  },
  hyperbola_focus: {
    subject_key: 'математика',
    branch: "higher",
    title: "Гипербола — фокусное расстояние",
    description: "Фокусное расстояние гиперболы.",
    formula_view: "c=√(a²+b²)",
    cases: {
      1: {name:"Найти c", inputs:[["a","a"],["b","b"]], output:"c", function:"calc_hyperbola_focal", solver:"solve_hyperbola_focus", graphFunction:"graph_hyperbola"}
    }
  },
  hyperbola_eccentricity: {
    subject_key: 'математика',
    branch: "higher",
    title: "Гипербола — эксцентриситет",
    description: "Эксцентриситет гиперболы.",
    formula_view: "e=c/a",
    cases: {
      1: {name:"Найти e", inputs:[["a","a"],["b","b"]], output:"e", function:"calc_hyperbola_eccentricity", solver:"solve_hyperbola_eccentricity", graphFunction:"graph_hyperbola"}
    }
  },
  polar_r: {
    subject_key: 'математика',
    branch: "higher",
    title: "Полярный радиус",
    description: "Переход из декартовых координат в полярные.",
    formula_view: "r=√(x²+y²)",
    cases: {
      1: {name:"Найти r", inputs:[["x","x"],["y","y"]], output:"r", function:"calc_polar_r", solver:"solve_polar_r"}
    }
  },
  polar_phi: {
    subject_key: 'математика',
    branch: "higher",
    title: "Полярный угол",
    description: "Полярный угол точки.",
    formula_view: "φ=atan2(y,x)",
    cases: {
      1: {name:"Найти φ", inputs:[["x","x"],["y","y"]], output:"φ, °", function:"calc_polar_phi", solver:"solve_polar_phi", SI:"°"}
    }
  },
  cartesian_x: {
    subject_key: 'математика',
    branch: "higher",
    title: "Полярные → x",
    description: "Абсцисса по полярным координатам.",
    formula_view: "x=r cosφ",
    cases: {
      1: {name:"Найти x", inputs:[["r","r"],["phiDeg","φ, °"]], output:"x", function:"calc_cart_x", solver:"solve_cart_x"}
    }
  },
  cartesian_y: {
    subject_key: 'математика',
    branch: "higher",
    title: "Полярные → y",
    description: "Ордината по полярным координатам.",
    formula_view: "y=r sinφ",
    cases: {
      1: {name:"Найти y", inputs:[["r","r"],["phiDeg","φ, °"]], output:"y", function:"calc_cart_y", solver:"solve_cart_y"}
    }
  },
};