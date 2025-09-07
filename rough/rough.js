function greet(name, callback) {
    console.log("hello" + name);
    callback();
}

function cb() {
    console.log("cb function hu");
}

greet("anshul", cb);