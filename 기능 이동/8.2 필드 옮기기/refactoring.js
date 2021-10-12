function dateToday() {
  /***/
}
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday());
    // this._setDiscounteRate(discountRate);
  }

  get discountRate() {
    return this._contract.discountRate;
  }
  _setDiscounteRate(aNumber) {
    this._contract.discountRate = aNumber;
  }

  becomePreferred() {
    this._discountRate += 0.03;
    /* 다른로직들... */
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }
  set discountRate(arg) {
    this._discountRate = arg;
  }
}

new Customer("sua", 3);

//============================================

class Account {
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }

  get interestRate() {
    return this._type.interestRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}
