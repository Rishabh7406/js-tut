const fs = require('fs');

// Write
fs.writeFileSync('test.txt', 'Hello Node!');

// Read
const data = fs.readFileSync('test.txt', 'utf-8');
console.log(data);

// Append
fs.appendFileSync('test.txt', '\nMore content');

// Delete
// fs.unlinkSync('test.txt');
