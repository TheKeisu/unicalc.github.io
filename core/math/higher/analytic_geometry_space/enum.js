export const SUBJECT_KEY='math';
export const SECTION_KEY="higher/analytic_geometry_space";
export const BRANCH="higher";
export const FORMULAS = {
  distance3: {
    subject_key: 'математика',
    branch: "higher",
    title: "Расстояние в пространстве",
    description: "Расстояние между двумя точками в R³.",
    formula_view: "d=√(Δx²+Δy²+Δz²)",
    cases: {
      1: {name:"Найти d", inputs:[["x1","x₁"],["y1","y₁"],["z1","z₁"],["x2","x₂"],["y2","y₂"],["z2","z₂"]], output:"d", function:"calc_dist3", solver:"solve_dist3"}
    }
  },
  vector_length: {
    subject_key: 'математика',
    branch: "higher",
    title: "Длина вектора",
    description: "Модуль трёхмерного вектора.",
    formula_view: "|a|=√(x²+y²+z²)",
    cases: {
      1: {name:"Найти |a|", inputs:[["x","x"],["y","y"],["z","z"]], output:"|a|", function:"calc_vector_length", solver:"solve_vector_length"}
    }
  },
  dot3: {
    subject_key: 'математика',
    branch: "higher",
    title: "Скалярное произведение",
    description: "Скалярное произведение векторов.",
    formula_view: "a·b=x₁x₂+y₁y₂+z₁z₂",
    cases: {
      1: {name:"Найти a·b", inputs:[["x1","x₁"],["y1","y₁"],["z1","z₁"],["x2","x₂"],["y2","y₂"],["z2","z₂"]], output:"a·b", function:"calc_dot3", solver:"solve_dot3"}
    }
  },
  cross_mag: {
    subject_key: 'математика',
    branch: "higher",
    title: "Модуль векторного произведения",
    description: "Модуль a×b.",
    formula_view: "|a×b|",
    cases: {
      1: {name:"Найти |a×b|", inputs:[["x1","x₁"],["y1","y₁"],["z1","z₁"],["x2","x₂"],["y2","y₂"],["z2","z₂"]], output:"|a×b|", function:"calc_cross_mag", solver:"solve_cross_mag"}
    }
  },
  vector_angle: {
    subject_key: 'математика',
    branch: "higher",
    title: "Угол между векторами",
    description: "Угол между двумя ненулевыми векторами.",
    formula_view: "cosφ=(a·b)/(|a||b|)",
    cases: {
      1: {name:"Найти φ", inputs:[["x1","x₁"],["y1","y₁"],["z1","z₁"],["x2","x₂"],["y2","y₂"],["z2","z₂"]], output:"φ, °", function:"calc_vector_angle", solver:"solve_vector_angle", SI:"°"}
    }
  },
  triple_product: {
    subject_key: 'математика',
    branch: "higher",
    title: "Смешанное произведение",
    description: "Смешанное произведение трёх векторов.",
    formula_view: "[a,b,c]=a·(b×c)",
    cases: {
      1: {name:"Найти [a,b,c]", inputs:[["x1","x₁"],["y1","y₁"],["z1","z₁"],["x2","x₂"],["y2","y₂"],["z2","z₂"],["x3","x₃"],["y3","y₃"],["z3","z₃"]], output:"[a,b,c]", function:"calc_triple", solver:"solve_triple"}
    }
  },
  plane_through_point: {
    subject_key: 'математика',
    branch: "higher",
    title: "Плоскость через точку",
    description: "D для Ax+By+Cz+D=0 через точку.",
    formula_view: "D=−(Ax₀+By₀+Cz₀)",
    cases: {
      1: {name:"Найти D", inputs:[["A","A"],["B","B"],["C","C"],["x0","x₀"],["y0","y₀"],["z0","z₀"]], output:"D", function:"calc_plane_d", solver:"solve_plane_d"}
    }
  },
  point_plane_distance: {
    subject_key: 'математика',
    branch: "higher",
    title: "Расстояние до плоскости",
    description: "Расстояние точки до Ax+By+Cz+D=0.",
    formula_view: "d=|Ax+By+Cz+D|/√(A²+B²+C²)",
    cases: {
      1: {name:"Найти d", inputs:[["A","A"],["B","B"],["C","C"],["D","D"],["x","x"],["y","y"],["z","z"]], output:"d", function:"calc_point_plane_distance", solver:"solve_point_plane_distance"}
    }
  },
  planes_angle: {
    subject_key: 'математика',
    branch: "higher",
    title: "Угол между плоскостями",
    description: "Угол через скалярное произведение нормалей.",
    formula_view: "cosφ=|n₁·n₂|/(|n₁||n₂|)",
    cases: {
      1: {name:"Найти φ", inputs:[["A1","A₁"],["B1","B₁"],["C1","C₁"],["A2","A₂"],["B2","B₂"],["C2","C₂"]], output:"φ, °", function:"calc_planes_angle", solver:"solve_planes_angle", SI:"°"}
    }
  },
  line_plane_angle: {
    subject_key: 'математика',
    branch: "higher",
    title: "Угол прямой и плоскости",
    description: "Угол через направляющий вектор и нормаль.",
    formula_view: "sinφ=|n·v|/(|n||v|)",
    cases: {
      1: {name:"Найти φ", inputs:[["lx","lₓ"],["ly","lᵧ"],["lz","l_z"],["A","A"],["B","B"],["C","C"]], output:"φ, °", function:"calc_line_plane_angle", solver:"solve_line_plane_angle", SI:"°"}
    }
  },
  sphere_general: {
    subject_key: 'математика',
    branch: "higher",
    title: "Сфера общего вида",
    description: "Радиус сферы x²+y²+z²+Dx+Ey+Fz+G=0.",
    formula_view: "r²=(D²+E²+F²)/4−G",
    cases: {
      1: {name:"Найти r", inputs:[["D","D"],["E","E"],["F","F"],["G","G"]], output:"r", function:"calc_sphere_radius3", solver:"solve_sphere_radius3"}
    }
  },
};