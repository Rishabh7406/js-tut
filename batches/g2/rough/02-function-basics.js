// Batch G2 - Session 2
// Function Basics

// 1. Function with default parameters
function createUser(name, age = 18, isActive = true) {
    return { name, age, isActive };
}

// 2. Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// 3. Destructuring in functions
function displayUser({ name, age, email }) {
    console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}

// 4. Callback function example
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 1000);
}

// Example usage
let user1 = createUser("Bob");
let user2 = createUser("Charlie", 25, false);

console.log(sum(1, 2, 3, 4, 5));

displayUser({ name: "Alice", age: 30, email: "alice@example.com" });

fetchData(result => console.log(result));
