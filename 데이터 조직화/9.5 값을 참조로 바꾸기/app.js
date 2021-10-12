class Order {
  constructor(data) {
    this._customer = new Customer(data.customer);
    this._number = data.number;
    this._menu = data.menu;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}
