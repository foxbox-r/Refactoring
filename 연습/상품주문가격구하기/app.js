const productList = [
  {
    name: "A-10", // 제품명
    price: 1000, // 가격
    discountRatio: 0.1, // 할인 비율
    disCountThreshold: 20, // 20 + n개 구매시 n * discountRaio만큼 빼준다.
  },
  {
    name: "B-13",
    price: 2500,
    discountRatio: 0.25,
    disCountThreshold: 70,
  },
];

const orderList = [
  {
    quantity: 35,
    customer: "rsua",
    product: { name: "A-10" },
  },
  {
    quantity: 10,
    customer: "foxboxr",
    product: { name: "A-10" },
  },
  {
    quantity: 100,
    customer: "rrr",
    product: { name: "B-13" },
  },
];

function printOrderDescription(order, productList) {
  const product = productList.find(
    (product) => product.name === order.product.name
  );
  const basePrice = order.quantity * product.price;
  const discountPrice =
    Math.max(order.quantity - product.disCountThreshold, 0) *
    product.price *
    product.discountRatio;
  const orderPrice = basePrice - discountPrice;

  console.log("============================================");
  console.log(`CUSTOMER : ${order.customer}`);
  console.log(`PRODUCT : ${order.product.name}`);
  console.log(`QUANTITY : ${order.quantity}`);
  console.log(`TOTAL PRICE : ${orderPrice}`);
  console.log(`DISCOUNT PRICE : ${discountPrice}`);
}

orderList.map((order) => printOrderDescription(order, productList));
