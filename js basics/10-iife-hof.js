// IIFE
(function () { console.log("IIFE runs immediately"); })();

// Regular function IIFE
(function () {
    console.log("helo");
})();

// Arrow function IIFE
(() => {
    console.log("hello");
})();

// Object with a method (not an IIFE, but callable)
({
    sayHi: function () {
        console.log("hello from object");
    }
}).sayHi();



// ----- Approach 1: Named callback function -----
function callbackFunction() {
    //some server code that takes time
    console.log("Callback executed");
}

function higherOrderFunction(callback) {
    console.log("HOF called");
    callback();
}

higherOrderFunction(callbackFunction);

// ----- Approach 2: Arrow function callback -----
const higherOrderFunctionArrow = (callback) => {
    console.log("HOF called");
    callback();
};

higherOrderFunctionArrow(() => console.log("Callback executed"));
