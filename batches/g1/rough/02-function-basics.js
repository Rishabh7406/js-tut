// Batch G1 - Session 2
// Function Basics

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Function Expression
const add = function (a, b) {
    return a + b;
};

// 3. Arrow Function
const multiply = (a, b) => a * b;

// 4. Higher Order Function
function processArray(arr, callback) {
    return arr.map(callback);
}

// Example usage
console.log(greet("Alice"));
console.log(add(5, 3));
console.log(multiply(4, 6));

let numbers = [1, 2, 3, 4, 5];
let doubled = processArray(numbers, x => x * 2);
console.log(doubled);
