// null-vs-undefined.js

// 1. undefined → declared but not assigned
let a;
console.log("a =", a); // undefined

// 2. null → explicitly set to "no value"
let b = null;
console.log("b =", b); // null

// 3. not defined → variable never declared
try {
    console.log("c =", c); // ReferenceError
} catch (err) {
    console.log("c is not defined ->", err.message);
}

// 4. property does not exist
let obj = {};
console.log("obj.x =", obj.x); // undefined

// 5. NaN example
let num = 0 / 0;
console.log("NaN example:", num);

// 6. Truthy/Falsy check
console.log("Boolean(undefined):", Boolean(undefined));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(NaN):", Boolean(NaN));


/*
a = undefined
b = null
c is not defined -> c is not defined
obj.x = undefined
NaN example: NaN
Boolean(undefined): false
Boolean(null): false
Boolean(NaN): false
*/