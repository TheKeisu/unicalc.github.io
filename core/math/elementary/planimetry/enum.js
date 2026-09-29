export const SUBJECT_KEY='math';
export const SECTION_KEY="elementary/planimetry";
export const BRANCH="elementary";
export const FORMULAS = {
  triangle_area_bh: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь треугольника",
    description: "По основанию и высоте.",
    formula_view: "S=bh/2",
    cases: {
      1: {name:"Найти S", inputs:[["b","Основание b"],["h","Высота h"]], output:"Площадь S", function:"calc_tri_bh", solver:"solve_tri_bh"}
    }
  },
  heron: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Формула Герона",
    description: "Площадь по трём сторонам.",
    formula_view: "S=√(p(p−a)(p−b)(p−c))",
    cases: {
      1: {name:"Найти S", inputs:[["a","a"],["b","b"],["c","c"]], output:"Площадь S", function:"calc_heron", solver:"solve_heron"}
    }
  },
  equilateral_area: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Равносторонний треугольник",
    description: "Площадь равностороннего треугольника.",
    formula_view: "S=√3·a²/4",
    cases: {
      1: {name:"Найти S", inputs:[["a","Сторона a"]], output:"Площадь S", function:"calc_equilateral_area", solver:"solve_equilateral_area"}
    }
  },
  pythagorean: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Теорема Пифагора",
    description: "Гипотенуза прямоугольного треугольника.",
    formula_view: "c=√(a²+b²)",
    cases: {
      1: {name:"Найти c", inputs:[["a","Катет a"],["b","Катет b"]], output:"Гипотенуза c", function:"calc_pythag_h", solver:"solve_pythag_h"}
    }
  },
  pythagorean_leg: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Катет по гипотенузе",
    description: "Второй катет по гипотенузе и катету.",
    formula_view: "b=√(c²−a²)",
    cases: {
      1: {name:"Найти b", inputs:[["c","Гипотенуза c"],["a","Катет a"]], output:"Катет b", function:"calc_pythag_leg", solver:"solve_pythag_leg"}
    }
  },
  cosine_rule: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Теорема косинусов — угол",
    description: "Угол по трём сторонам.",
    formula_view: "cos C=(a²+b²−c²)/(2ab)",
    cases: {
      1: {name:"Найти C", inputs:[["a","a"],["b","b"],["c","c"]], output:"Угол C", function:"calc_cos_angle", solver:"solve_cos_angle", SI:"°"}
    }
  },
  inradius: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Радиус вписанной окружности",
    description: "Радиус через площадь и полупериметр.",
    formula_view: "r=S/p",
    cases: {
      1: {name:"Найти r", inputs:[["a","a"],["b","b"],["c","c"]], output:"r", function:"calc_tri_inradius", solver:"solve_inradius"}
    }
  },
  circumradius: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Радиус описанной окружности",
    description: "Радиус описанной окружности треугольника.",
    formula_view: "R=abc/(4S)",
    cases: {
      1: {name:"Найти R", inputs:[["a","a"],["b","b"],["c","c"]], output:"R", function:"calc_tri_circumradius", solver:"solve_circumradius"}
    }
  },
  median: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Медиана треугольника",
    description: "Длина медианы к стороне a.",
    formula_view: "mₐ=1/2√(2b²+2c²−a²)",
    cases: {
      1: {name:"Найти mₐ", inputs:[["a","Сторона a"],["b","Сторона b"],["c","Сторона c"]], output:"mₐ", function:"calc_median", solver:"solve_median"}
    }
  },
  angle_bisector: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Биссектриса треугольника",
    description: "Длина биссектрисы из вершины при стороне a.",
    formula_view: "lₐ=√(bc(1−a²/(b+c)²))",
    cases: {
      1: {name:"Найти lₐ", inputs:[["a","Противолежащая a"],["b","b"],["c","c"]], output:"Биссектриса lₐ", function:"calc_angle_bisector", solver:"solve_angle_bisector"}
    }
  },
  parallelogram_area: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь параллелограмма",
    description: "По двум сторонам и углу между ними.",
    formula_view: "S=ab sin γ",
    cases: {
      1: {name:"Найти S", inputs:[["a","a"],["b","b"],["angleDeg","Угол γ, °"]], output:"S", function:"calc_parallelogram_area", solver:"solve_parallelogram_area"}
    }
  },
  rhombus_area: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь ромба",
    description: "По диагоналям.",
    formula_view: "S=d₁d₂/2",
    cases: {
      1: {name:"Найти S", inputs:[["d1","Диагональ d₁"],["d2","Диагональ d₂"]], output:"S", function:"calc_rhombus_area_diag", solver:"solve_rhombus_area"}
    }
  },
  trapezoid_area: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь трапеции",
    description: "По двум основаниям и высоте.",
    formula_view: "S=(a+b)h/2",
    cases: {
      1: {name:"Найти S", inputs:[["a","Основание a"],["b","Основание b"],["h","Высота h"]], output:"S", function:"calc_trapezoid_area", solver:"solve_trapezoid_area"}
    }
  },
  trapezoid_midline: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Средняя линия трапеции",
    description: "Полусумма оснований.",
    formula_view: "m=(a+b)/2",
    cases: {
      1: {name:"Найти m", inputs:[["a","Основание a"],["b","Основание b"]], output:"m", function:"calc_trapezoid_midline", solver:"solve_trapezoid_midline"}
    }
  },
  regular_polygon_perimeter: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Периметр правильного n-угольника",
    description: "Периметр через сторону.",
    formula_view: "P=na",
    cases: {
      1: {name:"Найти P", inputs:[["n","Число сторон n"],["a","Сторона a"]], output:"P", function:"calc_regular_polygon_perimeter", solver:"solve_regular_polygon_perimeter"}
    }
  },
  regular_polygon_area: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь правильного n-угольника",
    description: "Площадь правильного n-угольника по стороне.",
    formula_view: "S=na²/(4tg(π/n))",
    cases: {
      1: {name:"Найти S", inputs:[["n","Число сторон n"],["a","Сторона a"]], output:"S", function:"calc_regular_polygon_area", solver:"solve_regular_polygon_area"}
    }
  },
  circle_area: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь круга",
    description: "Площадь круга.",
    formula_view: "S=πr²",
    cases: {
      1: {name:"Найти S", inputs:[["r","Радиус r"]], output:"S", function:"calc_circle_area", solver:"solve_circle_area", graphFunction:"graph_circle"}
    }
  },
  circumference: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Длина окружности",
    description: "Длина окружности.",
    formula_view: "L=2πr",
    cases: {
      1: {name:"Найти L", inputs:[["r","Радиус r"]], output:"L", function:"calc_circle_circumference", solver:"solve_circumference", graphFunction:"graph_circle"}
    }
  },
  arc_length: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Длина дуги",
    description: "Длина дуги для угла α в градусах.",
    formula_view: "l=πrα/180",
    cases: {
      1: {name:"Найти l", inputs:[["r","Радиус r"],["angleDeg","Угол α, °"]], output:"l", function:"calc_arc_length", solver:"solve_arc_length"}
    }
  },
  sector_area: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь сектора",
    description: "Площадь сектора.",
    formula_view: "S=πr²α/360°",
    cases: {
      1: {name:"Найти S", inputs:[["r","Радиус r"],["angleDeg","Угол α, °"]], output:"S", function:"calc_sector_area", solver:"solve_sector_area"}
    }
  },
  chord: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Хорда окружности",
    description: "Длина хорды через центральный угол.",
    formula_view: "c=2r sin(α/2)",
    cases: {
      1: {name:"Найти c", inputs:[["r","Радиус r"],["angleDeg","Угол α, °"]], output:"c", function:"calc_chord", solver:"solve_chord"}
    }
  },
  segment_area: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь кругового сегмента",
    description: "Площадь сегмента через центральный угол.",
    formula_view: "Sseg=r²(φ−sinφ)/2",
    cases: {
      1: {name:"Найти Sseg", inputs:[["r","Радиус r"],["angleDeg","Угол φ, °"]], output:"Sseg", function:"calc_segment_area", solver:"solve_segment_area"}
    }
  },
  tangent_length: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Длина касательной",
    description: "Касательная из точки на расстоянии d от центра.",
    formula_view: "t=√(d²−R²)",
    cases: {
      1: {name:"Найти t", inputs:[["R","Радиус R"],["d","Расстояние d"]], output:"t", function:"calc_tangent_length", solver:"solve_tangent_length"}
    }
  },
  power_point: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Степень точки",
    description: "Для секущих PA·PB и касательной PT выполняется PT²=PA·PB. Здесь вводится PT для вычисления степени.",
    formula_view: "PT²=PA·PB",
    cases: {
      1: {name:"Найти степень", inputs:[["tangent","Длина касательной PT"],["x1","Не используется — PA"],["x2","Не используется — PB"]], output:"Степень точки", function:"calc_power_point", solver:"solve_power_point"}
    }
  },
  brahmagupta: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Формула Брахмагупты",
    description: "Площадь вписанного четырёхугольника по сторонам.",
    formula_view: "S=√((p−a)(p−b)(p−c)(p−d))",
    cases: {
      1: {name:"Найти S", inputs:[["a","a"],["b","b"],["c","c"],["d","d"]], output:"S", function:"calc_brahmagupta", solver:"solve_brahmagupta"}
    }
  },
  point_distance: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Расстояние между точками",
    description: "Евклидово расстояние на плоскости.",
    formula_view: "d=√((x₂−x₁)²+(y₂−y₁)²)",
    cases: {
      1: {name:"Найти d", inputs:[["x1","x₁"],["y1","y₁"],["x2","x₂"],["y2","y₂"]], output:"d", function:"calc_dist_points", solver:"solve_point_distance"}
    }
  },
};