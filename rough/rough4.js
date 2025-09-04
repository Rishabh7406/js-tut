// // (function greet() {
// //     console.log("hello world")
// // })()

// // function greet(a,b,c=10){
// // console.log(a+c);
// // }

// // greet(10,15);
// console.log("hello")
// const greet =  ()=>{
//     console.log("hello")
// }





const greet = (name) => {
    console.log("Hello ", name);
}
let names = ["abhishek", "aman","rishabh","kulsum"];

names.forEach(greet)

// let a = 10;
// let b = 20;
// let sum = a + b;
// console.log("sum =", sum);

function sum(a, b) {
    return a + b;
}
let result = sum(10, 20);
console.log("sum is:", result);


function func(temp) {
    var cel = (temp - 32) * (5 / 9);
    return cel;
}
var ans = func(30);
console.log(ans)