// =====================
// 1. Callback version
// =====================
function greetCallback(name, callback) {
    console.log("Hello " + name);
    callback();
}

    greetCallback("Alice", () => {
        console.log("Callback done");
    });

// =====================
// 2. Promise version
// =====================
function greetPromise(name) {
    return new Promise((resolve) => {
        console.log("Hello " + name);
        resolve();
    });
}

greetPromise("Bob").then(() => {
    console.log("Promise done");
});

// =====================
// 3. Async/Await version
// =====================
async function greetAsync(name) {
    console.log("Hello " + name);
}

async function main() {
    await greetAsync("Charlie");
    console.log("Async/Await done");
}

main();
