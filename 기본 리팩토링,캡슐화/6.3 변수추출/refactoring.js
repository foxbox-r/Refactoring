const order = {
  quantity: 600,
  itemPrice: 20100,
};

function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  return basePrice - quantityDiscount + shipping;
}

console.log(price(order));
