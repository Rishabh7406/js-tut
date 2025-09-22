arr = [1, 5, 5, 6, 2, 4, 6, 8, 10];

function sumOfArray(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sum = sum + element;

    }
    return sum;
}

// console.log(sumOfArray(arr))
// arr = [1, 5, 5, 6, 2, 4, 6, 8, 10, 7, 6, 5];
// console.log(arr.reduce((acc, curr) => {
//     if (curr > acc) { //1 >-454654561
//         acc = curr;
//     }
//     return acc;
// }, -454654561))