// 1. Find the position of the first "a" in "cat".
let word1 = "cat";
console.log(word1.indexOf("a")); // gives 1 (index starts from 0)

// 2. Print the second character of "dog".
let word2 = "dog";
console.log(word2.charAt(1)); // "o" (because index 0 = "d", index 1 = "o")

// 3. Get the last character of "pen".
let word3 = "pen";
console.log(word3.at(-1)); // "n" (negative index counts from end)

// 4. Extract "car" from "carpet".
let word4 = "carpet";
console.log(word4.slice(0, 3)); // "car" (starts at 0, ends before 3)

// 5. Get the first three letters of "sun".
let word5 = "sun";
console.log(word5.substring(0, 3)); // "sun"

// 6. From "book", extract 2 letters starting from index 1.
let word6 = "book";
console.log(word6.substr(1, 2)); // "oo" (start at 1, take 2 letters)

// 7. Remove spaces from "   hi   ".
let word7 = "   hi   ";
console.log(word7.trim()); // "hi" (removes spaces at both ends)

// 8. Split "red,blue,green" into an array of colors.
let word8 = "red,blue,green";
console.log(word8.split(",")); // ["red", "blue", "green"]

// 9. Replace "tea" with "coffee" in "I like tea".
let word9 = "I like tea";
console.log(word9.replace("tea", "coffee")); // "I like coffee"
