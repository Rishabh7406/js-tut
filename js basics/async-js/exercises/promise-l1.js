const myPromise = new Promise((resolve, reject) => {
    // your code here
});

myPromise
    .then(result => console.log(result))
    .catch(err => console.error(err));


/*
 
const myPromise = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Success!"); // resolve after 1 second
}, 1000);
});

myPromise
.then(result => console.log(result))
.catch(err => console.error(err));
    
 
*/