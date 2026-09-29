export class FormulaRegistry {
  constructor() {
    this.formulas = new Map();
  }

  register(id, formulaMetadata) {
    this.formulas.set(id, formulaMetadata);
  }

  get(id) {
    return this.formulas.get(id);
  }

  getAll() {
    return Array.from(this.formulas.values());
  }
}