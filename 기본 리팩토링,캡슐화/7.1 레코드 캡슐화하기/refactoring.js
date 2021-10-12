const orderData = {
  product: "apple",
  price: 800,
  quantity: 30,
};

class Order {
  constructor(data) {
    this._product = data.product;
    this._price = data.price;
    this._quantity = data.quantity;
  }
  get product() {
    return this._product;
  }
  get price() {
    return this._price;
  }
  get quantity() {
    return this._quantity;
  }
  // Computed Value
  get totalPrice() {
    return this.price * this.quantity;
  }
}

const order = new Order(orderData);

console.log(`상품명 : ${order.product}`);
console.log(`가격 : ${order.price}`);
console.log(`개수 : ${order.quantity}`);
console.log(`총 금액 : ${order.totalPrice}`);
