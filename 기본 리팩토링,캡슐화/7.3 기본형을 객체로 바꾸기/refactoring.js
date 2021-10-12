class Order {
  constructor(data) {
    this._priority = data;
  }

  get priorityString() {
    return this._priority.toString();
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

class Priority {
  constructor(value) {
    this._value = value;
  }

  // 이 상황에서는 개인적으로 게터(get value())보다는 변환함수(toString())를 선호한다.
  // 클라이언트 입장에서 보면 속성 자체를 받은 게 아니라 해당 속성을 문자열로 표현한 값을 요청한게 되기 때문
  toString() {
    return this._value;
  }
  static legalValues() {
    return ["low", "nomal", "high", "rush"];
  }
  get _index() {
    return Priority.legalValues().findIndex((v) => v === this._value);
  }
  equals(other) {
    return this._index === other._index;
  }
  higherThan(other) {
    return this._index > other._index;
  }
  lowerThan(other) {
    return this._index < other._index;
  }
}

const orders = [
  new Order(new Priority("low")),
  new Order(new Priority("nomal")),
  new Order(new Priority("high")),
  new Order(new Priority("rush")),
];

orders.map((o) => console.log(o.priority));

const numOfHighAanRus = orders.filter((o) =>
  o.priority.higherThan(new Priority("nomal"))
).length;

console.log(numOfHighAanRus);
