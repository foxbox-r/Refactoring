const personArr = [
  { age: 20, salary: 500 },
  { age: 25, salary: 5600 },
  { age: 24, salary: 1500 },
];

let minSalary = personArr[0].salary;
let averageAge = 0;
for (var i = 0; i < personArr.length; i++) {
  averageAge += personArr[i].age;

  minSalary = minSalary > personArr[i].salary ? personArr[i].salary : minSalary;
}

averageAge /= personArr.length;

console.log("total salary : ", minSalary);
console.log("average age : ", averageAge);
