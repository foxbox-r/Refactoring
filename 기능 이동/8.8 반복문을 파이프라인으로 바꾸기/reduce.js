const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// 1 + 2
// 3 + 3
// 6 + 4
// result 10
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// 5 + 1
// 6 + 2
// 8 + 3
// 11 + 4
// result 15
// expected output: 15
