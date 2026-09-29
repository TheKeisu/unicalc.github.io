export const SUBJECT_KEY='math';
export const SECTION_KEY="elementary/stereometry";
export const BRANCH="elementary";
export const FORMULAS = {
  cuboid_volume: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Объём прямоугольного параллелепипеда",
    description: "Произведение трёх рёбер.",
    formula_view: "V=abc",
    cases: {
      1: {name:"Найти V", inputs:[["a","a"],["b","b"],["c","c"]], output:"V", function:"calc_cuboid_volume", solver:"solve_cuboid_volume"}
    }
  },
  cuboid_surface: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Полная поверхность параллелепипеда",
    description: "Площадь всех граней.",
    formula_view: "S=2(ab+bc+ac)",
    cases: {
      1: {name:"Найти S", inputs:[["a","a"],["b","b"],["c","c"]], output:"S", function:"calc_cuboid_area", solver:"solve_cuboid_area"}
    }
  },
  cuboid_diagonal: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Диагональ параллелепипеда",
    description: "Пространственная диагональ.",
    formula_view: "d=√(a²+b²+c²)",
    cases: {
      1: {name:"Найти d", inputs:[["a","a"],["b","b"],["c","c"]], output:"d", function:"calc_cuboid_diag", solver:"solve_cuboid_diag"}
    }
  },
  prism_volume: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Объём призмы",
    description: "По площади основания и высоте.",
    formula_view: "V=Sоснh",
    cases: {
      1: {name:"Найти V", inputs:[["S","Площадь основания"],["h","Высота"]], output:"V", function:"calc_prism_volume", solver:"solve_prism_volume"}
    }
  },
  prism_surface: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь поверхности призмы",
    description: "Для заданной площади основания и боковой поверхности.",
    formula_view: "S=2Sосн+Sбок",
    cases: {
      1: {name:"Найти S", inputs:[["Sbase","Площадь основания"],["Sside","Боковая поверхность"]], output:"S", function:"calc_prism_area", solver:"solve_prism_area"}
    }
  },
  cylinder_volume: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Объём цилиндра",
    description: "Объём цилиндра.",
    formula_view: "V=πr²h",
    cases: {
      1: {name:"Найти V", inputs:[["r","r"],["h","h"]], output:"V", function:"calc_cyl_volume", solver:"solve_cyl_volume"}
    }
  },
  cylinder_surface: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь цилиндра",
    description: "Полная поверхность цилиндра.",
    formula_view: "S=2πr(r+h)",
    cases: {
      1: {name:"Найти S", inputs:[["r","r"],["h","h"]], output:"S", function:"calc_cyl_area", solver:"solve_cyl_area"}
    }
  },
  cylinder_lateral: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Боковая поверхность цилиндра",
    description: "Площадь боковой поверхности.",
    formula_view: "Sбок=2πrh",
    cases: {
      1: {name:"Найти Sбок", inputs:[["r","r"],["h","h"]], output:"Sбок", function:"calc_cyl_lateral", solver:"solve_cyl_lateral"}
    }
  },
  cone_slant: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Образующая конуса",
    description: "Образующая прямого кругового конуса.",
    formula_view: "l=√(r²+h²)",
    cases: {
      1: {name:"Найти l", inputs:[["r","r"],["h","h"]], output:"l", function:"calc_cone_slant", solver:"solve_cone_slant"}
    }
  },
  cone_volume: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Объём конуса",
    description: "Объём конуса.",
    formula_view: "V=πr²h/3",
    cases: {
      1: {name:"Найти V", inputs:[["r","r"],["h","h"]], output:"V", function:"calc_cone_volume", solver:"solve_cone_volume"}
    }
  },
  cone_surface: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь поверхности конуса",
    description: "Полная поверхность.",
    formula_view: "S=πr(r+l)",
    cases: {
      1: {name:"Найти S", inputs:[["r","r"],["h","h"]], output:"S", function:"calc_cone_area", solver:"solve_cone_area"}
    }
  },
  frustum_cone_volume: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Объём усечённого конуса",
    description: "Объём через радиусы оснований.",
    formula_view: "V=πh(R²+Rr+r²)/3",
    cases: {
      1: {name:"Найти V", inputs:[["R","Больший радиус R"],["r","Меньший радиус r"],["h","h"]], output:"V", function:"calc_frustum_cone_volume", solver:"solve_frustum_cone_volume"}
    }
  },
  frustum_cone_surface: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Поверхность усечённого конуса",
    description: "Полная поверхность через образующую.",
    formula_view: "S=π(R²+r²+(R+r)l)",
    cases: {
      1: {name:"Найти S", inputs:[["R","R"],["r","r"],["h","h"]], output:"S", function:"calc_frustum_cone_area", solver:"solve_frustum_cone_area"}
    }
  },
  sphere_volume: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Объём шара",
    description: "Объём шара.",
    formula_view: "V=4πr³/3",
    cases: {
      1: {name:"Найти V", inputs:[["r","r"]], output:"V", function:"calc_sphere_volume", solver:"solve_sphere_volume"}
    }
  },
  sphere_surface: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь сферы",
    description: "Площадь поверхности шара.",
    formula_view: "S=4πr²",
    cases: {
      1: {name:"Найти S", inputs:[["r","r"]], output:"S", function:"calc_sphere_area", solver:"solve_sphere_area"}
    }
  },
  spherical_cap_volume: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Объём шарового сегмента",
    description: "Объём сегмента шара.",
    formula_view: "V=πh²(r−h/3)",
    cases: {
      1: {name:"Найти V", inputs:[["r","Радиус шара r"],["h","Высота сегмента h"]], output:"V", function:"calc_spherical_cap_volume", solver:"solve_spherical_cap_volume"}
    }
  },
  spherical_cap_area: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Площадь шарового сегмента",
    description: "Площадь поверхности сегмента.",
    formula_view: "S=2πrh",
    cases: {
      1: {name:"Найти S", inputs:[["r","r"],["h","h"]], output:"S", function:"calc_spherical_cap_area", solver:"solve_spherical_cap_area"}
    }
  },
  pyramid_volume: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Объём пирамиды",
    description: "Объём пирамиды.",
    formula_view: "V=Sоснh/3",
    cases: {
      1: {name:"Найти V", inputs:[["S","Sосн"],["h","h"]], output:"V", function:"calc_pyramid_volume", solver:"solve_pyramid_volume"}
    }
  },
  frustum_pyramid_volume: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Объём усечённой пирамиды",
    description: "Объём по площадям оснований.",
    formula_view: "V=h(S₁+√(S₁S₂)+S₂)/3",
    cases: {
      1: {name:"Найти V", inputs:[["S1","S₁"],["S2","S₂"],["h","h"]], output:"V", function:"calc_frustum_pyramid_volume", solver:"solve_frustum_pyramid_volume"}
    }
  },
  regular_tetrahedron_volume: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Объём правильного тетраэдра",
    description: "Объём правильного тетраэдра.",
    formula_view: "V=a³/(6√2)",
    cases: {
      1: {name:"Найти V", inputs:[["a","Ребро a"]], output:"V", function:"calc_regular_tetra_volume", solver:"solve_regular_tetra_volume"}
    }
  },
  regular_tetrahedron_area: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Поверхность правильного тетраэдра",
    description: "Полная площадь поверхности.",
    formula_view: "S=√3a²",
    cases: {
      1: {name:"Найти S", inputs:[["a","Ребро a"]], output:"S", function:"calc_regular_tetra_area", solver:"solve_regular_tetra_area"}
    }
  },
  cube_volume: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Объём куба",
    description: "Объём куба.",
    formula_view: "V=a³",
    cases: {
      1: {name:"Найти V", inputs:[["a","Ребро a"]], output:"V", function:"calc_cube_volume", solver:"solve_cube_volume"}
    }
  },
  cube_surface: {
    subject_key: 'математика',
    branch: "elementary",
    title: "Поверхность куба",
    description: "Площадь поверхности куба.",
    formula_view: "S=6a²",
    cases: {
      1: {name:"Найти S", inputs:[["a","Ребро a"]], output:"S", function:"calc_cube_area", solver:"solve_cube_area"}
    }
  },
};