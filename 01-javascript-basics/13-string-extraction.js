// File: 025_stringArrayMethods.js

let s = "JavaScript";
//       0123456789
// Positive Index:  0   1  2  3  4  5  6  7  8  9
// Characters:      J   a  v  a  S  c  r  i  p  t
// Negative Index: -10 -9 -8 -7 -6 -5 -4 -3 -2 -1


// 1. charAt() → character at index
console.log("charAt(0):", s.charAt(0)); // J
console.log("charAt(4):", s.charAt(4)); // S


// -------- substring(start, end) --------
console.log("substring(0,4):", s.substring(0, 4));  // "Java"
console.log("substring(4,10):", s.substring(4, 10)); // "Script"
console.log("substring(-6,10):", s.substring(-6, 10)); // "JavaScript" (-6 treated as 0)

// -------- substr(start, length) --------
console.log("substr(0,4):", s.substr(0, 4));  // "Java"
console.log("substr(4,6):", s.substr(4, 6));  // "Script"
console.log("substr(-6,6):", s.substr(-6, 6)); // "Script"

// 3. slice(start, end) → supports negative index
console.log("slice(0,4):", s.slice(0, 4));     // Java (from index 0 to 3)
console.log("slice(-6):", s.slice(-6));       // Script (last 6 characters)
console.log("slice(4,-2):", s.slice(4, -2));  // Scri (from index 4 to 2nd-last)
console.log("slice(-6, -1):", s.slice(-6, -1)); // Scri p (from -6 to -2)
console.log("slice(-3):", s.slice(-3));       // ipt (last 3 characters)
console.log("slice(-10, -6):", s.slice(-10, -6)); // Java (from -10 to -7)

// ------------------- Array splice -------------------
let arr = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
console.log("\nOriginal array:", arr);

// splice(start, deleteCount, items...) → remove/replace/insert
arr.splice(4, 2); // remove 2 elements from index 4
console.log("After splice(4,2):", arr); // ["J","a","v","a","r","i","p","t"]

arr.splice(4, 0, "S", "c"); // insert without deleting
console.log("After splice(4,0,'S','c'):", arr); // ["J","a","v","a","S","c","r","i","p","t"]

arr.splice(0, 1, "j"); // replace first element
console.log("After splice(0,1,'j'):", arr); // ["j","a","v","a","S","c","r","i","p","t"]
