// Batch G1 - Session 1
// Simple Array Questions

// 1. Create an array of numbers and find the sum
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// 2. Find the largest number in an array
let max = Math.max(...numbers);
console.log("Max:", max);

// 3. Filter even numbers
let evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);
