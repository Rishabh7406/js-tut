
// 1. Output different names with a greeting
const names = ["Alice", "Bob", "Charlie"];
names.forEach(name => console.log(`Hello, ${name}!`));

// 2. Sum of 2 numbers
function sum(a, b) {
    return a + b;
}
console.log("Sum of 5 + 7 =", sum(5, 7));

// 3. Convert Fahrenheit to Celsius
function fahrenheitToCelsius(f) {
    return (5 / 9) * (f - 32);
}
console.log("100°F in Celsius:", fahrenheitToCelsius(100).toFixed(2));
