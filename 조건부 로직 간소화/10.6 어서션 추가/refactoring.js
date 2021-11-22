class Customer {
  set discountRate(aNumber) {
    assert(aNumber == null || aNumber >= 0);
    this._discountRate = aNumber;
  }

  applyDiscount(aNumber) {
    if (!this.discountRate) return aNumber;
    else return aNumber - this.discountRate * aNumber;
  }
}
