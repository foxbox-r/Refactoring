let yougest = people[0] ? people[0].age : Infinity;
let totalSalary = 0;
for (const p of people) {
  if (p.age < yougest) yougest = p.age;
  totalSalary += p.salary;
}

return `최연소 : ${yougest}, 총 급여: ${totalSalary}`;
