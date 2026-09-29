export const SUBJECT_KEY='math';
export const SECTION_KEY="higher/integral_calculus";
export const BRANCH="higher";
export const FORMULAS = {
  int_power: {
    subject_key: 'математика',
    branch: "higher",
    title: "Первообразная xⁿ",
    description: "Степенная первообразная.",
    formula_view: "∫axⁿdx=axⁿ⁺¹/(n+1)+C",
    cases: {
      1: {name:"Найти F(x)", inputs:[["a","a"],["n","n"],["x","x"]], output:"F(x)", function:"calc_int_power", solver:"solve_int_power"}
    }
  },
  int_inverse: {
    subject_key: 'математика',
    branch: "higher",
    title: "Первообразная 1/x",
    description: "Логарифмическая первообразная.",
    formula_view: "∫a/x dx=a ln|x|+C",
    cases: {
      1: {name:"Найти F(x)", inputs:[["a","a"],["x","x"]], output:"F(x)", function:"calc_int_inv", solver:"solve_int_inverse"}
    }
  },
  int_exp: {
    subject_key: 'математика',
    branch: "higher",
    title: "Первообразная e^(kx)",
    description: "Интеграл экспоненты.",
    formula_view: "∫aeᵏˣdx=aeᵏˣ/k+C",
    cases: {
      1: {name:"Найти F(x)", inputs:[["a","a"],["k","k"],["x","x"]], output:"F(x)", function:"calc_int_exp", solver:"solve_int_exp"}
    }
  },
  int_sin: {
    subject_key: 'математика',
    branch: "higher",
    title: "Первообразная sin(kx)",
    description: "Интеграл синуса.",
    formula_view: "∫a sin(kx)dx=−a cos(kx)/k+C",
    cases: {
      1: {name:"Найти F(x)", inputs:[["a","a"],["k","k"],["x","x"]], output:"F(x)", function:"calc_int_sin", solver:"solve_int_sin"}
    }
  },
  int_cos: {
    subject_key: 'математика',
    branch: "higher",
    title: "Первообразная cos(kx)",
    description: "Интеграл косинуса.",
    formula_view: "∫a cos(kx)dx=a sin(kx)/k+C",
    cases: {
      1: {name:"Найти F(x)", inputs:[["a","a"],["k","k"],["x","x"]], output:"F(x)", function:"calc_int_cos", solver:"solve_int_cos"}
    }
  },
  def_int_power: {
    subject_key: 'математика',
    branch: "higher",
    title: "Определённый интеграл xⁿ",
    description: "Интеграл на [left,right].",
    formula_view: "∫ₗʳ axⁿdx=a(rⁿ⁺¹−lⁿ⁺¹)/(n+1)",
    cases: {
      1: {name:"Найти интеграл", inputs:[["a","a"],["n","n"],["left","Нижний предел"],["right","Верхний предел"]], output:"Интеграл", function:"calc_int_def_power", solver:"solve_def_int_power"}
    }
  },
  def_int_linear: {
    subject_key: 'математика',
    branch: "higher",
    title: "Интеграл линейной функции",
    description: "Точный интеграл ax+b.",
    formula_view: "∫ₗʳ(ax+b)dx=a(r²−l²)/2+b(r−l)",
    cases: {
      1: {name:"Найти интеграл", inputs:[["a","a"],["b","b"],["left","Нижний предел"],["right","Верхний предел"]], output:"Интеграл", function:"calc_int_def_linear", solver:"solve_def_int_linear"}
    }
  },
  average_value: {
    subject_key: 'математика',
    branch: "higher",
    title: "Среднее значение функции",
    description: "Среднее значение через уже найденный интеграл.",
    formula_view: "f̄=(1/(b−a))∫ₐᵇf(x)dx",
    cases: {
      1: {name:"Найти f̄", inputs:[["integral","Значение интеграла"],["left","a"],["right","b"]], output:"Среднее значение", function:"calc_average_value", solver:"solve_average_value"}
    }
  },
  area_under_curve: {
    subject_key: 'математика',
    branch: "higher",
    title: "Площадь под кривой",
    description: "Площадь прямолинейно аппроксимированного фрагмента.",
    formula_view: "S≈bh/2",
    cases: {
      1: {name:"Найти S", inputs:[["base","Основание"],["height","Высота"]], output:"S", function:"calc_area_triangle_function", solver:"solve_area_under_curve"}
    }
  },
  disk_volume: {
    subject_key: 'математика',
    branch: "higher",
    title: "Объём тела вращения — оценка",
    description: "Простейшая формула кольцевого диска.",
    formula_view: "V≈πh(R₁²+R₂²)/2",
    cases: {
      1: {name:"Найти V", inputs:[["R1","R₁"],["R2","R₂"],["h","h"]], output:"V", function:"calc_disk_volume", solver:"solve_disk_volume"}
    }
  },
  integration_by_parts: {
    subject_key: 'математика',
    branch: "higher",
    title: "Интегрирование по частям",
    description: "Правая часть формулы по известным u,v и ∫vdu.",
    formula_view: "∫u dv=uv−∫v du",
    cases: {
      1: {name:"Найти ∫u dv", inputs:[["u","u"],["v","v"],["int_v_du","∫vdu"]], output:"Интеграл", function:"calc_integration_by_parts", solver:"solve_integration_by_parts"}
    }
  },
  trapezoid_rule: {
    subject_key: 'математика',
    branch: "higher",
    title: "Формула трапеций",
    description: "Одношаговое численное интегрирование.",
    formula_view: "I≈h(f₀+f₁)/2",
    cases: {
      1: {name:"Найти I", inputs:[["h","Шаг h"],["f0","f₀"],["f1","f₁"]], output:"I", function:"calc_trapezoid", solver:"solve_trapezoid"}
    }
  },
  simpson_rule: {
    subject_key: 'математика',
    branch: "higher",
    title: "Формула Симпсона",
    description: "Одношаговое интегрирование по трём узлам.",
    formula_view: "I≈h(f₀+4f₁+f₂)/3",
    cases: {
      1: {name:"Найти I", inputs:[["h","Шаг h"],["f0","f₀"],["f1","f₁"],["f2","f₂"]], output:"I", function:"calc_simpson", solver:"solve_simpson"}
    }
  },
  arc_length_element: {
    subject_key: 'математика',
    branch: "higher",
    title: "Элемент длины",
    description: "Элемент длины плоской кривой по приращениям.",
    formula_view: "ds=√(dx²+dy²)",
    cases: {
      1: {name:"Найти ds", inputs:[["dx","dx"],["dy","dy"]], output:"ds", function:"calc_arc_length", solver:"solve_arc_length_element"}
    }
  },
  polyline_length: {
    subject_key: 'математика',
    branch: "higher",
    title: "Длина ломаного фрагмента",
    description: "Сумма трёх заданных элементов длины.",
    formula_view: "L=l₁+l₂+l₃",
    cases: {
      1: {name:"Найти L", inputs:[["length1","l₁"],["length2","l₂"],["length3","l₃"]], output:"L", function:"calc_arc_segment_polyline", solver:"solve_polyline_length"}
    }
  },
};