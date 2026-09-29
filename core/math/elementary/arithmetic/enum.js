export const SUBJECT_KEY='math';
export const SECTION_KEY="elementary/arithmetic";
export const BRANCH="elementary";
export const FORMULAS = {
  add: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Сложение",
    description: "Сумма двух чисел.",
    formula_view: "a + b = s",
    cases: {
      1: {name:"Найти сумму", inputs:[["a","Первое число a"],["b","Второе число b"]], output:"Сумма s", function:"calc_add", solver:"solve_add"}
    }
  },
  subtract: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Вычитание",
    description: "Разность двух чисел.",
    formula_view: "a − b = d",
    cases: {
      1: {name:"Найти разность", inputs:[["a","Уменьшаемое a"],["b","Вычитаемое b"]], output:"Разность d", function:"calc_subtract", solver:"solve_subtract"}
    }
  },
  multiply: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Умножение",
    description: "Произведение двух чисел.",
    formula_view: "ab = p",
    cases: {
      1: {name:"Найти произведение", inputs:[["a","Первый множитель a"],["b","Второй множитель b"]], output:"Произведение p", function:"calc_multiply", solver:"solve_multiply"}
    }
  },
  divide: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Деление",
    description: "Частное двух чисел.",
    formula_view: "a / b = q",
    cases: {
      1: {name:"Найти частное", inputs:[["a","Делимое a"],["b","Делитель b"]], output:"Частное q", function:"calc_divide", solver:"solve_divide"}
    }
  },
  fraction_add: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Сложение дробей",
    description: "Сложение двух обыкновенных дробей.",
    formula_view: "a/b + c/d = (ad + bc) / bd",
    cases: {
      1: {name:"Найти сумму", inputs:[["a","Числитель первой дроби a"],["b","Знаменатель первой дроби b"],["c","Числитель второй дроби c"],["d","Знаменатель второй дроби d"]], output:"Сумма", function:"calc_fraction_add", solver:"solve_fraction_add"}
    }
  },
  fraction_sub: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Вычитание дробей",
    description: "Вычитание двух обыкновенных дробей.",
    formula_view: "a/b − c/d = (ad − bc) / bd",
    cases: {
      1: {name:"Найти разность", inputs:[["a","Числитель первой дроби a"],["b","Знаменатель первой дроби b"],["c","Числитель второй дроби c"],["d","Знаменатель второй дроби d"]], output:"Разность", function:"calc_fraction_sub", solver:"solve_fraction_sub"}
    }
  },
  fraction_mul: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Умножение дробей",
    description: "Умножение обыкновенных дробей.",
    formula_view: "(a/b)(c/d) = ac/bd",
    cases: {
      1: {name:"Найти произведение", inputs:[["a","Числитель a"],["b","Знаменатель b"],["c","Числитель c"],["d","Знаменатель d"]], output:"Произведение", function:"calc_fraction_mul", solver:"solve_fraction_mul"}
    }
  },
  fraction_div: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Деление дробей",
    description: "Деление одной дроби на другую.",
    formula_view: "(a/b):(c/d) = ad/bc",
    cases: {
      1: {name:"Найти частное", inputs:[["a","Числитель a"],["b","Знаменатель b"],["c","Числитель c"],["d","Знаменатель d"]], output:"Частное", function:"calc_fraction_div", solver:"solve_fraction_div"}
    }
  },
  percent_of: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Процент от числа",
    description: "Найти p процентов числа N.",
    formula_view: "x = pN/100",
    cases: {
      1: {name:"Найти часть", inputs:[["p","Процент p"],["N","Число N"]], output:"Часть", function:"calc_percent_of", solver:"solve_percent_of"}
    }
  },
  percent_find_total: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Число по проценту",
    description: "Найти целое число по известной части и проценту.",
    formula_view: "N = 100P/p",
    cases: {
      1: {name:"Найти целое N", inputs:[["part","Часть P"],["p","Процент p"]], output:"Целое число N", function:"calc_percent_find_total", solver:"solve_percent_find_total"}
    }
  },
  percent_find_rate: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Процентное отношение",
    description: "Какой процент составляет P от N.",
    formula_view: "p = 100P/N",
    cases: {
      1: {name:"Найти процент", inputs:[["part","Часть P"],["total","Целое N"]], output:"Процент p", function:"calc_percent_find_rate", solver:"solve_percent_find_rate", SI:"%"}
    }
  },
  percent_change: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Процентное изменение",
    description: "Относительное изменение величины.",
    formula_view: "Δ% = (N₂−N₁)/N₁ · 100%",
    cases: {
      1: {name:"Найти изменение", inputs:[["oldValue","Исходное N₁"],["newValue","Новое N₂"]], output:"Изменение", function:"calc_percent_change", solver:"solve_percent_change", SI:"%"}
    }
  },
  proportion: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Пропорция",
    description: "Четвёртый член пропорции a:b = c:x.",
    formula_view: "x = bc/a",
    cases: {
      1: {name:"Найти x", inputs:[["a","a"],["b","b"],["c","c"]], output:"x", function:"calc_proportion", solver:"solve_proportion"}
    }
  },
  arithmetic_mean: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Среднее арифметическое",
    description: "Среднее двух чисел.",
    formula_view: "x̄ = (a+b)/2",
    cases: {
      1: {name:"Найти среднее", inputs:[["a","a"],["b","b"]], output:"x̄", function:"calc_arithmetic_mean", solver:"solve_arithmetic_mean"}
    }
  },
  geometric_mean: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Среднее геометрическое",
    description: "Среднее двух неотрицательных чисел.",
    formula_view: "G = √(ab)",
    cases: {
      1: {name:"Найти среднее", inputs:[["a","a"],["b","b"]], output:"G", function:"calc_geometric_mean", solver:"solve_geometric_mean"}
    }
  },
  harmonic_mean: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Среднее гармоническое",
    description: "Гармоническое среднее двух ненулевых значений.",
    formula_view: "H = 2ab/(a+b)",
    cases: {
      1: {name:"Найти H", inputs:[["a","a"],["b","b"]], output:"H", function:"calc_harmonic_mean", solver:"solve_harmonic_mean"}
    }
  },
  weighted_mean: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Среднее взвешенное",
    description: "Среднее двух значений с весами.",
    formula_view: "x̄ = (x₁w₁+x₂w₂)/(w₁+w₂)",
    cases: {
      1: {name:"Найти среднее", inputs:[["x1","Значение x₁"],["w1","Вес w₁"],["x2","Значение x₂"],["w2","Вес w₂"]], output:"x̄", function:"calc_weighted_mean", solver:"solve_weighted_mean"}
    }
  },
  absolute_error: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Абсолютная погрешность",
    description: "Абсолютная разность между приближённым и точным значением.",
    formula_view: "Δ = |x − x₀|",
    cases: {
      1: {name:"Найти Δ", inputs:[["x","Приближённое x"],["x0","Точное x₀"]], output:"Абсолютная погрешность", function:"calc_abs_error", solver:"solve_abs_error"}
    }
  },
  relative_error: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Относительная погрешность",
    description: "Относительная погрешность в процентах.",
    formula_view: "δ = |x−x₀|/|x₀| · 100%",
    cases: {
      1: {name:"Найти δ", inputs:[["x","Приближённое x"],["x0","Точное x₀"]], output:"Относительная погрешность", function:"calc_rel_error", solver:"solve_rel_error", SI:"%"}
    }
  },
  rounding: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Округление",
    description: "Округление числа до указанного количества знаков.",
    formula_view: "round(x, n)",
    cases: {
      1: {name:"Округлить число", inputs:[["x","Число x"],["digits","Знаков после запятой"]], output:"Округлённое число", function:"calc_round", solver:"solve_round"}
    }
  },
  gcd: {
    subject_key: 'математика',
    branch: "elementary",
    title: "НОД",
    description: "Наибольший общий делитель двух целых чисел.",
    formula_view: "НОД(a,b)",
    cases: {
      1: {name:"Найти НОД", inputs:[["a","Целое a"],["b","Целое b"]], output:"НОД", function:"calc_gcd", solver:"solve_gcd"}
    }
  },
  lcm: {
    subject_key: 'математика',
    branch: "elementary",
    title: "НОК",
    description: "Наименьшее общее кратное двух целых чисел.",
    formula_view: "НОК(a,b) = |ab|/НОД(a,b)",
    cases: {
      1: {name:"Найти НОК", inputs:[["a","Целое a"],["b","Целое b"]], output:"НОК", function:"calc_lcm", solver:"solve_lcm"}
    }
  },
  power: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Степень",
    description: "Возведение числа в степень.",
    formula_view: "aⁿ",
    cases: {
      1: {name:"Найти aⁿ", inputs:[["a","Основание a"],["n","Показатель n"]], output:"Результат", function:"calc_power", solver:"solve_power"}
    }
  },
  root: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Корень n-й степени",
    description: "Извлечение корня.",
    formula_view: "ⁿ√x = x^(1/n)",
    cases: {
      1: {name:"Найти корень", inputs:[["x","Подкоренное выражение x"],["n","Степень n"]], output:"Корень", function:"calc_root", solver:"solve_root"}
    }
  },
  factorial: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Факториал",
    description: "Произведение целых чисел от 1 до n.",
    formula_view: "n! = 1·2·…·n",
    cases: {
      1: {name:"Найти n!", inputs:[["n","Целое n"]], output:"Факториал", function:"calc_factorial", solver:"solve_factorial"}
    }
  },
  linear_interpolation: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Линейная интерполяция",
    description: "Приближённое значение между двумя известными узлами.",
    formula_view: "y = y₁ + (y₂−y₁)(x−x₁)/(x₂−x₁)",
    cases: {
      1: {name:"Найти y", inputs:[["x1","x₁"],["y1","y₁"],["x2","x₂"],["y2","y₂"],["x","Нужная точка x"]], output:"y", function:"calc_interp_linear", solver:"solve_linear_interpolation"}
    }
  },
};