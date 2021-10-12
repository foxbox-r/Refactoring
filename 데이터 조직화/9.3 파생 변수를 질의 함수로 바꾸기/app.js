class ProductionPlan {
  constructor() {
    this._adjustments = [];
    this._production = 0;
  }

  get production() {
    return this._production;
  }
  applyAdjusment(anAdustment) {
    this._adjustments.push(anAdustment);
    this._production += anAdustment.amount;
  }
}
