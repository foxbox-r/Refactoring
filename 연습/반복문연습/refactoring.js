class ResultClass {
  constructor(collection) {
    this._collection = collection;
  }

  get collection() {
    return this._collection;
  }

  get getAverageAge() {
    const totalSalary = this.collection.reduce(
      (accumulate, person) => accumulate + person.age,
      0
    );
    const result = totalSalary / personArr.length;
    return result;
  }

  get getMinSalary() {
    return Math.min(...this.collection.map((person) => person.salary));
  }

  printResult() {
    console.log("total salary : ", this.getMinSalary);
    console.log("average age : ", this.getAverageAge);
  }
}

class Person {
  constructor(personInfo) {
    this._age = personInfo.age;
    this._salary = personInfo.salary;
  }

  get age() {
    return this._age;
  }
  get salary() {
    return this._salary;
  }
}

const personArr = [
  new Person({ age: 20, salary: 500 }),
  new Person({ age: 25, salary: 5600 }),
  new Person({ age: 24, salary: 1500 }),
];

const result = new ResultClass(personArr);

result.printResult();
