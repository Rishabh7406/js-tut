function showMessage(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

function someFunc() {
    console.log("callback function hu")
}
showMessage(someFunc)