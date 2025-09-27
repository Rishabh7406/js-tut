// Batch G2 - Session 1
// Simple Array Questions

// 1. Create an array of names and find names starting with 'A'
let names = ["Alice", "Bob", "Anna", "Charlie", "Amy"];
let aNames = names.filter(name => name.startsWith('A'));
console.log("Names starting with A:", aNames);

// 2. Convert names to uppercase
let upperNames = names.map(name => name.toUpperCase());
console.log("Uppercase names:", upperNames);

// 3. Find the longest name
let longest = names.reduce((longest, current) =>
    current.length > longest.length ? current : longest
);
console.log("Longest name:", longest);
