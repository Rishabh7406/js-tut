// in this file , scope , hoisting , tdz
//========================== scope==========================
function testScope() {
    var a = 1;
    let b = 2;
    const c = 3;

    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
        console.log("Inside block:", a, b, c);
    }

    console.log("Outside block:", a, b, c);
}

testScope();


function test() {
    if (true) {
        var a = 10;    // function scoped
        let b = 20;    // block scoped
    }
    console.log(a);  // 10 ✅
    console.log(b);  // Error ❌
}
test();

//========================== hoisting==========================
greet(); // ✅ Works because function is hoisted

function greet() {
    console.log("Hello students!");
}
//========================== TDZ==========================
console.log(a); // undefined ✅
var a = 5;

// console.log(b); // Error ❌ (TDZ)
// let b = 10;

// console.log(c); // Error ❌ (TDZ)
// const c = 15;




    