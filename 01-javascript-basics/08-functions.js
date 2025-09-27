function greet(name = "Guest") {
    let msg = "Hello " + name; // local variable
    return msg;
}
console.log(greet("Rishabh"));
console.log(greet());
