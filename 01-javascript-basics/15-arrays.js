// File: 026_arrayMethods.js

let arr = [10, 20, 30];

// 1. length → number of elements
console.log("length:", arr.length); // 3

// 2. forEach → iterate over elements
console.log("forEach:");
arr.forEach(x => console.log(x)); // 10 20 30

// 3. push → add element at end
arr.push(40);
console.log("after push(40):", arr); // [10,20,30,40]

// 4. pop → remove last element
arr.pop();
console.log("after pop():", arr); // [10,20,30]

// 5. shift → remove first element
arr.shift();
console.log("after shift():", arr); // [20,30]

// 6. unshift → add element at start
arr.unshift(5);
console.log("after unshift(5):", arr); // [5,20,30]

// 7. indexOf / lastIndexOf → find position
console.log("indexOf(20):", arr.indexOf(20)); // 1
console.log("lastIndexOf(30):", arr.lastIndexOf(30)); // 2

// 8. slice → get part of array
console.log("slice(1):", arr.slice(1));    // [20,30]
console.log("slice(0,2):", arr.slice(0, 2)); // [5,20]

// 9. splice → remove/insert/replace elements
arr.splice(1, 1); // remove 1 element at index 1
console.log("after splice(1,1):", arr); // [5,30]
arr.splice(1, 0, 20); // insert 20 at index 1
console.log("after splice(1,0,20):", arr); // [5,20,30]

// 10. map → create new array
let squared = arr.map(x => x * x);
console.log("map(x*x):", squared); // [25,400,900]

// 11. filter → elements meeting condition
let big = arr.filter(x => x > 10);
console.log("filter(x>10):", big); // [20,30]

// 12. reduce → combine elements to single value
function calc(acc, x){
    return acc + x;

}
let sum = arr.reduce(calc, 0);
console.log("reduce(sum):", sum); // 55

// 13. find / findIndex → first matching element
console.log("find(x>15):", arr.find(x => x > 15)); // 20
console.log("findIndex(x>15):", arr.findIndex(x => x > 15)); // 1

// 14. includes → check existence
console.log("includes(20):", arr.includes(20)); // true
console.log("includes(100):", arr.includes(100)); // false

// 15. concat → merge arrays
let arr2 = [40, 50];
console.log("concat:", arr.concat(arr2)); // [5,20,30,40,50]

// 16. reverse → reverse array
console.log("reverse():", arr.reverse()); // [30,20,5]

// 17. sort → sort array
console.log("sort():", arr.sort((a, b) => a - b)); // [5,20,30]
