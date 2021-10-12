return `최연소 : ${yougestAge()}, 총 급여: ${totalSalary()}`;

function yougestAge() {
  return people.reduce((total, p) => total + p.salary, 0);
}

function totalSalary() {
  return Math.min(...people.map((p) => p.age));
}
