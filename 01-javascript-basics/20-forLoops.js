// File: 020_forLoops.js

// 1. Classic for loop
console.log("Classic for loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. for...in loop (object keys)
console.log("\nfor...in loop:");
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
}

// 3. for...of loop (iterable values)
console.log("\nfor...of loop:");
const arr = [10, 20, 30];
for (let val of arr) {
    console.log(val);
}

// 4. forEach (array method)
console.log("\nforEach loop:");
arr.forEach((num, index) => console.log(index, num));
