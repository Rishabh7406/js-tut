// Batch G3 - Session 2
// Function Basics

// 1. Function returning another function (Closure)
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

// 2. Function with multiple return values
function getStats(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = sum / numbers.length;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    return { sum, avg, max, min };
}

// 3. Async function
async function fetchUserData(userId) {
    // Simulate API call
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: userId, name: "User" + userId });
        }, 1000);
    });
}

// Example usage
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

const stats = getStats([10, 20, 30, 40, 50]);
console.log(stats);

fetchUserData(123).then(user => console.log(user));
