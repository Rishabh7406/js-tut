// Case 1: Promise rejects immediately
const failPromise = new Promise((_, reject) => {
    reject("Step 1 failed");
});

failPromise
    .then(result => {
        console.log("This will NOT run:", result);
    })
    .catch(err => {
        console.log("Case 1 - Caught from rejected promise:", err);
    });


// // Case 2: Promise resolves, but error happens in .then()
// const successPromise = Promise.resolve("Step 1 done");

// successPromise
//     .then(result => {
//         console.log("Case 2 - First then:", result);
//         throw "Error in Step 2";  // error inside then
//     })
//     .then(result => {
//         console.log("This will NOT run:", result);
//     })
//     .catch(err => {
//         console.log("Case 2 - Caught from thrown error:", err);
//     });


// // Case 3: Both success and then chaining
// const chainPromise = Promise.resolve("Step A done");

// chainPromise
//     .then(result => {
//         console.log("Case 3 - First then:", result);
//         return "Step B done"; // success flows through
//     })
//     .then(result => {
//         console.log("Case 3 - Second then:", result);
//         return "Step C done";
//     })
//     .then(result => {
//         console.log("Case 3 - Third then:", result);
//     })
//     .catch(err => {
//         console.log("Case 3 - Catch (if any error):", err);
//     });
