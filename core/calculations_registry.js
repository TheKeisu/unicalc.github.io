export class CalculationRegistry {
  constructor() {
    this.solvers = new Map();
  }

  register(section, solverFn) {
    this.solvers.set(section, solverFn);
  }

  calculate(section, formulaId, params) {
    const solver = this.solvers.get(section);
    if (!solver) {
      throw new Error(`Модуль расчета для раздела "${section}" не найден.`);
    }
    return solver(formulaId, params);
  }
}