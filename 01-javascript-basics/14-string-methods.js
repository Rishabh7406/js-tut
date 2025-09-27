// File: 023_stringMethods.js

let text = "Hello World";

// 1. includes() → checks if substring exists
console.log("includes():", text.includes("World")); // true

// 2. replace() → replaces substring
console.log("replace():", text.replace("World", "JS")); // Hello JS

// 3. split() → splits string into array
console.log("split():", text.split(" ")); // ["Hello", "World"]

// 4. toUpperCase() / toLowerCase() → change case
console.log("toUpperCase():", text.toUpperCase()); // HELLO WORLD
console.log("toLowerCase():", text.toLowerCase()); // hello world

// 5. charAt() → gets character at index
console.log("charAt():", text.charAt(6)); // W

// 6. indexOf() / lastIndexOf() → finds index of substring
console.log("indexOf():", text.indexOf("World")); // 6
console.log("lastIndexOf():", text.lastIndexOf("o")); // 7

// 7. startsWith() / endsWith() → checks start or end
console.log("startsWith():", text.startsWith("Hello")); // true
console.log("endsWith():", text.endsWith("World")); // true

// 8. trim() → removes whitespace
let spaced = "   JS Rocks!   ";
console.log("trim():", `"${spaced.trim()}"`); // "JS Rocks!"

// 9. repeat() → repeats string
console.log("repeat():", "Ha! ".repeat(3)); // Ha! Ha! Ha! 

// 10. slice() / substring() → extracts part of string
console.log("slice():", text.slice(0, 5)); // Hello
console.log("substring():", text.substring(6, 11)); // World

// 11. concat() → joins strings
let greet = "Hello".concat(" ", "Students");
console.log("concat():", greet); // Hello Students

// 12. includes + conditional example
if (text.includes("JS")) {
    console.log("JS found!");
} else {
    console.log("JS not found!");
}