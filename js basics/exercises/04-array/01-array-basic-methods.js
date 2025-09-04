// 1. Add "orange" to ["apple", "banana", "mango"] using push().
let fruits = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "mango", "orange"]

// 2. Remove the last item from ["red", "green", "blue"] using pop().
let colors = ["red", "green", "blue"];
colors.pop();
console.log(colors); // ["red", "green"]

// 3. Access the second element from ["cat", "dog", "rabbit"].
let animals = ["cat", "dog", "rabbit"];
console.log(animals[1]); // "dog" (arrays start at index 0)

// 4. Find the first number greater than 10 in [3, 7, 12, 5, 18].
let numbers1 = [3, 7, 12, 5, 18];
console.log(numbers1.find(n => n > 10)); // 12

// 5. Check if at least one number is even in [1, 3, 5, 8].
let numbers2 = [1, 3, 5, 8];
console.log(numbers2.some(n => n % 2 === 0)); // true

// 6. Check if all numbers are positive in [2, 4, 6, 8].
let numbers3 = [2, 4, 6, 8];
console.log(numbers3.every(n => n > 0)); // true
