leaderEngineer = createEngineer(document.leaderEngineer);

function createEngineer(name) {
  return new Employee(name, "E");
}

class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() {
    return this._name;
  }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get leaderTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesperson" };
  }
}
