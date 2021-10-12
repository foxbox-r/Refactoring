class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get basePrice() {
    return this.quantity * this._item.price;
  }

  get discountFactor() {
    var discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return discountFactor;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }
}
