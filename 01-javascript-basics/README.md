# Module 1: JavaScript Basics

**Sessions**: 1-4  
**Duration**: 4 sessions  
**Prerequisites**: Basic programming knowledge

## 📚 Learning Objectives

By the end of this module, students will be able to:

- Understand JavaScript variables, data types, and operators
- Work with functions, arrow functions, and higher-order functions
- Manipulate arrays and objects effectively
- Handle asynchronous programming with promises and async/await
- Apply closures and scope concepts

## 📁 Module Structure

```
01-javascript-basics/
├── 01-static-vs-dynamic.js          # Static vs Dynamic typing
├── 02-js-in-html.html               # JavaScript in HTML
├── 03-variables-datatypes-operators.js  # Variables and data types
├── 04-operators.js                  # Operators
├── 05-type-conversion.js            # Type conversion
├── 06-conditionals.js               # Conditional statements
├── 07-loops.js                      # Loops
├── 08-functions.js                  # Function basics
├── 09-arrow-vs-function.js          # Arrow functions vs regular functions
├── 10-iife-hof.js                   # IIFE and Higher-order functions
├── 11-strings.js                    # String methods
├── 12-escape-methods.js             # String escape methods
├── 13-string-extraction.js           # String extraction methods
├── 14-string-methods.js              # String methods
├── 15-arrays.js                     # Array basics
├── 16-add-elements.js                # Adding elements to arrays
├── 17-important-methods.js           # Important array methods
├── 18-splice-slice.js               # Array splice and slice
├── 19-callbacks.js                   # Callback functions
├── 20-forLoops.js                    # Different types of loops
├── 21-scope.js                       # Scope, hoisting, TDZ
├── array_intro.js                    # Array introduction
├── null-vs-undefined.js              # null vs undefined
├── operators.js                      # Operator examples
├── understanding_function_env.js     # Function environment
├── async-js/                        # Asynchronous JavaScript
│   ├── 01-promises.js               # Promises
│   ├── 02-promise-chaining.js      # Promise chaining
│   ├── 03-callback-vs-promise-vs-async.js  # Comparison
│   ├── 04-callback-hell.js          # Callback hell
│   ├── 05-promises-more.js          # More promise examples
│   ├── 06-promise-all.js            # Promise.all
│   ├── 06-promise-chaining.js       # Promise chaining
│   ├── 08-promise-race.js           # Promise.race
│   ├── 09-promise-all-vs-race.js    # Promise.all vs Promise.race
│   └── exercises/                   # Async exercises
├── exercises/                       # Module exercises
│   ├── 03-string-methods.js         # String method exercises
│   ├── 04-array/                    # Array exercises
│   ├── conversion.js                # Type conversion exercises
│   └── function_exercise.js         # Function exercises
└── external.js                      # External JavaScript file
```

## 🎯 Session Breakdown

### Session 1: JavaScript Fundamentals

- **Files**: `01-static-vs-dynamic.js`, `02-js-in-html.html`, `03-variables-datatypes-operators.js`
- **Topics**: Static vs dynamic typing, JavaScript in HTML, variables, data types
- **Exercises**: Basic variable declarations and type checking

### Session 2: Operators and Control Flow

- **Files**: `04-operators.js`, `05-type-conversion.js`, `06-conditionals.js`, `07-loops.js`
- **Topics**: Operators, type conversion, conditionals, loops
- **Exercises**: Calculator functions, conditional logic

### Session 3: Functions and Arrays

- **Files**: `08-functions.js`, `09-arrow-vs-function.js`, `10-iife-hof.js`, `15-arrays.js`
- **Topics**: Functions, arrow functions, IIFE, higher-order functions, arrays
- **Exercises**: Function creation, array manipulation

### Session 4: Advanced Concepts

- **Files**: `11-strings.js` through `21-scope.js`, `async-js/` folder
- **Topics**: String methods, array methods, scope, hoisting, async programming
- **Exercises**: String processing, array operations, async functions

## 🚀 Key Concepts

### Variables and Data Types

```javascript
let name = "Alice"; // string
let age = 25; // number
let isActive = true; // boolean
let data = null; // null
let value; // undefined
```

### Functions

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;

// Higher-order function
function processArray(arr, callback) {
  return arr.map(callback);
}
```

### Arrays and Objects

```javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((n) => n * 2);

let person = {
  name: "Alice",
  age: 25,
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};
```

### Async Programming

```javascript
// Promise
fetch("/api/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Async/Await
async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

## 📝 Exercises

### Exercise 1: String Processing

Create a function that takes a string and returns:

- The number of words
- The longest word
- Words that start with a specific letter

### Exercise 2: Array Operations

Given an array of numbers, create functions to:

- Find the sum of all numbers
- Find the average
- Find the maximum and minimum values
- Filter even and odd numbers

### Exercise 3: Object Manipulation

Create a function that processes an array of user objects:

- Filter users by age
- Sort users by name
- Add a new property to each user

## 🎯 Assessment Criteria

### Beginner Level

- [ ] Can declare variables using let, const, var
- [ ] Can create simple functions
- [ ] Can work with basic array methods
- [ ] Can use conditional statements and loops

### Intermediate Level

- [ ] Can use arrow functions effectively
- [ ] Can work with higher-order functions
- [ ] Can manipulate objects and arrays
- [ ] Can handle basic async operations

### Advanced Level

- [ ] Can implement closures and understand scope
- [ ] Can work with promises and async/await
- [ ] Can use advanced array methods
- [ ] Can debug JavaScript code effectively

## 🔗 Next Module

After completing this module, students will move to:
**Module 2: Node.js Core Modules** - Learning about Node.js file system, HTTP modules, and server-side JavaScript.

## 📚 Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

---

**Happy Coding! 🚀**
