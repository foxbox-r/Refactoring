class Product {
  constructor(data) {
    this._name = data.name;
    this._price = data.price;
    this._discountRatio = data.discountRatio;
    this._disCountThreshold = data.disCountThreshold;
  }
  get name() {
    return this._name;
  }
  get price() {
    return this._price;
  }
  get discountRatio() {
    return this._discountRatio;
  }
  get disCountThreshold() {
    return this._disCountThreshold;
  }

  getBasePrice(order) {
    return order.quantity * this.price;
  }

  getDiscountPrice(order) {
    return (
      Math.max(order.quantity - this.disCountThreshold, 0) *
      this.price *
      this.discountRatio
    );
  }

  getOrderPrice(order) {
    return this.getBasePrice(order) - this.getDiscountPrice(order);
  }
}

class Order {
  constructor(data) {
    this._quantity = data.quantity;
    this._customer = data.customer;
    this._product = data.product;
  }
  get quantity() {
    return this._quantity;
  }
  get customer() {
    return this._customer;
  }
  get product() {
    return this._product;
  }

  printOrderDescription(productList) {
    // find ordered product in productList
    const product = findProductByName(productList, this.product.name);

    const discountPrice = product.getDiscountPrice(this);
    const orderPrice = product.getOrderPrice(this);
    const prices = { orderPrice, discountPrice };

    // print deatil description result
    printResult(this, prices);

    function findProductByName(productList, productName) {
      const result = productList.find(
        (product) => product.name === productName
      );
      return result;
    }

    function printResult(order, prices) {
      console.log("============================================");
      console.log(`CUSTOMER : ${order.customer}`);
      console.log(`PRODUCT : ${order.product.name}`);
      console.log(`QUANTITY : ${order.quantity}`);
      console.log(`TOTAL PRICE : ${prices.orderPrice}`);
      console.log(`DISCOUNT PRICE : ${prices.discountPrice}`);
    }
  }
}

const productList = [
  new Product({
    name: "A-10", // 제품명
    price: 1000, // 가격
    discountRatio: 0.1, // 할인 비율
    disCountThreshold: 20, // 20 + n개 구매시 n * discountRaio만큼 빼준다.
  }),
  new Product({
    name: "B-13",
    price: 2500,
    discountRatio: 0.25,
    disCountThreshold: 70,
  }),
];

const orderList = [
  new Order({
    quantity: 35,
    customer: "rsua",
    product: { name: "A-10" },
  }),
  new Order({
    quantity: 10,
    customer: "foxboxr",
    product: { name: "A-10" },
  }),
  new Order({
    quantity: 100,
    customer: "rrr",
    product: { name: "B-13" },
  }),
];

orderList.map((order) => order.printOrderDescription(productList));
