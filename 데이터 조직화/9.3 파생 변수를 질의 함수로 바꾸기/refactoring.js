class ProductionPlan {
  constructor() {
    this._adjustments = [];
    this._production = 0;
  }

  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjusment(anAdustment) {
    this._adjustments.push(anAdustment);
  }
}
