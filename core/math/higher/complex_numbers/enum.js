export const SUBJECT_KEY='math';
export const SECTION_KEY="higher/complex_numbers";
export const BRANCH="higher";
export const FORMULAS = {
  complex_add_re: {
    subject_key: 'математика',
    branch: "higher",
    title: "Сложение — Re",
    description: "Действительная часть суммы.",
    formula_view: "Re(z₁+z₂)=a+c",
    cases: {
      1: {name:"Найти Re", inputs:[["a","a"],["c","c"]], output:"Re", function:"calc_c_add_re", solver:"solve_c_add_re"}
    }
  },
  complex_add_im: {
    subject_key: 'математика',
    branch: "higher",
    title: "Сложение — Im",
    description: "Мнимая часть суммы.",
    formula_view: "Im(z₁+z₂)=b+d",
    cases: {
      1: {name:"Найти Im", inputs:[["b","b"],["d","d"]], output:"Im", function:"calc_c_add_im", solver:"solve_c_add_im"}
    }
  },
  complex_sub_re: {
    subject_key: 'математика',
    branch: "higher",
    title: "Вычитание — Re",
    description: "Действительная часть разности.",
    formula_view: "Re(z₁−z₂)=a−c",
    cases: {
      1: {name:"Найти Re", inputs:[["a","a"],["c","c"]], output:"Re", function:"calc_c_sub_re", solver:"solve_c_sub_re"}
    }
  },
  complex_sub_im: {
    subject_key: 'математика',
    branch: "higher",
    title: "Вычитание — Im",
    description: "Мнимая часть разности.",
    formula_view: "Im(z₁−z₂)=b−d",
    cases: {
      1: {name:"Найти Im", inputs:[["b","b"],["d","d"]], output:"Im", function:"calc_c_sub_im", solver:"solve_c_sub_im"}
    }
  },
  complex_mul_re: {
    subject_key: 'математика',
    branch: "higher",
    title: "Умножение — Re",
    description: "Действительная часть произведения.",
    formula_view: "Re(z₁z₂)=ac−bd",
    cases: {
      1: {name:"Найти Re", inputs:[["a","a"],["b","b"],["c","c"],["d","d"]], output:"Re", function:"calc_c_mul_re", solver:"solve_c_mul_re"}
    }
  },
  complex_mul_im: {
    subject_key: 'математика',
    branch: "higher",
    title: "Умножение — Im",
    description: "Мнимая часть произведения.",
    formula_view: "Im(z₁z₂)=ad+bc",
    cases: {
      1: {name:"Найти Im", inputs:[["a","a"],["b","b"],["c","c"],["d","d"]], output:"Im", function:"calc_c_mul_im", solver:"solve_c_mul_im"}
    }
  },
  complex_div_re: {
    subject_key: 'математика',
    branch: "higher",
    title: "Деление — Re",
    description: "Действительная часть частного.",
    formula_view: "Re(z₁/z₂)=(ac+bd)/(c²+d²)",
    cases: {
      1: {name:"Найти Re", inputs:[["a","a"],["b","b"],["c","c"],["d","d"]], output:"Re", function:"calc_c_div_re", solver:"solve_c_div_re"}
    }
  },
  complex_div_im: {
    subject_key: 'математика',
    branch: "higher",
    title: "Деление — Im",
    description: "Мнимая часть частного.",
    formula_view: "Im(z₁/z₂)=(bc−ad)/(c²+d²)",
    cases: {
      1: {name:"Найти Im", inputs:[["a","a"],["b","b"],["c","c"],["d","d"]], output:"Im", function:"calc_c_div_im", solver:"solve_c_div_im"}
    }
  },
  complex_mod: {
    subject_key: 'математика',
    branch: "higher",
    title: "Модуль комплексного числа",
    description: "Модуль a+bi.",
    formula_view: "|z|=√(a²+b²)",
    cases: {
      1: {name:"Найти |z|", inputs:[["a","a"],["b","b"]], output:"|z|", function:"calc_mod", solver:"solve_c_mod"}
    }
  },
  complex_arg: {
    subject_key: 'математика',
    branch: "higher",
    title: "Аргумент комплексного числа",
    description: "Главное значение arg в градусах.",
    formula_view: "arg z=atan2(b,a)",
    cases: {
      1: {name:"Найти arg", inputs:[["a","a"],["b","b"]], output:"arg z, °", function:"calc_arg", solver:"solve_c_arg", SI:"°"}
    }
  },
  polar_to_complex_re: {
    subject_key: 'математика',
    branch: "higher",
    title: "Полярная форма — Re",
    description: "Re z по r и φ.",
    formula_view: "a=r cosφ",
    cases: {
      1: {name:"Найти Re", inputs:[["r","r"],["thetaDeg","φ, °"]], output:"Re", function:"calc_from_polar_re", solver:"solve_polar_re"}
    }
  },
  polar_to_complex_im: {
    subject_key: 'математика',
    branch: "higher",
    title: "Полярная форма — Im",
    description: "Im z по r и φ.",
    formula_view: "b=r sinφ",
    cases: {
      1: {name:"Найти Im", inputs:[["r","r"],["thetaDeg","φ, °"]], output:"Im", function:"calc_from_polar_im", solver:"solve_polar_im"}
    }
  },
  demoivre_mod: {
    subject_key: 'математика',
    branch: "higher",
    title: "Формула Муавра — модуль",
    description: "Модуль степени zⁿ.",
    formula_view: "|zⁿ|=|z|ⁿ",
    cases: {
      1: {name:"Найти |zⁿ|", inputs:[["r","r"],["n","n"]], output:"Модуль", function:"calc_demoivre_mod", solver:"solve_demoivre_mod"}
    }
  },
  demoivre_arg: {
    subject_key: 'математика',
    branch: "higher",
    title: "Формула Муавра — аргумент",
    description: "Аргумент zⁿ.",
    formula_view: "arg(zⁿ)=n arg z",
    cases: {
      1: {name:"Найти arg", inputs:[["thetaDeg","arg z, °"],["n","n"]], output:"Аргумент, °", function:"calc_demoivre_arg", solver:"solve_demoivre_arg", SI:"°"}
    }
  },
  complex_root_mod: {
    subject_key: 'математика',
    branch: "higher",
    title: "Корень комплексного числа — модуль",
    description: "Модуль одного корня.",
    formula_view: "|z|^(1/n)",
    cases: {
      1: {name:"Найти модуль корня", inputs:[["r","|z|"],["n","n"]], output:"Модуль корня", function:"calc_root_complex_mod", solver:"solve_complex_root"}
    }
  },
  euler_formula_re: {
    subject_key: 'математика',
    branch: "higher",
    title: "Формула Эйлера — Re",
    description: "Действительная часть re^{iφ}.",
    formula_view: "Re z=r cosφ",
    cases: {
      1: {name:"Найти Re", inputs:[["r","r"],["thetaDeg","φ, °"]], output:"Re", function:"calc_euler_re", solver:"solve_euler_re"}
    }
  },
  euler_formula_im: {
    subject_key: 'математика',
    branch: "higher",
    title: "Формула Эйлера — Im",
    description: "Мнимая часть re^{iφ}.",
    formula_view: "Im z=r sinφ",
    cases: {
      1: {name:"Найти Im", inputs:[["r","r"],["thetaDeg","φ, °"]], output:"Im", function:"calc_euler_im", solver:"solve_euler_im"}
    }
  },
};