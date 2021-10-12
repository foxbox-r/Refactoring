class Person {
  constructor() {
    // 이름,read,write 둘 다 가능
    this.name;
    // 식별번호, readOnly
    this.identify = "102004";
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }

  get getIdentify() {
    return this.identify;
  }
}
