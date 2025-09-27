function greet(name, action) {
    console.log("hello", name);
    action();
}


function cb() {
    console.log("some function cb")
}
greet("yogesh", cb)
// cb();