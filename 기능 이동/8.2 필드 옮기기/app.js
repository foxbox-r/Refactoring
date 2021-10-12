function dateToday() {
  /***/
}
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(dateToday());
  }

  get discountRate() {
    return this._discountRate;
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
  constructor(startDate) {
    this._startDate = startDate;
  }
}

//============================================

class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}

class AccountType {
  constructor(nameString) {
    this._name = nameString;
  }
}
