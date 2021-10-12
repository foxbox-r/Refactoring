const order = {
  product: "apple",
  price: 800,
  quantity: 30,
};

console.log(`상품명 : ${order.product}`);
console.log(`가격 : ${order.price}`);
console.log(`개수 : ${order.quantity}`);
console.log(`총 금액 : ${order.price * order.quantity}`);
