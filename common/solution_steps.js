export class SolutionSteps {
  constructor() {
    this.steps = [];
  }

  addStep(description, formula, result) {
    this.steps.push({ description, formula, result });
  }

  getSteps() {
    return this.steps;
  }

  clear() {
    this.steps = [];
  }
}