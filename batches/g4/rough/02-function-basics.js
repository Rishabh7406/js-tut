// Batch G4 - Session 2
// Function Basics

// 1. Function with validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 2. Function with error handling
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// 3. Function with array methods
function processUsers(users) {
    return users
        .filter(user => user.age >= 18)
        .map(user => ({ ...user, isAdult: true }))
        .sort((a, b) => a.name.localeCompare(b.name));
}

// 4. Function with object methods
const userService = {
    users: [],

    addUser(user) {
        if (validateEmail(user.email)) {
            this.users.push(user);
            return true;
        }
        return false;
    },

    getUsers() {
        return [...this.users];
    }
};

// Example usage
console.log(validateEmail("test@example.com"));

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (error) {
    console.log(error.message);
}

const users = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 17, email: "bob@example.com" },
    { name: "Charlie", age: 30, email: "charlie@example.com" }
];

console.log(processUsers(users));

userService.addUser({ name: "David", age: 28, email: "david@example.com" });
console.log(userService.getUsers());
