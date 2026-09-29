export const SUBJECT_KEY='math';
export const SECTION_KEY="elementary/trigonometry";
export const BRANCH="elementary";
export const FORMULAS = {
  deg_to_rad: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Градусы → радианы",
    description: "Перевод градусов в радианы.",
    formula_view: "α(rad)=α°π/180",
    cases: {
      1: {name:"Перевести", inputs:[["deg","Угол, °"]], output:"Радианы", function:"calc_deg_to_rad", solver:"solve_deg_to_rad", SI:"рад"}
    }
  },
  rad_to_deg: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Радианы → градусы",
    description: "Перевод радиан в градусы.",
    formula_view: "α°=α(rad)·180/π",
    cases: {
      1: {name:"Перевести", inputs:[["rad","Угол, рад"]], output:"Градусы", function:"calc_rad_to_deg", solver:"solve_rad_to_deg", SI:"°"}
    }
  },
  sin: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Синус",
    description: "Синус угла в градусах.",
    formula_view: "sin α",
    cases: {
      1: {name:"Найти sin α", inputs:[["deg","Угол α, °"]], output:"sin α", function:"calc_sin", solver:"solve_sin"}
    }
  },
  cos: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Косинус",
    description: "Косинус угла в градусах.",
    formula_view: "cos α",
    cases: {
      1: {name:"Найти cos α", inputs:[["deg","Угол α, °"]], output:"cos α", function:"calc_cos", solver:"solve_cos"}
    }
  },
  tan: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Тангенс",
    description: "Тангенс угла.",
    formula_view: "tg α=sinα/cosα",
    cases: {
      1: {name:"Найти tg α", inputs:[["deg","Угол α, °"]], output:"tg α", function:"calc_tan", solver:"solve_tan"}
    }
  },
  cot: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Котангенс",
    description: "Котангенс угла.",
    formula_view: "ctg α=cosα/sinα",
    cases: {
      1: {name:"Найти ctg α", inputs:[["deg","Угол α, °"]], output:"ctg α", function:"calc_cot", solver:"solve_cot"}
    }
  },
  identity: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Основное тригонометрическое тождество",
    description: "Проверка sin²x+cos²x=1.",
    formula_view: "sin²x+cos²x=1",
    cases: {
      1: {name:"Проверить", inputs:[["x","Угол x, °"]], output:"Левая часть", function:"calc_identity_sin2_cos2", solver:"solve_identity"}
    }
  },
  double_sin: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Синус двойного угла",
    description: "Синус 2α.",
    formula_view: "sin 2α=2sinαcosα",
    cases: {
      1: {name:"Найти sin 2α", inputs:[["deg","Угол α, °"]], output:"sin 2α", function:"calc_double_sin", solver:"solve_double_sin"}
    }
  },
  double_cos: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Косинус двойного угла",
    description: "Косинус 2α.",
    formula_view: "cos 2α=cos²α−sin²α",
    cases: {
      1: {name:"Найти cos 2α", inputs:[["deg","Угол α, °"]], output:"cos 2α", function:"calc_double_cos", solver:"solve_double_cos"}
    }
  },
  half_sin: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Синус половинного угла",
    description: "Модуль sin(α/2) по cos α.",
    formula_view: "sin²(α/2)=(1−cosα)/2",
    cases: {
      1: {name:"Найти sin(α/2) по α", inputs:[["deg","Угол α, °"]], output:"sin(α/2)", function:"calc_half_sin", solver:"solve_half_sin"}
    }
  },
  law_sines: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Теорема синусов",
    description: "По одной стороне и двум углам.",
    formula_view: "a/sin A=b/sin B",
    cases: {
      1: {name:"Найти b", inputs:[["a","Сторона a"],["Adeg","Угол A, °"],["Bdeg","Угол B, °"]], output:"b", function:"calc_law_sines_side", solver:"solve_law_sines"}
    }
  },
  law_cosines: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Теорема косинусов — сторона",
    description: "Сторона по двум сторонам и углу между ними.",
    formula_view: "c²=a²+b²−2ab cosγ",
    cases: {
      1: {name:"Найти c", inputs:[["a","a"],["b","b"],["gammaDeg","Угол γ, °"]], output:"c", function:"calc_law_cosines_side", solver:"solve_law_cosines"}
    }
  },
  triangle_area_sin: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь через синус угла",
    description: "Площадь треугольника через две стороны и угол между ними.",
    formula_view: "S=ab sinγ/2",
    cases: {
      1: {name:"Найти S", inputs:[["a","a"],["b","b"],["gammaDeg","γ, °"]], output:"S", function:"calc_triangle_area_sin", solver:"solve_triangle_area_sin"}
    }
  },
  arcsin: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Арксинус",
    description: "Главное значение arcsin в градусах.",
    formula_view: "x₀=arcsin a",
    cases: {
      1: {name:"Найти x₀", inputs:[["x","a"]], output:"x₀, °", function:"calc_arcsin_deg", solver:"solve_arcsin", SI:"°"}
    }
  },
  arccos: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Арккосинус",
    description: "Главное значение arccos.",
    formula_view: "x₀=arccos a",
    cases: {
      1: {name:"Найти x₀", inputs:[["x","a"]], output:"x₀, °", function:"calc_arccos_deg", solver:"solve_arccos", SI:"°"}
    }
  },
  arctan: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Арктангенс",
    description: "Главное значение arctan.",
    formula_view: "x₀=arctan a",
    cases: {
      1: {name:"Найти x₀", inputs:[["x","a"]], output:"x₀, °", function:"calc_arctan_deg", solver:"solve_arctan", SI:"°"}
    }
  },
  cot_from_sin_cos: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Котангенс по sin и cos",
    description: "Восстановление cot α.",
    formula_view: "ctgα=cosα/sinα",
    cases: {
      1: {name:"Найти ctg", inputs:[["sinA","sin α"],["cosA","cos α"]], output:"ctg α", function:"calc_cotangent_from_sin_cos", solver:"solve_cot_from_sin_cos"}
    }
  },
};