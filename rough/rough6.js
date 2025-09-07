function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    }
}

let inc = counter();
inc(); // ?
inc(); // ?
inc(); // ?
