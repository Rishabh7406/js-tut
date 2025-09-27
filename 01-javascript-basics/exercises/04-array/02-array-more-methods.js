// 1. slice()
const arr1 = [10, 20, 30, 40];
const firstTwo = arr1.slice(0, 2);
console.log(firstTwo); // [10, 20]

// 2. splice()
const arr2 = ["apple", "banana", "mango"];
arr2.splice(1, 1); // remove 1 element at index 1
console.log(arr2); // ["apple", "mango"]

// 3. map()
const arr3 = [1, 2, 3, 4];
const squares = arr3.map(n => n * n);
console.log(squares); // [1, 4, 9, 16]

// 4. filter()
const arr4 = [2, 6, 8, 3];
const greaterThan5 = arr4.filter(n => n > 5);
console.log(greaterThan5); // [6, 8]

// 5. reduce()
const arr5 = [5, 10, 15];
const sum = arr5.reduce((acc, n) => acc + n, 0);
console.log(sum); // 30
