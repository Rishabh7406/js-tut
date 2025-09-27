//Promise.race runs multiple promises in parallel 
// but returns the result 
// of the first one to settle (resolve or reject).

function fast() {
    return new Promise(res => setTimeout(() => res("⚡ Fast"), 1000));
}
function slow() {
    return new Promise(res => setTimeout(() => res("🐢 Slow"), 3000));
}

Promise.race([fast(), slow()])
    .then(result => console.log("Winner:", result));
// Winner: ⚡ Fast (after ~1s)
